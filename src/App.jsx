import { useState, useEffect, useRef } from "react";
import famosos from "./data/famosos.json";
import { YEAR_FACTS, getYearFact } from "./data/yearFacts";
import { getFaseLua } from "./data/lua";
import { SANTOS_FIXOS, FALLBACK_SANTOS, getSantoDoDiaCompleto, SANTO_DO_DIA, getSantoDoDia } from "./data/santos";
import { HOROSCOPO_GREGO, ANIMAIS_CHINESES, getAnimalChines, RASHIS_VEDICOS, getRashi, FRASES_GREGAS, FRASES_CHINESAS, FRASES_VEDICAS, getFraseGrega, getFraseChinesa, getFraseVedica, HOROSCOPO_DIARIO, AFIRMACOES_ASTRAL, ELEMENTOS_DIA, SUPERLUAS_2026, getProximaSuperlua } from "./data/horoscopos";
import { MESES_HEBRAICOS, HEBREW_MONTH_STARTS_2026, getHebrewDate, FIXED_DATES, MOVABLE_DATES_2026, getShabat, DIAS_PT, MESES_PT, getOcidental, HEBREW_2026, getHebraico, getJapones, MESES_ET, getEtiope, MESES_HIJRI, getIslamico, ANIMAIS_CHINA, EMOJI_ANIMAIS, ELEMENTOS, MESES_CHINA, getChines, getRomano, getPersa, getAssirio, getArmenio, getBudista, getCoreano, getHoloceno, getGeologico, getTodosCalendarios } from "./data/multiCalendar";
import { getEspiritualidadeDoDia, TRADICAO_COLORS, TRADICAO_EMOJI } from "./data/testeTradicao";
import { VERSICULOS, getVersiculoDoDia, TRADICOES_DISPONIVEIS } from "./data/versiculos";
import { reduceNumber, calcNumerologia, NUMEROS, getNumerologia, getNumeroDoDia } from "./data/numerologia";
import { HUMOR_EXPANDIDO, HUMOR_FRASES_EXPANDIDAS, HUMOR_FRASES } from "./data/humor";
import { HISTORIAS, getHistoriaDoDia, PALAVRAS_DIA, EFEMERIDES, INVENCOES_DIA, ESPACO_DIA, MAPA_DIA, HABITOS_DIA, MUSICAS_DIA, LEITURAS_DIA, DESCOBERTAS_DIA, DIAS_SEMANA_INFO, CHARADAS_DIA } from "./data/conteudo";
import { MENTOR_MESSAGES, getMentorMessage } from "./data/mentorMessages";
import { TRADICAO_TESTE_INTRO, TRADICAO_QUESTIONS, TRADICAO_INFO, AMOR_INTRO, AMOR_QUESTIONS, AMOR_INFO, POLITICO_INTRO, POLITICO_QUESTIONS, POLITICO_INFO, PERSONALIDADE_INTRO, PERSONALIDADE_QUESTIONS, PERSONALIDADE_INFO, QI_INTRO, ELEMENTO_INTRO, ELEMENTO_QUESTIONS, ELEMENTO_INFO, SONHADOR_INTRO, SONHADOR_QUESTIONS, SONHADOR_INFO, PROFISSAO_INTRO, PROFISSAO_QUESTIONS, PROFISSAO_INFO, LIDER_INTRO, LIDER_QUESTIONS, LIDER_INFO, FINANCEIRO_INTRO, FINANCEIRO_QUESTIONS, FINANCEIRO_INFO, QI_QUESTIONS, QI_LEVELS, CORES_INTRO, CORES_QUESTIONS, CORES_INFO, SELECAO_INTRO, SELECAO_QUESTIONS, SELECAO_INFO, INGLES_INTRO, INGLES_QUESTIONS, INGLES_INFO, AGILIDADE_INTRO, AGILIDADE_QUESTIONS, AGILIDADE_INFO, BIBLICO_INTRO, BIBLICO_QUESTIONS, BIBLICO_INFO, MBTI_INTRO, MBTI_QUESTIONS, MBTI_INFO, PROFISSIONAL_INTRO, PROFISSIONAL_QUESTIONS, PROFISSIONAL_INFO, DEUSA_QUESTIONS, DEUSA_INFO, APEGO_INTRO, APEGO_QUESTIONS, APEGO_INFO, CIUMENTO_INTRO, CIUMENTO_QUESTIONS, CIUMENTO_INFO, ROMANTICO_INTRO, ROMANTICO_QUESTIONS, ROMANTICO_INFO, COMP_SIGNOS_INTRO, COMP_SIGNOS_QUESTIONS, COMP_SIGNOS_INFO, VALORES_INTRO, VALORES_QUESTIONS, VALORES_INFO, ARQUETIPO_INTRO, ARQUETIPO_QUESTIONS, ARQUETIPO_INFO, IQ_EMOCIONAL_INTRO, IQ_EMOCIONAL_QUESTIONS, IQ_EMOCIONAL_INFO, IMPOSTOR_INTRO, IMPOSTOR_QUESTIONS, IMPOSTOR_INFO, COMUNICACAO_INTRO, COMUNICACAO_QUESTIONS, COMUNICACAO_INFO, CULTPOP_INTRO, CULTPOP_QUESTIONS, CULTPOP_INFO, FILOSOFO_QUESTIONS, FILOSOFO_INFO, VISAOMUNDO_QUESTIONS, VISAOMUNDO_INFO, ESPVREL_QUESTIONS, ESPVREL_INFO, CORRENTE_QUESTIONS, CORRENTE_INFO, VIRTUDE_QUESTIONS, VIRTUDE_INFO, IKIGAI_QUESTIONS, IKIGAI_INFO } from "./data/testes";
import { MENSAGENS_DIA, getMensagemDoDia, PROVERBIOS_DIA } from "./data/conteudo";
import { QUIZ_QUESTIONS, getQuizByLevel, QUIZ_MITOLOGIA_ASTRAL_DATA, QUIZ_ELEMENTOS_DATA, QUIZ_BANKS, QUIZ_NIVEIS, quizMsg, QUIZ_COMMENTS, pickComment, QUIZ_ADIVINHE_SIGNO } from "./data/quizzes";
import { TAROT_MAIOR, RUNAS_DIA, ICHING_DIA, ANJOS_DIA } from "./data/espiritualidade";

// ============================================================
// 🇧🇷 KOMPARAI - App.jsx
// Extração de dados em andamento: famosos agora vem de ./data/famosos.json
// Demais blocos de dados ainda inline (fase 1 de extração em curso)
// ============================================================


// ============================================================
// DATA: yearFacts.js
// ============================================================
// ============================================================
// KOMPARAI — FATOS POR ANO (1930–2025)
// 96 anos de história em uma linha
// ============================================================
// Uso: YEAR_FACTS[1984] → string com o fato marcante do ano


// ============================================================
// 5. FUNÇÃO PRINCIPAL — Eventos espirituais do dia
// ============================================================

// ============================================================
// 5. TESTE PROFISSIONAL
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
// Embaralha as opções de uma pergunta e recalcula o índice correto (c)
const shuffleQuestion = (q) => {
  const correctText = q.opts[q.c];
  const newOpts = shuffle([...q.opts]);
  return { ...q, opts: newOpts, c: newOpts.indexOf(correctText) };
};

// Mensagens genéricas do dia (rotativas)
const W = 1080, H = 1920;

// PADRÃO VISUAL ÚNICO: preto profundo + verde neon (#10B981)
// Cores fixas em TODOS os templates (consistência da marca)
const BRAND = {
  bgTop: "#0A1F1A",     // verde escuríssimo
  bgBottom: "#000000",  // preto absoluto
  green: "#10B981",     // verde neon principal
  greenLight: "#34D399",// verde claro (acentos)
  greenDeep: "#064E3B", // verde profundo (cards)
  white: "#FFFFFF",
  textMuted: "rgba(255,255,255,0.65)",
  cardBorder: "rgba(16,185,129,0.25)",
  cardBg: "rgba(16,185,129,0.06)",
};

// Tema legado (mantido para compatibilidade — todos apontam pra BRAND)
const SHARE_THEMES = {
  temperamento: { bg1:BRAND.bgTop, bg2:BRAND.bgBottom, accent:BRAND.green, overlay:"#10B98115" },
  raioX:        { bg1:BRAND.bgTop, bg2:BRAND.bgBottom, accent:BRAND.green, overlay:"#10B98115" },
  versiculo:    { bg1:BRAND.bgTop, bg2:BRAND.bgBottom, accent:BRAND.green, overlay:"#10B98115" },
  historia:     { bg1:BRAND.bgTop, bg2:BRAND.bgBottom, accent:BRAND.green, overlay:"#10B98115" },
  mundo:        { bg1:BRAND.bgTop, bg2:BRAND.bgBottom, accent:BRAND.green, overlay:"#10B98115" },
  horoscopo:    { bg1:BRAND.bgTop, bg2:BRAND.bgBottom, accent:BRAND.green, overlay:"#10B98115" },
  numerologia:  { bg1:BRAND.bgTop, bg2:BRAND.bgBottom, accent:BRAND.green, overlay:"#10B98115" },
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

// Helper: desenha estrelas decorativas (pontinhos verdes no fundo)
const drawStars = (ctx, count = 60) => {
  for (let i = 0; i < count; i++) {
    const x = Math.random() * W;
    const y = Math.random() * H;
    const r = Math.random() * 1.8 + 0.4;
    ctx.fillStyle = Math.random() > 0.7 ? "rgba(16,185,129,0.45)" : "rgba(255,255,255,0.18)";
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
};

// Helper: desenha um arco/órbita decorativa (efeito globo)
const drawGlobeArc = (ctx, cx, cy, radius) => {
  ctx.strokeStyle = "rgba(16,185,129,0.18)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.stroke();
};

// Helper: logo K vetorial em verde neon
const drawKLogo = (ctx, x, y, size) => {
  const g = BRAND.green;
  ctx.save();
  ctx.translate(x, y);
  // Glow externo
  ctx.shadowColor = g;
  ctx.shadowBlur = 25;
  ctx.fillStyle = g;
  // Forma estilizada do K: duas barras
  // Barra vertical
  ctx.fillRect(0, 0, size*0.18, size);
  // Diagonal superior
  ctx.beginPath();
  ctx.moveTo(size*0.18, size*0.5);
  ctx.lineTo(size*0.85, 0);
  ctx.lineTo(size*1.0, size*0.12);
  ctx.lineTo(size*0.38, size*0.5);
  ctx.closePath();
  ctx.fill();
  // Diagonal inferior
  ctx.beginPath();
  ctx.moveTo(size*0.18, size*0.5);
  ctx.lineTo(size*0.85, size);
  ctx.lineTo(size*1.0, size*0.88);
  ctx.lineTo(size*0.38, size*0.5);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
};

// Helper: desenha logo KomparAI no topo (K + texto)
const drawLogo = (ctx) => {
  drawKLogo(ctx, 60, 70, 70);
  // Texto "KOMPARAI"
  ctx.shadowBlur = 0;
  ctx.fillStyle = BRAND.white;
  ctx.font = "bold 56px 'Sora', sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("KOMPAR", 160, 130);
  const wKompar = ctx.measureText("KOMPAR").width;
  ctx.fillStyle = BRAND.green;
  ctx.fillText("AI", 160 + wKompar, 130);
};

// Helper: desenha footer no padrão KomparAI (selo verde com URL)
const drawFooter = (ctx, customMsg=null) => {
  // Linha tênue separadora
  ctx.strokeStyle = "rgba(16,185,129,0.18)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(80, H - 240);
  ctx.lineTo(W - 80, H - 240);
  ctx.stroke();

  // Selo K à esquerda
  drawKLogo(ctx, 80, H - 200, 60);

  // Texto à esquerda do selo: "DESCUBRA A SUA HISTÓRIA EM"
  ctx.shadowBlur = 0;
  ctx.fillStyle = BRAND.textMuted;
  ctx.font = "500 22px 'Sora', sans-serif";
  ctx.textAlign = "left";
  ctx.fillText((customMsg || "DESCUBRA A SUA HISTÓRIA EM").toUpperCase(), 200, H - 175);

  // Pílula com URL
  const pillW = 380, pillH = 70;
  const pillX = 200, pillY = H - 155;
  ctx.strokeStyle = BRAND.green;
  ctx.lineWidth = 2;
  ctx.fillStyle = "rgba(16,185,129,0.08)";
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(pillX, pillY, pillW, pillH, 35);
    ctx.fill();
    ctx.stroke();
  } else {
    ctx.fillRect(pillX, pillY, pillW, pillH);
    ctx.strokeRect(pillX, pillY, pillW, pillH);
  }
  ctx.fillStyle = BRAND.green;
  ctx.font = "bold 34px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("KOMPARAI.COM", pillX + pillW/2, pillY + 46);
};

// Helper: cria fundo padrão KomparAI (preto + verde + estrelas + orbitas)
const drawBackground = (ctx, _theme) => {
  // Gradient base
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, BRAND.bgTop);
  grad.addColorStop(0.5, "#000000");
  grad.addColorStop(1, BRAND.bgBottom);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Globo sugerido no canto superior direito (orbitas + glow)
  const cx = W + 100, cy = -50;
  ctx.save();
  for (let r = 600; r < 1400; r += 120) {
    drawGlobeArc(ctx, cx, cy, r);
  }
  // Glow do "sol/borda do globo"
  const sunGlow = ctx.createRadialGradient(cx-200, cy+200, 50, cx-200, cy+200, 700);
  sunGlow.addColorStop(0, "rgba(16,185,129,0.35)");
  sunGlow.addColorStop(0.4, "rgba(16,185,129,0.08)");
  sunGlow.addColorStop(1, "transparent");
  ctx.fillStyle = sunGlow;
  ctx.fillRect(0, 0, W, H/2);
  ctx.restore();

  // Estrelas
  drawStars(ctx, 70);
};

// Helper: desenha um card retangular padrão KomparAI (borda verde sutil, fundo translúcido)
const drawCard = (ctx, x, y, w, h, radius=24) => {
  ctx.save();
  ctx.fillStyle = BRAND.cardBg;
  ctx.strokeStyle = BRAND.cardBorder;
  ctx.lineWidth = 1.5;
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, radius);
    ctx.fill();
    ctx.stroke();
  } else {
    ctx.fillRect(x, y, w, h);
    ctx.strokeRect(x, y, w, h);
  }
  ctx.restore();
};

// ============================================================
// TEMPLATES DE IMAGEM
// ============================================================

// 0. COINCIDÊNCIAS (MOTOR PRINCIPAL DE VIRALIZAÇÃO)
// Imagem do resultado do Teste de Coincidências — share rico para WhatsApp/Instagram
const renderCoincidencias = (ctx, { nome, total, top, tags }) => {
  drawBackground(ctx);
  drawLogo(ctx);

  // ─────── SELO DE TOPO "EU, FULANO, ENCONTREI:" ───────
  const seloX = 80, seloY = 250, seloW = W - 160, seloH = 80;
  ctx.save();
  ctx.fillStyle = "rgba(16,185,129,0.12)";
  ctx.strokeStyle = "rgba(16,185,129,0.4)";
  ctx.lineWidth = 2;
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(seloX, seloY, seloW, seloH, 40);
    ctx.fill();
    ctx.stroke();
  }
  ctx.fillStyle = BRAND.green;
  ctx.font = "bold 30px 'Sora', sans-serif";
  ctx.textAlign = "center";
  const seloText = nome ? `🪞 EU, ${nome.toUpperCase()}, ENCONTREI:` : "🪞 ENCONTREI:";
  // Ajuste fonte se nome longo
  let seloFont = 30;
  while (ctx.measureText(seloText).width > seloW - 60 && seloFont > 18) {
    seloFont -= 1;
    ctx.font = `bold ${seloFont}px 'Sora', sans-serif`;
  }
  ctx.fillText(seloText, W/2, seloY + 52);
  ctx.restore();

  // ─────── NÚMERO GIGANTE ───────
  ctx.save();
  ctx.shadowColor = BRAND.green;
  ctx.shadowBlur = 50;
  ctx.fillStyle = BRAND.green;
  ctx.textAlign = "center";
  let tamNum = 380;
  ctx.font = `900 ${tamNum}px 'Sora', sans-serif`;
  while (ctx.measureText(String(total)).width > W - 100 && tamNum > 180) {
    tamNum -= 20;
    ctx.font = `900 ${tamNum}px 'Sora', sans-serif`;
  }
  ctx.fillText(String(total), W/2, 660);
  ctx.restore();

  // ─────── PALAVRA "COINCIDÊNCIAS!" ───────
  ctx.fillStyle = BRAND.white;
  ctx.textAlign = "center";
  let tamCoinc = 64;
  ctx.font = `900 ${tamCoinc}px 'Sora', sans-serif`;
  while (ctx.measureText("COINCIDÊNCIAS!").width > W - 100 && tamCoinc > 38) {
    tamCoinc -= 3;
    ctx.font = `900 ${tamCoinc}px 'Sora', sans-serif`;
  }
  ctx.fillText("COINCIDÊNCIAS!", W/2, 750);

  // Subtítulo
  ctx.fillStyle = BRAND.textMuted;
  ctx.textAlign = "center";
  ctx.font = "italic 28px 'Sora', sans-serif";
  ctx.fillText("com famosos do mundo todo", W/2, 800);

  // ─────── TOP 3 FAMOSOS ───────
  if (top && top.length > 0) {
    // Header
    ctx.fillStyle = BRAND.green;
    ctx.font = "bold 28px 'Sora', sans-serif";
    ctx.fillText("⭐ TOP COINCIDÊNCIAS", W/2, 880);

    let yPos = 930;
    top.slice(0, 3).forEach((celeb) => {
      // Card do famoso
      drawCard(ctx, 80, yPos, W-160, 140, 24);

      // Avatar circular com emoji da categoria
      ctx.save();
      const avX = 165, avY = yPos + 70;
      ctx.fillStyle = "rgba(16,185,129,0.2)";
      ctx.beginPath();
      ctx.arc(avX, avY, 50, 0, Math.PI*2);
      ctx.fill();
      ctx.strokeStyle = "rgba(16,185,129,0.5)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(avX, avY, 50, 0, Math.PI*2);
      ctx.stroke();
      ctx.fillStyle = BRAND.white;
      ctx.font = "52px 'Sora', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(celeb.emoji || "⭐", avX, avY);
      ctx.restore();
      ctx.textBaseline = "alphabetic";

      // Nome (BRANCO)
      ctx.fillStyle = BRAND.white;
      ctx.font = "bold 38px 'Sora', sans-serif";
      ctx.textAlign = "left";
      // Trunca se for muito grande
      let displayName = celeb.name || "";
      ctx.font = "bold 38px 'Sora', sans-serif";
      while (ctx.measureText(displayName).width > W - 420 && displayName.length > 8) {
        displayName = displayName.slice(0, -1);
      }
      if (displayName !== celeb.name) displayName += "…";
      ctx.fillText(displayName, 240, yPos + 60);

      // Categoria · ano
      ctx.fillStyle = BRAND.textMuted;
      ctx.font = "500 22px 'Sora', sans-serif";
      ctx.fillText(`${celeb.category || ""} · ${celeb.born || ""}`, 240, yPos + 95);

      // Número de matches (à direita)
      ctx.save();
      ctx.fillStyle = "rgba(16,185,129,0.18)";
      ctx.strokeStyle = BRAND.green;
      ctx.lineWidth = 2;
      const pillX = W - 220, pillY = yPos + 35, pillW = 130, pillH = 70;
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(pillX, pillY, pillW, pillH, 14);
        ctx.fill();
        ctx.stroke();
      }
      ctx.fillStyle = BRAND.green;
      ctx.font = "900 40px 'Sora', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(String(celeb.matches || 1), pillX + pillW/2, pillY + 50);
      ctx.restore();
      ctx.fillStyle = BRAND.textMuted;
      ctx.font = "500 16px 'Sora', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("em comum", pillX + pillW/2, yPos + 125);

      yPos += 155;
    });
  }

  // ─────── TAGS (o que tem em comum) ───────
  if (tags && tags.length > 0) {
    let yTags = 1410;
    ctx.fillStyle = BRAND.green;
    ctx.font = "bold 24px 'Sora', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("🔗 O QUE TÊM EM COMUM", W/2, yTags);
    yTags += 50;

    // Renderiza tags como pílulas em até 2 linhas
    ctx.font = "500 24px 'Sora', sans-serif";
    let xCursor = 0;
    const tagPadX = 24, tagH = 50, tagGap = 14;
    const tagWidths = tags.slice(0, 6).map(t => ctx.measureText(t).width + tagPadX * 2);

    // Layout em linhas (máx 2)
    const lines = [];
    let currentLine = [];
    let currentWidth = 0;
    const maxLineWidth = W - 160;

    tags.slice(0, 6).forEach((tag, idx) => {
      const tw = tagWidths[idx];
      if (currentWidth + tw + tagGap > maxLineWidth && currentLine.length > 0) {
        lines.push({tags: currentLine, totalW: currentWidth - tagGap});
        currentLine = [];
        currentWidth = 0;
      }
      currentLine.push({tag, w: tw});
      currentWidth += tw + tagGap;
    });
    if (currentLine.length > 0) lines.push({tags: currentLine, totalW: currentWidth - tagGap});

    lines.slice(0, 2).forEach((line) => {
      let xStart = (W - line.totalW) / 2;
      line.tags.forEach(({tag, w}) => {
        // Pílula
        ctx.save();
        ctx.fillStyle = "rgba(16,185,129,0.12)";
        ctx.strokeStyle = "rgba(16,185,129,0.4)";
        ctx.lineWidth = 1.5;
        if (ctx.roundRect) {
          ctx.beginPath();
          ctx.roundRect(xStart, yTags, w, tagH, 25);
          ctx.fill();
          ctx.stroke();
        }
        ctx.fillStyle = BRAND.greenLight;
        ctx.font = "500 24px 'Sora', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(tag, xStart + w/2, yTags + 34);
        ctx.restore();
        xStart += w + tagGap;
      });
      yTags += tagH + 16;
    });
  }

  drawFooter(ctx);
};

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
  ctx.textAlign = "center";
  const nomeTextoTemp = `${(nome||"").toUpperCase()} É`;
  let tamNomeTemp = 50;
  ctx.font = `bold ${tamNomeTemp}px 'Sora', sans-serif`;
  while (ctx.measureText(nomeTextoTemp).width > W - 120 && tamNomeTemp > 28) {
    tamNomeTemp -= 2;
    ctx.font = `bold ${tamNomeTemp}px 'Sora', sans-serif`;
  }
  ctx.fillText(nomeTextoTemp, W/2, 720);

  // Resultado
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  let tamResTemp = 140;
  ctx.font = `900 ${tamResTemp}px 'Sora', sans-serif`;
  while (ctx.measureText((resultado||"").toUpperCase()).width > W - 80 && tamResTemp > 70) {
    tamResTemp -= 6;
    ctx.font = `900 ${tamResTemp}px 'Sora', sans-serif`;
  }
  ctx.fillText((resultado||"").toUpperCase(), W/2, 880);

  // Mentor
  if (mentor) {
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.textAlign = "center";
    const txtMentor = `Como ${mentor}`;
    let tamMentor = 44;
    ctx.font = `italic ${tamMentor}px 'Sora', sans-serif`;
    while (ctx.measureText(txtMentor).width > W - 100 && tamMentor > 24) {
      tamMentor -= 2;
      ctx.font = `italic ${tamMentor}px 'Sora', sans-serif`;
    }
    ctx.fillText(txtMentor, W/2, 970);
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

  drawFooter(ctx);
};

// 2. RAIO X
const renderRaioX = (ctx, { nome, resultados }) => {
  drawBackground(ctx);
  drawLogo(ctx);

  // ÍCONE DE TOPO (radiação) em VERDE NEON com glow
  ctx.save();
  ctx.shadowColor = BRAND.green;
  ctx.shadowBlur = 30;
  ctx.fillStyle = BRAND.green;
  ctx.font = "100px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("☢", W/2, 340);
  ctx.restore();

  // Título — "RAIO X DE" em verde + nome em branco/grande
  ctx.fillStyle = BRAND.green;
  ctx.font = "bold 42px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("RAIO X DE", W/2, 420);

  // Nome — em CAPS + quebra automática se for longo
  ctx.fillStyle = BRAND.white;
  // Ajusta tamanho dinamicamente para caber
  const nomeUpper = (nome || "VOCÊ").toUpperCase();
  let nomeFontSize = 110;
  ctx.font = `900 ${nomeFontSize}px 'Sora', sans-serif`;
  while (ctx.measureText(nomeUpper).width > W - 160 && nomeFontSize > 60) {
    nomeFontSize -= 6;
    ctx.font = `900 ${nomeFontSize}px 'Sora', sans-serif`;
  }
  // Se ainda muito largo, quebra em 2 linhas
  if (ctx.measureText(nomeUpper).width > W - 160) {
    const palavras = nomeUpper.split(" ");
    const meio = Math.ceil(palavras.length / 2);
    const linha1 = palavras.slice(0, meio).join(" ");
    const linha2 = palavras.slice(meio).join(" ");
    ctx.fillText(linha1, W/2, 510);
    ctx.fillText(linha2, W/2, 510 + nomeFontSize + 10);
  } else {
    ctx.fillText(nomeUpper, W/2, 540);
  }

  // Subtitulo
  ctx.fillStyle = BRAND.greenLight;
  ctx.font = "italic 32px 'Sora', sans-serif";
  ctx.fillText("Quem você é, em poucas palavras", W/2, 640);

  // Lista de resultados (cards visuais com ícone verde brilhante)
  let yPos = 720;
  resultados.slice(0, 6).forEach((r) => {
    // Card com borda verde sutil
    drawCard(ctx, 90, yPos, W-180, 130, 20);

    // ÍCONE com fundo circular verde
    ctx.save();
    ctx.fillStyle = "rgba(16,185,129,0.18)";
    ctx.beginPath();
    ctx.arc(180, yPos + 65, 42, 0, Math.PI*2);
    ctx.fill();
    // Emoji por cima do círculo
    ctx.fillStyle = BRAND.greenLight;
    ctx.font = "52px 'Sora', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(r.emoji, 180, yPos + 65);
    ctx.restore();
    ctx.textBaseline = "alphabetic";

    // Label (cinza claro)
    ctx.fillStyle = BRAND.textMuted;
    ctx.font = "500 26px 'Sora', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(r.label, 260, yPos + 52);

    // Valor (branco bold)
    ctx.fillStyle = BRAND.white;
    ctx.textAlign = "left";
    const valorTexto = String(r.valor || "");
    let tamValor = 46;
    ctx.font = `bold ${tamValor}px 'Sora', sans-serif`;
    const valorMaxW = W - 320;
    while (ctx.measureText(valorTexto).width > valorMaxW && tamValor > 24) {
      tamValor -= 2;
      ctx.font = `bold ${tamValor}px 'Sora', sans-serif`;
    }
    ctx.fillText(valorTexto, 260, yPos + 100);

    yPos += 145;
  });

  drawFooter(ctx);
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
  ctx.textAlign = "center";
  const refTexto = `— ${ref || ""}`;
  let tamRef = 48;
  ctx.font = `bold ${tamRef}px 'Sora', sans-serif`;
  while (ctx.measureText(refTexto).width > W - 100 && tamRef > 24) {
    tamRef -= 2;
    ctx.font = `bold ${tamRef}px 'Sora', sans-serif`;
  }
  ctx.fillText(refTexto, W/2, 1400);

  drawFooter(ctx);
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
  ctx.textAlign = "center";
  let tamData = 64;
  ctx.font = `bold ${tamData}px 'Sora', sans-serif`;
  while (ctx.measureText(dataStr || "").width > W - 100 && tamData > 32) {
    tamData -= 3;
    ctx.font = `bold ${tamData}px 'Sora', sans-serif`;
  }
  ctx.fillText(dataStr || "", W/2, 680);

  // Texto histórico
  ctx.font = "italic 50px 'Sora', sans-serif";
  drawWrappedText(ctx, texto, W/2, 850, W-160, 72, "#fff", "italic 50px 'Sora', sans-serif");

  drawFooter(ctx);
};

// 5. HOJE NO MUNDO
const renderMundo = (ctx, { dataStr, calendarios }) => {
  drawBackground(ctx);
  drawLogo(ctx);

  // Globo gigante com glow verde
  ctx.save();
  ctx.shadowColor = BRAND.green;
  ctx.shadowBlur = 35;
  ctx.font = "180px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("🌍", W/2, 380);
  ctx.restore();

  // Título — garantindo centralização
  ctx.fillStyle = BRAND.white;
  ctx.textAlign = "center";
  let tituloMundo = "Em que ano estamos?";
  let tamMundo = 72;
  ctx.font = `900 ${tamMundo}px 'Sora', sans-serif`;
  while (ctx.measureText(tituloMundo).width > W - 120 && tamMundo > 40) {
    tamMundo -= 4;
    ctx.font = `900 ${tamMundo}px 'Sora', sans-serif`;
  }
  ctx.fillText(tituloMundo, W/2, 490);

  // Subtítulo (data)
  ctx.fillStyle = BRAND.textMuted;
  ctx.textAlign = "center";
  ctx.font = "500 32px 'Sora', sans-serif";
  ctx.fillText(dataStr, W/2, 550);

  // Linha decorativa verde
  ctx.strokeStyle = BRAND.green;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(W/2 - 40, 590);
  ctx.lineTo(W/2 + 40, 590);
  ctx.stroke();

  // Grid de calendários (até 6)
  let yPos = 650;
  calendarios.slice(0, 6).forEach((cal) => {
    drawCard(ctx, 80, yPos, W-160, 145, 22);

    // ÍCONE: círculo verde com emoji EM BRANCO/CLARO por cima (contraste)
    ctx.save();
    ctx.fillStyle = "rgba(16,185,129,0.2)";
    ctx.beginPath();
    ctx.arc(160, yPos + 72, 44, 0, Math.PI*2);
    ctx.fill();
    // Borda do círculo
    ctx.strokeStyle = "rgba(16,185,129,0.45)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(160, yPos + 72, 44, 0, Math.PI*2);
    ctx.stroke();
    // Emoji do calendário centralizado
    ctx.font = "48px 'Sora', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = BRAND.white;
    ctx.fillText(cal.emoji, 160, yPos + 72);
    ctx.restore();
    ctx.textBaseline = "alphabetic";

    // Nome (cinza claro)
    ctx.fillStyle = BRAND.textMuted;
    ctx.font = "500 28px 'Sora', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(cal.nome, 240, yPos + 55);

    // Ano em verde neon (tamanho ajustado se for muito longo)
    ctx.fillStyle = BRAND.green;
    let anoFontSize = 44;
    ctx.font = `bold ${anoFontSize}px 'Sora', sans-serif`;
    while (ctx.measureText(cal.formatado).width > W - 320 && anoFontSize > 26) {
      anoFontSize -= 2;
      ctx.font = `bold ${anoFontSize}px 'Sora', sans-serif`;
    }
    ctx.fillText(cal.formatado, 240, yPos + 110);

    yPos += 160;
  });

  drawFooter(ctx);
};

// 6. HORÓSCOPO
const renderHoroscopo = (ctx, { nome, signo, emoji, sistema, mensagem }) => {
  drawBackground(ctx);
  drawLogo(ctx);

  // Selo "HORÓSCOPO DO DIA" no topo
  ctx.save();
  const seloW = 380, seloH = 70;
  const seloX = W/2 - seloW/2, seloY = 240;
  ctx.fillStyle = "rgba(16,185,129,0.15)";
  ctx.strokeStyle = BRAND.green;
  ctx.lineWidth = 2;
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(seloX, seloY, seloW, seloH, 35);
    ctx.fill();
    ctx.stroke();
  }
  ctx.fillStyle = BRAND.green;
  ctx.font = "bold 30px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("✨ SEU HORÓSCOPO", W/2, seloY + 46);
  ctx.restore();

  // Quadrado roxo decorativo com emoji do signo (estilo App)
  ctx.save();
  const qSize = 260;
  const qX = W/2 - qSize/2;
  const qY = 380;
  // Quadrado roxo gradient
  const qGrad = ctx.createLinearGradient(qX, qY, qX, qY + qSize);
  qGrad.addColorStop(0, "#8B5CF6");
  qGrad.addColorStop(1, "#6D28D9");
  ctx.fillStyle = qGrad;
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(qX, qY, qSize, qSize, 36);
    ctx.fill();
  } else {
    ctx.fillRect(qX, qY, qSize, qSize);
  }
  // Glow ao redor
  ctx.shadowColor = "#8B5CF6";
  ctx.shadowBlur = 30;
  ctx.fillStyle = "rgba(139,92,246,0.4)";
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(qX, qY, qSize, qSize, 36);
    ctx.stroke();
  }
  ctx.restore();

  // Emoji do signo dentro do quadrado
  ctx.save();
  ctx.fillStyle = BRAND.white;
  ctx.font = "180px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(emoji, W/2, 380 + 130);
  ctx.restore();
  ctx.textBaseline = "alphabetic";

  // Nome (BRANCO em CAPS)
  if (nome) {
    ctx.fillStyle = BRAND.textMuted;
    ctx.textAlign = "center";
    const nomeUp = nome.toUpperCase();
    let tamNomeH = 36;
    ctx.font = `bold ${tamNomeH}px 'Sora', sans-serif`;
    while (ctx.measureText(nomeUp).width > W - 100 && tamNomeH > 20) {
      tamNomeH -= 2;
      ctx.font = `bold ${tamNomeH}px 'Sora', sans-serif`;
    }
    ctx.fillText(nomeUp, W/2, 730);
  }

  // Signo gigante (em branco com glow)
  ctx.save();
  ctx.shadowColor = BRAND.green;
  ctx.shadowBlur = 20;
  ctx.fillStyle = BRAND.white;
  ctx.textAlign = "center";
  let tamSigno = 120;
  ctx.font = `900 ${tamSigno}px 'Sora', sans-serif`;
  while (ctx.measureText(signo || "").width > W - 100 && tamSigno > 60) {
    tamSigno -= 5;
    ctx.font = `900 ${tamSigno}px 'Sora', sans-serif`;
  }
  ctx.fillText(signo || "", W/2, 850);
  ctx.restore();

  // Sistema
  ctx.fillStyle = BRAND.green;
  ctx.textAlign = "center";
  const sistemaTexto = `Astrologia ${sistema || ""}`;
  let tamSist = 36;
  ctx.font = `italic ${tamSist}px 'Sora', sans-serif`;
  while (ctx.measureText(sistemaTexto).width > W - 100 && tamSist > 20) {
    tamSist -= 2;
    ctx.font = `italic ${tamSist}px 'Sora', sans-serif`;
  }
  ctx.fillText(sistemaTexto, W/2, 905);

  // Card grande com mensagem
  if (mensagem) {
    drawCard(ctx, 80, 980, W-160, 540, 30);
    ctx.fillStyle = BRAND.greenLight;
    ctx.font = "bold 24px 'Sora', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("⭐ MENSAGEM DO DIA", W/2, 1040);

    drawWrappedText(ctx, `"${mensagem}"`, W/2, 1140, W-200, 58, BRAND.white, "italic 38px 'Sora', sans-serif");
  }

  drawFooter(ctx);
};

