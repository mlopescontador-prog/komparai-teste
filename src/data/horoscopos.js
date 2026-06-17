export const HOROSCOPO_GREGO = {
  "Áries": {
    elemento: "Fogo", regente: "Ares", deus: "Deus da Guerra",
    mito: "Áries representa o carneiro de ouro que salvou Frixo e Hele. Símbolo de coragem e início de jornada.",
    poder: "Pioneirismo. Você começa o que outros temem começar.",
    desafio: "Pacificar Ares dentro de você. Nem toda batalha vale ser travada.",
    pedra: "Diamante", numero: 9, cor: "Vermelho fogo",
  },
  "Touro": {
    elemento: "Terra", regente: "Afrodite", deus: "Deusa do Amor e da Beleza",
    mito: "Touro é o disfarce de Zeus quando seduziu Europa. Representa força tranquila e prazeres da terra.",
    poder: "Solidez. Você constrói o que dura.",
    desafio: "Aceitar mudanças. A vida flui — não pode segurar tudo.",
    pedra: "Esmeralda", numero: 6, cor: "Verde-musgo",
  },
  "Gêmeos": {
    elemento: "Ar", regente: "Hermes", deus: "Mensageiro dos Deuses",
    mito: "Castor e Pólux, gêmeos inseparáveis. Um mortal, outro imortal. Zeus os transformou em estrelas.",
    poder: "Comunicação. Você conecta mundos diferentes.",
    desafio: "Profundidade. Aprenda a ficar com uma ideia até o fim.",
    pedra: "Ágata", numero: 5, cor: "Amarelo",
  },
  "Câncer": {
    elemento: "Água", regente: "Selene/Ártemis", deus: "Deusa da Lua",
    mito: "O caranguejo que beliscou Hércules durante seu combate com a Hidra. Símbolo de proteção e tenacidade.",
    poder: "Intuição. Você sente antes de saber.",
    desafio: "Sair da concha. O mundo precisa do que você esconde.",
    pedra: "Pérola", numero: 2, cor: "Branco pérola",
  },
  "Leão": {
    elemento: "Fogo", regente: "Apolo/Hélios", deus: "Deus do Sol",
    mito: "O Leão de Neméia, morto por Hércules. Sua pele invencível virou armadura. Símbolo de soberania.",
    poder: "Liderança. Você ilumina o ambiente apenas existindo.",
    desafio: "Brilhar sem ofuscar. Reconheça a luz dos outros também.",
    pedra: "Rubi", numero: 1, cor: "Dourado",
  },
  "Virgem": {
    elemento: "Terra", regente: "Hermes/Deméter", deus: "Deusa da Colheita",
    mito: "Astréia, a Virgem Justa, que deixou a Terra ao ver a corrupção humana. Símbolo de pureza e análise.",
    poder: "Precisão. Você vê o que ninguém vê.",
    desafio: "Aceitar imperfeições. A vida é mais bonita assim.",
    pedra: "Safira", numero: 3, cor: "Verde-oliva",
  },
  "Libra": {
    elemento: "Ar", regente: "Vênus/Afrodite", deus: "Deusa do Amor",
    mito: "A balança da deusa Themis, que julga as almas. Símbolo de justiça e equilíbrio.",
    poder: "Harmonia. Você pacifica onde há tempestade.",
    desafio: "Decidir-se. Justiça às vezes exige escolher um lado.",
    pedra: "Opala", numero: 7, cor: "Rosa pastel",
  },
  "Escorpião": {
    elemento: "Água", regente: "Hades", deus: "Deus do Submundo",
    mito: "O escorpião que matou Órion. Símbolo de transformação profunda — morte e renascimento.",
    poder: "Intensidade. Você vive nas profundezas que outros evitam.",
    desafio: "Confiar. Nem toda intensidade precisa virar combate.",
    pedra: "Granada", numero: 8, cor: "Vinho",
  },
  "Sagitário": {
    elemento: "Fogo", regente: "Zeus", deus: "Pai dos Deuses",
    mito: "Quíron, o centauro sábio, professor de Hércules. Símbolo de aventura intelectual e espiritual.",
    poder: "Visão. Você enxerga longe.",
    desafio: "Aterrissar. Sonhos só funcionam quando viram passos.",
    pedra: "Turquesa", numero: 9, cor: "Roxo",
  },
  "Capricórnio": {
    elemento: "Terra", regente: "Cronos/Saturno", deus: "Deus do Tempo",
    mito: "Pan, o deus dos pastores, que virou cabra com cauda de peixe para escapar de Tifão. Símbolo de resiliência.",
    poder: "Ambição. Você sobe montanhas que outros chamam de impossíveis.",
    desafio: "Descansar. Nem todo dia é dia de subir.",
    pedra: "Ônix", numero: 8, cor: "Marrom escuro",
  },
  "Aquário": {
    elemento: "Ar", regente: "Urano/Prometeu", deus: "Trazedor do Fogo",
    mito: "Ganimedes, o copeiro dos deuses, que servia néctar a Zeus. Símbolo de generosidade visionária.",
    poder: "Inovação. Você enxerga o futuro antes de existir.",
    desafio: "Conexão emocional. Ideias precisam de pessoas para virarem realidade.",
    pedra: "Ametista", numero: 4, cor: "Azul elétrico",
  },
  "Peixes": {
    elemento: "Água", regente: "Poseidon/Netuno", deus: "Deus dos Mares",
    mito: "Afrodite e Eros viraram peixes para fugir do monstro Tifão. Símbolo de intuição infinita.",
    poder: "Compaixão. Você sente o mundo inteiro.",
    desafio: "Limites. Sua sensibilidade é dom — proteja-a.",
    pedra: "Água-marinha", numero: 7, cor: "Azul-mar",
  },
};

