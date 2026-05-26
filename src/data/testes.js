// ============================================================
// KOMPARAI — TESTES EXPANDIDOS
// Amor, Político, Personalidade, QI, Profissional
// ============================================================

// ============================================================
// 1. TESTE DE AMOR (5 Linguagens do Amor - Gary Chapman)
// ============================================================
export const AMOR_INTRO = {
  emoji: "💘",
  nome: "As 5 Linguagens do Amor",
  criador: "Gary Chapman",
  historia: "Em 1992, Gary Chapman publicou 'As 5 Linguagens do Amor'. O livro vendeu mais de 20 milhões de cópias.",
  comoFunciona: "O teste identifica qual das 5 formas você mais sente amor.",
  comoInterpretar: "Sua linguagem dominante é como você prefere RECEBER amor.",
};

export const AMOR_QUESTIONS = [
  { q: "O que mais te emociona em um relacionamento?", opts: [
    { t: "Receber elogios e palavras de carinho", w: "palavras" },
    { t: "Passar tempo de qualidade junto", w: "tempo" },
    { t: "Ganhar um presente que mostre cuidado", w: "presentes" },
    { t: "Quando alguém faz algo prático por mim", w: "atos" },
    { t: "Um abraço apertado ou toque carinhoso", w: "toque" }
  ]},
  { q: "Em uma briga, o que mais te machuca?", opts: [
    { t: "Palavras duras ou silêncio gelado", w: "palavras" },
    { t: "Sentir que sou ignorado(a)", w: "tempo" },
    { t: "Datas importantes esquecidas", w: "presentes" },
    { t: "Ter que fazer tudo sozinho(a)", w: "atos" },
    { t: "Falta de afeto físico", w: "toque" }
  ]},
  { q: "Como você expressa amor mais naturalmente?", opts: [
    { t: "Falando e fazendo elogios", w: "palavras" },
    { t: "Reservando momentos exclusivos", w: "tempo" },
    { t: "Comprando ou criando presentes", w: "presentes" },
    { t: "Cuidando, ajudando, resolvendo", w: "atos" },
    { t: "Abraços, beijos, toques", w: "toque" }
  ]},
  { q: "Numa data especial, o que faz seu dia perfeito?", opts: [
    { t: "Uma carta ou mensagem profunda", w: "palavras" },
    { t: "Um dia inteiro só pra nós dois", w: "tempo" },
    { t: "Um presente surpresa especial", w: "presentes" },
    { t: "Alguém fazendo tudo por mim", w: "atos" },
    { t: "Muito carinho físico", w: "toque" }
  ]},
  { q: "O que mais te faz sentir amado(a)?", opts: [
    { t: "Ouvir 'estou orgulhoso(a) de você'", w: "palavras" },
    { t: "Quando largam tudo pra estar comigo", w: "tempo" },
    { t: "Pequenos mimos sem motivo", w: "presentes" },
    { t: "Café pronto, roupa lavada", w: "atos" },
    { t: "Mão segurada, abraço sem motivo", w: "toque" }
  ]},
  { q: "Em qual situação se sente mais distante?", opts: [
    { t: "Quando não dizem nada bonito", w: "palavras" },
    { t: "Quando estão no celular", w: "tempo" },
    { t: "Quando esquecem aniversário", w: "presentes" },
    { t: "Quando não me ajudam", w: "atos" },
    { t: "Quando não me tocam", w: "toque" }
  ]},
  { q: "Como gostaria de ser comemorado(a)?", opts: [
    { t: "Discurso emocionante", w: "palavras" },
    { t: "Viagem ou jantar especial", w: "tempo" },
    { t: "Presente memorável", w: "presentes" },
    { t: "Festa organizada por quem ama", w: "atos" },
    { t: "Abraço apertado e duradouro", w: "toque" }
  ]},
  { q: "O que te conquista mais rápido?", opts: [
    { t: "Pessoa que se expressa bem", w: "palavras" },
    { t: "Pessoa que dá atenção total", w: "tempo" },
    { t: "Pessoa atenciosa com mimos", w: "presentes" },
    { t: "Pessoa que age e resolve", w: "atos" },
    { t: "Pessoa carinhosa fisicamente", w: "toque" }
  ]},
  { q: "Como quer ser lembrado(a)?", opts: [
    { t: "Como alguém que falava coisas bonitas", w: "palavras" },
    { t: "Como alguém que esteve presente", w: "tempo" },
    { t: "Como alguém atencioso(a) com mimos", w: "presentes" },
    { t: "Como alguém que cuidou", w: "atos" },
    { t: "Como alguém afetuoso(a)", w: "toque" }
  ]},
  { q: "O que mais aquece seu coração?", opts: [
    { t: "Mensagem 'pensei em você'", w: "palavras" },
    { t: "Um passeio simples mas atento", w: "tempo" },
    { t: "Trazer uma florzinha ou doce", w: "presentes" },
    { t: "Resolver algo que me incomodava", w: "atos" },
    { t: "Abraço por trás enquanto cozinho", w: "toque" }
  ]},
  { q: "Quando triste, o que mais conforta?", opts: [
    { t: "Alguém me dizer palavras certas", w: "palavras" },
    { t: "Companhia silenciosa", w: "tempo" },
    { t: "Um presentinho que alegre", w: "presentes" },
    { t: "Alguém fazendo as tarefas por mim", w: "atos" },
    { t: "Um abraço bem longo", w: "toque" }
  ]},
  { q: "Qual presente ideal para você?", opts: [
    { t: "Uma carta escrita à mão", w: "palavras" },
    { t: "Uma experiência pra fazer juntos", w: "tempo" },
    { t: "Algo material bem pensado", w: "presentes" },
    { t: "Um serviço útil", w: "atos" },
    { t: "Massagem ou spa em casa", w: "toque" }
  ]},
  { q: "Numa amizade verdadeira, valoriza:", opts: [
    { t: "Pessoa que sabe falar a coisa certa", w: "palavras" },
    { t: "Pessoa presente nas horas importantes", w: "tempo" },
    { t: "Pessoa que lembra de detalhes", w: "presentes" },
    { t: "Pessoa que aparece quando precisa", w: "atos" },
    { t: "Pessoa carinhosa, abraça forte", w: "toque" }
  ]},
  { q: "Numa família ideal, você quer:", opts: [
    { t: "Diálogo aberto e elogios", w: "palavras" },
    { t: "Refeições juntos", w: "tempo" },
    { t: "Tradição de presentes em datas", w: "presentes" },
    { t: "Cada um cuidando do outro", w: "atos" },
    { t: "Casa cheia de abraços", w: "toque" }
  ]},
  { q: "O que sentiria mais falta?", opts: [
    { t: "Conversas profundas e elogios", w: "palavras" },
    { t: "Momentos só nossos", w: "tempo" },
    { t: "Pequenos mimos cotidianos", w: "presentes" },
    { t: "Ajuda prática", w: "atos" },
    { t: "Calor humano físico", w: "toque" }
  ]},
];

