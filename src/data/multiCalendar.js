// ============================================================
// KOMPARAI — CALENDÁRIOS MUNDIAIS
// 6 sistemas: Ocidental, Hebraico, Japonês, Etíope, Islâmico, Chinês
// ============================================================
// Cálculos com precisão aproximada (sem libs externas)

const DIAS_PT = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
const MESES_PT = ["","Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

// ============================================================
// 1. OCIDENTAL (Gregoriano)
// ============================================================
export const getOcidental = (date = new Date()) => {
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();
  const dow = DIAS_PT[date.getDay()];
  return {
    emoji: "📅",
    nome: "Gregoriano",
    formatado: `${dow}, ${d} de ${MESES_PT[m]} de ${y}`,
    curto: `${y}`,
    nota: "Calendário gregoriano (usado no Brasil)",
    curiosidade: "Criado pelo Papa Gregório XIII em 1582. Corrigiu o Calendário Juliano que acumulava 10 dias de erro. Hoje é o padrão mundial.",
  };
};

// ============================================================
// 2. HEBRAICO (Judaico) — cálculo simplificado para 2026
// ============================================================
const HEBREW_2026 = [
  { greg:"2025-09-23", mes:"Tishrei",  ano:5786 },
  { greg:"2025-10-23", mes:"Cheshvan", ano:5786 },
  { greg:"2025-11-21", mes:"Kislev",   ano:5786 },
  { greg:"2025-12-20", mes:"Tevet",    ano:5786 },
  { greg:"2026-01-19", mes:"Shevat",   ano:5786 },
  { greg:"2026-02-18", mes:"Adar",     ano:5786 },
  { greg:"2026-03-19", mes:"Nissan",   ano:5786 },
  { greg:"2026-04-18", mes:"Iyar",     ano:5786 },
  { greg:"2026-05-17", mes:"Sivan",    ano:5786 },
  { greg:"2026-06-16", mes:"Tamuz",    ano:5786 },
  { greg:"2026-07-15", mes:"Av",       ano:5786 },
  { greg:"2026-08-14", mes:"Elul",     ano:5786 },
  { greg:"2026-09-12", mes:"Tishrei",  ano:5787 },
];

export const getHebraico = (date = new Date()) => {
  let atual = HEBREW_2026[0];
  for (const p of HEBREW_2026) {
    if (new Date(p.greg) <= date) atual = p;
    else break;
  }
  const startDate = new Date(atual.greg);
  const dia = Math.floor((date - startDate) / 86400000) + 1;
  return {
    emoji: "✡️",
    nome: "Hebraico",
    formatado: `${dia} de ${atual.mes} de ${atual.ano}`,
    curto: `${dia} ${atual.mes} ${atual.ano}`,
    nota: "Calendário luni-solar judaico",
    curiosidade: "Conta desde a criação do mundo segundo a tradição judaica (3760 a.C.). Base para festas como Rosh Hashaná e Yom Kippur.",
  };
};

// ============================================================
// 3. JAPONÊS (Reiwa) — era atual desde 01/05/2019
// ============================================================
export const getJapones = (date = new Date()) => {
  const REIWA_START = new Date(2019, 4, 1); // 01/05/2019
  const anoReiwa = date.getFullYear() - REIWA_START.getFullYear() + 1;
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const MESES_JP = ["","睦月 (Mutsuki)","如月 (Kisaragi)","弥生 (Yayoi)","卯月 (Uzuki)","皐月 (Satsuki)","水無月 (Minazuki)","文月 (Fumizuki)","葉月 (Hazuki)","長月 (Nagatsuki)","神無月 (Kannazuki)","霜月 (Shimotsuki)","師走 (Shiwasu)"];
  return {
    emoji: "🇯🇵",
    nome: "Japonês",
    formatado: `Era Reiwa ${anoReiwa}, ${d} de ${MESES_JP[m]}`,
    curto: `令和${anoReiwa}年${m}月${d}日`,
    nota: "Era Reiwa (令和) começou em 2019",
    curiosidade: "Cada era é nomeada pelo reinado do Imperador. 'Reiwa' significa 'Harmonia Bela'. Começou em 2019 com o Imperador Naruhito.",
  };
};

// ============================================================
// 4. ETÍOPE (Ge'ez)
// ============================================================
// Calendário etíope: 7-8 anos atrás do gregoriano, ano começa em 11/setembro
const MESES_ET = ["Meskerem","Tikimt","Hidar","Tahsas","Tir","Yekatit","Megabit","Miazia","Ginbot","Sene","Hamle","Nehasse","Pagume"];

export const getEtiope = (date = new Date()) => {
  // Aproximação: ano etíope = gregoriano - 7 (após 11/09) ou - 8 (antes)
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const anoEt = (m > 9 || (m === 9 && d >= 11)) ? y - 7 : y - 8;

  // Início do ano etíope: 11 de setembro (12/09 em ano bissexto)
  const inicioEt = new Date(anoEt + 7, 8, 11); // 11/09 do ano gregoriano correspondente
  let diff = Math.floor((date - inicioEt) / 86400000);
  if (diff < 0) diff += 365;

  const mesEt = Math.floor(diff / 30);
  const diaEt = (diff % 30) + 1;
  const nomeMes = MESES_ET[Math.min(mesEt, 12)];

  return {
    emoji: "🇪🇹",
    nome: "Etíope",
    formatado: `${diaEt} de ${nomeMes} de ${anoEt}`,
    curto: `${diaEt} ${nomeMes} ${anoEt}`,
    nota: "Calendário Ge'ez (Etiópia)",
    curiosidade: "13 meses no ano — 12 de 30 dias + 1 de 5 ou 6 dias. Por isso a Etiópia tem o slogan '13 meses de sol'. 7 anos atrás do Gregoriano.",
  };
};

// ============================================================
// 5. ISLÂMICO (Hijri) — cálculo aproximado
// ============================================================
// Aproximação Tabular Hijri (precisão de 1-2 dias)
const MESES_HIJRI = ["Muharram","Safar","Rabi al-awwal","Rabi al-thani","Jumada al-awwal","Jumada al-thani","Rajab","Sha'ban","Ramadan","Shawwal","Dhu al-Qadah","Dhu al-Hijjah"];

export const getIslamico = (date = new Date()) => {
  // Algoritmo Tabular Hijri (calendar-based, ~99% accurate)
  const jd = Math.floor((date.getTime() / 86400000) + 2440587.5);
  const days = jd - 1948440 + 10632;
  const n = Math.floor((days - 1) / 10631);
  const days2 = days - 10631 * n + 354;
  const j = Math.floor((10985 - days2) / 5316) * Math.floor(50 * days2 / 17719) +
            Math.floor(days2 / 5670) * Math.floor(43 * days2 / 15238);
  const days3 = days2 - Math.floor((30 - j) / 15) * Math.floor((17719 * j) / 50) -
                Math.floor(j / 16) * Math.floor((15238 * j) / 43) + 29;
  const month = Math.floor(24 * days3 / 709);
  const day = days3 - Math.floor(709 * month / 24);
  const year = 30 * n + j - 30;

  const monthIdx = Math.max(0, Math.min(11, month - 1));
  return {
    emoji: "☪️",
    nome: "Islâmico",
    formatado: `${day} de ${MESES_HIJRI[monthIdx]} de ${year} AH`,
    curto: `${day}/${monthIdx+1}/${year} AH`,
    nota: "Calendário lunar Hijri",
    curiosidade: "Baseado exclusivamente na Lua. Tem 354 dias — 11 dias a menos que o gregoriano. O Ramadã migra por todas as estações ao longo dos anos.",
  };
};

// ============================================================
// 6. CHINÊS — animal do ano + elemento
// ============================================================
const ANIMAIS_CHINA = ["Macaco","Galo","Cachorro","Porco","Rato","Boi","Tigre","Coelho","Dragão","Serpente","Cavalo","Carneiro"];
const EMOJI_ANIMAIS = {"Macaco":"🐒","Galo":"🐓","Cachorro":"🐕","Porco":"🐖","Rato":"🐀","Boi":"🐂","Tigre":"🐅","Coelho":"🐇","Dragão":"🐉","Serpente":"🐍","Cavalo":"🐎","Carneiro":"🐐"};
const ELEMENTOS = ["Metal","Metal","Água","Água","Madeira","Madeira","Fogo","Fogo","Terra","Terra"];

export const getChines = (date = new Date()) => {
  const y = date.getFullYear();
  const animal = ANIMAIS_CHINA[y % 12];
  const elemento = ELEMENTOS[y % 10];
  const emojiAnimal = EMOJI_ANIMAIS[animal];
  return {
    emoji: "🐉",
    nome: "Chinês",
    formatado: `Ano do ${animal} ${emojiAnimal} (${elemento})`,
    curto: `${animal} ${emojiAnimal}`,
    nota: "Calendário lunar chinês (ciclo de 12 animais)",
    curiosidade: "Um dos mais antigos em uso contínuo. Combina ciclos solares e lunares. Cada ano tem um animal e um elemento (ex: Cavalo de Fogo).",
  };
};

// ============================================================
// 7. ROMANO (Ab Urbe Condita) — desde a fundação de Roma (753 a.C.)
// ============================================================
export const getRomano = (date = new Date()) => {
  const ano = date.getFullYear() + 753;
  return {
    emoji: "🏛️",
    nome: "Romano (AUC)",
    formatado: `Ano ${ano} AUC`,
    curto: `${ano} AUC`,
    nota: "Ab Urbe Condita — desde a fundação de Roma",
    curiosidade: "Ab Urbe Condita significa 'desde a fundação da cidade' (753 a.C.). Usado por romanos por mais de 1.000 anos. Júlio César reformou o calendário em 46 a.C.",
  };
};

// ============================================================
// 8. PERSA (Solar Hijri) — calendário mais preciso do mundo
// ============================================================
export const getPersa = (date = new Date()) => {
  // Persa: ano começa em 21/março. 622 d.C. = ano 1
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  // Se ainda não chegou no equinócio (~21/março), está no ano anterior persa
  const anoPersa = (m > 3 || (m === 3 && d >= 21)) ? y - 621 : y - 622;
  return {
    emoji: "☀️",
    nome: "Persa",
    formatado: `Ano ${anoPersa} SH (Solar Hijri)`,
    curto: `${anoPersa} SH`,
    nota: "Calendário Solar Hijri (Irã, Afeganistão)",
    curiosidade: "O mais preciso do mundo — erra apenas 1 dia a cada 3,8 milhões de anos. Criado pelo poeta e matemático Omar Khayyam em 1079 d.C.",
  };
};

// ============================================================
// 9. ASSÍRIO — desde criação do universo (4750 a.C.)
// ============================================================
export const getAssirio = (date = new Date()) => {
  const ano = date.getFullYear() + 4749;
  return {
    emoji: "🦅",
    nome: "Assírio",
    formatado: `Ano ${ano} (Era Assíria)`,
    curto: `${ano}`,
    nota: "Calendário assírio cristão",
    curiosidade: "Conta desde a criação do universo segundo a tradição assíria (4750 a.C.). Ainda usado pela comunidade assíria cristã espalhada pelo mundo.",
  };
};

// ============================================================
// 10. ARMÊNIO — desde Concílio de Dvin (552 d.C.)
// ============================================================
export const getArmenio = (date = new Date()) => {
  const ano = date.getFullYear() - 551;
  return {
    emoji: "🏔️",
    nome: "Armênio",
    formatado: `Ano ${ano} (Era Armênia)`,
    curto: `${ano}`,
    nota: "Calendário nacional armênio",
    curiosidade: "Começou em 552 d.C. no Concílio de Dvin. É símbolo da identidade nacional armênia — um dos povos mais antigos do mundo.",
  };
};

// ============================================================
// 11. BUDISTA — desde morte do Buda (543 a.C.)
// ============================================================
export const getBudista = (date = new Date()) => {
  const ano = date.getFullYear() + 543;
  return {
    emoji: "☸️",
    nome: "Budista",
    formatado: `Ano ${ano} BE (Era Budista)`,
    curto: `${ano} BE`,
    nota: "Calendário budista (Tailândia, Sri Lanka)",
    curiosidade: "Conta desde a morte do Buda Gautama (543 a.C.). Calendário oficial da Tailândia, Camboja e Sri Lanka até hoje.",
  };
};

// ============================================================
// 12. COREANO (Dangi) — desde Dangun (2333 a.C.)
// ============================================================
export const getCoreano = (date = new Date()) => {
  const ano = date.getFullYear() + 2333;
  return {
    emoji: "🌸",
    nome: "Coreano (Dangi)",
    formatado: `Ano ${ano} (Era Dangi)`,
    curto: `${ano}`,
    nota: "Calendário tradicional coreano",
    curiosidade: "Conta desde 2333 a.C., fundação lendária da Coreia pelo rei-deus Dangun. Usado até hoje em documentos formais da Coreia do Sul.",
  };
};

// ============================================================
// 13. HOLOCENO — desde início da civilização (10000 a.C.)
// ============================================================
export const getHoloceno = (date = new Date()) => {
  const ano = date.getFullYear() + 10000;
  return {
    emoji: "🌍",
    nome: "Holoceno",
    formatado: `Ano ${ano.toLocaleString('pt-BR')} HE`,
    curto: `${ano.toLocaleString('pt-BR')} HE`,
    nota: "Era Holocena (era humana)",
    curiosidade: "Proposto pelo cientista Cesare Emiliani em 1993. Marca o início da civilização humana (10000 a.C.). Inclui toda a história escrita da humanidade.",
  };
};

// ============================================================
// 14. GEOLÓGICO — idade da Terra
// ============================================================
export const getGeologico = (date = new Date()) => {
  const ano = (date.getFullYear() + 4540000000).toLocaleString('pt-BR');
  return {
    emoji: "🪐",
    nome: "Geológico",
    formatado: `${ano} anos`,
    curto: `${ano}`,
    nota: "Idade aproximada da Terra",
    curiosidade: "A idade real da Terra. Escala cósmica que humilha qualquer outra contagem. Para comparar: toda história humana é menos de 0,003% desse número.",
  };
};

// ============================================================
// FUNÇÃO PRINCIPAL — Todos os 14 calendários do dia
// ============================================================
export const getTodosCalendarios = (date = new Date()) => [
  getOcidental(date),
  getChines(date),
  getRomano(date),
  getIslamico(date),
  getPersa(date),
  getAssirio(date),
  getArmenio(date),
  getHebraico(date),
  getBudista(date),
  getCoreano(date),
  getJapones(date),
  getEtiope(date),
  getHoloceno(date),
  getGeologico(date),
];