// ============================================================
// 2. HORÓSCOPO CHINÊS (12 animais + 5 elementos)
// ============================================================
// Determinado pelo ano de nascimento (ciclo de 12 anos)
// Início aproximado: ano lunar começa entre 21/01 e 20/02
export const ANIMAIS_CHINESES = {
  rato:     { emoji:"🐀", animal:"Rato",    poder:"Inteligência astuta", elemento:"Água",
              traços:"Carismático, criativo, oportunista. Vê chances onde outros veem caos.",
              compatibilidade:["Dragão","Macaco","Boi"], incompativel:["Cavalo"] },
  boi:      { emoji:"🐂", animal:"Boi",     poder:"Persistência",         elemento:"Terra",
              traços:"Honesto, trabalhador, paciente. Constrói legado em silêncio.",
              compatibilidade:["Galo","Serpente","Rato"], incompativel:["Carneiro"] },
  tigre:    { emoji:"🐅", animal:"Tigre",   poder:"Coragem destemida",    elemento:"Madeira",
              traços:"Líder natural, corajoso, imprevisível. Apaixonado pela vida.",
              compatibilidade:["Cavalo","Cachorro","Porco"], incompativel:["Macaco"] },
  coelho:   { emoji:"🐇", animal:"Coelho",  poder:"Diplomacia",           elemento:"Madeira",
              traços:"Refinado, gentil, sortudo. Mestre da negociação suave.",
              compatibilidade:["Carneiro","Porco","Cachorro"], incompativel:["Galo"] },
  dragao:   { emoji:"🐉", animal:"Dragão",  poder:"Magnetismo",           elemento:"Terra",
              traços:"Carismático, ambicioso, criativo. Chega liderando, mesmo sem querer.",
              compatibilidade:["Rato","Macaco","Galo"], incompativel:["Cachorro"] },
  serpente: { emoji:"🐍", animal:"Serpente",poder:"Sabedoria",            elemento:"Fogo",
              traços:"Intuitivo, profundo, elegante. Fala pouco mas observa tudo.",
              compatibilidade:["Boi","Galo"], incompativel:["Porco"] },
  cavalo:   { emoji:"🐎", animal:"Cavalo",  poder:"Liberdade",            elemento:"Fogo",
              traços:"Energético, livre, charmoso. Movimento é seu estado natural.",
              compatibilidade:["Tigre","Cachorro","Carneiro"], incompativel:["Rato"] },
  carneiro: { emoji:"🐐", animal:"Carneiro/Cabra", poder:"Criatividade",  elemento:"Terra",
              traços:"Artístico, gentil, sonhador. Sensível a beleza e harmonia.",
              compatibilidade:["Coelho","Cavalo","Porco"], incompativel:["Boi"] },
  macaco:   { emoji:"🐒", animal:"Macaco",  poder:"Inventividade",        elemento:"Metal",
              traços:"Inteligente, malicioso, divertido. Resolve problemas com humor.",
              compatibilidade:["Rato","Dragão"], incompativel:["Tigre"] },
  galo:     { emoji:"🐓", animal:"Galo",    poder:"Honestidade",          elemento:"Metal",
              traços:"Confiante, vaidoso, direto. Não tolera mentira nem mediocridade.",
              compatibilidade:["Boi","Serpente","Dragão"], incompativel:["Coelho"] },
  cachorro: { emoji:"🐕", animal:"Cachorro",poder:"Lealdade",             elemento:"Terra",
              traços:"Leal, justo, protetor. Amigo verdadeiro até o fim.",
              compatibilidade:["Tigre","Cavalo","Coelho"], incompativel:["Dragão"] },
  porco:    { emoji:"🐖", animal:"Porco/Javali", poder:"Generosidade",    elemento:"Água",
              traços:"Bondoso, sincero, sortudo. Generoso até com quem não merece.",
              compatibilidade:["Coelho","Carneiro","Tigre"], incompativel:["Serpente"] },
};