export const AMOR_INFO = {
  palavras: { nome: "Palavras de Afirmação", emoji: "💬", cor: "#3B82F6",
    desc: "Você se sente amado(a) quando ouve palavras carinhosas, elogios e afirmações.",
    fortes: ["Sabe expressar amor verbalmente","Reconhece o esforço dos outros","Cria laços profundos pela conversa","É excelente comunicador(a)"],
    atencao: ["Pode se ferir muito com palavras duras","Precisa de validação constante","Silêncio é interpretado como rejeição","Pode ser supersensível"],
    dicas: ["Peça à pessoa amada para elogiar mais","Evite parceiros que se calam","Escreva bilhetes","Diga 'eu te amo' diariamente"]
  },
  tempo: { nome: "Tempo de Qualidade", emoji: "⏰", cor: "#8B5CF6",
    desc: "Você se sente amado(a) com atenção exclusiva, sem distrações.",
    fortes: ["Constrói relações profundas","Sabe escutar de verdade","Valoriza experiências","Cria memórias inesquecíveis"],
    atencao: ["Sofre com pessoas distraídas","Pode parecer ciumento(a)","Expectativa de atenção total","Compromissos cancelados machucam"],
    dicas: ["Marque encontros sem celular","Faça caminhadas em duplas","Evite quem está sempre ocupado","Crie rituais semanais"]
  },
  presentes: { nome: "Presentes", emoji: "🎁", cor: "#EC4899",
    desc: "Você se sente amado(a) com mimos — pelo gesto, não pelo valor.",
    fortes: ["Atencioso(a) com datas","Sabe surpreender","Aprecia significado","Lembra detalhes"],
    atencao: ["Pode ser visto como materialista","Sofre se data é esquecida","Compara mimos recebidos","Confunde presente com afeto"],
    dicas: ["Comunique seu apreço","O gesto importa","Crie tradições","Caixa de memórias"]
  },
  atos: { nome: "Atos de Serviço", emoji: "🤝", cor: "#10B981",
    desc: "Você se sente amado(a) quando fazem coisas práticas.",
    fortes: ["Pé no chão, prático","Resolve problemas","Não espera reconhecimento","Demonstra amor pela ação"],
    atencao: ["Pode se sentir explorado(a)","Promessas não cumpridas machucam","Acha palavras vazias","Sobrecarrega-se"],
    dicas: ["Peça ajuda quando precisar","Reconheça atos pequenos","Não tente fazer tudo sozinho(a)","Divida tarefas"]
  },
  toque: { nome: "Toque Físico", emoji: "🤗", cor: "#F59E0B",
    desc: "Você se sente amado(a) com abraços, beijos, mãos seguradas.",
    fortes: ["Caloroso(a) e afetuoso(a)","Confortar com presença","Conexão emocional rápida","Empático(a) ao toque"],
    atencao: ["Pode invadir espaço","Sofre com parceiros distantes","Confunde afeto com intimidade","Pode parecer carente"],
    dicas: ["Peça abraços quando precisar","Respeite limites","Conecte-se em pequenos toques","Massagem mútua"]
  },
};

