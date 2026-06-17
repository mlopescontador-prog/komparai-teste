export const MESES_HEBRAICOS = [
  "Tishrei","Cheshvan","Kislev","Tevet","Shevat","Adar",
  "Nissan","Iyar","Sivan","Tamuz","Av","Elul"
];

// Tabela aproximada de equivalências (início do mês hebraico) para 2026
// Formato: { dataGregoriana: [mesHebraico, anoHebraico] }
export const HEBREW_MONTH_STARTS_2026 = [
  { greg:"2025-09-23", hebMonth:"Tishrei",  hebYear:5786 },
  { greg:"2025-10-23", hebMonth:"Cheshvan", hebYear:5786 },
  { greg:"2025-11-21", hebMonth:"Kislev",   hebYear:5786 },
  { greg:"2025-12-20", hebMonth:"Tevet",    hebYear:5786 },
  { greg:"2026-01-19", hebMonth:"Shevat",   hebYear:5786 },
  { greg:"2026-02-18", hebMonth:"Adar",     hebYear:5786 },
  { greg:"2026-03-19", hebMonth:"Nissan",   hebYear:5786 },
  { greg:"2026-04-18", hebMonth:"Iyar",     hebYear:5786 },
  { greg:"2026-05-17", hebMonth:"Sivan",    hebYear:5786 },
  { greg:"2026-06-16", hebMonth:"Tamuz",    hebYear:5786 },
  { greg:"2026-07-15", hebMonth:"Av",       hebYear:5786 },
  { greg:"2026-08-14", hebMonth:"Elul",     hebYear:5786 },
  { greg:"2026-09-12", hebMonth:"Tishrei",  hebYear:5787 },
];

export const getHebrewDate = (gregDate) => {
  const target = new Date(gregDate);
  let current = HEBREW_MONTH_STARTS_2026[0];
  for (const period of HEBREW_MONTH_STARTS_2026) {
    if (new Date(period.greg) <= target) current = period;
    else break;
  }
  const startDate = new Date(current.greg);
  const dayOfHebMonth = Math.floor((target - startDate) / 86400000) + 1;
  return {
    day: dayOfHebMonth,
    month: current.hebMonth,
    year: current.hebYear,
    formatted: `${dayOfHebMonth} de ${current.hebMonth} de ${current.hebYear}`,
  };
};