// Mapeamento ano → animal (1924 a 2031)
export const getAnimalChines = (ano) => {
  if (!ano || ano < 1900) return null;
  const animals = ["macaco","galo","cachorro","porco","rato","boi","tigre","coelho","dragao","serpente","cavalo","carneiro"];
  return animals[ano % 12];
};

// ============================================================
// 3. HORÓSCOPO INDIANO (Rashis Védicos)
// ============================================================
// Sistema védico — os signos são similares aos ocidentais mas com nomes em sânscrito
// Cálculo simplificado (Nirayana — sem Ayanamsa precisa)
export const RASHIS_VEDICOS = {
  "Mesha":      { ocidental:"Áries",       emoji:"♈", planeta:"Mangal (Marte)",      elemento:"Fogo",  qualidade:"Pioneiro",    mantra:"Om Mangalāya Namaha",
                  descricao:"Sua energia é a do início. Você abre caminhos." },
  "Vrishabha":  { ocidental:"Touro",       emoji:"♉", planeta:"Shukra (Vênus)",      elemento:"Terra", qualidade:"Estável",     mantra:"Om Shukrāya Namaha",
                  descricao:"Sua força é a paciência. Você constrói para durar." },
  "Mithuna":    { ocidental:"Gêmeos",      emoji:"♊", planeta:"Budha (Mercúrio)",    elemento:"Ar",    qualidade:"Comunicativo",mantra:"Om Budhāya Namaha",
                  descricao:"Sua mente voa. Você é a ponte entre ideias." },
  "Karka":      { ocidental:"Câncer",      emoji:"♋", planeta:"Chandra (Lua)",       elemento:"Água",  qualidade:"Sensível",    mantra:"Om Chandrāya Namaha",
                  descricao:"Você é o coração da família. Sua intuição protege." },
  "Simha":      { ocidental:"Leão",        emoji:"♌", planeta:"Surya (Sol)",         elemento:"Fogo",  qualidade:"Líder",       mantra:"Om Suryāya Namaha",
                  descricao:"Sua presença ilumina. Você nasceu para liderar com nobreza." },
  "Kanya":      { ocidental:"Virgem",      emoji:"♍", planeta:"Budha (Mercúrio)",    elemento:"Terra", qualidade:"Analítico",   mantra:"Om Budhāya Namaha",
                  descricao:"Seu olhar capta detalhes. Você cura através da precisão." },
  "Tula":       { ocidental:"Libra",       emoji:"♎", planeta:"Shukra (Vênus)",      elemento:"Ar",    qualidade:"Harmonioso",  mantra:"Om Shukrāya Namaha",
                  descricao:"Sua missão é o equilíbrio. Você traz beleza onde há caos." },
  "Vrishchika": { ocidental:"Escorpião",   emoji:"♏", planeta:"Mangal (Marte)",      elemento:"Água",  qualidade:"Transformador",mantra:"Om Mangalāya Namaha",
                  descricao:"Você atravessa o fogo e renasce. Sua intensidade é poder." },
  "Dhanu":      { ocidental:"Sagitário",   emoji:"♐", planeta:"Guru (Júpiter)",      elemento:"Fogo",  qualidade:"Buscador",    mantra:"Om Guruve Namaha",
                  descricao:"Sua flecha aponta para o infinito. Você é o sábio aventureiro." },
  "Makara":     { ocidental:"Capricórnio", emoji:"♑", planeta:"Shani (Saturno)",     elemento:"Terra", qualidade:"Disciplinado",mantra:"Om Shanaye Namaha",
                  descricao:"Sua ambição é sagrada. Você sobe a montanha que outros recuam." },
  "Kumbha":     { ocidental:"Aquário",     emoji:"♒", planeta:"Shani (Saturno)",     elemento:"Ar",    qualidade:"Visionário",  mantra:"Om Shanaye Namaha",
                  descricao:"Sua mente toca o futuro. Você é a humanidade que ainda virá." },
  "Meena":      { ocidental:"Peixes",      emoji:"♓", planeta:"Guru (Júpiter)",      elemento:"Água",  qualidade:"Místico",     mantra:"Om Guruve Namaha",
                  descricao:"Você é o oceano da intuição. Compaixão é seu superpoder." },
};