// ============================================================
// 2. TESTE POLÍTICO
// ============================================================
export const POLITICO_INTRO = {
  emoji: "🗳️",
  nome: "Espectro Político",
  criador: "Adaptado do Political Compass",
  historia: "O Political Compass surgiu em 2001. Antes, Hans Eysenck (1954) propunha dois eixos: econômico e social.",
  comoFunciona: "15 perguntas mapeiam suas preferências em 4 vertentes.",
  comoInterpretar: "Não é rótulo — é tendência.",
};

export const POLITICO_QUESTIONS = [
  { q: "Sobre saúde pública:", opts: [
    { t: "Deve ser 100% estatal e gratuita", w: "esquerda" },
    { t: "Sistema misto público e privado", w: "centro" },
    { t: "Planos privados são mais eficientes", w: "direita" },
    { t: "Cada um cuide de si", w: "liberal" }
  ]},
  { q: "Sobre impostos:", opts: [
    { t: "Ricos devem pagar muito mais", w: "esquerda" },
    { t: "Progressividade moderada", w: "centro" },
    { t: "Alíquotas menores", w: "direita" },
    { t: "Imposto mínimo ou flat tax", w: "liberal" }
  ]},
  { q: "Sobre meio ambiente:", opts: [
    { t: "Prioridade máxima", w: "esquerda" },
    { t: "Equilíbrio com economia", w: "centro" },
    { t: "Desenvolvimento vem primeiro", w: "direita" },
    { t: "Mercado resolve com inovação", w: "liberal" }
  ]},
  { q: "Sobre segurança pública:", opts: [
    { t: "Combater pobreza resolve violência", w: "esquerda" },
    { t: "Investimento social e policiamento", w: "centro" },
    { t: "Mais policiamento e penas severas", w: "direita" },
    { t: "Cada um armar-se", w: "liberal" }
  ]},
  { q: "Sobre educação:", opts: [
    { t: "Escola pública para todos", w: "esquerda" },
    { t: "Público com vouchers", w: "centro" },
    { t: "Escola privada e religiosa", w: "direita" },
    { t: "Homeschooling livre", w: "liberal" }
  ]},
  { q: "Sobre economia:", opts: [
    { t: "Estado forte, planificação", w: "esquerda" },
    { t: "Economia mista com regulação", w: "centro" },
    { t: "Privatizações e mercado livre", w: "direita" },
    { t: "Libertarismo econômico", w: "liberal" }
  ]},
  { q: "Sobre habitação:", opts: [
    { t: "Moradia é direito, Estado garante", w: "esquerda" },
    { t: "Programas com mercado regulado", w: "centro" },
    { t: "Mercado imobiliário livre", w: "direita" },
    { t: "Sem intervenção", w: "liberal" }
  ]},
  { q: "Sobre migração:", opts: [
    { t: "Fronteiras abertas", w: "esquerda" },
    { t: "Políticas humanitárias com controle", w: "centro" },
    { t: "Controle rigoroso", w: "direita" },
    { t: "Livre movimentação", w: "liberal" }
  ]},
  { q: "Sobre cultura e arte:", opts: [
    { t: "Estado financiar cultura", w: "esquerda" },
    { t: "Editais seletivos", w: "centro" },
    { t: "Iniciativa privada", w: "direita" },
    { t: "Cultura sem subsídio", w: "liberal" }
  ]},
  { q: "Sobre família:", opts: [
    { t: "Todos os modelos são iguais", w: "esquerda" },
    { t: "Respeito à diversidade", w: "centro" },
    { t: "Família tradicional é pilar", w: "direita" },
    { t: "Estado não deve opinar", w: "liberal" }
  ]},
  { q: "Sobre tecnologia e privacidade:", opts: [
    { t: "Estado regular big techs", w: "esquerda" },
    { t: "LGPD efetiva", w: "centro" },
    { t: "Mercado autorregula", w: "direita" },
    { t: "Privacidade total", w: "liberal" }
  ]},
  { q: "Sobre auxílios sociais:", opts: [
    { t: "Renda básica universal", w: "esquerda" },
    { t: "Foco em vulneráveis", w: "centro" },
    { t: "Apenas extremamente necessitados", w: "direita" },
    { t: "Auxílios criam dependência", w: "liberal" }
  ]},
  { q: "Sobre religião no Estado:", opts: [
    { t: "Estado 100% laico", w: "esquerda" },
    { t: "Laico mas respeitoso", w: "centro" },
    { t: "Valores cristãos guiam", w: "direita" },
    { t: "Estado não tem nada a ver", w: "liberal" }
  ]},
  { q: "Sobre liberdade individual:", opts: [
    { t: "Coletivo acima do individual", w: "esquerda" },
    { t: "Equilíbrio", w: "centro" },
    { t: "Liberdade com responsabilidade moral", w: "direita" },
    { t: "Liberdade absoluta", w: "liberal" }
  ]},
  { q: "Sobre o papel do Estado:", opts: [
    { t: "Estado grande, garantidor", w: "esquerda" },
    { t: "Estado eficiente", w: "centro" },
    { t: "Estado mínimo", w: "direita" },
    { t: "Estado quase zero", w: "liberal" }
  ]},
];