// ============================================================
// FRASE DIÁRIA PARA CADA HORÓSCOPO (rotativa)
// ============================================================
export const FIXED_DATES = [
  // ─── JANEIRO ─────────────────────────────────────────────
  { day:1,  month:1,  tradicao:"Católica",  titulo:"Solenidade de Maria, Mãe de Deus",
    desc:"Início do ano sob a proteção de Maria. Dia Mundial da Paz na Igreja Católica.", cor:"#1E40AF" },
  { day:1,  month:1,  tradicao:"Universal", titulo:"Ano Novo",
    desc:"Renovação espiritual celebrada em quase todas as tradições do mundo.", cor:"#10B981" },
  { day:6,  month:1,  tradicao:"Católica",  titulo:"Epifania — Dia de Reis",
    desc:"Celebra a visita dos Três Reis Magos ao Menino Jesus. Encerra o ciclo natalino.", cor:"#1E40AF" },
  { day:7,  month:1,  tradicao:"Ortodoxa",  titulo:"Natal Ortodoxo",
    desc:"Igrejas ortodoxas (Rússia, Sérvia, Etiópia) celebram o nascimento de Cristo nesta data.", cor:"#1E40AF" },
  { day:20, month:1,  tradicao:"Católica",  titulo:"Dia de São Sebastião",
    desc:"Padroeiro do Rio de Janeiro. Mártir cristão, símbolo de fé e resistência.", cor:"#1E40AF" },
  { day:20, month:1,  tradicao:"Umbanda",   titulo:"Dia de Oxóssi",
    desc:"Orixá das matas e da caça, sincretizado com São Sebastião.", cor:"#16A34A" },
  { day:25, month:1,  tradicao:"Católica",  titulo:"Conversão de São Paulo",
    desc:"Celebra a conversão do apóstolo Paulo no caminho de Damasco.", cor:"#1E40AF" },
  { day:31, month:1,  tradicao:"Católica",  titulo:"Dia de São João Bosco",
    desc:"Padroeiro dos educadores e jovens. Fundador dos Salesianos.", cor:"#1E40AF" },

  // ─── FEVEREIRO ───────────────────────────────────────────
  { day:2,  month:2,  tradicao:"Umbanda",   titulo:"Dia de Iemanjá",
    desc:"A grande mãe das águas salgadas. Milhões de oferendas são entregues ao mar.", cor:"#0EA5E9" },
  { day:2,  month:2,  tradicao:"Católica",  titulo:"Nossa Senhora dos Navegantes",
    desc:"Padroeira dos pescadores e marinheiros. Sincretizada com Iemanjá.", cor:"#1E40AF" },
  { day:11, month:2,  tradicao:"Católica",  titulo:"Nossa Senhora de Lourdes",
    desc:"Aparição mariana na França em 1858. Dia Mundial do Doente.", cor:"#1E40AF" },
  { day:14, month:2,  tradicao:"Católica",  titulo:"Dia de São Valentim",
    desc:"Padroeiro dos namorados em várias culturas. Cirilo e Metódio, padroeiros da Europa.", cor:"#1E40AF" },

  // ─── MARÇO ───────────────────────────────────────────────
  { day:8,  month:3,  tradicao:"Universal", titulo:"Dia Internacional da Mulher",
    desc:"Reflexão sobre luta e conquistas femininas em todo o mundo.", cor:"#EC4899" },
  { day:17, month:3,  tradicao:"Católica",  titulo:"Dia de São Patrício",
    desc:"Padroeiro da Irlanda. Celebrado mundialmente com o verde como cor símbolo.", cor:"#1E40AF" },
  { day:19, month:3,  tradicao:"Católica",  titulo:"Dia de São José",
    desc:"Esposo de Maria, padroeiro dos pais, trabalhadores e dos moribundos.", cor:"#1E40AF" },
  { day:19, month:3,  tradicao:"Umbanda",   titulo:"Dia de Logunedé",
    desc:"Orixá jovem, filho de Oxum e Oxóssi. Sincretizado com São José.", cor:"#F59E0B" },
  { day:25, month:3,  tradicao:"Católica",  titulo:"Anunciação do Senhor",
    desc:"Celebra o anúncio do Anjo Gabriel a Maria sobre o nascimento de Jesus.", cor:"#1E40AF" },

  // ─── ABRIL ───────────────────────────────────────────────
  { day:3,  month:4,  tradicao:"Espírita",  titulo:"Aniversário de Allan Kardec",
    desc:"Nascimento do codificador da Doutrina Espírita em 1804, em Lyon, França.", cor:"#7C3AED" },
  { day:8,  month:4,  tradicao:"Budista",   titulo:"Dia do Nascimento de Buda (Hanamatsuri)",
    desc:"Celebração tradicional japonesa do nascimento de Siddhartha Gautama.", cor:"#F59E0B" },
  { day:13, month:4,  tradicao:"Católica",  titulo:"Nossa Senhora dos Aflitos",
    desc:"Consolação para os que sofrem. Tradição forte no Nordeste brasileiro.", cor:"#1E40AF" },
  { day:21, month:4,  tradicao:"Universal", titulo:"Tiradentes",
    desc:"Joaquim José da Silva Xavier. Mártir da Inconfidência Mineira (Brasil).", cor:"#10B981" },
  { day:23, month:4,  tradicao:"Católica",  titulo:"Dia de São Jorge",
    desc:"Cavaleiro guerreiro. Padroeiro de muitos lugares. Símbolo de coragem e fé.", cor:"#1E40AF" },
  { day:23, month:4,  tradicao:"Umbanda",   titulo:"Dia de Ogum",
    desc:"Orixá guerreiro, senhor dos caminhos e do ferro. Sincretizado com São Jorge.", cor:"#DC2626" },
  { day:25, month:4,  tradicao:"Católica",  titulo:"Dia de São Marcos Evangelista",
    desc:"Autor do segundo Evangelho. Padroeiro dos advogados e dos pintores.", cor:"#1E40AF" },

  // ─── MAIO ────────────────────────────────────────────────
  { day:1,  month:5,  tradicao:"Católica",  titulo:"São José Operário",
    desc:"Padroeiro dos trabalhadores. Coincide com o Dia do Trabalho mundial.", cor:"#1E40AF" },
  { day:1,  month:5,  tradicao:"Universal", titulo:"Dia do Trabalhador",
    desc:"Celebração global da dignidade do trabalho.", cor:"#10B981" },
  { day:13, month:5,  tradicao:"Católica",  titulo:"Nossa Senhora de Fátima",
    desc:"Aparição em Fátima, Portugal, em 1917. Uma das mais importantes da Igreja.", cor:"#1E40AF" },
  { day:13, month:5,  tradicao:"Espírita",  titulo:"Abolição da Escravatura",
    desc:"Data importante para a espiritualidade brasileira e para a Umbanda.", cor:"#7C3AED" },
  { day:13, month:5,  tradicao:"Umbanda",   titulo:"Dia dos Pretos Velhos",
    desc:"Homenagem aos pretos velhos, espíritos de escravizados que se tornaram guias.", cor:"#92400E" },
  { day:24, month:5,  tradicao:"Católica",  titulo:"Nossa Senhora Auxiliadora",
    desc:"Padroeira dos cristãos. Devoção forte no sul do Brasil.", cor:"#1E40AF" },
  { day:31, month:5,  tradicao:"Católica",  titulo:"Visitação de Maria a Isabel",
    desc:"Encerra o mês mariano. Maria visita sua prima Isabel grávida de João Batista.", cor:"#1E40AF" },

  // ─── JUNHO ───────────────────────────────────────────────
  { day:13, month:6,  tradicao:"Católica",  titulo:"Dia de Santo Antônio",
    desc:"Santo casamenteiro. Início das Festas Juninas no Brasil.", cor:"#1E40AF" },
  { day:24, month:6,  tradicao:"Católica",  titulo:"Dia de São João",
    desc:"Padroeiro das Festas Juninas. Tradição forte em todo o Nordeste.", cor:"#1E40AF" },
  { day:24, month:6,  tradicao:"Umbanda",   titulo:"Dia de Xangô",
    desc:"Orixá do trovão, da justiça e do fogo. Sincretizado com São João.", cor:"#DC2626" },
  { day:29, month:6,  tradicao:"Católica",  titulo:"Dia de São Pedro e São Paulo",
    desc:"Pilares da Igreja Católica. Encerra o ciclo das festas juninas.", cor:"#1E40AF" },

  // ─── JULHO ───────────────────────────────────────────────
  { day:13, month:7,  tradicao:"Católica",  titulo:"Nossa Senhora de Fátima (memória)",
    desc:"Memória das aparições marianas em Portugal.", cor:"#1E40AF" },
  { day:16, month:7,  tradicao:"Católica",  titulo:"Nossa Senhora do Carmo",
    desc:"Padroeira dos navegantes. Devoção carmelita.", cor:"#1E40AF" },
  { day:22, month:7,  tradicao:"Católica",  titulo:"Dia de Santa Maria Madalena",
    desc:"Discípula de Jesus. Apóstola dos Apóstolos.", cor:"#1E40AF" },
  { day:25, month:7,  tradicao:"Católica",  titulo:"Dia de São Cristóvão",
    desc:"Padroeiro dos motoristas e viajantes.", cor:"#1E40AF" },
  { day:26, month:7,  tradicao:"Católica",  titulo:"Sant'Ana e São Joaquim",
    desc:"Pais da Virgem Maria. Padroeiros dos avós.", cor:"#1E40AF" },

  // ─── AGOSTO ──────────────────────────────────────────────
  { day:11, month:8,  tradicao:"Católica",  titulo:"Dia de Santa Clara",
    desc:"Fundadora das Clarissas. Companheira de São Francisco.", cor:"#1E40AF" },
  { day:13, month:8,  tradicao:"Umbanda",   titulo:"Dia de Obaluaê",
    desc:"Orixá da saúde e das doenças. Sincretizado com São Lázaro.", cor:"#92400E" },
  { day:15, month:8,  tradicao:"Católica",  titulo:"Assunção de Nossa Senhora",
    desc:"Maria assunta ao céu em corpo e alma. Solenidade importante.", cor:"#1E40AF" },
  { day:16, month:8,  tradicao:"Católica",  titulo:"Dia de São Roque",
    desc:"Padroeiro dos doentes e dos peregrinos.", cor:"#1E40AF" },
  { day:28, month:8,  tradicao:"Católica",  titulo:"Dia de Santo Agostinho",
    desc:"Bispo e doutor da Igreja. Autor de 'Confissões' e 'Cidade de Deus'.", cor:"#1E40AF" },

  // ─── SETEMBRO ────────────────────────────────────────────
  { day:7,  month:9,  tradicao:"Universal", titulo:"Independência do Brasil",
    desc:"Data nacional brasileira. Celebrações cívicas e religiosas.", cor:"#10B981" },
  { day:8,  month:9,  tradicao:"Católica",  titulo:"Natividade de Maria",
    desc:"Nascimento da Virgem Maria.", cor:"#1E40AF" },
  { day:14, month:9,  tradicao:"Católica",  titulo:"Exaltação da Santa Cruz",
    desc:"Veneração da cruz como instrumento de salvação.", cor:"#1E40AF" },
  { day:24, month:9,  tradicao:"Católica",  titulo:"Nossa Senhora das Mercês",
    desc:"Libertadora dos cativos. Padroeira das almas.", cor:"#1E40AF" },
  { day:24, month:9,  tradicao:"Umbanda",   titulo:"Dia de Obá",
    desc:"Orixá guerreira, irmã de Iemanjá. Sincretizada com Santa Joana D'Arc.", cor:"#DC2626" },
  { day:27, month:9,  tradicao:"Católica",  titulo:"Dia de São Vicente de Paulo",
    desc:"Apóstolo da caridade. Fundador das Filhas da Caridade.", cor:"#1E40AF" },
  { day:29, month:9,  tradicao:"Católica",  titulo:"Dia de São Miguel Arcanjo",
    desc:"Príncipe dos arcanjos. Defensor contra o mal.", cor:"#1E40AF" },
  { day:30, month:9,  tradicao:"Católica",  titulo:"Dia de São Jerônimo",
    desc:"Doutor da Igreja. Tradutor da Bíblia para o latim (Vulgata).", cor:"#1E40AF" },

  // ─── OUTUBRO ─────────────────────────────────────────────
  { day:2,  month:10, tradicao:"Católica",  titulo:"Santos Anjos da Guarda",
    desc:"Celebração dos anjos protetores que acompanham cada pessoa.", cor:"#1E40AF" },
  { day:4,  month:10, tradicao:"Católica",  titulo:"Dia de São Francisco de Assis",
    desc:"Patrono dos animais e da ecologia. Símbolo de simplicidade e fraternidade.", cor:"#1E40AF" },
  { day:12, month:10, tradicao:"Católica",  titulo:"Nossa Senhora Aparecida",
    desc:"Padroeira do Brasil. Maior festa religiosa do país.", cor:"#1E40AF" },
  { day:12, month:10, tradicao:"Umbanda",   titulo:"Dia de Oxum",
    desc:"Orixá das águas doces, do amor e da maternidade. Sincretizada com N. Sra. Aparecida.", cor:"#F59E0B" },
  { day:15, month:10, tradicao:"Católica",  titulo:"Dia de Santa Teresa de Ávila",
    desc:"Doutora da Igreja. Mística e reformadora carmelita.", cor:"#1E40AF" },
  { day:18, month:10, tradicao:"Católica",  titulo:"Dia de São Lucas",
    desc:"Evangelista, médico e padroeiro dos pintores.", cor:"#1E40AF" },
  { day:28, month:10, tradicao:"Católica",  titulo:"Dia de São Judas Tadeu",
    desc:"Padroeiro das causas impossíveis. Devoção fortíssima no Brasil.", cor:"#1E40AF" },
  { day:31, month:10, tradicao:"Evangélica",titulo:"Dia da Reforma Protestante",
    desc:"Lutero afixou as 95 teses em Wittenberg em 1517. Marco da Reforma.", cor:"#0891B2" },

  // ─── NOVEMBRO ────────────────────────────────────────────
  { day:1,  month:11, tradicao:"Católica",  titulo:"Dia de Todos os Santos",
    desc:"Celebração de todos os santos canonizados e não canonizados.", cor:"#1E40AF" },
  { day:2,  month:11, tradicao:"Católica",  titulo:"Finados — Dia dos Mortos",
    desc:"Oração e memória pelos falecidos. Visitas aos cemitérios.", cor:"#1E40AF" },
  { day:15, month:11, tradicao:"Universal", titulo:"Proclamação da República",
    desc:"Data nacional brasileira (1889).", cor:"#10B981" },
  { day:20, month:11, tradicao:"Umbanda",   titulo:"Dia da Consciência Negra / Zumbi dos Palmares",
    desc:"Homenagem a Zumbi e à resistência negra. Forte ligação com a Umbanda.", cor:"#92400E" },
  { day:25, month:11, tradicao:"Católica",  titulo:"Dia de Santa Catarina de Alexandria",
    desc:"Mártir e doutora. Padroeira dos filósofos.", cor:"#1E40AF" },
  { day:30, month:11, tradicao:"Católica",  titulo:"Dia de Santo André",
    desc:"Apóstolo. Padroeiro dos pescadores e da Escócia.", cor:"#1E40AF" },

  // ─── DEZEMBRO ────────────────────────────────────────────
  { day:4,  month:12, tradicao:"Católica",  titulo:"Dia de Santa Bárbara",
    desc:"Padroeira dos artilheiros, bombeiros e mineiros. Sincretizada com Iansã.", cor:"#1E40AF" },
  { day:4,  month:12, tradicao:"Umbanda",   titulo:"Dia de Iansã (Oyá)",
    desc:"Orixá dos ventos, das tempestades e dos espíritos dos mortos.", cor:"#DC2626" },
  { day:8,  month:12, tradicao:"Católica",  titulo:"Imaculada Conceição de Maria",
    desc:"Solenidade. Padroeira de Portugal e dos Estados Unidos.", cor:"#1E40AF" },
  { day:13, month:12, tradicao:"Católica",  titulo:"Dia de Santa Luzia",
    desc:"Padroeira dos olhos e da vista. Devoção popular no Nordeste.", cor:"#1E40AF" },
  { day:24, month:12, tradicao:"Católica",  titulo:"Véspera de Natal",
    desc:"Vigília do nascimento de Cristo. Missa do Galo à meia-noite.", cor:"#1E40AF" },
  { day:25, month:12, tradicao:"Universal", titulo:"Natal — Nascimento de Jesus",
    desc:"A maior celebração cristã do ano. Celebrada também por não-cristãos como festa de família e paz.", cor:"#DC2626" },
  { day:26, month:12, tradicao:"Católica",  titulo:"Dia de Santo Estêvão",
    desc:"Primeiro mártir cristão. Padroeiro dos diáconos.", cor:"#1E40AF" },
  { day:31, month:12, tradicao:"Umbanda",   titulo:"Réveillon de Iemanjá",
    desc:"Tradição de oferendas ao mar para começar o ano com bençãos.", cor:"#0EA5E9" },
];

