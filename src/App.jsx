import { useState, useEffect } from "react";
import famosos from "./data/famosos.json";
import { YEAR_FACTS } from "./data/yearFacts";
import { getMentorMessage } from "./data/mentorMessages";
import { FIXED_DATES, MOVABLE_DATES_2026, getEspiritualidadeDoDia, TRADICAO_EMOJI } from "./data/espiritualidade";
import { HOROSCOPO_GREGO, ANIMAIS_CHINESES, RASHIS_VEDICOS, getAnimalChines, getRashi, getHebrewDate,
  getFraseGrega, getFraseChinesa, getFraseVedica } from "./data/horoscopos";
import { getHistoriaDoDia, QUIZ_QUESTIONS, HUMOR_FRASES, getQuizByLevel } from "./data/conteudo";
import { getTodosCalendarios } from "./data/multiCalendar";
import { AMOR_INTRO, AMOR_QUESTIONS, AMOR_INFO, POLITICO_INTRO, POLITICO_QUESTIONS, POLITICO_INFO,
  PERSONALIDADE_INTRO, PERSONALIDADE_QUESTIONS, PERSONALIDADE_INFO, QI_INTRO, QI_QUESTIONS, QI_LEVELS,
  PROFISSIONAL_INTRO, PROFISSIONAL_QUESTIONS, PROFISSIONAL_INFO } from "./data/testes";
import { HUMOR_EXPANDIDO, HUMOR_FRASES_EXPANDIDAS } from "./data/humor";
import { getNumerologia } from "./data/numerologia";
import { getFaseLua } from "./data/lua";
import { getVersiculoDoDia, TRADICOES_DISPONIVEIS } from "./data/versiculos";
import { getSantoDoDiaCompleto } from "./data/santos";
import { TRADICAO_QUESTIONS, TRADICAO_INFO, TRADICAO_TESTE_INTRO } from "./data/testeTradicao";

// ============================================================
// UTILS
// ============================================================
const today   = new Date();
const DAY     = today.getDate();
const MONTH   = today.getMonth() + 1;
const YEAR    = today.getFullYear();
const DOW     = today.getDay();
const DOY     = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
const MONTHS  = ["","Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const DAYS_PT = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];

// Embaralhamento usando Fisher-Yates (não muta o array original)
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Mensagens genéricas do dia (rotativas)
const MENSAGENS_DIA = [
  "Cada amanhecer traz uma chance que ontem não existia. Use bem o seu hoje.",
  "Você é o livro mais valioso que vai ler na vida. Comece a leitura agora.",
  "A vida não responde quem grita mais alto. Responde quem persiste com clareza.",
  "Tudo o que você precisa hoje já vive dentro de você. Confie no processo.",
  "Pequenos passos diários constroem grandes destinos. Dê o seu hoje.",
  "Não compare seu capítulo 3 com o capítulo 20 de outra pessoa.",
  "Você não precisa estar pronto. Só precisa estar disposto a começar.",
  "A coragem não é ausência de medo. É agir apesar dele.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Sua vida é sua responsabilidade, sua jornada e sua arte. Pinte com cuidado.",
  "Hoje é o melhor dia para se tornar a pessoa que você sempre quis ser.",
  "Não espere por inspiração. Comece — ela vai te encontrar trabalhando.",
  "A vida muda quando você muda. Tudo começa em você.",
  "Você não está atrasado. Está exatamente onde precisa estar para o próximo passo.",
  "O presente é um presente. Por isso se chama presente.",
  "Confiar em si mesmo é o primeiro passo de qualquer grande jornada.",
  "Você atrai aquilo que você é, não aquilo que você quer.",
  "O dia mais importante de sua vida é hoje. Faça dele algo bonito.",
  "A felicidade não é destino. É forma de viajar.",
  "Aquilo que você procura também está procurando você.",
  "Nada nasce pronto. Tudo se torna.",
  "Sua intuição é mais sábia que mil opiniões. Escute-a.",
  "Coragem não é não ter medo. É medo com fé.",
  "Aceitar o que é, é o primeiro passo para transformar.",
  "Você é único. Compare-se apenas com a versão de ontem de si.",
  "Gratidão multiplica. Reclamação divide. Escolha hoje.",
  "Cada respiração é uma chance de recomeçar.",
  "Não existe atalho para lugares que valem a pena.",
  "O que você planta hoje, colhe amanhã. Plante com sabedoria.",
  "A vida acontece pra você, não com você.",
  "Hoje você é a soma de todas as suas escolhas. Amanhã também será.",
];

const getMensagemDoDia = () => MENSAGENS_DIA[DOY % MENSAGENS_DIA.length];

// ============================================================
// GERADOR DE IMAGEM COMPARTILHÁVEL (Canvas 1080x1920)
// ============================================================
const W = 1080, H = 1920;

// Carrega config visual por tipo
const SHARE_THEMES = {
  temperamento: { bg1:"#0A1F1A", bg2:"#000", accent:"#fff", overlay:"#10B98120" },
  raioX:        { bg1:"#0A1F1A", bg2:"#1a3a2a", accent:"#34D399", overlay:"#10B98115" },
  versiculo:    { bg1:"#1E3A8A", bg2:"#0F172A", accent:"#FCD34D", overlay:"#FCD34D10" },
  historia:     { bg1:"#451A03", bg2:"#1C1917", accent:"#F59E0B", overlay:"#F59E0B10" },
  mundo:        { bg1:"#0F172A", bg2:"#000", accent:"#34D399", overlay:"#10B98115" },
  horoscopo:    { bg1:"#4C1D95", bg2:"#1E1B4B", accent:"#C4B5FD", overlay:"#8B5CF610" },
  numerologia:  { bg1:"#0A1F1A", bg2:"#064E3B", accent:"#34D399", overlay:"#10B98120" },
};

// Helper: quebra texto em múltiplas linhas
const wrapText = (ctx, text, maxWidth) => {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    const test = current ? current + ' ' + word : word;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
};

// Helper: desenha texto centralizado com quebra automática
const drawWrappedText = (ctx, text, x, y, maxWidth, lineHeight, color, font, align="center") => {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textAlign = align;
  const lines = wrapText(ctx, text, maxWidth);
  lines.forEach((line, i) => ctx.fillText(line, x, y + i * lineHeight));
  return y + lines.length * lineHeight;
};

// Helper: desenha estrelas decorativas
const drawStars = (ctx, count = 40) => {
  ctx.fillStyle = "rgba(255,255,255,0.15)";
  for (let i = 0; i < count; i++) {
    const x = Math.random() * W;
    const y = Math.random() * H;
    const r = Math.random() * 2 + 0.5;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
};

// Helper: desenha logo KomparAI no topo
const drawLogo = (ctx, accent="#10B981") => {
  ctx.fillStyle = "#fff";
  ctx.font = "bold 48px 'Sora', sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("🪞 Kompar", 60, 100);
  ctx.fillStyle = accent;
  ctx.fillText("AI", 60 + ctx.measureText("🪞 Kompar").width, 100);
};

// Helper: desenha footer com CTA
const drawFooter = (ctx, accent="#10B981", customMsg=null) => {
  // Linha decorativa
  ctx.strokeStyle = accent + "60";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(120, H - 280);
  ctx.lineTo(W - 120, H - 280);
  ctx.stroke();

  // CTA
  ctx.fillStyle = accent;
  ctx.font = "bold 38px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(customMsg || "Descubra o seu →", W/2, H - 200);

  ctx.fillStyle = "#fff";
  ctx.font = "bold 56px 'Sora', sans-serif";
  ctx.fillText("🌐 komparai.com", W/2, H - 120);

  ctx.fillStyle = "rgba(255,255,255,0.6)";
  ctx.font = "32px 'Sora', sans-serif";
  ctx.fillText("Compare com 365 famosos", W/2, H - 60);
};

// Helper: cria gradiente de fundo
const drawBackground = (ctx, theme) => {
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, theme.bg1);
  grad.addColorStop(1, theme.bg2);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Glow decorativo
  const glow = ctx.createRadialGradient(W/2, H/2, 100, W/2, H/2, 800);
  glow.addColorStop(0, theme.overlay);
  glow.addColorStop(1, "transparent");
  ctx.fillStyle = glow;
  ctx.fillRect(0, 0, W, H);
};

// ============================================================
// TEMPLATES DE IMAGEM
// ============================================================

// 1. TEMPERAMENTO
const renderTemperamento = (ctx, { nome, resultado, emoji, mentor, desc, cor }) => {
  const theme = { bg1: cor, bg2: "#0A1F1A", accent: "#fff", overlay: "#ffffff15" };
  drawBackground(ctx, theme);
  drawStars(ctx, 30);
  drawLogo(ctx, "#fff");

  // Emoji gigante
  ctx.font = "300px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(emoji, W/2, 540);

  // Nome
  ctx.fillStyle = "rgba(255,255,255,0.7)";
  ctx.font = "bold 50px 'Sora', sans-serif";
  ctx.fillText(`${nome.toUpperCase()} É`, W/2, 720);

  // Resultado
  ctx.fillStyle = "#fff";
  ctx.font = "900 140px 'Sora', sans-serif";
  ctx.fillText(resultado.toUpperCase(), W/2, 880);

  // Mentor
  if (mentor) {
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "italic 44px 'Sora', sans-serif";
    ctx.fillText(`Como ${mentor}`, W/2, 970);
  }

  // Caixa com descrição
  if (desc) {
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.roundRect ? (() => {
      ctx.beginPath();
      ctx.roundRect(120, 1080, W-240, 280, 30);
      ctx.fill();
    })() : ctx.fillRect(120, 1080, W-240, 280);

    ctx.fillStyle = "#fff";
    ctx.font = "italic 42px 'Sora', sans-serif";
    drawWrappedText(ctx, `"${desc}"`, W/2, 1180, W-320, 60, "#fff", "italic 42px 'Sora', sans-serif");
  }

  drawFooter(ctx, "#fff", "Descubra o seu temperamento →");
};

// 2. RAIO X
const renderRaioX = (ctx, { nome, resultados }) => {
  const theme = SHARE_THEMES.raioX;
  drawBackground(ctx, theme);
  drawStars(ctx, 40);
  drawLogo(ctx, theme.accent);

  // Título
  ctx.fillStyle = "#fff";
  ctx.font = "bold 60px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("☢️", W/2, 320);

  ctx.font = "bold 90px 'Sora', sans-serif";
  ctx.fillText(`Raio X de ${nome}`, W/2, 440);

  ctx.fillStyle = theme.accent;
  ctx.font = "36px 'Sora', sans-serif";
  ctx.fillText("Quem você é, em poucas palavras", W/2, 510);

  // Lista de resultados (cards visuais)
  let yPos = 620;
  resultados.slice(0, 6).forEach((r) => {
    // Card de fundo
    ctx.fillStyle = "rgba(255,255,255,0.08)";
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(120, yPos, W-240, 140, 24);
    else ctx.rect(120, yPos, W-240, 140);
    ctx.fill();

    // Emoji
    ctx.font = "70px 'Sora', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(r.emoji, 160, yPos + 95);

    // Label
    ctx.fillStyle = "rgba(255,255,255,0.6)";
    ctx.font = "32px 'Sora', sans-serif";
    ctx.fillText(r.label, 280, yPos + 60);

    // Valor
    ctx.fillStyle = "#fff";
    ctx.font = "bold 52px 'Sora', sans-serif";
    ctx.fillText(r.valor, 280, yPos + 115);

    yPos += 160;
  });

  drawFooter(ctx, theme.accent, "Faça o seu Raio X →");
};

// 3. VERSÍCULO
const renderVersiculo = (ctx, { texto, ref, tradicao, dataStr }) => {
  const theme = SHARE_THEMES.versiculo;
  drawBackground(ctx, theme);
  drawStars(ctx, 60);
  drawLogo(ctx, theme.accent);

  // Data
  ctx.fillStyle = theme.accent;
  ctx.font = "bold 36px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(dataStr || "Versículo do Dia", W/2, 280);

  // Ícone
  ctx.font = "180px 'Sora', sans-serif";
  ctx.fillText("📖", W/2, 480);

  // Tradição
  ctx.fillStyle = "rgba(255,255,255,0.6)";
  ctx.font = "32px 'Sora', sans-serif";
  ctx.fillText(tradicao || "Universal", W/2, 540);

  // Versículo (texto principal)
  ctx.font = "italic bold 56px 'Sora', sans-serif";
  drawWrappedText(ctx, `"${texto}"`, W/2, 720, W-200, 80, "#fff", "italic bold 56px 'Sora', sans-serif");

  // Referência
  ctx.fillStyle = theme.accent;
  ctx.font = "bold 48px 'Sora', sans-serif";
  ctx.fillText(`— ${ref}`, W/2, 1400);

  drawFooter(ctx, theme.accent, "Versículo do dia →");
};

// 4. HISTÓRIA DO DIA
const renderHistoria = (ctx, { texto, dataStr }) => {
  const theme = SHARE_THEMES.historia;
  drawBackground(ctx, theme);
  drawStars(ctx, 20);
  drawLogo(ctx, theme.accent);

  // Ícone
  ctx.font = "200px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("📜", W/2, 450);

  // Título
  ctx.fillStyle = theme.accent;
  ctx.font = "bold 48px 'Sora', sans-serif";
  ctx.fillText("Neste dia na história", W/2, 580);

  // Data
  ctx.fillStyle = "#fff";
  ctx.font = "bold 64px 'Sora', sans-serif";
  ctx.fillText(dataStr, W/2, 680);

  // Texto histórico
  ctx.font = "italic 50px 'Sora', sans-serif";
  drawWrappedText(ctx, texto, W/2, 850, W-160, 72, "#fff", "italic 50px 'Sora', sans-serif");

  drawFooter(ctx, theme.accent, "Mais histórias em →");
};

// 5. HOJE NO MUNDO
const renderMundo = (ctx, { dataStr, calendarios }) => {
  const theme = SHARE_THEMES.mundo;
  drawBackground(ctx, theme);
  drawStars(ctx, 80);
  drawLogo(ctx, theme.accent);

  // Globo
  ctx.font = "200px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("🌍", W/2, 400);

  // Título
  ctx.fillStyle = "#fff";
  ctx.font = "bold 64px 'Sora', sans-serif";
  ctx.fillText("Em que ano estamos?", W/2, 530);

  ctx.fillStyle = theme.accent;
  ctx.font = "36px 'Sora', sans-serif";
  ctx.fillText(dataStr, W/2, 590);

  // Grid de calendários (até 6)
  let yPos = 680;
  calendarios.slice(0, 6).forEach((cal) => {
    // Card
    ctx.fillStyle = "rgba(255,255,255,0.06)";
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(120, yPos, W-240, 130, 20);
    else ctx.rect(120, yPos, W-240, 130);
    ctx.fill();

    // Emoji
    ctx.font = "60px 'Sora', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(cal.emoji, 160, yPos + 90);

    // Nome
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.font = "30px 'Sora', sans-serif";
    ctx.fillText(cal.nome, 270, yPos + 55);

    // Ano
    ctx.fillStyle = theme.accent;
    ctx.font = "bold 48px 'Sora', sans-serif";
    ctx.fillText(cal.formatado, 270, yPos + 105);

    yPos += 145;
  });

  drawFooter(ctx, theme.accent, "Veja os 14 calendários em →");
};

// 6. HORÓSCOPO
const renderHoroscopo = (ctx, { nome, signo, emoji, sistema, mensagem }) => {
  const theme = SHARE_THEMES.horoscopo;
  drawBackground(ctx, theme);
  drawStars(ctx, 80);
  drawLogo(ctx, theme.accent);

  // Emoji do signo (gigante)
  ctx.font = "300px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(emoji, W/2, 520);

  // Nome (se houver)
  if (nome) {
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.font = "bold 42px 'Sora', sans-serif";
    ctx.fillText(nome.toUpperCase(), W/2, 640);
  }

  // Signo
  ctx.fillStyle = "#fff";
  ctx.font = "900 110px 'Sora', sans-serif";
  ctx.fillText(signo, W/2, 770);

  // Sistema
  ctx.fillStyle = theme.accent;
  ctx.font = "italic 36px 'Sora', sans-serif";
  ctx.fillText(sistema, W/2, 830);

  // Mensagem
  if (mensagem) {
    ctx.fillStyle = "rgba(0,0,0,0.3)";
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(100, 920, W-200, 480, 30);
    else ctx.rect(100, 920, W-200, 480);
    ctx.fill();

    drawWrappedText(ctx, `"${mensagem}"`, W/2, 1020, W-260, 64, "#fff", "italic 42px 'Sora', sans-serif");
  }

  drawFooter(ctx, theme.accent, "Seu astral em →");
};

// 7. NUMEROLOGIA
const renderNumerologia = (ctx, { nome, numero, arquetipo, essencia }) => {
  const theme = SHARE_THEMES.numerologia;
  drawBackground(ctx, theme);
  drawStars(ctx, 50);
  drawLogo(ctx, theme.accent);

  // Número gigante decorativo
  ctx.fillStyle = "rgba(52, 211, 153, 0.08)";
  ctx.font = "900 800px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(numero, W/2, 750);

  // Título
  ctx.fillStyle = theme.accent;
  ctx.font = "bold 42px 'Sora', sans-serif";
  ctx.fillText("🔢 NUMEROLOGIA", W/2, 280);

  // Nome
  if (nome) {
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.font = "bold 48px 'Sora', sans-serif";
    ctx.fillText(nome.toUpperCase(), W/2, 380);
  }

  // Número (em destaque)
  ctx.fillStyle = "#fff";
  ctx.font = "900 240px 'Sora', sans-serif";
  ctx.fillText(numero, W/2, 720);

  // Arquétipo
  ctx.fillStyle = theme.accent;
  ctx.font = "bold 72px 'Sora', sans-serif";
  ctx.fillText(arquetipo, W/2, 850);

  // Essência
  if (essencia) {
    ctx.font = "italic 44px 'Sora', sans-serif";
    drawWrappedText(ctx, `"${essencia}"`, W/2, 1020, W-160, 62, "#fff", "italic 44px 'Sora', sans-serif");
  }

  drawFooter(ctx, theme.accent, "Sua numerologia em →");
};

// ============================================================
// FUNÇÃO PRINCIPAL: gera imagem e compartilha
// ============================================================
const generateShareImage = async (type, data) => {
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Polyfill para roundRect em navegadores antigos
  if (!ctx.roundRect) {
    ctx.roundRect = function(x, y, w, h, r) {
      this.beginPath();
      this.moveTo(x + r, y);
      this.arcTo(x + w, y, x + w, y + h, r);
      this.arcTo(x + w, y + h, x, y + h, r);
      this.arcTo(x, y + h, x, y, r);
      this.arcTo(x, y, x + w, y, r);
      this.closePath();
      return this;
    };
  }

  // Renderiza conforme tipo
  switch (type) {
    case 'temperamento':  renderTemperamento(ctx, data); break;
    case 'raioX':         renderRaioX(ctx, data); break;
    case 'versiculo':     renderVersiculo(ctx, data); break;
    case 'historia':      renderHistoria(ctx, data); break;
    case 'mundo':         renderMundo(ctx, data); break;
    case 'horoscopo':     renderHoroscopo(ctx, data); break;
    case 'numerologia':   renderNumerologia(ctx, data); break;
    default: return null;
  }

  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), 'image/png', 1.0);
  });
};