export const POLITICO_INFO = {
  esquerda: { nome: "Esquerda Progressista", emoji: "🌹", cor: "#DC2626",
    desc: "Você valoriza igualdade, direitos coletivos e papel ativo do Estado.",
    fortes: ["Sensível às desigualdades","Defende minorias","Visão coletiva","Pensa no bem comum"],
    atencao: ["Subestima incentivos econômicos","Risco de excesso de Estado","Tensão liberdade vs coletivo","Idealismo distante"],
    dicas: ["Leia experiências socialistas","Debata com diferentes","Equilibre ideal e prática","Conheça casos nórdicos"]
  },
  centro: { nome: "Centro Democrático", emoji: "⚖️", cor: "#3B82F6",
    desc: "Você busca equilíbrio: mercado com regulação, liberdade com responsabilidade.",
    fortes: ["Pragmático","Busca consenso","Adapta-se","Evita extremos"],
    atencao: ["Visto como indeciso","Dificuldade em crises","Pode não avançar","Confundido com oportunismo"],
    dicas: ["Defina limites","Aprofunde-se","Leia diversos","Use dados"]
  },
  direita: { nome: "Direita Conservadora", emoji: "🦅", cor: "#F59E0B",
    desc: "Você valoriza tradição, ordem, mérito e Estado limitado.",
    fortes: ["Responsabilidade individual","Respeito às instituições","Pragmatismo econômico","Defende estabilidade"],
    atencao: ["Resiste a mudanças","Ignora desigualdades","Tensão com marginalizados","Confunde privilégio com mérito"],
    dicas: ["Leia sobre mobilidade social","Debata com quem viveu desigualdade","Conheça casos conservadores","Separe tradição de preconceito"]
  },
  liberal: { nome: "Liberal Libertário", emoji: "🗽", cor: "#10B981",
    desc: "Você prioriza liberdade individual máxima e Estado mínimo.",
    fortes: ["Defensor da liberdade","Pensa longo prazo","Questiona autoridade","Valoriza autonomia"],
    atencao: ["Subestima falhas de mercado","Visão idealizada","Ignora desigualdade inicial","Difícil implementar"],
    dicas: ["Leia Hayek, Friedman","Estude anarco-capitalismo","Debata com quem conhece pobreza","Combine com empatia"]
  },
};