// ============================================================
// 2. DATAS MÓVEIS (Páscoa, Pessach, Ramadã, Diwali)
// ============================================================
// Cobertura para 2026 — datas pré-calculadas
// (em produção, integrar libs como hebcal e moment-hijri)
export const MOVABLE_DATES_2026 = [
  // ─── CRISTÃ — Páscoa móvel ───
  { date:"2026-02-18", tradicao:"Católica",   titulo:"Quarta-feira de Cinzas",
    desc:"Início da Quaresma. Preparação para a Páscoa por 40 dias.", cor:"#1E40AF" },
  { date:"2026-03-29", tradicao:"Católica",   titulo:"Domingo de Ramos",
    desc:"Início da Semana Santa. Entrada de Jesus em Jerusalém.", cor:"#1E40AF" },
  { date:"2026-04-02", tradicao:"Católica",   titulo:"Quinta-feira Santa",
    desc:"Última Ceia. Instituição da Eucaristia.", cor:"#1E40AF" },
  { date:"2026-04-03", tradicao:"Católica",   titulo:"Sexta-feira da Paixão",
    desc:"Crucificação e morte de Jesus.", cor:"#1E40AF" },
  { date:"2026-04-05", tradicao:"Católica",   titulo:"Domingo de Páscoa",
    desc:"Ressurreição de Jesus Cristo. A maior celebração cristã do ano.", cor:"#DC2626" },
  { date:"2026-05-14", tradicao:"Católica",   titulo:"Ascensão do Senhor",
    desc:"40 dias após a Páscoa. Jesus sobe ao céu.", cor:"#1E40AF" },
  { date:"2026-05-24", tradicao:"Católica",   titulo:"Pentecostes",
    desc:"50 dias após a Páscoa. Descida do Espírito Santo sobre os apóstolos.", cor:"#1E40AF" },
  { date:"2026-06-04", tradicao:"Católica",   titulo:"Corpus Christi",
    desc:"Celebração do Corpo de Cristo. Procissões com tapetes coloridos.", cor:"#1E40AF" },

  // ─── JUDAICA ─────────────────────────────────────────────
  { date:"2026-03-03", tradicao:"Judaica",    titulo:"Purim",
    desc:"Festa da libertação dos judeus pela rainha Ester. Alegria, máscaras e fantasias.", cor:"#7C3AED" },
  { date:"2026-04-02", tradicao:"Judaica",    titulo:"Pessach — Páscoa Judaica (início)",
    desc:"Comemora a saída do povo judeu da escravidão no Egito. 7-8 dias.", cor:"#7C3AED" },
  { date:"2026-05-22", tradicao:"Judaica",    titulo:"Shavuot",
    desc:"Celebra a entrega da Torá no Monte Sinai. 50 dias após o Pessach.", cor:"#7C3AED" },
  { date:"2026-09-12", tradicao:"Judaica",    titulo:"Rosh Hashaná — Ano Novo Judaico",
    desc:"Ano Novo Judaico (5787). Começa o período dos 10 dias de arrependimento.", cor:"#7C3AED" },
  { date:"2026-09-21", tradicao:"Judaica",    titulo:"Yom Kipur — Dia do Perdão",
    desc:"O dia mais sagrado do judaísmo. Jejum, oração e arrependimento.", cor:"#7C3AED" },
  { date:"2026-09-26", tradicao:"Judaica",    titulo:"Sucot — Festa dos Tabernáculos",
    desc:"Celebra os 40 anos no deserto. Famílias montam cabanas no quintal.", cor:"#7C3AED" },
  { date:"2026-12-04", tradicao:"Judaica",    titulo:"Chanucá — Festa das Luzes (início)",
    desc:"Festa das Luzes. 8 dias acendendo o candelabro Chanukiá.", cor:"#7C3AED" },

  // ─── ISLÂMICA ────────────────────────────────────────────
  { date:"2026-02-17", tradicao:"Islâmica",   titulo:"Ramadã — início",
    desc:"Mês sagrado de jejum, oração e caridade. 9º mês do calendário islâmico.", cor:"#059669" },
  { date:"2026-03-19", tradicao:"Islâmica",   titulo:"Lailat al-Qadr — Noite do Destino",
    desc:"Última semana do Ramadã. Noite mais sagrada do Islã. Primeira revelação do Alcorão.", cor:"#059669" },
  { date:"2026-03-20", tradicao:"Islâmica",   titulo:"Eid al-Fitr — Fim do Ramadã",
    desc:"Festa que encerra o jejum do Ramadã. Reuniões familiares e refeições festivas.", cor:"#059669" },
  { date:"2026-05-26", tradicao:"Islâmica",   titulo:"Eid al-Adha — Festa do Sacrifício",
    desc:"Comemora o sacrifício de Abraão. Coincide com a peregrinação a Meca (Hajj).", cor:"#059669" },
  { date:"2026-08-25", tradicao:"Islâmica",   titulo:"Mawlid al-Nabi — Nascimento do Profeta",
    desc:"Celebra o nascimento do Profeta Maomé.", cor:"#059669" },

  // ─── BUDISTA ─────────────────────────────────────────────
  { date:"2026-05-01", tradicao:"Budista",    titulo:"Vesak — Buda Purnima",
    desc:"Celebra o nascimento, iluminação e morte do Buda. Data mais sagrada do budismo.", cor:"#F59E0B" },
  { date:"2026-12-08", tradicao:"Budista",    titulo:"Bodhi Day — Iluminação do Buda",
    desc:"Dia em que Siddhartha Gautama atingiu a iluminação sob a árvore Bodhi.", cor:"#F59E0B" },

  // ─── HINDU ───────────────────────────────────────────────
  { date:"2026-03-04", tradicao:"Hindu",      titulo:"Holi — Festival das Cores",
    desc:"Celebração da chegada da primavera e do triunfo do bem sobre o mal. Pessoas se cobrem de pó colorido.", cor:"#DB2777" },
  { date:"2026-09-15", tradicao:"Hindu",      titulo:"Ganesh Chaturthi",
    desc:"Festival do deus Ganesh, o removedor de obstáculos.", cor:"#DB2777" },
  { date:"2026-10-12", tradicao:"Hindu",      titulo:"Navaratri — 9 Noites Sagradas",
    desc:"Festival de 9 dias dedicado à deusa Durga em suas 9 manifestações.", cor:"#DB2777" },
  { date:"2026-11-08", tradicao:"Hindu",      titulo:"Diwali — Festival das Luzes",
    desc:"O maior festival hindu. Celebra a vitória da luz sobre as trevas com milhões de lâmpadas.", cor:"#DB2777" },

  // ─── UNIVERSAL — Solstícios e Equinócios ───
  { date:"2026-03-20", tradicao:"Universal",  titulo:"Equinócio de Outono (Hemisfério Sul)",
    desc:"Dia e noite com a mesma duração. Marca a transição estacional.", cor:"#10B981" },
  { date:"2026-06-21", tradicao:"Universal",  titulo:"Solstício de Inverno (Hemisfério Sul)",
    desc:"Dia mais curto do ano. Importante para tradições xamânicas e pagãs.", cor:"#10B981" },
  { date:"2026-09-22", tradicao:"Universal",  titulo:"Equinócio de Primavera (Hemisfério Sul)",
    desc:"Renovação da natureza. Início da primavera.", cor:"#10B981" },
  { date:"2026-12-21", tradicao:"Universal",  titulo:"Solstício de Verão (Hemisfério Sul)",
    desc:"Dia mais longo do ano. Yule em tradições nórdicas.", cor:"#10B981" },
];