// Mapeia signo ocidental para Rashi védico
export const getRashi = (signoOcidental) => {
  const map = {
    "Áries":"Mesha","Touro":"Vrishabha","Gêmeos":"Mithuna","Câncer":"Karka","Leão":"Simha",
    "Virgem":"Kanya","Libra":"Tula","Escorpião":"Vrishchika","Sagitário":"Dhanu",
    "Capricórnio":"Makara","Aquário":"Kumbha","Peixes":"Meena",
  };
  return map[signoOcidental] || null;
};

// ============================================================
// 4. CALENDÁRIO JUDAICO (data hebraica)
// ============================================================
// Cálculo simplificado da data hebraica para 2026
// Em produção, usar lib hebcal para precisão total
export const FRASES_GREGAS = {
  "Áries":[
    "Hoje Ares te empresta força — mas escolha bem a batalha.",
    "Sua chama interna está acesa. Use-a para criar, não destruir.",
    "Pioneirismo: comece o que outros adiam.",
    "A vitória pertence a quem age primeiro.",
    "Sua coragem inspira — mostre-a com sabedoria.",
    "Liderança não é gritar, é ser seguido.",
    "O carneiro abre o caminho. Continue.",
  ],
  "Touro":[
    "Afrodite te observa — apreciar a beleza é seu dever sagrado.",
    "Sua paciência será recompensada antes do fim do dia.",
    "O que é seu chega — não há pressa.",
    "Toque a terra hoje. Ela te devolve a calma.",
    "Sensualidade é sabedoria do corpo. Honre-a.",
    "A estabilidade que você oferece é raro presente.",
    "Hoje, prazer simples é meditação profunda.",
  ],
  "Gêmeos":[
    "Hermes te mensageira — diga o que precisa ser dito.",
    "Sua mente voa em duas direções. Hoje, escolha uma.",
    "Um diálogo importante chega no caminho.",
    "Cabe a você unir mundos que parecem opostos.",
    "Curiosidade é seu superpoder. Use-o hoje.",
    "Aprender é seu modo de respirar.",
    "Você é a ponte que faltava — atravesse-se.",
  ],
  "Câncer":[
    "Selene ilumina sua intuição. Confie nela hoje.",
    "Sua casca é firme. Seu coração, vasto. Equilibre.",
    "Cuidar é seu poder. Mas hoje, cuide de si primeiro.",
    "A lua nova traz uma decisão íntima.",
    "Sua memória é tesouro. Honre o que passou.",
    "Família — sangue ou eleita — pede sua presença.",
    "Lágrima também é cura. Não a contenha.",
  ],
  "Leão":[
    "Apolo brilha em você — não tema sua própria luz.",
    "Hoje é dia de palco — entre nele com nobreza.",
    "Generosidade é a verdadeira coroa real.",
    "Seu rugido inspira. Use-o para reger, não impor.",
    "O sol não pede desculpas por brilhar.",
    "Sua presença muda o clima do ambiente. Cuide dela.",
    "Real é quem trata o pequeno com grandeza.",
  ],
  "Virgem":[
    "Deméter te ensina: trabalho silencioso colhe muito.",
    "Seus detalhes salvam um projeto hoje.",
    "Perfeição é miragem — excelência é caminho.",
    "Organize uma coisa pequena e veja sua mente clarear.",
    "Sua análise resolve um problema que pareceu insolúvel.",
    "Servir é nobre. Mas servir-se também é.",
    "A virgem sábia separa o joio do trigo sem julgar.",
  ],
  "Libra":[
    "Afrodite te concede beleza — espalhe-a hoje.",
    "Equilíbrio não é meio-termo. É sabedoria de pesar.",
    "Hoje, sua diplomacia pacifica uma tempestade.",
    "Justiça pede escolha — não fuja dela.",
    "Sua presença harmoniza ambientes.",
    "Beleza é frequência. Esteja na sua.",
    "A balança da deusa pesa intenções, não atos.",
  ],
  "Escorpião":[
    "Hades te ensina: morrer para velhos hábitos é renascer.",
    "Sua profundidade assusta — mas atrai os corajosos.",
    "Transformação é seu estado natural. Confie no processo.",
    "Hoje uma verdade oculta vem à luz.",
    "Intensidade não é defeito. É chamado.",
    "Seu olhar lê o que não foi dito.",
    "Renasça hoje. Quantas vezes for preciso.",
  ],
  "Sagitário":[
    "Zeus te lança a flecha — mire alto.",
    "Sabedoria sem aventura é apenas teoria.",
    "Hoje, uma viagem física ou mental se abre.",
    "Otimismo é estratégia. Mantenha-o.",
    "Sua expansão inspira outros a crescer.",
    "O centauro Quíron ensinou heróis. Você ensina hoje.",
    "Liberdade interior antes de qualquer outra.",
  ],
  "Capricórnio":[
    "Cronos te paga o tempo — você merecerá.",
    "Disciplina hoje é felicidade amanhã.",
    "Sua ambição é sagrada — não a peça desculpas.",
    "A montanha não muda — você fica mais forte.",
    "Estrutura é liberdade disfarçada.",
    "Maturidade é seu superpoder. Use-o hoje.",
    "O que você constrói durará mais que você. Bom.",
  ],
  "Aquário":[
    "Prometeu te traz o fogo — compartilhe-o.",
    "Sua singularidade é serviço à humanidade.",
    "Inovação começa com 'e se?'. Pergunte hoje.",
    "Você enxerga o futuro antes que ele exista.",
    "Liberdade individual + responsabilidade coletiva = você.",
    "Sua estranheza é talento — abrace-a.",
    "O futuro lembra dos visionários. Continue.",
  ],
  "Peixes":[
    "Poseidon te empresta o oceano. Mergulhe.",
    "Sua intuição é canal — proteja a frequência.",
    "Hoje, arte cura o que palavras não alcançam.",
    "Sua compaixão é dom, não fraqueza.",
    "Sonhar é trabalho sério. Continue sonhando.",
    "Limites são amor disfarçado. Coloque-os.",
    "Você é o último signo — sabedoria de todos os outros vive em você.",
  ],
};