// ============================================================
// 3. TESTE DE PERSONALIDADE
// ============================================================
export const PERSONALIDADE_INTRO = {
  emoji: "🧩",
  nome: "Introvertido, Ambivertido ou Extrovertido?",
  criador: "Carl Gustav Jung",
  historia: "Em 1921, Jung publicou 'Tipos Psicológicos', introduzindo introversão e extroversão.",
  comoFunciona: "15 perguntas analisam como você recupera energia e se relaciona socialmente.",
  comoInterpretar: "Introvertidos recuperam energia na solidão. Extrovertidos na companhia. Ambivertidos fluem.",
};

export const PERSONALIDADE_QUESTIONS = [
  { q: "Depois de um dia social longo:", opts: [
    { t: "Preciso de silêncio para recarregar", w: "intro" },
    { t: "Fico bem com um tempo só depois", w: "ambiv" },
    { t: "Fico energizado e quero continuar", w: "extra" }
  ]},
  { q: "Numa festa grande:", opts: [
    { t: "Fico em cantos com poucos", w: "intro" },
    { t: "Circulo mas recarrego", w: "ambiv" },
    { t: "Falo com todo mundo", w: "extra" }
  ]},
  { q: "Como prefere trabalhar?", opts: [
    { t: "Sozinho com foco e silêncio", w: "intro" },
    { t: "Depende do projeto", w: "ambiv" },
    { t: "Em equipe trocando ideias", w: "extra" }
  ]},
  { q: "Ao conhecer gente nova:", opts: [
    { t: "Fico observando antes", w: "intro" },
    { t: "Interajo conforme situação", w: "ambiv" },
    { t: "Me apresento logo", w: "extra" }
  ]},
  { q: "Seu telefone ideal:", opts: [
    { t: "Sempre no silencioso", w: "intro" },
    { t: "Silencioso em alguns momentos", w: "ambiv" },
    { t: "Sempre ligado", w: "extra" }
  ]},
  { q: "Quando tem problema:", opts: [
    { t: "Processo internamente", w: "intro" },
    { t: "Reflito e depois conto", w: "ambiv" },
    { t: "Conto logo para pensar junto", w: "extra" }
  ]},
  { q: "Fim de semana ideal:", opts: [
    { t: "Casa, ler, série", w: "intro" },
    { t: "Um dia fora, um em casa", w: "ambiv" },
    { t: "Sair o máximo", w: "extra" }
  ]},
  { q: "Em reuniões:", opts: [
    { t: "Penso antes de falar", w: "intro" },
    { t: "Participo quando sinto abertura", w: "ambiv" },
    { t: "Gosto de debater", w: "extra" }
  ]},
  { q: "Amizades, prefere:", opts: [
    { t: "Poucos amigos profundos", w: "intro" },
    { t: "Núcleo íntimo com conhecidos", w: "ambiv" },
    { t: "Muitos amigos variados", w: "extra" }
  ]},
  { q: "Silêncio para você:", opts: [
    { t: "Confortável e necessário", w: "intro" },
    { t: "Ok em doses certas", w: "ambiv" },
    { t: "Desconfortável", w: "extra" }
  ]},
  { q: "Viagem sozinho(a):", opts: [
    { t: "Seria ótimo", w: "intro" },
    { t: "Ok se for curta", w: "ambiv" },
    { t: "Prefiro com companhia", w: "extra" }
  ]},
  { q: "Depois de um dia sozinho:", opts: [
    { t: "Renovado(a)", w: "intro" },
    { t: "Bem, mas com vontade de gente", w: "ambiv" },
    { t: "Inquieto(a) precisando de gente", w: "extra" }
  ]},
  { q: "Você é descrito(a) como:", opts: [
    { t: "Quieto(a), pensativo(a)", w: "intro" },
    { t: "Equilibrado(a), adaptável", w: "ambiv" },
    { t: "Falante, animado(a)", w: "extra" }
  ]},
  { q: "No trabalho remoto:", opts: [
    { t: "Amei, mais produtivo em casa", w: "intro" },
    { t: "Depende do dia", w: "ambiv" },
    { t: "Preferi o escritório", w: "extra" }
  ]},
  { q: "Frase que combina:", opts: [
    { t: "Preciso de espaço para pensar", w: "intro" },
    { t: "Depende do contexto", w: "ambiv" },
    { t: "Energizo com pessoas", w: "extra" }
  ]},
];

