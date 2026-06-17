export const SANTOS_FIXOS = {
  "1-1":  { nome:"Santa Maria, Mãe de Deus", emoji:"🕊️", tradicao:"Católica", desc:"Rainha da paz. Padroeira da misericórdia e proteção." },
  "6-1":  { nome:"Santos Reis Magos", emoji:"⭐", tradicao:"Católica", desc:"Baltazar, Gaspar e Melchior — símbolos da busca pela luz." },
  "17-1": { nome:"Santo Antão Abade", emoji:"🏜️", tradicao:"Católica", desc:"Pai do monasticismo. Venceu tentações no deserto." },
  "21-1": { nome:"Santa Inês", emoji:"🐑", tradicao:"Católica", desc:"Mártir jovem, símbolo de pureza e coragem." },
  "24-1": { nome:"São Francisco de Sales", emoji:"✍️", tradicao:"Católica", desc:"Padroeiro dos jornalistas e escritores." },
  "28-1": { nome:"São Tomás de Aquino", emoji:"📚", tradicao:"Católica", desc:"Doutor Angélico. Maior filósofo-teólogo da história cristã." },
  "2-2":  { nome:"Nossa Senhora dos Navegantes / Iemanjá", emoji:"🌊", tradicao:"Universal", desc:"Mãe das águas. Protetora de quem enfrenta tempestades." },
  "14-2": { nome:"São Valentim", emoji:"💝", tradicao:"Católica", desc:"Padroeiro dos namorados. Amor que vence o medo." },
  "19-3": { nome:"São José", emoji:"🔨", tradicao:"Católica", desc:"Padroeiro dos trabalhadores. Força na simplicidade." },
  "4-3":  { nome:"São Casimiro", emoji:"👑", tradicao:"Católica", desc:"Príncipe que escolheu servir a Deus." },
  "17-3": { nome:"São Patrício", emoji:"☘️", tradicao:"Católica", desc:"Apóstolo da Irlanda. Símbolo de fé que transforma nações." },
  "25-3": { nome:"Anunciação de Maria", emoji:"🌹", tradicao:"Católica", desc:"O dia em que um 'sim' mudou a história da humanidade." },
  "3-4":  { nome:"São Benedito", emoji:"⚕️", tradicao:"Católica", desc:"Padroeiro dos negros no Brasil. Amor que não tem cor." },
  "23-4": { nome:"São Jorge / Ogum", emoji:"⚔️", tradicao:"Universal", desc:"O guerreiro da luz. Coragem que enfrenta o que outros recuam." },
  "13-6": { nome:"Santo Antônio", emoji:"💑", tradicao:"Católica", desc:"Santo casamenteiro. Intercessor dos humildes e perdidos." },
  "24-6": { nome:"São João Batista / Xangô", emoji:"🔥", tradicao:"Universal", desc:"Voz que clama no deserto. Justiça que não se cala." },
  "29-6": { nome:"São Pedro e São Paulo", emoji:"⛵", tradicao:"Católica", desc:"Pedra da Igreja e Apóstolo das nações. Coragem e transformação." },
  "25-7": { nome:"São Cristóvão", emoji:"🚗", tradicao:"Católica", desc:"Padroeiro dos motoristas. Proteção nas estradas da vida." },
  "15-8": { nome:"Nossa Senhora Aparecida / Oxum", emoji:"💛", tradicao:"Universal", desc:"Mãe do Brasil. Amor que acolhe sem julgamento." },
  "12-10":{ nome:"Nossa Senhora Aparecida", emoji:"🇧🇷", tradicao:"Católica", desc:"Padroeira do Brasil. Nossa Mãe encontrada nas águas." },
  "1-11": { nome:"Todos os Santos", emoji:"✨", tradicao:"Católica", desc:"Celebração de todos os que viveram na santidade." },
  "2-11": { nome:"Finados", emoji:"🕯️", tradicao:"Universal", desc:"Memória e gratidão pelos que partiram. Amor que não morre." },
  "4-12": { nome:"Santa Bárbara / Iansã", emoji:"⚡", tradicao:"Universal", desc:"Guerreira dos ventos. Coragem que não recua nem na tempestade." },
  "8-12": { nome:"Imaculada Conceição", emoji:"🌸", tradicao:"Católica", desc:"Pureza como estado de alma. Abertura total ao divino." },
  "13-12":{ nome:"Santa Luzia", emoji:"👁️", tradicao:"Católica", desc:"Padroeira dos olhos. Que possas ver além do visível." },
  "25-12":{ nome:"Natal — Nascimento de Jesus", emoji:"⭐", tradicao:"Universal", desc:"Luz que veio ao mundo nas circunstâncias mais simples." },
};