export const FRASES_CHINESAS = {
  rato:     ["Sua perspicácia abre uma porta hoje.","Adapte-se rápido — o universo recompensa quem se move primeiro.","Confie no instinto que diz 'agora'."],
  boi:      ["Sua persistência é magia — não a interrompa.","Hoje, um trabalho longo dá fruto.","Honra é silêncio bem trabalhado."],
  tigre:    ["Sua coragem é contagiosa. Use-a com causa.","Hoje, um salto se exige. Salte.","Liderança natural — assuma o que é seu."],
  coelho:   ["Sua diplomacia evita um conflito hoje.","A sorte segue quem cuida do detalhe.","Refinamento é poder discreto."],
  dragao:   ["Sua presença muda salas. Esteja consciente disso.","Hoje, mostre o ouro que sabe esconder.","Carisma com humildade é imbatível."],
  serpente: ["Sua sabedoria silenciosa fala mais que mil discursos.","Hoje, observe antes de agir.","Intuição profunda — confie nela."],
  cavalo:   ["Movimento é cura para você. Saia.","Sua liberdade inspira outros a libertar-se.","Energia em alta — direcione com intenção."],
  carneiro: ["Sua arte sensibiliza alguém hoje.","Gentileza é sua força — não a confunda com fraqueza.","Beleza simples é seu caminho."],
  macaco:   ["Sua engenhosidade resolve algo hoje.","Humor é estratégia para você.","Adapte, invente, surpreenda."],
  galo:     ["Sua honestidade abre — e fecha — portas hoje.","Confiança em si é seu maior trunfo.","Verdade dita com classe é poder.",],
  cachorro: ["Sua lealdade é raridade — honre quem honra você.","Hoje, defenda alguém que precisa.","Justiça é seu motor."],
  porco:    ["Sua generosidade volta multiplicada hoje.","Confie no fluxo da abundância.","Bondade nunca é desperdício."],
};