export const PERSONALIDADE_INFO = {
  intro: { nome: "Introvertido(a)", emoji: "🌙", cor: "#6366F1",
    desc: "Você recupera energia na solidão, pensa profundamente, prefere conexões profundas.",
    fortes: ["Profundidade","Ótimo(a) ouvinte","Autoconhecimento","Foco natural","Relacionamentos duradouros"],
    atencao: ["Mal interpretado como frio","Sobrecarga em ambientes sociais","Evita oportunidades","Demora para se expressar"],
    dicas: ["Proteja sua energia","Comunique necessidade de silêncio","Use profundidade","Introversão não é timidez"]
  },
  ambiv: { nome: "Ambivertido(a)", emoji: "🌗", cor: "#8B5CF6",
    desc: "Você flui entre os dois mundos. Adaptabilidade é seu presente.",
    fortes: ["Adaptabilidade","Entende intro e extro","Versatilidade","Equilíbrio","Liderança empática"],
    atencao: ["Difícil de 'ler'","Às vezes não sabe o que precisa","Adapta demais","Difícil explicar"],
    dicas: ["Identifique cada modo","Comunique dualidade","Use versatilidade","Abrace ambiguidade"]
  },
  extra: { nome: "Extrovertido(a)", emoji: "☀️", cor: "#F59E0B",
    desc: "Você se energiza com pessoas e ilumina ambientes.",
    fortes: ["Carisma","Rede ampla","Comunicação fluida","Energia inspiradora","Facilidade com novidades"],
    atencao: ["Fala antes de pensar","Sobrecarga de compromissos","Negligencia reflexão","Solidão desconfortável"],
    dicas: ["Reserve silêncio","Pense antes em momentos críticos","Valorize introvertidos","Carisma com propósito"]
  },
};

// ============================================================
// 4. TESTE DE QI CULTURAL
// ============================================================
export const QI_INTRO = {
  emoji: "🧠",
  nome: "QI Cultural",
  criador: "Inspirado em CQ - Inteligência Cultural",
  historia: "Inteligência Cultural foi desenvolvida por Soon Ang e Linn Van Dyne nos anos 2000.",
  comoFunciona: "15 perguntas testam conhecimento em história, ciência, arte e cultura.",
  comoInterpretar: "Não é sobre QI — é sobre curiosidade e abertura.",
};

export const QI_QUESTIONS = [
  { q: "Quem pintou a Mona Lisa?", opts: ["Michelangelo","Leonardo da Vinci","Rafael","Caravaggio"], c: 1 },
  { q: "Em que ano o homem pisou na Lua?", opts: ["1965","1967","1969","1971"], c: 2 },
  { q: "Qual a maior religião do mundo?", opts: ["Islã","Hinduísmo","Budismo","Cristianismo"], c: 3 },
  { q: "Quem escreveu Dom Quixote?", opts: ["Shakespeare","Cervantes","Dante","Goethe"], c: 1 },
  { q: "Onde foi inventado o papel?", opts: ["Egito","Roma","China","Índia"], c: 2 },
  { q: "Pai da democracia ateniense:", opts: ["Sócrates","Platão","Aristóteles","Clístenes"], c: 3 },
  { q: "O que é o Efeito Mandela?", opts: ["Fenômeno climático","Memórias coletivas falsas","Técnica de liderança","Forma de governo"], c: 1 },
  { q: "País com mais pirâmides:", opts: ["Egito","México","Sudão","Peru"], c: 2 },
  { q: "O que é haiku?", opts: ["Instrumento japonês","Poema japonês de 3 versos","Dança ritual","Arte marcial"], c: 1 },
  { q: "Quem foi Nikola Tesla?", opts: ["Inventor da lâmpada","Inventor do rádio","Pioneiro da corrente AC","Criador do telefone"], c: 2 },
  { q: "Onde fica Machu Picchu?", opts: ["África","Ásia","América do Sul","Europa"], c: 2 },
  { q: "O que é o Renascimento?", opts: ["Guerra medieval","Movimento cultural europeu","Reforma religiosa","Revolução industrial"], c: 1 },
  { q: "Compositor surdo na 9ª Sinfonia:", opts: ["Mozart","Bach","Beethoven","Chopin"], c: 2 },
  { q: "O que é Bushido?", opts: ["Culinária japonesa","Código samurai","Cerimônia do chá","Arte de origami"], c: 1 },
  { q: "Quem foi Simone de Beauvoir?", opts: ["Pintora","Filósofa feminista","Rainha","Escritora de ficção científica"], c: 1 },
];