// ============================================================
// COMPARTILHAR (com fallbacks)
// ============================================================
const shareContent = async (type, data, textMessage) => {
  const fullText = `${textMessage}\n\n🌐 komparai.com`;
  const blob = await generateShareImage(type, data);
  if (!blob) {
    // Fallback: só texto
    if (navigator.share) {
      try { await navigator.share({ title: "KomparAI", text: fullText, url: "https://komparai.com" }); } catch (e) {}
    } else {
      navigator.clipboard?.writeText(fullText + "\nhttps://komparai.com");
      alert("Link copiado!");
    }
    return;
  }

  const file = new File([blob], `komparai-${type}.png`, { type: 'image/png' });

  // Tenta Web Share API com arquivo
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        files: [file],
        title: "KomparAI",
        text: fullText,
      });
      return;
    } catch (e) {
      if (e.name === 'AbortError') return;
    }
  }

  // Fallback: baixa a imagem
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `komparai-${type}.png`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

// Botão flutuante compartilhar
function ShareBtn({ onClick, style }) {
  return (
    <button onClick={(e)=>{ e.stopPropagation(); onClick(); }}
      style={{
        position:"absolute", top:14, right:14,
        width:38, height:38, borderRadius:"50%",
        border:"none", background:"rgba(255,255,255,0.95)",
        boxShadow:"0 4px 12px rgba(0,0,0,0.15)",
        cursor:"pointer", fontSize:18,
        display:"flex", alignItems:"center", justifyContent:"center",
        zIndex:10,
        ...style,
      }} aria-label="Compartilhar">📤</button>
  );
}


const STORAGE_KEY = "komparai_profile_v2";
const loadProfile = () => { try { const r = localStorage.getItem(STORAGE_KEY); return r ? JSON.parse(r) : null; } catch { return null; } };
const saveProfileLS = (p) => { try { if (p) localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); else localStorage.removeItem(STORAGE_KEY); } catch {} };

const getSign = (d, m) => {
  if (!d || !m) return null;
  if ((m===3&&d>=21)||(m===4&&d<=19)) return "Áries";
  if ((m===4&&d>=20)||(m===5&&d<=20)) return "Touro";
  if ((m===5&&d>=21)||(m===6&&d<=20)) return "Gêmeos";
  if ((m===6&&d>=21)||(m===7&&d<=22)) return "Câncer";
  if ((m===7&&d>=23)||(m===8&&d<=22)) return "Leão";
  if ((m===8&&d>=23)||(m===9&&d<=22)) return "Virgem";
  if ((m===9&&d>=23)||(m===10&&d<=22)) return "Libra";
  if ((m===10&&d>=23)||(m===11&&d<=21)) return "Escorpião";
  if ((m===11&&d>=22)||(m===12&&d<=21)) return "Sagitário";
  if ((m===12&&d>=22)||(m===1&&d<=19)) return "Capricórnio";
  if ((m===1&&d>=20)||(m===2&&d<=18)) return "Aquário";
  return "Peixes";
};
const SIGN_EMOJI = {"Áries":"♈","Touro":"♉","Gêmeos":"♊","Câncer":"♋","Leão":"♌","Virgem":"♍","Libra":"♎","Escorpião":"♏","Sagitário":"♐","Capricórnio":"♑","Aquário":"♒","Peixes":"♓"};
const TRADICAO_COLORS = {"Católica":"#1E40AF","Evangélica":"#0891B2","Judaica":"#7C3AED","Islâmica":"#059669","Budista":"#F59E0B","Hindu":"#DB2777","Espírita":"#8B5CF6","Universal":"#10B981"};

const calcVida = (d, m, y) => {
  if (!d || !m || !y || y < 1900) return null;
  const born = new Date(y, m-1, d);
  const now = new Date();
  if (born > now) return null;
  const totalDias = Math.floor((now - born)/86400000);
  let anos = now.getFullYear() - born.getFullYear();
  let meses = now.getMonth() - born.getMonth();
  let dias = now.getDate() - born.getDate();
  if (dias < 0) { meses--; dias += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
  if (meses < 0) { anos--; meses += 12; }
  let proxAniv = new Date(now.getFullYear(), m-1, d);
  if (proxAniv <= now) proxAniv = new Date(now.getFullYear()+1, m-1, d);
  const diasParaAniv = Math.ceil((proxAniv - now)/86400000);
  return { anos, meses, dias, totalDias, diaSemNasc: DAYS_PT[born.getDay()], diasParaAniv };
};

const sanitizeInt = (v) => { if (v==="" || v==null) return ""; const n = parseInt(v); return isNaN(n)||n<0 ? "" : n; };
const clampInt = (v, min, max) => { if (v==="") return ""; const n = parseInt(v); if (isNaN(n)) return ""; if (n<min) return min; if (n>max) return max; return n; };

const getFamousOfDay = () => {
  const match = famosos.filter(c => c.day === DAY && c.month === MONTH);
  if (match.length > 0) return match.sort((a,b) => b.popularity - a.popularity)[0];
  return famosos[(DAY * MONTH) % famosos.length];
};

const findMatches = (user) => {
  const userSign = user.birthDay && user.birthMonth ? getSign(user.birthDay, user.birthMonth) : null;
  const results = [];
  famosos.forEach(cel => {
    const hits = [];
    const celSign = getSign(cel.day, cel.month);
    const gBoost = user.gender && cel.gender === user.gender ? 1 : 0;

    // Flags de priorização (usadas no sort)
    let isBirthdayMatch = false;
    let heightDiff = 9999;
    let weightDiff = 9999;
    let sameHeight = false;
    let sameWeight = false;

    if (user.birthDay && user.birthMonth && cel.day===user.birthDay && cel.month===user.birthMonth) {
      hits.push({icon:"🎂",text:`Vocês fazem aniversário no mesmo dia — ${user.birthDay} de ${MONTHS[user.birthMonth]}!`,weight:100+gBoost});
      isBirthdayMatch = true;
    } else if (user.birthMonth && cel.month===user.birthMonth) {
      hits.push({icon:"🗓️",text:`Vocês nasceram no mesmo mês — ${MONTHS[user.birthMonth]}!`,weight:4+gBoost});
    }
    if (user.birthYear && cel.born===user.birthYear)
      hits.push({icon:"🎉",text:`Mesma geração! Ambos nascidos em ${user.birthYear}.`,weight:5+gBoost});
    if (userSign && celSign && userSign===celSign)
      hits.push({icon:SIGN_EMOJI[userSign],text:`Vocês têm o mesmo signo — ${userSign}!`,weight:6+gBoost});
    if (user.height && cel.height) {
      heightDiff = Math.abs(user.height - cel.height);
      if (heightDiff===0) {
        hits.push({icon:"📏",text:`Mesma altura exata — ${cel.height}cm!`,weight:50+gBoost});
        sameHeight = true;
      } else if (heightDiff<=2) {
        hits.push({icon:"📏",text:`Sua altura é quase igual à de ${cel.name} (${cel.height}cm).`,weight:15+gBoost});
      } else if (heightDiff<=5) {
        hits.push({icon:"📏",text:`Altura próxima: ${cel.name} tem ${cel.height}cm.`,weight:5+gBoost});
      }
    }
    if (user.weight && cel.weight) {
      weightDiff = Math.abs(user.weight - cel.weight);
      if (weightDiff===0) {
        hits.push({icon:"⚖️",text:`Mesmo peso exato — ${cel.weight}kg!`,weight:45+gBoost});
        sameWeight = true;
      } else if (weightDiff<=3) {
        hits.push({icon:"⚖️",text:`Seu peso é quase igual ao de ${cel.name} (${cel.weight}kg).`,weight:12+gBoost});
      } else if (weightDiff<=7) {
        hits.push({icon:"⚖️",text:`Peso próximo: ${cel.name} pesa ${cel.weight}kg.`,weight:4+gBoost});
      }
    }
    if (user.gender && cel.temperamento && user.temperamento && cel.temperamento === user.temperamento)
      hits.push({icon:"🧬",text:`Mesmo temperamento — ${cel.temperamento}!`,weight:3+gBoost});

    if (hits.length > 0) {
      const score = hits.reduce((s,h)=>s+h.weight,0);
      results.push({ cel, hits, score, isBirthdayMatch, sameHeight, sameWeight, heightDiff, weightDiff });
    }
  });

  // Ordenação multi-nível:
  // 1º) Aniversário no mesmo dia (sempre topo)
  // 2º) Mesma altura E mesmo peso (exato)
  // 3º) Mesma altura OU mesmo peso (exato)
  // 4º) Por proximidade combinada de altura+peso
  // 5º) Por score total (desempate)
  return results.sort((a,b) => {
    if (a.isBirthdayMatch !== b.isBirthdayMatch) return b.isBirthdayMatch - a.isBirthdayMatch;
    const aExact = (a.sameHeight?1:0) + (a.sameWeight?1:0);
    const bExact = (b.sameHeight?1:0) + (b.sameWeight?1:0);
    if (aExact !== bExact) return bExact - aExact;
    const aProx = a.heightDiff + a.weightDiff;
    const bProx = b.heightDiff + b.weightDiff;
    if (aProx !== bProx) return aProx - bProx;
    return b.score - a.score;
  });
};

// ============================================================
// COMPONENTES BASE
// ============================================================
const Logo = ({size=22}) => (
  <span style={{fontSize:size,fontWeight:900,letterSpacing:-1,lineHeight:1}}>
    <span style={{color:"#0A1F1A"}}>Kompar</span><span style={{color:"#10B981",fontStyle:"italic"}}>AI</span>
  </span>
);
const Card = ({children,style={},onClick}) => (
  <div onClick={onClick} style={{background:"#fff",borderRadius:20,padding:"18px",boxShadow:"0 2px 8px #0000000a",marginBottom:14,cursor:onClick?"pointer":"default",...style}}>{children}</div>
);
const Btn = ({label,onClick,ghost=false,disabled=false,small=false}) => (
  <button onClick={onClick} disabled={disabled} style={{width:"100%",padding:small?"11px":"15px",
    background:disabled?"#F3F4F6":ghost?"transparent":"#10B981",
    border:ghost?"1.5px solid #D1D5DB":"none",borderRadius:14,
    color:disabled?"#9CA3AF":ghost?"#6B7280":"#fff",
    fontSize:small?13:14,fontWeight:700,cursor:disabled?"not-allowed":"pointer",
    fontFamily:"inherit",boxShadow:ghost||disabled?"none":"0 4px 12px #10B98130"}}>{label}</button>
);
const Label = ({children}) => <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:6}}>{children}</div>;

function Toast({message,type="success",onClose}) {
  useEffect(() => { if (message) { const t = setTimeout(onClose, 2400); return () => clearTimeout(t); }}, [message, onClose]);
  if (!message) return null;
  const bg = type==="error"?"#DC2626":"#10B981";
  return <div style={{position:"fixed",bottom:96,left:"50%",transform:"translateX(-50%)",
    background:bg,color:"#fff",padding:"12px 22px",borderRadius:30,fontSize:14,fontWeight:700,
    boxShadow:"0 8px 24px #00000033",zIndex:200,maxWidth:"90%"}}>{type==="error"?"⚠️":"✅"} {message}</div>;
}

// Share API helper
const shareCard = async (title, text) => {
  try {
    if (navigator.share) {
      await navigator.share({ title, text, url: window.location.href });
      return true;
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(`${title}\n\n${text}\n\n${window.location.href}`);
      return "copied";
    }
  } catch {}
  return false;
};

// ============================================================
// ONBOARDING
// ============================================================
function Onboarding({onDone}) {
  const [name,setName] = useState("");
  const [bd,setBd] = useState("");
  const [bm,setBm] = useState("");
  const [by,setBy] = useState("");
  const sign = bd && bm ? getSign(parseInt(bd), parseInt(bm)) : null;
  const canGo = name.trim().length >= 2 && bd && bm;

  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#10B981,#047857)",
      display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",
      padding:"48px 24px 52px",fontFamily:"'Sora',sans-serif",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:-80,right:-80,width:280,height:280,borderRadius:"50%",background:"#34D39928",filter:"blur(60px)"}}/>
      <div style={{position:"absolute",bottom:-100,left:-80,width:300,height:300,borderRadius:"50%",background:"#A7F3D030",filter:"blur(70px)"}}/>
      <div style={{zIndex:2,textAlign:"center"}}>
        <div style={{fontSize:60,fontWeight:900,letterSpacing:-2,lineHeight:1}}>
          <span style={{color:"#fff"}}>Kompar</span>
          <span style={{color:"#0A1F1A",fontStyle:"italic"}}>AI</span>
        </div>
        <div style={{marginTop:10,fontSize:11,color:"#D1FAE5",fontWeight:700,letterSpacing:2.5,textTransform:"uppercase"}}>
          Compare · Descubra · Compartilhe
        </div>
      </div>
      <div style={{fontSize:72,lineHeight:1,zIndex:2,
        animation:"mirrorFloat 3s ease-in-out infinite"}}>🪞</div>
      <style>{`@keyframes mirrorFloat{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-14px) rotate(3deg)}}`}</style>
      <div style={{width:"100%",maxWidth:360,zIndex:2}}>
        <div style={{background:"#fff",borderRadius:24,padding:"22px 20px",marginBottom:14,boxShadow:"0 16px 40px #00000022"}}>
          <div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",letterSpacing:-.5,marginBottom:4,lineHeight:1.25}}>
            Será que você tem algo em comum com algum famoso?
          </div>
          <div style={{fontSize:13,color:"#5A6B68",lineHeight:1.5,marginBottom:18}}>
            Dois dados rápidos para personalizar tudo.
          </div>
          <Label>Como podemos te chamar?</Label>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Seu nome ou apelido" autoFocus
            style={{width:"100%",background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:12,
              color:"#0A1F1A",fontSize:15,padding:"13px 15px",boxSizing:"border-box",fontWeight:500,marginBottom:14}}/>
          <Label>Data de nascimento</Label>
          <div style={{display:"flex",gap:6,marginBottom:sign?12:0,width:"100%"}}>
            <input type="number" inputMode="numeric" value={bd}
              onChange={e=>setBd(sanitizeInt(e.target.value))}
              onBlur={e=>setBd(clampInt(e.target.value,1,31))}
              placeholder="Dia"
              style={{flex:"0 0 22%",minWidth:0,background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:10,
                color:"#0A1F1A",fontSize:14,padding:"12px 8px",boxSizing:"border-box",fontWeight:500,WebkitAppearance:"none",textAlign:"center"}}/>
            <select value={bm} onChange={e=>setBm(e.target.value)}
              style={{flex:"1 1 auto",minWidth:0,background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:10,
                color:bm?"#0A1F1A":"#9CA3AF",fontSize:14,padding:"12px 6px",WebkitAppearance:"none",boxSizing:"border-box"}}>
              <option value="">Mês</option>
              {MONTHS.slice(1).map((m,i)=><option key={i+1} value={i+1}>{m}</option>)}
            </select>
            <input type="number" inputMode="numeric" value={by}
              onChange={e=>setBy(sanitizeInt(e.target.value))}
              onBlur={e=>setBy(clampInt(e.target.value,1900,new Date().getFullYear()))}
              placeholder="Ano"
              style={{flex:"0 0 28%",minWidth:0,background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:10,
                color:"#0A1F1A",fontSize:14,padding:"12px 8px",boxSizing:"border-box",fontWeight:500,WebkitAppearance:"none",textAlign:"center"}}/>
          </div>
          {sign && (
            <div style={{display:"flex",alignItems:"center",gap:10,background:"#F5F3FF",borderRadius:12,padding:"10px 14px",marginBottom:4}}>
              <span style={{fontSize:20}}>{SIGN_EMOJI[sign]}</span>
              <span style={{fontSize:13,fontWeight:700,color:"#7C3AED"}}>{sign}</span>
            </div>
          )}
        </div>
        <Btn label="Entrar no KomparAI →" onClick={()=>onDone({
          name:name.trim(),
          birthDay:parseInt(bd)||null,
          birthMonth:parseInt(bm)||null,
          birthYear:parseInt(by)||null,
          sign,
        })} disabled={!canGo}/>
        <div style={{textAlign:"center",marginTop:12,fontSize:10,color:"#A7F3D0",fontWeight:700,letterSpacing:2}}>
          365 FAMOSOS · 8 RELIGIÕES · 4 HORÓSCOPOS
        </div>
      </div>
    </div>
  );
}