export const FRASES_VEDICAS = {
  "Mesha":      ["Mangal te empresta vigor — comece o que adiou.","Sua chama é sagrada. Não a desperdice com pequenas brigas.","Pioneirismo é dharma seu."],
  "Vrishabha":  ["Shukra te ensina: beleza e prazer são caminhos espirituais.","Estabilidade é o terreno onde a alma floresce.","Construa sem pressa hoje."],
  "Mithuna":    ["Budha te dá clareza — fale, escreva, ensine.","Curiosidade é meditação para você.","Diálogo profundo te aguarda."],
  "Karka":      ["Chandra te embala — sinta sem se afogar.","Sua intuição é canal sagrado.","Cuidado próprio é karma puro."],
  "Simha":      ["Surya brilha em você — generosidade real ilumina mais.","Nobreza é serviço, não vaidade.","Hoje, ilumine alguém."],
  "Kanya":      ["Budha te aguça — discrimine com compaixão.","Servir é seu yoga.","Perfeição imperfeita é ainda melhor."],
  "Tula":       ["Shukra te equilibra — harmonia é seu mantra hoje.","Beleza interior reflete em todos os encontros.","Justiça com leveza."],
  "Vrishchika": ["Mangal queima o velho — deixe arder.","Transformação é seu caminho. Honre-a.","Profundidade não é defeito — é dom."],
  "Dhanu":      ["Guru te expande — aprenda, ensine, viaje.","Liberdade espiritual é seu chamado.","Otimismo informado é sabedoria."],
  "Makara":     ["Shani te disciplina — paciência paga dividendos.","Estrutura é liberdade futura.","Maturidade é seu superpoder."],
  "Kumbha":     ["Shani te tira do óbvio — pense além.","Humanidade é seu campo.","Inovação com propósito."],
  "Meena":      ["Guru te conecta ao divino — confie nas mensagens sutis.","Compaixão é seu yoga.","Arte é oração para você."],
};

// ============================================================
// FUNÇÃO HELPER — Frase do dia rotacionando
// ============================================================
export const getFraseGrega = (signo, dayOfYear) => {
  const pool = FRASES_GREGAS[signo];
  if (!pool) return null;
  return pool[dayOfYear % pool.length];
};