// ============================================================
// 3. SHABAT (toda sexta-feira ao pôr-do-sol)
// ============================================================
export const getShabat = (date) => {
  const d = new Date(date);
  if (d.getDay() === 5) { // sexta-feira
    return {
      tradicao: "Judaica",
      titulo: "Erev Shabat — Véspera do Sábado",
      desc: "Começa ao pôr-do-sol. Dia de descanso, oração e refeição em família.",
      cor: "#7C3AED",
    };
  }
  if (d.getDay() === 6) { // sábado
    return {
      tradicao: "Judaica",
      titulo: "Shabat — Sábado Sagrado",
      desc: "Dia de descanso judaico. Vai do pôr-do-sol de sexta ao pôr-do-sol de sábado.",
      cor: "#7C3AED",
    };
  }
  return null;
};

// ============================================================
// 4. SANTOS DIÁRIOS (cobertura católica para todos os dias)
// ============================================================
// Para os ~290 dias sem festa principal, mostra "Santo do Dia"
export const DIAS_PT = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
export const MESES_PT = ["","Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

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
export const HEBREW_2026 = [
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
export const MESES_ET = ["Meskerem","Tikimt","Hidar","Tahsas","Tir","Yekatit","Megabit","Miazia","Ginbot","Sene","Hamle","Nehasse","Pagume"];

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
export const MESES_HIJRI = ["Muharram","Safar","Rabi al-awwal","Rabi al-thani","Jumada al-awwal","Jumada al-thani","Rajab","Sha'ban","Ramadan","Shawwal","Dhu al-Qadah","Dhu al-Hijjah"];

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
export const ANIMAIS_CHINA = ["Macaco","Galo","Cachorro","Porco","Rato","Boi","Tigre","Coelho","Dragão","Serpente","Cavalo","Carneiro"];
export const EMOJI_ANIMAIS = {"Macaco":"🐒","Galo":"🐓","Cachorro":"🐕","Porco":"🐖","Rato":"🐀","Boi":"🐂","Tigre":"🐅","Coelho":"🐇","Dragão":"🐉","Serpente":"🐍","Cavalo":"🐎","Carneiro":"🐐"};
export const ELEMENTOS = ["Metal","Metal","Água","Água","Madeira","Madeira","Fogo","Fogo","Terra","Terra"];
// Nomes dos 12 meses lunares chineses
export const MESES_CHINA = ["Zhēngyuè (正月)","Èryuè (二月)","Sānyuè (三月)","Sìyuè (四月)","Wǔyuè (五月)","Liùyuè (六月)","Qīyuè (七月)","Bāyuè (八月)","Jiǔyuè (九月)","Shíyuè (十月)","Shíyīyuè (十一月)","Làyuè (臘月)"];

export const getChines = (date = new Date()) => {
  const y = date.getFullYear();
  const animal = ANIMAIS_CHINA[y % 12];
  const elemento = ELEMENTOS[y % 10];
  const emojiAnimal = EMOJI_ANIMAIS[animal];

  // Cálculo aproximado de mês e dia lunar
  // Ano novo chinês cai entre 21/jan e 20/fev — aproximamos pela média (5/fev)
  const newYearMs = new Date(y, 1, 5).getTime();
  const useNewYearOfPrevYear = date.getTime() < newYearMs;
  const refMs = useNewYearOfPrevYear ? new Date(y - 1, 1, 5).getTime() : newYearMs;
  const daysSinceNY = Math.floor((date.getTime() - refMs) / 86400000);
  // Aproximação: cada mês lunar tem ~29.5 dias
  const mesIdx = Math.min(11, Math.floor(daysSinceNY / 29.5));
  const diaLunar = Math.max(1, Math.floor(daysSinceNY - mesIdx * 29.5) + 1);
  const mesNome = MESES_CHINA[mesIdx];

  return {
    emoji: "🐉",
    nome: "Chinês",
    formatado: `${diaLunar} de ${mesNome} · Ano do ${animal} ${emojiAnimal} (${elemento})`,
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
  getIslamico(date),
  getHebraico(date),
  getBudista(date),
  getJapones(date),
  getEtiope(date),
  getHoloceno(date),
];

// ============================================================
// DATA: mentorMessages.js
// ============================================================
// ============================================================
// KOMPARAI — MENSAGENS DOS MENTORES (EXPANDIDO)
// 4 temperamentos × 30 mensagens × 4 mentores alternativos = 480 mensagens
// ============================================================
//
// Uso:
//   const msg = getMentorMessage(temperamento, dayOfYear);
//   // Rotaciona automaticamente — mensagem diferente todo dia
//
// ============================================================