// 7. NUMEROLOGIA
const renderNumerologia = (ctx, { nome, numero, arquetipo, essencia }) => {
  drawBackground(ctx);
  drawLogo(ctx);

  // Selo "NUMEROLOGIA" no topo (pílula verde)
  const seloW = 380, seloH = 70;
  const seloX = W/2 - seloW/2, seloY = 250;
  ctx.save();
  ctx.fillStyle = "rgba(16,185,129,0.15)";
  ctx.strokeStyle = BRAND.green;
  ctx.lineWidth = 2;
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(seloX, seloY, seloW, seloH, 35);
    ctx.fill();
    ctx.stroke();
  }
  ctx.fillStyle = BRAND.green;
  ctx.font = "bold 32px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("🔢 NUMEROLOGIA", W/2, seloY + 46);
  ctx.restore();

  // Nome do usuário (BRANCO, sem competir com o número)
  if (nome) {
    ctx.fillStyle = BRAND.white;
    ctx.textAlign = "center";
    const nomeUpN = nome.toUpperCase();
    let tamNomeN = 44;
    ctx.font = `bold ${tamNomeN}px 'Sora', sans-serif`;
    while (ctx.measureText(nomeUpN).width > W - 100 && tamNomeN > 24) {
      tamNomeN -= 2;
      ctx.font = `bold ${tamNomeN}px 'Sora', sans-serif`;
    }
    ctx.fillText(nomeUpN, W/2, 410);
  }

  // Círculo de fundo (para o número ficar com peso visual)
  ctx.save();
  const circR = 280;
  const circY = 760;
  // Glow externo
  const circGlow = ctx.createRadialGradient(W/2, circY, 50, W/2, circY, circR);
  circGlow.addColorStop(0, "rgba(16,185,129,0.18)");
  circGlow.addColorStop(0.6, "rgba(16,185,129,0.04)");
  circGlow.addColorStop(1, "transparent");
  ctx.fillStyle = circGlow;
  ctx.beginPath();
  ctx.arc(W/2, circY, circR, 0, Math.PI*2);
  ctx.fill();
  // Anel verde
  ctx.strokeStyle = "rgba(16,185,129,0.4)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(W/2, circY, circR - 30, 0, Math.PI*2);
  ctx.stroke();
  ctx.restore();

  // Número GIGANTE (em verde neon brilhante)
  ctx.save();
  ctx.shadowColor = BRAND.green;
  ctx.shadowBlur = 40;
  ctx.fillStyle = BRAND.green;
  ctx.font = "900 360px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(numero, W/2, circY);
  ctx.restore();
  ctx.textBaseline = "alphabetic";

  // Arquétipo (em branco, grande)
  ctx.fillStyle = BRAND.white;
  ctx.font = "900 80px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(arquetipo || "", W/2, 1140);

  // Essência (em itálico, dentro de um card verde sutil)
  if (essencia) {
    drawCard(ctx, 100, 1200, W-200, 280, 28);
    ctx.fillStyle = BRAND.greenLight;
    ctx.font = "bold 22px 'Sora', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ ESSÊNCIA", W/2, 1255);
    drawWrappedText(ctx, `"${essencia}"`, W/2, 1320, W-260, 56, BRAND.white, "italic 38px 'Sora', sans-serif");
  }

  drawFooter(ctx);
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
    case 'coincidencias': renderCoincidencias(ctx, data); break;
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
      try { await navigator.share({ title: "KomparAI", text: fullText, url: "https://komparai.com" }); } catch (e) { if (e.name !== 'AbortError') { try { await navigator.clipboard?.writeText(fullText + "\nhttps://komparai.com"); alert("Link copiado!"); } catch(_){} } }
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
  const [sharing, setSharing] = useState(false);
  const handleClick = async (e) => {
    e.stopPropagation();
    if (sharing) return;
    setSharing(true);
    try { await onClick(); } catch(_){}
    setSharing(false);
  };
  return (
    <button onClick={handleClick}
      style={{
        position:"absolute", top:14, right:14,
        width:38, height:38, borderRadius:"50%",
        border:"none", background: sharing ? "#10B981" : "rgba(255,255,255,0.95)",
        boxShadow:"0 4px 12px rgba(0,0,0,0.15)",
        cursor: sharing ? "default" : "pointer", fontSize:18,
        display:"flex", alignItems:"center", justifyContent:"center",
        zIndex:10, transition:"background 0.2s",
        ...style,
      }} aria-label="Compartilhar">{sharing ? "⏳" : "📤"}</button>
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
// Helper gênero: retorna texto M ou F conforme perfil
const gTxt = (g, m, f) => g === 'F' ? f : m;

const getUserBracket = (birthYear) => {
  if (!birthYear) return 'adulto';
  const idade = new Date().getFullYear() - parseInt(birthYear);
  if (idade <= 30) return 'jovem';
  if (idade <= 60) return 'adulto';
  return 'senior';
};

const getFamousOfDay = (birthYear) => {
  const match = famosos.filter(c => c.day === DAY && c.month === MONTH);
  if (match.length === 0) return famosos[(DAY * MONTH) % famosos.length];
  const bracket = getUserBracket(birthYear);
  return match.find(c => c.ageBracket === bracket) || [...match].sort((a,b) => b.popularity - a.popularity)[0];
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
// 🎉 Confete — explosão de peças coloridas (CSS puro, sem libs)
const CONFETTI_COLORS = ["#10B981","#F59E0B","#EC4899","#3B82F6","#8B5CF6","#EF4444","#FCD34D"];
const Confetti = ({count=40}) => (
  <div style={{position:"absolute",inset:0,overflow:"hidden",pointerEvents:"none",zIndex:5}}>
    {Array.from({length:count}).map((_,i)=>{
      const left = Math.random()*100;
      const delay = Math.random()*0.35;
      const dur = 1.1 + Math.random()*0.9;
      const size = 6 + Math.random()*7;
      const color = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
      const round = Math.random() > 0.5;
      return <span key={i} style={{position:"absolute",top:0,left:`${left}%`,width:size,height:round?size:size*0.5,background:color,borderRadius:round?"50%":2,animation:`ktConfFall ${dur}s ${delay}s ease-in forwards`}}/>;
    })}
  </div>
);

// 🔊 Sons sutis via Web Audio (sem arquivos). Disparados no toque (permitido pelos navegadores).
// Sons removidos a pedido. Mantido como no-op para não quebrar chamadas existentes.
const setSfxMuted = () => {};
const prewarmSfx = () => {};
const playSfx = () => {};

// 🧭 Cabeçalho fixo dos testes/quizzes — nome sempre visível + progresso
const TestHeader = ({emoji, nome, cor="#10B981", sub, step, total, score, onCancel}) => (
  <div style={{marginBottom: (step!=null?16:18)}}>
    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom: step!=null?12:0}}>
      <div style={{width:38,height:38,borderRadius:12,background:`${cor}1A`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>{emoji}</div>
      <div style={{flex:1,minWidth:0}}>
        <div style={{fontSize:15,fontWeight:800,color:"#0A1F1A",lineHeight:1.15,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{nome}</div>
        {sub && <div style={{fontSize:11,color:"#9CA3AF",marginTop:1}}>{sub}</div>}
      </div>
      {score!=null && <div style={{fontSize:13,fontWeight:800,color:cor,flexShrink:0}}>✓ {score}</div>}
      {onCancel && <button onClick={onCancel} style={{background:"transparent",border:"1px solid #E5E7EB",borderRadius:20,padding:"5px 12px",fontSize:12,color:"#9CA3AF",cursor:"pointer",fontFamily:"inherit",flexShrink:0}}>Sair</button>}
    </div>
    {step!=null && total!=null && (
      <div>
        <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:"#9CA3AF",fontWeight:600,marginBottom:5}}>
          <span>Pergunta {step} de {total}</span>
          <span>{Math.round((step/total)*100)}%</span>
        </div>
        <div style={{height:6,background:"#E5E7EB",borderRadius:3,overflow:"hidden"}}>
          <div style={{height:"100%",width:`${(step/total)*100}%`,background:`linear-gradient(90deg,${cor}aa,${cor})`,borderRadius:3,transition:"width .4s"}}/>
        </div>
      </div>
    )}
  </div>
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

// 🔢 Número que conta de 0 até o total (animação ~1s, com easing)
const CountUp = ({end=0, duration=1100, style, sound=false}) => {
  const [val,setVal] = useState(0);
  useEffect(() => {
    if (!end) { setVal(0); return; }
    let raf, start, lastTick = 0, lastVal = 0;
    const ease = t => 1 - Math.pow(1 - t, 3); // easeOutCubic
    const tick = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start)/duration, 1);
      const v = Math.round(ease(p) * end);
      setVal(v);
      if (sound && p < 1 && v !== lastVal && (ts - lastTick) > 55) { playSfx("tick"); lastTick = ts; lastVal = v; }
      if (p < 1) raf = requestAnimationFrame(tick);
      else if (sound) playSfx("ping");
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, sound]);
  return <span style={style}>{val}</span>;
};

// 🔍 Tela "Analisando..." — momento de suspense antes do resultado
const SCAN_LINES = [
  "🎂 Comparando datas de nascimento...",
  "📏 Cruzando altura...",
  "⚖️ Conferindo biotipo...",
  "♈ Alinhando signos...",
  "🧬 Analisando temperamento...",
  "✨ Calculando sua raridade...",
];
function ScannerScreen({name}) {
  const [line,setLine] = useState(0);
  useEffect(() => {
    playSfx("scan");
    const id = setInterval(() => { setLine(l => (l+1) % SCAN_LINES.length); playSfx("scan"); }, 260);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{minHeight:"60vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"20px"}}>
      <div style={{position:"relative",width:120,height:120,marginBottom:28}}>
        <div style={{position:"absolute",inset:0,borderRadius:"50%",border:"3px solid #10B98122",borderTopColor:"#10B981",animation:"ktSpin .9s linear infinite"}}/>
        <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",fontSize:52}}>🪞</div>
      </div>
      <div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",marginBottom:10}}>
        {name ? `Analisando, ${name}...` : "Analisando..."}
      </div>
      <div key={line} style={{fontSize:14,color:"#059669",fontWeight:600,minHeight:22,animation:"ktFadeLine .25s ease"}}>
        {SCAN_LINES[line]}
      </div>
      <div style={{marginTop:14,display:"flex",gap:6}}>
        {[0,1,2].map(i => (
          <span key={i} style={{width:8,height:8,borderRadius:"50%",background:"#10B981",animation:`ktBlink .9s ${i*0.15}s infinite`}}/>
        ))}
      </div>
    </div>
  );
}

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
          365 FAMOSOS · 7 RELIGIÕES · 4 HORÓSCOPOS
        </div>
      </div>
    </div>
  );
}

// ============================================================
// TELA HOME — DADOS PARA CARDS DIÁRIOS
// ============================================================

// #3 Palavras intraduzíveis
function HomeScreen({profile, goCoincidence, goTest, goEspiritualidade, goQuizzes}) {
  const [daysBack, setDaysBack] = useState(0);
  const [charadaReveal, setCharadaReveal] = useState(false);
  const [efemVoto, setEfemVoto] = useState(null);
  const [desafioFeito, setDesafioFeito] = useState(false);
  const [, forceUpdate] = useState(0);

  // Detectar meia-noite: se o dia mudou, recarrega
  useEffect(() => {
    const check = setInterval(() => {
      const now = new Date();
      if (now.getDate() !== today.getDate() || now.getMonth() !== today.getMonth()) {
        window.location.reload();
      }
    }, 60000); // verifica a cada 1 min
    return () => clearInterval(check);
  }, []);

  const viewDate = new Date(today);
  viewDate.setDate(viewDate.getDate() - daysBack);
  const vDay   = viewDate.getDate();
  const vMonth = viewDate.getMonth() + 1;
  const vYear  = viewDate.getFullYear();
  const vDOW   = viewDate.getDay();
  const vDOY   = Math.floor((viewDate - new Date(viewDate.getFullYear(), 0, 0)) / 86400000);

  const isToday = daysBack === 0;
  const calendarios = getTodosCalendarios(viewDate);

  const famous  = (() => {
    const match = famosos.filter(c => c.day === vDay && c.month === vMonth);
    if (match.length === 0) return famosos[(vDay * vMonth) % famosos.length];
    const bracket = getUserBracket(profile?.birthYear);
    return match.find(c => c.ageBracket === bracket) || [...match].sort((a,b) => b.popularity - a.popularity)[0];
  })();
  const historia = getHistoriaDoDia(vDay);
  const mensagemDia = getMensagemDoDia(DOY);

  // Picks determinísticos por dia do ano
  const pick = (arr) => arr[vDOY % arr.length];
  const pick2 = (arr, offset) => arr[(vDOY + offset) % arr.length];
  const palavra = pick(PALAVRAS_DIA);
  const invencao = pick(INVENCOES_DIA);
  const espaco = pick(ESPACO_DIA);
  const lugar = pick(MAPA_DIA);
  const habito = pick(HABITOS_DIA);
  const musica = pick(MUSICAS_DIA);
  const descoberta = pick(DESCOBERTAS_DIA);
  const diaInfo = DIAS_SEMANA_INFO[vDOW];
  const charada = pick(CHARADAS_DIA);
  const efem = [pick2(EFEMERIDES,0), pick2(EFEMERIDES,11), pick2(EFEMERIDES,23)];

  // #46 Numerologia do dia pessoal
  const diaPessoal = (() => {
    if (!profile?.birthDay || !profile?.birthMonth) return null;
    const soma = [profile?.birthDay, profile?.birthMonth, vDay, vMonth, ...String(vYear).split("").map(Number)]
      .reduce((a,b)=>a+Number(b),0);
    let n = soma;
    while (n > 9) n = String(n).split("").reduce((a,b)=>a+Number(b),0);
    const sig = ["","Dia de novos começos","Dia de parcerias","Dia de comunicação","Dia de trabalho e base","Dia de aventura","Dia de cuidar de outros","Dia de introspecção","Dia de ambição","Dia de conclusões"][n];
    const desc = ["",
      "Energia de iniciativa — bom para começar projetos, liderar e dar o primeiro passo.",
      "Dia de cooperação — favorece parcerias, diálogo e cuidar dos relacionamentos.",
      "Comunicação em alta — ideal para se expressar, criar e socializar.",
      "Foco e disciplina — ótimo para organizar, planejar e construir com solidez.",
      "Movimento e mudança — aproveite para sair da rotina, viajar e arriscar.",
      "Energia de cuidado — dia para família, lar, harmonia e responsabilidade afetiva.",
      "Introspecção e estudo — reflita, aprenda e cuide de si; evite multidões e pressa.",
      "Ambição e poder — favorável a negócios, finanças e decisões de carreira.",
      "Encerramentos — bom para concluir ciclos, perdoar e fazer um balanço.",
    ][n];
    return {n, sig, desc};
  })();

  // #42 Mini-perfil
  const TEMPE_SHORT = {colerico:"🔥 Colérico",sanguineo:"☀️ Sanguíneo",melancolico:"🌊 Melancólico",fleumatico:"🌿 Fleumático"};
  const sign = profile?.birthDay && profile?.birthMonth ? getSign(parseInt(profile.birthDay), parseInt(profile.birthMonth)) : null;

  // #43 Barra de progresso
  const TODOS_TESTES = ["temperamento","amor","politico","personalidade","profissional","lider","financeiro","elemento","profissao","tradicao"];
  const feitos = TODOS_TESTES.filter(k => profile?.[k]).length;

  // #55 Boas-vindas
  const hora = new Date().getHours();
  const saudacao = hora < 12 ? "Bom dia" : hora < 18 ? "Boa tarde" : "Boa noite";
  const nomeUser = profile?.name?.split(" ")[0] || "Explorador";

  // #57 Sugestão do dia
  const sugestoes = [
    {t:"Faça o teste de Temperamento",k:"temperamento",tab:"testes",se:!profile?.temperamento},
    {t:"Descubra sua Linguagem do Amor",k:"amor",tab:"testes",se:!profile?.amor},
    {t:"Teste seu Perfil Financeiro",k:"financeiro",tab:"testes",se:!profile?.financeiro},
    {t:"Jogue o Relâmpago Diário de Quizzes",k:null,tab:"quizzes",se:true},
    {t:"Descubra suas coincidências com famosos",k:null,tab:"komparai",se:true},
    {t:"Tente o Quiz de Capitais do Mundo",k:null,tab:"quizzes",se:true},
  ].filter(s=>s.se);
  const sugestao = sugestoes[vDOY % sugestoes.length];

  // #54 Lembrete
  const semCoinc = !profile?.lastCoincidencia;
  const proverbio = PROVERBIOS_DIA[vDOY % PROVERBIOS_DIA.length];

  // === NOVAS FEATURES HOJE ===
  // #3 Contador de dias do ano
  const diasNoAno = ((vYear % 4 === 0 && vYear % 100 !== 0) || vYear % 400 === 0) ? 366 : 365;
  const pctAno = ((vDOY / diasNoAno) * 100).toFixed(1);

  // #8 Aniversariante famoso de HOJE (não do usuário)
  const anivHoje = famosos.filter(c => c.day === vDay && c.month === vMonth);
  const famosoAniv = anivHoje.length ? [...anivHoje].sort((a,b)=>(b.popularity||0)-(a.popularity||0))[0] : null;

  // #1 Efeméride interativa
  const EFEM_INTERATIVAS = [
    {ano:1969,evento:"o homem pisou na Lua pela primeira vez",pergunta:"Você teria coragem de ir à Lua?"},
    {ano:1989,evento:"o Muro de Berlim caiu",pergunta:"Você participaria de uma revolução pacífica?"},
    {ano:1912,evento:"o Titanic afundou",pergunta:"Você embarcaria numa viagem inaugural?"},
    {ano:1903,evento:"os irmãos Wright voaram pela primeira vez",pergunta:"Você toparia pilotar um avião experimental?"},
    {ano:1955,evento:"Rosa Parks se recusou a ceder o lugar no ônibus",pergunta:"Você defenderia o que é certo, mesmo sozinho?"},
    {ano:1876,evento:"o telefone foi inventado",pergunta:"Você viveria sem celular por um mês?"},
    {ano:1492,evento:"Colombo chegou às Américas",pergunta:"Você navegaria rumo ao desconhecido?"},
  ];
  const efemInterativa = EFEM_INTERATIVAS[vDOY % EFEM_INTERATIVAS.length];

  // #2 Previsão do tempo emocional (numerologia)
  const climaEmocional = (() => {
    const climas = [
      {n:1,e:"☀️",txt:"Dia de iniciativa — comece algo novo"},
      {n:2,e:"🌤️",txt:"Dia de parcerias — conecte-se com alguém"},
      {n:3,e:"🌈",txt:"Dia criativo — expresse-se sem medo"},
      {n:4,e:"🧱",txt:"Dia de organização — coloque a casa em ordem"},
      {n:5,e:"🌪️",txt:"Dia de mudança — abrace o inesperado"},
      {n:6,e:"💚",txt:"Dia de cuidado — cuide de quem ama"},
      {n:7,e:"🌙",txt:"Dia de introspecção — ouça seu interior"},
      {n:8,e:"⚡",txt:"Dia de ambição — vá atrás dos seus objetivos"},
      {n:9,e:"🕊️",txt:"Dia de conclusões — finalize o que ficou pendente"},
    ];
    let soma = vDay + vMonth + vYear;
    while (soma > 9) soma = String(soma).split("").reduce((a,b)=>a+Number(b),0);
    return climas[(soma||1)-1];
  })();

  // #7 Desafio diário
  const DESAFIOS_DIA = [
    {e:"💧",t:"Beba 2 litros de água hoje"},
    {e:"🚶",t:"Caminhe 20 minutos ao ar livre"},
    {e:"📵",t:"Fique 1 hora longe das telas"},
    {e:"🙏",t:"Agradeça por 3 coisas hoje"},
    {e:"📞",t:"Ligue para alguém que você ama"},
    {e:"📖",t:"Leia 10 páginas de um livro"},
    {e:"🧘",t:"Medite por 5 minutos"},
    {e:"🌱",t:"Faça uma boa ação anônima"},
    {e:"😴",t:"Durma 30 minutos mais cedo"},
    {e:"✍️",t:"Escreva como você se sente"},
  ];
  const desafioHoje = DESAFIOS_DIA[vDOY % DESAFIOS_DIA.length];

  // #10 Retrospectiva semanal (domingo)
  const ehDomingo = vDOW === 0;

  return (
    <div>
      {/* Topo: Logo + Navegação de dias */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
        <Logo size={22}/>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <button onClick={()=>{ setDaysBack(d=>Math.min(d+1,10)); setCharadaReveal(false); }}
            style={{width:30,height:30,borderRadius:"50%",border:"1.5px solid #E5E7EB",background:"#fff",
              fontSize:14,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#5A6B68"}}>◀</button>
          <div style={{fontSize:12,color:isToday?"#10B981":"#9CA3AF",fontWeight:700,minWidth:60,textAlign:"center"}}>
            {isToday ? "Hoje" : `-${daysBack}d`}
          </div>
          <button onClick={()=>{ setDaysBack(d=>Math.max(d-1,0)); setCharadaReveal(false); }} disabled={isToday}
            style={{width:30,height:30,borderRadius:"50%",border:"1.5px solid #E5E7EB",
              background:isToday?"#F9FAFB":"#fff",fontSize:14,cursor:isToday?"not-allowed":"pointer",
              display:"flex",alignItems:"center",justifyContent:"center",color:isToday?"#D1D5DB":"#5A6B68"}}>▶</button>
        </div>
      </div>

      {!isToday && (
        <div style={{background:"#FFF7ED",borderRadius:12,padding:"10px 14px",marginBottom:12,
          fontSize:12,color:"#92400E",fontWeight:600}}>
          📅 {DAYS_PT[vDOW]}, {vDay} de {MONTHS[vMonth]} de {vYear}
        </div>
      )}

      {/* #55 Boas-vindas + #42 Mini-perfil + #43 Progresso */}
      {isToday && profile?.name && (
        <Card style={{background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",color:"#fff",marginBottom:14}}>
          <div style={{fontSize:15,fontWeight:800,marginBottom:4}}>{saudacao}, {nomeUser}! {gTxt(profile?.gender,"👊","✨")}</div>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:10}}>
            {sign && <span style={{fontSize:10,background:"#ffffff15",borderRadius:20,padding:"3px 9px",color:"#A7F3D0"}}>{SIGN_EMOJI[sign]} {sign}</span>}
            {profile?.temperamento && <span style={{fontSize:10,background:"#ffffff15",borderRadius:20,padding:"3px 9px",color:"#A7F3D0"}}>{TEMPE_SHORT[profile.temperamento]}</span>}
            {profile?.tradicao && <span style={{fontSize:10,background:"#ffffff15",borderRadius:20,padding:"3px 9px",color:"#A7F3D0"}}>🙏 {profile.tradicao?.split(" ")[0]}</span>}
          </div>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <div style={{flex:1,height:5,background:"#ffffff20",borderRadius:4,overflow:"hidden"}}>
              <div style={{height:"100%",width:`${(feitos/TODOS_TESTES.length)*100}%`,background:"#10B981",borderRadius:4}}/>
            </div>
            <span style={{fontSize:10,color:"#6EE7B7",fontWeight:700}}>{feitos}/{TODOS_TESTES.length} testes</span>
          </div>
          {/* #2 Clima emocional + #3 Contador de ano */}
        </Card>
      )}

      {/* ══════════════════════════════════════════════
          🌅 CATEGORIA: SEU DIA — Verde #10B981
      ══════════════════════════════════════════════ */}
      <div style={{marginBottom:8}}>
        <div style={{display:"flex",alignItems:"center",gap:10,padding:"13px 16px",borderRadius:16,background:"#10B98118",border:"1.5px solid #10B98140",marginBottom:10,boxShadow:"0 2px 8px #10B98115"}}>
          <span style={{fontSize:18}}>🌅</span>
          <div style={{flex:1}}>
            <div style={{fontSize:13,fontWeight:800,color:"#10B981"}}>Seu Dia</div>
            <div style={{fontSize:10,color:"#9CA3AF"}}>Desafios, história e marcos de hoje</div>
          </div>
        </div>

        <div style={{marginLeft:10}}>
        <Card style={{marginBottom:8,background:"#fff"}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}>
            <div style={{width:38,height:38,borderRadius:10,background:"#F3F4F6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{diaInfo.e}</div>
            <div>
              <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:2}}>📅 Dia da semana</div>
              <div style={{fontSize:13,fontWeight:800,color:"#0A1F1A"}}>{diaInfo.nome} — {diaInfo.origem}</div>
              <div style={{fontSize:11,color:"#6B7280",marginTop:2,lineHeight:1.5}}>{diaInfo.mito}</div>
            </div>
          </div>
        </Card>

        <Card style={{marginBottom:8,background:"#fff"}}>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>🎯 Desafio do Dia</div>
          <div style={{display:"flex",gap:12,alignItems:"center"}}>
            <div style={{width:44,height:44,borderRadius:12,background:desafioFeito?"#ECFDF5":"#F3F4F6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{desafioHoje.e}</div>
            <div style={{flex:1}}><div style={{fontSize:14,fontWeight:800,color:"#0A1F1A",textDecoration:desafioFeito?"line-through":"none",opacity:desafioFeito?0.6:1}}>{desafioHoje.t}</div></div>
            <div onClick={()=>setDesafioFeito(f=>!f)} style={{padding:"7px 14px",borderRadius:20,cursor:"pointer",fontSize:11,fontWeight:800,flexShrink:0,background:desafioFeito?"#10B981":"#F3F4F6",color:desafioFeito?"#fff":"#6B7280"}}>{desafioFeito?"✅ Feito!":"Fazer"}</div>
          </div>
        </Card>

        {diaPessoal && (
          <Card style={{marginBottom:8,background:"#fff"}}>
            <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>🔢 Número Pessoal do Dia</div>
            <div style={{display:"flex",alignItems:"center",gap:14}}>
              <div style={{width:52,height:52,borderRadius:14,background:"linear-gradient(135deg,#10B981,#059669)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,fontWeight:900,color:"#fff",flexShrink:0}}>{diaPessoal.n}</div>
              <div style={{flex:1}}><div style={{fontSize:15,fontWeight:800,color:"#0A1F1A"}}>{diaPessoal.sig}</div><div style={{fontSize:12,color:"#6B7280",marginTop:4,lineHeight:1.5}}>{diaPessoal.desc}</div></div>
            </div>
          </Card>
        )}

        <Card style={{marginBottom:8,background:"#fff"}}>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>⏳ Hoje na História</div>
          <div style={{fontSize:14,color:"#0A1F1A",lineHeight:1.6,marginBottom:10}}><span style={{fontWeight:800}}>Em {efemInterativa.ano}</span>, {efemInterativa.evento}.</div>
          {efemVoto===null ? (
            <div>
              <div style={{fontSize:12,color:"#6B7280",marginBottom:8}}>{efemInterativa.pergunta}</div>
              <div style={{display:"flex",gap:8}}>
                <div onClick={()=>setEfemVoto("sim")} style={{flex:1,padding:"9px 0",borderRadius:10,background:"#ECFDF5",border:"1px solid #A7F3D0",textAlign:"center",cursor:"pointer",fontSize:13,fontWeight:700,color:"#065F46"}}>👍 Sim</div>
                <div onClick={()=>setEfemVoto("nao")} style={{flex:1,padding:"9px 0",borderRadius:10,background:"#FEF2F2",border:"1px solid #FCA5A5",textAlign:"center",cursor:"pointer",fontSize:13,fontWeight:700,color:"#991B1B"}}>👎 Não</div>
              </div>
            </div>
          ) : (
            <div style={{padding:"10px 14px",background:"#F0FDF4",borderRadius:10,fontSize:13,color:"#065F46",fontWeight:600,textAlign:"center"}}>{efemVoto==="sim"?"🔥 Corajoso! Você faria história também.":"😌 Cautela também é sabedoria."}</div>
          )}
        </Card>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          ⭐ CATEGORIA: FAMOSOS & CULTURA — Roxo #7C3AED
      ══════════════════════════════════════════════ */}
      <div style={{marginBottom:8}}>
        <div style={{display:"flex",alignItems:"center",gap:8,padding:"10px 14px",borderRadius:14,background:"#F3F4F6",border:"1px solid #7C3AED30",marginBottom:8}}>
          <span style={{fontSize:18}}>⭐</span>
          <div style={{flex:1}}>
            <div style={{fontSize:13,fontWeight:800,color:"#7C3AED"}}>Famosos & Cultura</div>
            <div style={{fontSize:10,color:"#9CA3AF"}}>Personalidades, palavras e curiosidades</div>
          </div>
        </div>

        <div style={{marginLeft:10}}>
        {famosoAniv && (
          <Card style={{marginBottom:8,background:"#fff"}}>
            <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>🎂 Aniversariante de Hoje</div>
            <div style={{display:"flex",gap:12,alignItems:"center"}}>
              <div style={{width:48,height:48,borderRadius:"50%",background:"linear-gradient(135deg,#7C3AED,#5B21B6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0,boxShadow:"0 2px 8px rgba(124,58,237,0.3)"}}>{famosoAniv.emoji}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:15,fontWeight:800,color:"#0A1F1A"}}>{famosoAniv.name}</div>
                <div style={{fontSize:11,color:"#9CA3AF"}}>{famosoAniv.category} · nasceu em {famosoAniv.born}</div>
                {profile?.birthDay && parseInt(profile.birthDay)===vDay && parseInt(profile.birthMonth)===vMonth && <div style={{fontSize:10,color:"#7C3AED",fontWeight:700,marginTop:3}}>🎉 No seu aniversário também!</div>}
              </div>
            </div>
          </Card>
        )}

        <Card style={{marginBottom:8,background:"#fff"}}>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>⭐ Famoso do Dia</div>
          <div style={{display:"flex",gap:14,alignItems:"flex-start"}}>
            <div style={{fontSize:36,flexShrink:0}}>{famous.emoji}</div>
            <div style={{flex:1}}>
              <div style={{fontSize:17,fontWeight:800,color:"#0A1F1A",lineHeight:1.2}}>{famous.name}</div>
              <div style={{fontSize:11,color:"#9CA3AF",marginTop:3}}>{famous.day} de {MONTHS[famous.month]} · {famous.category} · {famous.country}</div>
              {famous.quote && <div style={{fontSize:13,color:"#374151",lineHeight:1.6,fontStyle:"italic",marginTop:10,borderLeft:"3px solid #7C3AED",paddingLeft:12}}>"{famous.quote}"</div>}
              {famous.fact && <div style={{fontSize:12,color:"#6B7280",marginTop:8,lineHeight:1.6}}>{famous.fact}</div>}
              <button onClick={goCoincidence} style={{marginTop:10,background:"#7C3AED",color:"#fff",border:"none",borderRadius:20,padding:"7px 14px",fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>Ver coincidências →</button>
            </div>
          </div>
        </Card>

        {(() => { const p=pick(PALAVRAS_DIA); return (
          <Card style={{marginBottom:8,background:"#fff"}}>
            <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>🌐 Palavra Intraduzível</div>
            <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
              <div style={{width:44,height:44,borderRadius:12,background:"#F3F4F6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{p.e}</div>
              <div style={{flex:1}}><div style={{fontSize:15,fontWeight:800,color:"#0A1F1A"}}>{p.p} <span style={{fontSize:11,color:"#9CA3AF",fontWeight:400}}>({p.l})</span></div><div style={{fontSize:12,color:"#374151",marginTop:4,lineHeight:1.6}}>{p.d}</div></div>
            </div>
          </Card>
        ); })()}

        {(() => { const p=pick(PROVERBIOS_DIA); return (
          <Card style={{marginBottom:8,background:"#fff"}}>
            <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>📜 Provérbio do Dia</div>
            <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
              <div style={{width:38,height:38,borderRadius:10,background:"#F3F4F6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>{p.e}</div>
              <div style={{flex:1}}><div style={{fontSize:14,fontWeight:600,color:"#0A1F1A",lineHeight:1.6,fontStyle:"italic",marginBottom:6}}>"{p.p}"</div><div style={{fontSize:11,color:"#9CA3AF",fontWeight:600}}>— {p.t}</div></div>
            </div>
          </Card>
        ); })()}

        {(() => { const ch=pick(CHARADAS_DIA); return (
          <Card style={{marginBottom:8,background:"#fff"}}>
            <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>🧩 Charada do Dia</div>
            <div style={{fontSize:14,color:"#0A1F1A",lineHeight:1.6,fontWeight:600,marginBottom:10}}>"{ch.p}"</div>
            {!charadaReveal ? (
              <div onClick={()=>setCharadaReveal(true)} style={{padding:"9px",borderRadius:10,background:"#7C3AED",color:"#fff",textAlign:"center",cursor:"pointer",fontSize:12,fontWeight:700}}>Ver resposta</div>
            ) : (
              <div style={{padding:"10px 14px",background:"#F5F3FF",borderRadius:10,fontSize:14,color:"#5B21B6",fontWeight:700,textAlign:"center"}}>💡 {ch.r}</div>
            )}
          </Card>
        ); })()}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          🌍 CATEGORIA: MUNDO & CIÊNCIA — Azul #3B82F6
      ══════════════════════════════════════════════ */}
      <div style={{marginBottom:8}}>
        <div style={{display:"flex",alignItems:"center",gap:10,padding:"13px 16px",borderRadius:16,background:"#3B82F618",border:"1.5px solid #3B82F640",marginBottom:10,boxShadow:"0 2px 8px #3B82F615"}}>
          <span style={{fontSize:18}}>🌍</span>
          <div style={{flex:1}}>
            <div style={{fontSize:13,fontWeight:800,color:"#3B82F6"}}>Mundo & Ciência</div>
            <div style={{fontSize:10,color:"#9CA3AF"}}>Calendários, espaço, descobertas e lugares</div>
          </div>
        </div>

        <div style={{marginLeft:10}}>
        <div style={{marginBottom:8}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8}}>
            <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>🗓️ Hoje no Mundo</div>
            <ShareBtn onClick={()=>shareContent("mundo",{dataStr:`${vDay} de ${MONTHS[vMonth]} de ${vYear}`,calendarios},`🌍 Em que ano estamos ao redor do mundo?\n\n${calendarios.map(c=>`${c.emoji} ${c.nome}: ${c.formatado}`).join("\n")}`)}/>
          </div>
          <Card style={{background:"#fff",marginBottom:0,padding:"14px 16px"}}>
            {calendarios.map((cal,idx)=>(
              <div key={cal.nome} style={{display:"flex",alignItems:"center",gap:14,padding:"10px 0",borderBottom:idx<calendarios.length-1?"1px solid #F3F4F6":"none"}}>
                <div style={{fontSize:28,flexShrink:0,width:36,textAlign:"center"}}>{cal.emoji}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:10,color:"#3B82F6",fontWeight:700,textTransform:"uppercase",letterSpacing:0.8,marginBottom:1}}>{cal.nome}</div>
                  <div style={{fontSize:14,fontWeight:700,color:"#0A1F1A"}}>{cal.formatado}</div>
                </div>
              </div>
            ))}
          </Card>
        </div>

        <Card style={{position:"relative",marginBottom:8,background:"#fff"}}>
          <ShareBtn onClick={()=>shareContent("historia",{texto:historia?.historia||"",dataStr:`${vDay} de ${MONTHS[vMonth]}`},`📜 ${historia?.titulo||"Neste dia"} — ${vDay} de ${MONTHS[vMonth]}:\n\n${historia?.historia||""}`)} style={{background:"rgba(0,0,0,0.05)"}}/>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>{historia?.emoji||"📜"} História do Dia</div>
          <div style={{fontSize:16,fontWeight:800,color:"#0A1F1A",marginBottom:6}}>{historia?.titulo||""}</div>
          <div style={{fontSize:12,color:"#9CA3AF",marginBottom:12}}>{vDay} de {MONTHS[vMonth]} {historia?.famoso?`· ${historia.famoso}`:""}</div>
          <div style={{fontSize:14,color:"#374151",lineHeight:1.7,fontStyle:"italic"}}>{historia?.historia||""}</div>
          {historia?.licao && <div style={{fontSize:13,color:"#1E40AF",lineHeight:1.55,marginTop:12,padding:"10px 14px",background:"#EFF6FF",borderRadius:10,borderLeft:"3px solid #3B82F6"}}>💡 {historia.licao}</div>}
        </Card>

        {(() => { const inv=pick(INVENCOES_DIA); const efemList=[...efem,{e:inv.e,t:`Invenção: ${inv.i}`,a:inv.q}]; return (
        <Card style={{marginBottom:8,background:"#fff"}}>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>📌 Efemérides do Dia</div>
          {efemList.map((ev,i)=>(
            <div key={i} style={{display:"flex",gap:10,alignItems:"center",padding:"7px 0",borderBottom:i<efemList.length-1?"1px solid #F3F4F6":"none"}}>
              <div style={{width:32,height:32,borderRadius:8,background:"#F3F4F6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,flexShrink:0}}>{ev.e}</div>
              <div style={{flex:1}}><div style={{fontSize:12,fontWeight:700,color:"#0A1F1A"}}>{ev.t}</div><div style={{fontSize:10,color:"#9CA3AF"}}>{ev.a}</div></div>
            </div>
          ))}
        </Card>
        ); })()}

        {(() => { const dc=pick(ESPACO_DIA); return (
          <Card style={{marginBottom:8,background:"#fff"}}>
            <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>🚀 Hoje no Espaço</div>
            <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
              <div style={{width:44,height:44,borderRadius:12,background:"#F3F4F6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{dc.e}</div>
              <div style={{flex:1}}><div style={{fontSize:14,fontWeight:800,color:"#0A1F1A",marginBottom:4}}>{dc.t}</div><div style={{fontSize:12,color:"#6B7280",lineHeight:1.5}}>{dc.d}</div></div>
            </div>
          </Card>
        ); })()}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          💪 CATEGORIA: BEM-ESTAR — Rosa #EC4899
      ══════════════════════════════════════════════ */}
      <div style={{marginBottom:8}}>
        <div style={{display:"flex",alignItems:"center",gap:10,padding:"13px 16px",borderRadius:16,background:"#EC489918",border:"1.5px solid #EC489940",marginBottom:10,boxShadow:"0 2px 8px #EC489915"}}>
          <span style={{fontSize:18}}>💪</span>
          <div style={{flex:1}}>
            <div style={{fontSize:13,fontWeight:800,color:"#EC4899"}}>Bem-Estar</div>
            <div style={{fontSize:10,color:"#9CA3AF"}}>Hábitos, música e sugestões do dia</div>
          </div>
        </div>

        <div style={{marginLeft:10}}>
        <Card style={{marginBottom:8,background:"#fff"}}>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>{gTxt(profile?.gender,"💪","🌸")} Hábito do Dia</div>
          <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
            <div style={{width:44,height:44,borderRadius:12,background:"#F3F4F6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{habito.e}</div>
            <div style={{flex:1}}><div style={{fontSize:15,fontWeight:800,color:"#0A1F1A"}}>{habito.h}</div><div style={{fontSize:12,color:"#6B7280",marginTop:4,lineHeight:1.5}}>{habito.i}</div></div>
          </div>
        </Card>

        {(() => { const mu=pick(MUSICAS_DIA); const ytQuery=encodeURIComponent(`${mu.m} ${mu.a}`); return (
          <Card style={{marginBottom:8,background:"#fff"}}>
            <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>🎵 Música do Dia</div>
            <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
              <div style={{width:44,height:44,borderRadius:12,background:"linear-gradient(135deg,#EC4899,#BE185D)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>🎵</div>
              <div style={{flex:1}}>
                <div style={{fontSize:15,fontWeight:800,color:"#0A1F1A"}}>{mu.m}</div>
                <div style={{fontSize:12,color:"#9CA3AF",marginTop:2}}>{mu.a} · {mu.y}</div>
                <div style={{fontSize:12,color:"#6B7280",marginTop:6,lineHeight:1.5}}>{mu.f}</div>
                <a href={`https://www.youtube.com/results?search_query=${ytQuery}`} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:6,marginTop:10,background:"#FF0000",color:"#fff",borderRadius:20,padding:"7px 14px",fontSize:11,fontWeight:700,textDecoration:"none"}}>▶ Ouvir no YouTube</a>
              </div>
            </div>
          </Card>
        ); })()}

        {(() => { const liv=LEITURAS_DIA[vDOY % LEITURAS_DIA.length]; return (
          <Card style={{marginBottom:8,background:"#fff"}}>
            <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>📖 Dica de Leitura do Dia</div>
            <div style={{display:"flex",gap:12,alignItems:"flex-start"}}>
              <div style={{width:44,height:44,borderRadius:12,background:"#F3F4F6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>📚</div>
              <div style={{flex:1}}>
                <div style={{fontSize:15,fontWeight:800,color:"#0A1F1A",lineHeight:1.3}}>{liv.t}</div>
                <div style={{fontSize:12,color:"#9CA3AF",marginTop:2}}>{liv.au}</div>
                <div style={{fontSize:12,color:"#6B7280",marginTop:6,lineHeight:1.5,fontStyle:"italic"}}>{liv.r}</div>
              </div>
            </div>
          </Card>
        ); })()}
        </div>
      </div>

      {/* Lembrete */}
    </div>
  );
}

// ============================================================
function CoincidenceTest({profile, onSaveToProfile, onBack, goPerfil, goTest}) {
  const [step,setStep] = useState("input");
  const [height,setHeight] = useState(profile?.height||"");
  const [weight,setWeight] = useState(profile?.weight||"");
  const [gender,setGender] = useState(profile?.gender||"");
  const [results,setResults] = useState([]);
  const [showAll,setShowAll] = useState(false);
  const [saved,setSaved] = useState(false);
  const [mapaOpen,setMapaOpen] = useState(false);
  const [mapaFiltro,setMapaFiltro] = useState(null);
  const [catFiltro,setCatFiltro] = useState(null);
  const isMainTab = !!goPerfil;

  const run = () => {
    const user = { birthDay:profile?.birthDay, birthMonth:profile?.birthMonth, birthYear:profile?.birthYear,
      height:parseInt(height)||null, weight:parseInt(weight)||null, gender, temperamento:profile?.temperamento };
    setResults(findMatches(user));
    setShowAll(false);
    setStep("scanning");
  };

  // ⏳ Após o "scanner", revela o resultado (suspense de ~1.7s)
  useEffect(() => {
    if (step !== "scanning") return;
    const t = setTimeout(() => setStep("result"), 1700);
    return () => clearTimeout(t);
  }, [step]);

  const [famosoEscolhido, setFamosoEscolhido] = useState(null);
  const [revealing, setRevealing] = useState(false);
  const [revealStep, setRevealStep] = useState(0); // 0=bloqueado 1=scanning 2=revelado
  const revealTimers = useRef([]);
  const [surpresaFamoso, setSurpresaFamoso] = useState(null);
  const [modoDesafio, setModoDesafio] = useState(false);
  const [palpite, setPalpite] = useState(null);

  const meSurpreenda = () => {
    if (revealing) return;
    const aleatorio = famosos[Math.floor(Math.random() * famosos.length)];
    setSurpresaFamoso(aleatorio);
    escolherFamoso(aleatorio);
  };

  const escolherFamoso = (f) => {
    if (revealing) return;
    revealTimers.current.forEach(clearTimeout);
    revealTimers.current = [];
    setFamosoEscolhido(f);
    setRevealing(true);
    setRevealStep(1);
    revealTimers.current.push(setTimeout(() => setRevealStep(2), 1800));
    revealTimers.current.push(setTimeout(() => setRevealing(false), 1800));
  };

  useEffect(() => () => revealTimers.current.forEach(clearTimeout), []);

  const reset = () => {
    revealTimers.current.forEach(clearTimeout);
    revealTimers.current = [];
    setStep("input");
    setResults([]);
    setSaved(false);
    setFamosoEscolhido(null);
    setRevealStep(0);
    setRevealing(false);
  };

  if (step==="scanning") return <ScannerScreen name={profile?.name}/>;


  if (step==="input") return (
    <div>
      {!isMainTab && <button onClick={onBack} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:16,fontFamily:"inherit"}}>← Voltar</button>}

      {/* HEADER COM MEU PERFIL EM DESTAQUE */}
      <div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",marginBottom:4}}>🪞 KomparAI</div>
      <div style={{fontSize:12,color:"#9CA3AF",marginBottom:14}}>Descubra o que você tem em comum com mais de {famosos.length} famosos</div>


      {profile?.birthDay && !isMainTab && (
        <div style={{background:"#F0FDF4",border:"1px solid #BBF7D0",borderRadius:14,padding:"12px 14px",marginBottom:16}}>
          <div style={{fontSize:11,color:"#059669",fontWeight:700,textTransform:"uppercase",marginBottom:6}}>✅ Do seu perfil</div>
          <div style={{fontSize:13,color:"#0A1F1A",fontWeight:600}}>
            📅 {profile?.birthDay} de {MONTHS[profile?.birthMonth]}{profile?.birthYear?` de ${profile.birthYear}`:""}
            {profile?.sign?`  ${SIGN_EMOJI[profile.sign]} ${profile.sign}`:""}
          </div>
        </div>
      )}
      <Label>Seu gênero</Label>
      <div style={{display:"flex",gap:10,marginBottom:16}}>
        {[{v:"M",l:"👨 Homem"},{v:"F",l:"👩 Mulher"}].map(o=>(
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
      <Label>Seu peso <span style={{fontSize:10,color:"#9CA3AF",fontWeight:500}}>(privado · só usado na comparação)</span></Label>
      <div style={{position:"relative",marginBottom:20}}>
        <input type="number" inputMode="numeric" value={weight}
          onChange={e=>setWeight(sanitizeInt(e.target.value))}
          onBlur={e=>setWeight(clampInt(e.target.value,20,300))}
          placeholder="Ex: 70"
          style={{width:"100%",background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:12,
            color:"#0A1F1A",fontSize:15,padding:"13px 44px 13px 15px",boxSizing:"border-box",fontWeight:500}}/>
        <span style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",color:"#9CA3AF",fontSize:13,fontWeight:600}}>kg</span>
      </div>
      {(() => {
        const disabled = !profile?.birthDay && !height && !weight;
        return (
          <div>
            <button onClick={run} disabled={disabled} style={{
              width:"100%",
              padding:"17px",
              borderRadius:16,
              border:"none",
              cursor:disabled?"not-allowed":"pointer",
              fontFamily:"inherit",
              fontSize:16,
              fontWeight:800,
              color:disabled?"#9CA3AF":"#fff",
              background:disabled?"#F3F4F6":"linear-gradient(110deg,#10B981,#059669,#10B981)",
              backgroundSize:"200% 100%",
              animation:disabled?"none":"ktPulse 2s ease-in-out infinite",
              display:"flex",alignItems:"center",justifyContent:"center",gap:10
            }}>
              <span style={{display:"inline-block",animation:disabled?"none":"ktSpin 2.6s linear infinite"}}>🔍</span>
              ✨ Revelar minhas coincidências
            </button>
            <div style={{textAlign:"center",fontSize:12,color:"#6B7280",fontWeight:600,marginTop:10}}>
              {famosos.length}+ famosos · 7 tipos de conexão
            </div>
          </div>
        );
      })()}
    </div>
  );

  const total = results.length;
  // 🎮 Mostra apenas desbloqueados + 3 "teaser" bloqueados
  // (showAll só vale após desbloquear todos os 55)
  const TEASER_BLOQUEADOS = 3;

  // ============================================================
  // 🏆 LÓGICA DE RARIDADE
  // ============================================================
  const calcRaridade = (totalCoincidencias) => {
    if (totalCoincidencias === 0) return null;
    if (totalCoincidencias >= 200) return { selo: "✨ TOP 1%", desc: "Conexão Extraordinária", cor: "#FCD34D" };
    if (totalCoincidencias >= 100) return { selo: "🌟 TOP 5%", desc: "Perfil de Alta Conexão", cor: "#10B981" };
    if (totalCoincidencias >= 50)  return { selo: "🔥 TOP 20%", desc: "Boa Conexão Cósmica", cor: "#34D399" };
    if (totalCoincidencias <= 5 && totalCoincidencias > 0) return { selo: "💎 PERFIL RARO", desc: "Você é Único no Mundo", cor: "#A78BFA" };
    return null;
  };
  const raridade = calcRaridade(total);

  // ============================================================
  // 💫 MANIFESTO PERSONALIZADO
  // ============================================================
  const gerarManifesto = () => {
    if (!results.length) return null;
    const top1 = results[0];
    const top2 = results[1];
    const top3 = results[2];
    if (!top1) return null;

    // Pegar conceitos únicos dos top 3
    const conceitos = [];
    [top1, top2, top3].forEach((r, idx) => {
      if (!r || !r.cel || !r.hits?.length) return;
      const principal = r.hits[0]?.text || "";
      // Extrair o "o quê" (ex: "Mesmo signo", "Mesma altura")
      let conceito = "";
      if (principal.includes("signo")) conceito = "o céu";
      else if (principal.includes("altura")) conceito = "a altura";
      else if (principal.includes("peso")) conceito = "a estrutura";
      else if (principal.includes("aniversário") || principal.includes("data") || principal.includes("nasceu")) conceito = "a data exata";
      else if (principal.includes("mês")) conceito = "o mês";
      else if (principal.includes("ano")) conceito = "a geração";
      else if (principal.includes("temperamento")) conceito = "a essência";
      else if (principal.includes("gênero")) conceito = "o caminho";
      else conceito = "algo profundo";
      conceitos.push({ conceito, nome: r.cel.name });
    });

    // Montar frase
    if (conceitos.length >= 3) {
      return `Você compartilha ${conceitos[0].conceito} de ${conceitos[0].nome}, ${conceitos[1].conceito} de ${conceitos[1].nome} e ${conceitos[2].conceito} de ${conceitos[2].nome}. Você nasceu para criar algo único.`;
    } else if (conceitos.length === 2) {
      return `Você compartilha ${conceitos[0].conceito} de ${conceitos[0].nome} e ${conceitos[1].conceito} de ${conceitos[1].nome}. Você não nasceu por acaso.`;
    } else if (conceitos.length === 1) {
      return `Você compartilha ${conceitos[0].conceito} de ${conceitos[0].nome}. Existe um motivo pra isso.`;
    }
    return null;
  };
  const manifesto = gerarManifesto();
  const famosoTop = results[0]; // O #1 da lista

  // ============================================================
  // 🎮 SISTEMA DE GAMIFICAÇÃO / DESBLOQUEIO
  // ============================================================
  // Cada teste feito desbloqueia +10 famosos
  // Top 5 sempre visível, resto bloqueado até fazer testes
  const TESTES_DESBLOQUEIO = [
    { key: "temperamento", nome: "Temperamento",      emoji: "🧬", cor: "#10B981" },
    { key: "amor",         nome: "Linguagens do Amor", emoji: "💘", cor: "#EC4899" },
    { key: "personalidade",nome: "Introvertido ou Extrovertido", emoji: "🧩", cor: "#6366F1" },
    { key: "profissional", nome: "Perfil Profissional", emoji: "💼", cor: "#10B981" },
    { key: "politico",     nome: "Espectro Político",  emoji: "🗳️", cor: "#3B82F6" },
  ];
  const TOP_INICIAL = 5;
  const POR_TESTE = 10;
  const testesFeitos = TESTES_DESBLOQUEIO.filter(t => !!profile?.[t.key]);
  const testesFaltam = TESTES_DESBLOQUEIO.filter(t => !profile?.[t.key]);
  const limiteDesbloqueado = TOP_INICIAL + (testesFeitos.length * POR_TESTE);
  const maxDesbloqueavel = TOP_INICIAL + (TESTES_DESBLOQUEIO.length * POR_TESTE); // 55
  // Próximo teste a sugerir (primeiro que falta)
  const proximoTeste = testesFaltam[0] || null;

  // 🎮 Quantidade visível na tela:
  // - Cards desbloqueados (limiteDesbloqueado)
  // - + 3 cards bloqueados como teaser (se houver próximo teste)
  // - Se já desbloqueou tudo e showAll, mostra todos
  const cortePadrao = limiteDesbloqueado + (proximoTeste ? TEASER_BLOQUEADOS : 0);
  // Grupos de categoria para filtro
  const CAT_GRUPOS = [
    { id:"musica",    emoji:"🎵", label:"Música",            match: c => /[Mm]úsica|[Mm]usic/.test(c.category) },
    { id:"cinema",    emoji:"🎬", label:"Cinema & TV",       match: c => /[Cc]inema|TV|[Tt]eatro|[Hh]umor/.test(c.category) },
    { id:"esporte",   emoji:"⚽", label:"Esporte",           match: c => /[Ee]sporte/.test(c.category) },
    { id:"arte",      emoji:"📚", label:"Arte & Literatura", match: c => /[Ll]iteratura|[Aa]rte|[Aa]nimação/.test(c.category) },
    { id:"ciencia",   emoji:"🔬", label:"Ciência & Tech",    match: c => /[Cc]iência|[Tt]ecnologia/.test(c.category) },
    { id:"moda",      emoji:"👗", label:"Moda & Estilo",     match: c => /[Mm]oda|[Gg]astronomia|[Ee]ntretenimento|[Nn]atureza/.test(c.category) },
    { id:"historia",  emoji:"📜", label:"História",          match: c => /[Hh]istória|[Aa]tivismo|[Rr]ealeza|[Ff]ilosofia|[Ee]spiritual|[Dd]ireitos/.test(c.category) },
  ];
  const signEmojisSet = new Set(Object.values(SIGN_EMOJI));
  const COIN_FILTROS = {
    aniv:   r => r.hits.some(h=>h.icon==="🎂"),
    altura: r => r.hits.some(h=>h.icon==="📏"),
    peso:   r => r.hits.some(h=>h.icon==="⚖️"),
    temp:   r => r.hits.some(h=>h.icon==="🧬"),
    signo:  r => r.hits.some(h=>signEmojisSet.has(h.icon)),
    mes:    r => r.hits.some(h=>h.icon==="🗓️"),
    ger:    r => r.hits.some(h=>h.icon==="🎉"),
  };
  const resultsFiltrados = results.filter(r => {
    const passaCat = !catFiltro || (CAT_GRUPOS.find(g=>g.id===catFiltro)?.match(r.cel) ?? true);
    const passaCoin = !mapaFiltro || (COIN_FILTROS[mapaFiltro]?.(r) ?? true);
    return passaCat && passaCoin;
  });
  const totalFiltrado = resultsFiltrados.length;
  const visible = showAll ? resultsFiltrados : resultsFiltrados.slice(0, Math.min(cortePadrao, totalFiltrado));

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
            <div style={{fontSize:64,fontWeight:900,color:"#fff",lineHeight:1,letterSpacing:-4}}><CountUp end={total} duration={1100} sound/></div>
            <div style={{fontSize:16,color:"#D1FAE5",fontWeight:700}}>
              {total===0?"coincidências":total===1?"coincidência!":"coincidências!"}
            </div>
          </div>
          <button onClick={()=>{
            // Top 3 famosos com mais coincidências
            const top3 = results.slice(0,3).map(r => ({
              name: r.cel.name,
              emoji: r.cel.emoji,
              category: r.cel.category,
              born: r.cel.born,
              matches: r.hits.length,
            }));
            // Tags únicas extraídas dos hits (ex: "Mesmo signo", "Mesma altura")
            const tagSet = new Set();
            results.slice(0,10).forEach(r => r.hits.forEach(h => {
              // Extrai conceito principal antes de "—" se houver
              const concept = h.text.split("—")[0].trim().replace(/!$/,"");
              if (concept.length < 30) tagSet.add(concept);
            }));
            const tags = [...tagSet].slice(0,6);

            // Mensagem rica para WhatsApp
            const topText = top3.map(c => `${c.emoji} ${c.name} — ${c.matches} em comum`).join("\n");
            const message = `🪞 Eu${profile?.name?`, ${profile.name},`:""} tenho ${total} coincidências com famosos!\n\n⭐ Top 3:\n${topText}\n\nDescobre as suas: komparai.com`;

            shareContent("coincidencias", {
              nome: profile?.name || "",
              total: total,
              top: top3,
              tags: tags,
            }, message);
          }}
            style={{marginTop:12,background:"#ffffff20",border:"none",color:"#fff",fontSize:13,padding:"6px 14px",borderRadius:12,cursor:"pointer",fontFamily:"inherit",fontWeight:700}}>
            ↗ Compartilhar resultado
          </button>

          {/* 🎮 BARRA DE PROGRESSO DE DESBLOQUEIO */}
          {total > TOP_INICIAL && (
            <div style={{marginTop:14,paddingTop:14,borderTop:"1px solid rgba(255,255,255,0.18)"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                <span style={{fontSize:10,color:"#A7F3D0",fontWeight:700,letterSpacing:1,textTransform:"uppercase"}}>
                  🎮 Famosos desbloqueados
                </span>
                <span style={{fontSize:11,color:"#fff",fontWeight:800}}>
                  {Math.min(limiteDesbloqueado, total)}/{Math.min(maxDesbloqueavel, total)}
                </span>
              </div>
              <div style={{width:"100%",height:7,background:"rgba(255,255,255,0.18)",borderRadius:4,overflow:"hidden"}}>
                <div style={{
                  width:`${Math.min(100, (Math.min(limiteDesbloqueado, total) / Math.min(maxDesbloqueavel, total)) * 100)}%`,
                  height:"100%",
                  background:"#fff",
                  borderRadius:4,
                  transition:"width .5s",
                  boxShadow:"0 0 8px rgba(255,255,255,0.6)"
                }}/>
              </div>
              {proximoTeste && (
                <div style={{fontSize:10,color:"#D1FAE5",marginTop:6,fontStyle:"italic"}}>
                  💡 Faça o teste de {proximoTeste.nome} pra liberar +{POR_TESTE} famosos
                </div>
              )}
              {!proximoTeste && limiteDesbloqueado >= total && (
                <div style={{fontSize:10,color:"#FCD34D",marginTop:6,fontWeight:700}}>
                  ✨ Você desbloqueou todas as suas coincidências!
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 🏆 SELO DE RARIDADE                                            */}
      {/* ============================================================ */}
      {raridade && (
        <div style={{
          background:`linear-gradient(135deg, ${raridade.cor}22, ${raridade.cor}08)`,
          border:`1.5px solid ${raridade.cor}66`,
          borderRadius:18,
          padding:"14px 16px",
          marginBottom:14,
          textAlign:"center",
          position:"relative",
          overflow:"hidden"
        }}>
          <div style={{position:"absolute",top:-10,right:-10,fontSize:60,opacity:0.08,pointerEvents:"none"}}>
            {raridade.selo.split(" ")[0]}
          </div>
          <div style={{fontSize:13,fontWeight:900,color:raridade.cor,letterSpacing:2,marginBottom:4}}>
            {raridade.selo}
          </div>
          <div style={{fontSize:14,fontWeight:700,color:"#0A1F1A"}}>
            {raridade.desc}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 🎂 FAMOSOS DO SEU DIA — card atraente com seleção            */}
      {/* ============================================================ */}
      {(() => {
        const bDay = parseInt(profile?.birthDay);
        const bMonth = parseInt(profile?.birthMonth);
        if (!bDay || !bMonth) return null;
        const doMeuDia = famosos.filter(c => c.day === bDay && c.month === bMonth);
        if (doMeuDia.length === 0) return null;
        // Base com 1 famoso/dia: mostra quem houver no dia (até 3 no futuro), por popularidade
        const ordem = ['jovem','adulto','senior'];
        const porBracket = ordem.map(br => doMeuDia.find(c => c.ageBracket === br)).filter(Boolean);
        const tres = (porBracket.length > 0 ? porBracket : [...doMeuDia].sort((a,b)=>(b.popularity||0)-(a.popularity||0))).slice(0,3);
        if (tres.length === 0) return null;

        const CORES = ['#10B981','#3B82F6','#7C3AED'];
        const LABELS = ['Nova Geração','Adulto','Histórico'];
        const GRADIENTES = [
          'linear-gradient(135deg,#10B981,#059669)',
          'linear-gradient(135deg,#3B82F6,#1D4ED8)',
          'linear-gradient(135deg,#7C3AED,#5B21B6)',
        ];

        return (
          <div style={{marginBottom:14,background:"#fff",borderRadius:20,overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,0.08)",border:"1px solid #F3F4F6"}}>

            {/* Header do bloco */}
            <div style={{background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",padding:"14px 16px 12px",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:-20,right:-20,width:100,height:100,borderRadius:"50%",background:"#10B98120",filter:"blur(20px)"}}/>
              <div style={{fontSize:10,color:"#10B981",fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:2,position:"relative"}}>🎂 Seu dia de aniversário</div>
              <div style={{fontSize:15,fontWeight:800,color:"#fff",position:"relative"}}>
                {tres.length > 1 ? 'Escolha com quem você quer se comparar' : 'O famoso que faz aniversário com você'}
              </div>
            </div>

            {/* Grade dinâmica conforme nº de famosos do dia */}
            <div style={{display:"grid",gridTemplateColumns:`repeat(${tres.length},1fr)`,gap:0}}>
              {tres.map((f,i) => {
                const myHits = results.find(r => r.cel.name === f.name);
                const pts = myHits ? myHits.hits.length : 1;
                const isSelected = famosoTop && famosoTop.cel.name === f.name;
                return (
                  <div key={i} onClick={()=>{
                    // Rolar para o card deste famoso na lista
                    const el = document.getElementById(`famoso-card-${f.name.replace(/\s/g,'_')}`);
                    if (el) el.scrollIntoView({behavior:'smooth', block:'center'});
                  }} style={{
                    cursor:"pointer",
                    padding:"14px 6px 12px",
                    textAlign:"center",
                    borderRight: i<2 ? "1px solid #F3F4F6" : "none",
                    background: isSelected ? `${CORES[i]}08` : "#fff",
                    transition:"background 0.2s",
                    position:"relative",
                    minWidth:0,
                    overflow:"hidden",
                  }}>
                    {/* Barra colorida topo */}
                    <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:GRADIENTES[i]}}/>

                    {/* Emoji famoso */}
                    <div style={{
                      width:52,height:52,borderRadius:"50%",
                      background:GRADIENTES[i],
                      display:"flex",alignItems:"center",justifyContent:"center",
                      fontSize:26,margin:"0 auto 8px",
                      boxShadow:`0 4px 12px ${CORES[i]}40`,
                    }}>{f.emoji}</div>

                    {/* Nome */}
                    <div style={{fontSize:11,fontWeight:800,color:"#0A1F1A",lineHeight:1.25,marginBottom:4,minHeight:30,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 2px"}}>
                      {f.name.split(' ').slice(0,2).join(' ')}
                    </div>

                    {/* Ano */}
                    <div style={{fontSize:10,color:"#9CA3AF",marginBottom:6}}>{f.born||'—'}</div>

                    {/* Badge faixa (categoria quando sem geração) */}
                    <div style={{fontSize:9,fontWeight:700,color:CORES[i],background:`${CORES[i]}15`,borderRadius:20,padding:"2px 7px",display:"inline-block",marginBottom:6}}>
                      {f.ageBracket ? LABELS[i] : (f.category || 'Famoso')}
                    </div>

                    {/* Pontos */}
                    <div style={{fontSize:11,fontWeight:800,color:CORES[i]}}>
                      {pts}
                    </div>
                    <div style={{fontSize:9,color:"#9CA3AF"}}>pontos</div>

                    {/* Botão comparar */}
                    <div onClick={(e)=>{e.stopPropagation(); escolherFamoso(f);}} style={{
                      marginTop:8,
                      padding:"6px 0",
                      borderRadius:10,
                      background: revealing && famosoEscolhido?.name===f.name ? '#9CA3AF' : GRADIENTES[i],
                      color:"#fff",
                      fontSize:10,
                      fontWeight:800,
                      letterSpacing:.5,
                      cursor: revealing ? "default" : "pointer",
                      transition:"background 0.3s",
                    }}>
                      {revealing && famosoEscolhido?.name===f.name ? '⏳ Analisando...' : famosoEscolhido?.name===f.name && revealStep===2 ? '✅ Escolhido' : 'Comparar →'}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* #3 Botão Me Surpreenda */}
            <div onClick={meSurpreenda} style={{
              margin:"0 12px 12px",padding:"11px 0",borderRadius:12,
              background: revealing ? "#9CA3AF" : "linear-gradient(135deg,#F59E0B,#EAB308)",
              color:"#fff",fontSize:13,fontWeight:800,textAlign:"center",
              cursor: revealing ? "default" : "pointer",letterSpacing:.5,
              boxShadow:"0 2px 8px rgba(245,158,11,0.3)",transition:"background 0.3s",
            }}>
              {revealing && surpresaFamoso ? '⏳ Sorteando...' : '🎲 Me Surpreenda — comparar com um famoso aleatório'}
            </div>
          </div>
        );
      })()}

      {/* ============================================================ */}
      {/* 🎴 CARD PREMIUM — embaçado até escolher, reveal dinâmico      */}
      {/* ============================================================ */}
      {famosoTop && total > 0 && (()=>{
        // Famoso a exibir: escolhido ou top1 (embaçado)
        const alvo = famosoEscolhido
          ? results.find(r => r.cel.name === famosoEscolhido.name) || results[0]
          : results[0];
        const bloqueado = !famosoEscolhido;
        const scanning = revealStep === 1;

        const uSign = profile?.birthDay && profile?.birthMonth ? getSign(parseInt(profile.birthDay), parseInt(profile.birthMonth)) : null;
        const cSign = getSign(alvo.cel.day, alvo.cel.month);
        const getGen = y => !y?"—":y<1946?"Silenciosa":y<1965?"Baby Boomer":y<1980?"Geração X":y<1997?"Millennial":y<2013?"Geração Z":"Alpha";
        const rows = [
          { icon:"🎂", você:`${profile?.birthDay||"?"}/${profile?.birthMonth||"?"}/${profile?.birthYear||"?"}`, famoso:`${alvo.cel.day}/${alvo.cel.month}/${alvo.cel.born}` },
          { icon:"📏", você:profile?.height?`${profile.height}cm`:"—", famoso:`${alvo.cel.height}cm` },
          { icon:"⚖️", você:profile?.weight?`${profile.weight}kg`:"—", famoso:`${alvo.cel.weight}kg` },
          { icon:uSign?SIGN_EMOJI[uSign]:"✨", você:uSign||"—", famoso:cSign },
          { icon:"🎉", você:getGen(profile?.birthYear), famoso:getGen(alvo.cel.born) },
        ];

        return (
          <div style={{position:"relative",marginBottom:14}}>

            {/* Overlay de bloqueio */}
            {bloqueado && (
              <div style={{position:"absolute",inset:0,zIndex:10,borderRadius:22,
                backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",
                background:"rgba(10,31,26,0.45)",
                display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,padding:"0 20px",
              }}>
                <div style={{fontSize:36}}>🔒</div>
                <div style={{fontSize:13,fontWeight:800,color:"#fff",textAlign:"center"}}>
                  Escolha um famoso acima para revelar sua comparação
                </div>
                {/* #10 Toggle modo desafio */}
                <div onClick={()=>{setModoDesafio(d=>!d); setPalpite(null);}} style={{
                  marginTop:4,padding:"7px 16px",borderRadius:20,cursor:"pointer",
                  background: modoDesafio ? "#10B981" : "#ffffff20",
                  fontSize:11,fontWeight:700,color:"#fff",border:"1px solid #ffffff30",
                }}>
                  {modoDesafio ? "🎯 Modo Desafio ativado" : "🎯 Ativar Modo Desafio (adivinhe os pontos)"}
                </div>
                {modoDesafio && (
                  <div style={{display:"flex",gap:6,alignItems:"center",flexWrap:"wrap",justifyContent:"center"}}>
                    <span style={{fontSize:11,color:"#D1FAE5"}}>Quantos pontos terá?</span>
                    {[1,2,3,4,5,6,7].map(n=>(
                      <span key={n} onClick={()=>setPalpite(n)} style={{
                        width:28,height:28,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",
                        cursor:"pointer",fontSize:12,fontWeight:800,
                        background: palpite===n ? "#10B981" : "#ffffff20",
                        color:"#fff",border:"1px solid #ffffff30",
                      }}>{n}</span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Overlay de scanning */}
            {scanning && (
              <div style={{position:"absolute",inset:0,zIndex:10,borderRadius:22,
                background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",
                display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:12,
              }}>
                <div style={{fontSize:40,animation:"ktSpin 1s linear infinite"}}>🔍</div>
                <div style={{fontSize:14,fontWeight:800,color:"#10B981"}}>Analisando coincidências...</div>
                <div style={{fontSize:12,color:"#6EE7B7"}}>Comparando com {famosoEscolhido?.name}</div>
                {/* Barra de progresso animada */}
                <div style={{width:"70%",height:4,background:"#ffffff20",borderRadius:4,overflow:"hidden",marginTop:4}}>
                  <div style={{height:"100%",background:"linear-gradient(90deg,#10B981,#34D399)",
                    borderRadius:4,animation:"ktSlide 1.8s ease-out forwards",width:"0%"}}/>
                </div>
                <style>{`@keyframes ktSlide{from{width:0%}to{width:100%}}`}</style>
              </div>
            )}

            {/* Card real (embaçado antes da escolha) */}
            <div style={{
              background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",
              borderRadius:22,
              padding:"20px 18px",
              position:"relative",
              overflow:"hidden",
              boxShadow:"0 4px 20px rgba(16,185,129,0.15)",
              filter: bloqueado ? "blur(6px)" : "none",
              transition:"filter 0.4s ease",
            }}>
              <div style={{position:"absolute",top:-30,right:-30,width:160,height:160,borderRadius:"50%",background:"#10B98130",filter:"blur(35px)"}}/>

              <div style={{position:"relative",zIndex:2}}>
                <div style={{fontSize:10,color:"#10B981",fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:6}}>
                  🏆 {famosoEscolhido ? "Sua comparação com" : "Sua maior coincidência"}
                </div>

                <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:14}}>
                  <div style={{
                    width:64,height:64,borderRadius:"50%",
                    background:"linear-gradient(135deg,#10B981,#047857)",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:36,boxShadow:"0 4px 12px rgba(16,185,129,0.4)",
                    border:"2px solid #34D399",flexShrink:0,
                    animation: revealStep===2 && famosoEscolhido ? "ktFadeIn 0.5s ease" : "none",
                  }}>
                    {alvo.cel.emoji}
                  </div>
                  <div style={{flex:1,minWidth:0,animation: revealStep===2 && famosoEscolhido ? "ktSlideUp 0.5s ease" : "none"}}>
                    <div style={{fontSize:22,fontWeight:900,color:"#fff",lineHeight:1.1,marginBottom:3}}>
                      {alvo.cel.name}
                    </div>
                    <div style={{fontSize:12,color:"#6EE7B7",fontWeight:600}}>
                      {alvo.cel.category} · {alvo.cel.born}
                    </div>
                    <div style={{fontSize:11,color:"#A7F3D0",marginTop:3}}>
                      {alvo.hits.length} {alvo.hits.length===1?"ponto":"pontos"} em comum com você
                    </div>
                  </div>
                </div>

                {/* Pontos em comum */}
                <div style={{background:"#ffffff10",borderRadius:14,padding:"10px 12px"}}>
                  {alvo.hits.slice(0,3).map((h,k)=>(
                    <div key={k} style={{
                      display:"flex",gap:8,alignItems:"flex-start",
                      marginBottom:k<alvo.hits.slice(0,3).length-1?7:0,
                      opacity: revealStep===2 && famosoEscolhido ? 1 : 1,
                      animation: revealStep===2 && famosoEscolhido ? `ktFadeIn 0.4s ease ${k*0.15}s both` : "none",
                    }}>
                      <span style={{fontSize:14,flexShrink:0}}>{h.icon}</span>
                      <span style={{fontSize:12,color:"#D1FAE5",lineHeight:1.45,fontWeight:500}}>{h.text}</span>
                    </div>
                  ))}
                </div>

                {/* Comparação lado a lado */}
                <div style={{marginTop:12,background:"#ffffff08",borderRadius:12,overflow:"hidden"}}>
                  <div style={{display:"grid",gridTemplateColumns:"22px 1fr 1fr",padding:"7px 10px 4px",gap:4}}>
                    <div/>
                    <div style={{fontSize:9,color:"#6EE7B7",fontWeight:800,letterSpacing:1,textTransform:"uppercase"}}>VOCÊ</div>
                    <div style={{fontSize:9,color:"#A7F3D0",fontWeight:800,letterSpacing:1,textTransform:"uppercase"}}>{alvo.cel.name.split(" ")[0].toUpperCase()}</div>
                  </div>
                  {rows.map((r,i)=>(
                    <div key={i} style={{
                      display:"grid",gridTemplateColumns:"22px 1fr 1fr",padding:"5px 10px",gap:4,
                      background:i%2===0?"#ffffff06":"transparent",alignItems:"center",
                      animation: revealStep===2 && famosoEscolhido ? `ktFadeIn 0.35s ease ${0.2+i*0.12}s both` : "none",
                    }}>
                      <span style={{fontSize:12}}>{r.icon}</span>
                      <span style={{fontSize:11,color:"#D1FAE5",fontWeight:600}}>{r.você}</span>
                      <span style={{fontSize:11,color:"#A7F3D0"}}>{r.famoso}</span>
                    </div>
                  ))}
                </div>

                {/* #10 Resultado do palpite (modo desafio) */}
                {famosoEscolhido && revealStep===2 && modoDesafio && palpite!=null && (
                  <div style={{marginTop:10,padding:"10px 14px",background:"#ffffff10",borderRadius:12,textAlign:"center",animation:"ktFadeIn 0.5s ease 1.3s both"}}>
                    {(() => {
                      const real = alvo.hits.length;
                      const diff = Math.abs(palpite - real);
                      const acertou = diff === 0;
                      const perto = diff <= 1;
                      return (
                        <div style={{fontSize:12,fontWeight:700,color: acertou?"#34D399":perto?"#FCD34D":"#FCA5A5"}}>
                          {acertou ? `🎯 Acertou na mosca! ${real} pontos!` : perto ? `🔥 Quase! Você chutou ${palpite}, eram ${real}` : `Você chutou ${palpite}, eram ${real} pontos`}
                        </div>
                      );
                    })()}
                  </div>
                )}

                {/* #9 Frase do famoso (após reveal) */}
                {famosoEscolhido && revealStep===2 && alvo.cel.quote && (
                  <div style={{marginTop:12,padding:"12px 14px",background:"#ffffff10",borderRadius:12,borderLeft:"3px solid #34D399",animation:"ktFadeIn 0.5s ease 0.9s both"}}>
                    <div style={{fontSize:13,color:"#D1FAE5",lineHeight:1.6,fontStyle:"italic"}}>"{alvo.cel.quote}"</div>
                    <div style={{fontSize:10,color:"#6EE7B7",fontWeight:700,marginTop:5,textAlign:"right"}}>— {alvo.cel.name}</div>
                  </div>
                )}

                {/* #8 Badge Duplo Aniversário */}
                {famosoEscolhido && revealStep===2 && parseInt(profile?.birthDay)===alvo.cel.day && parseInt(profile?.birthMonth)===alvo.cel.month && (
                  <div style={{marginTop:10,padding:"8px 12px",background:"linear-gradient(135deg,#F59E0B,#EAB308)",borderRadius:12,textAlign:"center",animation:"ktBadgePop 0.5s ease 1.1s both"}}>
                    <div style={{fontSize:13,fontWeight:800,color:"#fff"}}>🎂 DUPLO ANIVERSÁRIO! Vocês nasceram no mesmo dia e mês!</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}

      {/* ── Filtro por categoria de famoso ── */}
      {results.length > 0 && (
        <div style={{marginBottom:12}}>
          <div style={{fontSize:10,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>🎭 Filtrar por área</div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
            <button onClick={()=>{setCatFiltro(null);setShowAll(false);}} style={{padding:"5px 12px",borderRadius:20,fontFamily:"inherit",fontSize:11,fontWeight:700,cursor:"pointer",background:!catFiltro?"#0A1F1A":"#fff",color:!catFiltro?"#fff":"#6B7280",border:`1.5px solid ${!catFiltro?"#0A1F1A":"#E5E7EB"}`}}>
              🌍 Todos ({results.length})
            </button>
            {CAT_GRUPOS.filter(g=>results.some(r=>g.match(r.cel))).map(g=>{
              const count = results.filter(r=>g.match(r.cel)).length;
              const ativo = catFiltro===g.id;
              return (
                <button key={g.id} onClick={()=>{setCatFiltro(f=>f===g.id?null:g.id);setShowAll(false);}} style={{padding:"5px 12px",borderRadius:20,fontFamily:"inherit",fontSize:11,fontWeight:700,cursor:"pointer",background:ativo?"#10B981":"#fff",color:ativo?"#fff":"#6B7280",border:`1.5px solid ${ativo?"#10B981":"#E5E7EB"}`}}>
                  {g.emoji} {g.label} ({count})
                </button>
              );
            })}
          </div>
          {catFiltro && totalFiltrado===0 && (
            <div style={{fontSize:12,color:"#9CA3AF",textAlign:"center",padding:"12px 0"}}>
              Nenhuma coincidência nesta categoria. Tente outra!
            </div>
          )}
        </div>
      )}

      {/* ── #2 Mapa de coincidências — CTA colapsável ── */}
      {results.length > 0 && total > 0 && (() => {
        const signEmojis = new Set(Object.values(SIGN_EMOJI));
        const cats = [
          { id:"aniv",   icon:"🎂", label:"Aniversário",      cels: results.filter(r=>r.hits.some(h=>h.icon==="🎂")) },
          { id:"altura", icon:"📏", label:"Altura parecida",  cels: results.filter(r=>r.hits.some(h=>h.icon==="📏")) },
          { id:"peso",   icon:"⚖️", label:"Peso parecido",    cels: results.filter(r=>r.hits.some(h=>h.icon==="⚖️")) },
          { id:"temp",   icon:"🧬", label:"Temperamento",     cels: results.filter(r=>r.hits.some(h=>h.icon==="🧬")) },
          { id:"signo",  icon:"✨", label:"Mesmo signo",      cels: results.filter(r=>r.hits.some(h=>signEmojis.has(h.icon))) },
          { id:"mes",    icon:"🗓️", label:"Mesmo mês",        cels: results.filter(r=>r.hits.some(h=>h.icon==="🗓️")) },
          { id:"ger",    icon:"🎉", label:"Mesma geração",    cels: results.filter(r=>r.hits.some(h=>h.icon==="🎉")) },
        ].filter(c=>c.cels.length>0);
        if (!cats.length) return null;
        const visiveis = mapaFiltro ? cats.filter(c=>c.id===mapaFiltro) : cats;
        return (
          <div style={{background:"#F0FDF4",borderRadius:18,padding:"12px 14px",marginBottom:14}}>
            {/* Header CTA */}
            <div onClick={()=>setMapaOpen(o=>!o)} style={{display:"flex",alignItems:"center",justifyContent:"space-between",cursor:"pointer"}}>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <span style={{fontSize:16}}>🗺️</span>
                <span style={{fontSize:13,fontWeight:800,color:"#0A1F1A"}}>Mapa de coincidências</span>
                <span style={{fontSize:10,background:"#10B981",color:"#fff",borderRadius:20,padding:"2px 8px",fontWeight:700}}>{cats.length} categoria{cats.length!==1?"s":""}</span>
              </div>
              <span style={{fontSize:16,color:"#10B981",transition:"transform .25s",transform:mapaOpen?"rotate(90deg)":"rotate(0deg)"}}>{mapaOpen?"▼":"▶"}</span>
            </div>

            {/* Conteúdo expandido */}
            {mapaOpen && (
              <>
                {/* Filtros */}
                <div style={{display:"flex",gap:6,flexWrap:"wrap",marginTop:10,marginBottom:10}}>
                  <button onClick={()=>setMapaFiltro(null)} style={{padding:"4px 10px",borderRadius:20,fontFamily:"inherit",fontSize:10,fontWeight:700,cursor:"pointer",background:!mapaFiltro?"#10B981":"#fff",color:!mapaFiltro?"#fff":"#6B7280",border:`1.5px solid ${!mapaFiltro?"#10B981":"#E5E7EB"}`}}>Todos</button>
                  {cats.map(c=>(
                    <button key={c.id} onClick={()=>setMapaFiltro(f=>f===c.id?null:c.id)} style={{padding:"4px 10px",borderRadius:20,fontFamily:"inherit",fontSize:10,fontWeight:700,cursor:"pointer",background:mapaFiltro===c.id?"#10B981":"#fff",color:mapaFiltro===c.id?"#fff":"#6B7280",border:`1.5px solid ${mapaFiltro===c.id?"#10B981":"#E5E7EB"}`}}>{c.icon} {c.label}</button>
                  ))}
                </div>
                <div style={{display:"flex",flexDirection:"column",gap:6}}>
                  {visiveis.map(cat=>(
                    <div key={cat.label} style={{background:"#fff",borderRadius:12,padding:"9px 12px",boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
                      <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:3}}>
                        <span style={{fontSize:14}}>{cat.icon}</span>
                        <span style={{fontSize:12,fontWeight:800,color:"#0A1F1A"}}>{cat.label}</span>
                        <span style={{marginLeft:"auto",fontSize:11,fontWeight:700,color:"#10B981",background:"#10B98115",borderRadius:20,padding:"1px 8px"}}>{cat.cels.length} famoso{cat.cels.length!==1?"s":""}</span>
                      </div>
                      <div style={{fontSize:11,color:"#6B7280",lineHeight:1.6}}>
                        {cat.cels.length<=6
                          ? cat.cels.map(r=>r.cel.emoji+" "+r.cel.name.split(" ")[0]).join(" · ")
                          : cat.cels.slice(0,5).map(r=>r.cel.emoji+" "+r.cel.name.split(" ")[0]).join(" · ")+" · e mais "+(cat.cels.length-5)+"…"
                        }
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        );
      })()}

      {/* ============================================================ */}
      {/* 💫 MANIFESTO PERSONALIZADO                                    */}
      {/* ============================================================ */}
      {manifesto && (
        <div style={{
          background:"linear-gradient(135deg,#FCD34D08,#10B98108)",
          border:"1px dashed #10B98155",
          borderRadius:18,
          padding:"16px 18px",
          marginBottom:14,
          position:"relative"
        }}>
          <div style={{fontSize:10,color:"#10B981",fontWeight:800,letterSpacing:2,textTransform:"uppercase",marginBottom:8,textAlign:"center"}}>
            ✨ Seu Manifesto Cósmico
          </div>
          <div style={{
            fontSize:14,
            color:"#0A1F1A",
            lineHeight:1.65,
            fontStyle:"italic",
            fontWeight:500,
            textAlign:"center"
          }}>
            "{manifesto}"
          </div>
        </div>
      )}

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
      {visible.map((r,i)=>{
        // 🎮 Posição na lista GERAL (não filtrada) — evita que filtros deem acesso prematuro a conteúdo bloqueado
        const posicaoGeral = results.indexOf(r) + 1;
        const posicao = posicaoGeral > 0 ? posicaoGeral : (i + 1);
        const bloqueado = posicao > limiteDesbloqueado;

        return (
          <div key={i} id={`famoso-card-${r.cel.name.replace(/\s/g,'_')}`} style={{position:"relative"}}>
            <Card style={{
              borderLeft:"4px solid #10B981",
              filter: bloqueado ? "blur(7px)" : "none",
              pointerEvents: bloqueado ? "none" : "auto",
              userSelect: bloqueado ? "none" : "auto",
              opacity: bloqueado ? 0.55 : 1,
              transition: "filter .3s, opacity .3s"
            }}>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
                <div style={{width:44,height:44,borderRadius:"50%",background:"#F3F4F6",
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

            {/* 🔒 Overlay de cadeado para cards bloqueados */}
            {bloqueado && (
              <div style={{
                position:"absolute",
                top:0, left:0, right:0, bottom:0,
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                pointerEvents:"none"
              }}>
                <div style={{
                  background:"rgba(10,31,26,0.85)",
                  borderRadius:"50%",
                  width:54, height:54,
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                  fontSize:24,
                  boxShadow:"0 4px 16px rgba(0,0,0,0.3)",
                  border:"2px solid #34D399"
                }}>
                  🔒
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* 🎯 CTA: PRÓXIMO TESTE PARA DESBLOQUEAR MAIS */}
      {proximoTeste && totalFiltrado > limiteDesbloqueado && (
        <div style={{
          background:`linear-gradient(135deg, ${proximoTeste.cor}, ${proximoTeste.cor}cc)`,
          borderRadius:20,
          padding:"18px 20px",
          marginTop:8,
          marginBottom:14,
          position:"relative",
          overflow:"hidden",
          boxShadow:"0 4px 16px rgba(0,0,0,0.12)"
        }}>
          <div style={{position:"absolute",top:-20,right:-20,fontSize:80,opacity:0.12,pointerEvents:"none"}}>
            {proximoTeste.emoji}
          </div>
          <div style={{position:"relative",zIndex:2,textAlign:"center"}}>
            <div style={{fontSize:11,color:"#ffffff",opacity:0.85,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",marginBottom:6}}>
              🔓 Desbloqueie +{POR_TESTE} famosos
            </div>
            <div style={{fontSize:20,fontWeight:900,color:"#fff",marginBottom:4,lineHeight:1.2}}>
              {proximoTeste.emoji} Teste de {proximoTeste.nome}
            </div>
            <div style={{fontSize:12,color:"#ffffff",opacity:0.85,marginBottom:12}}>
              Você fez {testesFeitos.length} de {TESTES_DESBLOQUEIO.length} testes · Faltam {testesFaltam.length}
            </div>
            <button onClick={()=>{ if (goTest) goTest(proximoTeste.key); }} style={{
              background:"#fff",
              color:proximoTeste.cor,
              border:"none",
              padding:"10px 22px",
              borderRadius:24,
              fontSize:13,
              fontWeight:800,
              cursor:"pointer",
              fontFamily:"inherit",
              boxShadow:"0 2px 8px rgba(0,0,0,0.15)"
            }}>
              Fazer teste agora →
            </button>
          </div>
        </div>
      )}
      {!showAll && !proximoTeste && totalFiltrado > visible.length && (
        <button onClick={()=>setShowAll(true)} style={{width:"100%",padding:13,background:"transparent",
          border:"1.5px solid #10B981",borderRadius:14,color:"#10B981",fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
          👁️ Ver todas as {totalFiltrado} coincidências
        </button>
      )}
    </div>
  );
}

// ============================================================
// DADOS ASTRAL — 14 novos recursos
// ============================================================

// #1 Horóscopo diário por signo (3 msgs por signo, rotaciona por DOY%3)
function AstralScreen({profile, goHumor, goTest, goQuizzes}) {
  const [sistema,setSistema] = useState("grego");
  const [adivinheStep,setAdivinheStep] = useState(0);
  const [adivinheScore,setAdivinheScore] = useState(0);
  const [adivinhePicked,setAdivinhePicked] = useState(null);
  const [adivinheFb,setAdivinheFb] = useState(null);
  const [adivinheDone,setAdivinheDone] = useState(false);
  const [adivinheActive,setAdivinheActive] = useState(false);
  const sign = profile?.sign;
  const animal = profile?.birthYear ? getAnimalChines(profile.birthYear) : null;
  const rashi = sign ? getRashi(sign) : null;
  const hebDate = getHebrewDate(today);

  const SISTEMAS = [
    {id:"grego",l:"Grego",emoji:"🏛️"},
    {id:"chines",l:"Chinês",emoji:"🐉"},
    {id:"vedico",l:"Védico",emoji:"🕉️"},
    {id:"judaico",l:"Judaico",emoji:"✡️"},
  ];

  const numInfo = profile?.birthDay ? getNumerologia(profile.birthDay, profile.birthMonth, profile.birthYear) : null;

  // Picks diários determinísticos
  const horoscDia = sign ? (HOROSCOPO_DIARIO[sign]||[])[DOY%3] : null;
  const afirm = sign ? (AFIRMACOES_ASTRAL[sign]||[])[DOY%3] : null;
  const elem = ELEMENTOS_DIA[DOY%4];
  const tarot = TAROT_MAIOR[DOY%22];
  const runa = RUNAS_DIA[DOY%24];
  const iching = ICHING_DIA[DOY%30];
  const anjo = ANJOS_DIA[DOY%20];
  const proxSuperlua = getProximaSuperlua();

  // Energia por área (formula determinista: sign index + offsets)
  const SIGN_IDX = {"Áries":0,"Touro":1,"Gêmeos":2,"Câncer":3,"Leão":4,"Virgem":5,"Libra":6,"Escorpião":7,"Sagitário":8,"Capricórnio":9,"Aquário":10,"Peixes":11};
  const si = sign ? (SIGN_IDX[sign]||0) : 0;
  const eng = (offset) => Math.max(1, Math.min(5, ((DOY + si + offset) % 5) + 1));
  const energias = [
    {area:"Amor",emoji:"❤️",val:eng(0)},
    {area:"Trabalho",emoji:"💼",val:eng(7)},
    {area:"Saúde",emoji:"🌿",val:eng(13)},
    {area:"Criatividade",emoji:"✨",val:eng(17)},
  ];

  // Quiz Adivinhe o signo
  const adivinheQ = QUIZ_ADIVINHE_SIGNO[adivinheStep % QUIZ_ADIVINHE_SIGNO.length];
  const answerAdivinhe = (idx) => {
    if (adivinheFb !== null) return;
    const ok = idx === adivinheQ.c;
    setAdivinheFb(ok); setAdivinhePicked(idx);
    if (ok) setAdivinheScore(s=>s+1);
    setTimeout(()=>{
      setAdivinheFb(null); setAdivinhePicked(null);
      if (adivinheStep < 9) setAdivinheStep(s=>s+1);
      else setAdivinheDone(true);
    }, 900);
  };
  const resetAdivinhe = () => { setAdivinheStep(0); setAdivinheScore(0); setAdivinheFb(null); setAdivinhePicked(null); setAdivinheDone(false); setAdivinheActive(false); };

  // Header de categoria (mesmo estilo do Card Hoje)
  const CatHeader = ({emoji, titulo, sub, cor}) => (
    <div style={{display:"flex",alignItems:"center",gap:10,padding:"13px 16px",borderRadius:16,background:`${cor}18`,border:`1.5px solid ${cor}40`,marginBottom:10,marginTop:6,boxShadow:`0 2px 8px ${cor}15`}}>
      <span style={{fontSize:18}}>{emoji}</span>
      <div style={{flex:1}}>
        <div style={{fontSize:13,fontWeight:800,color:cor}}>{titulo}</div>
        <div style={{fontSize:10,color:"#9CA3AF"}}>{sub}</div>
      </div>
    </div>
  );

  return (
    <div>
      <div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",marginBottom:4}}>✨ Astral</div>
      <div style={{fontSize:12,color:"#9CA3AF",marginBottom:14}}>{DAYS_PT[DOW]}, {DAY} de {MONTHS[MONTH]}</div>

      <CatHeader emoji="☀️" titulo="Seu Dia Astral" sub="Energia, elemento, cor e afirmação de hoje" cor="#7C3AED" />

      {/* #2 Energia do dia + #1 Horóscopo (fundidos) */}
      <Card style={{marginBottom:14,borderLeft:"3px solid #7C3AED"}}>
        <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>⚡ Energia do Dia{sign?` · ${sign}`:""}</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
          {energias.map(e=>(
            <div key={e.area} style={{background:"#F9FAFB",borderRadius:12,padding:"10px"}}>
              <div style={{fontSize:11,color:"#6B7280",marginBottom:4}}>{e.emoji} {e.area}</div>
              <div style={{display:"flex",gap:3}}>
                {[1,2,3,4,5].map(i=>(
                  <div key={i} style={{flex:1,height:5,borderRadius:3,background:i<=e.val?"#10B981":"#E5E7EB"}}/>
                ))}
              </div>
              <div style={{fontSize:10,color:"#10B981",fontWeight:700,marginTop:3}}>{e.val}/5</div>
            </div>
          ))}
        </div>
        {sign && horoscDia && (
          <div style={{marginTop:14,paddingTop:14,borderTop:"1px solid #F3F4F6"}}>
            <div style={{fontSize:15,color:"#0A1F1A",lineHeight:1.7,fontWeight:500}}>{SIGN_EMOJI[sign]} {horoscDia}</div>
            {profile?.gender && (
              <div style={{fontSize:11,color:"#7C3AED",fontWeight:600,marginTop:8}}>
                {gTxt(profile.gender,
                  "Confie no seu instinto hoje, rei. 👑",
                  "Confie no seu instinto hoje, rainha. 👑"
                )}
              </div>
            )}
          </div>
        )}
      </Card>
      {!sign && (
        <Card style={{marginBottom:14,background:"#F9FAFB"}}>
          <div style={{fontSize:13,color:"#9CA3AF",textAlign:"center"}}>Complete seu perfil com a data de nascimento para ver o horóscopo personalizado ✨</div>
        </Card>
      )}

      <div style={{marginLeft:14}}>
      {/* Sistema selector */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}>
        {SISTEMAS.map(s=>(
          <button key={s.id} onClick={()=>setSistema(s.id)} style={{padding:"12px 10px",borderRadius:14,border:`1.5px solid ${sistema===s.id?"#7C3AED":"#E5E7EB"}`,background:sistema===s.id?"#7C3AED":"#fff",color:sistema===s.id?"#fff":"#5A6B68",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
            <span>{s.emoji}</span><span>{s.l}</span>
          </button>
        ))}
      </div>

      {sistema==="grego" && sign && HOROSCOPO_GREGO[sign] && (
        <Card style={{position:"relative",marginBottom:14}}>
          <ShareBtn onClick={()=>shareContent("horoscopo",{nome:profile?.name||"",signo:sign,emoji:SIGN_EMOJI[sign],sistema:"Zodíaco Helênico",mensagem:getFraseGrega(sign,DOY)},`🏛️ Meu signo helênico é ${sign}\n\n"${getFraseGrega(sign,DOY)}"`)}/>
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
          <div style={{fontSize:13,color:"#374151",lineHeight:1.6,marginBottom:6}}><strong>Poder:</strong> {HOROSCOPO_GREGO[sign].poder}</div>
          <div style={{fontSize:13,color:"#374151",lineHeight:1.6,marginBottom:8}}><strong>Desafio:</strong> {HOROSCOPO_GREGO[sign].desafio}</div>
          <div style={{display:"flex",gap:8,marginTop:8,flexWrap:"wrap"}}>
            <span style={{fontSize:11,background:"#F3F4F6",borderRadius:10,padding:"4px 10px"}}>💎 {HOROSCOPO_GREGO[sign].pedra}</span>
            <span style={{fontSize:11,background:"#F3F4F6",borderRadius:10,padding:"4px 10px"}}>🔢 {HOROSCOPO_GREGO[sign].numero}</span>
            <span style={{fontSize:11,background:"#F3F4F6",borderRadius:10,padding:"4px 10px"}}>🎨 {HOROSCOPO_GREGO[sign].cor}</span>
          </div>
          <div style={{marginTop:12,padding:"10px 12px",background:"#F0FDF4",borderRadius:10}}>
            <div style={{fontSize:13,color:"#065F46",fontStyle:"italic",lineHeight:1.5}}>"{getFraseGrega(sign,DOY)}"</div>
          </div>
        </Card>
      )}
      {sistema==="chines" && animal && ANIMAIS_CHINESES[animal] && (
        <Card style={{position:"relative",marginBottom:14}}>
          <ShareBtn onClick={()=>shareContent("horoscopo",{nome:profile?.name||"",signo:ANIMAIS_CHINESES[animal].animal,emoji:ANIMAIS_CHINESES[animal].emoji,sistema:"Horóscopo Chinês",mensagem:getFraseChinesa(animal,DOY)},`🐉 Meu signo chinês é ${ANIMAIS_CHINESES[animal].animal}\n\n"${getFraseChinesa(animal,DOY)}"`)}/>
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
          <div style={{marginTop:10,padding:"10px 12px",background:"#FEF2F2",borderRadius:10}}>
            <div style={{fontSize:13,color:"#991B1B",fontStyle:"italic",lineHeight:1.5}}>"{getFraseChinesa(animal,DOY)}"</div>
          </div>
        </Card>
      )}
      {sistema==="vedico" && rashi && RASHIS_VEDICOS[rashi] && (
        <Card style={{position:"relative",marginBottom:14}}>
          <ShareBtn onClick={()=>shareContent("horoscopo",{nome:profile?.name||"",signo:rashi,emoji:RASHIS_VEDICOS[rashi].emoji,sistema:"Rashi Védico",mensagem:`Energia ${RASHIS_VEDICOS[rashi].natureza}. ${RASHIS_VEDICOS[rashi].caracteristicas}`},`🕉️ Meu Rashi védico é ${rashi}\n\nNatureza: ${RASHIS_VEDICOS[rashi].natureza}`)}/>
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
          <div style={{padding:"10px 12px",background:"#FFFBEB",borderRadius:10,marginBottom:10}}>
            <div style={{fontSize:10,color:"#D97706",fontWeight:700,marginBottom:4}}>🕉️ MANTRA</div>
            <div style={{fontSize:13,color:"#92400E",fontStyle:"italic"}}>{RASHIS_VEDICOS[rashi].mantra}</div>
          </div>
          <div style={{padding:"10px 12px",background:"#F0FDF4",borderRadius:10}}>
            <div style={{fontSize:13,color:"#065F46",fontStyle:"italic",lineHeight:1.5}}>"{getFraseVedica(rashi,DOY)}"</div>
          </div>
        </Card>
      )}
      {sistema==="judaico" && (
        <Card style={{marginBottom:14}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
            <span style={{fontSize:38}}>✡️</span>
            <div>
              <div style={{fontSize:11,color:"#7C3AED",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>Calendário Hebraico</div>
              <div style={{fontSize:18,fontWeight:900,color:"#0A1F1A"}}>{hebDate.formatted}</div>
            </div>
          </div>
          <div style={{padding:"12px 14px",background:"#F5F3FF",borderRadius:12}}>
            <div style={{fontSize:11,color:"#7C3AED",fontWeight:700,marginBottom:4}}>📅 HOJE NA TRADIÇÃO JUDAICA</div>
            <div style={{fontSize:13,color:"#5B21B6",lineHeight:1.5}}>
              {DOW===5?"É véspera de Shabat. Ao pôr-do-sol começa o dia de descanso sagrado.":DOW===6?"É Shabat — dia de descanso, oração e comunhão familiar.":`É um dia comum da semana hebraica. O Shabat se aproxima.`}
            </div>
          </div>
        </Card>
      )}
      </div>

      {/* #9 Elemento em destaque */}
      <div style={{marginLeft:14}}>
      <Card style={{marginBottom:14}}>
        <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>🌀 Elemento do Dia</div>
        <div style={{display:"flex",gap:12,alignItems:"center"}}>
          <div style={{width:44,height:44,borderRadius:12,background:"#F3F4F6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0}}>{elem.emoji}</div>
          <div style={{flex:1}}>
            <div style={{fontSize:16,fontWeight:800,color:"#0A1F1A"}}>{elem.e}</div>
            <div style={{fontSize:12,color:"#6B7280",lineHeight:1.5,marginTop:2}}>{elem.msg}</div>
            <div style={{fontSize:10,color:"#10B981",fontWeight:600,marginTop:4}}>{elem.signos}</div>
          </div>
        </div>
        <div style={{marginTop:8,fontSize:12,color:"#10B981",fontStyle:"italic",fontWeight:600}}>💡 {elem.dica}</div>
      </Card>

      {/* #8 Afirmação astral */}
      {afirm && (
        <Card style={{marginBottom:14}}>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>🌟 Afirmação Astral do Dia</div>
          <div style={{fontSize:15,color:"#0A1F1A",lineHeight:1.7,fontStyle:"italic"}}>"{afirm}"</div>
          {profile?.gender && (
            <div style={{fontSize:11,color:"#10B981",fontWeight:600,marginTop:8,textAlign:"right"}}>
              {gTxt(profile.gender,
                "Repita para si e siga com confiança, guerreiro. 💪",
                "Repita para si e siga com confiança, guerreira. 💫"
              )}
            </div>
          )}
        </Card>
      )}

      {/* 🎨 Cor do Dia pelo signo */}
      {(() => {
        if (!profile?.sign) return null;
        const COR_POR_SIGNO = {
          "Áries":      [{n:"Vermelho",h:"#EF4444",s:"Energia e ação"},{n:"Laranja",h:"#F97316",s:"Criatividade"},{n:"Dourado",h:"#EAB308",s:"Poder pessoal"},{n:"Branco",h:"#F8FAFC",s:"Clareza mental"},{n:"Preto",h:"#1F2937",s:"Proteção"},{n:"Rosa",h:"#EC4899",s:"Suavidade"},{n:"Turquesa",h:"#06B6D4",s:"Comunicação"}],
          "Touro":      [{n:"Verde",h:"#10B981",s:"Abundância"},{n:"Rosa",h:"#EC4899",s:"Amor próprio"},{n:"Marrom",h:"#92400E",s:"Estabilidade"},{n:"Azul Claro",h:"#7DD3FC",s:"Paz"},{n:"Branco",h:"#F8FAFC",s:"Pureza"},{n:"Terracota",h:"#C2410C",s:"Conexão com a terra"},{n:"Dourado",h:"#EAB308",s:"Prosperidade"}],
          "Gêmeos":     [{n:"Amarelo",h:"#F59E0B",s:"Inteligência"},{n:"Laranja",h:"#F97316",s:"Socialização"},{n:"Verde Claro",h:"#4ADE80",s:"Renovação"},{n:"Azul",h:"#3B82F6",s:"Clareza"},{n:"Branco",h:"#F8FAFC",s:"Versatilidade"},{n:"Lilás",h:"#C084FC",s:"Intuição"},{n:"Prata",h:"#94A3B8",s:"Adaptação"}],
          "Câncer":     [{n:"Branco",h:"#F8FAFC",s:"Proteção"},{n:"Prata",h:"#94A3B8",s:"Intuição lunar"},{n:"Azul Claro",h:"#7DD3FC",s:"Calma emocional"},{n:"Lilás",h:"#C084FC",s:"Sensibilidade"},{n:"Verde",h:"#10B981",s:"Cura"},{n:"Rosa",h:"#EC4899",s:"Afeto"},{n:"Creme",h:"#FEF3C7",s:"Aconchego"}],
          "Leão":       [{n:"Dourado",h:"#EAB308",s:"Brilho e autoconfiança"},{n:"Laranja",h:"#F97316",s:"Vitalidade"},{n:"Vermelho",h:"#EF4444",s:"Paixão"},{n:"Amarelo",h:"#F59E0B",s:"Alegria"},{n:"Roxo",h:"#7C3AED",s:"Nobreza"},{n:"Branco",h:"#F8FAFC",s:"Pureza"},{n:"Bronze",h:"#A16207",s:"Força"}],
          "Virgem":     [{n:"Verde",h:"#10B981",s:"Saúde e equilíbrio"},{n:"Marrom",h:"#92400E",s:"Praticidade"},{n:"Bege",h:"#D4C5A9",s:"Organização"},{n:"Azul Marinho",h:"#1E3A5F",s:"Foco"},{n:"Branco",h:"#F8FAFC",s:"Limpeza"},{n:"Cinza",h:"#6B7280",s:"Análise"},{n:"Verde Musgo",h:"#4D7C0F",s:"Natureza"}],
          "Libra":      [{n:"Rosa",h:"#EC4899",s:"Harmonia"},{n:"Azul Claro",h:"#7DD3FC",s:"Equilíbrio"},{n:"Lavanda",h:"#A78BFA",s:"Elegância"},{n:"Branco",h:"#F8FAFC",s:"Paz"},{n:"Verde Menta",h:"#34D399",s:"Frescor"},{n:"Pêssego",h:"#FBBF24",s:"Suavidade"},{n:"Dourado",h:"#EAB308",s:"Beleza"}],
          "Escorpião":  [{n:"Preto",h:"#1F2937",s:"Mistério e poder"},{n:"Vermelho Escuro",h:"#991B1B",s:"Intensidade"},{n:"Roxo",h:"#7C3AED",s:"Transformação"},{n:"Vinho",h:"#881337",s:"Profundidade"},{n:"Dourado",h:"#EAB308",s:"Renascimento"},{n:"Azul Escuro",h:"#1E3A5F",s:"Intuição"},{n:"Prata",h:"#94A3B8",s:"Proteção"}],
          "Sagitário":  [{n:"Roxo",h:"#7C3AED",s:"Expansão"},{n:"Azul Royal",h:"#2563EB",s:"Sabedoria"},{n:"Laranja",h:"#F97316",s:"Aventura"},{n:"Turquesa",h:"#06B6D4",s:"Liberdade"},{n:"Dourado",h:"#EAB308",s:"Abundância"},{n:"Vermelho",h:"#EF4444",s:"Ousadia"},{n:"Verde",h:"#10B981",s:"Natureza"}],
          "Capricórnio":[{n:"Preto",h:"#1F2937",s:"Autoridade"},{n:"Cinza Escuro",h:"#374151",s:"Maturidade"},{n:"Marrom",h:"#92400E",s:"Solidez"},{n:"Azul Marinho",h:"#1E3A5F",s:"Disciplina"},{n:"Branco",h:"#F8FAFC",s:"Clareza"},{n:"Verde Escuro",h:"#064E3B",s:"Perseverança"},{n:"Dourado",h:"#EAB308",s:"Conquista"}],
          "Aquário":    [{n:"Azul Elétrico",h:"#2563EB",s:"Inovação"},{n:"Turquesa",h:"#06B6D4",s:"Originalidade"},{n:"Violeta",h:"#8B5CF6",s:"Intuição"},{n:"Prata",h:"#94A3B8",s:"Futurismo"},{n:"Branco",h:"#F8FAFC",s:"Liberdade"},{n:"Verde Neon",h:"#22C55E",s:"Revolução"},{n:"Preto",h:"#1F2937",s:"Independência"}],
          "Peixes":     [{n:"Lilás",h:"#C084FC",s:"Espiritualidade"},{n:"Azul Água",h:"#22D3EE",s:"Sensibilidade"},{n:"Verde Água",h:"#2DD4BF",s:"Cura"},{n:"Branco",h:"#F8FAFC",s:"Pureza"},{n:"Rosa",h:"#EC4899",s:"Compaixão"},{n:"Roxo",h:"#7C3AED",s:"Conexão divina"},{n:"Prata",h:"#94A3B8",s:"Reflexão"}],
        };
        const cores = COR_POR_SIGNO[profile.sign];
        if (!cores) return null;
        const corHoje = cores[DOY % cores.length];
        const isLight = ['#F8FAFC','#FEF3C7','#D4C5A9','#FBBF24','#F59E0B','#7DD3FC','#4ADE80','#34D399','#22D3EE','#2DD4BF','#94A3B8','#C084FC','#A78BFA'].includes(corHoje.h);
        const isFem = profile?.gender === 'F';
        const DICAS_M = [
          `Use uma camisa ou camiseta ${corHoje.n.toLowerCase()} hoje para potencializar ${corHoje.s.toLowerCase()}.`,
          `Um relógio, tênis ou acessório em ${corHoje.n.toLowerCase()} já ativa essa energia.`,
          `Gravata, boné ou pulseira — qualquer detalhe em ${corHoje.n.toLowerCase()} funciona.`,
        ];
        const DICAS_F = [
          `Use uma blusa, vestido ou acessório ${corHoje.n.toLowerCase()} hoje para atrair ${corHoje.s.toLowerCase()}.`,
          `Brincos, bolsa ou esmalte em ${corHoje.n.toLowerCase()} já ativa essa energia no seu dia.`,
          `Batom, lenço ou detalhe em ${corHoje.n.toLowerCase()} — sua aura agradece.`,
        ];
        const dicaGen = isFem ? DICAS_F[DOY % DICAS_F.length] : DICAS_M[DOY % DICAS_M.length];
        return (
          <Card style={{marginBottom:14}}>
            <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>🎨 Sua Cor do Dia</div>
            <div style={{display:"flex",gap:12,alignItems:"center"}}>
              <div style={{
                width:52,height:52,borderRadius:14,background:corHoje.h,
                display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:22,color:isLight?"#374151":"#fff",fontWeight:900,
                boxShadow:`0 4px 12px ${corHoje.h}40`,border:"2px solid #F3F4F6",flexShrink:0
              }}>
                {corHoje.n.charAt(0)}
              </div>
              <div style={{flex:1}}>
                <div style={{fontSize:16,fontWeight:800,color:"#0A1F1A"}}>{corHoje.n}</div>
                <div style={{fontSize:12,color:"#6B7280",marginTop:2}}>Energia: {corHoje.s}</div>
                <div style={{fontSize:10,color:"#10B981",fontWeight:600,marginTop:4}}>
                  ♈ Baseado no seu signo: {profile.sign}
                </div>
              </div>
            </div>
            <div style={{marginTop:10,padding:"8px 12px",background:`${corHoje.h}15`,borderRadius:10,borderLeft:`3px solid ${corHoje.h}`}}>
              <div style={{fontSize:12,color:"#374151",lineHeight:1.5}}>
                {dicaGen}
              </div>
            </div>
          </Card>
        );
      })()}
      </div>

      <CatHeader emoji="🔭" titulo="Sistemas & Símbolos" sub="Runa, I Ching e anjo do dia" cor="#3B82F6" />

      <div style={{marginLeft:14}}>
      {/* #11 Fase da lua — removida do Astral (já existe na aba Alma) */}

      {/* #19 Runa do dia */}
      <Card style={{marginBottom:14}}>
        <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>ᚠ Runa do Dia</div>
        <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:8}}>
          <div style={{width:44,height:44,borderRadius:12,background:"#F3F4F6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,color:"#0A1F1A",fontWeight:900,flexShrink:0}}>{runa.r}</div>
          <div style={{flex:1}}>
            <div style={{fontSize:16,fontWeight:800,color:"#0A1F1A"}}>{runa.n} {runa.e}</div>
            <div style={{fontSize:10,color:"#10B981",fontWeight:700,marginTop:2,textTransform:"uppercase",letterSpacing:.5}}>{runa.sig}</div>
          </div>
        </div>
        <div style={{fontSize:13,color:"#6B7280",lineHeight:1.6}}>{runa.msg}</div>
      </Card>

      {/* #20 I Ching do dia */}
      <Card style={{marginBottom:14}}>
        <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>☯️ I Ching do Dia · Hexagrama {iching.n}</div>
        <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:8}}>
          <div style={{width:44,height:44,borderRadius:12,background:"#F3F4F6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0}}>{iching.sim}</div>
          <div style={{flex:1}}>
            <div style={{fontSize:16,fontWeight:800,color:"#0A1F1A"}}>{iching.nome}</div>
          </div>
        </div>
        <div style={{fontSize:13,color:"#6B7280",lineHeight:1.6,borderLeft:"3px solid #10B981",paddingLeft:12}}>{iching.msg}</div>
      </Card>

      {/* #21 Anjo do dia */}
      <Card style={{marginBottom:14}}>
        <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>😇 Anjo do Dia</div>
        <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:8}}>
          <div style={{width:44,height:44,borderRadius:12,background:"#F3F4F6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>{anjo.e}</div>
          <div style={{flex:1}}>
            <div style={{fontSize:16,fontWeight:800,color:"#0A1F1A"}}>{anjo.n}</div>
            <div style={{fontSize:10,color:"#10B981",fontWeight:700,marginTop:2,textTransform:"uppercase",letterSpacing:.5}}>{anjo.at}</div>
          </div>
        </div>
        <div style={{fontSize:13,color:"#6B7280",lineHeight:1.6}}>{anjo.msg}</div>
      </Card>
      </div>

      {/* ── ASTRAL PRO (no final) ── */}
      <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginTop:24,marginBottom:12}}>⭐ Em Breve · Versão PRO</div>

      {/* Tarot do dia — PRO */}
      <Card style={{marginBottom:10,opacity:0.65,position:"relative",overflow:"hidden",borderLeft:"4px solid #9CA3AF"}}>
        <div style={{position:"absolute",top:10,right:12,background:"#0A1F1A",color:"#10B981",fontSize:9,fontWeight:800,padding:"3px 9px",borderRadius:20,letterSpacing:1}}>🔒 PRO</div>
        <div style={{display:"flex",gap:14,alignItems:"center",paddingRight:50}}>
          <div style={{width:52,height:52,borderRadius:16,background:"#F3F4F6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0,filter:"grayscale(1)"}}>🃏</div>
          <div style={{flex:1}}>
            <div style={{fontSize:15,fontWeight:800,color:"#9CA3AF"}}>Tarot do Dia</div>
            <div style={{fontSize:12,color:"#9CA3AF",marginTop:2}}>22 Arcanos Maiores · uma carta nova todo dia</div>
          </div>
        </div>
      </Card>

      {/* Humor Matinal — PRO */}
      <Card style={{marginBottom:10,opacity:0.65,position:"relative",overflow:"hidden",borderLeft:"4px solid #9CA3AF"}}>
        <div style={{position:"absolute",top:10,right:12,background:"#0A1F1A",color:"#10B981",fontSize:9,fontWeight:800,padding:"3px 9px",borderRadius:20,letterSpacing:1}}>🔒 PRO</div>
        <div style={{display:"flex",gap:14,alignItems:"center",paddingRight:50}}>
          <div style={{width:52,height:52,borderRadius:16,background:"#F3F4F6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,flexShrink:0,filter:"grayscale(1)"}}>🌅</div>
          <div style={{flex:1}}>
            <div style={{fontSize:15,fontWeight:800,color:"#9CA3AF"}}>Humor Matinal</div>
            <div style={{fontSize:12,color:"#9CA3AF",marginTop:2}}>Registre e acompanhe seu humor diário</div>
          </div>
        </div>
      </Card>
    </div>
  );
}

// ============================================================
// TESTES FILOSÓFICOS — Card Alma
// ============================================================

// T1: Qual filósofo você seria
function EspiritualidadeScreen({profile, onSaveTradicao, initialTesteAba, goTest}) {
  const [mes,setMes] = useState(MONTH);
  const [testeAba,setTesteAba] = useState(initialTesteAba || "menu"); // menu | perguntas | resultado
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
      <div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",marginBottom:4}}>🙏 Alma & Tradição</div>
      <div style={{fontSize:12,color:"#9CA3AF",marginBottom:18}}>Calendário das tradições do mundo</div>

      {/* CATEGORIA 1: Seu Dia Espiritual */}
      <div style={{display:"flex",alignItems:"center",gap:10,padding:"13px 16px",borderRadius:16,background:"#3B82F618",border:"1.5px solid #3B82F640",marginBottom:10,marginTop:6,boxShadow:"0 2px 8px #3B82F615"}}>
        <span style={{fontSize:18}}>🕯️</span>
        <div style={{flex:1}}>
          <div style={{fontSize:13,fontWeight:800,color:"#3B82F6"}}>Seu Dia Espiritual</div>
          <div style={{fontSize:10,color:"#9CA3AF"}}>Versículo, lua, figura e eventos de hoje</div>
        </div>
      </div>

      <div style={{marginLeft:14}}>
      {/* Versículo do dia */}
      <Card style={{marginBottom:14,position:"relative"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <span style={{fontSize:22}}>📖</span>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                <div style={{fontSize:10,color:"#1E40AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>Versículo do Dia</div>
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
            💡 Faça o Teste de Tradição no card Testes para personalizar este versículo
          </div>
        )}
      </Card>

      {/* Fase da Lua */}
      <Card style={{marginBottom:14,position:"relative"}}>
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
          <span style={{fontSize:40}}>{lua.emoji}</span>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <div style={{fontSize:10,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>🌙 Lua de Hoje</div>
            </div>
            <div style={{fontSize:18,fontWeight:900,color:"#0A1F1A"}}>{lua.fase}</div>
            <div style={{fontSize:11,color:"#10B981",fontWeight:600}}>{lua.nomeEspiritual} · {lua.iluminacao}% iluminada</div>
          </div>
        </div>
        <div style={{fontSize:13,color:"#374151",lineHeight:1.6,marginBottom:10}}>{lua.desc}</div>
        <div style={{background:"#F0FDF4",borderRadius:12,padding:"12px",marginBottom:8}}>
          <div style={{fontSize:10,color:"#059669",fontWeight:700,marginBottom:4}}>🌿 RITUAL DO DIA</div>
          <div style={{fontSize:13,color:"#065F46"}}>{lua.ritual}</div>
        </div>
        <div style={{fontSize:12,color:"#10B981",fontStyle:"italic"}}>"{lua.afirmacao}"</div>
        <div style={{marginTop:8,fontSize:11,color:"#9CA3AF"}}>
          Dia {lua.diaDoCliclo} do ciclo · Próxima Lua Nova em {lua.proximaLuaNova} dias
        </div>
      </Card>

      {/* Santo do Dia */}
      <Card style={{marginBottom:14}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
          <span style={{fontSize:28}}>{santo.emoji}</span>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <div style={{fontSize:10,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>🕯️ Figura do Dia</div>
            </div>
            <div style={{fontSize:16,fontWeight:800,color:"#0A1F1A"}}>{santo.nome}</div>
            <div style={{fontSize:11,color:TRADICAO_COLORS[santo.tradicao]||"#10B981",fontWeight:600}}>{santo.tradicao}</div>
          </div>
        </div>
        <div style={{fontSize:13,color:"#374151",lineHeight:1.6}}>{santo.desc}</div>
      </Card>

      {/* Hoje na Espiritualidade */}
      {eventosHoje.length > 0 && (
        <>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>
            ✨ Hoje · {DAY} de {MONTHS[MONTH]}
          </div>
          {eventosHoje.map((e,i)=>(
            <Card key={i} style={{marginBottom:10}}>
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
      </div>


      {/* CATEGORIA 2: Calendário das Tradições */}
      <div style={{display:"flex",alignItems:"center",gap:10,padding:"13px 16px",borderRadius:16,background:"#10B98118",border:"1.5px solid #10B98140",marginBottom:10,marginTop:6,boxShadow:"0 2px 8px #10B98115"}}>
        <span style={{fontSize:18}}>📅</span>
        <div style={{flex:1}}>
          <div style={{fontSize:13,fontWeight:800,color:"#10B981"}}>Calendário das Tradições</div>
          <div style={{fontSize:10,color:"#9CA3AF"}}>Datas e celebrações do mundo todo</div>
        </div>
      </div>

      <div style={{marginLeft:14}}>
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

      {/* CATEGORIA 3: Testes de Alma */}
      <div style={{display:"flex",alignItems:"center",gap:10,padding:"13px 16px",borderRadius:16,background:"#7C3AED18",border:"1.5px solid #7C3AED40",marginBottom:10,marginTop:6,boxShadow:"0 2px 8px #7C3AED15"}}>
        <span style={{fontSize:18}}>🧭</span>
        <div style={{flex:1}}>
          <div style={{fontSize:13,fontWeight:800,color:"#7C3AED"}}>Testes de Alma</div>
          <div style={{fontSize:10,color:"#9CA3AF"}}>Resultados alimentam seu Raio X</div>
        </div>
      </div>

      <div style={{marginLeft:14}}>
      {[
        {key:"filosofo",   emoji:"🏛️", nome:"Qual filósofo você seria",          desc:"Sócrates · Nietzsche · Buda · Lao-Tsé",              cor:"#1E40AF"},
        {key:"visaomundo", emoji:"🌍", nome:"Visão de Mundo",                    desc:"Materialista · Espiritualista · Agnóstico · Pragmático",cor:"#7C3AED"},
        {key:"espvrel",    emoji:"🕊️", nome:"Espiritualidade vs Religiosidade",  desc:"Devoto · Espiritual · Místico · Secular",            cor:"#10B981"},
        {key:"corrente",   emoji:"⚗️", nome:"Sua Corrente Filosófica",           desc:"Estoico · Existencialista · Pragmático · Humanista",  cor:"#374151"},
        {key:"virtude",    emoji:"⚖️", nome:"Qual Virtude é Seu Pilar",          desc:"Coragem · Sabedoria · Justiça · Temperança",         cor:"#DC2626"},
        {key:"ikigai",     emoji:"☀️", nome:"Seu Ikigai",                        desc:"Artesão · Missionário · Explorador · Profissional",   cor:"#F59E0B", pro:true},
      ].map(t=>{
        if (t.pro) {
          return (
            <Card key={t.key} style={{cursor:"default",marginBottom:10,opacity:0.65,position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:10,right:12,background:"#0A1F1A",color:"#10B981",fontSize:9,fontWeight:800,padding:"3px 9px",borderRadius:20,letterSpacing:1}}>🔒 EM BREVE · PRO</div>
              <div style={{display:"flex",gap:12,alignItems:"center",paddingRight:80}}>
                <div style={{width:42,height:42,borderRadius:12,background:"#F3F4F6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0,filter:"grayscale(1)"}}>{t.emoji}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:14,fontWeight:800,color:"#9CA3AF"}}>{t.nome}</div>
                  <div style={{fontSize:11,color:"#9CA3AF",marginTop:2}}>{t.desc}</div>
                </div>
              </div>
            </Card>
          );
        }
        const feito = profile?.[t.key];
        const INFO = {filosofo:FILOSOFO_INFO,visaomundo:VISAOMUNDO_INFO,espvrel:ESPVREL_INFO,corrente:CORRENTE_INFO,virtude:VIRTUDE_INFO,ikigai:IKIGAI_INFO}[t.key];
        const resultLabel = feito && INFO?.[feito] ? `${INFO[feito].emoji} ${INFO[feito].nome}` : null;
        return (
          <Card key={t.key} onClick={()=>goTest && goTest(t.key)} style={{cursor:"pointer",marginBottom:10}}>
            <div style={{display:"flex",gap:12,alignItems:"center"}}>
              <div style={{width:42,height:42,borderRadius:12,background:`${t.cor}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{t.emoji}</div>
              <div style={{flex:1}}>
                <div style={{fontSize:14,fontWeight:800,color:"#0A1F1A"}}>{t.nome}</div>
                <div style={{fontSize:11,color:"#9CA3AF",marginTop:2}}>{t.desc}</div>
                {resultLabel && <div style={{fontSize:10,color:t.cor,fontWeight:700,marginTop:4}}>✅ {resultLabel}</div>}
              </div>
              <span style={{fontSize:16,color:t.cor,opacity:.6}}>→</span>
            </div>
          </Card>
        );
      })}
      </div>

      {/* CATEGORIA 4: Em Breve · PRO */}
      <div style={{display:"flex",alignItems:"center",gap:10,padding:"13px 16px",borderRadius:16,background:"#9CA3AF18",border:"1.5px solid #9CA3AF40",marginBottom:10,marginTop:6,boxShadow:"0 2px 8px #9CA3AF15"}}>
        <span style={{fontSize:18}}>⭐</span>
        <div style={{flex:1}}>
          <div style={{fontSize:13,fontWeight:800,color:"#6B7280"}}>Em Breve · PRO</div>
          <div style={{fontSize:10,color:"#9CA3AF"}}>Funcionalidades premium a caminho</div>
        </div>
      </div>

      <div style={{marginLeft:14}}>
      {[
        {emoji:"🌱",nome:"Jornada de 21 dias",desc:"Práticas guiadas diárias para transformação interior"},
        {emoji:"🌍",nome:"Comunidade por Tradição",desc:"Conecte-se com pessoas da mesma vertente espiritual"},
        {emoji:"📜",nome:"Liga da Sabedoria",desc:"Quiz filosófico coletivo — novo desafio toda semana"},
      ].map(p=>(
        <Card key={p.nome} style={{marginBottom:10,opacity:.7,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",top:10,right:12,background:"#0A1F1A",color:"#10B981",fontSize:9,fontWeight:800,padding:"3px 9px",borderRadius:20,letterSpacing:1}}>EM BREVE · PRO</div>
          <div style={{display:"flex",gap:12,alignItems:"center"}}>
            <div style={{width:42,height:42,borderRadius:12,background:"#F3F4F6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{p.emoji}</div>
            <div style={{flex:1,paddingRight:70}}>
              <div style={{fontSize:14,fontWeight:800,color:"#9CA3AF"}}>{p.nome}</div>
              <div style={{fontSize:11,color:"#9CA3AF",marginTop:2}}>{p.desc}</div>
            </div>
          </div>
        </Card>
      ))}
      </div>
    </div>
  );
}

// ============================================================
// TESTES (Temperamento, Quiz, Humor)
// ============================================================
function TestesScreen({profile, onComplete, goCoincidence, onSaveExtra, initialAba, autoStart, goAstral, goEspiritualidadeTeste, soTestes, soQuizzes}) {
  const [aba,setAba] = useState(initialAba || "menu");
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
  const [qPicked,setQPicked] = useState(null);
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
  const [qiPicked,setQiPicked] = useState(null);
  // Quizzes temáticos (engine genérica — 5 quizzes, 3 níveis)
  const [gqKey,setGqKey] = useState(null);
  const [gqLevel,setGqLevel] = useState(null);
  const [gqPool,setGqPool] = useState([]);
  const [gqIdx,setGqIdx] = useState(0);
  const [gqScore,setGqScore] = useState(0);
  const [gqDone,setGqDone] = useState(false);
  const [gqFb,setGqFb] = useState(null);
  const [gqPicked,setGqPicked] = useState(null);
  // Modos de rejogabilidade
  const [gqMode,setGqMode] = useState("normal"); // normal | crono | surto | treino
  const [gqTimeLeft,setGqTimeLeft] = useState(12);
  const [gqWrong,setGqWrong] = useState([]); // índices das perguntas erradas (para revisão)
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
    lider:        { intro:LIDER_INTRO, questions:LIDER_QUESTIONS, info:LIDER_INFO, tipo:"weighted", saveKey:"lider" },
    financeiro:   { intro:FINANCEIRO_INTRO, questions:FINANCEIRO_QUESTIONS, info:FINANCEIRO_INFO, tipo:"weighted", saveKey:"financeiro" },
    elemento:     { intro:ELEMENTO_INTRO, questions:ELEMENTO_QUESTIONS, info:ELEMENTO_INFO, tipo:"weighted", saveKey:"elemento" },
    profissao:    { intro:PROFISSAO_INTRO, questions:PROFISSAO_QUESTIONS, info:PROFISSAO_INFO, tipo:"weighted", saveKey:"profissao" },
    sonhador:     { intro:SONHADOR_INTRO, questions:SONHADOR_QUESTIONS, info:SONHADOR_INFO, tipo:"weighted", saveKey:"sonhador" },
    cores:        { intro:CORES_INTRO, questions:CORES_QUESTIONS, info:CORES_INFO, tipo:"weighted", saveKey:"cores" },
    selecao:      { intro:SELECAO_INTRO, questions:SELECAO_QUESTIONS, info:SELECAO_INFO, tipo:"weighted", saveKey:"selecao" },
    ingles:       { intro:INGLES_INTRO,  questions:INGLES_QUESTIONS,  info:INGLES_INFO,  tipo:"ingles",   saveKey:"ingles"  },
    agilidade:    { intro:AGILIDADE_INTRO, questions:AGILIDADE_QUESTIONS, info:AGILIDADE_INFO, tipo:"agilidade", saveKey:"agilidade" },
    biblico:      { intro:BIBLICO_INTRO, questions:BIBLICO_QUESTIONS, info:BIBLICO_INFO,  tipo:"biblico",  saveKey:"biblico" },
    mbti:         { intro:MBTI_INTRO,    questions:MBTI_QUESTIONS,    info:MBTI_INFO,     tipo:"mbti",     saveKey:"mbti"    },
    filosofo:     { intro:{emoji:"🏛️",nome:"Qual Filósofo Você Seria",criador:"KomparAI",historia:"Sócrates questionou até a morte. Nietzsche criou além de tudo. Buda largou um reino. Lao-Tsé escreveu o Tao e desapareceu. Cada um encontrou uma resposta diferente para a mesma pergunta: como viver bem?",comoFunciona:"10 perguntas sobre como você pensa, age e enxerga o mundo.",comoInterpretar:"Cada filósofo representa uma visão de vida. Não há certo ou errado — há o que ressoa com quem você é."}, questions:FILOSOFO_QUESTIONS, info:FILOSOFO_INFO, tipo:"weighted", saveKey:"filosofo" },
    visaomundo:   { intro:{emoji:"🌍",nome:"Visão de Mundo",criador:"KomparAI",historia:"Materialistas, espiritualistas, agnósticos e pragmáticos — quatro formas radicalmente diferentes de responder à mesma pergunta: o que é real? Cada visão molda tudo: como você decide, o que teme, o que espera.",comoFunciona:"10 perguntas sobre sua relação com a realidade, o sentido e a existência.",comoInterpretar:"Não há visão superior — há a sua visão. Conheça-a."}, questions:VISAOMUNDO_QUESTIONS, info:VISAOMUNDO_INFO, tipo:"weighted", saveKey:"visaomundo" },
    espvrel:      { intro:{emoji:"🕊️",nome:"Espiritualidade vs Religiosidade",criador:"KomparAI",historia:"Existe uma diferença entre seguir uma tradição e ter uma experiência interior. Entre pertencer e transcender. Entre ritual e vivência. Onde você está nessa jornada?",comoFunciona:"10 perguntas sobre sua prática, crenças e relação com o sagrado.",comoInterpretar:"Quatro caminhos igualmente válidos — do Devoto ao Secular."}, questions:ESPVREL_QUESTIONS, info:ESPVREL_INFO, tipo:"weighted", saveKey:"espvrel" },
    corrente:     { intro:{emoji:"⚗️",nome:"Sua Corrente Filosófica",criador:"KomparAI",historia:"Estoicos, existencialistas, pragmáticos e humanistas — cada corrente é uma lente diferente sobre a vida. A filosofia não é só teoria: ela molda como você enfrenta o fracasso, toma decisões e encontra sentido.",comoFunciona:"10 perguntas sobre seus valores, reações e visão de vida.",comoInterpretar:"Descubra qual escola filosófica habita em você."}, questions:CORRENTE_QUESTIONS, info:CORRENTE_INFO, tipo:"weighted", saveKey:"corrente" },
    virtude:      { intro:{emoji:"⚖️",nome:"Qual Virtude é Seu Pilar",criador:"KomparAI",historia:"Para os gregos antigos, a virtude não era opcional — era o que nos tornava humanos em sentido pleno. Coragem, Sabedoria, Justiça e Temperança: as quatro virtudes cardinais que Platão colocou no centro da vida boa.",comoFunciona:"10 perguntas sobre seus valores, ações e o que você mais admira.",comoInterpretar:"Cada virtude é uma forma de florescer — descubra a sua."}, questions:VIRTUDE_QUESTIONS, info:VIRTUDE_INFO, tipo:"weighted", saveKey:"virtude" },
    ikigai:       { intro:{emoji:"☀️",nome:"Seu Ikigai",criador:"KomparAI",historia:"Ikigai é uma palavra japonesa para 'razão de existir' — a interseção entre o que você ama, o que faz bem, o que o mundo precisa e pelo que pode ser pago. Não é um destino: é uma bússola.",comoFunciona:"10 perguntas sobre o que te move, o que você cria e como contribui.",comoInterpretar:"Quatro arquétipos de propósito — descubra onde seu ikigai floresce."}, questions:IKIGAI_QUESTIONS, info:IKIGAI_INFO, tipo:"weighted", saveKey:"ikigai" },
    deusa:        { intro:{emoji:"🌹",nome:"Qual Deusa Mitológica Você É",criador:"KomparAI",historia:"Afrodite, Atena, Ártemis e Hera — quatro deusas, quatro formas de poder feminino. Cada uma habita em nós em diferentes medidas. Qual delas fala mais alto em você?",comoFunciona:"8 perguntas sobre o que te move, como você reage e o que você busca.",comoInterpretar:"Descubra qual arquétipo de deusa define sua força."}, questions:DEUSA_QUESTIONS, info:DEUSA_INFO, tipo:"weighted", saveKey:"deusa" },
    // 10 NOVOS TESTES
    apego:        { intro:APEGO_INTRO, questions:APEGO_QUESTIONS, info:APEGO_INFO, tipo:"weighted", saveKey:"apego" },
    ciumento:     { intro:CIUMENTO_INTRO, questions:CIUMENTO_QUESTIONS, info:CIUMENTO_INFO, tipo:"weighted", saveKey:"ciumento" },
    romantico:    { intro:ROMANTICO_INTRO, questions:ROMANTICO_QUESTIONS, info:ROMANTICO_INFO, tipo:"weighted", saveKey:"romantico" },
    compSignos:   { intro:COMP_SIGNOS_INTRO, questions:COMP_SIGNOS_QUESTIONS, info:COMP_SIGNOS_INFO, tipo:"weighted", saveKey:"compSignos" },
    valores:      { intro:VALORES_INTRO, questions:VALORES_QUESTIONS, info:VALORES_INFO, tipo:"weighted", saveKey:"valores" },
    arquetipo:    { intro:ARQUETIPO_INTRO, questions:ARQUETIPO_QUESTIONS, info:ARQUETIPO_INFO, tipo:"weighted", saveKey:"arquetipo" },
    iq_emocional: { intro:IQ_EMOCIONAL_INTRO, questions:IQ_EMOCIONAL_QUESTIONS, info:IQ_EMOCIONAL_INFO, tipo:"weighted", saveKey:"iq_emocional" },
    impostor:     { intro:IMPOSTOR_INTRO, questions:IMPOSTOR_QUESTIONS, info:IMPOSTOR_INFO, tipo:"weighted", saveKey:"impostor" },
    comunicacao:  { intro:COMUNICACAO_INTRO, questions:COMUNICACAO_QUESTIONS, info:COMUNICACAO_INFO, tipo:"weighted", saveKey:"comunicacao" },
    cultpop:      { intro:CULTPOP_INTRO, questions:CULTPOP_QUESTIONS, info:CULTPOP_INFO, tipo:"cultpop", saveKey:"cultpop" },
  };

  const answerTempe = (w) => {
    const ns = {...scores,[w]:scores[w]+1};
    setScores(ns);
    const qsTempe = shuffledQuestions || QUESTIONS;
    if (step < qsTempe.length-1) setStep(s=>s+1);
    else { const d = Object.entries(ns).sort((a,b)=>b[1]-a[1])[0][0]; onComplete(d); playSfx("win"); setAba("tempe_result"); }
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
    setQFb(ok); setQPicked(idx);
    playSfx(ok ? "correct" : "wrong");
    const newScore = ok ? qScore + 1 : qScore;
    if (ok) setQScore(newScore);
    setTimeout(()=>{ setQFb(null); setQPicked(null); if (qIdx<qPool.length-1) setQIdx(i=>i+1); else {
      setQDone(true); playSfx("win");
      const bestKey = `qf_${qLevel}`;
      const prevBest = profile?.[bestKey] || 0;
      if (newScore > prevBest) onSaveExtra({ [bestKey]: newScore });
    }}, 950);
  };
  const startQuiz = (level) => {
    const pool = getQuizByLevel(level).sort(() => Math.random() - 0.5).map(shuffleQuestion);
    setQLevel(level); setQPool(pool); setQIdx(0); setQScore(0); setQDone(false); setQFb(null);
  };
  const resetQuiz = () => { setAba("menu"); setQLevel(null); setQPool([]); setQIdx(0); setQScore(0); setQDone(false); setQFb(null); setQPicked(null); };

  // Responder novo teste (weighted + tipos especiais)
  const answerNovo = (w) => {
    const cfg = NOVOS_TESTES[currentTest];
    const tipo = cfg.tipo;
    const ns = {...novoScores, [w]:(novoScores[w]||0)+1};
    setNovoScores(ns);
    const qsNovo = shuffledQuestions || cfg.questions;
    if (novoStep < qsNovo.length-1) { setNovoStep(s=>s+1); return; }

    // Calcular resultado conforme tipo
    let result;
    if (tipo === "ingles") {
      // Inglês: score por nível (a1=1,a2=2,b1=3,b2=4,c1=5)
      const nivelMap = {a1:1,a2:2,b1:3,b2:4,c1:5};
      const acertos = Object.entries(ns).reduce((acc,[k,v])=>acc+(nivelMap[k]||0)*v,0);
      const total = qsNovo.length;
      const pct = acertos/(total*5);
      result = pct>=0.85?"c1":pct>=0.65?"b2":pct>=0.45?"b1":pct>=0.25?"a2":"a1";
    } else if (tipo === "agilidade") {
      // Conta quantas respostas não foram "errou"
      const acertos = Object.entries(ns).filter(([k])=>k!=="errou").reduce((a,[,v])=>a+v,0);
      const total = qsNovo.length;
      const pct = acertos/total;
      result = pct>=0.75?"alto":pct>=0.45?"medio":"baixo";
    } else if (tipo === "biblico") {
      const total = qsNovo.length;
      const acertos = ns["b"]||0;
      const pct = acertos/total;
      result = pct>=0.75?"estudioso":pct>=0.45?"intermediario":"iniciante";
    } else if (tipo === "mbti") {
      // MBTI: 4 dimensões independentes
      const E = ns["E"]||0; const I = ns["I"]||0;
      const S = ns["S"]||0; const N = ns["N"]||0;
      const T = ns["T"]||0; const F = ns["F"]||0;
      const J = ns["J"]||0; const P = ns["P"]||0;
      const dim1 = E>=I?"E":"I";
      const dim2 = S>=N?"S":"N";
      const dim3 = T>=F?"T":"F";
      const dim4 = J>=P?"J":"P";
      result = `${dim1}${dim2}${dim3}${dim4}`;
    } else if (tipo === "cultpop") {
      // Cultura Pop: conta acertos (w==="certo") por faixas
      const acertos = ns["certo"]||0;
      const total = qsNovo.length;
      const pct = acertos/total;
      result = pct>=0.8?"expert":pct>=0.5?"antenado":"fora_bolha";
    } else {
      result = Object.entries(ns).sort((a,b)=>b[1]-a[1])[0][0];
    }

    setNovoResult(result);
    onSaveExtra({[cfg.saveKey]:result});
    playSfx("win");
    setAba("novo_result");
  };
  const PRO_TESTES = ["profissional","politico","financeiro","ikigai"];
  const startNovo = (testKey) => {
    if (PRO_TESTES.includes(testKey)) return;
    const cfg = NOVOS_TESTES[testKey];
    if (!cfg) { alert("🚧 Este teste está em desenvolvimento. Em breve disponível!"); return; }
    const baseQs = cfg.questions;
    const tiposFixos = ["ingles","agilidade","biblico"];
    // Para tipos com c= fixo, não embaralhar opts (só embaralhar a ordem das perguntas)
    const shuffled = shuffle(baseQs).map(q =>
      tiposFixos.includes(cfg.tipo) ? {...q} : {...q, opts: shuffle(q.opts)}
    );
    setShuffledQuestions(shuffled);
    setCurrentTest(testKey); setNovoStep(0); setNovoScores({}); setNovoResult(null); setAba("novo_perguntas");
  };
  const resetNovo = () => { setAba("menu"); setCurrentTest(null); setNovoStep(0); setNovoScores({}); setNovoResult(null); setShuffledQuestions(null); };

  // QI
  const answerQI = (idx) => {
    const q = QI_QUESTIONS[qiStep];
    const ok = idx === q.c;
    setQiFb(ok); setQiPicked(idx);
    playSfx(ok ? "correct" : "wrong");
    if (ok) setQiScore(s=>s+1);
    setTimeout(()=>{ setQiFb(null); setQiPicked(null); if (qiStep<QI_QUESTIONS.length-1) setQiStep(i=>i+1); else { setQiDone(true); playSfx("win"); } }, 950);
  };
  const resetQI = () => { setAba("menu"); setQiStep(0); setQiScore(0); setQiFb(null); setQiDone(false); setQiPicked(null); };

  // 🎯 Quizzes temáticos com níveis (engine genérica)
  // seededRand + buildRelampago para o Relâmpago Diário
  const seededRand = (seed) => { const x = Math.sin(seed) * 10000; return x - Math.floor(x); };
  const buildRelampago = () => {
    const d = new Date();
    const seed = d.getFullYear() * 10000 + (d.getMonth()+1) * 100 + d.getDate();
    const banks = Object.entries(QUIZ_BANKS);
    const levels = ["facil","medio","dificil"];
    const pool = [];
    for (let i = 0; i < 5; i++) {
      const bIdx = Math.floor(seededRand(seed + i * 7) * banks.length);
      const lIdx = Math.floor(seededRand(seed + i * 13) * levels.length);
      const [, bank] = banks[bIdx % banks.length];
      const qs = bank.niveis[levels[lIdx % 3]];
      pool.push(shuffleQuestion({...qs[Math.floor(seededRand(seed + i * 17) * qs.length) % qs.length]}));
    }
    return pool;
  };
  const openGenQuiz = (key) => { setGqKey(key); setGqLevel(null); setGqPool([]); setGqIdx(0); setGqScore(0); setGqDone(false); setGqFb(null); setGqMode("normal"); setGqWrong([]); setAba("genquiz"); };
  const openRelampago = () => { const pool = buildRelampago(); setGqKey("relampago"); setGqLevel("relampago"); setGqPool(pool); setGqIdx(0); setGqScore(0); setGqDone(false); setGqFb(null); setGqMode("normal"); setGqWrong([]); setGqPicked(null); setAba("genquiz"); };
  const startGenLevel = (level) => {
    const pool = gqKey === "relampago" ? buildRelampago() : shuffle(QUIZ_BANKS[gqKey].niveis[level]).map(shuffleQuestion);
    setGqLevel(level); setGqPool(pool); setGqIdx(0); setGqScore(0); setGqDone(false); setGqFb(null); setGqWrong([]); setGqPicked(null); setGqTimeLeft(12);
  };
  const advanceGenQuiz = (finalScore, isWrong, pool, idx) => {
    setTimeout(() => {
      setGqFb(null); setGqPicked(null); setGqTimeLeft(12);
      if (idx < pool.length - 1) setGqIdx(i => i + 1);
      else {
        setGqDone(true);
        playSfx("win");
        if (gqKey !== "relampago") {
          const bestKey = `qb_${gqKey}_${gqLevel}`;
          const prevBest = profile?.[bestKey] || 0;
          if (finalScore > prevBest) onSaveExtra({ [bestKey]: finalScore });
        }
      }
    }, gqKey === "copa" ? 5000 : (gqMode === "surto" && isWrong ? 1200 : 950));
  };
  const answerGenQuiz = (idx) => {
    if (gqFb !== null) return; // evita double-tap
    const q = gqPool[gqIdx];
    const ok = idx === q.c;
    setGqFb(ok); setGqPicked(idx);
    playSfx(ok ? "correct" : "wrong");
    if (!ok) setGqWrong(w => [...w, gqIdx]);
    // Treino: sempre avança, sem penalidade
    // Morte súbita: errou → fim imediato
    if (gqMode === "surto" && !ok) {
      setTimeout(() => { setGqFb(null); setGqPicked(null); setGqDone(true); }, gqKey === "copa" ? 5000 : 1100);
      return;
    }
    const finalScore = ok ? gqScore + 1 : gqScore;
    if (ok) setGqScore(s => s + 1);
    advanceGenQuiz(finalScore, !ok, gqPool, gqIdx);
  };
  const resetGenQuiz = () => { setAba("menu"); setGqKey(null); setGqLevel(null); setGqPool([]); setGqIdx(0); setGqScore(0); setGqDone(false); setGqFb(null); setGqPicked(null); setGqMode("normal"); setGqWrong([]); };

  // 🎯 Auto-inicia o teste quando o usuário chega pelo CTA "Fazer teste agora" do KomparAI.
  // Roda uma vez ao montar a tela (a tela remonta a cada entrada na aba Testes).
  useEffect(() => {
    if (!autoStart) return;
    if (autoStart === "temperamento") startTempe();
    else if (NOVOS_TESTES[autoStart]) startNovo(autoStart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ⏱️ Timer do modo Cronometrado
  useEffect(() => {
    if (aba !== "genquiz" || gqMode !== "crono" || gqDone || gqFb !== null || !gqLevel || gqPool.length === 0) return;
    if (gqTimeLeft <= 0) {
      // Tempo esgotado = resposta errada
      setGqWrong(w => [...w, gqIdx]);
      setGqFb(false); setGqPicked(-1);
      const finalScore = gqScore;
      setTimeout(() => {
        setGqFb(null); setGqPicked(null); setGqTimeLeft(12);
        if (gqIdx < gqPool.length - 1) setGqIdx(i => i + 1);
        else { setGqDone(true); if (gqKey !== "relampago") { const bk = `qb_${gqKey}_${gqLevel}`; const pb = profile?.[bk]||0; if (finalScore>pb) onSaveExtra({[bk]:finalScore}); } }
      }, 900);
      return;
    }
    const t = setTimeout(() => setGqTimeLeft(n => n - 1), 1000);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gqTimeLeft, gqMode, aba, gqDone, gqFb, gqLevel, gqIdx]);

  // ─── TELA MENU ───
  if (aba==="menu") {
    // Demais testes em ORDEM FIXA (sem embaralhamento)
    const novosCards = [
      // 🎭 PERSONALIDADE — Roxo #7C3AED
      {key:"personalidade", emoji:"🧩", nome:"Introvertido ou Extrovertido?",    desc:"15 perguntas · seu perfil de energia social",          cor:"#7C3AED", cat:"personalidade"},
      {key:"temperamento_novo", emoji:"🧬", nome:"Temperamento",                  desc:"7 perguntas · descubra seu temperamento",              cor:"#7C3AED", cat:"personalidade"},
      {key:"sonhador",  emoji:"🌙", nome:"Tipo de Sonhador",                      desc:"12 perguntas · como sua mente cria enquanto dorme",     cor:"#7C3AED", cat:"personalidade"},
      {key:"cores",     emoji:"🎨", nome:"Qual Cor Representa Você?",             desc:"12 perguntas · sua cor dominante",                      cor:"#7C3AED", cat:"personalidade"},
      {key:"mbti",      emoji:"🧬", nome:"16 Personalidades (MBTI)",              desc:"12 perguntas · descubra seu tipo Myers-Briggs",          cor:"#7C3AED", cat:"personalidade"},
      // ❤️ RELACIONAMENTOS — Rosa #EC4899
      {key:"amor",       emoji:"💘", nome:"Linguagens do Amor",                   desc:"15 perguntas · descubra como você ama",                 cor:"#EC4899", cat:"relacionamentos"},
      {key:"apego",      emoji:"🔗", nome:"Estilo de Apego",                      desc:"12 perguntas · Ansioso, Evitativo ou Seguro?",          cor:"#EC4899", cat:"relacionamentos"},
      {key:"ciumento",   emoji:"👀", nome:"Você É Ciumento?",                     desc:"10 perguntas · descubra seu nível de ciúme",            cor:"#EC4899", cat:"relacionamentos"},
      {key:"romantico",  emoji:"💑", nome:"Perfil Romântico",                     desc:"12 perguntas · como você age nos relacionamentos",       cor:"#EC4899", cat:"relacionamentos"},
      {key:"compSignos", emoji:"💫", nome:"Compatibilidade de Signos",            desc:"qual signo combina mais com você?",                     cor:"#EC4899", cat:"relacionamentos"},
      // 🧭 PROPÓSITO & VALORES — Verde #10B981
      {key:"filosofo",   emoji:"🏛️", nome:"Seu Filósofo",                        desc:"qual filósofo combina com você?",                       cor:"#10B981", cat:"proposito"},
      {key:"visaomundo", emoji:"🌍", nome:"Visão de Mundo",                       desc:"sua perspectiva sobre a vida",                          cor:"#10B981", cat:"proposito"},
      {key:"virtude",    emoji:"⚖️", nome:"Sua Virtude Principal",                desc:"qual virtude define seu caráter?",                      cor:"#10B981", cat:"proposito"},
      {key:"valores",    emoji:"🧭", nome:"Seus Valores Fundamentais",            desc:"12 perguntas · o que guia suas decisões?",              cor:"#10B981", cat:"proposito"},
      {key:"arquetipo",  emoji:"🎭", nome:"Arquétipo de Jung",                    desc:"12 perguntas · Herói, Sábio, Rebelde ou Cuidador?",     cor:"#10B981", cat:"proposito"},
      // 💼 CARREIRA & LIDERANÇA — Azul #3B82F6
      {key:"profissao",  emoji:"💼", nome:"Profissão dos Sonhos",                 desc:"12 perguntas · sua área-vocação",                       cor:"#3B82F6", cat:"carreira"},
      {key:"lider",      emoji:"👑", nome:"Qual Líder Você Seria?",               desc:"12 perguntas · seu estilo de liderança",                cor:"#3B82F6", cat:"carreira"},
      {key:"iq_emocional",emoji:"❤️", nome:"Inteligência Emocional",             desc:"12 perguntas · seu QE no trabalho e na vida",           cor:"#3B82F6", cat:"carreira"},
      {key:"impostor",   emoji:"🎭", nome:"Síndrome do Impostor",                 desc:"10 perguntas · você se sente uma fraude?",              cor:"#3B82F6", cat:"carreira"},
      {key:"comunicacao",emoji:"💬", nome:"Estilo de Comunicação",                desc:"Passivo, Assertivo ou Agressivo?",                      cor:"#3B82F6", cat:"carreira"},
      // 🙏 ESPIRITUALIDADE — Dourado #F59E0B
      {key:"tradicao",   emoji:"🧭", nome:"Qual Tradição Combina?",               desc:"7 perguntas · sua espiritualidade natural",             cor:"#F59E0B", cat:"espiritualidade"},
      {key:"elemento",   emoji:"🌪️", nome:"Qual Elemento Você É?",               desc:"12 perguntas · fogo, terra, ar ou água",                cor:"#F59E0B", cat:"espiritualidade"},
      {key:"corrente",   emoji:"✨", nome:"Sua Corrente Espiritual",              desc:"sua crença e conexão",                                  cor:"#F59E0B", cat:"espiritualidade"},
      {key:"espvrel",    emoji:"🕊️", nome:"Espiritualidade vs Religião",         desc:"onde você se posiciona?",                               cor:"#F59E0B", cat:"espiritualidade"},
      {key:"deusa",      emoji:"🌙", nome:"Qual Deusa Você É?",                   desc:"arquétipo feminino sagrado",                            cor:"#F59E0B", cat:"espiritualidade"},
      // 🌍 CONHECIMENTO — Laranja #F97316
      {key:"selecao",    emoji:"🏆", nome:"Qual Seleção Te Representa?",          desc:"12 perguntas · Brasil, Argentina, Alemanha ou França?", cor:"#F97316", cat:"conhecimento"},
      {key:"ingles",     emoji:"🇬🇧", nome:"Nível de Inglês",                     desc:"12 perguntas · do Iniciante ao Avançado",              cor:"#F97316", cat:"conhecimento"},
      {key:"agilidade",  emoji:"⚡", nome:"Agilidade Mental",                     desc:"12 desafios · lógica e raciocínio rápido",              cor:"#F97316", cat:"conhecimento"},
      {key:"biblico",    emoji:"📖", nome:"Conhecimento Bíblico",                 desc:"12 perguntas · do Iniciante ao Estudioso",              cor:"#F97316", cat:"conhecimento"},
      {key:"cultpop",    emoji:"🎭", nome:"Cultura Pop Brasil",                   desc:"você sabe tudo de memes, celebridades e tendências?",   cor:"#F97316", cat:"conhecimento"},
      // 🔒 PRO — seção separada no final
      {key:"profissional",emoji:"🏢",nome:"Perfil Profissional",  desc:"15 perguntas · seu estilo no trabalho",         cor:"#6366F1", cat:"pro", pro:true},
      {key:"financeiro",  emoji:"💰",nome:"Perfil Financeiro",    desc:"12 perguntas · sua relação com o dinheiro",     cor:"#6366F1", cat:"pro", pro:true},
      {key:"politico",    emoji:"🗳️",nome:"Espectro Político",    desc:"15 perguntas · Esquerda, Centro ou Direita?",   cor:"#6366F1", cat:"pro", pro:true},
      {key:"ikigai",      emoji:"🌸",nome:"Seu Ikigai",           desc:"seu propósito de vida japonês",                 cor:"#6366F1", cat:"pro", pro:true},
    ];

    return (
      <div>
        {soQuizzes ? (
          <>
            <div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",marginBottom:4}}>🎯 Quizzes</div>
            <div style={{fontSize:12,color:"#9CA3AF",marginBottom:16}}>Aprenda, descubra, desafie-se</div>
          </>
        ) : (
          <>
            <div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",marginBottom:4}}>🧠 Testes</div>
            <div style={{fontSize:12,color:"#9CA3AF",marginBottom:16}}>Conheça-se de dentro para fora · resultados no Raio X</div>
            {/* #10 Teste do dia em destaque */}
            {!soQuizzes && (() => {
              const testesDisponiveis = novosCards.filter(c => !c.pro);
              if (!testesDisponiveis.length) return null;
              const doDia = testesDisponiveis[DOY % testesDisponiveis.length];
              const jaFez = profile?.[NOVOS_TESTES[doDia.key]?.saveKey || doDia.key];
              return (
                <Card onClick={()=>startNovo(doDia.key)} style={{background:`linear-gradient(135deg,${doDia.cor},${doDia.cor}cc)`,cursor:"pointer",marginBottom:14,position:"relative",overflow:"hidden"}}>
                  <div style={{position:"absolute",top:8,right:10,fontSize:9,fontWeight:800,color:"#fff",background:"rgba(255,255,255,0.25)",borderRadius:20,padding:"3px 10px",letterSpacing:1}}>⭐ TESTE DO DIA</div>
                  <div style={{display:"flex",gap:14,alignItems:"center"}}>
                    <div style={{width:52,height:52,borderRadius:16,background:"#ffffff25",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,animation:"ktPulse 2s ease-in-out infinite"}}>{doDia.emoji}</div>
                    <div style={{flex:1}}>
                      <div style={{fontSize:16,fontWeight:800,color:"#fff"}}>{doDia.nome}</div>
                      <div style={{fontSize:12,color:"#ffffffcc",marginTop:3}}>{doDia.desc}</div>
                      <div style={{marginTop:8,display:"inline-block",background:"#fff",borderRadius:20,padding:"4px 12px",fontSize:12,fontWeight:700,color:doDia.cor}}>{jaFez?"Refazer →":"Fazer agora →"}</div>
                    </div>
                  </div>
                </Card>
              );
            })()}
          </>
        )}
        {/* 1º — Coincidências (só na aba Testes) */}
        {!soQuizzes && (
        <Card onClick={goCoincidence} style={{background:"linear-gradient(135deg,#7C3AED,#5B21B6)",cursor:"pointer"}}>
          <div style={{display:"flex",gap:14,alignItems:"center"}}>
            <div style={{width:52,height:52,borderRadius:16,background:"#ffffff20",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>🪞</div>
            <div style={{flex:1}}>
              <div style={{fontSize:16,fontWeight:800,color:"#fff"}}>Teste de Coincidências</div>
              <div style={{fontSize:12,color:"#DDD6FE",marginTop:3}}>{famosos.length}+ famosos · descubra os em comum</div>
              <div style={{marginTop:8,display:"inline-block",background:"#fff",borderRadius:20,padding:"4px 12px",fontSize:12,fontWeight:700,color:"#7C3AED"}}>Descobrir →</div>
            </div>
          </div>
        </Card>
        )}

        {/* ── SEÇÃO TESTES (oculto quando soQuizzes) ── */}
        {!soQuizzes && (<>

        {/* Categorias de testes */}
        {(() => {
          const CATS_TESTES = [
            {key:"personalidade",  emoji:"🎭", nome:"Personalidade",         cor:"#7C3AED"},
            {key:"relacionamentos",emoji:"❤️",  nome:"Relacionamentos",        cor:"#EC4899"},
            {key:"proposito",      emoji:"🧭", nome:"Propósito & Valores",    cor:"#10B981"},
            {key:"carreira",       emoji:"💼", nome:"Carreira & Liderança",   cor:"#3B82F6"},
            {key:"espiritualidade",emoji:"🙏", nome:"Espiritualidade",        cor:"#F59E0B"},
            {key:"conhecimento",   emoji:"🌍", nome:"Conhecimento",           cor:"#F97316"},
            {key:"pro",            emoji:"⭐", nome:"Em Breve · Versão PRO",  cor:"#9CA3AF"},
          ];

          return CATS_TESTES.map(cat => {
            const testsLivres = novosCards.filter(nc => nc.cat===cat.key && !nc.pro);
            const testsPro    = novosCards.filter(nc => nc.cat===cat.key && nc.pro);
            const todos = [...testsLivres, ...testsPro];
            if (!todos.length) return null;

            return (
              <div key={cat.key} style={{marginBottom:8}}>
                {/* Header da categoria */}
                <div style={{
                  display:"flex",alignItems:"center",gap:10,
                  padding:"13px 16px",borderRadius:16,
                  background: cat.key==="pro" ? "#F9FAFB" : `linear-gradient(135deg,${cat.cor}20,${cat.cor}10)`,
                  border:`1.5px solid ${cat.key==="pro" ? "#E5E7EB" : cat.cor+"40"}`,
                  marginBottom:10,
                  boxShadow:`0 2px 8px ${cat.cor}15`,
                }}>
                  <div style={{width:36,height:36,borderRadius:10,background:`${cat.cor}25`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>{cat.emoji}</div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:15,fontWeight:900,color:cat.key==="pro"?"#9CA3AF":cat.cor,letterSpacing:-0.3}}>{cat.nome}</div>
                    <div style={{fontSize:10,color:"#9CA3AF",marginTop:1}}>{testsLivres.length+testsPro.length} {cat.key==="pro"?"bloqueados":`teste${testsLivres.length!==1?"s":""}`}</div>
                  </div>
                </div>

                {/* Cards livres */}
                {testsLivres.map(nc => {
                  // Teste de Tradição — redireciona para Alma
                  const isTradicao = nc.key === "tradicao";
                  const isTemperamento = nc.key === "temperamento_novo";
                  const onClick = isTradicao
                    ? ()=>goEspiritualidadeTeste && goEspiritualidadeTeste()
                    : isTemperamento
                    ? startTempe
                    : ()=>startNovo(nc.key);
                  const saveKey = NOVOS_TESTES[nc.key]?.saveKey || nc.key;
                  const feito = nc.key==="temperamento_novo"
                    ? profile?.temperamento
                    : profile?.[saveKey];
                  return (
                    <Card key={nc.key} onClick={onClick} style={{cursor:"pointer",border:"1px solid #F3F4F6",marginBottom:8,background:"#fff",marginLeft:16,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
                      <div style={{display:"flex",gap:12,alignItems:"center"}}>
                        <div style={{width:46,height:46,borderRadius:13,background:`${cat.cor}18`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{nc.emoji}</div>
                        <div style={{flex:1,minWidth:0}}>
                          <div style={{fontSize:14,fontWeight:800,color:"#0A1F1A",marginBottom:1}}>{nc.nome}</div>
                          <div style={{fontSize:11,color:"#9CA3AF"}}>{nc.desc}</div>
                          {feito && <div style={{fontSize:10,color:cat.cor,fontWeight:600,marginTop:3}}>✅ Feito · {feito}</div>}
                        </div>
                        <span style={{fontSize:16,color:cat.cor,opacity:.7,flexShrink:0}}>→</span>
                      </div>
                    </Card>
                  );
                })}

                {/* Cards PRO da categoria */}
                {testsPro.map(nc => (
                  <Card key={nc.key} style={{cursor:"default",border:"1px solid #F3F4F6",marginBottom:8,opacity:0.55,position:"relative",overflow:"hidden",marginLeft:16}}>
                    <div style={{position:"absolute",top:8,right:10,background:"#0A1F1A",color:"#10B981",fontSize:9,fontWeight:800,padding:"2px 8px",borderRadius:20}}>🔒 PRO</div>
                    <div style={{display:"flex",gap:12,alignItems:"center"}}>
                      <div style={{width:46,height:46,borderRadius:13,background:"#F3F4F6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0,filter:"grayscale(1)"}}>{nc.emoji}</div>
                      <div style={{flex:1,minWidth:0,paddingRight:40}}>
                        <div style={{fontSize:14,fontWeight:800,color:"#9CA3AF",marginBottom:1}}>{nc.nome}</div>
                        <div style={{fontSize:11,color:"#9CA3AF"}}>{nc.desc}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            );
          });
        })()}
        </>)}

        {/* ── SEÇÃO QUIZZES ── */}
        {!soTestes && (<>
        {!soQuizzes && <><div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",marginTop:24,marginBottom:4}}>🎯 Quizzes</div><div style={{fontSize:12,color:"#9CA3AF",marginBottom:16}}>Aprenda, descubra, desafie-se</div></>}

        {/* ⚡ Relâmpago Diário */}
        <Card onClick={openRelampago} style={{cursor:"pointer",borderLeft:"4px solid #F59E0B",background:"linear-gradient(135deg,#FFFBEB,#FEF3C7)"}}>
          <div style={{display:"flex",gap:14,alignItems:"center"}}>
            <div style={{width:52,height:52,borderRadius:16,background:"#F59E0B18",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>⚡</div>
            <div style={{flex:1}}>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2}}>
                <div style={{fontSize:15,fontWeight:800,color:"#0A1F1A"}}>Relâmpago Diário</div>
                <span style={{fontSize:9,background:"#F59E0B",color:"#fff",padding:"2px 7px",borderRadius:20,fontWeight:700}}>NOVO DIA</span>
              </div>
              <div style={{fontSize:12,color:"#92400E"}}>5 perguntas aleatórias · muda todo dia</div>
            </div>
            <span style={{fontSize:18,color:"#F59E0B",opacity:.6}}>→</span>
          </div>
        </Card>

        {/* ── 6 CATEGORIAS COLORIDAS ── */}
        {(() => {
          const CATS = [
            { key:"mundo",         emoji:"🌍", nome:"Mundo & Culturas",       cor:"#3B82F6" },
            { key:"esportes",      emoji:"⚽", nome:"Esportes",                cor:"#10B981" },
            { key:"brasil",        emoji:"🇧🇷", nome:"Brasil",                  cor:"#EAB308" },
            { key:"entretenimento",emoji:"🎬", nome:"Entretenimento",           cor:"#EC4899" },
            { key:"astral",        emoji:"🌟", nome:"Astral & Misticismo",      cor:"#F59E0B" },
            { key:"conhecimento",  emoji:"🧠", nome:"Conhecimento Geral",       cor:"#7C3AED" },
          ];
          const quizEntries = Object.entries(QUIZ_BANKS).filter(([,qb])=>qb.categoria && qb.categoria !== 'pro');

          return CATS.map(cat => {
            const quizzesCat = quizEntries.filter(([,qb]) => qb.categoria === cat.key);
            if (!quizzesCat.length) return null;
            return (
              <div key={cat.key} style={{marginBottom:8}}>
                {/* Header da categoria */}
                <div style={{
                  display:"flex",alignItems:"center",gap:10,
                  padding:"13px 16px",borderRadius:16,
                  background:`linear-gradient(135deg,${cat.cor}20,${cat.cor}10)`,
                  border:`1.5px solid ${cat.cor}40`,
                  marginBottom:10,
                  boxShadow:`0 2px 8px ${cat.cor}15`,
                }}>
                  <div style={{width:36,height:36,borderRadius:10,background:`${cat.cor}25`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>{cat.emoji}</div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:15,fontWeight:900,color:cat.cor,letterSpacing:-0.3}}>{cat.nome}</div>
                    <div style={{fontSize:10,color:"#9CA3AF",marginTop:1}}>{quizzesCat.length} quiz{quizzesCat.length>1?"zes":""}</div>
                  </div>
                </div>
                {/* Cards desta categoria */}
                {quizzesCat.map(([key,qb])=>{
                  const totalQ = qb.niveis.facil.length + qb.niveis.medio.length + qb.niveis.dificil.length;
                  const cor = cat.cor; // usa sempre a cor da categoria
                  return (
                    <Card key={key} onClick={()=>openGenQuiz(key)} style={{cursor:"pointer",border:"1px solid #F3F4F6",marginBottom:8,background:"#fff",marginLeft:16,boxShadow:"0 1px 4px rgba(0,0,0,0.06)"}}>
                      <div style={{display:"flex",gap:14,alignItems:"center"}}>
                        <div style={{width:48,height:48,borderRadius:14,background:`${cor}20`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,flexShrink:0}}>{qb.emoji}</div>
                        <div style={{flex:1,minWidth:0}}>
                          <div style={{fontSize:14,fontWeight:800,color:"#0A1F1A",marginBottom:2}}>{qb.nome}</div>
                          <div style={{fontSize:11,color:"#9CA3AF",marginBottom:5}}>{qb.desc} · {totalQ} perguntas</div>
                          <div style={{display:"flex",gap:4,flexWrap:"wrap"}}>
                            {QUIZ_NIVEIS.map(n=>{
                              const score = profile?.[`qb_${key}_${n.id}`];
                              return (
                                <span key={n.id} style={{fontSize:9,fontWeight:700,color:score!=null?"#fff":"#9CA3AF",background:score!=null?cor:"#F3F4F6",borderRadius:20,padding:"2px 7px"}}>
                                  {n.emoji} {score!=null?`${score}/${qb.niveis[n.id].length}`:"—"}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                        <span style={{fontSize:16,color:cor,opacity:.7,flexShrink:0}}>→</span>
                      </div>
                    </Card>
                  );
                })}
              </div>
            );
          });
        })()}

        {/* ── QUIZZES PRO (no final) ── */}
        <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginTop:24,marginBottom:12}}>⭐ Em Breve · Versão PRO</div>
        {Object.entries(QUIZ_BANKS).filter(([,qb])=>qb.categoria==="pro").map(([key,qb])=>{
          const totalQ = qb.niveis.facil.length + qb.niveis.medio.length + qb.niveis.dificil.length;
          return (
            <Card key={key} style={{cursor:"default",borderLeft:"4px solid #9CA3AF",opacity:0.65,position:"relative",overflow:"hidden",marginBottom:8}}>
              <div style={{position:"absolute",top:10,right:12,background:"#0A1F1A",color:"#10B981",fontSize:9,fontWeight:800,padding:"3px 9px",borderRadius:20,letterSpacing:1}}>🔒 PRO</div>
              <div style={{display:"flex",gap:14,alignItems:"center"}}>
                <div style={{width:48,height:48,borderRadius:14,background:"#F3F4F6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,filter:"grayscale(1)"}}>{qb.emoji}</div>
                <div style={{flex:1,paddingRight:50}}>
                  <div style={{fontSize:14,fontWeight:800,color:"#9CA3AF",marginBottom:2}}>{qb.nome}</div>
                  <div style={{fontSize:11,color:"#9CA3AF"}}>{totalQ} perguntas</div>
                </div>
              </div>
            </Card>
          );
        })}
      </>)}
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
        <TestHeader emoji={cfg.intro.emoji} nome={cfg.intro.nome} cor="#10B981" step={novoStep+1} total={qsNovo.length} onCancel={()=>setAba("menu")}/>
        <div key={novoStep} style={{animation:"ktSlideIn .35s ease"}}>
          <div style={{fontSize:17,fontWeight:800,marginBottom:18,lineHeight:1.35}}>{q.q}</div>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {(() => {
              const cfg = NOVOS_TESTES[currentTest];
              const tipo = cfg.tipo;
              // Tipos com resposta certa (ingles, agilidade, biblico): opts = [str,str,str,str], c = index correto
              if (["ingles","agilidade","biblico"].includes(tipo)) {
                const wsArr = Array.isArray(q.w) ? q.w : q.opts.map(()=>tipo);
                return q.opts.map((opt,i)=>(
                  <button key={i} onClick={()=>{
                    const certo = i === q.c;
                    const w = certo ? (wsArr[i]||tipo) : "errou";
                    answerNovo(w);
                  }} style={{padding:"14px 18px",borderRadius:16,border:"1.5px solid #E5E7EB",background:"#fff",color:"#0A1F1A",fontSize:14,fontWeight:500,cursor:"pointer",fontFamily:"inherit",textAlign:"left",lineHeight:1.4}}>{opt}</button>
                ));
              }
              // MBTI: opts = [{t,w}, ...] onde w é E/I/S/N/T/F/J/P
              if (tipo === "mbti") {
                return q.opts.map((o,i)=>(
                  <button key={i} onClick={()=>answerNovo(o.w || (Array.isArray(q.w)?q.w[i]:o))} style={{padding:"14px 18px",borderRadius:16,border:"1.5px solid #E5E7EB",background:"#fff",color:"#0A1F1A",fontSize:14,fontWeight:500,cursor:"pointer",fontFamily:"inherit",textAlign:"left",lineHeight:1.4}}>{o.t||o}</button>
                ));
              }
              // Padrão weighted: opts = [{t,w}, ...]
              return q.opts.map((o,i)=>(
                <button key={i} onClick={()=>answerNovo(o.w)} style={{padding:"14px 18px",borderRadius:16,border:"1.5px solid #E5E7EB",background:"#fff",color:"#0A1F1A",fontSize:14,fontWeight:500,cursor:"pointer",fontFamily:"inherit",textAlign:"left",lineHeight:1.4}}>{o.t}</button>
              ));
            })()}
          </div>
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
      <div style={{position:"relative"}}>
        <Confetti count={50}/>
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
            {/* #9 Indicador de raridade */}
            {(() => {
              const numResults = Object.keys(cfg.info).length;
              const seed = (currentTest.length * 7 + novoResult.length * 13) % 100;
              const pct = Math.max(6, Math.min(38, Math.round(100/numResults - 8 + seed % 16)));
              const raro = pct <= 15;
              return (
                <div style={{display:"inline-block",marginTop:12,background:"rgba(255,255,255,0.2)",borderRadius:20,padding:"5px 14px",fontSize:12,fontWeight:700}}>
                  {raro ? "🦄" : "✨"} Apenas {pct}% das pessoas têm esse resultado
                </div>
              );
            })()}
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
        <div style={{fontSize:13,fontWeight:700,color:"#0A1F1A",textAlign:"center",marginBottom:8}}>🔓 Você desbloqueou +10 famosos!</div>
        <Btn label="👀 Ver famosos desbloqueados" onClick={goCoincidence}/>
        <div style={{marginTop:10}}><Btn label="↻ Refazer o teste" onClick={()=>{setNovoStep(0);setNovoScores({});setNovoResult(null);setAba("novo_perguntas");}} ghost/></div>
        <div style={{marginTop:10}}><Btn label="🧠 Fazer outros testes" onClick={resetNovo} ghost/></div>
      </div>
    );
  }

  // ─── QI CULTURAL ───
  if (aba==="qi") {
    if (qiDone) {
      const level = QI_LEVELS.find(l => qiScore >= l.min && qiScore <= l.max) || QI_LEVELS[0];
      const qiPct = Math.round((qiScore/QI_QUESTIONS.length)*100);
      return (
        <div>
          <TestHeader emoji="🧠" nome="QI Cultural" cor="#F59E0B" onCancel={resetQI}/>
          <div style={{position:"relative"}}>
            {qiPct>=50 && <Confetti count={qiPct>=80?60:40}/>}
            <Card style={{textAlign:"center",background:`${level.cor}18`,border:`1px solid ${level.cor}30`,position:"relative",overflow:"hidden"}}>
              <div style={{fontSize:56,marginBottom:10,animation:"ktBounceIn .6s ease",display:"inline-block"}}>{level.emoji}</div>
              <div style={{fontSize:22,fontWeight:900,color:"#0A1F1A",marginBottom:4}}>{level.nome}</div>
              <div style={{fontSize:30,fontWeight:900,color:level.cor,marginBottom:8,animation:"ktPop .5s .15s both"}}>{qiScore}/{QI_QUESTIONS.length}</div>
              <div style={{fontSize:13,color:"#5A6B68",lineHeight:1.5,marginBottom:8}}>{level.desc}</div>
              <div style={{fontSize:14,color:"#0A1F1A",fontWeight:600,lineHeight:1.5,padding:"0 6px"}}>{pickComment(qiPct)}</div>
            </Card>
          </div>
          <Btn label="↻ Tentar novamente" onClick={()=>{setQiStep(0);setQiScore(0);setQiFb(null);setQiDone(false);setQiPicked(null);}}/>
          <div style={{marginTop:10}}><Btn label="← Voltar para Testes" onClick={resetQI} ghost/></div>
        </div>
      );
    }
    const q = QI_QUESTIONS[qiStep];
    return (
      <div>
        <TestHeader emoji="🧠" nome="QI Cultural" cor="#F59E0B" step={qiStep+1} total={QI_QUESTIONS.length} score={qiScore} onCancel={resetQI}/>
        <div key={qiStep} style={{animation:"ktSlideIn .35s ease"}}>
          <div style={{fontSize:17,fontWeight:800,marginBottom:18,lineHeight:1.35}}>{q.q}</div>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {q.opts.map((o,i)=>{
              let bg="#fff",bc="#E5E7EB",col="#0A1F1A",anim="none",extra={};
              if (qiFb!==null){
                if(i===q.c){ bg="#ECFDF5"; bc="#10B981"; col="#065F46"; anim="ktPop .45s"; extra={boxShadow:"0 6px 22px rgba(16,185,129,.35)",fontWeight:700}; }
                else if(i===qiPicked){ bg="#FEF2F2"; bc="#EF4444"; col="#991B1B"; anim="ktShake .4s"; }
                else { extra={opacity:.5}; }
              }
              return <button key={i} onClick={()=>qiFb===null&&answerQI(i)} style={{padding:"15px 18px",borderRadius:16,border:`2px solid ${bc}`,background:bg,color:col,fontSize:14,fontWeight:500,cursor:qiFb===null?"pointer":"default",fontFamily:"inherit",textAlign:"left",lineHeight:1.4,transition:"all .2s",animation:anim,...extra}}>
                {qiFb!==null && i===q.c && <span style={{marginRight:7}}>✅</span>}
                {qiFb!==null && i===qiPicked && i!==q.c && <span style={{marginRight:7}}>❌</span>}
                {o}
              </button>;
            })}
          </div>
          {qiFb!==null&&<div style={{marginTop:14,padding:"13px 16px",borderRadius:14,background:qiFb?"#ECFDF5":"#FEF2F2",border:`1.5px solid ${qiFb?"#10B981":"#FCA5A5"}`,fontSize:14,color:qiFb?"#065F46":"#991B1B",fontWeight:700,textAlign:"center",animation:"ktPop .4s"}}>{qiFb?"🎉 Acertou em cheio!": `😅 Era: ${q.opts[q.c]}`}</div>}
        </div>
      </div>
    );
  }

  // ─── TEMPERAMENTO ───
  if (aba==="tempe") {
    const qsTempe = shuffledQuestions || QUESTIONS;
    const q = qsTempe[step];
    return (
      <div>
        <TestHeader emoji="🧬" nome="Teste de Temperamento" cor="#10B981" step={step+1} total={qsTempe.length} onCancel={resetTempe}/>
        <div key={step} style={{animation:"ktSlideIn .35s ease"}}>
          <div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",marginBottom:18,lineHeight:1.3}}>{q.q}</div>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {q.opts.map((o,i)=>(
              <button key={i} onClick={()=>answerTempe(o.w)} style={{padding:"15px 18px",borderRadius:16,border:"1.5px solid #E5E7EB",background:"#fff",color:"#0A1F1A",fontSize:14,fontWeight:500,cursor:"pointer",fontFamily:"inherit",textAlign:"left",lineHeight:1.4}}>{o.t}</button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (aba==="tempe_result") {
    const total = Object.values(scores).reduce((s,v)=>s+v,0);
    const d = Object.entries(scores).sort((a,b)=>b[1]-a[1])[0][0];
    const t = TEMPE_INFO[d];
    return (
      <div style={{position:"relative"}}>
        <Confetti count={50}/>
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
        <div style={{fontSize:13,fontWeight:700,color:"#0A1F1A",textAlign:"center",marginBottom:8}}>🔓 Você desbloqueou +10 famosos!</div>
        <Btn label="👀 Ver famosos desbloqueados" onClick={goCoincidence}/>
        <div style={{marginTop:10}}><Btn label="↻ Refazer o teste" onClick={resetTempe} ghost/></div>
        <div style={{marginTop:10}}><Btn label="🧠 Fazer outros testes" onClick={()=>setAba("menu")} ghost/></div>
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
      const levelNome={facil:"Fácil",medio:"Médio",dificil:"Difícil"}[qLevel];
      return (
        <div>
          <TestHeader emoji="🎯" nome="Quiz dos Famosos" cor={levelColor} sub={`Nível ${levelNome}`} onCancel={()=>setAba("menu")}/>
          <div style={{position:"relative"}}>
            {pct>=50 && <Confetti count={pct>=80?60:40}/>}
            <Card style={{textAlign:"center",background:"#FFF7ED",border:"1px solid #FED7AA",position:"relative",overflow:"hidden"}}>
              <div style={{fontSize:56,marginBottom:8,animation:"ktBounceIn .6s ease",display:"inline-block"}}>{pct>=80?"🏆":pct>=50?"🎉":"🌱"}</div>
              <div style={{fontSize:34,fontWeight:900,color:levelColor,marginBottom:4,animation:"ktPop .5s .15s both"}}>{qScore}/{total}</div>
              <div style={{fontSize:13,fontWeight:700,color:"#5A6B68",marginBottom:10}}>{quizMsg(pct)}</div>
              <div style={{fontSize:14,color:"#0A1F1A",fontWeight:600,lineHeight:1.5,padding:"0 6px"}}>{pickComment(pct)}</div>
            </Card>
          </div>
          <Btn label="↻ Outro nível" onClick={resetQuiz}/>
          <div style={{marginTop:10}}><Btn label="← Voltar para Testes" onClick={()=>setAba("menu")} ghost/></div>
        </div>
      );
    }
    const q=qPool[qIdx];
    if(!q) return <div><Btn label="← Voltar" onClick={resetQuiz} ghost/></div>;
    const levelColor={facil:"#10B981",medio:"#F59E0B",dificil:"#EF4444"}[qLevel];
    const levelNome={facil:"Fácil",medio:"Médio",dificil:"Difícil"}[qLevel];
    return (
      <div>
        <TestHeader emoji="🎯" nome="Quiz dos Famosos" cor={levelColor} sub={`Nível ${levelNome}`} step={qIdx+1} total={qPool.length} score={qScore} onCancel={resetQuiz}/>
        <div key={qIdx} style={{animation:"ktSlideIn .35s ease"}}>
          <div style={{fontSize:17,fontWeight:800,marginBottom:18,lineHeight:1.35}}>{q.q}</div>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {q.opts.map((o,i)=>{
              let bg="#fff",bc="#E5E7EB",col="#0A1F1A",anim="none",extra={};
              if(qFb!==null){
                if(i===q.c){ bg="#ECFDF5"; bc="#10B981"; col="#065F46"; anim="ktPop .45s"; extra={boxShadow:"0 6px 22px rgba(16,185,129,.35)",fontWeight:700}; }
                else if(i===qPicked){ bg="#FEF2F2"; bc="#EF4444"; col="#991B1B"; anim="ktShake .4s"; }
                else { extra={opacity:.5}; }
              }
              return <button key={i} onClick={()=>qFb===null&&answerQuiz(i)} style={{padding:"15px 18px",borderRadius:16,border:`2px solid ${bc}`,background:bg,color:col,fontSize:14,fontWeight:500,cursor:qFb===null?"pointer":"default",fontFamily:"inherit",textAlign:"left",lineHeight:1.4,transition:"all .2s",animation:anim,...extra}}>
                {qFb!==null && i===q.c && <span style={{marginRight:7}}>✅</span>}
                {qFb!==null && i===qPicked && i!==q.c && <span style={{marginRight:7}}>❌</span>}
                {o}
              </button>;
            })}
          </div>
          {qFb!==null&&<div style={{marginTop:14,padding:"13px 16px",borderRadius:14,background:qFb?"#ECFDF5":"#FEF2F2",border:`1.5px solid ${qFb?"#10B981":"#FCA5A5"}`,fontSize:14,color:qFb?"#065F46":"#991B1B",fontWeight:700,textAlign:"center",animation:"ktPop .4s"}}>{qFb?"🎉 Acertou em cheio!":`😅 Era: ${q.opts[q.c]}`}</div>}
        </div>
      </div>
    );
  }

  // ─── QUIZZES TEMÁTICOS (engine genérica com níveis) ───
  if (aba==="genquiz" && gqKey) {
    const isRelampago = gqKey === "relampago";
    const qb = isRelampago
      ? { emoji:"⚡", nome:"Relâmpago Diário", cor:"#F59E0B", desc:"5 perguntas do dia" }
      : QUIZ_BANKS[gqKey];
    // Seleção de nível
    if (!gqLevel) {
      const MODOS = [
        { id:"normal",  emoji:"🎯", nome:"Normal" },
        { id:"crono",   emoji:"⏱️",  nome:"Contra o tempo" },
        { id:"surto",   emoji:"💀",  nome:"Morte súbita" },
        { id:"treino",  emoji:"🎓",  nome:"Treino" },
      ];
      return (
        <div>
          <TestHeader emoji={qb.emoji} nome={qb.nome} cor={qb.cor} sub={qb.desc} onCancel={resetGenQuiz}/>

          {/* Modo de jogo */}
          <div style={{fontSize:11,fontWeight:700,color:"#9CA3AF",marginBottom:6}}>Modo de jogo</div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:16}}>
            {MODOS.map(m=>(
              <button key={m.id} onClick={()=>setGqMode(m.id)} style={{
                padding:"6px 12px",borderRadius:20,fontFamily:"inherit",fontSize:11,fontWeight:700,cursor:"pointer",transition:"all .15s",
                background:gqMode===m.id?qb.cor:"#F3F4F6",
                color:gqMode===m.id?"#fff":"#6B7280",
                border:`1.5px solid ${gqMode===m.id?qb.cor:"#E5E7EB"}`,
              }}>{m.emoji} {m.nome}</button>
            ))}
          </div>

          <div style={{fontSize:13,color:"#9CA3AF",marginBottom:12,fontWeight:600}}>Escolha o nível</div>
          {QUIZ_NIVEIS.map(lv=>{
            const best = profile?.[`qb_${gqKey}_${lv.id}`];
            const count = qb.niveis[lv.id].length;
            return (
              <Card key={lv.id} onClick={()=>startGenLevel(lv.id)} style={{cursor:"pointer",borderLeft:`4px solid ${lv.cor}`}}>
                <div style={{display:"flex",gap:14,alignItems:"center"}}>
                  <span style={{fontSize:30}}>{lv.emoji}</span>
                  <div style={{flex:1}}>
                    <div style={{fontSize:16,fontWeight:800}}>{lv.nome}</div>
                    <div style={{fontSize:12,color:"#9CA3AF",marginTop:2}}>
                      {count} perguntas{best!=null && ` · 🏆 recorde ${best}/${count}`}
                    </div>
                  </div>
                  <span style={{fontSize:20,color:lv.cor,opacity:.6}}>→</span>
                </div>
              </Card>
            );
          })}
        </div>
      );
    }
    const nivel = isRelampago ? {nome:"Diário",emoji:"⚡",cor:"#F59E0B"} : QUIZ_NIVEIS.find(n=>n.id===gqLevel);
    // Resultado
    if (gqDone) {
      const total = gqPool.length, pct = Math.round((gqScore/total)*100);
      const best = (!isRelampago && profile?.[`qb_${gqKey}_${gqLevel}`]) || 0;
      const novoRecorde = !isRelampago && gqScore >= best && gqScore > 0;
      const comentario = pickComment(pct);
      const wrongPool = gqWrong.map(i => gqPool[i]).filter(Boolean);
      return (
        <div>
          <TestHeader emoji={qb.emoji} nome={qb.nome} cor={qb.cor} sub={`Nível ${nivel.nome}`} onCancel={resetGenQuiz}/>
          <div style={{position:"relative"}}>
            {pct>=50 && <Confetti count={pct>=80?60:40}/>}
            <Card style={{textAlign:"center",background:`${qb.cor}12`,border:`1px solid ${qb.cor}30`,position:"relative",overflow:"hidden"}}>
              {gqMode==="surto" && !gqScore ? (
                <div style={{fontSize:48,marginBottom:8,animation:"ktShake .5s ease"}}>💀</div>
              ) : (
                <div style={{fontSize:56,marginBottom:8,animation:"ktBounceIn .6s ease",display:"inline-block"}}>
                  {gqKey==="copa" ? (pct>=80?"🏆":pct>=50?"⚽":"🥅") : (pct>=80?"🏆":pct>=50?"🎉":"🌱")}
                </div>
              )}
              <div style={{fontSize:36,fontWeight:900,color:qb.cor,marginBottom:4,animation:"ktPop .5s .15s both"}}>{gqScore}/{total}</div>
              <div style={{fontSize:13,fontWeight:700,color:"#5A6B68",marginBottom:10}}>
                {gqKey==="copa" ? (pct>=80?"Craque! Você manja tudo de Copa!":pct>=60?"Bom de bola! Sabe bastante!":pct>=40?"Tá no aquecimento ainda...":"Precisa treinar mais, jogador!") : quizMsg(pct)}
              </div>
              <div style={{fontSize:14,color:"#0A1F1A",fontWeight:600,lineHeight:1.5,marginBottom:novoRecorde?12:0,padding:"0 6px"}}>{comentario}</div>
              {novoRecorde && <div style={{display:"inline-block",fontSize:12,fontWeight:800,color:"#fff",background:qb.cor,borderRadius:20,padding:"5px 14px",animation:"ktBadgePop .5s .25s both"}}>{gqKey==="copa"?"⚽ Novo recorde! Gol de placa!":"🏆 Novo recorde!"}</div>}
            </Card>
          </div>
          {wrongPool.length > 0 && (
            <Btn label={`🔁 Refazer as ${wrongPool.length} que errei`} onClick={()=>{
              setGqPool(wrongPool.map(shuffleQuestion)); setGqIdx(0); setGqScore(0); setGqDone(false); setGqFb(null); setGqPicked(null); setGqWrong([]); setGqTimeLeft(12);
            }}/>
          )}
          {!isRelampago && <Btn label="↻ Jogar de novo" onClick={()=>startGenLevel(gqLevel)}/>}
          {!isRelampago && <div style={{marginTop:10}}><Btn label="📊 Trocar de nível" onClick={()=>{setGqLevel(null);setGqDone(false);setGqWrong([]);}} ghost/></div>}
          <div style={{marginTop:10}}><Btn label="🎯 Outros quizzes" onClick={resetGenQuiz} ghost/></div>
        </div>
      );
    }
    // Pergunta
    const q = gqPool[gqIdx];
    if (!q) return <div><Btn label="← Voltar" onClick={resetGenQuiz} ghost/></div>;
    return (
      <div>
        <TestHeader emoji={qb.emoji} nome={qb.nome} cor={qb.cor} sub={`Nível ${nivel.nome}`} step={gqIdx+1} total={gqPool.length} score={gqMode==="treino"?null:gqScore} onCancel={resetGenQuiz}/>
        {/* Barra do timer cronometrado */}
        {gqMode === "crono" && (
          <div style={{marginBottom:12}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
              <span style={{fontSize:11,fontWeight:700,color:gqTimeLeft<=3?"#EF4444":"#6B7280"}}>⏱️ {gqTimeLeft}s</span>
              <span style={{fontSize:11,color:"#9CA3AF"}}>Cada pergunta tem 12 segundos</span>
            </div>
            <div style={{height:5,background:"#F3F4F6",borderRadius:4,overflow:"hidden"}}>
              <div style={{height:"100%",width:`${(gqTimeLeft/12)*100}%`,background:gqTimeLeft<=3?"#EF4444":qb.cor,borderRadius:4,transition:"width 1s linear"}}/>
            </div>
          </div>
        )}
        <div key={gqIdx} style={{animation:"ktSlideIn .35s ease"}}>
          {q.flag && (
            <div style={{textAlign:"center",marginBottom:16,fontSize:72,lineHeight:1,filter:"drop-shadow(0 4px 8px rgba(0,0,0,0.15))"}}>
              {q.flag}
            </div>
          )}
          <div style={{fontSize:17,fontWeight:800,marginBottom:18,lineHeight:1.35}}>{q.q}</div>
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            {q.opts.map((o,i)=>{
              let bg="#fff",bc="#E5E7EB",col="#0A1F1A",anim="none",extra={};
              if (gqFb!==null){
                if(i===q.c){ bg="#ECFDF5"; bc="#10B981"; col="#065F46"; anim="ktPop .45s"; extra={boxShadow:"0 6px 22px rgba(16,185,129,.35)",fontWeight:700}; }
                else if(i===gqPicked){ bg="#FEF2F2"; bc="#EF4444"; col="#991B1B"; anim="ktShake .4s"; }
                else { extra={opacity:.5}; }
              }
              return <button key={i} onClick={()=>gqFb===null&&answerGenQuiz(i)} style={{padding:"15px 18px",borderRadius:16,border:`2px solid ${bc}`,background:bg,color:col,fontSize:14,fontWeight:500,cursor:gqFb===null?"pointer":"default",fontFamily:"inherit",textAlign:"left",lineHeight:1.4,transition:"all .2s",animation:anim,...extra}}>
                {gqFb!==null && i===q.c && <span style={{marginRight:7}}>✅</span>}
                {gqFb!==null && i===gqPicked && i!==q.c && <span style={{marginRight:7}}>❌</span>}
                {o}
              </button>;
            })}
          </div>
          {gqFb!==null&&(()=>{
            const isCopa = gqKey === "copa";
            const GOLS = ["⚽ GOOOOOL! Acertou em cheio!","⚽ GOLAÇO! Que chute certeiro!","⚽ É GOL! Bola na rede!","⚽ GOL DE PLACA! Resposta perfeita!","⚽ GOOOL! No ângulo!"];
            const FORAS = ["❌ Pra fora! Era: ","😤 Na trave! A resposta era: ","🧤 O goleiro pegou! Era: ","⚽ Impedimento! A certa era: ","📣 VAR anulou! A resposta era: "];
            const CURIOSIDADES_COPA = [
              "🏟️ A primeira Copa do Mundo (1930) teve apenas 13 seleções. Hoje são 32 — e em 2026 serão 48!",
              "🇧🇷 O Brasil é o único país que participou de TODAS as edições da Copa do Mundo.",
              "⚽ O gol mais rápido da história das Copas foi marcado em 11 segundos por Hakan Şükür (Turquia, 2002).",
              "👑 Pelé é o único jogador a vencer 3 Copas do Mundo (1958, 1962 e 1970).",
              "😱 Na Copa de 1950, o Maracanã recebeu quase 200 mil torcedores na final — recorde até hoje.",
              "🏆 A taça atual (FIFA World Cup Trophy) é feita de ouro 18 quilates e pesa 6,175 kg.",
              "🇮🇹 A Itália venceu duas Copas seguidas (1934 e 1938) — feito que ninguém repetiu.",
              "🤯 Na Copa de 1958, Pelé tinha apenas 17 anos e marcou 6 gols — incluindo 2 na final!",
              "🔴 O cartão vermelho só foi introduzido na Copa do Mundo a partir de 1970, no México.",
              "🇩🇪 A Alemanha detém o recorde de finais disputadas: 8 no total.",
              "⚽ Ronaldo Fenômeno é o segundo maior artilheiro das Copas com 15 gols — só atrás de Klose (16).",
              "🏟️ O estádio Lusail, no Qatar (2022), foi construído especialmente para a final e custa US$ 767 milhões.",
              "🇫🇷 Just Fontaine marcou 13 gols em uma única Copa (1958) — recorde que dura até hoje.",
              "😤 O 7×1 do Brasil contra a Alemanha em 2014 é a maior goleada em semifinais da história.",
              "🇦🇷 A final de 2022 (Argentina × França) é considerada a melhor final da história — terminou 3×3 e foi para os pênaltis.",
              "👶 Norman Whiteside (Irlanda do Norte) é o jogador mais jovem a atuar numa Copa: 17 anos e 41 dias, em 1982.",
              "🐙 O polvo Paul ficou famoso por 'prever' todos os resultados da Alemanha na Copa de 2010.",
              "🇺🇾 O Uruguai venceu a primeira Copa (1930) jogando em casa e é bicampeão mundial.",
              "⚽ A bola oficial da Copa muda a cada edição. A Brazuca (2014) e a Al Rihla (2022) foram as mais tecnológicas.",
              "🏅 Messi finalmente venceu sua Copa do Mundo em 2022, aos 35 anos, após 5 tentativas.",
            ];
            const txtOk = isCopa ? GOLS[gqIdx % GOLS.length] : "🎉 Acertou em cheio!";
            const txtErr = isCopa ? FORAS[gqIdx % FORAS.length] + q.opts[q.c] : `😅 Era: ${q.opts[q.c]}`;
            const curiosidade = isCopa ? CURIOSIDADES_COPA[gqIdx % CURIOSIDADES_COPA.length] : null;
            return (<>
              <div style={{marginTop:14,padding:"13px 16px",borderRadius:14,background:gqFb?(isCopa?"#FEF9C3":"#ECFDF5"):"#FEF2F2",border:`1.5px solid ${gqFb?(isCopa?"#EAB308":"#10B981"):"#FCA5A5"}`,fontSize:14,color:gqFb?(isCopa?"#713F12":"#065F46"):"#991B1B",fontWeight:700,textAlign:"center",animation:"ktPop .4s"}}>{gqFb?txtOk:txtErr}</div>
              {curiosidade && <div style={{marginTop:8,padding:"10px 14px",borderRadius:12,background:"#FFFBEB",border:"1px solid #FDE68A",fontSize:12,color:"#92400E",lineHeight:1.5}}>
                <div style={{fontWeight:800,fontSize:10,color:"#B45309",textTransform:"uppercase",letterSpacing:1,marginBottom:4}}>📖 Você sabia?</div>
                {curiosidade}
              </div>}
            </>);
          })()}
        </div>
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
          <Btn label={`← Voltar ${goAstral ? "para Astral" : "para Testes"}`} onClick={()=>{setMood(null); goAstral ? goAstral() : setAba("menu");}} ghost/>
        </div>
      );
    }
    return (
      <div>
        <button onClick={()=>goAstral ? goAstral() : setAba("menu")} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Voltar {goAstral ? "para Astral" : ""}</button>
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
function PerfilScreen({profile, onSave, onReset, onBack, autoOpenQSE=false}) {
  const [form, setForm] = useState(profile || {});
  const [showQSE, setShowQSE] = useState(autoOpenQSE);
  const [editMode, setEditMode] = useState(false);
  const set = (k,v) => setForm(f => ({...f, [k]:v}));
  const sign = form.birthDay && form.birthMonth ? getSign(form.birthDay, form.birthMonth) : null;
  const vida = calcVida(form.birthDay, form.birthMonth, form.birthYear);
  const numInfo = form.birthDay && form.birthYear ? getNumerologia(form.birthDay, form.birthMonth, form.birthYear) : null;
  const inp = {width:"100%",background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:12,
    color:"#0A1F1A",fontSize:15,padding:"13px 15px",boxSizing:"border-box",fontWeight:500};

  // campos monitorados (sem fantasmas)
  const TODOS_CAMPOS = ["temperamento","amor","politico","personalidade","profissional","lider","financeiro","elemento","profissao","sonhador","ingles","agilidade","biblico","mbti","tradicao","filosofo","visaomundo","espvrel","corrente","virtude","ikigai","deusa","cores","selecao","apego","ciumento","romantico","compSignos","valores","arquetipo","iq_emocional","impostor","comunicacao","cultpop"];
  const testesFEITOS = TODOS_CAMPOS.filter(k => profile?.[k]);
  const quizKeys = Object.keys(QUIZ_BANKS).filter(k => QUIZ_BANKS[k].categoria);
  const quizzesJogados = quizKeys.filter(k => QUIZ_NIVEIS.some(n => profile?.[`qb_${k}_${n.id}`] > 0));
  const calcMediaNivel = (nid) => {
    const scores = quizKeys.map(k => profile?.[`qb_${k}_${nid}`]).filter(v => v != null && v > 0);
    if (!scores.length) return null;
    return Math.round(scores.reduce((a,b)=>a+b,0) / scores.length);
  };
  const mediaFacil = calcMediaNivel("facil");
  const mediaMedio = calcMediaNivel("medio");
  const mediaDificil = calcMediaNivel("dificil");
  const totalTestesDisponiveis = TODOS_CAMPOS.length;
  const totalQuizzesDisponiveis = quizKeys.length;

  // ── CARD "QUEM SOU EU" ──────────────────────────────────────
  if (showQSE) {
    const animal = profile?.birthYear ? getAnimalChines(profile.birthYear) : null;
    const rashi = profile?.sign ? getRashi(profile.sign) : null;
    const lua = getFaseLua();

    const TEMPE_LABELS = {colerico:"🔥 Colérico",sanguineo:"☀️ Sanguíneo",melancolico:"🌊 Melancólico",fleumatico:"🌿 Fleumático"};
    const AMOR_LABELS = {palavras:"💬 Palavras de Afirmação",tempo:"⏰ Tempo de Qualidade",presentes:"🎁 Presentes",atos:"🤝 Atos de Serviço",toque:"🤗 Toque Físico"};
    const POL_LABELS = {esquerda:"🌹 Esquerda",centro:"⚖️ Centro",direita:"🦅 Direita",liberal:"🗽 Liberal"};
    const PER_LABELS = {intro:"🌙 Introvertido(a)",ambiv:"🌗 Ambivertido(a)",extra:"☀️ Extrovertido(a)"};
    const PROF_LABELS = {empreendedor:"🚀 Empreendedor(a)",executor:"⚙️ Executor(a)",criativo:"🎨 Criativo(a)",analitico:"📊 Analítico(a)"};
    const LIDER_LABELS = {visionario:"🔭 Visionário (Da Vinci)",humanista:"🕊️ Humanista (Mandela)",estrategista:"♟️ Estrategista (Churchill)",carismatico:"✨ Carismático (Cleópatra)"};
    const FIN_LABELS = {poupador:"🐷 Poupador",gastador:"💸 Gastador",investidor:"📈 Investidor",impulsivo:"🎲 Impulsivo"};
    const ELEM_LABELS = {fogo:"🔥 Fogo",terra:"🌱 Terra",ar:"💨 Ar",agua:"🌊 Água"};
    const PROF2_LABELS = {criativo:"🎨 Criativo",analitico:"🔬 Analítico",social:"🤝 Humanas",empreendedor:"🚀 Negócios"};
    const SONHADOR_LABELS = {visionario:"🔮 Visionário",navegador:"🧭 Navegador",observador:"🔭 Observador",construtor:"⚙️ Construtor"};
    const INGLES_LABELS = {basico:"🟡 Básico (A1-A2)",intermediario:"🟠 Intermediário (B1-B2)",avancado:"🟢 Avançado (C1-C2)",nativo:"⭐ Nativo/Fluente"};
    const AGILIDADE_LABELS = {iniciante:"🌱 Iniciante",medio:"⚡ Médio",avancado:"🔥 Avançado",expert:"🏆 Expert"};
    const BIBLICO_LABELS = {iniciante:"📖 Iniciante",intermediario:"✝️ Intermediário",avancado:"🕊️ Avançado",estudioso:"⭐ Estudioso"};
    const MBTI_LABELS = {
      INTJ:"🔭 INTJ — Arquiteto",INTP:"🧬 INTP — Pensador",ENTJ:"⚡ ENTJ — Comandante",ENTP:"💡 ENTP — Debatedor",
      INFJ:"🌙 INFJ — Advogado",INFP:"🌿 INFP — Mediador",ENFJ:"🌟 ENFJ — Protagonista",ENFP:"🎨 ENFP — Campanha",
      ISTJ:"🏛️ ISTJ — Logístico",ISFJ:"🛡️ ISFJ — Defensor",ESTJ:"📋 ESTJ — Executivo",ESFJ:"🤝 ESFJ — Cônsul",
      ISTP:"🔧 ISTP — Virtuoso",ISFP:"🎭 ISFP — Aventureiro",ESTP:"🚀 ESTP — Empreendedor",ESFP:"🎉 ESFP — Animador",
    };
    const FILOSOFO_LABELS = {socrates:"🏛️ Sócrates",nietzsche:"⚡ Nietzsche",buda:"☸️ Buda",laotse:"☯️ Lao-Tsé"};
    const VISAO_LABELS = {materialista:"⚗️ Materialista",espiritualista:"✨ Espiritualista",agnostico:"🌊 Agnóstico",pragmatico:"🔧 Pragmático"};
    const ESPVREL_LABELS = {devoto:"🕊️ Devoto",espiritual:"🌿 Espiritual",mistico:"🔮 Místico",secular:"🌍 Secular"};
    const CORRENTE_LABELS = {estoico:"🏛️ Estoico",existencialista:"🌑 Existencialista",pragmatico:"⚙️ Pragmático",humanista:"🌺 Humanista"};
    const VIRTUDE_LABELS = {coragem:"🔥 Coragem",sabedoria:"🦉 Sabedoria",justica:"⚖️ Justiça",temperanca:"🌊 Temperança"};
    const IKIGAI_LABELS = {artesao:"🎨 Artesão",missionario:"🤝 Missionário",explorador:"🔭 Explorador",profissional:"⚡ Profissional"};
    const DEUSA_LABELS = {afrodite:"🌹 Afrodite",atena:"🦉 Atena",artemis:"🏹 Ártemis",hera:"👑 Hera"};
    const CORES_LABELS = {vermelho:"🔴 Vermelho",azul:"🔵 Azul",amarelo:"🟡 Amarelo",verde:"🟢 Verde"};
    const SELECAO_LABELS = {brasil:"🇧🇷 Brasil",argentina:"🇦🇷 Argentina",alemanha:"🇩🇪 Alemanha",franca:"🇫🇷 França"};
    const APEGO_LABELS = {seguro:"🌿 Apego Seguro",ansioso:"💛 Apego Ansioso",evitativo:"🌊 Apego Evitativo",desorganizado:"🌀 Apego Desorganizado"};
    const CIUMENTO_LABELS = {baixo:"🌿 Ciúme Baixo",moderado:"💛 Ciúme Moderado",intenso:"🔥 Ciúme Intenso"};
    const ROMANTICO_LABELS = {cauteloso:"🏛️ O Construtor",apaixonado:"🔥 O Apaixonado",racional:"🧩 O Estrategista",receptivo:"🌊 O Empático"};
    const VALORES_LABELS = {liberdade:"🦅 Liberdade & Autenticidade",justica:"⚖️ Justiça & Integridade",servico:"🤲 Serviço & Impacto",crescimento:"🌱 Crescimento & Evolução"};
    const ARQUETIPO_LABELS = {heroi:"⚔️ O Herói",sabio:"🦉 O Sábio",rebelde:"⚡ O Rebelde",cuidador:"🌹 O Cuidador"};
    const IQ_EMOCIONAL_LABELS = {iniciante:"🌱 Em Desenvolvimento",desenvolvendo:"🌿 Crescendo",avancado:"🎯 Avançado",mestre:"💎 Mestre Emocional"};
    const IMPOSTOR_LABELS = {baixo:"🌟 Autoconfiança Sólida",moderado:"💛 Síndrome Leve",alto:"🌀 Síndrome Frequente",intenso:"🔥 Síndrome Intensa"};
    const COMUNICACAO_LABELS = {passivo:"🌊 Comunicação Passiva",assertivo:"🎯 Comunicação Assertiva",agressivo:"⚡ Comunicação Agressiva"};
    const CULTPOP_LABELS = {expert:"🏆 Especialista em Pop BR",antenado:"📡 Antenado(a)",fora_bolha:"🫧 Fora da Bolha"};
    const COMPSIGNOS_LABELS = {fogo:"🔥 Fogo",terra:"🌍 Terra",agua:"🌊 Água",ar:"💨 Ar"};

    const pctTestes = Math.round((testesFEITOS.length / totalTestesDisponiveis) * 100);
    const pctQuizzes = Math.round((quizzesJogados.length / totalQuizzesDisponiveis) * 100);
    const scoreBar = (pct, cor) => (
      <div style={{background:"#F3F4F6",borderRadius:99,height:6,marginTop:6,overflow:"hidden"}}>
        <div style={{width:`${pct}%`,height:"100%",background:cor,borderRadius:99,transition:"width .6s ease"}}/>
      </div>
    );
    const medalPct = (v) => v==null?null:v>=80?"🏆":v>=60?"🥈":v>=40?"🥉":"🌱";
    const Row = ({label, valor, cor}) => (
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"9px 0",borderBottom:"1px solid #F3F4F6"}}>
        <div style={{fontSize:12,color:"#9CA3AF",fontWeight:600}}>{label}</div>
        {valor
          ? <div style={{fontSize:12,fontWeight:700,color:cor||"#0A1F1A",textAlign:"right",maxWidth:"58%"}}>{valor}</div>
          : <div style={{fontSize:11,color:"#D1D5DB",fontStyle:"italic"}}>Não feito</div>
        }
      </div>
    );

    return (
      <div>
        {!autoOpenQSE && <button onClick={()=>setShowQSE(false)} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Voltar ao Perfil</button>}

        {/* Header */}
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:4}}>
          <div>
            <div style={{fontSize:20,fontWeight:900}}>🪞 Quem Sou Eu</div>
            <div style={{fontSize:12,color:"#9CA3AF",marginTop:2}}>Tudo que você descobriu sobre si mesmo</div>
          </div>
          <button onClick={()=>{
            const resultados=[];
            if(profile?.temperamento) resultados.push({emoji:"🔥",label:"Temperamento",valor:TEMPE_LABELS[profile.temperamento]?.replace(/^[^\s]+\s/,"")||profile.temperamento});
            if(profile?.personalidade) resultados.push({emoji:"🧩",label:"Personalidade",valor:PER_LABELS[profile.personalidade]?.replace(/^[^\s]+\s/,"")||profile.personalidade});
            if(profile?.amor) resultados.push({emoji:"💘",label:"Amor",valor:AMOR_LABELS[profile.amor]?.replace(/^[^\s]+\s/,"")||profile.amor});
            if(profile?.profissional) resultados.push({emoji:"💼",label:"Profissional",valor:PROF_LABELS[profile.profissional]?.replace(/^[^\s]+\s/,"")||profile.profissional});
            if(profile?.sign) resultados.push({emoji:SIGN_EMOJI[profile.sign],label:"Signo",valor:profile.sign});
            shareContent("raioX",{nome:profile?.name||"Você",resultados},`🪞 Quem Sou Eu — KomparAI\n\n${resultados.map(r=>`${r.emoji} ${r.label}: ${r.valor}`).join("\n")}`);
          }} style={{background:"#10B981",color:"#fff",border:"none",borderRadius:20,padding:"8px 14px",fontSize:12,fontWeight:700,cursor:"pointer"}}>📤 Compartilhar</button>
        </div>

        {/* ── IDENTIDADE + JORNADA ── */}
        <Card style={{background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",color:"#fff",marginBottom:14,marginTop:14}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
            <div style={{fontSize:11,color:"#34D399",fontWeight:700,textTransform:"uppercase",letterSpacing:1.5}}>👤 Identidade</div>
            <button onClick={()=>{ setShowQSE(false); setTimeout(()=>setEditMode(true),50); }} style={{background:"#ffffff15",border:"none",borderRadius:20,padding:"4px 12px",fontSize:11,color:"#6EE7B7",cursor:"pointer",fontWeight:700,fontFamily:"inherit"}}>✏️ Editar</button>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:10}}>
            {[
              {l:"Nome",v:profile?.name||"—"},
              {l:"Gênero",v:profile?.gender==="M"?"👨 Homem":profile?.gender==="F"?"👩 Mulher":"—"},
              {l:"Nascimento",v:profile?.birthDay?`${profile.birthDay}/${profile.birthMonth}/${profile.birthYear||"?"}`:"—"},
              {l:"Signo",v:profile?.sign?`${SIGN_EMOJI[profile.sign]} ${profile.sign}`:"—"},
            ].map(item=>(
              <div key={item.l} style={{background:"#ffffff10",borderRadius:10,padding:"10px"}}>
                <div style={{fontSize:9,color:"#9CA3AF",textTransform:"uppercase",letterSpacing:1,marginBottom:3}}>{item.l}</div>
                <div style={{fontSize:13,fontWeight:700,color:"#fff"}}>{item.v}</div>
              </div>
            ))}
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
            {profile?.height && (
              <div style={{background:"#ffffff10",borderRadius:10,padding:"10px"}}>
                <div style={{fontSize:9,color:"#9CA3AF",textTransform:"uppercase",letterSpacing:1,marginBottom:3}}>📏 Altura</div>
                <div style={{fontSize:15,fontWeight:900,color:"#34D399"}}>{profile.height} cm</div>
              </div>
            )}
            {profile?.weight && (
              <div style={{background:"#ffffff10",borderRadius:10,padding:"10px"}}>
                <div style={{fontSize:9,color:"#9CA3AF",textTransform:"uppercase",letterSpacing:1,marginBottom:3}}>⚖️ Peso</div>
                <div style={{fontSize:15,fontWeight:900,color:"#34D399"}}>{profile.weight} kg</div>
              </div>
            )}
          </div>
          {/* Jornada */}
          {vida && (
            <div style={{marginTop:12,borderTop:"1px solid #ffffff15",paddingTop:12}}>
              <div style={{fontSize:11,color:"#34D399",fontWeight:700,textTransform:"uppercase",letterSpacing:1.5,marginBottom:10}}>🧭 Sua Jornada</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
                {[
                  {icon:"🎂",l:"Idade",v:`${vida.anos}a ${vida.meses}m ${vida.dias}d`},
                  {icon:"📅",l:"Nasceu na",v:vida.diaSemNasc},
                  {icon:"⏳",l:"Dias vividos",v:vida.totalDias.toLocaleString("pt-BR")},
                  {icon:"🎉",l:"Próx. aniv.",v:`em ${vida.diasParaAniv}d`},
                ].map(item=>(
                  <div key={item.l} style={{background:"#ffffff10",borderRadius:10,padding:"10px"}}>
                    <div style={{fontSize:14,marginBottom:3}}>{item.icon}</div>
                    <div style={{fontSize:9,color:"#9CA3AF",textTransform:"uppercase",letterSpacing:1}}>{item.l}</div>
                    <div style={{fontSize:12,fontWeight:800,color:"#fff",marginTop:2}}>{item.v}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>

        {/* ── PROGRESSO ── */}
        <Card style={{marginBottom:14}}>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>📊 Meu Progresso</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:14}}>
            <div style={{background:"#F0FDF4",borderRadius:12,padding:"12px",textAlign:"center"}}>
              <div style={{fontSize:26,fontWeight:900,color:"#10B981"}}>{testesFEITOS.length}</div>
              <div style={{fontSize:10,color:"#6B7280",marginTop:2}}>de {totalTestesDisponiveis} testes</div>
              <div style={{fontSize:9,fontWeight:700,color:"#10B981",marginTop:4}}>🧠 TESTES FEITOS</div>
              {scoreBar(pctTestes,"#10B981")}
            </div>
            <div style={{background:"#FFF7ED",borderRadius:12,padding:"12px",textAlign:"center"}}>
              <div style={{fontSize:26,fontWeight:900,color:"#F59E0B"}}>{quizzesJogados.length}</div>
              <div style={{fontSize:10,color:"#6B7280",marginTop:2}}>de {totalQuizzesDisponiveis} quizzes</div>
              <div style={{fontSize:9,fontWeight:700,color:"#F59E0B",marginTop:4}}>🎯 QUIZZES JOGADOS</div>
              {scoreBar(pctQuizzes,"#F59E0B")}
            </div>
          </div>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>🎯 Média de Acertos por Nível</div>
          {[
            {id:"facil",emoji:"🟢",nome:"Fácil",cor:"#10B981",val:mediaFacil},
            {id:"medio",emoji:"🟡",nome:"Médio",cor:"#F59E0B",val:mediaMedio},
            {id:"dificil",emoji:"🔴",nome:"Difícil",cor:"#EF4444",val:mediaDificil},
          ].map(n=>(
            <div key={n.id} style={{marginBottom:10}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                <div style={{fontSize:12,fontWeight:600,color:"#374151"}}>{n.emoji} {n.nome}</div>
                <div style={{fontSize:13,fontWeight:800,color:n.val!=null?n.cor:"#D1D5DB"}}>
                  {n.val!=null?`${medalPct(n.val)} ${n.val}%`:"—"}
                </div>
              </div>
              {scoreBar(n.val||0,n.cor)}
            </div>
          ))}
          {mediaFacil==null&&mediaMedio==null&&mediaDificil==null&&(
            <div style={{fontSize:12,color:"#9CA3AF",textAlign:"center",padding:"8px 0"}}>Jogue quizzes para ver sua média aqui</div>
          )}
        </Card>

        {/* ── PERFIL PSICOLÓGICO ── */}
        <Card style={{marginBottom:14}}>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>🧠 Perfil Psicológico</div>
          <Row label="Temperamento" valor={TEMPE_LABELS[profile?.temperamento]} cor="#EF4444"/>
          <Row label="Personalidade" valor={PER_LABELS[profile?.personalidade]} cor="#6366F1"/>
          <Row label="Linguagem do Amor" valor={AMOR_LABELS[profile?.amor]} cor="#EC4899"/>
          <Row label="Bússola Política" valor={POL_LABELS[profile?.politico]} cor="#3B82F6"/>
          <Row label="Perfil Profissional" valor={PROF_LABELS[profile?.profissional]} cor="#10B981"/>
          <Row label="Líder Histórico" valor={LIDER_LABELS[profile?.lider]} cor="#8B5CF6"/>
          <Row label="Perfil Financeiro" valor={FIN_LABELS[profile?.financeiro]} cor="#F59E0B"/>
          <Row label="Elemento" valor={ELEM_LABELS[profile?.elemento]} cor="#06B6D4"/>
          <Row label="Profissão dos Sonhos" valor={PROF2_LABELS[profile?.profissao]} cor="#10B981"/>
          <Row label="Tipo de Sonhador" valor={SONHADOR_LABELS[profile?.sonhador]} cor="#7C3AED"/>
          <Row label="Nível de Inglês" valor={INGLES_LABELS[profile?.ingles]} cor="#3B82F6"/>
          <Row label="Agilidade Mental" valor={AGILIDADE_LABELS[profile?.agilidade]} cor="#F59E0B"/>
          <Row label="Conhecimento Bíblico" valor={BIBLICO_LABELS[profile?.biblico]} cor="#8B5CF6"/>
          <Row label="MBTI" valor={MBTI_LABELS[profile?.mbti]} cor="#374151"/>
          <Row label="Filósofo" valor={FILOSOFO_LABELS[profile?.filosofo]} cor="#1E40AF"/>
          <Row label="Visão de Mundo" valor={VISAO_LABELS[profile?.visaomundo]} cor="#8B5CF6"/>
          <Row label="Espiritualidade vs Religião" valor={ESPVREL_LABELS[profile?.espvrel]} cor="#10B981"/>
          <Row label="Corrente Filosófica" valor={CORRENTE_LABELS[profile?.corrente]} cor="#374151"/>
          <Row label="Virtude Pilar" valor={VIRTUDE_LABELS[profile?.virtude]} cor="#DC2626"/>
          <Row label="Ikigai" valor={IKIGAI_LABELS[profile?.ikigai]} cor="#F59E0B"/>
          <Row label="Deusa Mitológica" valor={DEUSA_LABELS[profile?.deusa]} cor="#EC4899"/>
          <Row label="Cor Dominante" valor={CORES_LABELS[profile?.cores]} cor="#7C3AED"/>
          <Row label="Seleção que Representa Você" valor={SELECAO_LABELS[profile?.selecao]} cor="#F97316"/>
          <Row label="Estilo de Apego" valor={APEGO_LABELS[profile?.apego]} cor="#10B981"/>
          <Row label="Nível de Ciúme" valor={CIUMENTO_LABELS[profile?.ciumento]} cor="#F59E0B"/>
          <Row label="Perfil Romântico" valor={ROMANTICO_LABELS[profile?.romantico]} cor="#EF4444"/>
          <Row label="Valor Fundamental" valor={VALORES_LABELS[profile?.valores]} cor="#3B82F6"/>
          <Row label="Arquétipo" valor={ARQUETIPO_LABELS[profile?.arquetipo]} cor="#EF4444"/>
          <Row label="Inteligência Emocional" valor={IQ_EMOCIONAL_LABELS[profile?.iq_emocional]} cor="#10B981"/>
          <Row label="Síndrome do Impostor" valor={IMPOSTOR_LABELS[profile?.impostor]} cor="#F59E0B"/>
          <Row label="Estilo de Comunicação" valor={COMUNICACAO_LABELS[profile?.comunicacao]} cor="#3B82F6"/>
          <Row label="Cultura Pop BR" valor={CULTPOP_LABELS[profile?.cultpop]} cor="#10B981"/>
          <Row label="Elemento de Compatibilidade" valor={COMPSIGNOS_LABELS[profile?.compSignos]} cor="#EC4899"/>
        </Card>

        {/* ── MAPA ASTRAL (unificado) ── */}
        <Card style={{marginBottom:14}}>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>✨ Mapa Astral</div>
          <Row label="Signo Ocidental" valor={profile?.sign?`${SIGN_EMOJI[profile.sign]} ${profile.sign}`:null} cor="#7C3AED"/>
          <Row label="Animal Chinês" valor={animal?`${ANIMAIS_CHINESES[animal]?.emoji} ${ANIMAIS_CHINESES[animal]?.animal}`:null} cor="#F59E0B"/>
          <Row label="Rashi Védico" valor={rashi?`${RASHIS_VEDICOS[rashi]?.emoji} ${rashi}`:null} cor="#EC4899"/>
          <Row label="Numerologia" valor={numInfo?`${numInfo.emoji} Nº ${numInfo.numero} — ${numInfo.nome}`:null} cor="#10B981"/>
          <Row label="Tradição Espiritual" valor={profile?.tradicao?`${TRADICAO_EMOJI[profile.tradicao]||"🌟"} ${profile.tradicao}`:null} cor="#8B5CF6"/>
          <Row label="Lua de Hoje" valor={`${getFaseLua().emoji} ${getFaseLua().fase}`} cor="#374151"/>
        </Card>

        {/* ── PRO ── */}
        <Card style={{background:"linear-gradient(135deg,#1E1B4B,#312E81)",marginBottom:14}}>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
            <div style={{width:36,height:36,borderRadius:10,background:"#4F46E520",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20}}>⭐</div>
            <div>
              <div style={{fontSize:13,fontWeight:800,color:"#fff"}}>KomparAI PRO</div>
              <div style={{fontSize:10,color:"#A5B4FC"}}>Em breve · Acesso antecipado</div>
            </div>
            <div style={{marginLeft:"auto",background:"#4F46E5",borderRadius:20,padding:"4px 10px",fontSize:10,fontWeight:800,color:"#fff"}}>EM BREVE</div>
          </div>
          {["📊 Relatório completo de personalidade em PDF","🔮 Mapa astral detalhado e compatibilidade","🤖 Análise de IA com insights personalizados","📈 Evolução do seu perfil ao longo do tempo"].map((f,i)=>(
            <div key={i} style={{display:"flex",alignItems:"center",gap:8,padding:"5px 0",opacity:.7}}>
              <span style={{fontSize:11,color:"#A5B4FC"}}>{f}</span>
            </div>
          ))}
        </Card>

        {testesFEITOS.length < TODOS_CAMPOS.length && (
          <div style={{background:"#FFF7ED",borderRadius:16,padding:"14px",marginBottom:14}}>
            <div style={{fontSize:12,fontWeight:700,color:"#92400E",marginBottom:4}}>📊 Complete seu perfil</div>
            <div style={{fontSize:12,color:"#92400E"}}>{TODOS_CAMPOS.length - testesFEITOS.length} testes pendentes para revelar quem você é por completo.</div>
          </div>
        )}
      </div>
    );
  }

  // ── TELA PRINCIPAL DO PERFIL ────────────────────────────────
  return (
    <div>
      {onBack && <button onClick={onBack} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Voltar ao KomparAI</button>}
      <div style={{fontSize:18,fontWeight:800,marginBottom:4}}>👤 Meu Perfil</div>
      <div style={{fontSize:12,color:"#9CA3AF",marginBottom:16}}>Seus dados e descobertas</div>

      {/* Card exclusivo Quem Sou Eu */}
      <Card onClick={()=>setShowQSE(true)} style={{background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",cursor:"pointer",marginBottom:16}}>
        <div style={{display:"flex",gap:14,alignItems:"center"}}>
          <div style={{width:54,height:54,borderRadius:16,background:"#10B98125",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28}}>🪞</div>
          <div style={{flex:1}}>
            <div style={{fontSize:16,fontWeight:800,color:"#fff"}}>Quem Sou Eu</div>
            <div style={{fontSize:12,color:"#6EE7B7",marginTop:2}}>Identidade · Psicológico · Astral · PRO</div>
            <div style={{display:"flex",gap:10,marginTop:6}}>
              <div style={{fontSize:10,color:"#34D399",fontWeight:700}}>🧠 {testesFEITOS.length}/{totalTestesDisponiveis} testes</div>
              <div style={{fontSize:10,color:"#FCD34D",fontWeight:700}}>🎯 {quizzesJogados.length}/{totalQuizzesDisponiveis} quizzes</div>
            </div>
          </div>
          <span style={{fontSize:18,color:"#10B981"}}>→</span>
        </div>
        <div style={{marginTop:12,background:"#ffffff15",borderRadius:99,height:4,overflow:"hidden"}}>
          <div style={{width:`${Math.round(((testesFEITOS.length+quizzesJogados.length)/(totalTestesDisponiveis+totalQuizzesDisponiveis))*100)}%`,height:"100%",background:"#10B981",borderRadius:99}}/>
        </div>
        <div style={{fontSize:9,color:"#6EE7B7",marginTop:4,textAlign:"right"}}>
          {Math.round(((testesFEITOS.length+quizzesJogados.length)/(totalTestesDisponiveis+totalQuizzesDisponiveis))*100)}% revelado
        </div>
      </Card>

      {/* Formulário de edição */}
      <Label>Nome</Label>
      <input value={form.name||""} onChange={e=>set("name",e.target.value)} placeholder="Seu nome" style={{...inp,marginBottom:14}}/>

      <Label>Gênero</Label>
      <div style={{display:"flex",gap:10,marginBottom:14}}>
        {[{v:"M",l:"👨 Homem"},{v:"F",l:"👩 Mulher"}].map(o=>(
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

      <Label>Altura (cm)</Label>
      <input type="number" inputMode="numeric" value={form.height||""}
        onChange={e=>set("height",sanitizeInt(e.target.value))}
        onBlur={e=>set("height",clampInt(e.target.value,50,250))}
        placeholder="Ex: 175" style={{...inp,marginBottom:14}}/>

      <Label>Peso (kg)</Label>
      <input type="number" inputMode="numeric" value={form.weight||""}
        onChange={e=>set("weight",sanitizeInt(e.target.value))}
        onBlur={e=>set("weight",clampInt(e.target.value,20,300))}
        placeholder="Ex: 70" style={{...inp,marginBottom:14}}/>

      <Label>Tradição Espiritual</Label>
      <select value={form.tradicao||""} onChange={e=>set("tradicao",e.target.value)}
        style={{...inp,marginBottom:20,color:form.tradicao?"#0A1F1A":"#9CA3AF",WebkitAppearance:"none"}}>
        <option value="">Selecione (ou faça o teste)</option>
        {TRADICOES_DISPONIVEIS.map(t=><option key={t} value={t}>{TRADICAO_EMOJI[t]||"🌟"} {t}</option>)}
      </select>

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
  const [tab,setTab] = useState("komparai");
  const [testesInitialAba,setTestesInitialAba] = useState(null);
  const [testesAutoStart,setTestesAutoStart] = useState(null);
  const [espiritualidadeInitialAba,setEspiritualidadeInitialAba] = useState(null);
  const [profile,setProfile] = useState(initial);
  const [toast,setToast] = useState({msg:"",type:"success"});

  useEffect(()=>{ saveProfileLS(profile); }, [profile]);

  // 📱 PWA: injeta manifest + meta tags e registra o service worker (offline + instalável).
  // Feito via JS para não precisar editar o index.html.
  useEffect(() => {
    const head = document.head;
    const ensure = (selector, create) => { if (!document.querySelector(selector)) head.appendChild(create()); };
    const link = (rel, href, extra={}) => () => Object.assign(document.createElement("link"), {rel, href, ...extra});
    const meta = (name, content) => () => Object.assign(document.createElement("meta"), {name, content});

    ensure('link[rel="manifest"]', link("manifest", "/manifest.json"));
    ensure('meta[name="theme-color"]', meta("theme-color", "#10B981"));
    ensure('link[rel="apple-touch-icon"]', link("apple-touch-icon", "/apple-touch-icon.png"));
    ensure('meta[name="apple-mobile-web-app-capable"]', meta("apple-mobile-web-app-capable", "yes"));
    ensure('meta[name="mobile-web-app-capable"]', meta("mobile-web-app-capable", "yes"));
    ensure('meta[name="apple-mobile-web-app-status-bar-style"]', meta("apple-mobile-web-app-status-bar-style", "default"));
    ensure('meta[name="apple-mobile-web-app-title"]', meta("apple-mobile-web-app-title", "KomparAI"));

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js").catch(() => {});
    }
  }, []);


  // Limpa flags de "initialAba" quando troca de tab (para não reabrir o teste sempre que entrar em Alma)
  useEffect(()=>{
    if (tab !== "espiritualidade") setEspiritualidadeInitialAba(null);
    if (tab !== "testes" && tab !== "quizzes") { setTestesInitialAba(null); setTestesAutoStart(null); }
  }, [tab]);

  const showToast = (msg,type="success") => setToast({msg,type});
  const hideToast = () => setToast({msg:"",type:"success"});

  const finishOnboarding = (data) => { setProfile(data); setScreen("app"); showToast(`Bem-vindo${data.gender==="F"?"a":""}, ${data.name}!`); };
  const saveProfile = (p) => { setProfile(p); showToast("Perfil salvo!"); };
  const saveToProfile = (extra) => { setProfile(prev => ({...(prev||{}), ...extra})); showToast("Salvo no perfil!"); };
  const onTestDone = (d) => setProfile(prev => ({...(prev||{}), temperamento:d}));
  const resetApp = () => { if (window.confirm("Limpar todos os dados?")) { saveProfileLS(null); setProfile(null); setScreen("onboarding"); }};
  const goCoincidence = () => setTab("komparai");

  const NAV = [
    {id:"komparai",    emoji:"🪞", label:"KomparAI"},
    {id:"testes",      emoji:"🧠", label:"Testes"},
    {id:"quizzes",     emoji:"🎯", label:"Quizzes"},
    {id:"hoje",        emoji:"🏠", label:"Hoje"},
    {id:"meuPerfil",   emoji:"👤", label:"Meu Perfil"},
    {id:"astral",      emoji:"✨", label:"Astral"},
    {id:"espiritualidade", emoji:"🙏", label:"Alma"},
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
      <style>{`*{box-sizing:border-box}@keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes ktPulse{0%,100%{transform:scale(1);box-shadow:0 6px 20px rgba(16,185,129,.45)}50%{transform:scale(1.035);box-shadow:0 10px 30px rgba(16,185,129,.7)}}@keyframes ktSpin{to{transform:rotate(360deg)}}@keyframes ktSweep{0%{transform:translateY(-120%)}100%{transform:translateY(120%)}}@keyframes ktBlink{0%,100%{opacity:.35}50%{opacity:1}}@keyframes ktFadeLine{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}@keyframes ktPop{0%{transform:scale(1)}40%{transform:scale(1.06)}70%{transform:scale(.98)}100%{transform:scale(1)}}@keyframes ktShake{0%,100%{transform:translateX(0)}20%{transform:translateX(-7px)}40%{transform:translateX(7px)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}@keyframes ktSlideIn{from{opacity:0;transform:translateX(28px)}to{opacity:1;transform:translateX(0)}}@keyframes ktBounceIn{0%{opacity:0;transform:scale(.4)}55%{opacity:1;transform:scale(1.12)}75%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes ktConfFall{0%{opacity:1;transform:translateY(-12px) rotate(0)}100%{opacity:0;transform:translateY(380px) rotate(540deg)}}@keyframes ktBadgePop{0%{opacity:0;transform:scale(.3) rotate(-12deg)}60%{opacity:1;transform:scale(1.15) rotate(4deg)}100%{transform:scale(1) rotate(0)}}input,select,button{font-family:'Sora',sans-serif}input:focus,select:focus{outline:none!important;border-color:#10B981!important}select{-webkit-appearance:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{-webkit-appearance:none}`}</style>
      <div style={{maxWidth:440,margin:"0 auto",padding:"20px 16px 0",animation:"fadeUp .35s"}}>
        {tab==="komparai" && <CoincidenceTest profile={profile} onSaveToProfile={saveToProfile} onBack={()=>setTab("komparai")} goPerfil={()=>setTab("perfil")} goTest={(key)=>{ setTestesAutoStart(key); setTab("testes"); }}/>}
        {tab==="hoje" && <HomeScreen profile={profile} goCoincidence={()=>setTab("komparai")} goTest={()=>setTab("testes")} goEspiritualidade={()=>setTab("espiritualidade")} goQuizzes={()=>setTab("quizzes")}/>}
        {tab==="testes" && <TestesScreen profile={profile} onComplete={onTestDone} goCoincidence={()=>setTab("komparai")} onSaveExtra={saveToProfile} initialAba={testesInitialAba} autoStart={testesAutoStart} soTestes={true} goAstral={testesInitialAba==="humor" ? ()=>{setTestesInitialAba(null); setTab("astral");} : null} goEspiritualidadeTeste={()=>{setEspiritualidadeInitialAba("perguntas"); setTab("espiritualidade");}}/>}
        {tab==="quizzes" && <TestesScreen profile={profile} onComplete={onTestDone} goCoincidence={()=>setTab("komparai")} onSaveExtra={saveToProfile} soQuizzes={true} goAstral={null} goEspiritualidadeTeste={()=>{setEspiritualidadeInitialAba("perguntas"); setTab("espiritualidade");}}/>}
        {tab==="coincidencia" && <CoincidenceTest profile={profile} onSaveToProfile={saveToProfile} onBack={()=>setTab("komparai")} goTest={(key)=>{ setTestesAutoStart(key); setTab("testes"); }}/>}
        {tab==="astral" && <AstralScreen profile={profile} goHumor={()=>{setTestesInitialAba("humor"); setTab("testes");}} goTest={(key)=>{ setTestesAutoStart(key); setTab("testes"); }} goQuizzes={()=>setTab("quizzes")}/>}
        {tab==="espiritualidade" && <EspiritualidadeScreen profile={profile} onSaveTradicao={(t)=>saveToProfile({tradicao:t})} initialTesteAba={espiritualidadeInitialAba} goTest={(key)=>{ setTestesAutoStart(key); setTab("testes"); }}/>}
        {tab==="meuPerfil" && <PerfilScreen profile={profile} onSave={saveProfile} onReset={resetApp} onBack={()=>setTab("hoje")} autoOpenQSE={true}/>}
        {tab==="perfil" && <PerfilScreen profile={profile} onSave={saveProfile} onReset={resetApp} onBack={()=>setTab("komparai")}/>}
      </div>
      <div style={{position:"fixed",bottom:0,left:0,right:0,background:"#fff",borderTop:"1px solid #F0F0F0",display:"flex",justifyContent:"space-around",alignItems:"center",padding:"8px 0 20px",boxShadow:"0 -4px 20px #0000000a",zIndex:100}}>
        {NAV.map(n=>{
          const isActive = tab===n.id||(tab==="coincidencia"&&n.id==="komparai")||(tab==="perfil"&&n.id==="komparai")||(tab==="meuPerfil"&&n.id==="meuPerfil");
          return (
            <button key={n.id} onClick={()=>setTab(n.id)} style={{background:"transparent",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:2,padding:"4px 2px",borderRadius:12,fontFamily:"inherit",flex:1}}>
              <span style={{fontSize:18,filter:isActive?"none":"grayscale(1) opacity(.5)"}}>{n.emoji}</span>
              <span style={{fontSize:8,fontWeight:700,color:isActive?"#10B981":"#9CA3AF",letterSpacing:.2,textTransform:"uppercase"}}>{n.label}</span>
            </button>
          );
        })}
      </div>
      <Toast message={toast.msg} type={toast.type} onClose={hideToast}/>
    </div>
  );
}