export const getFraseChinesa = (animal, dayOfYear) => {
  const pool = FRASES_CHINESAS[animal];
  if (!pool) return null;
  return pool[dayOfYear % pool.length];
};

export const getFraseVedica = (rashi, dayOfYear) => {
  const pool = FRASES_VEDICAS[rashi];
  if (!pool) return null;
  return pool[dayOfYear % pool.length];
};

// ============================================================
// DATA: espiritualidade.js
// ============================================================
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
export const HOROSCOPO_DIARIO = {
  "Áries":      ["Sua energia está no pico. Inicie o que estava adiando — o timing é perfeito.", "Um relacionamento pede atenção. Ouça antes de agir.", "Foco financeiro hoje. Revise gastos e pense no médio prazo."],
  "Touro":      ["Estabilidade é sua força hoje. Confie no processo sem apressar.", "Afetos pedem expressão. Diga o que sente — vale a pena.", "Projetos criativos recebem energia extra. Deixe fluir."],
  "Gêmeos":     ["Sua comunicação está afiada. Use-a para resolver pendências.", "Mente acelerada — anote as ideias antes que passem.", "Um encontro inesperado pode mudar perspectivas."],
  "Câncer":     ["Intuição em alta. O que você sente sobre uma situação está correto.", "Casa e família pedem presença e carinho hoje.", "Finanças pedem cautela. Economize antes de gastar."],
  "Leão":       ["Dia de brilhar. Não diminua sua luz por medo de incomodar.", "Liderança natural aflora — use com generosidade.", "Criatividade em alta: expresse, crie, apareça."],
  "Virgem":     ["Atenção aos detalhes traz resultado hoje. Termine o que está pendente.", "Saúde mental pede pausa. Um momento de silêncio faz diferença.", "Análise antes de decidir — sua intuição está alinhada com a razão."],
  "Libra":      ["Harmonia é possível hoje. Busque o meio-termo sem perder sua verdade.", "Beleza e arte elevam o dia. Reserve tempo para o que é bom.", "Relacionamentos pedem equilíbrio — dê e receba na mesma medida."],
  "Escorpião":  ["Transformação em andamento. O que parece fim é começo.", "Intensidade emocional alta — canal-ize para criar algo.", "Confiança peça do dia. Verifique quem merece acesso ao seu interior."],
  "Sagitário":  ["Expansão! Um novo horizonte se abre — dê o passo.", "Filosofia e sentido: bom dia para estudar e refletir.", "Aventura pequena ou grande — saia da rotina de alguma forma."],
  "Capricórnio":["Disciplina + foco = resultado garantido. Trabalhe com intenção.", "Responsabilidade e prazer podem coexistir — não exagere no dever.", "Seu esforço está sendo notado, mesmo em silêncio."],
  "Aquário":    ["Inovação pede passagem. Pense fora da caixa sem medo.", "Amizades trazem presentes inesperados hoje.", "Causa coletiva ou ideia original — compartilhe o que pensa."],
  "Peixes":     ["Sensibilidade em alta. Proteja sua energia dos ambientes pesados.", "Arte, música e espiritualidade alimentam hoje como comida.", "Um sonho recente pode ter mensagem — reflita antes de descartar."],
};