export const QI_LEVELS = [
  { min: 0, max: 4, nome: "Aprendiz", emoji: "🌱", cor: "#10B981", desc: "Sua jornada mal começou." },
  { min: 5, max: 8, nome: "Curioso(a)", emoji: "🔍", cor: "#3B82F6", desc: "Base cultural sólida. Continue explorando!" },
  { min: 9, max: 11, nome: "Culto(a)", emoji: "📚", cor: "#8B5CF6", desc: "Seu repertório impressiona." },
  { min: 12, max: 13, nome: "Erudito(a)", emoji: "🎓", cor: "#F59E0B", desc: "Conhecimento profundo." },
  { min: 14, max: 15, nome: "Gênio Cultural", emoji: "🏆", cor: "#EF4444", desc: "Raro nível de cultura geral!" },
];

// ============================================================
// 5. TESTE PROFISSIONAL
// ============================================================
export const PROFISSIONAL_INTRO = {
  emoji: "💼",
  nome: "Perfil Profissional",
  criador: "Baseado em Holland e Belbin",
  historia: "John Holland (1959) criou tipos vocacionais. Belbin (1970) mapeou papéis em equipes.",
  comoFunciona: "15 perguntas identificam seu perfil entre 4 arquétipos.",
  comoInterpretar: "Não existe perfil melhor.",
};

export const PROFISSIONAL_QUESTIONS = [
  { q: "Numa startup, você seria:", opts: [
    { t: "Fundador visionário", w: "empreendedor" },
    { t: "COO que faz acontecer", w: "executor" },
    { t: "Designer criativo", w: "criativo" },
    { t: "Head de dados", w: "analitico" }
  ]},
  { q: "Diante de problema novo:", opts: [
    { t: "Vejo oportunidade", w: "empreendedor" },
    { t: "Crio plano imediato", w: "executor" },
    { t: "Penso fora da caixa", w: "criativo" },
    { t: "Levanto dados", w: "analitico" }
  ]},
  { q: "Em reunião:", opts: [
    { t: "Defino visão e inspiro", w: "empreendedor" },
    { t: "Defino responsabilidades", w: "executor" },
    { t: "Trago ideias inovadoras", w: "criativo" },
    { t: "Questiono com dados", w: "analitico" }
  ]},
  { q: "Maior medo profissional:", opts: [
    { t: "Estagnado sem impacto", w: "empreendedor" },
    { t: "Projetos sem entrega", w: "executor" },
    { t: "Trabalho sem criatividade", w: "criativo" },
    { t: "Decisões sem dados", w: "analitico" }
  ]},
  { q: "Como aprende melhor:", opts: [
    { t: "Fazendo e iterando", w: "empreendedor" },
    { t: "Processo estruturado", w: "executor" },
    { t: "Experimentando", w: "criativo" },
    { t: "Estudando teoria", w: "analitico" }
  ]},
  { q: "Estilo de liderança:", opts: [
    { t: "Inspiracional", w: "empreendedor" },
    { t: "Orientado a resultado", w: "executor" },
    { t: "Facilitador", w: "criativo" },
    { t: "Consultivo com dados", w: "analitico" }
  ]},
  { q: "Tarefa que energiza:", opts: [
    { t: "Pitch para investidor", w: "empreendedor" },
    { t: "Lançar no prazo", w: "executor" },
    { t: "Criar do zero", w: "criativo" },
    { t: "Analisar métricas", w: "analitico" }
  ]},
  { q: "Maior força:", opts: [
    { t: "Persuasão e visão", w: "empreendedor" },
    { t: "Organização", w: "executor" },
    { t: "Criatividade", w: "criativo" },
    { t: "Raciocínio lógico", w: "analitico" }
  ]},
  { q: "Prefere projetos:", opts: [
    { t: "Novos e desafiadores", w: "empreendedor" },
    { t: "Escopo claro", w: "executor" },
    { t: "Abertos para explorar", w: "criativo" },
    { t: "Com hipóteses claras", w: "analitico" }
  ]},
  { q: "Numa crise:", opts: [
    { t: "Decido rápido e assumo riscos", w: "empreendedor" },
    { t: "Organizo todos", w: "executor" },
    { t: "Busco solução criativa", w: "criativo" },
    { t: "Analiso cenários", w: "analitico" }
  ]},
  { q: "Frase que mais representa:", opts: [
    { t: "Done is better than perfect", w: "empreendedor" },
    { t: "What gets measured gets managed", w: "executor" },
    { t: "Think different", w: "criativo" },
    { t: "Show me the data", w: "analitico" }
  ]},
  { q: "Relação com regras:", opts: [
    { t: "Questiono e rompo", w: "empreendedor" },
    { t: "Sigo e otimizo", w: "executor" },
    { t: "Crio minhas próprias", w: "criativo" },
    { t: "Analiso se fazem sentido", w: "analitico" }
  ]},
  { q: "Time ideal:", opts: [
    { t: "Pessoas com visão", w: "empreendedor" },
    { t: "Pessoas comprometidas", w: "executor" },
    { t: "Pessoas abertas a experimentar", w: "criativo" },
    { t: "Pessoas que questionam com dados", w: "analitico" }
  ]},
  { q: "Mede sucesso por:", opts: [
    { t: "Impacto no mundo", w: "empreendedor" },
    { t: "Metas atingidas", w: "executor" },
    { t: "Originalidade", w: "criativo" },
    { t: "Qualidade técnica", w: "analitico" }
  ]},
  { q: "Área que mais atrai:", opts: [
    { t: "Venture Capital, Startups", w: "empreendedor" },
    { t: "Operações, Gestão", w: "executor" },
    { t: "Design, Marketing, Arte", w: "criativo" },
    { t: "Dados, Finanças, Ciência", w: "analitico" }
  ]},
];

