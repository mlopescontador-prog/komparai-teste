// ============================================================
// KOMPARAI — CALENDÁRIO ESPIRITUAL
// 8 tradições religiosas + datas universais
// ============================================================
//
// Cobertura:
//   ✝️  Católica       (santos diários + festas)
//   ✟  Evangélica      (datas cristãs principais)
//   ✡️  Judaica         (festas + Shabat)
//   ☪️  Islâmica         (Ramadã, Eids, Mawlid)
//   ☸️  Budista         (Vesak, Bodhi, Dharma)
//   🕉️  Hindu           (Diwali, Holi, Navaratri)
//   🌟 Espírita         (Kardec, Chico Xavier)
//   🌊 Umbanda          (orixás e sincretismos)
//
// ============================================================

// ============================================================
// 1. DATAS FIXAS (mesmo dia/mês todo ano)
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

// ============================================================
// 5. FUNÇÃO PRINCIPAL — Eventos espirituais do dia
// ============================================================
export const getEspiritualidadeDoDia = (day, month, year=null) => {
  const eventos = [];

  // 1. Datas fixas
  FIXED_DATES.forEach(d => {
    if (d.day === day && d.month === month) eventos.push(d);
  });

  // 2. Datas móveis (se ano fornecido)
  if (year === 2026) {
    const dateStr = `${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
    MOVABLE_DATES_2026.forEach(d => {
      if (d.date === dateStr) eventos.push(d);
    });
  }

  // 3. Shabat (se data completa)
  if (year) {
    const shabat = getShabat(new Date(year, month-1, day));
    if (shabat && !eventos.some(e => e.tradicao === "Judaica")) {
      eventos.push(shabat);
    }
  }

  // 4. Santo do dia (fallback)
  if (eventos.length === 0) {
    const santo = getSantoDoDia(day, month);
    if (santo) {
      eventos.push({
        tradicao: "Católica",
        titulo: santo,
        desc: "Memória deste santo no calendário católico.",
        cor: "#1E40AF",
      });
    }
  }

  return eventos;
};

// ============================================================
// CORES POR TRADIÇÃO (para o app)
// ============================================================
export const TRADICAO_COLORS = {
  "Católica":   "#1E40AF",  // azul escuro
  "Evangélica": "#0891B2",  // ciano
  "Ortodoxa":   "#1E3A8A",  // azul royal
  "Judaica":    "#7C3AED",  // roxo
  "Islâmica":   "#059669",  // verde
  "Budista":    "#F59E0B",  // âmbar
  "Hindu":      "#DB2777",  // rosa
  "Espírita":   "#7C3AED",  // roxo
  "Umbanda":    "#92400E",  // marrom
  "Universal":  "#10B981",  // verde menta
};

export const TRADICAO_EMOJI = {
  "Católica":   "✝️",
  "Evangélica": "✟",
  "Ortodoxa":   "☦️",
  "Judaica":    "✡️",
  "Islâmica":   "☪️",
  "Budista":    "☸️",
  "Hindu":      "🕉️",
  "Espírita":   "🌟",
  "Umbanda":    "🌊",
  "Universal":  "🌍",
};