// #8 Afirmações astrais por signo (3 por signo, DOY%3)
export const AFIRMACOES_ASTRAL = {
  "Áries":      ["Eu ajo com coragem e confio no meu impulso vital.","Minha energia é um presente — uso-a com intenção.","Inicio o que importa e completo o que começo."],
  "Touro":      ["Eu mereço abundância e a recebo com gratidão.","Minha constância constrói o que nenhuma pressa alcança.","Estou enraizado e em paz com o tempo das coisas."],
  "Gêmeos":     ["Minha mente é um instrumento de conexão e criação.","Comunico com clareza o que sinto e o que preciso.","Cada conversa me expande e me aproxima do outro."],
  "Câncer":     ["Cuido de mim com a mesma ternura com que cuido dos outros.","Minha intuição é confiável — eu a ouço.","Lar é onde meu coração se sente seguro."],
  "Leão":       ["Brilho sem pedir permissão e inspiro quem me cerca.","Minha generosidade é minha força mais autêntica.","Expresso quem sou com alegria e com presença."],
  "Virgem":     ["Minha atenção cria excelência — e eu me orgulho disso.","Sirvo com cuidado e também cuido de mim.","Perfeição é uma direção, não uma exigência."],
  "Libra":      ["Encontro o equilíbrio e o mantenho com elegância.","Minha busca por justiça começa em mim mesmo.","Cada relação que cultivo me espelha e me enriquece."],
  "Escorpião":  ["Tenho profundidade que transforma tudo que toca.","Minha intensidade é um dom — uso com sabedoria.","Renasço de cada ciclo mais forte e mais inteiro."],
  "Sagitário":  ["O horizonte me convida — e eu respondo com entusiasmo.","Minha fé no futuro é combustível para o presente.","Cada experiência me ensina algo que não há livro que dê."],
  "Capricórnio":["Construo devagar e com solidez o que vai durar.","Minha disciplina é um ato de amor para com o futuro.","Reconheço meu esforço e me permito descansar."],
  "Aquário":    ["Sou único — e essa singularidade é minha contribuição.","Minhas ideias têm poder de mudar o que parece fixo.","Liberdade e responsabilidade andam juntas em mim."],
  "Peixes":     ["Minha sensibilidade é um superpoder — a honro.","Confio no fluxo da vida e me entrego ao que é.","Amor e compaixão são minha natureza mais profunda."],
};

// #9 Elementos em destaque (rotaciona por DOY%4)
export const ELEMENTOS_DIA = [
  {e:"Fogo 🔥",emoji:"🔥",cor:"#DC2626",msg:"Energia de ação, paixão e iniciativa domina hoje. Ideal para começar, liderar e criar com intensidade.",signos:"Áries · Leão · Sagitário",dica:"Aja primeiro, analise depois."},
  {e:"Terra 🌱",emoji:"🌱",cor:"#059669",msg:"Energia de estabilidade, praticidade e construção. Bom dia para planejar, organizar e consolidar.",signos:"Touro · Virgem · Capricórnio",dica:"Construa com paciência — durará mais."},
  {e:"Ar 💨",emoji:"💨",cor:"#3B82F6",msg:"Energia de comunicação, ideias e conexões. Conversas importantes, trocas criativas e insights.",signos:"Gêmeos · Libra · Aquário",dica:"Escreva, fale, conecte."},
  {e:"Água 🌊",emoji:"🌊",cor:"#6366F1",msg:"Energia emocional, intuição e profundidade. Dia para sentir, curar e escutar o que está por baixo.",signos:"Câncer · Escorpião · Peixes",dica:"Confie no que você sente."},
];

// #11 Superluas 2026 (#17 também)
export const SUPERLUAS_2026 = [
  {data:"2026-01-14",nome:"Superlua de Capricórnio",desc:"A maior superlua do ano — 30% mais brilhante que o normal."},
  {data:"2026-02-12",nome:"Superlua de Leão",desc:"Lua cheia intensa com apelo ao coração e à expressão criativa."},
  {data:"2026-03-14",nome:"Superlua de Virgem",desc:"Energia de renovação e saúde — ideal para novos hábitos."},
  {data:"2026-11-25",nome:"Superlua de Gêmeos",desc:"Superlua de outono — poderosa para comunicação e decisões."},
  {data:"2026-12-24",nome:"Superlua de Câncer",desc:"Superlua no Natal — energia emocional intensa, família e lar."},
];
export const getProximaSuperlua = () => {
  const hoje = new Date();
  for (const sl of SUPERLUAS_2026) {
    const d = new Date(sl.data);
    if (d >= hoje) {
      const dias = Math.ceil((d - hoje) / 86400000);
      return {...sl, dias, dataFmt: `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`};
    }
  }
  return null;
};

// #18 Tarot — 22 Arcanos Maiores (DOY%22)