// ============================================================
// TELA HOME
// ============================================================

function HomeScreen({profile, goCoincidence, goTest, goEspiritualidade}) {
  const [daysBack, setDaysBack] = useState(0);
  const [calIdx, setCalIdx] = useState(0);

  const viewDate = new Date(today);
  viewDate.setDate(viewDate.getDate() - daysBack);
  const vDay   = viewDate.getDate();
  const vMonth = viewDate.getMonth() + 1;
  const vYear  = viewDate.getFullYear();
  const vDOW   = viewDate.getDay();
  const vDOY   = Math.floor((viewDate - new Date(viewDate.getFullYear(), 0, 0)) / 86400000);

  const isToday = daysBack === 0;
  const calendarios = getTodosCalendarios(viewDate);
  const calAtual = calendarios[calIdx % calendarios.length];

  const famous  = (() => {
    const match = famosos.filter(c => c.day === vDay && c.month === vMonth);
    if (match.length > 0) return match.sort((a,b) => b.popularity - a.popularity)[0];
    return famosos[(vDay * vMonth) % famosos.length];
  })();
  const historiaDoDia = getHistoriaDoDia(vDay);
  const tradicao = profile?.tradicao || "Universal";
  const versiculo = getVersiculoDoDia(vDay, tradicao);
  const mensagemDia = getMensagemDoDia();

  // Auto-rotate carousel a cada 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCalIdx(i => (i + 1) % calendarios.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [calendarios.length]);

  return (
    <div>
      {/* Topo: Logo + Navegação de dias */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
        <Logo size={22}/>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <button onClick={()=>setDaysBack(d=>Math.min(d+1,10))}
            style={{width:30,height:30,borderRadius:"50%",border:"1.5px solid #E5E7EB",background:"#fff",
              fontSize:14,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#5A6B68"}}>◀</button>
          <div style={{fontSize:12,color:isToday?"#10B981":"#9CA3AF",fontWeight:700,minWidth:60,textAlign:"center"}}>
            {isToday ? "Hoje" : `-${daysBack}d`}
          </div>
          <button onClick={()=>setDaysBack(d=>Math.max(d-1,0))} disabled={isToday}
            style={{width:30,height:30,borderRadius:"50%",border:"1.5px solid #E5E7EB",
              background:isToday?"#F9FAFB":"#fff",fontSize:14,cursor:isToday?"not-allowed":"pointer",
              display:"flex",alignItems:"center",justifyContent:"center",color:isToday?"#D1D5DB":"#5A6B68"}}>▶</button>
        </div>
      </div>

      {!isToday && (
        <div style={{background:"#FFF7ED",borderRadius:12,padding:"10px 14px",marginBottom:12,
          fontSize:12,color:"#92400E",fontWeight:600}}>
          📅 Exibindo: {DAYS_PT[vDOW]}, {vDay} de {MONTHS[vMonth]} de {vYear}
        </div>
      )}

      {/* 1. HOJE NO MUNDO — Carrossel rotativo */}
      <div style={{marginBottom:18}}>
        <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>
          🌍 Hoje no Mundo
        </div>
        <Card style={{background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",color:"#fff",marginBottom:0,position:"relative",overflow:"hidden",minHeight:90}}>
          <ShareBtn onClick={()=>shareContent("mundo", {
            dataStr: `${vDay} de ${MONTHS[vMonth]} de ${vYear}`,
            calendarios: calendarios.slice(0, 6),
          }, `🌍 Em que ano estamos ao redor do mundo?\n\n${calendarios.slice(0,5).map(c=>`${c.emoji} ${c.nome}: ${c.formatado}`).join("\n")}`)}/>
          <div style={{display:"flex",alignItems:"center",gap:14}}>
            <div style={{fontSize:36,flexShrink:0}}>{calAtual.emoji}</div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontSize:11,color:"#34D399",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:2}}>
                {calAtual.nome}
              </div>
              <div style={{fontSize:18,fontWeight:800,color:"#fff",lineHeight:1.2,wordBreak:"break-word"}}>
                {calAtual.formatado}
              </div>
            </div>
          </div>
        </Card>
        <div style={{fontSize:13,color:"#5A6B68",lineHeight:1.55,marginTop:10,padding:"0 4px",fontStyle:"italic"}}>
          {calAtual.curiosidade}
        </div>
        {/* Dots */}
        <div style={{display:"flex",justifyContent:"center",gap:5,marginTop:12,flexWrap:"wrap"}}>
          {calendarios.map((_, i) => (
            <button key={i} onClick={()=>setCalIdx(i)} style={{
              width: i === calIdx ? 18 : 6, height: 6,
              borderRadius: 3, border: "none",
              background: i === calIdx ? "#10B981" : "#E5E7EB",
              cursor:"pointer", transition:"all .3s", padding: 0,
            }}/>
          ))}
        </div>
      </div>

      {/* 2. HISTÓRIA DO DIA */}
      <Card style={{position:"relative"}}>
        <ShareBtn onClick={()=>shareContent("historia", {
          texto: historiaDoDia.historia,
          dataStr: `${vDay} de ${MONTHS[vMonth]}`,
        }, `📜 ${historiaDoDia.titulo} — ${historiaDoDia.famoso}\n${vDay} de ${MONTHS[vMonth]}\n\n${historiaDoDia.historia}\n\n💡 ${historiaDoDia.licao}`)} style={{background:"rgba(0,0,0,0.05)"}}/>
        <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>
          📜 História do Dia
        </div>
        <div style={{fontSize:17,fontWeight:800,color:"#0A1F1A",lineHeight:1.3,marginBottom:4}}>
          {historiaDoDia.emoji} {historiaDoDia.titulo}
        </div>
        <div style={{fontSize:12,color:"#9CA3AF",marginBottom:12}}>
          {historiaDoDia.famoso} · {vDay} de {MONTHS[vMonth]}
        </div>
        <div style={{fontSize:14,color:"#374151",lineHeight:1.7,marginBottom:12}}>
          {historiaDoDia.historia}
        </div>
        <div style={{fontSize:13,color:"#92400E",lineHeight:1.6,background:"#FFF7ED",borderRadius:12,padding:"10px 12px"}}>
          <strong>Lição:</strong> {historiaDoDia.licao}
        </div>
      </Card>

      {/* 3. VERSÍCULO DO DIA */}
      <Card style={{background:"linear-gradient(135deg,#1E40AF18,#1E40AF06)",border:"1px solid #1E40AF30",position:"relative"}}>
        <ShareBtn onClick={()=>shareContent("versiculo", {
          texto: versiculo.texto,
          ref: versiculo.ref,
          tradicao: tradicao,
          dataStr: `${vDay} de ${MONTHS[vMonth]}`,
        }, `📖 Versículo do dia (${tradicao}):\n\n"${versiculo.texto}"\n— ${versiculo.ref}`)} style={{background:"rgba(30,64,175,0.15)"}}/>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <span style={{fontSize:22}}>📖</span>
            <div>
              <div style={{fontSize:11,color:"#1E40AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>Versículo do Dia</div>
              <div style={{fontSize:11,color:"#9CA3AF"}}>{tradicao}</div>
            </div>
          </div>
        </div>
        <div style={{fontSize:15,color:"#0A1F1A",lineHeight:1.65,fontStyle:"italic",fontWeight:600,marginBottom:6}}>
          "{versiculo.texto}"
        </div>
        <div style={{fontSize:11,color:"#9CA3AF",fontWeight:600}}>{versiculo.ref}</div>
      </Card>

      {/* 4. FAMOSO DO DIA */}
      <Card>
        <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>
          ⭐ Famoso do Dia
        </div>
        <div style={{display:"flex",gap:14,alignItems:"flex-start"}}>
          <div style={{fontSize:36,flexShrink:0}}>{famous.emoji}</div>
          <div style={{flex:1}}>
            <div style={{fontSize:17,fontWeight:800,color:"#0A1F1A",lineHeight:1.2}}>{famous.name}</div>
            <div style={{fontSize:11,color:"#9CA3AF",marginTop:3}}>
              {famous.day} de {MONTHS[famous.month]} · {famous.category} · {famous.country}
            </div>
            {famous.quote && (
              <div style={{fontSize:13,color:"#374151",lineHeight:1.6,fontStyle:"italic",marginTop:10,borderLeft:"3px solid #10B981",paddingLeft:12}}>
                "{famous.quote}"
              </div>
            )}
            {famous.fact && (
              <div style={{fontSize:12,color:"#5A6B68",marginTop:8,lineHeight:1.6}}>{famous.fact}</div>
            )}
          </div>
        </div>
      </Card>

      {/* 5. MENSAGEM DO DIA */}
      <Card style={{background:"linear-gradient(135deg,#10B98112,#10B98106)",border:"1px solid #10B98130"}}>
        <div style={{fontSize:11,color:"#10B981",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>
          💬 Mensagem do Dia
        </div>
        <div style={{fontSize:15,color:"#0A1F1A",lineHeight:1.7,fontWeight:500,fontStyle:"italic"}}>
          "{mensagemDia}"
        </div>
      </Card>
    </div>
  );
}

// ============================================================
function CoincidenceTest({profile, onSaveToProfile, onBack}) {
  const [step,setStep] = useState("input");
  const [height,setHeight] = useState(profile?.height||"");
  const [weight,setWeight] = useState(profile?.weight||"");
  const [gender,setGender] = useState(profile?.gender||"");
  const [results,setResults] = useState([]);
  const [showAll,setShowAll] = useState(false);
  const [saved,setSaved] = useState(false);

  const run = () => {
    const user = { birthDay:profile?.birthDay, birthMonth:profile?.birthMonth, birthYear:profile?.birthYear,
      height:parseInt(height)||null, weight:parseInt(weight)||null, gender, temperamento:profile?.temperamento };
    setResults(findMatches(user));
    setShowAll(false);
    setStep("result");
  };

  const reset = () => { setStep("input"); setResults([]); setSaved(false); };

  if (step==="input") return (
    <div>
      <button onClick={onBack} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:16,fontFamily:"inherit"}}>← Voltar</button>
      <div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",marginBottom:4}}>🪞 Teste de Coincidências</div>
      <div style={{fontSize:12,color:"#9CA3AF",marginBottom:16}}>Descubra o que você tem em comum com 365 famosos</div>
      {profile?.birthDay && (
        <div style={{background:"#F0FDF4",border:"1px solid #BBF7D0",borderRadius:14,padding:"12px 14px",marginBottom:16}}>
          <div style={{fontSize:11,color:"#059669",fontWeight:700,textTransform:"uppercase",marginBottom:6}}>✅ Do seu perfil</div>
          <div style={{fontSize:13,color:"#0A1F1A",fontWeight:600}}>
            📅 {profile.birthDay} de {MONTHS[profile.birthMonth]}{profile.birthYear?` de ${profile.birthYear}`:""}
            {profile.sign?`  ${SIGN_EMOJI[profile.sign]} ${profile.sign}`:""}
          </div>
        </div>
      )}
      <Label>Seu gênero</Label>
      <div style={{display:"flex",gap:10,marginBottom:16}}>
        {[{v:"M",l:"👨 Homem"},{v:"F",l:"👩 Mulher"},{v:"X",l:"🌈 Outro"}].map(o=>(
          <button key={o.v} onClick={()=>setGender(o.v)} style={{
            flex:1,padding:"13px 8px",borderRadius:12,border:`1.5px solid ${gender===o.v?"#10B981":"#E5E7EB"}`,
            background:gender===o.v?"#10B981":"#fff",color:gender===o.v?"#fff":"#0A1F1A",
            fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>{o.l}</button>
        ))}
      </div>
      <Label>Sua altura</Label>
      <div style={{position:"relative",marginBottom:14}}>
        <input type="number" inputMode="numeric" value={height}
          onChange={e=>setHeight(sanitizeInt(e.target.value))}
          onBlur={e=>setHeight(clampInt(e.target.value,50,250))}
          placeholder="Ex: 175"
          style={{width:"100%",background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:12,
            color:"#0A1F1A",fontSize:15,padding:"13px 44px 13px 15px",boxSizing:"border-box",fontWeight:500}}/>
        <span style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",color:"#9CA3AF",fontSize:13,fontWeight:600}}>cm</span>
      </div>
      <Label>Seu peso</Label>
      <div style={{position:"relative",marginBottom:20}}>
        <input type="number" inputMode="numeric" value={weight}
          onChange={e=>setWeight(sanitizeInt(e.target.value))}
          onBlur={e=>setWeight(clampInt(e.target.value,20,300))}
          placeholder="Ex: 70"
          style={{width:"100%",background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:12,
            color:"#0A1F1A",fontSize:15,padding:"13px 44px 13px 15px",boxSizing:"border-box",fontWeight:500}}/>
        <span style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",color:"#9CA3AF",fontSize:13,fontWeight:600}}>kg</span>
      </div>
      <Btn label="🔍 Buscar coincidências" onClick={run} disabled={!profile?.birthDay && !height && !weight}/>
    </div>
  );

  const total = results.length;
  const visible = showAll ? results : results.slice(0,8);

  return (
    <div>
      <button onClick={reset} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Nova busca</button>
      <div style={{background:"linear-gradient(160deg,#10B981,#047857)",borderRadius:24,padding:"24px 20px",marginBottom:14,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-40,right:-40,width:140,height:140,borderRadius:"50%",background:"#34D39928",filter:"blur(30px)"}}/>
        <div style={{position:"relative",zIndex:2}}>
          <div style={{fontSize:11,color:"#A7F3D0",fontWeight:700,letterSpacing:2.5,textTransform:"uppercase",marginBottom:8}}>
            {profile?.name?`${profile.name}, encontrei`:"Encontrei"}
          </div>
          <div style={{display:"flex",alignItems:"baseline",gap:10}}>
            <div style={{fontSize:64,fontWeight:900,color:"#fff",lineHeight:1,letterSpacing:-4}}>{total}</div>
            <div style={{fontSize:16,color:"#D1FAE5",fontWeight:700}}>
              {total===0?"coincidências":total===1?"coincidência!":"coincidências!"}
            </div>
          </div>
          <button onClick={()=>shareCard("Minhas Coincidências no KomparAI", `Encontrei ${total} famosos com algo em comum comigo! Descubra os seus em komparai.vercel.app`)}
            style={{marginTop:12,background:"#ffffff20",border:"none",color:"#fff",fontSize:13,padding:"6px 14px",borderRadius:12,cursor:"pointer",fontFamily:"inherit",fontWeight:700}}>
            ↗ Compartilhar resultado
          </button>
        </div>
      </div>
      {!saved && (height||weight||gender) && (
        <div style={{background:"#FFF7ED",border:"1px solid #FED7AA",borderRadius:16,padding:"14px 16px",marginBottom:14}}>
          <div style={{fontSize:13,fontWeight:700,color:"#C2410C",marginBottom:6}}>💾 Salvar no perfil?</div>
          <div style={{fontSize:12,color:"#92400E",lineHeight:1.5,marginBottom:10}}>
            Deixa tudo mais personalizado — coincidências futuras e mentores.
          </div>
          <Btn label="Salvar no meu perfil" onClick={()=>{
            onSaveToProfile({height:parseInt(height)||null,weight:parseInt(weight)||null,gender});
            setSaved(true);
          }} small/>
        </div>
      )}
      {visible.map((r,i)=>(
        <Card key={i} style={{borderLeft:"4px solid #10B981"}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
            <div style={{width:44,height:44,borderRadius:"50%",background:"#10B98118",
              display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>{r.cel.emoji}</div>
            <div style={{flex:1,minWidth:0}}>
              <div style={{fontSize:15,fontWeight:800,color:"#0A1F1A"}}>{r.cel.name}</div>
              <div style={{fontSize:11,color:"#9CA3AF"}}>{r.cel.category} · {r.cel.born}</div>
            </div>
            <div style={{textAlign:"right"}}>
              <div style={{fontSize:13,color:"#10B981",fontWeight:800}}>{r.hits.length}</div>
              <div style={{fontSize:10,color:"#9CA3AF"}}>em comum</div>
            </div>
          </div>
          {r.hits.map((h,j)=>(
            <div key={j} style={{display:"flex",gap:10,background:"#F9FAFB",borderRadius:10,padding:"8px 12px",marginBottom:6}}>
              <span style={{fontSize:15}}>{h.icon}</span>
              <span style={{fontSize:13,color:"#374151",fontWeight:500}}>{h.text}</span>
            </div>
          ))}
        </Card>
      ))}
      {!showAll && total > 8 && (
        <button onClick={()=>setShowAll(true)} style={{width:"100%",padding:13,background:"transparent",
          border:"1.5px solid #10B981",borderRadius:14,color:"#10B981",fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
          👁️ Ver todas as {total} coincidências
        </button>
      )}
    </div>
  );
}

// ============================================================
// TELA ASTRAL (antes Horóscopo) — 5 sistemas + Numerologia do dia
// ============================================================
function AstralScreen({profile}) {
  const [sistema,setSistema] = useState("ocidental");
  const sign = profile?.sign;
  const animal = profile?.birthYear ? getAnimalChines(profile.birthYear) : null;
  const rashi = sign ? getRashi(sign) : null;
  const hebDate = getHebrewDate(today);

  const SISTEMAS = [
    {id:"ocidental",l:"Ocidental",emoji:"♈"},
    {id:"grego",l:"Grego",emoji:"🏛️"},
    {id:"chines",l:"Chinês",emoji:"🐉"},
    {id:"vedico",l:"Védico",emoji:"🕉️"},
    {id:"judaico",l:"Judaico",emoji:"✡️"},
  ];

  const numInfo = profile?.birthDay ? getNumerologia(profile.birthDay, profile.birthMonth, profile.birthYear) : null;

  return (
    <div>
      <div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",marginBottom:4}}>✨ Astral</div>
      <div style={{fontSize:12,color:"#9CA3AF",marginBottom:14}}>{DAYS_PT[DOW]}, {DAY} de {MONTHS[MONTH]}</div>

      {/* Numerologia do Caminho de Vida — NOVO */}
      {numInfo && (
        <Card style={{background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",marginBottom:14,position:"relative",overflow:"hidden"}}>
          <ShareBtn onClick={()=>shareContent("numerologia", {
            nome: profile?.name || "",
            numero: String(numInfo.numero),
            arquetipo: numInfo.nome,
            essencia: numInfo.essencia,
          }, `🔢 Minha numerologia:\n\nNúmero ${numInfo.numero} — ${numInfo.nome}\n${numInfo.arquetipo}\n\n"${numInfo.essencia}"`)} style={{background:"rgba(255,255,255,0.95)"}}/>
          <div style={{position:"absolute",top:-20,right:-20,fontSize:100,opacity:.05}}>{numInfo.numero}</div>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10,position:"relative"}}>
            <div style={{width:52,height:52,borderRadius:"50%",background:"#10B98130",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>{numInfo.emoji}</div>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:2}}>
                <div style={{fontSize:10,color:"#34D399",fontWeight:700,textTransform:"uppercase",letterSpacing:1.5}}>🔢 Numerologia</div>
                <span style={{fontSize:9,background:"#10B981",color:"#fff",padding:"2px 7px",borderRadius:20,fontWeight:700}}>NOVO</span>
              </div>
              <div style={{fontSize:18,fontWeight:900,color:"#fff"}}>Número {numInfo.numero} — {numInfo.nome}</div>
              <div style={{fontSize:11,color:"#6EE7B7"}}>{numInfo.arquetipo}</div>
            </div>
          </div>
          <div style={{fontSize:13,color:"#D1FAE5",lineHeight:1.6,marginBottom:10,fontStyle:"italic",borderLeft:"3px solid #10B981",paddingLeft:12}}>
            "{numInfo.essencia}"
          </div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:10}}>
            {numInfo.fortes.slice(0,3).map((f,i)=>(
              <span key={i} style={{fontSize:10,background:"#10B98120",color:"#34D399",padding:"3px 9px",borderRadius:20,fontWeight:600}}>✅ {f}</span>
            ))}
          </div>
          <div style={{fontSize:12,color:"#A7F3D0",fontStyle:"italic",borderLeft:"2px solid #34D399",paddingLeft:10}}>"{numInfo.afirmacao}"</div>
        </Card>
      )}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:18}}>
        {SISTEMAS.map(s=>(
          <button key={s.id} onClick={()=>setSistema(s.id)} style={{
            padding:"12px 10px",borderRadius:14,
            border:`1.5px solid ${sistema===s.id?"#7C3AED":"#E5E7EB"}`,
            background:sistema===s.id?"#7C3AED":"#fff",
            color:sistema===s.id?"#fff":"#5A6B68",
            fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",
            display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
            <span>{s.emoji}</span><span>{s.l}</span>
          </button>
        ))}
      </div>

      {sistema==="ocidental" && sign && (
        <Card style={{background:"linear-gradient(135deg,#7C3AED18,#7C3AED06)",border:"1px solid #7C3AED30",position:"relative"}}>
          <ShareBtn onClick={()=>shareContent("horoscopo", {
            nome: profile?.name || "",
            signo: sign, emoji: SIGN_EMOJI[sign],
            sistema: "Astrologia Ocidental",
            mensagem: "Sua energia astral está em harmonia com os movimentos celestes de hoje. Confie na sua intuição.",
          }, `♈ Meu signo é ${sign}\n\nSua energia astral está em harmonia com os movimentos celestes de hoje.`)}/>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
            <span style={{fontSize:38}}>{SIGN_EMOJI[sign]}</span>
            <div>
              <div style={{fontSize:11,color:"#7C3AED",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>Signo Ocidental</div>
              <div style={{fontSize:22,fontWeight:900,color:"#0A1F1A"}}>{sign}</div>
            </div>
          </div>
          <div style={{fontSize:14,color:"#374151",lineHeight:1.7}}>
            Sua energia astral está em harmonia com os movimentos celestes de hoje. Confie na sua intuição.
          </div>
        </Card>
      )}

      {sistema==="grego" && sign && HOROSCOPO_GREGO[sign] && (
        <Card style={{position:"relative"}}>
          <ShareBtn onClick={()=>shareContent("horoscopo", {
            nome: profile?.name || "",
            signo: sign, emoji: SIGN_EMOJI[sign],
            sistema: "Zodíaco Helênico",
            mensagem: getFraseGrega(sign, DOY),
          }, `🏛️ Meu signo helênico é ${sign}\n\n"${getFraseGrega(sign, DOY)}"`)}/>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
            <span style={{fontSize:38}}>{SIGN_EMOJI[sign]}</span>
            <div>
              <div style={{fontSize:11,color:"#92400E",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>Zodíaco Helênico</div>
              <div style={{fontSize:20,fontWeight:900,color:"#0A1F1A"}}>{sign}</div>
              <div style={{fontSize:12,color:"#5A6B68"}}>Regente: {HOROSCOPO_GREGO[sign].regente}</div>
            </div>
          </div>
          <div style={{background:"#FFF7ED",borderRadius:12,padding:"12px 14px",marginBottom:12}}>
            <div style={{fontSize:11,color:"#C2410C",fontWeight:700,marginBottom:4}}>🏛️ MITO</div>
            <div style={{fontSize:13,color:"#92400E",lineHeight:1.5}}>{HOROSCOPO_GREGO[sign].mito}</div>
          </div>
          <div style={{fontSize:13,color:"#374151",lineHeight:1.6,marginBottom:8}}><strong>Poder:</strong> {HOROSCOPO_GREGO[sign].poder}</div>
          <div style={{fontSize:13,color:"#374151",lineHeight:1.6,marginBottom:8}}><strong>Desafio:</strong> {HOROSCOPO_GREGO[sign].desafio}</div>
          <div style={{display:"flex",gap:8,marginTop:10,flexWrap:"wrap"}}>
            <span style={{fontSize:11,background:"#F3F4F6",borderRadius:10,padding:"4px 10px"}}>💎 {HOROSCOPO_GREGO[sign].pedra}</span>
            <span style={{fontSize:11,background:"#F3F4F6",borderRadius:10,padding:"4px 10px"}}>🔢 {HOROSCOPO_GREGO[sign].numero}</span>
            <span style={{fontSize:11,background:"#F3F4F6",borderRadius:10,padding:"4px 10px"}}>🎨 {HOROSCOPO_GREGO[sign].cor}</span>
          </div>
          <div style={{marginTop:12,padding:"10px 12px",background:"#F0FDF4",borderRadius:10,borderLeft:"3px solid #10B981"}}>
            <div style={{fontSize:13,color:"#065F46",fontStyle:"italic",lineHeight:1.5}}>"{getFraseGrega(sign, DOY)}"</div>
          </div>
        </Card>
      )}

      {sistema==="chines" && animal && ANIMAIS_CHINESES[animal] && (
        <Card style={{background:"linear-gradient(135deg,#DC262618,#DC262606)",border:"1px solid #DC262630",position:"relative"}}>
          <ShareBtn onClick={()=>shareContent("horoscopo", {
            nome: profile?.name || "",
            signo: ANIMAIS_CHINESES[animal].animal,
            emoji: ANIMAIS_CHINESES[animal].emoji,
            sistema: "Horóscopo Chinês",
            mensagem: getFraseChinesa(animal, DOY),
          }, `🐉 Meu signo chinês é ${ANIMAIS_CHINESES[animal].animal}\n\n"${getFraseChinesa(animal, DOY)}"`)}/>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
            <span style={{fontSize:44}}>{ANIMAIS_CHINESES[animal].emoji}</span>
            <div>
              <div style={{fontSize:11,color:"#DC2626",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>Horóscopo Chinês</div>
              <div style={{fontSize:22,fontWeight:900,color:"#0A1F1A"}}>{ANIMAIS_CHINESES[animal].animal}</div>
              <div style={{fontSize:12,color:"#5A6B68"}}>Elemento: {ANIMAIS_CHINESES[animal].elemento}</div>
            </div>
          </div>
          <div style={{fontSize:14,color:"#374151",lineHeight:1.6,marginBottom:10}}>{ANIMAIS_CHINESES[animal].traços}</div>
          <div style={{fontSize:13,color:"#374151",marginBottom:6}}><strong>✨ Poder:</strong> {ANIMAIS_CHINESES[animal].poder}</div>
          <div style={{fontSize:13,color:"#374151",marginBottom:6}}><strong>💞 Compatível:</strong> {ANIMAIS_CHINESES[animal].compatibilidade.join(", ")}</div>
          <div style={{marginTop:12,padding:"10px 12px",background:"#FEF2F2",borderRadius:10,borderLeft:"3px solid #DC2626"}}>
            <div style={{fontSize:13,color:"#991B1B",fontStyle:"italic",lineHeight:1.5}}>"{getFraseChinesa(animal, DOY)}"</div>
          </div>
        </Card>
      )}

      {sistema==="vedico" && rashi && RASHIS_VEDICOS[rashi] && (
        <Card style={{background:"linear-gradient(135deg,#F59E0B18,#F59E0B06)",border:"1px solid #F59E0B30",position:"relative"}}>
          <ShareBtn onClick={()=>shareContent("horoscopo", {
            nome: profile?.name || "",
            signo: rashi, emoji: RASHIS_VEDICOS[rashi].emoji,
            sistema: "Rashi Védico",
            mensagem: `Energia ${RASHIS_VEDICOS[rashi].natureza}. ${RASHIS_VEDICOS[rashi].caracteristicas}`,
          }, `🕉️ Meu Rashi védico é ${rashi}\n\nNatureza: ${RASHIS_VEDICOS[rashi].natureza}`)}/>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
            <span style={{fontSize:38}}>{RASHIS_VEDICOS[rashi].emoji}</span>
            <div>
              <div style={{fontSize:11,color:"#D97706",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>Rashi Védico</div>
              <div style={{fontSize:20,fontWeight:900,color:"#0A1F1A"}}>{rashi}</div>
              <div style={{fontSize:12,color:"#5A6B68"}}>= {RASHIS_VEDICOS[rashi].ocidental}</div>
            </div>
          </div>
          <div style={{fontSize:14,color:"#374151",lineHeight:1.6,marginBottom:12}}>{RASHIS_VEDICOS[rashi].descricao}</div>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12}}>
            <span style={{fontSize:11,background:"#FFF7ED",borderRadius:10,padding:"4px 10px",color:"#92400E"}}>🪐 {RASHIS_VEDICOS[rashi].planeta}</span>
            <span style={{fontSize:11,background:"#FFF7ED",borderRadius:10,padding:"4px 10px",color:"#92400E"}}>{RASHIS_VEDICOS[rashi].elemento}</span>
          </div>
          <div style={{padding:"10px 12px",background:"#FFFBEB",borderRadius:10,marginBottom:12}}>
            <div style={{fontSize:10,color:"#D97706",fontWeight:700,marginBottom:4}}>🕉️ MANTRA</div>
            <div style={{fontSize:13,color:"#92400E",fontStyle:"italic"}}>{RASHIS_VEDICOS[rashi].mantra}</div>
          </div>
          <div style={{padding:"10px 12px",background:"#F0FDF4",borderRadius:10,borderLeft:"3px solid #10B981"}}>
            <div style={{fontSize:13,color:"#065F46",fontStyle:"italic",lineHeight:1.5}}>"{getFraseVedica(rashi, DOY)}"</div>
          </div>
        </Card>
      )}

      {sistema==="judaico" && (
        <Card style={{background:"linear-gradient(135deg,#7C3AED18,#7C3AED06)",border:"1px solid #7C3AED30"}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
            <span style={{fontSize:38}}>✡️</span>
            <div>
              <div style={{fontSize:11,color:"#7C3AED",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>Calendário Hebraico</div>
              <div style={{fontSize:18,fontWeight:900,color:"#0A1F1A"}}>{hebDate.formatted}</div>
            </div>
          </div>
          <div style={{padding:"12px 14px",background:"#F5F3FF",borderRadius:12,marginBottom:12}}>
            <div style={{fontSize:11,color:"#7C3AED",fontWeight:700,marginBottom:4}}>📅 HOJE NA TRADIÇÃO JUDAICA</div>
            <div style={{fontSize:13,color:"#5B21B6",lineHeight:1.5}}>
              {DOW === 5 ? "É véspera de Shabat. Ao pôr-do-sol começa o dia de descanso sagrado." :
               DOW === 6 ? "É Shabat — dia de descanso, oração e comunhão familiar." :
               `É um dia comum da semana hebraica. O Shabat se aproxima.`}
            </div>
          </div>
          <div style={{fontSize:13,color:"#374151",lineHeight:1.6}}>
            <strong>Mês de {hebDate.month}:</strong> Tempo de reflexão e conexão espiritual no calendário hebraico.
          </div>
        </Card>
      )}

      {!sign && (
        <div style={{textAlign:"center",padding:"40px 20px",color:"#9CA3AF"}}>
          <div style={{fontSize:44,marginBottom:10}}>♈</div>
          <div style={{fontSize:14,fontWeight:600}}>Complete sua data de nascimento no perfil para ver todos os horóscopos.</div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// ESPIRITUALIDADE (Nova Aba!)
// ============================================================
function EspiritualidadeScreen({profile, onSaveTradicao}) {
  const [mes,setMes] = useState(MONTH);
  const [testeAba,setTesteAba] = useState("menu"); // menu | perguntas | resultado
  const [tradStep,setTradStep] = useState(0);
  const [tradScores,setTradScores] = useState({});
  const [tradResult,setTradResult] = useState(null);
  const [tradQuestions,setTradQuestions] = useState(() =>
    shuffle(TRADICAO_QUESTIONS).map(q => ({...q, opts: shuffle(q.opts)}))
  );

  const eventosHoje = getEspiritualidadeDoDia(DAY, MONTH, YEAR);
  const tradicao = profile?.tradicao || "Universal";
  const versiculo = getVersiculoDoDia(DAY, tradicao);
  const lua = getFaseLua();
  const santo = getSantoDoDiaCompleto(DAY, MONTH);

  const answerTrad = (w) => {
    const ns = {...tradScores, [w]:(tradScores[w]||0)+1};
    setTradScores(ns);
    if (tradStep < tradQuestions.length-1) setTradStep(s=>s+1);
    else {
      const result = Object.entries(ns).sort((a,b)=>b[1]-a[1])[0][0];
      setTradResult(result);
      setTesteAba("resultado");
      onSaveTradicao(result);
    }
  };
  const resetTrad = () => {
    setTesteAba("menu"); setTradStep(0); setTradScores({}); setTradResult(null);
    setTradQuestions(shuffle(TRADICAO_QUESTIONS).map(q => ({...q, opts: shuffle(q.opts)})));
  };

  // Eventos do mês
  const fixedMes = FIXED_DATES.filter(d => d.month === mes);
  const movableMes = MOVABLE_DATES_2026.filter(d => parseInt(d.date.split("-")[1]) === mes)
    .map(d => ({...d, day:parseInt(d.date.split("-")[2])}));
  const todosEventosMes = [...fixedMes, ...movableMes].sort((a,b)=>(a.day||0)-(b.day||0));

  if (testeAba === "perguntas") {
    const q = tradQuestions[tradStep];
    return (
      <div>
        <button onClick={resetTrad} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Voltar</button>
        <div style={{fontSize:14,fontWeight:700,color:"#0A1F1A",marginBottom:6}}>🧭 Pergunta {tradStep+1}/{tradQuestions.length}</div>
        <div style={{height:5,background:"#E5E7EB",borderRadius:3,marginBottom:20,overflow:"hidden"}}>
          <div style={{height:"100%",width:`${((tradStep+1)/tradQuestions.length)*100}%`,background:"linear-gradient(90deg,#10B981,#047857)",borderRadius:3,transition:"width .4s"}}/>
        </div>
        <div style={{fontSize:17,fontWeight:800,marginBottom:18,lineHeight:1.35}}>{q.q}</div>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {q.opts.map((o,i)=>(
            <button key={i} onClick={()=>answerTrad(o.w)} style={{padding:"14px 18px",borderRadius:16,border:"1.5px solid #E5E7EB",background:"#fff",color:"#0A1F1A",fontSize:14,fontWeight:500,cursor:"pointer",fontFamily:"inherit",textAlign:"left",lineHeight:1.4}}>{o.t}</button>
          ))}
        </div>
      </div>
    );
  }

  if (testeAba === "resultado" && tradResult) {
    const t = TRADICAO_INFO[tradResult];
    return (
      <div>
        <Card style={{background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",color:"#fff"}}>
          <div style={{textAlign:"center",padding:"10px 0 14px"}}>
            <div style={{fontSize:44,marginBottom:8}}>{t.emoji}</div>
            <div style={{fontSize:11,color:"#34D399",fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:6}}>Sua Tradição</div>
            <div style={{fontSize:24,fontWeight:900}}>{tradResult}</div>
          </div>
          <div style={{fontSize:14,color:"#D1FAE5",lineHeight:1.6,marginBottom:12}}>{t.desc}</div>
          <div style={{background:"#10B98120",borderRadius:12,padding:"12px",marginBottom:12}}>
            <div style={{fontSize:11,color:"#34D399",fontWeight:700,marginBottom:4}}>✨ ESSÊNCIA</div>
            <div style={{fontSize:13,color:"#A7F3D0"}}>{t.essencia}</div>
          </div>
          <div style={{background:"#ffffff10",borderRadius:12,padding:"12px"}}>
            <div style={{fontSize:11,color:"#6EE7B7",fontWeight:700,marginBottom:4}}>🕊️ CONVITE DO DIA</div>
            <div style={{fontSize:13,color:"#D1FAE5",fontStyle:"italic"}}>{t.convite}</div>
          </div>
        </Card>
        <div style={{fontSize:11,color:"#9CA3AF",textAlign:"center",marginBottom:12}}>
          ✅ Salvo no seu perfil — versículos agora serão desta tradição
        </div>
        <Btn label="↻ Refazer teste" onClick={resetTrad} ghost/>
        <div style={{marginTop:10}}><Btn label="← Voltar" onClick={resetTrad} ghost/></div>
      </div>
    );
  }

  return (
    <div>
      <div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",marginBottom:4}}>🙏 Espiritualidade</div>
      <div style={{fontSize:12,color:"#9CA3AF",marginBottom:18}}>Calendário das tradições do mundo</div>

      {/* Versículo do dia — NOVO */}
      <Card style={{background:"linear-gradient(135deg,#1E40AF18,#1E40AF06)",border:"1px solid #1E40AF30",marginBottom:14,position:"relative"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <span style={{fontSize:22}}>📖</span>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                <div style={{fontSize:10,color:"#1E40AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>Versículo do Dia</div>
                <span style={{fontSize:9,background:"#10B981",color:"#fff",padding:"2px 7px",borderRadius:20,fontWeight:700}}>NOVO</span>
              </div>
              <div style={{fontSize:11,color:"#9CA3AF"}}>{tradicao}</div>
            </div>
          </div>
        </div>
        <div style={{fontSize:15,color:"#0A1F1A",lineHeight:1.6,fontStyle:"italic",fontWeight:600,marginBottom:6}}>
          "{versiculo.texto}"
        </div>
        <div style={{fontSize:11,color:"#9CA3AF",fontWeight:600}}>{versiculo.ref}</div>
        {!profile?.tradicao && (
          <div style={{marginTop:10,fontSize:11,color:"#9CA3AF",background:"#F9FAFB",borderRadius:8,padding:"8px 10px"}}>
            💡 Faça o Teste de Tradição para personalizar este versículo
          </div>
        )}
      </Card>

      {/* Fase da Lua — NOVO */}
      <Card style={{background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",marginBottom:14,position:"relative"}}>
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
          <span style={{fontSize:40}}>{lua.emoji}</span>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <div style={{fontSize:10,color:"#34D399",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>🌙 Lua de Hoje</div>
              <span style={{fontSize:9,background:"#10B981",color:"#fff",padding:"2px 7px",borderRadius:20,fontWeight:700}}>NOVO</span>
            </div>
            <div style={{fontSize:18,fontWeight:900,color:"#fff"}}>{lua.fase}</div>
            <div style={{fontSize:11,color:"#6EE7B7"}}>{lua.nomeEspiritual} · {lua.iluminacao}% iluminada</div>
          </div>
        </div>
        <div style={{fontSize:13,color:"#D1FAE5",lineHeight:1.6,marginBottom:10}}>{lua.desc}</div>
        <div style={{background:"#10B98120",borderRadius:12,padding:"12px",marginBottom:8}}>
          <div style={{fontSize:10,color:"#34D399",fontWeight:700,marginBottom:4}}>🌿 RITUAL DO DIA</div>
          <div style={{fontSize:13,color:"#A7F3D0"}}>{lua.ritual}</div>
        </div>
        <div style={{fontSize:12,color:"#6EE7B7",fontStyle:"italic"}}>"{lua.afirmacao}"</div>
        <div style={{marginTop:8,fontSize:11,color:"#9CA3AF"}}>
          Dia {lua.diaDoCliclo} do ciclo · Próxima Lua Nova em {lua.proximaLuaNova} dias
        </div>
      </Card>

      {/* Santo do Dia — NOVO */}
      <Card style={{borderLeft:`4px solid ${TRADICAO_COLORS[santo.tradicao]||"#10B981"}`,marginBottom:14}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
          <span style={{fontSize:28}}>{santo.emoji}</span>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <div style={{fontSize:10,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>🕯️ Figura do Dia</div>
              <span style={{fontSize:9,background:"#10B981",color:"#fff",padding:"2px 7px",borderRadius:20,fontWeight:700}}>NOVO</span>
            </div>
            <div style={{fontSize:16,fontWeight:800,color:"#0A1F1A"}}>{santo.nome}</div>
            <div style={{fontSize:11,color:TRADICAO_COLORS[santo.tradicao]||"#10B981",fontWeight:600}}>{santo.tradicao}</div>
          </div>
        </div>
        <div style={{fontSize:13,color:"#374151",lineHeight:1.6}}>{santo.desc}</div>
      </Card>

      {/* Teste de Tradição — NOVO */}
      <Card onClick={()=>setTesteAba("perguntas")} style={{background:"linear-gradient(135deg,#10B981,#047857)",cursor:"pointer",marginBottom:18}}>
        <div style={{display:"flex",gap:14,alignItems:"center"}}>
          <div style={{width:52,height:52,borderRadius:16,background:"#ffffff20",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>🧭</div>
          <div style={{flex:1}}>
            <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2}}>
              <div style={{fontSize:16,fontWeight:800,color:"#fff"}}>Qual tradição combina com você?</div>
              <span style={{fontSize:9,background:"#fff",color:"#10B981",padding:"2px 7px",borderRadius:20,fontWeight:700}}>NOVO</span>
            </div>
            <div style={{fontSize:12,color:"#D1FAE5"}}>7 perguntas · descubra sua espiritualidade natural</div>
            {profile?.tradicao && <div style={{marginTop:6,fontSize:11,color:"#A7F3D0"}}>✅ Sua tradição salva: {profile.tradicao}</div>}
          </div>
        </div>
      </Card>

      {/* Hoje na Espiritualidade */}
      {eventosHoje.length > 0 && (
        <>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>
            ✨ Hoje · {DAY} de {MONTHS[MONTH]}
          </div>
          {eventosHoje.map((e,i)=>(
            <Card key={i} style={{borderLeft:`4px solid ${e.cor||"#10B981"}`}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
                <span style={{fontSize:26}}>{TRADICAO_EMOJI[e.tradicao]||"🌟"}</span>
                <div>
                  <div style={{fontSize:10,color:e.cor||"#10B981",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>{e.tradicao}</div>
                  <div style={{fontSize:15,fontWeight:800,color:"#0A1F1A"}}>{e.titulo}</div>
                </div>
              </div>
              <div style={{fontSize:13,color:"#374151",lineHeight:1.6}}>{e.desc}</div>
            </Card>
          ))}
        </>
      )}

      {/* Calendário do mês */}
      <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10,marginTop:20}}>
        Calendário do mês
      </div>
      <div style={{display:"flex",gap:6,overflowX:"auto",marginBottom:14,paddingBottom:6}}>
        {MONTHS.slice(1).map((m,i)=>(
          <button key={i+1} onClick={()=>setMes(i+1)} style={{
            padding:"8px 14px",borderRadius:18,
            border:`1.5px solid ${mes===i+1?"#10B981":"#E5E7EB"}`,
            background:mes===i+1?"#10B981":"#fff",
            color:mes===i+1?"#fff":"#5A6B68",
            fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0,whiteSpace:"nowrap"}}>
            {m.slice(0,3)}
          </button>
        ))}
      </div>
      {todosEventosMes.map((e,i)=>(
        <div key={i} style={{display:"flex",gap:10,padding:"10px 12px",background:"#fff",borderRadius:12,marginBottom:6,boxShadow:"0 1px 3px #0000000a"}}>
          <div style={{textAlign:"center",minWidth:32}}>
            <div style={{fontSize:18,fontWeight:900,color:e.cor||"#10B981",lineHeight:1}}>{e.day}</div>
            <div style={{fontSize:9,color:"#9CA3AF",textTransform:"uppercase"}}>{MONTHS[mes].slice(0,3)}</div>
          </div>
          <div style={{fontSize:18}}>{TRADICAO_EMOJI[e.tradicao]||"🌟"}</div>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontSize:13,fontWeight:700,color:"#0A1F1A"}}>{e.titulo}</div>
            <div style={{fontSize:10,color:e.cor||"#10B981",fontWeight:700,textTransform:"uppercase"}}>{e.tradicao}</div>
          </div>
        </div>
      ))}
      {todosEventosMes.length === 0 && (
        <div style={{textAlign:"center",padding:"30px",color:"#9CA3AF",fontSize:13}}>
          Nenhum evento principal cadastrado neste mês.
        </div>
      )}
    </div>
  );
}

// ============================================================
// TESTES (Temperamento, Quiz, Humor)
// ============================================================
function TestesScreen({profile, onComplete, goCoincidence, onSaveExtra}) {
  const [aba,setAba] = useState("menu");
  // Temperamento
  const [step,setStep] = useState(0);
  const [scores,setScores] = useState({colerico:0,sanguineo:0,melancolico:0,fleumatico:0});
  // Quiz
  const [qIdx,setQIdx] = useState(0);
  const [qScore,setQScore] = useState(0);
  const [qDone,setQDone] = useState(false);
  const [qFb,setQFb] = useState(null);
  const [qLevel,setQLevel] = useState(null);
  const [qPool,setQPool] = useState([]);
  // Humor
  const [mood,setMood] = useState(null);
  // Novos testes genéricos (Amor, Político, Personalidade, Profissional)
  const [novoStep,setNovoStep] = useState(0);
  const [novoScores,setNovoScores] = useState({});
  const [novoResult,setNovoResult] = useState(null);
  // QI
  const [qiStep,setQiStep] = useState(0);
  const [qiScore,setQiScore] = useState(0);
  const [qiFb,setQiFb] = useState(null);
  const [qiDone,setQiDone] = useState(false);
  // Current novo test config
  const [currentTest,setCurrentTest] = useState(null);
  // Embaralhamento (Fisher-Yates aplicado em cada teste ao iniciar)
  const [shuffledQuestions,setShuffledQuestions] = useState(null);

  const QUESTIONS = [
    {q:"Em um grupo, você é quem:",opts:[{t:"Toma decisões e define o que fazer",w:"colerico"},{t:"Anima todo mundo e conta histórias",w:"sanguineo"},{t:"Observa detalhes e planeja",w:"melancolico"},{t:"Ouve a todos e mantém harmonia",w:"fleumatico"}]},
    {q:"Ao enfrentar um problema:",opts:[{t:"Ajo na hora, mesmo irritado",w:"colerico"},{t:"Fico ansioso e procuro desabafar",w:"sanguineo"},{t:"Paro para analisar tudo",w:"melancolico"},{t:"Mantenho a calma e espero",w:"fleumatico"}]},
    {q:"Sua organização é:",opts:[{t:"Funcional, só o necessário",w:"colerico"},{t:"Bagunçada com lembranças",w:"sanguineo"},{t:"Perfeitamente organizada",w:"melancolico"},{t:"Simples e estável",w:"fleumatico"}]},
    {q:"O que te motiva em um projeto:",opts:[{t:"O desafio de vencer",w:"colerico"},{t:"Conhecer pessoas",w:"sanguineo"},{t:"Criar algo perfeito",w:"melancolico"},{t:"Estabilidade",w:"fleumatico"}]},
    {q:"Ao receber crítica:",opts:[{t:"Fico defensivo",w:"colerico"},{t:"Triste mas esqueço",w:"sanguineo"},{t:"Fico magoado e remoendo",w:"melancolico"},{t:"Aceito para evitar conflito",w:"fleumatico"}]},
    {q:"Em discussão:",opts:[{t:"Argumento até convencer",w:"colerico"},{t:"Faço brincadeira pra aliviar",w:"sanguineo"},{t:"Aponto fatos e lógica",w:"melancolico"},{t:"Prefiro ceder pela paz",w:"fleumatico"}]},
    {q:"Elogio que mais te agrada:",opts:[{t:"Você tem atitude e liderança!",w:"colerico"},{t:"Você é a alma da festa!",w:"sanguineo"},{t:"Você é inteligente e detalhista!",w:"melancolico"},{t:"Você é uma pessoa de paz!",w:"fleumatico"}]},
  ];

  const TEMPE_INFO = {
    colerico: {nome:"Colérico",emoji:"🔥",cor:"#EF4444",mentor:"Steve Jobs",desc:"Líder nato. Determinado e focado em resultados."},
    sanguineo: {nome:"Sanguíneo",emoji:"☀️",cor:"#F59E0B",mentor:"Ivete Sangalo",desc:"Energia do ambiente. Criativo e comunicativo."},
    melancolico: {nome:"Melancólico",emoji:"🌊",cor:"#3B82F6",mentor:"Albert Einstein",desc:"Profundo e analítico. Sensível e criativo."},
    fleumatico: {nome:"Fleumático",emoji:"🌿",cor:"#10B981",mentor:"Lionel Messi",desc:"Âncora do grupo. Calmo e diplomático."},
  };

  const MOODS = [
    {id:"feliz",emoji:"😄",label:"Feliz",cor:"#F59E0B"},
    {id:"focado",emoji:"🎯",label:"Focado",cor:"#3B82F6"},
    {id:"cansado",emoji:"😴",label:"Cansado",cor:"#8B5CF6"},
    {id:"ansioso",emoji:"😰",label:"Ansioso",cor:"#EF4444"},
    {id:"inspirado",emoji:"✨",label:"Inspirado",cor:"#10B981"},
  ];

  // Config dos testes novos
  const NOVOS_TESTES = {
    amor:         { intro:AMOR_INTRO, questions:AMOR_QUESTIONS, info:AMOR_INFO, tipo:"weighted", saveKey:"amor" },
    politico:     { intro:POLITICO_INTRO, questions:POLITICO_QUESTIONS, info:POLITICO_INFO, tipo:"weighted", saveKey:"politico" },
    personalidade:{ intro:PERSONALIDADE_INTRO, questions:PERSONALIDADE_QUESTIONS, info:PERSONALIDADE_INFO, tipo:"weighted", saveKey:"personalidade" },
    profissional: { intro:PROFISSIONAL_INTRO, questions:PROFISSIONAL_QUESTIONS, info:PROFISSIONAL_INFO, tipo:"weighted", saveKey:"profissional" },
  };

  const answerTempe = (w) => {
    const ns = {...scores,[w]:scores[w]+1};
    setScores(ns);
    const qsTempe = shuffledQuestions || QUESTIONS;
    if (step < qsTempe.length-1) setStep(s=>s+1);
    else { const d = Object.entries(ns).sort((a,b)=>b[1]-a[1])[0][0]; onComplete(d); setAba("tempe_result"); }
  };
  const startTempe = () => {
    setShuffledQuestions(shuffle(QUESTIONS).map(q => ({...q, opts: shuffle(q.opts)})));
    setStep(0); setScores({colerico:0,sanguineo:0,melancolico:0,fleumatico:0});
    setAba("tempe");
  };
  const resetTempe = () => { setAba("menu"); setStep(0); setScores({colerico:0,sanguineo:0,melancolico:0,fleumatico:0}); setShuffledQuestions(null); };

  const answerQuiz = (idx) => {
    const q = qPool[qIdx];
    const ok = idx === q.c;
    setQFb(ok);
    if (ok) setQScore(s=>s+1);
    setTimeout(()=>{ setQFb(null); if (qIdx<qPool.length-1) setQIdx(i=>i+1); else setQDone(true); }, 900);
  };
  const startQuiz = (level) => {
    const pool = getQuizByLevel(level).sort(() => Math.random() - 0.5);
    setQLevel(level); setQPool(pool); setQIdx(0); setQScore(0); setQDone(false); setQFb(null);
  };
  const resetQuiz = () => { setAba("menu"); setQLevel(null); setQPool([]); setQIdx(0); setQScore(0); setQDone(false); setQFb(null); };

  // Responder novo teste (weighted)
  const answerNovo = (w) => {
    const ns = {...novoScores, [w]:(novoScores[w]||0)+1};
    setNovoScores(ns);
    const qsNovo = shuffledQuestions || NOVOS_TESTES[currentTest].questions;
    if (novoStep < qsNovo.length-1) setNovoStep(s=>s+1);
    else {
      const result = Object.entries(ns).sort((a,b)=>b[1]-a[1])[0][0];
      setNovoResult(result);
      onSaveExtra({[NOVOS_TESTES[currentTest].saveKey]:result});
      setAba("novo_result");
    }
  };
  const startNovo = (testKey) => {
    const baseQs = NOVOS_TESTES[testKey].questions;
    setShuffledQuestions(shuffle(baseQs).map(q => ({...q, opts: shuffle(q.opts)})));
    setCurrentTest(testKey); setNovoStep(0); setNovoScores({}); setNovoResult(null); setAba("novo_perguntas");
  };
  const resetNovo = () => { setAba("menu"); setCurrentTest(null); setNovoStep(0); setNovoScores({}); setNovoResult(null); setShuffledQuestions(null); };

  // QI
  const answerQI = (idx) => {
    const q = QI_QUESTIONS[qiStep];
    const ok = idx === q.c;
    setQiFb(ok);
    if (ok) setQiScore(s=>s+1);
    setTimeout(()=>{ setQiFb(null); if (qiStep<QI_QUESTIONS.length-1) setQiStep(i=>i+1); else setQiDone(true); }, 900);
  };
  const resetQI = () => { setAba("menu"); setQiStep(0); setQiScore(0); setQiFb(null); setQiDone(false); };

  // ─── TELA MENU ───
  if (aba==="menu") {
    const novosCards = [
      {key:"amor", emoji:"💘", nome:"Linguagens do Amor", desc:"15 perguntas · descubra como você ama", cor:"#EC4899"},
      {key:"politico", emoji:"🗳️", nome:"Espectro Político", desc:"15 perguntas · Esquerda, Centro, Direita ou Liberal", cor:"#3B82F6"},
      {key:"personalidade", emoji:"🧩", nome:"Introvertido ou Extrovertido?", desc:"15 perguntas · seu perfil de energia social", cor:"#6366F1"},
      {key:"qi", emoji:"🧠", nome:"QI Cultural", desc:"15 perguntas · quanto você conhece o mundo", cor:"#F59E0B"},
      {key:"profissional", emoji:"💼", nome:"Perfil Profissional", desc:"15 perguntas · seu estilo no trabalho", cor:"#10B981"},
    ];

    return (
      <div>
        <div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",marginBottom:4}}>🧠 Testes & Descobertas</div>
        <div style={{fontSize:12,color:"#9CA3AF",marginBottom:16}}>Conheça-se de dentro para fora</div>

        {/* NOVOS testes no topo com flag */}
        {novosCards.map(nc => (
          <Card key={nc.key} onClick={()=>nc.key==="qi"?setAba("qi"):startNovo(nc.key)} style={{cursor:"pointer",borderLeft:`4px solid ${nc.cor}`}}>
            <div style={{display:"flex",gap:14,alignItems:"center"}}>
              <div style={{width:52,height:52,borderRadius:16,background:`${nc.cor}18`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>{nc.emoji}</div>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2}}>
                  <div style={{fontSize:15,fontWeight:800,color:"#0A1F1A"}}>{nc.nome}</div>
                  <span style={{fontSize:9,background:"#10B981",color:"#fff",padding:"2px 7px",borderRadius:20,fontWeight:700,flexShrink:0}}>NOVO</span>
                </div>
                <div style={{fontSize:12,color:"#9CA3AF"}}>{nc.desc}</div>
                {profile?.[NOVOS_TESTES[nc.key]?.saveKey||nc.key] && (
                  <div style={{fontSize:10,color:nc.cor,fontWeight:600,marginTop:3}}>✅ Feito · {profile[NOVOS_TESTES[nc.key]?.saveKey||nc.key]}</div>
                )}
              </div>
              <span style={{fontSize:18,color:nc.cor,opacity:.6}}>→</span>
            </div>
          </Card>
        ))}

        {/* Coincidências */}
        <Card onClick={goCoincidence} style={{background:"linear-gradient(135deg,#7C3AED,#5B21B6)",cursor:"pointer"}}>
          <div style={{display:"flex",gap:14,alignItems:"center"}}>
            <div style={{width:52,height:52,borderRadius:16,background:"#ffffff20",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>🪞</div>
            <div style={{flex:1}}>
              <div style={{fontSize:16,fontWeight:800,color:"#fff"}}>Teste de Coincidências</div>
              <div style={{fontSize:12,color:"#DDD6FE",marginTop:3}}>365 famosos · descubra os em comum</div>
              <div style={{marginTop:8,display:"inline-block",background:"#fff",borderRadius:20,padding:"4px 12px",fontSize:12,fontWeight:700,color:"#7C3AED"}}>Descobrir →</div>
            </div>
          </div>
        </Card>

        {/* Temperamento */}
        <Card onClick={startTempe} style={{background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",cursor:"pointer"}}>
          <div style={{display:"flex",gap:14,alignItems:"center"}}>
            <div style={{width:52,height:52,borderRadius:16,background:"#10B98130",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>🧬</div>
            <div style={{flex:1}}>
              <div style={{fontSize:16,fontWeight:800,color:"#fff"}}>Teste de Temperamento</div>
              <div style={{fontSize:12,color:"#6EE7B7",marginTop:3}}>7 perguntas · descubra seu mentor</div>
              {profile?.temperamento && <div style={{fontSize:10,color:"#34D399",marginTop:3}}>✅ Feito · {profile.temperamento}</div>}
            </div>
          </div>
        </Card>

        {/* Quiz */}
        <Card onClick={()=>setAba("quiz")} style={{cursor:"pointer"}}>
          <div style={{display:"flex",gap:14,alignItems:"center"}}>
            <div style={{width:52,height:52,borderRadius:16,background:"#F59E0B18",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>🎯</div>
            <div style={{flex:1}}>
              <div style={{fontSize:16,fontWeight:800,color:"#0A1F1A"}}>Quiz de Famosos</div>
              <div style={{fontSize:12,color:"#9CA3AF",marginTop:3}}>3 níveis · {QUIZ_QUESTIONS.length} perguntas</div>
            </div>
          </div>
        </Card>

        {/* Humor Matinal */}
        <Card onClick={()=>setAba("humor")} style={{cursor:"pointer"}}>
          <div style={{display:"flex",gap:14,alignItems:"center"}}>
            <div style={{width:52,height:52,borderRadius:16,background:"#3B82F618",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>🌅</div>
            <div style={{flex:1}}>
              <div style={{fontSize:16,fontWeight:800,color:"#0A1F1A"}}>Humor Matinal</div>
              <div style={{fontSize:12,color:"#9CA3AF",marginTop:3}}>Como você está hoje?</div>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // ─── INTRO DO NOVO TESTE ───
  if (aba==="novo_intro" && currentTest) {
    const cfg = NOVOS_TESTES[currentTest];
    const intro = cfg.intro;
    return (
      <div>
        <button onClick={resetNovo} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Voltar</button>
        <Card style={{textAlign:"center",padding:"24px 20px"}}>
          <div style={{fontSize:52,marginBottom:12}}>{intro.emoji}</div>
          <div style={{fontSize:20,fontWeight:900,color:"#0A1F1A",marginBottom:8}}>{intro.nome}</div>
          <div style={{fontSize:13,color:"#9CA3AF",marginBottom:14}}>por {intro.criador}</div>
          <div style={{fontSize:13,color:"#374151",lineHeight:1.6,marginBottom:12,background:"#F9FAFB",borderRadius:12,padding:"12px"}}>{intro.historia}</div>
          <div style={{fontSize:13,color:"#374151",lineHeight:1.6,marginBottom:8}}><strong>Como funciona:</strong> {intro.comoFunciona}</div>
          <div style={{fontSize:13,color:"#5A6B68",lineHeight:1.6,fontStyle:"italic"}}>{intro.comoInterpretar}</div>
        </Card>
        <Btn label={`Começar — ${cfg.questions.length} perguntas →`} onClick={()=>setAba("novo_perguntas")}/>
      </div>
    );
  }

  // ─── PERGUNTAS DO NOVO TESTE ───
  if (aba==="novo_perguntas" && currentTest) {
    const cfg = NOVOS_TESTES[currentTest];
    const qsNovo = shuffledQuestions || cfg.questions;
    const q = qsNovo[novoStep];
    return (
      <div>
        <button onClick={()=>setAba("menu")} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Cancelar</button>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
          <div style={{fontSize:14,fontWeight:700}}>{cfg.intro.emoji} Pergunta {novoStep+1}/{qsNovo.length}</div>
        </div>
        <div style={{height:5,background:"#E5E7EB",borderRadius:3,marginBottom:20,overflow:"hidden"}}>
          <div style={{height:"100%",width:`${((novoStep+1)/qsNovo.length)*100}%`,background:"linear-gradient(90deg,#34D399,#10B981)",borderRadius:3,transition:"width .4s"}}/>
        </div>
        <div style={{fontSize:17,fontWeight:800,marginBottom:18,lineHeight:1.35}}>{q.q}</div>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {q.opts.map((o,i)=>(
            <button key={i} onClick={()=>answerNovo(o.w)} style={{padding:"14px 18px",borderRadius:16,border:"1.5px solid #E5E7EB",background:"#fff",color:"#0A1F1A",fontSize:14,fontWeight:500,cursor:"pointer",fontFamily:"inherit",textAlign:"left",lineHeight:1.4}}>{o.t}</button>
          ))}
        </div>
      </div>
    );
  }

  // ─── RESULTADO DO NOVO TESTE ───
  if (aba==="novo_result" && currentTest && novoResult) {
    const cfg = NOVOS_TESTES[currentTest];
    const info = cfg.info[novoResult];
    if (!info) return <div><Btn label="← Voltar" onClick={resetNovo} ghost/></div>;
    return (
      <div>
        <Card style={{background:`linear-gradient(135deg,${info.cor},${info.cor}bb)`,color:"#fff",marginBottom:14,position:"relative"}}>
          <ShareBtn onClick={()=>shareContent("temperamento", {
            nome: profile?.name || "Você",
            resultado: info.nome,
            emoji: info.emoji,
            mentor: cfg.intro.nome,
            desc: info.desc,
            cor: info.cor,
          }, `${info.emoji} ${cfg.intro.nome}: ${info.nome}!\n\n"${info.desc}"`)} style={{background:"rgba(255,255,255,0.95)"}}/>
          <div style={{textAlign:"center",padding:"10px 0 16px"}}>
            <div style={{fontSize:44,marginBottom:8}}>{info.emoji}</div>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:2,textTransform:"uppercase",opacity:.8,marginBottom:6}}>
              {cfg.intro.nome}
            </div>
            <div style={{fontSize:26,fontWeight:900}}>{info.nome}</div>
            <div style={{fontSize:14,opacity:.85,marginTop:6,lineHeight:1.5}}>{info.desc}</div>
          </div>
        </Card>
        <Card>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>✅ Pontos Fortes</div>
          {info.fortes.map((f,i)=>(
            <div key={i} style={{display:"flex",gap:10,padding:"8px 0",borderBottom:i<info.fortes.length-1?"1px solid #F3F4F6":"none"}}>
              <span style={{color:"#10B981",fontWeight:700}}>+</span>
              <span style={{fontSize:13,color:"#374151"}}>{f}</span>
            </div>
          ))}
        </Card>
        <Card>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>⚠️ Pontos de Atenção</div>
          {info.atencao.map((a,i)=>(
            <div key={i} style={{display:"flex",gap:10,padding:"8px 0",borderBottom:i<info.atencao.length-1?"1px solid #F3F4F6":"none"}}>
              <span style={{color:"#F59E0B",fontWeight:700}}>!</span>
              <span style={{fontSize:13,color:"#374151"}}>{a}</span>
            </div>
          ))}
        </Card>
        <Card style={{background:"#F0FDF4",border:"1px solid #BBF7D0"}}>
          <div style={{fontSize:11,color:"#059669",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>💡 Dicas Práticas</div>
          {info.dicas.map((d,i)=>(
            <div key={i} style={{display:"flex",gap:10,padding:"6px 0"}}>
              <span style={{color:"#10B981",flexShrink:0}}>→</span>
              <span style={{fontSize:13,color:"#065F46"}}>{d}</span>
            </div>
          ))}
        </Card>
        <div style={{fontSize:11,color:"#9CA3AF",textAlign:"center",marginBottom:12}}>✅ Salvo no seu perfil</div>
        <Btn label="↻ Refazer" onClick={()=>{setNovoStep(0);setNovoScores({});setNovoResult(null);setAba("novo_perguntas");}} ghost/>
        <div style={{marginTop:10}}><Btn label="← Voltar para Testes" onClick={resetNovo} ghost/></div>
      </div>
    );
  }

  // ─── QI CULTURAL ───
  if (aba==="qi") {
    if (qiDone) {
      const level = QI_LEVELS.find(l => qiScore >= l.min && qiScore <= l.max) || QI_LEVELS[0];
      return (
        <div>
          <Card style={{textAlign:"center",background:`${level.cor}18`,border:`1px solid ${level.cor}30`}}>
            <div style={{fontSize:52,marginBottom:10}}>{level.emoji}</div>
            <div style={{fontSize:22,fontWeight:900,color:"#0A1F1A",marginBottom:4}}>{level.nome}</div>
            <div style={{fontSize:28,fontWeight:900,color:level.cor,marginBottom:8}}>{qiScore}/{QI_QUESTIONS.length}</div>
            <div style={{fontSize:13,color:"#5A6B68",lineHeight:1.5}}>{level.desc}</div>
          </Card>
          <Btn label="↻ Tentar novamente" onClick={()=>{setQiStep(0);setQiScore(0);setQiFb(null);setQiDone(false);}} ghost/>
          <div style={{marginTop:10}}><Btn label="← Voltar para Testes" onClick={resetQI} ghost/></div>
        </div>
      );
    }
    const q = QI_QUESTIONS[qiStep];
    return (
      <div>
        <button onClick={resetQI} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Cancelar</button>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
          <div style={{fontSize:14,fontWeight:700}}>🧠 Pergunta {qiStep+1}/{QI_QUESTIONS.length}</div>
          <div style={{fontSize:13,fontWeight:700,color:"#F59E0B"}}>✓ {qiScore}</div>
        </div>
        <div style={{height:5,background:"#E5E7EB",borderRadius:3,marginBottom:20,overflow:"hidden"}}>
          <div style={{height:"100%",width:`${((qiStep+1)/QI_QUESTIONS.length)*100}%`,background:"linear-gradient(90deg,#FCD34D,#F59E0B)",borderRadius:3,transition:"width .4s"}}/>
        </div>
        <div style={{fontSize:17,fontWeight:800,marginBottom:18,lineHeight:1.35}}>{q.q}</div>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {q.opts.map((o,i)=>{
            let bg="#fff",bc="#E5E7EB",col="#0A1F1A";
            if (qiFb!==null){if(i===q.c){bg="#F0FDF4";bc="#10B981";col="#065F46";}else{bg="#FEF2F2";bc="#EF4444";}}
            return <button key={i} onClick={()=>qiFb===null&&answerQI(i)} style={{padding:"14px 18px",borderRadius:16,border:`1.5px solid ${bc}`,background:bg,color:col,fontSize:14,fontWeight:500,cursor:qiFb===null?"pointer":"default",fontFamily:"inherit",textAlign:"left",lineHeight:1.4,transition:"all .2s"}}>{o}</button>;
          })}
        </div>
        {qiFb!==null&&<div style={{marginTop:12,padding:"11px 14px",borderRadius:12,background:qiFb?"#F0FDF4":"#FEF2F2",fontSize:13,color:qiFb?"#065F46":"#991B1B",fontWeight:600}}>{qiFb?"✅ Correto!": `❌ Resposta: ${q.opts[q.c]}`}</div>}
      </div>
    );
  }

  // ─── TEMPERAMENTO ───
  if (aba==="tempe") {
    const qsTempe = shuffledQuestions || QUESTIONS;
    const q = qsTempe[step];
    return (
      <div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
          <div style={{fontSize:14,fontWeight:700,color:"#0A1F1A"}}>Pergunta {step+1}/{qsTempe.length}</div>
          <button onClick={resetTempe} style={{background:"transparent",border:"1px solid #E5E7EB",borderRadius:20,padding:"5px 12px",fontSize:12,color:"#9CA3AF",cursor:"pointer"}}>Cancelar</button>
        </div>
        <div style={{height:5,background:"#E5E7EB",borderRadius:3,marginBottom:22,overflow:"hidden"}}>
          <div style={{height:"100%",width:`${((step+1)/qsTempe.length)*100}%`,background:"linear-gradient(90deg,#34D399,#10B981)",borderRadius:3,transition:"width .4s"}}/>
        </div>
        <div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",marginBottom:18,lineHeight:1.3}}>{q.q}</div>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {q.opts.map((o,i)=>(
            <button key={i} onClick={()=>answerTempe(o.w)} style={{padding:"15px 18px",borderRadius:16,border:"1.5px solid #E5E7EB",background:"#fff",color:"#0A1F1A",fontSize:14,fontWeight:500,cursor:"pointer",fontFamily:"inherit",textAlign:"left",lineHeight:1.4}}>{o.t}</button>
          ))}
        </div>
      </div>
    );
  }

  if (aba==="tempe_result") {
    const total = Object.values(scores).reduce((s,v)=>s+v,0);
    const d = Object.entries(scores).sort((a,b)=>b[1]-a[1])[0][0];
    const t = TEMPE_INFO[d];
    return (
      <div>
        <div style={{background:`linear-gradient(135deg,${t.cor},${t.cor}bb)`,borderRadius:24,padding:"26px 22px",marginBottom:14,color:"#fff",position:"relative"}}>
          <ShareBtn onClick={()=>shareContent("temperamento", {
            nome: profile?.name || "Você",
            resultado: t.nome,
            emoji: t.emoji,
            mentor: t.mentor,
            desc: t.desc,
            cor: t.cor,
          }, `${t.emoji} Sou ${t.nome}!\n\nComo ${t.mentor}.\n\n"${t.desc}"`)} style={{background:"rgba(255,255,255,0.95)"}}/>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:2,textTransform:"uppercase",opacity:.8,marginBottom:10}}>Seu Temperamento</div>
          <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:12}}>
            <span style={{fontSize:44}}>{t.emoji}</span>
            <div>
              <div style={{fontSize:26,fontWeight:900,letterSpacing:-1}}>{t.nome}</div>
              <div style={{fontSize:13,opacity:.85,marginTop:2}}>Mentor: {t.mentor}</div>
            </div>
          </div>
          <div style={{fontSize:14,lineHeight:1.6,opacity:.92,marginBottom:14}}>{t.desc}</div>
        </div>
        <Card>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>Distribuição</div>
          {Object.entries(TEMPE_INFO).map(([k,info])=>{
            const pct = Math.round((scores[k]/total)*100);
            return (
              <div key={k} style={{marginBottom:12}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                  <span style={{fontSize:13,fontWeight:600}}>{info.emoji} {info.nome}</span>
                  <span style={{fontSize:13,fontWeight:800,color:info.cor}}>{pct}%</span>
                </div>
                <div style={{height:6,background:"#F3F4F6",borderRadius:3,overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${pct}%`,background:info.cor,borderRadius:3}}/>
                </div>
              </div>
            );
          })}
        </Card>
        <Btn label="↻ Refazer" onClick={resetTempe} ghost/>
        <div style={{marginTop:10}}><Btn label="← Voltar para Testes" onClick={()=>setAba("menu")} ghost/></div>
      </div>
    );
  }

  // ─── QUIZ ───
  if (aba==="quiz") {
    if (!qLevel) {
      const LEVELS = [
        {id:"facil",emoji:"🟢",nome:"Fácil",desc:"Conhecimento geral",cor:"#10B981",count:getQuizByLevel("facil").length},
        {id:"medio",emoji:"🟡",nome:"Médio",desc:"Conhecimento intermediário",cor:"#F59E0B",count:getQuizByLevel("medio").length},
        {id:"dificil",emoji:"🔴",nome:"Difícil",desc:"Trivia avançada",cor:"#EF4444",count:getQuizByLevel("dificil").length},
      ];
      return (
        <div>
          <button onClick={()=>setAba("menu")} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Voltar</button>
          <div style={{fontSize:18,fontWeight:800,marginBottom:4}}>🎯 Quiz de Famosos</div>
          <div style={{fontSize:12,color:"#9CA3AF",marginBottom:18}}>Escolha o nível</div>
          {LEVELS.map(lv=>(
            <Card key={lv.id} onClick={()=>startQuiz(lv.id)} style={{cursor:"pointer",borderLeft:`4px solid ${lv.cor}`}}>
              <div style={{display:"flex",gap:14,alignItems:"center"}}>
                <span style={{fontSize:32}}>{lv.emoji}</span>
                <div style={{flex:1}}>
                  <div style={{fontSize:17,fontWeight:800}}>{lv.nome}</div>
                  <div style={{fontSize:12,color:"#9CA3AF",marginTop:2}}>{lv.desc} · {lv.count} perguntas</div>
                </div>
                <span style={{fontSize:22,color:lv.cor,opacity:.6}}>→</span>
              </div>
            </Card>
          ))}
        </div>
      );
    }
    if (qDone) {
      const total=qPool.length, pct=Math.round((qScore/total)*100);
      const levelColor={facil:"#10B981",medio:"#F59E0B",dificil:"#EF4444"}[qLevel];
      return (
        <div>
          <Card style={{textAlign:"center",background:"#FFF7ED",border:"1px solid #FED7AA"}}>
            <div style={{fontSize:44,marginBottom:10}}>🏆</div>
            <div style={{fontSize:28,fontWeight:900,marginBottom:4}}>{qScore}/{total}</div>
            <div style={{fontSize:13,color:"#5A6B68",marginBottom:14}}>
              {pct>=80?"Incrível! Expert! 🌟":pct>=60?"Muito bom! 👍":pct>=40?"Bom começo! 📚":"Continue aprendendo! 🌱"}
            </div>
          </Card>
          <Btn label="↻ Outro nível" onClick={resetQuiz} ghost/>
          <div style={{marginTop:10}}><Btn label="← Voltar para Testes" onClick={()=>setAba("menu")} ghost/></div>
        </div>
      );
    }
    const q=qPool[qIdx];
    if(!q) return <div><Btn label="← Voltar" onClick={resetQuiz} ghost/></div>;
    const levelColor={facil:"#10B981",medio:"#F59E0B",dificil:"#EF4444"}[qLevel];
    const levelEmoji={facil:"🟢",medio:"🟡",dificil:"🔴"}[qLevel];
    return (
      <div>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:14,alignItems:"center"}}>
          <div style={{fontSize:14,fontWeight:700}}>{levelEmoji} Pergunta {qIdx+1}/{qPool.length}</div>
          <div style={{fontSize:13,fontWeight:700,color:levelColor}}>✓ {qScore}</div>
        </div>
        <div style={{height:5,background:"#E5E7EB",borderRadius:3,marginBottom:20,overflow:"hidden"}}>
          <div style={{height:"100%",width:`${((qIdx+1)/qPool.length)*100}%`,background:levelColor,borderRadius:3,transition:"width .4s"}}/>
        </div>
        <div style={{fontSize:17,fontWeight:800,marginBottom:18,lineHeight:1.35}}>{q.q}</div>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {q.opts.map((o,i)=>{
            let bg="#fff",bc="#E5E7EB",col="#0A1F1A";
            if(qFb!==null){if(i===q.c){bg="#F0FDF4";bc="#10B981";col="#065F46";}else if(qFb===false){bg="#FEF2F2";bc="#EF4444";}}
            return <button key={i} onClick={()=>qFb===null&&answerQuiz(i)} style={{padding:"14px 18px",borderRadius:16,border:`1.5px solid ${bc}`,background:bg,color:col,fontSize:14,fontWeight:500,cursor:qFb===null?"pointer":"default",fontFamily:"inherit",textAlign:"left",lineHeight:1.4,transition:"all .2s"}}>{o}</button>;
          })}
        </div>
        {qFb!==null&&<div style={{marginTop:12,padding:"11px 14px",borderRadius:12,background:qFb?"#F0FDF4":"#FEF2F2",fontSize:13,color:qFb?"#065F46":"#991B1B",fontWeight:600}}>{qFb?"✅ Correto!":`❌ Resposta: ${q.opts[q.c]}`}</div>}
      </div>
    );
  }

  // ─── HUMOR MATINAL EXPANDIDO ───
  if (aba==="humor") {
    if (mood) {
      const m = MOODS.find(x=>x.id===mood);
      const hExp = HUMOR_EXPANDIDO[mood];
      const frases = HUMOR_FRASES_EXPANDIDAS[mood];
      const f = frases[DOY % frases.length];
      return (
        <div>
          <button onClick={()=>setMood(null)} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Outro humor</button>
          <Card style={{background:`${m.cor}12`,border:`1px solid ${m.cor}30`}}>
            <div style={{textAlign:"center",marginBottom:16}}>
              <div style={{fontSize:44,marginBottom:8}}>{m.emoji}</div>
              <div style={{fontSize:17,fontWeight:800,color:"#0A1F1A"}}>Você está {m.label.toLowerCase()} hoje</div>
            </div>
            <div style={{fontSize:14,color:m.cor,fontWeight:700,marginBottom:6}}>{hExp.abertura}</div>
            <div style={{fontSize:14,color:"#374151",lineHeight:1.7,marginBottom:12}}>{hExp.acolhimento}</div>
            <div style={{fontSize:14,color:"#374151",lineHeight:1.7,marginBottom:16,fontWeight:500}}>{hExp.motivacao}</div>
          </Card>
          <Card>
            <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>✨ MENSAGEM DO DIA</div>
            <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:8}}>
              <span style={{fontSize:22}}>{f.emoji}</span>
              <div style={{fontSize:13,fontWeight:700}}>{f.famoso}</div>
            </div>
            <div style={{fontSize:14,color:"#374151",lineHeight:1.7,fontStyle:"italic",borderLeft:`3px solid ${m.cor}`,paddingLeft:14}}>"{f.quote}"</div>
            {f.contexto && <div style={{fontSize:11,color:"#9CA3AF",marginTop:8,fontStyle:"italic"}}>{f.contexto}</div>}
          </Card>
          <Card>
            <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>🎯 ATIVIDADES PARA HOJE</div>
            {hExp.atividades.map((a,i)=>(
              <div key={i} style={{padding:"8px 0",borderBottom:i<hExp.atividades.length-1?"1px solid #F3F4F6":"none",fontSize:13,color:"#374151"}}>{a}</div>
            ))}
          </Card>
          <Card style={{background:"#F0FDF4",border:"1px solid #BBF7D0"}}>
            <div style={{fontSize:11,color:"#059669",fontWeight:700,marginBottom:4}}>🏆 DESAFIO DO DIA</div>
            <div style={{fontSize:13,color:"#065F46"}}>{hExp.desafio}</div>
          </Card>
          <Card>
            <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,marginBottom:4}}>🎵 TRILHA DO DIA</div>
            <div style={{fontSize:13,color:"#374151"}}>{hExp.musica}</div>
          </Card>
          <Btn label="← Voltar para Testes" onClick={()=>{setMood(null);setAba("menu");}} ghost/>
        </div>
      );
    }
    return (
      <div>
        <button onClick={()=>setAba("menu")} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Voltar</button>
        <div style={{fontSize:18,fontWeight:800,marginBottom:4}}>🌅 Humor Matinal</div>
        <div style={{fontSize:12,color:"#9CA3AF",marginBottom:18}}>Como você está hoje?</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          {MOODS.map(m=>(
            <button key={m.id} onClick={()=>setMood(m.id)} style={{padding:"20px 10px",borderRadius:20,border:`1.5px solid ${m.cor}30`,background:`${m.cor}10`,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"center",gap:8}}>
              <span style={{fontSize:34}}>{m.emoji}</span>
              <span style={{fontSize:14,fontWeight:700}}>{m.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

// ============================================================
// PERFIL
// ============================================================
function PerfilScreen({profile, onSave, onReset}) {
  const [form,setForm] = useState(profile || {});
  const [showRaioX,setShowRaioX] = useState(false);
  const set = (k,v) => setForm(f => ({...f, [k]:v}));
  const sign = form.birthDay && form.birthMonth ? getSign(form.birthDay, form.birthMonth) : null;
  const vida = calcVida(form.birthDay, form.birthMonth, form.birthYear);
  const numInfo = form.birthDay && form.birthYear ? getNumerologia(form.birthDay, form.birthMonth, form.birthYear) : null;
  const inp = {width:"100%",background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:12,
    color:"#0A1F1A",fontSize:15,padding:"13px 15px",boxSizing:"border-box",fontWeight:500};

  // Raio X — conta testes feitos
  const TODOS_CAMPOS = ["temperamento","amor","politico","personalidade","profissional","tradicao"];
  const testesFEITOS = TODOS_CAMPOS.filter(k => profile?.[k]);

  if (showRaioX) {
    const animal = profile?.birthYear ? getAnimalChines(profile.birthYear) : null;
    const rashi = profile?.sign ? getRashi(profile.sign) : null;
    const lua = getFaseLua();
    const TEMPE_LABELS = {colerico:"🔥 Colérico",sanguineo:"☀️ Sanguíneo",melancolico:"🌊 Melancólico",fleumatico:"🌿 Fleumático"};
    const AMOR_LABELS = {palavras:"💬 Palavras de Afirmação",tempo:"⏰ Tempo de Qualidade",presentes:"🎁 Presentes",atos:"🤝 Atos de Serviço",toque:"🤗 Toque Físico"};
    const POL_LABELS = {esquerda:"🌹 Esquerda",centro:"⚖️ Centro",direita:"🦅 Direita",liberal:"🗽 Liberal"};
    const PER_LABELS = {intro:"🌙 Introvertido(a)",ambiv:"🌗 Ambivertido(a)",extra:"☀️ Extrovertido(a)"};
    const PROF_LABELS = {empreendedor:"🚀 Empreendedor(a)",executor:"⚙️ Executor(a)",criativo:"🎨 Criativo(a)",analitico:"📊 Analítico(a)"};

    return (
      <div>
        <button onClick={()=>setShowRaioX(false)} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Voltar ao Perfil</button>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:4}}>
          <div style={{fontSize:18,fontWeight:800}}>☢️ Raio X</div>
          <button onClick={()=>{
            const resultados = [];
            if (profile?.temperamento) resultados.push({emoji:"🔥",label:"Temperamento",valor:TEMPE_LABELS[profile.temperamento]?.replace(/^[^\s]+\s/,"")||profile.temperamento});
            if (profile?.personalidade) resultados.push({emoji:"🧩",label:"Personalidade",valor:PER_LABELS[profile.personalidade]?.replace(/^[^\s]+\s/,"")||profile.personalidade});
            if (profile?.amor) resultados.push({emoji:"💘",label:"Amor",valor:AMOR_LABELS[profile.amor]?.replace(/^[^\s]+\s/,"")||profile.amor});
            if (profile?.profissional) resultados.push({emoji:"💼",label:"Profissional",valor:PROF_LABELS[profile.profissional]?.replace(/^[^\s]+\s/,"")||profile.profissional});
            if (profile?.sign) resultados.push({emoji:SIGN_EMOJI[profile.sign],label:"Signo",valor:profile.sign});
            shareContent("raioX", {
              nome: profile?.name || "Você",
              resultados,
            }, `☢️ Meu Raio X completo no KomparAI:\n\n${resultados.map(r=>`${r.emoji} ${r.label}: ${r.valor}`).join("\n")}`);
          }} style={{background:"#10B981",color:"#fff",border:"none",borderRadius:20,padding:"8px 14px",fontSize:13,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:6}}>📤 Compartilhar</button>
        </div>
        <div style={{fontSize:12,color:"#9CA3AF",marginBottom:16}}>Tudo que você descobriu sobre si mesmo</div>

        {/* Identidade */}
        <Card style={{background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",color:"#fff",marginBottom:14}}>
          <div style={{fontSize:11,color:"#34D399",fontWeight:700,textTransform:"uppercase",letterSpacing:1.5,marginBottom:12}}>👤 Identidade</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
            {[
              {l:"Nome",v:profile?.name||"—"},
              {l:"Gênero",v:profile?.gender==="M"?"👨 Homem":profile?.gender==="F"?"👩 Mulher":profile?.gender==="X"?"🌈 Outro":"—"},
              {l:"Nascimento",v:profile?.birthDay?`${profile.birthDay}/${profile.birthMonth}/${profile.birthYear||"?"}`:"—"},
              {l:"Signo",v:profile?.sign?`${SIGN_EMOJI[profile.sign]} ${profile.sign}`:"—"},
            ].map(item=>(
              <div key={item.l} style={{background:"#ffffff10",borderRadius:10,padding:"10px"}}>
                <div style={{fontSize:9,color:"#9CA3AF",textTransform:"uppercase",letterSpacing:1,marginBottom:3}}>{item.l}</div>
                <div style={{fontSize:13,fontWeight:700,color:"#fff"}}>{item.v}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Físico */}
        {(profile?.height || profile?.weight) && (
          <Card style={{marginBottom:14}}>
            <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>📏 Físico</div>
            <div style={{display:"flex",gap:10}}>
              {profile?.height && <div style={{flex:1,background:"#F9FAFB",borderRadius:10,padding:"10px",textAlign:"center"}}>
                <div style={{fontSize:22,fontWeight:900,color:"#10B981"}}>{profile.height}cm</div>
                <div style={{fontSize:10,color:"#9CA3AF"}}>Altura</div>
              </div>}
              {profile?.weight && <div style={{flex:1,background:"#F9FAFB",borderRadius:10,padding:"10px",textAlign:"center"}}>
                <div style={{fontSize:22,fontWeight:900,color:"#10B981"}}>{profile.weight}kg</div>
                <div style={{fontSize:10,color:"#9CA3AF"}}>Peso</div>
              </div>}
            </div>
          </Card>
        )}

        {/* Testes psicológicos */}
        <Card style={{marginBottom:14}}>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>🧠 Perfil Psicológico</div>
          {[
            {l:"Temperamento",v:TEMPE_LABELS[profile?.temperamento],cor:"#EF4444"},
            {l:"Personalidade",v:PER_LABELS[profile?.personalidade],cor:"#6366F1"},
            {l:"Amor",v:AMOR_LABELS[profile?.amor],cor:"#EC4899"},
            {l:"Político",v:POL_LABELS[profile?.politico],cor:"#3B82F6"},
            {l:"Profissional",v:PROF_LABELS[profile?.profissional],cor:"#10B981"},
          ].filter(i=>i.v).map(item=>(
            <div key={item.l} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #F3F4F6"}}>
              <div style={{fontSize:12,color:"#9CA3AF",fontWeight:600}}>{item.l}</div>
              <div style={{fontSize:13,fontWeight:700,color:item.cor}}>{item.v}</div>
            </div>
          ))}
          {testesFEITOS.filter(k=>["temperamento","amor","politico","personalidade","profissional"].includes(k)).length===0 && (
            <div style={{fontSize:13,color:"#9CA3AF",textAlign:"center",padding:"10px 0"}}>Faça os testes para preencher aqui</div>
          )}
        </Card>

        {/* Astrológico */}
        <Card style={{marginBottom:14}}>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>✨ Mapa Astral</div>
          {[
            {l:"Signo Ocidental",v:profile?.sign?`${SIGN_EMOJI[profile.sign]} ${profile.sign}`:null},
            {l:"Animal Chinês",v:animal?`${ANIMAIS_CHINESES[animal]?.emoji} ${ANIMAIS_CHINESES[animal]?.animal}`:null},
            {l:"Rashi Védico",v:rashi?`${RASHIS_VEDICOS[rashi]?.emoji} ${rashi}`:null},
            {l:"Numerologia",v:numInfo?`${numInfo.emoji} Número ${numInfo.numero} — ${numInfo.nome}`:null},
            {l:"Lua de Hoje",v:`${lua.emoji} ${lua.fase}`},
          ].filter(i=>i.v).map(item=>(
            <div key={item.l} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #F3F4F6"}}>
              <div style={{fontSize:12,color:"#9CA3AF",fontWeight:600}}>{item.l}</div>
              <div style={{fontSize:13,fontWeight:700,color:"#0A1F1A"}}>{item.v}</div>
            </div>
          ))}
        </Card>

        {/* Espiritual */}
        {profile?.tradicao && (
          <Card style={{marginBottom:14}}>
            <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>🙏 Espiritualidade</div>
            <div style={{display:"flex",gap:10,alignItems:"center"}}>
              <span style={{fontSize:30}}>{TRADICAO_EMOJI[profile.tradicao]||"🌟"}</span>
              <div>
                <div style={{fontSize:15,fontWeight:800}}>{profile.tradicao}</div>
                <div style={{fontSize:12,color:"#9CA3AF"}}>Tradição que mais ressoa com você</div>
              </div>
            </div>
          </Card>
        )}

        {/* Testes pendentes */}
        {testesFEITOS.length < TODOS_CAMPOS.length && (
          <div style={{background:"#FFF7ED",borderRadius:16,padding:"14px",marginBottom:14}}>
            <div style={{fontSize:12,fontWeight:700,color:"#92400E",marginBottom:6}}>📊 Complete seu Raio X</div>
            <div style={{fontSize:12,color:"#92400E"}}>{TODOS_CAMPOS.length - testesFEITOS.length} testes pendentes para completar seu perfil.</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <div style={{fontSize:18,fontWeight:800,marginBottom:14}}>👤 Meu Perfil</div>

      {/* Botão Raio X */}
      {testesFEITOS.length >= 2 && (
        <Card onClick={()=>setShowRaioX(true)} style={{background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",cursor:"pointer",marginBottom:14}}>
          <div style={{display:"flex",gap:14,alignItems:"center"}}>
            <div style={{width:52,height:52,borderRadius:16,background:"#10B98130",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>☢️</div>
            <div style={{flex:1}}>
              <div style={{fontSize:16,fontWeight:800,color:"#fff"}}>Meu Raio X</div>
              <div style={{fontSize:12,color:"#6EE7B7",marginTop:2}}>Visão completa do que você descobriu</div>
              <div style={{fontSize:10,color:"#34D399",marginTop:4}}>{testesFEITOS.length} de {TODOS_CAMPOS.length} perfis completos</div>
            </div>
            <span style={{fontSize:18,color:"#10B981"}}>→</span>
          </div>
        </Card>
      )}
      {testesFEITOS.length < 2 && (
        <div style={{background:"#F9FAFB",borderRadius:14,padding:"12px 14px",marginBottom:14,fontSize:12,color:"#9CA3AF"}}>
          ☢️ Complete pelo menos 2 testes para liberar o Raio X
        </div>
      )}
      <Label>Nome</Label>
      <input value={form.name||""} onChange={e=>set("name",e.target.value)} placeholder="Seu nome" style={{...inp,marginBottom:14}}/>
      <Label>Gênero</Label>
      <div style={{display:"flex",gap:10,marginBottom:14}}>
        {[{v:"M",l:"👨 Homem"},{v:"F",l:"👩 Mulher"},{v:"X",l:"🌈 Outro"}].map(o=>(
          <button key={o.v} onClick={()=>set("gender",o.v)} style={{
            flex:1,padding:"12px 8px",borderRadius:12,border:`1.5px solid ${form.gender===o.v?"#10B981":"#E5E7EB"}`,
            background:form.gender===o.v?"#10B981":"#fff",
            color:form.gender===o.v?"#fff":"#0A1F1A",
            fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>{o.l}</button>
        ))}
      </div>
      <Label>Data de nascimento</Label>
      <div style={{display:"flex",gap:6,marginBottom:14,width:"100%"}}>
        <input type="number" inputMode="numeric" value={form.birthDay||""}
          onChange={e=>set("birthDay",sanitizeInt(e.target.value))}
          onBlur={e=>set("birthDay",clampInt(e.target.value,1,31))}
          placeholder="Dia"
          style={{flex:"0 0 22%",minWidth:0,background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:10,color:"#0A1F1A",fontSize:14,padding:"12px 8px",boxSizing:"border-box",fontWeight:500,textAlign:"center"}}/>
        <select value={form.birthMonth||""} onChange={e=>set("birthMonth",parseInt(e.target.value)||"")}
          style={{flex:"1 1 auto",minWidth:0,background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:10,color:form.birthMonth?"#0A1F1A":"#9CA3AF",fontSize:14,padding:"12px 6px",boxSizing:"border-box",WebkitAppearance:"none"}}>
          <option value="">Mês</option>
          {MONTHS.slice(1).map((m,i)=><option key={i+1} value={i+1}>{m}</option>)}
        </select>
        <input type="number" inputMode="numeric" value={form.birthYear||""}
          onChange={e=>set("birthYear",sanitizeInt(e.target.value))}
          onBlur={e=>set("birthYear",clampInt(e.target.value,1900,new Date().getFullYear()))}
          placeholder="Ano"
          style={{flex:"0 0 28%",minWidth:0,background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:10,color:"#0A1F1A",fontSize:14,padding:"12px 8px",boxSizing:"border-box",fontWeight:500,textAlign:"center"}}/>
      </div>
      {sign && (
        <div style={{display:"flex",alignItems:"center",gap:10,background:"#F5F3FF",borderRadius:12,padding:"10px 14px",marginBottom:14}}>
          <span style={{fontSize:20}}>{SIGN_EMOJI[sign]}</span>
          <div>
            <div style={{fontSize:11,color:"#7C3AED",fontWeight:700}}>Signo calculado</div>
            <div style={{fontSize:14,fontWeight:800}}>{sign}</div>
          </div>
        </div>
      )}
      {vida && (
        <Card style={{background:"linear-gradient(135deg,#F0FDF4,#fff)",border:"1px solid #BBF7D0"}}>
          <div style={{fontSize:11,color:"#059669",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>🎂 Sua Jornada</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {[
              {icon:"🎂",l:"Idade",v:`${vida.anos}a ${vida.meses}m ${vida.dias}d`},
              {icon:"📅",l:"Nasceu na",v:vida.diaSemNasc},
              {icon:"⏳",l:"Dias vividos",v:`${vida.totalDias.toLocaleString("pt-BR")}`},
              {icon:"🎉",l:"Próx. aniv.",v:`em ${vida.diasParaAniv}d`},
            ].map(item=>(
              <div key={item.l} style={{background:"#fff",borderRadius:12,padding:"12px",border:"1px solid #E5E7EB"}}>
                <div style={{fontSize:16,marginBottom:3}}>{item.icon}</div>
                <div style={{fontSize:10,color:"#9CA3AF",fontWeight:600}}>{item.l}</div>
                <div style={{fontSize:12,fontWeight:800,lineHeight:1.3}}>{item.v}</div>
              </div>
            ))}
          </div>
        </Card>
      )}
      <Label>Altura e Peso</Label>
      <div style={{display:"flex",gap:10,marginBottom:14}}>
        <input type="number" inputMode="numeric" value={form.height||""}
          onChange={e=>set("height",sanitizeInt(e.target.value))}
          onBlur={e=>set("height",clampInt(e.target.value,50,250))}
          placeholder="Altura (cm)" style={{...inp,flex:1}}/>
        <input type="number" inputMode="numeric" value={form.weight||""}
          onChange={e=>set("weight",sanitizeInt(e.target.value))}
          onBlur={e=>set("weight",clampInt(e.target.value,20,300))}
          placeholder="Peso (kg)" style={{...inp,flex:1}}/>
      </div>
      <Label>Tradição Espiritual</Label>
      <select value={form.tradicao||""} onChange={e=>set("tradicao",e.target.value)}
        style={{...inp,marginBottom:14,color:form.tradicao?"#0A1F1A":"#9CA3AF",WebkitAppearance:"none"}}>
        <option value="">Selecione (ou faça o teste)</option>
        {TRADICOES_DISPONIVEIS.map(t=><option key={t} value={t}>{TRADICAO_EMOJI[t]||"🌟"} {t}</option>)}
      </select>
      {numInfo && (
        <div style={{background:"#F0FDF4",borderRadius:14,padding:"14px",marginBottom:14}}>
          <div style={{fontSize:11,color:"#059669",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:6}}>🔢 Numerologia</div>
          <div style={{fontSize:15,fontWeight:800,color:"#0A1F1A"}}>{numInfo.emoji} Número {numInfo.numero} — {numInfo.nome}</div>
          <div style={{fontSize:12,color:"#5A6B68",marginTop:4}}>{numInfo.essencia}</div>
        </div>
      )}
      <Btn label="💾 Salvar perfil" onClick={()=>onSave({...form, sign})}/>
      <div style={{marginTop:24,textAlign:"center"}}>
        <button onClick={onReset} style={{background:"transparent",border:"none",color:"#DC2626",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit",padding:8}}>
          🗑️ Limpar todos os dados e recomeçar
        </button>
      </div>
    </div>
  );
}

// ============================================================
// APP PRINCIPAL
// ============================================================
export default function App() {
  const initial = (() => { const s = loadProfile(); return s && s.name ? s : null; })();
  const [screen,setScreen] = useState(initial ? "app" : "onboarding");
  const [tab,setTab] = useState("home");
  const [profile,setProfile] = useState(initial);
  const [toast,setToast] = useState({msg:"",type:"success"});

  useEffect(()=>{ saveProfileLS(profile); }, [profile]);

  const showToast = (msg,type="success") => setToast({msg,type});
  const hideToast = () => setToast({msg:"",type:"success"});

  const finishOnboarding = (data) => { setProfile(data); setScreen("app"); showToast(`Bem-vindo${data.gender==="F"?"a":""}, ${data.name}!`); };
  const saveProfile = (p) => { setProfile(p); showToast("Perfil salvo!"); };
  const saveToProfile = (extra) => { setProfile(prev => ({...(prev||{}), ...extra})); showToast("Salvo no perfil!"); };
  const onTestDone = (d) => setProfile(prev => ({...(prev||{}), temperamento:d}));
  const resetApp = () => { if (window.confirm("Limpar todos os dados?")) { saveProfileLS(null); setProfile(null); setScreen("onboarding"); }};
  const goCoincidence = () => setTab("coincidencia");

  const NAV = [
    {id:"home",emoji:"🏠",label:"Home"},
    {id:"testes",emoji:"🧠",label:"Testes"},
    {id:"astral",emoji:"✨",label:"Astral"},
    {id:"espiritualidade",emoji:"🙏",label:"Espirit."},
    {id:"perfil",emoji:"👤",label:"Perfil"},
  ];

  if (screen === "onboarding") return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      <style>{`*{box-sizing:border-box;font-family:'Sora',sans-serif}input:focus,select:focus{outline:none!important;border-color:#10B981!important}select{-webkit-appearance:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{-webkit-appearance:none}`}</style>
      <Onboarding onDone={finishOnboarding}/>
      <Toast message={toast.msg} type={toast.type} onClose={hideToast}/>
    </>
  );

  return (
    <div style={{minHeight:"100vh",background:"#F8FAFB",fontFamily:"'Sora',sans-serif",paddingBottom:90}}>
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      <style>{`*{box-sizing:border-box}@keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}input,select,button{font-family:'Sora',sans-serif}input:focus,select:focus{outline:none!important;border-color:#10B981!important}select{-webkit-appearance:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{-webkit-appearance:none}`}</style>
      <div style={{maxWidth:440,margin:"0 auto",padding:"20px 16px 0",animation:"fadeUp .35s"}}>
        {tab==="home" && <HomeScreen profile={profile} goCoincidence={goCoincidence} goTest={()=>setTab("testes")} goEspiritualidade={()=>setTab("espiritualidade")}/>}
        {tab==="testes" && <TestesScreen profile={profile} onComplete={onTestDone} goCoincidence={goCoincidence} onSaveExtra={saveToProfile}/>}
        {tab==="coincidencia" && <CoincidenceTest profile={profile} onSaveToProfile={saveToProfile} onBack={()=>setTab("home")}/>}
        {tab==="astral" && <AstralScreen profile={profile}/>}
        {tab==="espiritualidade" && <EspiritualidadeScreen profile={profile} onSaveTradicao={(t)=>saveToProfile({tradicao:t})}/>}
        {tab==="perfil" && <PerfilScreen profile={profile} onSave={saveProfile} onReset={resetApp}/>}
      </div>
      <div style={{position:"fixed",bottom:0,left:0,right:0,background:"#fff",borderTop:"1px solid #F0F0F0",display:"flex",justifyContent:"space-around",alignItems:"center",padding:"8px 0 20px",boxShadow:"0 -4px 20px #0000000a",zIndex:100}}>
        {NAV.map(n=>(
          <button key={n.id} onClick={()=>setTab(n.id)} style={{background:"transparent",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:3,padding:"6px 8px",borderRadius:12,fontFamily:"inherit"}}>
            <span style={{fontSize:20,filter:tab===n.id||(tab==="coincidencia"&&n.id==="home")?"none":"grayscale(1) opacity(.5)"}}>{n.emoji}</span>
            <span style={{fontSize:9,fontWeight:700,color:tab===n.id||(tab==="coincidencia"&&n.id==="home")?"#10B981":"#9CA3AF",letterSpacing:.3,textTransform:"uppercase"}}>{n.label}</span>          </button>
        ))}
      </div>
      <Toast message={toast.msg} type={toast.type} onClose={hideToast}/>
    </div>
  );
}