// Fallback por número do dia (para dias sem santo específico)
export const FALLBACK_SANTOS = [
  { nome:"Anjos da Guarda", emoji:"👼", tradicao:"Universal", desc:"Mensageiros de luz que caminham ao seu lado hoje." },
  { nome:"Espíritos de Luz", emoji:"🌟", tradicao:"Universal", desc:"Entidades elevadas que guiam passos na escuridão." },
  { nome:"Ancestrais", emoji:"🌿", tradicao:"Universal", desc:"Aqueles que vieram antes e abriram o caminho que você trilha." },
  { nome:"Os Mestres Ascensionados", emoji:"☁️", tradicao:"Universal", desc:"Almas que completaram a jornada e guiam as que ainda caminham." },
  { nome:"Nossa Senhora", emoji:"🌹", tradicao:"Católica", desc:"Mãe universal. Acolhimento que não tem fim nem condição." },
  { nome:"O Espírito Santo", emoji:"🕊️", tradicao:"Cristã", desc:"Fogo interior. Inspiração que ilumina a mente e aquece o coração." },
  { nome:"Os Bodhisattvas", emoji:"☸️", tradicao:"Budista", desc:"Seres iluminados que adiaram o nirvana para ajudar a humanidade." },
];

export const getSantoDoDiaCompleto = (day, month) => {
  const key = `${day}-${month}`;
  if (SANTOS_FIXOS[key]) return SANTOS_FIXOS[key];
  // Fallback rotativo
  return FALLBACK_SANTOS[(day + month) % FALLBACK_SANTOS.length];
};

// ============================================================
// DATA: horoscopos.js
// ============================================================
// ============================================================
// KOMPARAI — HORÓSCOPOS EXTRAS
// 4 sistemas astrológicos além do ocidental
// ============================================================
//
// 1. GREGO        — Zodíaco helênico (planeta regente + mito)
// 2. CHINÊS       — 12 animais por ano de nascimento
// 3. INDIANO      — Rashis védicos simplificados
// 4. JUDAICO      — Data hebraica + festividades
//
// ============================================================

// ============================================================
// 1. HORÓSCOPO GREGO (Zodíaco Helênico)
// ============================================================
// Os signos gregos são os mesmos do ocidental, mas com profundidade mitológica
export const SANTO_DO_DIA = {
  "1-1":   "Santa Maria, Mãe de Deus",
  "2-1":   "São Basílio Magno",
  "3-1":   "Santa Genoveva",
  "4-1":   "Santa Isabel Ana Seton",
  "5-1":   "São João Neumann",
  "7-1":   "São Raimundo de Penafort",
  "8-1":   "São Severino",
  "9-1":   "São Juliano",
  "10-1":  "Santo Aldo",
  "11-1":  "Santo Higino",
  "12-1":  "Santa Marciana",
  "13-1":  "São Hilário",
  "14-1":  "São Félix de Nola",
  "15-1":  "São Mauro",
  "16-1":  "São Marcelo",
  "17-1":  "Santo Antão",
  "18-1":  "Santa Margarida da Hungria",
  "19-1":  "São Mário",
  "21-1":  "Santa Inês",
  "22-1":  "São Vicente Pallotti",
  "23-1":  "São Raimundo",
  "24-1":  "São Francisco de Sales",
  "26-1":  "São Timóteo e São Tito",
  "27-1":  "Santa Ângela Merici",
  "28-1":  "São Tomás de Aquino",
  "29-1":  "São Valério",
  "30-1":  "Santa Martina",
  // ... (em produção: completar todos os 365 dias)
  // Aqui demonstrado o padrão. App pode usar fallback "Anjo da Guarda do dia".
};

export const getSantoDoDia = (day, month) => SANTO_DO_DIA[`${day}-${month}`] || null;