export const PROFISSIONAL_INFO = {
  empreendedor: { nome: "Empreendedor(a)", emoji: "🚀", cor: "#EF4444",
    desc: "Você pensa em oportunidades onde outros veem problemas.",
    fortes: ["Visão estratégica","Tolerância ao risco","Persuasão","Cria oportunidades","Resiliência"],
    atencao: ["Não termina o que começa","Dificuldade com rotina","Negligencia operacional","Impaciência"],
    dicas: ["Junte-se a um executor","Documente ideias","Aprenda a delegar","Construa processos"]
  },
  executor: { nome: "Executor(a)", emoji: "⚙️", cor: "#F59E0B",
    desc: "Você é quem faz acontecer.",
    fortes: ["Organização","Confiabilidade","Gestão de recursos","Liderança por exemplo","Disciplina"],
    atencao: ["Resiste a mudanças","Dificuldade com ambiguidade","Engessa","Subestima criatividade"],
    dicas: ["Reserve tempo estratégico","Abrace mudanças","Valorize criativos","Celebre processo"]
  },
  criativo: { nome: "Criativo(a)", emoji: "🎨", cor: "#8B5CF6",
    desc: "Você enxerga o mundo diferente.",
    fortes: ["Pensamento lateral","Resolução criativa","Inspira","Adaptável","Visão estética"],
    atencao: ["Dificuldade com prazos","Muitas ideias","Parece pouco prático","Sensível a críticas"],
    dicas: ["Use frameworks","Junte-se a executor","Aprenda a vender ideias","Defina critérios"]
  },
  analitico: { nome: "Analítico(a)", emoji: "📊", cor: "#3B82F6",
    desc: "Você navega na complexidade com dados.",
    fortes: ["Pensamento crítico","Decisão baseada em dados","Identifica padrões","Rigor","Antecipa riscos"],
    atencao: ["Análise paraliza","Parece frio","Difícil sem dados","Perfeccionismo"],
    dicas: ["Defina 'bom o suficiente'","Pratique intuição","Equilibre com IE","Comunique simples"]
  },
};
