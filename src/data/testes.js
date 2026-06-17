export const TRADICAO_TESTE_INTRO = {
  emoji: "🧭",
  nome: "Qual tradição espiritual combina com você?",
  criador: "Baseado em tipologias comparativas de tradições mundiais",
  historia: "Estudos comparativos de religião, como os de Mircea Eliade e Karen Armstrong, mostram que cada tradição tem uma 'personalidade' — e que naturalmente somos mais atraídos por algumas do que outras.",
  comoFunciona: "7 perguntas sobre sua espiritualidade, valores e visão de mundo identificam a tradição que mais ressoa com sua alma.",
  comoInterpretar: "O resultado não é uma conversão ou julgamento — é um espelho. Mostra onde seu espírito já está, mesmo sem você saber.",
};

export const TRADICAO_QUESTIONS = [
  { q:"O que mais te conecta com o sagrado?",
    opts:[
      {t:"Rituais, missas e sacramentos",w:"Católica"},
      {t:"Oração direta e leitura da Bíblia",w:"Evangélica"},
      {t:"Meditação e silêncio interior",w:"Budista"},
      {t:"Estudo e tradição dos ancestrais",w:"Judaica"},
      {t:"Devoção e mantras",w:"Hindu"},
      {t:"Oração voltada a Allah cinco vezes ao dia",w:"Islâmica"},
      {t:"Mediunidade e comunicação espiritual",w:"Espírita"},
    ]},
  { q:"Qual visão de vida após a morte ressoa mais com você?",
    opts:[
      {t:"Céu, purgatório e inferno",w:"Católica"},
      {t:"Salvação pela fé em Cristo",w:"Evangélica"},
      {t:"Reencarnação até atingir o Nirvana",w:"Budista"},
      {t:"Olam Ha-Ba: o Mundo Vindouro",w:"Judaica"},
      {t:"Ciclos de karma e moksha",w:"Hindu"},
      {t:"Paraíso (Jannah) para os crentes",w:"Islâmica"},
      {t:"Reencarnação e evolução espiritual",w:"Espírita"},
    ]},
  { q:"Como você sente Deus/o sagrado?",
    opts:[
      {t:"Como Pai amoroso e misericordioso",w:"Católica"},
      {t:"Como Salvador pessoal e presente",w:"Evangélica"},
      {t:"Como a essência de tudo — impessoal",w:"Budista"},
      {t:"Como o Eterno (HaShem) — único e transcendente",w:"Judaica"},
      {t:"Como múltiplas manifestações de uma única verdade",w:"Hindu"},
      {t:"Como Allah — único, eterno, incomparável",w:"Islâmica"},
      {t:"Como espírito superior que guia e ama",w:"Espírita"},
    ]},
  { q:"O que mais importa na vida espiritual?",
    opts:[
      {t:"Os sacramentos e a comunhão com a Igreja",w:"Católica"},
      {t:"A relação pessoal com Jesus Cristo",w:"Evangélica"},
      {t:"O desapego e a compaixão por todos",w:"Budista"},
      {t:"Cumprir as mitsvot (mandamentos) com amor",w:"Judaica"},
      {t:"Dhrama (dever sagrado) e devoção",w:"Hindu"},
      {t:"Submissão a Allah e serviço à humanidade",w:"Islâmica"},
      {t:"A caridade e o progresso espiritual",w:"Espírita"},
    ]},
  { q:"Qual prática espiritual mais te atrai?",
    opts:[
      {t:"Rosário, adoração e novenas",w:"Católica"},
      {t:"Louvor, pregação e estudo bíblico",w:"Evangélica"},
      {t:"Meditação Vipassana ou Zen",w:"Budista"},
      {t:"Shabat, Torá e festas judaicas",w:"Judaica"},
      {t:"Yoga, puja e recitação de mantras",w:"Hindu"},
      {t:"Salat (oração), jejum do Ramadã",w:"Islâmica"},
      {t:"Passes, palestras e estudo doutrinário",w:"Espírita"},
    ]},
  { q:"Qual sentimento define sua espiritualidade?",
    opts:[
      {t:"Devoção e fé na intercessão dos santos",w:"Católica"},
      {t:"Alegria e gratidão pela salvação",w:"Evangélica"},
      {t:"Paz interior e serenidade",w:"Budista"},
      {t:"Pertencimento a uma tradição milenar",w:"Judaica"},
      {t:"Reverência pelo ciclo cósmico da vida",w:"Hindu"},
      {t:"Submissão e paz no coração",w:"Islâmica"},
      {t:"Esperança na evolução da alma",w:"Espírita"},
    ]},
  { q:"Qual ensinamento mais te toca?",
    opts:[
      {t:"'Ama a Deus e ao próximo como a ti mesmo'",w:"Católica"},
      {t:"'Porque Deus amou o mundo...'",w:"Evangélica"},
      {t:"'O sofrimento nasce do apego'",w:"Budista"},
      {t:"'O que é odioso para ti, não faças ao outro'",w:"Judaica"},
      {t:"'Ahimsa — não violência a nenhum ser'",w:"Hindu"},
      {t:"'A ação vale pela intenção'",w:"Islâmica"},
      {t:"'Fora da caridade não há salvação'",w:"Espírita"},
    ]},
];

export const TRADICAO_INFO = {
  Católica: {
    emoji: "✝️", cor: "#1E40AF",
    desc: "Sua alma ressoa com a tradição mais antiga do Ocidente — rica em rituais, santos e uma fé que atravessou 2000 anos.",
    essencia: "Fé que se expressa em comunidade, sacramentos e devoção aos santos como intercessores.",
    convite: "Participe de uma missa, acenda uma vela ou reze um rosário hoje.",
  },
  Evangélica: {
    emoji: "✟", cor: "#0891B2",
    desc: "Você busca uma relação direta e pessoal com Deus, sem intermediários. A Bíblia é seu guia principal.",
    essencia: "Fé baseada na graça, na leitura da Bíblia e no relacionamento pessoal com Jesus Cristo.",
    convite: "Leia um salmo hoje e reflita sobre o que ele fala para a sua vida agora.",
  },
  Budista: {
    emoji: "☸️", cor: "#F59E0B",
    desc: "Seu espírito encontra paz no desapego, na compaixão e na observação do momento presente.",
    essencia: "Caminho do meio: nem excesso nem privação. Compaixão por todos os seres.",
    convite: "Sente em silêncio por 10 minutos. Observe apenas a sua respiração.",
  },
  Judaica: {
    emoji: "✡️", cor: "#7C3AED",
    desc: "Você valoriza tradição, estudo e a aliança entre o humano e o divino que atravessa milênios.",
    essencia: "Tikkun Olam — reparar o mundo. Estudo, comunidade e prática das mitsvot.",
    convite: "Estude uma lei ou provérbio judaico hoje. A sabedoria está na prática.",
  },
  Hindu: {
    emoji: "🕉️", cor: "#DB2777",
    desc: "Sua visão do sagrado é vasta como o oceano — há espaço para muitos caminhos rumo à única verdade.",
    essencia: "Brahman é tudo. Cada ser é divino. O caminho é o yoga — união com o todo.",
    convite: "Pratique uma postura de yoga ou entoe OM três vezes. Sinta a vibração.",
  },
  Islâmica: {
    emoji: "☪️", cor: "#059669",
    desc: "Sua alma encontra paz na submissão plena a Deus e na regularidade da oração que ancora o dia.",
    essencia: "Islam: submissão a Allah. Paz como fruto da entrega e da disciplina espiritual.",
    convite: "Faça uma pausa de gratidão hoje — cinco minutos de silêncio voltado ao Alto.",
  },
  Espírita: {
    emoji: "🌟", cor: "#7C3AED",
    desc: "Você crê na imortalidade da alma, na reencarnação como escola e no amor como lei maior.",
    essencia: "Amor, caridade e progresso espiritual em múltiplas vidas.",
    convite: "Leia uma mensagem de Chico Xavier ou Emmanuel. Deixe que ela fale à sua alma.",
  },
};

// ============================================================
// DATA: testes.js
// ============================================================
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

// ============================================================
// TESTE: QUAL ELEMENTO VOCÊ É
// ============================================================
export const ELEMENTO_INTRO = {
  emoji: "🌪️",
  nome: "Qual Elemento Você É",
  criador: "KomparAI",
  historia: "Desde a antiguidade, os quatro elementos — fogo, terra, ar e água — representam os temperamentos e energias humanas.",
  comoFunciona: "12 perguntas revelam o elemento que mais combina com a sua essência.",
  comoInterpretar: "Seu elemento mostra como você sente, age e se conecta com o mundo.",
};
export const ELEMENTO_QUESTIONS = [
  { q: "Como seus amigos te descreveriam?", opts: [
    { t: "Intenso(a) e cheio(a) de energia", w: "fogo" },
    { t: "Confiável e com os pés no chão", w: "terra" },
    { t: "Divertido(a) e cheio(a) de ideias", w: "ar" },
    { t: "Sensível e profundo(a)", w: "agua" } ]},
  { q: "Como você resolve problemas?", opts: [
    { t: "Partindo logo para a ação", w: "fogo" },
    { t: "Com método e paciência", w: "terra" },
    { t: "Pensando em várias ideias", w: "ar" },
    { t: "Seguindo a intuição", w: "agua" } ]},
  { q: "O que mais te energiza?", opts: [
    { t: "Desafios e competição", w: "fogo" },
    { t: "Uma rotina segura", w: "terra" },
    { t: "Conversas e novidades", w: "ar" },
    { t: "Momentos profundos", w: "agua" } ]},
  { q: "Num grupo, você é:", opts: [
    { t: "Quem lidera", w: "fogo" },
    { t: "Quem organiza", w: "terra" },
    { t: "Quem anima", w: "ar" },
    { t: "Quem acolhe", w: "agua" } ]},
  { q: "Seu maior ponto forte:", opts: [
    { t: "Coragem", w: "fogo" },
    { t: "Persistência", w: "terra" },
    { t: "Criatividade", w: "ar" },
    { t: "Empatia", w: "agua" } ]},
  { q: "Como reage sob pressão?", opts: [
    { t: "Parto pra cima", w: "fogo" },
    { t: "Mantenho o pé no chão", w: "terra" },
    { t: "Improviso na hora", w: "ar" },
    { t: "Sinto tudo intensamente", w: "agua" } ]},
  { q: "Seu ambiente ideal:", opts: [
    { t: "Agitado e competitivo", w: "fogo" },
    { t: "Estável e organizado", w: "terra" },
    { t: "Dinâmico e social", w: "ar" },
    { t: "Calmo e acolhedor", w: "agua" } ]},
  { q: "O que você mais valoriza?", opts: [
    { t: "Conquista", w: "fogo" },
    { t: "Segurança", w: "terra" },
    { t: "Liberdade", w: "ar" },
    { t: "Conexão", w: "agua" } ]},
  { q: "Seu defeito mais provável:", opts: [
    { t: "Impaciência", w: "fogo" },
    { t: "Teimosia", w: "terra" },
    { t: "Dispersão", w: "ar" },
    { t: "Sensibilidade demais", w: "agua" } ]},
  { q: "Fim de semana perfeito:", opts: [
    { t: "Uma aventura", w: "fogo" },
    { t: "Cuidar da casa e descansar", w: "terra" },
    { t: "Sair e encontrar gente", w: "ar" },
    { t: "Relaxar em paz", w: "agua" } ]},
  { q: "Como você decide?", opts: [
    { t: "Rápido e no instinto", w: "fogo" },
    { t: "Ponderando bem", w: "terra" },
    { t: "Analisando as opções", w: "ar" },
    { t: "Pelo que sinto", w: "agua" } ]},
  { q: "O elogio que mais gosta:", opts: [
    { t: "'Você é forte'", w: "fogo" },
    { t: "'Você é confiável'", w: "terra" },
    { t: "'Você é genial'", w: "ar" },
    { t: "'Você é especial'", w: "agua" } ]},
];
export const ELEMENTO_INFO = {
  fogo: { nome: "Fogo", emoji: "🔥", cor: "#EF4444",
    desc: "Você é pura energia, paixão e coragem. Quando decide algo, nada te segura.",
    fortes: ["Coragem e iniciativa","Liderança natural","Energia contagiante","Determinação"],
    atencao: ["Impaciência","Pode agir por impulso","Esquenta a cabeça rápido","Dificuldade de esperar"],
    dicas: ["Respire antes de reagir","Canalize a energia em metas","Ouça antes de decidir","Descanse também"] },
  terra: { nome: "Terra", emoji: "🌱", cor: "#10B981",
    desc: "Você é estabilidade e confiança. As pessoas sabem que podem contar com você.",
    fortes: ["Persistência","Confiabilidade","Pé no chão","Sabe construir a longo prazo"],
    atencao: ["Teimosia","Resistência a mudanças","Pode ser inflexível","Excesso de cautela"],
    dicas: ["Abra-se ao novo","Aceite ajuda","Permita-se arriscar às vezes","Flexibilize planos"] },
  ar: { nome: "Ar", emoji: "💨", cor: "#38BDF8",
    desc: "Você é intelecto, comunicação e liberdade. Sua mente está sempre criando.",
    fortes: ["Criatividade","Comunicação","Adaptabilidade","Curiosidade"],
    atencao: ["Dispersão","Dificuldade de focar","Pode prometer demais","Inconstância"],
    dicas: ["Termine o que começa","Crie rotinas leves","Foque numa coisa por vez","Aterrisse as ideias"] },
  agua: { nome: "Água", emoji: "🌊", cor: "#3B82F6",
    desc: "Você é emoção, intuição e empatia. Sente o mundo em profundidade.",
    fortes: ["Empatia","Intuição apurada","Profundidade emocional","Sabe acolher"],
    atencao: ["Sensibilidade excessiva","Absorve a energia dos outros","Pode se magoar fácil","Dificuldade de impor limites"],
    dicas: ["Cuide das suas energias","Estabeleça limites","Não leve tudo pro coração","Reserve momentos só seus"] },
};

// ============================================================
// TESTE: TIPO DE SONHADOR
// ============================================================
export const SONHADOR_INTRO = {
  emoji: "🌙",
  nome: "Tipo de Sonhador",
  criador: "KomparAI",
  historia: "Desde a Antiguidade, os sonhos fascinam filósofos, artistas e cientistas. Salvador Dalí dormia com uma chave na mão para capturar o estado entre o sono e a vigília. Paul McCartney compôs Yesterday num sonho. O inconsciente fala — e o modo como você sonha revela quem você é.",
  comoFunciona: "12 perguntas sobre seus sonhos, hábitos noturnos e imaginação. Não há respostas certas. Responda pelo que mais se parece com você.",
  comoInterpretar: "Seu perfil de sonhador reflete como seu cérebro processa emoções, memórias e criatividade. Cada tipo tem talentos únicos — descubra o seu.",
};
export const SONHADOR_QUESTIONS = [
  { q:"Você costuma lembrar dos seus sonhos ao acordar?", opts:[
    {t:"Quase sempre — às vezes com detalhes vívidos",w:"visionario"},
    {t:"Com frequência, especialmente se foram intensos",w:"navegador"},
    {t:"Às vezes, mas os detalhes somem rápido",w:"observador"},
    {t:"Raramente — acordo sem memória do que sonhei",w:"construtor"},
  ]},
  { q:"Como são seus sonhos na maioria das vezes?", opts:[
    {t:"Simbólicos, surreais, cheios de imagens e metáforas",w:"visionario"},
    {t:"Aventuras, viagens, situações de ação e movimento",w:"navegador"},
    {t:"Situações do cotidiano, realistas e detalhadas",w:"observador"},
    {t:"Fragmentados — resolvo problemas ou planejo coisas",w:"construtor"},
  ]},
  { q:"Você já teve uma ideia brilhante ou resolveu um problema depois de dormir?", opts:[
    {t:"Sim, frequentemente acordo com insights criativos",w:"visionario"},
    {t:"Sim, às vezes acordo sabendo o que preciso fazer",w:"construtor"},
    {t:"Raramente, mas já aconteceu algumas vezes",w:"observador"},
    {t:"Não muito — prefiro resolver no mundo real",w:"navegador"},
  ]},
  { q:"Nos seus sonhos, você costuma ser:", opts:[
    {t:"Um observador que vê tudo, quase como um narrador",w:"observador"},
    {t:"O protagonista em aventuras e desafios",w:"navegador"},
    {t:"Um personagem em situações simbólicas ou estranhas",w:"visionario"},
    {t:"Alguém focado em resolver algo ou construir",w:"construtor"},
  ]},
  { q:"O cenário dos seus sonhos geralmente é:", opts:[
    {t:"Lugares que não existem, paisagens impossíveis",w:"visionario"},
    {t:"Ambientes familiares — casa, trabalho, cidade",w:"observador"},
    {t:"Lugares novos — florestas, cidades estranhas, oceanos",w:"navegador"},
    {t:"Ambientes de trabalho, escolas, canteiros de obras",w:"construtor"},
  ]},
  { q:"Quando algo te preocupa muito, como seus sonhos reagem?", opts:[
    {t:"Sonho com situações simbólicas sobre o problema",w:"visionario"},
    {t:"Sonho literalmente com o problema acontecendo",w:"observador"},
    {t:"Sonho com situações de fuga, luta ou superação",w:"navegador"},
    {t:"Acordo cedo com o cérebro já calculando soluções",w:"construtor"},
  ]},
  { q:"Você já sonhou com algo que depois aconteceu de verdade?", opts:[
    {t:"Sim, várias vezes — me assusta um pouco",w:"visionario"},
    {t:"Algo parecido, mas provavelmente coincidência",w:"observador"},
    {t:"Uma ou duas vezes, mas foi chocante",w:"navegador"},
    {t:"Não acredito muito nisso — prefiro lógica",w:"construtor"},
  ]},
  { q:"Como você se sente ao acordar de um sonho muito intenso?", opts:[
    {t:"Emocionalmente afetado por horas",w:"visionario"},
    {t:"Aliviado ou energizado para o dia",w:"navegador"},
    {t:"Curioso — quero entender o que significou",w:"observador"},
    {t:"Incomodado — preferia ter descansado melhor",w:"construtor"},
  ]},
  { q:"Você voa, cai ou tem poderes nos seus sonhos?", opts:[
    {t:"Sim — voo, levito, tenho poderes especiais",w:"visionario"},
    {t:"Sim — corro, luto, escapo de situações",w:"navegador"},
    {t:"Às vezes — mais cenas de queda ou perseguição",w:"observador"},
    {t:"Raramente — meus sonhos são mais mundanos",w:"construtor"},
  ]},
  { q:"Você consegue controlar o que acontece nos seus sonhos?", opts:[
    {t:"Sim, às vezes percebo que estou sonhando e direciono",w:"visionario"},
    {t:"Toco para ver como a aventura se desenrola",w:"navegador"},
    {t:"Não exatamente, mas noto quando algo está errado",w:"observador"},
    {t:"Não — acordo quando fica impossível",w:"construtor"},
  ]},
  { q:"Como são os personagens dos seus sonhos?", opts:[
    {t:"Misteriosos, arquetípicos — figuras simbólicas",w:"visionario"},
    {t:"Pessoas reais da minha vida, em situações realistas",w:"observador"},
    {t:"Companheiros de aventura — cúmplices e aliados",w:"navegador"},
    {t:"Colegas ou pessoas com quem preciso resolver algo",w:"construtor"},
  ]},
  { q:"O que mais descreve sua relação com o sono?", opts:[
    {t:"O sonho é meu espaço criativo favorito",w:"visionario"},
    {t:"Durmo para recarregar e acordar pronto para agir",w:"navegador"},
    {t:"Observo tudo com curiosidade — meus sonhos são ricos",w:"observador"},
    {t:"Sono é descanso — quanto mais eficiente, melhor",w:"construtor"},
  ]},
];
export const SONHADOR_INFO = {
  visionario: {
    nome:"Visionário", emoji:"🔮", cor:"#7C3AED",
    desc:"Você é o tipo que tem sonhos intensos, simbólicos e cheios de imagens poderosas. Seu inconsciente é rico e criativo — você processa emoções e ideias através de metáforas enquanto dorme. Muitos artistas, poetas e inovadores são Visionários.",
    fortes:["Criatividade intuitiva muito desenvolvida","Profundidade emocional e empatia","Conexão com o inconsciente","Capacidade de fazer links inesperados entre ideias"],
    atencao:["Pode se perder na ruminação","Sonhos intensos podem gerar ansiedade","Dificuldade de 'desligar' o cérebro"],
    dicas:["Mantenha um diário de sonhos ao lado da cama","Pratique meditação para canalizar a criatividade","Use seus sonhos como fonte de inspiração para projetos"],
  },
  navegador: {
    nome:"Navegador", emoji:"🧭", cor:"#10B981",
    desc:"Seus sonhos são aventuras. Você age, explora, luta e supera obstáculos enquanto dorme. Seu cérebro processa desafios de forma ativa e dinâmica — você é alguém que não para, nem nos sonhos. Líderes e aventureiros tendem a ser Navegadores.",
    fortes:["Energia e disposição para enfrentar desafios","Resiliência e capacidade de superar obstáculos","Processamento ativo de medos e conflitos","Coragem intuitiva"],
    atencao:["Pode acordar cansado após sonhos muito intensos","Dificuldade de relaxar completamente","Tendência a levar o trabalho para o sono"],
    dicas:["Crie uma rotina de descompressão antes de dormir","Pratique exercício físico para canalizar a energia","Durma o suficiente — seu cérebro trabalha muito"],
  },
  observador: {
    nome:"Observador", emoji:"🔭", cor:"#06B6D4",
    desc:"Seus sonhos são realistas e detalhados — situações cotidianas que seu cérebro analisa com cuidado. Você é um observador nato, que capta nuances e processa a realidade com precisão. Cientistas, analistas e estrategistas costumam ser Observadores.",
    fortes:["Atenção aos detalhes e memória apurada","Capacidade analítica e pensamento crítico","Bom senso de realidade e objetividade","Processa bem situações complexas do dia a dia"],
    atencao:["Pode se preocupar demais com detalhes","Sonhos ansiosos em períodos de pressão","Dificuldade de se deixar levar pela imaginação"],
    dicas:["Use journaling para processar o que seus sonhos revelam","Explore filmes e livros que ampliem a imaginação","Permita-se sonhar acordado de vez em quando"],
  },
  construtor: {
    nome:"Construtor", emoji:"⚙️", cor:"#F59E0B",
    desc:"Você usa o sono para processar problemas e construir soluções. Seu cérebro não para — ele trabalha silenciosamente enquanto você descansa, e frequentemente você acorda com clareza sobre algo que precisava resolver. Empreendedores e engenheiros costumam ser Construtores.",
    fortes:["Foco e objetividade na resolução de problemas","Aproveita o sono como ferramenta de produtividade","Pragmatismo e clareza mental","Capacidade de planejar intuitivamente"],
    atencao:["Pode subestimar a importância do descanso real","Dificuldade em se desligar do trabalho","Sonhos tensos em períodos de muito estresse"],
    dicas:["Anote as pendências antes de dormir para liberar o cérebro","Pratique respiração profunda para relaxar de verdade","Valorize os momentos de lazer — seu cérebro precisa deles"],
  },
};

// ============================================================
// TESTE: PROFISSÃO DOS SONHOS
// ============================================================
export const PROFISSAO_INTRO = {
  emoji: "💼",
  nome: "Profissão dos Sonhos",
  criador: "KomparAI",
  historia: "Encontrar a área que combina com a sua essência é um dos maiores presentes da vida.",
  comoFunciona: "12 perguntas revelam o tipo de carreira que mais combina com você.",
  comoInterpretar: "Seu resultado aponta uma área-vocação — um norte, não um destino fechado.",
};
export const PROFISSAO_QUESTIONS = [
  { q: "O que te dá mais prazer?", opts: [
    { t: "Criar algo do zero", w: "criativo" },
    { t: "Resolver um problema difícil", w: "analitico" },
    { t: "Ajudar alguém", w: "social" },
    { t: "Fechar um bom negócio", w: "empreendedor" } ]},
  { q: "Na escola, você curtia mais:", opts: [
    { t: "Artes e redação", w: "criativo" },
    { t: "Exatas e ciências", w: "analitico" },
    { t: "Humanas e biologia", w: "social" },
    { t: "Liderar os trabalhos em grupo", w: "empreendedor" } ]},
  { q: "Você trabalha melhor:", opts: [
    { t: "Com liberdade criativa", w: "criativo" },
    { t: "Com lógica e dados", w: "analitico" },
    { t: "Em contato com pessoas", w: "social" },
    { t: "No comando das decisões", w: "empreendedor" } ]},
  { q: "Um projeto ideal envolve:", opts: [
    { t: "Imaginação", w: "criativo" },
    { t: "Análise", w: "analitico" },
    { t: "Cuidado com pessoas", w: "social" },
    { t: "Estratégia e resultado", w: "empreendedor" } ]},
  { q: "Você é o tipo que:", opts: [
    { t: "Inventa", w: "criativo" },
    { t: "Investiga", w: "analitico" },
    { t: "Acolhe", w: "social" },
    { t: "Empreende", w: "empreendedor" } ]},
  { q: "O que mais te frustra?", opts: [
    { t: "Falta de criatividade", w: "criativo" },
    { t: "Desorganização e ilógica", w: "analitico" },
    { t: "Frieza com as pessoas", w: "social" },
    { t: "Falta de ambição", w: "empreendedor" } ]},
  { q: "Seu sonho profissional tem:", opts: [
    { t: "Expressão e arte", w: "criativo" },
    { t: "Descoberta e conhecimento", w: "analitico" },
    { t: "Impacto humano", w: "social" },
    { t: "Crescimento e liberdade financeira", w: "empreendedor" } ]},
  { q: "Num filme, você seria:", opts: [
    { t: "O artista", w: "criativo" },
    { t: "O cientista", w: "analitico" },
    { t: "O médico ou professor", w: "social" },
    { t: "O empresário", w: "empreendedor" } ]},
  { q: "A ferramenta que você ama:", opts: [
    { t: "Um caderno ou uma tela", w: "criativo" },
    { t: "Uma planilha ou um código", w: "analitico" },
    { t: "Uma boa conversa", w: "social" },
    { t: "Um plano de negócios", w: "empreendedor" } ]},
  { q: "Você se destaca por:", opts: [
    { t: "Originalidade", w: "criativo" },
    { t: "Raciocínio", w: "analitico" },
    { t: "Empatia", w: "social" },
    { t: "Visão de oportunidade", w: "empreendedor" } ]},
  { q: "O reconhecimento ideal:", opts: [
    { t: "'Que obra linda!'", w: "criativo" },
    { t: "'Que solução genial!'", w: "analitico" },
    { t: "'Você mudou minha vida!'", w: "social" },
    { t: "'Que negócio brilhante!'", w: "empreendedor" } ]},
  { q: "No fundo, você quer:", opts: [
    { t: "Criar", w: "criativo" },
    { t: "Entender", w: "analitico" },
    { t: "Cuidar", w: "social" },
    { t: "Conquistar", w: "empreendedor" } ]},
];
export const PROFISSAO_INFO = {
  criativo: { nome: "Áreas Criativas", emoji: "🎨", cor: "#EC4899",
    desc: "Design, artes, publicidade, marketing, audiovisual, escrita. Você floresce quando pode criar e se expressar.",
    fortes: ["Originalidade","Visão estética","Pensa fora da caixa","Comunica por ideias"],
    atencao: ["Pode se cobrar demais","Sensível a críticas","Dificuldade com rotina rígida","Procrastinação criativa"],
    dicas: ["Monte um portfólio","Cerque-se de outros criativos","Transforme ideias em entregas","Aceite feedback como combustível"] },
  analitico: { nome: "Áreas Analíticas", emoji: "🔬", cor: "#3B82F6",
    desc: "Tecnologia, engenharia, ciências, dados, finanças. Você brilha resolvendo problemas complexos com lógica.",
    fortes: ["Raciocínio lógico","Foco e precisão","Resolve problemas","Aprende rápido o técnico"],
    atencao: ["Pode travar no perfeccionismo","Excesso de análise","Dificuldade com ambiguidade","Esquece o lado humano"],
    dicas: ["Pratique com projetos reais","Desenvolva também o social","Decida sem dados perfeitos","Compartilhe o que sabe"] },
  social: { nome: "Áreas Humanas", emoji: "🤝", cor: "#10B981",
    desc: "Saúde, educação, psicologia, serviço social, RH. Você realiza-se cuidando e transformando vidas.",
    fortes: ["Empatia genuína","Sabe ouvir","Inspira confiança","Trabalha bem com gente"],
    atencao: ["Pode se sobrecarregar","Dificuldade de dizer não","Leva problemas pra casa","Esquece de si"],
    dicas: ["Cuide da sua energia","Estabeleça limites","Busque formação na área","Celebre o impacto que gera"] },
  empreendedor: { nome: "Áreas de Negócios", emoji: "🚀", cor: "#F59E0B",
    desc: "Empreendedorismo, gestão, vendas, liderança. Você prospera criando, liderando e fazendo acontecer.",
    fortes: ["Visão de oportunidade","Coragem para arriscar","Liderança","Foco em resultado"],
    atencao: ["Impaciência","Pode assumir risco demais","Dificuldade de delegar","Ansiedade por resultado"],
    dicas: ["Valide ideias antes de escalar","Cerque-se de bons sócios","Aprenda finanças","Comemore as pequenas vitórias"] },
};

// ============================================================
// TESTE: QUAL LÍDER HISTÓRICO VOCÊ SERIA
// ============================================================
export const LIDER_INTRO = {
  emoji: "👑",
  nome: "Qual Líder Histórico Você Seria",
  criador: "KomparAI",
  historia: "Grandes líderes moldaram a história com estilos muito diferentes — da visão de Da Vinci à empatia de Mandela.",
  comoFunciona: "12 perguntas revelam o estilo de liderança que mais combina com você.",
  comoInterpretar: "Seu resultado mostra qual gênio histórico lidera como você lideraria.",
};
export const LIDER_QUESTIONS = [
  { q: "Diante de um grande problema, seu primeiro instinto é:", opts: [
    { t: "Imaginar uma solução totalmente nova", w: "visionario" },
    { t: "Pensar em como afeta as pessoas", w: "humanista" },
    { t: "Traçar um plano passo a passo", w: "estrategista" },
    { t: "Reunir e inspirar todos ao redor", w: "carismatico" } ]},
  { q: "O que mais te motiva?", opts: [
    { t: "Criar algo que nunca existiu", w: "visionario" },
    { t: "Deixar o mundo mais justo", w: "humanista" },
    { t: "Vencer um desafio difícil", w: "estrategista" },
    { t: "Mover multidões com uma ideia", w: "carismatico" } ]},
  { q: "Como você toma decisões?", opts: [
    { t: "Pela intuição e visão de futuro", w: "visionario" },
    { t: "Pensando no impacto humano", w: "humanista" },
    { t: "Analisando dados e cenários", w: "estrategista" },
    { t: "Sentindo o clima e persuadindo", w: "carismatico" } ]},
  { q: "Seu maior talento é:", opts: [
    { t: "Enxergar o que ninguém vê", w: "visionario" },
    { t: "Entender e acolher as pessoas", w: "humanista" },
    { t: "Planejar e resistir à pressão", w: "estrategista" },
    { t: "Comunicar e encantar", w: "carismatico" } ]},
  { q: "Numa crise, você é o(a) que:", opts: [
    { t: "Propõe uma virada radical", w: "visionario" },
    { t: "Cuida de que ninguém fique pra trás", w: "humanista" },
    { t: "Mantém a calma e organiza a saída", w: "estrategista" },
    { t: "Levanta a moral de todos", w: "carismatico" } ]},
  { q: "O elogio que mais te agrada:", opts: [
    { t: "'Você é genial e à frente do tempo'", w: "visionario" },
    { t: "'Você tem um coração enorme'", w: "humanista" },
    { t: "'Você é brilhante sob pressão'", w: "estrategista" },
    { t: "'Você inspira todo mundo'", w: "carismatico" } ]},
  { q: "Seu maior medo como líder:", opts: [
    { t: "Ficar preso ao convencional", w: "visionario" },
    { t: "Magoar quem confia em você", w: "humanista" },
    { t: "Perder por falta de preparo", w: "estrategista" },
    { t: "Não ser ouvido", w: "carismatico" } ]},
  { q: "Você lidera melhor:", opts: [
    { t: "Inventando o futuro", w: "visionario" },
    { t: "Servindo às pessoas", w: "humanista" },
    { t: "Conduzindo a batalha", w: "estrategista" },
    { t: "Unindo pela palavra", w: "carismatico" } ]},
  { q: "Sua frase de cabeceira:", opts: [
    { t: "'Os loucos que mudam o mundo'", w: "visionario" },
    { t: "'Ninguém nasce odiando'", w: "humanista" },
    { t: "'Nunca, nunca desista'", w: "estrategista" },
    { t: "'Vim, vi, venci'", w: "carismatico" } ]},
  { q: "Num projeto em equipe você:", opts: [
    { t: "Traz a ideia que muda o rumo", w: "visionario" },
    { t: "Garante que todos sejam ouvidos", w: "humanista" },
    { t: "Organiza prazos e recursos", w: "estrategista" },
    { t: "Empolga e engaja o grupo", w: "carismatico" } ]},
  { q: "O legado que você quer deixar:", opts: [
    { t: "Uma invenção que mudou tudo", w: "visionario" },
    { t: "Um mundo mais humano", w: "humanista" },
    { t: "Uma vitória histórica", w: "estrategista" },
    { t: "Uma ideia que ecoa por gerações", w: "carismatico" } ]},
  { q: "Seu ponto fraco:", opts: [
    { t: "Sonhar grande demais", w: "visionario" },
    { t: "Levar tudo pro coração", w: "humanista" },
    { t: "Ser frio e calculista", w: "estrategista" },
    { t: "Depender de aplausos", w: "carismatico" } ]},
];
export const LIDER_INFO = {
  visionario: { nome: "O Visionário (Leonardo da Vinci)", emoji: "🎨", cor: "#8B5CF6",
    desc: "Você lidera enxergando o que ninguém mais vê. Criativo, curioso e à frente do tempo.",
    fortes: ["Pensa fora da caixa","Inspira inovação","Conecta ideias distantes","Não teme o desconhecido"],
    atencao: ["Pode se dispersar","Impaciência com o lento","Sonha mais que executa","Difícil de acompanhar"],
    dicas: ["Cerque-se de executores","Termine o que começa","Compartilhe a visão com clareza","Valorize o presente"] },
  humanista: { nome: "O Humanista (Nelson Mandela)", emoji: "🕊️", cor: "#10B981",
    desc: "Você lidera pelo coração. Empático, justo e capaz de unir os mais diferentes.",
    fortes: ["Inspira confiança","Une as pessoas","Perdoa e reconcilia","Pensa no coletivo"],
    atencao: ["Pode se sacrificar demais","Dificuldade de dizer não","Sofre com injustiças","Carrega o peso dos outros"],
    dicas: ["Cuide de si também","Estabeleça limites","Delegue sem culpa","Lembre que liderar é difícil escolhas"] },
  estrategista: { nome: "O Estrategista (Winston Churchill)", emoji: "♟️", cor: "#3B82F6",
    desc: "Você lidera com cabeça fria e resiliência. Brilha sob pressão e não desiste.",
    fortes: ["Calma na crise","Planeja com antecedência","Resiste à adversidade","Decide com firmeza"],
    atencao: ["Pode parecer frio","Excesso de controle","Difícil de relaxar","Subestima emoções"],
    dicas: ["Mostre seu lado humano","Confie na equipe","Comemore vitórias","Ouça antes de decidir"] },
  carismatico: { nome: "O Carismático (Cleópatra)", emoji: "✨", cor: "#EC4899",
    desc: "Você lidera encantando. Comunicador nato, magnético e persuasivo.",
    fortes: ["Inspira multidões","Comunica com brilho","Negocia com classe","Cria conexões rápidas"],
    atencao: ["Depende de validação","Pode prometer demais","Sensível a críticas","Foco na imagem"],
    dicas: ["Entregue o que promete","Valorize quem não te aplaude","Cultive substância","Ouça os silenciosos"] },
};

// ============================================================
// TESTE: PERFIL FINANCEIRO
// ============================================================
export const FINANCEIRO_INTRO = {
  emoji: "💰",
  nome: "Seu Perfil Financeiro",
  criador: "KomparAI",
  historia: "A forma como lidamos com dinheiro diz muito sobre como pensamos e sentimos.",
  comoFunciona: "12 perguntas revelam sua relação com o dinheiro.",
  comoInterpretar: "Seu resultado mostra seu perfil dominante — sem julgamento, com dicas práticas.",
};
export const FINANCEIRO_QUESTIONS = [
  { q: "Você recebe um dinheiro extra inesperado. O que faz?", opts: [
    { t: "Guardo a maior parte", w: "poupador" },
    { t: "Aproveito para me presentear", w: "gastador" },
    { t: "Invisto para multiplicar", w: "investidor" },
    { t: "Gasto antes mesmo de pensar", w: "impulsivo" } ]},
  { q: "Como você se sente ao gastar?", opts: [
    { t: "Culpado se for supérfluo", w: "poupador" },
    { t: "Feliz, dinheiro é pra viver", w: "gastador" },
    { t: "Calculo o retorno antes", w: "investidor" },
    { t: "No impulso, penso depois", w: "impulsivo" } ]},
  { q: "Seu maior objetivo financeiro:", opts: [
    { t: "Ter uma reserva sólida", w: "poupador" },
    { t: "Curtir a vida agora", w: "gastador" },
    { t: "Fazer o dinheiro trabalhar", w: "investidor" },
    { t: "Não fico planejando isso", w: "impulsivo" } ]},
  { q: "Diante de uma promoção 'imperdível':", opts: [
    { t: "Avalio se realmente preciso", w: "poupador" },
    { t: "Compro, é uma oportunidade", w: "gastador" },
    { t: "Vejo se vale o custo-benefício", w: "investidor" },
    { t: "Compro na hora, sem pensar", w: "impulsivo" } ]},
  { q: "Seu controle de gastos é:", opts: [
    { t: "Rigoroso, anoto tudo", w: "poupador" },
    { t: "Frouxo, gosto de liberdade", w: "gastador" },
    { t: "Estratégico, foco no que rende", w: "investidor" },
    { t: "Inexistente, me perco fácil", w: "impulsivo" } ]},
  { q: "O que o dinheiro representa pra você?", opts: [
    { t: "Segurança", w: "poupador" },
    { t: "Liberdade e prazer", w: "gastador" },
    { t: "Ferramenta de crescimento", w: "investidor" },
    { t: "Emoção do momento", w: "impulsivo" } ]},
  { q: "Ao planejar uma viagem você:", opts: [
    { t: "Economiza meses antes", w: "poupador" },
    { t: "Vai e resolve lá", w: "gastador" },
    { t: "Busca o melhor custo-benefício", w: "investidor" },
    { t: "Decide de última hora", w: "impulsivo" } ]},
  { q: "Sobre investir, você:", opts: [
    { t: "Prefere o mais seguro", w: "poupador" },
    { t: "Acha complicado, deixa pra lá", w: "gastador" },
    { t: "Estuda e diversifica", w: "investidor" },
    { t: "Entra sem entender direito", w: "impulsivo" } ]},
  { q: "No fim do mês, sua conta normalmente:", opts: [
    { t: "Sobra um bom tanto", w: "poupador" },
    { t: "Fica zerada, mas valeu", w: "gastador" },
    { t: "Tem parte rendendo", w: "investidor" },
    { t: "Não sei como ficou", w: "impulsivo" } ]},
  { q: "Seu maior medo com dinheiro:", opts: [
    { t: "Ficar sem reserva", w: "poupador" },
    { t: "Ter que abrir mão do prazer", w: "gastador" },
    { t: "Perder oportunidade de render", w: "investidor" },
    { t: "Me endividar sem perceber", w: "impulsivo" } ]},
  { q: "Quando algo quebra em casa:", opts: [
    { t: "Tenho reserva pra isso", w: "poupador" },
    { t: "Dou um jeito, compro outro", w: "gastador" },
    { t: "Avalio consertar x trocar", w: "investidor" },
    { t: "Entro no cheque especial", w: "impulsivo" } ]},
  { q: "Sua relação com cartão de crédito:", opts: [
    { t: "Uso pouco, pago à vista", w: "poupador" },
    { t: "Uso bastante, gosto", w: "gastador" },
    { t: "Uso pelos pontos/cashback", w: "investidor" },
    { t: "É meu calcanhar de Aquiles", w: "impulsivo" } ]},
];
export const FINANCEIRO_INFO = {
  poupador: { nome: "O Poupador", emoji: "🐷", cor: "#10B981",
    desc: "Segurança em primeiro lugar. Você dorme tranquilo sabendo que tem reserva.",
    fortes: ["Disciplina admirável","Sempre tem reserva","Resiste a impulsos","Pensa no futuro"],
    atencao: ["Pode deixar de viver o agora","Medo excessivo de gastar","Dinheiro parado perde valor","Culpa ao se presentear"],
    dicas: ["Reserve um valor para prazer","Aprenda a investir o que sobra","Permita-se viver experiências","Equilíbrio é saúde financeira"] },
  gastador: { nome: "O Gastador", emoji: "🛍️", cor: "#EC4899",
    desc: "A vida é pra ser vivida. Você valoriza experiências e o prazer do presente.",
    fortes: ["Aproveita a vida","Generoso","Move a economia","Não vive de privação"],
    atencao: ["Pouca reserva","Vulnerável a imprevistos","Pode se endividar","Foco demais no agora"],
    dicas: ["Crie uma reserva automática","Defina um teto de gastos","Separe 'quero' de 'preciso'","Planeje os prazeres maiores"] },
  investidor: { nome: "O Investidor", emoji: "📈", cor: "#3B82F6",
    desc: "Estratégico. Você faz o dinheiro trabalhar por você e pensa em crescimento.",
    fortes: ["Visão de longo prazo","Estuda antes de agir","Diversifica","Disciplina com objetivo"],
    atencao: ["Pode arriscar demais","Excesso de cálculo","Ansiedade com o mercado","Esquece de aproveitar"],
    dicas: ["Mantenha reserva de emergência","Não invista por impulso","Comemore conquistas","Diversifique de verdade"] },
  impulsivo: { nome: "O Impulsivo", emoji: "🎢", cor: "#F59E0B",
    desc: "Emoção no comando. Você compra no calor do momento — e às vezes se arrepende.",
    fortes: ["Espontâneo","Aproveita oportunidades","Não trava por excesso de análise","Generoso no impulso"],
    atencao: ["Endividamento fácil","Compras por emoção","Dificuldade de poupar","Surpresas no fim do mês"],
    dicas: ["Espere 24h antes de comprar","Use lista de compras","Bloqueie crédito fácil","Acompanhe os gastos num app"] },
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
// TESTE: SUA COR DOMINANTE
// ============================================================
export const CORES_INTRO = {
  emoji: "🎨",
  nome: "Qual Cor Representa Você?",
  criador: "Psicologia das Cores",
  historia: "A psicologia das cores estuda como as cores influenciam comportamento, emoções e personalidade. Cada pessoa tem uma cor dominante que reflete sua essência.",
  comoFunciona: "12 perguntas revelam qual cor mais representa sua personalidade, energia e forma de se relacionar com o mundo.",
  comoInterpretar: "Sua cor dominante revela seu temperamento emocional, seus pontos fortes e como os outros te percebem.",
};
export const CORES_QUESTIONS = [
  { q: "Numa festa, como você se comporta?", opts: [
    { t: "Sou o centro das atenções, adoro animar!", w: "vermelho" },
    { t: "Observo, converso com poucos e com profundidade", w: "azul" },
    { t: "Circulo, rio alto e conheço todo mundo", w: "amarelo" },
    { t: "Fico num canto tranquilo com quem me faz bem", w: "verde" }
  ]},
  { q: "O que mais te motiva na vida?", opts: [
    { t: "Conquistar, vencer, liderar", w: "vermelho" },
    { t: "Entender, analisar, aprender", w: "azul" },
    { t: "Criar, inspirar, se divertir", w: "amarelo" },
    { t: "Paz, harmonia e conexão com a natureza", w: "verde" }
  ]},
  { q: "Como você lida com conflitos?", opts: [
    { t: "Enfrento de frente, sem rodeios", w: "vermelho" },
    { t: "Analiso os dois lados antes de me posicionar", w: "azul" },
    { t: "Tento descontrair e achar o lado bom", w: "amarelo" },
    { t: "Busco o consenso e evito confronto", w: "verde" }
  ]},
  { q: "Qual ambiente te faz mais feliz?", opts: [
    { t: "Uma cidade grande, cheia de energia e oportunidades", w: "vermelho" },
    { t: "Uma biblioteca ou estúdio silencioso", w: "azul" },
    { t: "Um festival de música ao ar livre", w: "amarelo" },
    { t: "Uma trilha na floresta ou beira de rio", w: "verde" }
  ]},
  { q: "O que as pessoas mais admiram em você?", opts: [
    { t: "Minha coragem e determinação", w: "vermelho" },
    { t: "Minha inteligência e profundidade", w: "azul" },
    { t: "Meu otimismo e alegria contagiante", w: "amarelo" },
    { t: "Minha calma e capacidade de ouvir", w: "verde" }
  ]},
  { q: "Como você toma decisões importantes?", opts: [
    { t: "Rápido — confio no meu instinto", w: "vermelho" },
    { t: "Com pesquisa, dados e reflexão", w: "azul" },
    { t: "Consulto amigos e sigo a intuição", w: "amarelo" },
    { t: "Com calma, sem pressa, ouvindo o coração", w: "verde" }
  ]},
  { q: "Qual dessas frases mais te representa?", opts: [
    { t: "Quem não arrisca, não petisca", w: "vermelho" },
    { t: "Conhecimento é poder", w: "azul" },
    { t: "A vida é curta demais para ser séria", w: "amarelo" },
    { t: "A natureza tem todas as respostas", w: "verde" }
  ]},
  { q: "Como é o seu fim de semana ideal?", opts: [
    { t: "Esporte radical, competição ou aventura", w: "vermelho" },
    { t: "Leitura, filme ou projeto pessoal", w: "azul" },
    { t: "Churrasco com amigos, música e risadas", w: "amarelo" },
    { t: "Jardinagem, meditação ou passeio na natureza", w: "verde" }
  ]},
  { q: "Qual super-poder você escolheria?", opts: [
    { t: "Super-força", w: "vermelho" },
    { t: "Telepatia", w: "azul" },
    { t: "Teletransporte", w: "amarelo" },
    { t: "Cura", w: "verde" }
  ]},
  { q: "O que mais te incomoda nas pessoas?", opts: [
    { t: "Covardia e falta de atitude", w: "vermelho" },
    { t: "Superficialidade e ignorância", w: "azul" },
    { t: "Negatividade e pessimismo", w: "amarelo" },
    { t: "Agressividade e falta de empatia", w: "verde" }
  ]},
  { q: "Se você fosse um elemento da natureza, seria...", opts: [
    { t: "Fogo — intenso, quente, transformador", w: "vermelho" },
    { t: "Água — profundo, adaptável, misterioso", w: "azul" },
    { t: "Ar — livre, leve, em constante movimento", w: "amarelo" },
    { t: "Terra — firme, estável, nutritivo", w: "verde" }
  ]},
  { q: "O que você faria com R$ 1 milhão?", opts: [
    { t: "Investiria em um negócio audacioso", w: "vermelho" },
    { t: "Guardaria e planejaria cada centavo", w: "azul" },
    { t: "Viajaria o mundo inteiro", w: "amarelo" },
    { t: "Compraria um sítio e viveria em paz", w: "verde" }
  ]},
];
export const CORES_INFO = {
  vermelho: {
    nome: "Vermelho", emoji: "🔴", cor: "#EF4444",
    desc: "Você é fogo puro. Passional, corajoso e líder natural. Onde você entra, a energia muda. Tem magnetismo, atitude e não tem medo de arriscar. As pessoas te seguem porque sentem sua convicção.",
    fortes: ["Liderança natural e carisma","Coragem para enfrentar desafios","Energia contagiante e determinação","Capacidade de tomar decisões rápidas"],
    atencao: ["Pode ser impulsivo(a) e dominador(a)","Dificuldade de ouvir quando está focado(a)","Tendência a queimar etapas"],
    dicas: ["Respire antes de reagir — sua força está no controle","Ouça mais antes de decidir","Sua intensidade é um dom — dose-a com sabedoria","Pratique esportes para canalizar a energia"],
  },
  azul: {
    nome: "Azul", emoji: "🔵", cor: "#3B82F6",
    desc: "Você é profundidade. Analítico, leal e com uma riqueza interior que poucos conhecem. Não se entrega fácil, mas quando se entrega, é para sempre. Sua mente é seu maior patrimônio.",
    fortes: ["Inteligência e pensamento crítico","Lealdade inabalável","Profundidade emocional e intelectual","Capacidade de planejamento e foco"],
    atencao: ["Pode ser excessivamente perfeccionista","Dificuldade de se abrir emocionalmente","Tendência a overthinking e melancolia"],
    dicas: ["Permita-se sentir sem analisar tudo","Compartilhe seus pensamentos — eles são valiosos","Busque atividades criativas para equilibrar a mente","Confie mais no processo, menos no plano"],
  },
  amarelo: {
    nome: "Amarelo", emoji: "🟡", cor: "#F59E0B",
    desc: "Você é sol. Otimista, criativo e com o dom de iluminar qualquer ambiente. As pessoas se sentem bem perto de você porque sua alegria é genuína. Tem facilidade de fazer conexões e espalhar boas vibrações.",
    fortes: ["Otimismo e energia positiva","Criatividade e pensamento lateral","Habilidade social e comunicação","Adaptabilidade e leveza"],
    atencao: ["Pode ter dificuldade com compromissos longos","Tendência a evitar assuntos difíceis","Pode ser visto(a) como superficial"],
    dicas: ["Sua alegria é real — nunca se desculpe por ela","Enfrente as conversas difíceis, elas te fortalecem","Canalize sua criatividade em projetos concretos","Cerque-se de pessoas que também te elevam"],
  },
  verde: {
    nome: "Verde", emoji: "🟢", cor: "#10B981",
    desc: "Você é equilíbrio. Pacífico, empático e com uma conexão profunda com a natureza e com as pessoas. Tem o dom de acalmar, curar e harmonizar. Sua presença é um refúgio para quem está ao seu redor.",
    fortes: ["Empatia e capacidade de ouvir","Equilíbrio emocional e maturidade","Conexão com a natureza e intuição","Capacidade de mediar e harmonizar"],
    atencao: ["Pode anular suas próprias necessidades","Dificuldade de impor limites","Tendência a evitar confronto quando necessário"],
    dicas: ["Cuidar dos outros começa em cuidar de você","Dizer 'não' é um ato de amor próprio","Sua paz interior é seu superpoder — proteja-a","Pratique jardinagem, caminhadas ou meditação"],
  },
};

// ============================================================
// TESTE: QUAL SELEÇÃO TE REPRESENTA?
// ============================================================
export const SELECAO_INTRO = {
  emoji: "🏆",
  nome: "Qual Seleção Te Representa?",
  criador: "KomparAI",
  historia: "Cada seleção tem uma alma: o jogo bonito do Brasil, a garra argentina, a máquina alemã, a elegância francesa. Sua personalidade combina com qual estilo de jogo e de vida?",
  comoFunciona: "12 perguntas sobre como você age, lidera e enfrenta desafios — traduzidas em futebol.",
  comoInterpretar: "Sua seleção revela seu estilo de enfrentar a vida: com arte, com garra, com disciplina ou com elegância.",
};
export const SELECAO_QUESTIONS = [
  { q: "Como você enfrenta um desafio difícil?", opts: [
    { t: "Com criatividade e improviso — sempre acho um jeito", w: "brasil" },
    { t: "Com raça e garra — nunca desisto", w: "argentina" },
    { t: "Com planejamento e disciplina — sem margem pra erro", w: "alemanha" },
    { t: "Com calma e técnica — controlo o ritmo", w: "franca" }
  ]},
  { q: "Num trabalho em equipe, você é...", opts: [
    { t: "O criativo que tem as ideias malucas que funcionam", w: "brasil" },
    { t: "O líder que puxa o time pela emoção", w: "argentina" },
    { t: "O organizador que monta a estratégia", w: "alemanha" },
    { t: "O versátil que se adapta a qualquer posição", w: "franca" }
  ]},
  { q: "O que mais te irrita?", opts: [
    { t: "Regras rígidas demais — preciso de liberdade", w: "brasil" },
    { t: "Gente que desiste fácil", w: "argentina" },
    { t: "Bagunça e falta de organização", w: "alemanha" },
    { t: "Falta de classe e respeito", w: "franca" }
  ]},
  { q: "Qual elogio mais te agrada?", opts: [
    { t: "'Você é genial e único'", w: "brasil" },
    { t: "'Você tem uma garra incrível'", w: "argentina" },
    { t: "'Você é muito eficiente'", w: "alemanha" },
    { t: "'Você é sofisticado e inteligente'", w: "franca" }
  ]},
  { q: "Como você comemora uma conquista?", opts: [
    { t: "Festa, música, abraço em todo mundo!", w: "brasil" },
    { t: "Grito, choro, emoção pura!", w: "argentina" },
    { t: "Satisfação interior — já miro o próximo objetivo", w: "alemanha" },
    { t: "Jantar especial, bom vinho, celebro com classe", w: "franca" }
  ]},
  { q: "Se a vida fosse um jogo, como você jogaria?", opts: [
    { t: "Dribles, alegria e jogo bonito — mesmo perdendo", w: "brasil" },
    { t: "Entrega total — corro até o último segundo", w: "argentina" },
    { t: "Tática perfeita — erro calculado, vitória planejada", w: "alemanha" },
    { t: "Controle total da posse — eu dito o ritmo", w: "franca" }
  ]},
  { q: "Qual frase mais combina com você?", opts: [
    { t: "'Joga bonito, vive bonito'", w: "brasil" },
    { t: "'Hasta la victoria siempre'", w: "argentina" },
    { t: "'Ordnung muss sein' (Ordem é necessária)", w: "alemanha" },
    { t: "'Liberté, Égalité, Fraternité'", w: "franca" }
  ]},
  { q: "Como você lida com uma derrota?", opts: [
    { t: "Dói, mas levanto sorrindo e tento de novo", w: "brasil" },
    { t: "Fico furioso, mas uso a raiva como combustível", w: "argentina" },
    { t: "Analiso o que deu errado e corrijo para a próxima", w: "alemanha" },
    { t: "Aceito com dignidade e aprendo com classe", w: "franca" }
  ]},
  { q: "Qual comida combina com você?", opts: [
    { t: "Churrasco com samba no fundo", w: "brasil" },
    { t: "Asado com empanadas e mate", w: "argentina" },
    { t: "Salsicha com chucrute e cerveja", w: "alemanha" },
    { t: "Croissant, queijo e vinho", w: "franca" }
  ]},
  { q: "O que você mais valoriza num líder?", opts: [
    { t: "Carisma e alegria contagiante", w: "brasil" },
    { t: "Paixão e entrega emocional", w: "argentina" },
    { t: "Competência e resultados concretos", w: "alemanha" },
    { t: "Inteligência e visão estratégica", w: "franca" }
  ]},
  { q: "Seu estilo de roupa é mais...", opts: [
    { t: "Colorido, despojado e cheio de personalidade", w: "brasil" },
    { t: "Casual mas com atitude — jeans e jaqueta de couro", w: "argentina" },
    { t: "Limpo, funcional e bem cortado", w: "alemanha" },
    { t: "Elegante, clássico e sofisticado", w: "franca" }
  ]},
  { q: "Se pudesse viver em qualquer lugar, seria...", opts: [
    { t: "Numa praia tropical com música e amigos", w: "brasil" },
    { t: "Numa cidade intensa e apaixonante como Buenos Aires", w: "argentina" },
    { t: "Numa cidade organizada e eficiente como Munique", w: "alemanha" },
    { t: "Numa cidade cultural e bela como Paris", w: "franca" }
  ]},
];
export const SELECAO_INFO = {
  brasil: {
    nome: "🇧🇷 Brasil", emoji: "🇧🇷", cor: "#EAB308",
    desc: "Você é o jogo bonito em pessoa! Criativo, alegre e com aquele jeitinho que só brasileiro tem. Improvisa quando precisa, encanta quando pode, e nunca perde a alegria — mesmo nas derrotas. O mundo admira sua arte de viver.",
    fortes: ["Criatividade e improviso genial","Alegria contagiante que inspira","Capacidade de se adaptar a qualquer situação","Carisma e jogo de cintura"],
    atencao: ["Pode deixar a organização de lado","Tendência a começar muitas coisas e não terminar","Às vezes confia demais no 'jeitinho'"],
    dicas: ["Sua criatividade é ouro — combine-a com disciplina","Transforme seu carisma em liderança concreta","O mundo precisa da sua alegria, nunca a esconda","Pelé, Ronaldinho, Neymar — sua linhagem é de gênios"],
  },
  argentina: {
    nome: "🇦🇷 Argentina", emoji: "🇦🇷", cor: "#38BDF8",
    desc: "Você é pura garra! Intenso, apaixonado e com uma fibra que não se quebra. Quando todo mundo desiste, você dá o grito de guerra e puxa o time. Sua emoção é sua maior força — e sua entrega inspira legiões.",
    fortes: ["Garra e determinação inabaláveis","Paixão que contagia e motiva","Liderança emocional poderosa","Resiliência nas adversidades"],
    atencao: ["Pode ser explosivo demais sob pressão","Às vezes a emoção atropela a razão","Dificuldade de aceitar derrotas"],
    dicas: ["Sua paixão é combustível — aprenda a dosá-la","Nos momentos de fúria, respire antes de agir","Messi precisou de 7 Copas pra vencer — paciência é poder","Sua intensidade é rara e valiosa"],
  },
  alemanha: {
    nome: "🇩🇪 Alemanha", emoji: "🇩🇪", cor: "#374151",
    desc: "Você é a máquina perfeita! Disciplinado, eficiente e com foco inabalável. Enquanto outros improvisam, você planeja. Enquanto outros festejam, você já prepara o próximo passo. Seu sucesso não é sorte — é engenharia.",
    fortes: ["Organização e planejamento exemplares","Eficiência e produtividade altas","Trabalho em equipe estruturado","Consistência e confiabilidade"],
    atencao: ["Pode ser rígido demais e perder leveza","Dificuldade de improvisar quando o plano falha","Pode parecer frio ou distante"],
    dicas: ["Eficiência sem alegria é só trabalho — permita-se soltar","Flexibilidade é força, não fraqueza","Beckenbauer, Müller, Klose — excelência silenciosa","Surpreenda-se às vezes — saia do script"],
  },
  franca: {
    nome: "🇫🇷 França", emoji: "🇫🇷", cor: "#1E40AF",
    desc: "Você é classe pura! Elegante, inteligente e com uma visão estratégica que impressiona. Controla o ritmo do jogo e da vida com a tranquilidade de quem sabe o que faz. Sofisticação e talento andam juntos em você.",
    fortes: ["Inteligência estratégica superior","Versatilidade e adaptabilidade","Elegância natural em tudo que faz","Equilíbrio entre técnica e criatividade"],
    atencao: ["Pode parecer arrogante ou distante","Tendência ao perfeccionismo","Às vezes complica o que poderia ser simples"],
    dicas: ["Sua sofisticação inspira — use-a para elevar os outros","Simplicidade às vezes é a maior elegância","Zidane, Mbappé, Platini — genialidade com classe","Permita-se ser imperfeito — é libertador"],
  },
};

// ============================================================
// TESTE: NÍVEL DE INGLÊS
// ============================================================
export const INGLES_INTRO = {
  emoji:"🇬🇧", nome:"Qual é o Seu Nível de Inglês?",
  criador:"KomparAI Languages",
  historia:"O inglês é a língua mais estudada do mundo. Saber onde você está é o primeiro passo para avançar.",
  comoFunciona:"12 perguntas de vocabulário, gramática e expressões. Seja honesto — o resultado é só para você!",
  comoInterpretar:"Seu nível vai de Iniciante (A1) a Avançado (C1). Cada nível tem dicas para evoluir.",
};
export const INGLES_QUESTIONS = [
  {q:"O que significa 'beautiful'?",opts:["Feio","Bonito","Grande","Pequeno"],w:["a1","a1","a1","a1"],c:1},
  {q:"Como se diz 'Eu tenho fome' em inglês?",opts:["I am thirsty","I am tired","I am hungry","I am happy"],w:["a1","a1","a1","a1"],c:2},
  {q:"Qual é o plural de 'child'?",opts:["Childs","Children","Childes","Child"],w:["a2","a2","a2","a2"],c:1},
  {q:"Complete: 'She ___ to school every day.'",opts:["go","goes","going","gone"],w:["a2","a2","a2","a2"],c:1},
  {q:"O que significa 'although'?",opts:["Porque","Então","Embora","Porém"],w:["b1","b1","b1","b1"],c:2},
  {q:"'I wish I ___ more time.' Qual verbo?",opts:["have","had","has","having"],w:["b1","b1","b1","b1"],c:1},
  {q:"Qual frase está no Present Perfect?",opts:["She went home","She has gone home","She is going home","She goes home"],w:["b1","b1","b1","b1"],c:1},
  {q:"O que significa 'nevertheless'?",opts:["Entretanto","Definitivamente","Imediatamente","Especialmente"],w:["b2","b2","b2","b2"],c:0},
  {q:"'Had she known, she ___ helped.' Complete.",opts:["would","will","would have","had"],w:["b2","b2","b2","b2"],c:2},
  {q:"Qual é o sinônimo de 'eloquent'?",opts:["Shy","Articulate","Clumsy","Stubborn"],w:["c1","c1","c1","c1"],c:1},
  {q:"'The report needs ___.' Qual forma correta?",opts:["to revise","revising","revised","revision"],w:["c1","c1","c1","c1"],c:1},
  {q:"O que significa 'to beat around the bush'?",opts:["Trabalhar duro","Explorar a natureza","Falar sem ir ao ponto","Vencer com facilidade"],w:["c1","c1","c1","c1"],c:2},
];
export const INGLES_INFO = {
  a1:{nome:"Iniciante (A1)",emoji:"🌱",cor:"#10B981",
    desc:"Você está no começo da jornada! Conhece palavras básicas e expressões simples. Com consistência, vai longe.",
    fortes:["Coragem para começar","Base para construir"],
    atencao:["Vocabulário ainda limitado","Gramática básica"],
    dicas:["Assista séries com legenda em inglês","Use Duolingo 15 min/dia","Aprenda 5 palavras novas por dia","Comece com músicas em inglês"],
  },
  a2:{nome:"Básico (A2)",emoji:"🌿",cor:"#22C55E",
    desc:"Você consegue se comunicar em situações simples do dia a dia. Está no caminho certo!",
    fortes:["Vocabulário básico sólido","Gramática elementar"],
    atencao:["Dificuldade com tempos verbais","Vocabulário ainda limitado"],
    dicas:["Pratique conversação com apps como Tandem","Leia notícias simples em inglês","Assista filmes com legenda em inglês"],
  },
  b1:{nome:"Intermediário (B1)",emoji:"🌳",cor:"#3B82F6",
    desc:"Você se vira bem! Consegue entender e se expressar na maioria das situações. Parabéns!",
    fortes:["Boa compreensão geral","Consegue se comunicar"],
    atencao:["Alguns erros gramaticais","Vocabulário avançado limitado"],
    dicas:["Assista podcasts em inglês","Leia livros simples em inglês","Pratique writing todo dia"],
  },
  b2:{nome:"Intermediário-Avançado (B2)",emoji:"🚀",cor:"#7C3AED",
    desc:"Excelente! Você tem fluência funcional e consegue discutir temas complexos com naturalidade.",
    fortes:["Boa fluência","Vocabulário amplo","Gramática sólida"],
    atencao:["Expressões idiomáticas avançadas","Sotaque pode melhorar"],
    dicas:["Assista conteúdo sem legenda","Leia jornais como NYT","Pratique com nativos"],
  },
  c1:{nome:"Avançado (C1)",emoji:"🏆",cor:"#F59E0B",
    desc:"Impressionante! Você domina o inglês com fluidez e precisão. Está no top dos falantes não-nativos!",
    fortes:["Fluência e precisão","Vocabulário rico","Gramática avançada"],
    atencao:["Nuances culturais específicas"],
    dicas:["Consuma conteúdo nativo diariamente","Considere certificações IELTS/TOEFL","Pratique escrita formal e informal"],
  },
};

// ============================================================
// TESTE: AGILIDADE MENTAL
// ============================================================
export const AGILIDADE_INTRO = {
  emoji:"⚡", nome:"Teste de Agilidade Mental",
  criador:"KomparAI Intelligence",
  historia:"A agilidade mental mede sua capacidade de raciocinar rapidamente, identificar padrões e resolver problemas. Diferente do QI, foca na velocidade e flexibilidade do pensamento.",
  comoFunciona:"12 desafios de lógica, padrões e raciocínio. Tente responder rápido — sua intuição conta!",
  comoInterpretar:"Quanto mais acertar, maior sua agilidade. Não existe certo ou errado total — é sobre como sua mente trabalha.",
};
export const AGILIDADE_QUESTIONS = [
  {q:"Se hoje é quarta, que dia será daqui a 100 dias?",opts:["Quinta","Sexta","Sábado","Domingo"],w:["logico","logico","logico","logico"],c:1},
  {q:"Qual número completa a sequência: 2, 4, 8, 16, ___?",opts:["24","28","32","30"],w:["padrao","padrao","padrao","padrao"],c:2},
  {q:"Um trem vai de A a B em 2h a 80km/h. Qual a distância?",opts:["120km","160km","180km","140km"],w:["calculo","calculo","calculo","calculo"],c:1},
  {q:"Se CASA = 3141 e BOLA = 2631, quanto vale COLA?",opts:["3631","2641","3641","2631"],w:["logico","logico","logico","logico"],c:0},
  {q:"Qual palavra NÃO pertence ao grupo: Maçã, Pera, Cenoura, Uva?",opts:["Maçã","Pera","Cenoura","Uva"],w:["padrao","padrao","padrao","padrao"],c:2},
  {q:"João é mais velho que Maria. Pedro é mais jovem que João. Quem pode ser o mais velho?",opts:["Pedro","Maria","João","Impossível saber"],w:["logico","logico","logico","logico"],c:2},
  {q:"Quantos meses têm 28 dias?",opts:["1","2","3","12"],w:["lateral","lateral","lateral","lateral"],c:3},
  {q:"Se 5 máquinas fazem 5 peças em 5 min, quantas peças 100 máquinas fazem em 100 min?",opts:["100","500","1000","2000"],w:["logico","logico","logico","logico"],c:3},
  {q:"Próximo número: 1, 1, 2, 3, 5, 8, ___?",opts:["11","12","13","14"],w:["padrao","padrao","padrao","padrao"],c:2},
  {q:"Se você tem 3 maçãs e tira 2, quantas VOCÊ tem?",opts:["1","2","3","0"],w:["lateral","lateral","lateral","lateral"],c:1},
  {q:"Qual figura completa o padrão: ○□△○□___?",opts:["○","□","△","◇"],w:["padrao","padrao","padrao","padrao"],c:2},
  {q:"Um médico dá 3 pílulas: 1 a cada 30min. Quando acaba?",opts:["90 min","60 min","45 min","120 min"],w:["logico","logico","logico","logico"],c:1},
];
export const AGILIDADE_INFO = {
  alto:{nome:"Mente Ágil 🚀",emoji:"🚀",cor:"#7C3AED",
    desc:"Sua mente processa informações com velocidade e precisão impressionantes. Você identifica padrões e resolve problemas com naturalidade.",
    fortes:["Raciocínio rápido e preciso","Excelente identificação de padrões","Pensamento flexível"],
    atencao:["Cuidado com a pressa — às vezes lentidão gera mais qualidade"],
    dicas:["Sudoku e xadrez mantêm a mente afiada","Desafie-se com problemas novos","Ensine outros — reforça o aprendizado"],
  },
  medio:{nome:"Mente Equilibrada ⚡",emoji:"⚡",cor:"#3B82F6",
    desc:"Você tem boa capacidade de raciocínio e resolve a maioria dos problemas com competência. Há espaço para evoluir!",
    fortes:["Raciocínio sólido","Boa lógica aplicada"],
    atencao:["Alguns padrões mais complexos ainda são desafiadores"],
    dicas:["Pratique puzzles e jogos lógicos","Leia mais — amplia conexões neurais","Meditação melhora foco e agilidade"],
  },
  baixo:{nome:"Em Desenvolvimento 🌱",emoji:"🌱",cor:"#10B981",
    desc:"Seu cérebro tem muito potencial a explorar! A agilidade mental é uma habilidade que se desenvolve com prática.",
    fortes:["Potencial de crescimento enorme","Criatividade compensadora"],
    atencao:["Raciocínio lógico ainda em desenvolvimento"],
    dicas:["Jogue Sudoku, palavras cruzadas e xadrez","Resolva um problema novo por dia","Durma bem — o sono consolida aprendizado"],
  },
};

// ============================================================
// TESTE: CONHECIMENTO BÍBLICO
// ============================================================
export const BIBLICO_INTRO = {
  emoji:"📖", nome:"Seu Conhecimento Bíblico",
  criador:"KomparAI Cultura",
  historia:"A Bíblia é o livro mais vendido da história, com mais de 5 bilhões de cópias. Seja crente ou não, conhecê-la é parte da cultura universal.",
  comoFunciona:"12 perguntas sobre histórias, personagens e ensinamentos bíblicos. Sem pegadinhas teológicas!",
  comoInterpretar:"Do Iniciante ao Estudioso — descubra o quanto você sabe sobre o livro mais influente da humanidade.",
};
export const BIBLICO_QUESTIONS = [
  {q:"Quantos livros tem a Bíblia cristã (Protestantismo)?",opts:["60","66","72","73"],w:["b","b","b","b"],c:1},
  {q:"Quem construiu a Arca para sobreviver ao dilúvio?",opts:["Moisés","Abraão","Noé","Elias"],w:["b","b","b","b"],c:2},
  {q:"Qual apóstolo negou Jesus três vezes?",opts:["João","Judas","Tiago","Pedro"],w:["b","b","b","b"],c:3},
  {q:"Em qual cidade Jesus nasceu?",opts:["Nazaré","Jerusalém","Belém","Jericó"],w:["b","b","b","b"],c:2},
  {q:"Qual o primeiro livro da Bíblia?",opts:["Êxodo","Levítico","Gênesis","Números"],w:["b","b","b","b"],c:2},
  {q:"Quem foi jogado na cova dos leões?",opts:["Elias","Daniel","José","Moisés"],w:["b","b","b","b"],c:1},
  {q:"Qual o versículo mais famoso da Bíblia?",opts:["Salmos 23:1","João 3:16","Romanos 8:28","Filipenses 4:13"],w:["b","b","b","b"],c:1},
  {q:"Quem escreveu a maior parte dos Salmos?",opts:["Salomão","Moisés","Davi","Paulo"],w:["b","b","b","b"],c:2},
  {q:"Qual livro do NT foi escrito por um médico?",opts:["João","Marcos","Lucas","Atos"],w:["b","b","b","b"],c:2},
  {q:"Quantos dias durou o dilúvio (chuva)?",opts:["20 dias","40 dias","60 dias","7 dias"],w:["b","b","b","b"],c:1},
  {q:"Quem batizou Jesus?",opts:["Pedro","Paulo","João Batista","Filipe"],w:["b","b","b","b"],c:2},
  {q:"Qual apóstolo escreveu mais livros do NT?",opts:["João","Pedro","Paulo","Tiago"],w:["b","b","b","b"],c:2},
];
export const BIBLICO_INFO = {
  estudioso:{nome:"Estudioso Bíblico 📖",emoji:"📖",cor:"#7C3AED",
    desc:"Impressionante! Você tem um conhecimento profundo das Escrituras. Seja por fé ou cultura, sua familiaridade com a Bíblia é notável.",
    fortes:["Conhecimento profundo das Escrituras","Boa memória histórica e cultural"],
    atencao:["Conhecimento pode virar orgulho — humildade sempre"],
    dicas:["Compartilhe esse conhecimento","Explore comentários bíblicos","Aprenda grego ou hebraico básico"],
  },
  intermediario:{nome:"Conhecedor Moderado ✝️",emoji:"✝️",cor:"#3B82F6",
    desc:"Você tem uma boa base bíblica! Conhece as histórias principais e os personagens mais importantes.",
    fortes:["Conhecimento das histórias principais","Boa base cultural"],
    atencao:["Detalhes e livros menores ainda são desafio"],
    dicas:["Leia um capítulo por dia","Use um plano de leitura bíblica","Assista documentários sobre a Bíblia"],
  },
  iniciante:{nome:"Iniciante Curioso 🌱",emoji:"🌱",cor:"#10B981",
    desc:"Você está descobrindo esse universo! A Bíblia é rica em histórias, sabedoria e história. Há muito para explorar.",
    fortes:["Curiosidade e abertura para aprender"],
    atencao:["Conhecimento básico ainda limitado"],
    dicas:["Comece pelo Novo Testamento (Marcos)","Leia histórias bíblicas para iniciantes","Assista filmes sobre a Bíblia"],
  },
};

// ============================================================
// TESTE: MBTI — 16 PERSONALIDADES
// ============================================================
export const MBTI_INTRO = {
  emoji:"🧬", nome:"Qual das 16 Personalidades Você É?",
  criador:"Baseado no MBTI",
  historia:"O MBTI (Myers-Briggs Type Indicator) é o teste de personalidade mais usado no mundo. Criado por Isabel Briggs Myers, mede 4 dimensões: Energia, Informação, Decisões e Estilo de vida.",
  comoFunciona:"16 perguntas revelam sua combinação de 4 letras (ex: INTJ, ENFP). Responda pelo que VOCÊ É, não pelo que gostaria de ser.",
  comoInterpretar:"4 dimensões: E/I (Extrovertido/Introvertido) · S/N (Sensorial/Intuitivo) · T/F (Racional/Sentimental) · J/P (Julgador/Perceptivo)",
};
export const MBTI_QUESTIONS = [
  {q:"Em festas e reuniões, você geralmente...",opts:["Fica animado — adoro conhecer gente nova!","Fico bem, mas fico cansado depois","Prefiro grupos menores e conversas profundas","Me sinto drenado — prefiro ficar em casa"],w:["E","E","I","I"]},
  {q:"Ao aprender algo novo, você prefere...",opts:["Exemplos práticos e concretos","Um mapa geral antes dos detalhes","Entender os conceitos e teorias","Tentar e ver o que acontece"],w:["S","N","N","S"]},
  {q:"Ao tomar uma decisão difícil, você prioriza...",opts:["O que faz sentido logicamente","O que afeta as pessoas envolvidas","Os fatos e dados disponíveis","Como você e os outros vão se sentir"],w:["T","F","T","F"]},
  {q:"Seu ambiente ideal de trabalho é...",opts:["Muito organizado e com prazos claros","Flexível e adaptável","Com rotina clara e previsível","Aberto a mudanças e novas ideias"],w:["J","P","J","P"]},
  {q:"Em conversas, você tende a...",opts:["Falar mais — as ideias fluem!","Ouvir mais — processo antes de falar","Ir direto ao ponto","Explorar vários ângulos antes de concluir"],w:["E","I","T","N"]},
  {q:"Você confia mais em...",opts:["Sua experiência prática","Seus instintos e palpites","O que pode ser verificado","Possibilidades e conexões"],w:["S","N","S","N"]},
  {q:"Ao resolver conflitos, você tende a...",opts:["Analisar o problema objetivamente","Considerar os sentimentos de todos","Buscar a solução mais justa e lógica","Buscar harmonia e consenso"],w:["T","F","T","F"]},
  {q:"Sua lista de tarefas...",opts:["É detalhada e sempre atualizada","Existe na minha cabeça","Tem prazo e estrutura clara","É mais uma sugestão do que uma regra"],w:["J","P","J","P"]},
  {q:"No seu tempo livre, você prefere...",opts:["Sair e interagir com pessoas","Ficar em casa ou com poucos amigos","Atividades sociais planejadas","Algo espontâneo que surgiu na hora"],w:["E","I","J","P"]},
  {q:"Ao ler um livro, você prefere...",opts:["Histórias realistas e baseadas em fatos","Ficção científica e fantasia","Suspense com lógica e mistério","Romances e histórias de personagens"],w:["S","N","T","F"]},
  {q:"Quando alguém te pede conselho, você...",opts:["Dá uma análise clara do problema","Primeiro pergunta como a pessoa está se sentindo","Apresenta opções e prós/contras","Comparte experiências pessoais parecidas"],w:["T","F","T","F"]},
  {q:"Sua semana ideal é...",opts:["Bem planejada — sei o que farei cada dia","Cheia de surpresas e possibilidades","Com metas claras mas alguma flexibilidade","Totalmente aberta ao que aparecer"],w:["J","P","J","P"]},
];
export const MBTI_INFO = {
  // Os 16 tipos — agrupados por temperamento
  INTJ:{nome:"INTJ — O Arquiteto",emoji:"🏗️",cor:"#1E3A5F",desc:"Mente estratégica, independente e determinada. Você vê o mundo como um conjunto de sistemas a otimizar. Raro e poderoso — apenas 2% da população.",fortes:["Visão estratégica excepcional","Autodisciplina e foco","Pensamento original e profundo"],atencao:["Pode parecer arrogante ou distante","Dificuldade com trabalho em equipe"],dicas:["Comunique suas ideias — elas são valiosas","Abra espaço para sentimentos","Colabore mais — duas mentes pensam melhor"]},
  INTP:{nome:"INTP — O Lógico",emoji:"🔬",cor:"#1E3A5F",desc:"Inovador quieto, flexível e analítico. Você vive no mundo das ideias e teorias. Busca entender como tudo funciona.",fortes:["Análise profunda","Criatividade intelectual","Objetividade"],atencao:["Procrastinação","Dificuldade de concluir projetos"],dicas:["Defina prazos para você mesmo","Compartilhe suas teorias","Ação imperfeita supera inação perfeita"]},
  ENTJ:{nome:"ENTJ — O Comandante",emoji:"👑",cor:"#991B1B",desc:"Líder nato, estratégico e carismático. Você enxerga ineficiências e sabe como corrigi-las. Nasce para liderar.",fortes:["Liderança natural","Eficiência e determinação","Visão de longo prazo"],atencao:["Pode ser dominador","Dificuldade de ouvir"],dicas:["Pratique escuta ativa","Reconheça as emoções da equipe","Delegar é sinal de força"]},
  ENTP:{nome:"ENTP — O Debatedor",emoji:"💡",cor:"#991B1B",desc:"Inovador espirituoso que adora um bom debate. Você questiona tudo e gera ideias que mudam o jogo.",fortes:["Criatividade explosiva","Pensamento rápido","Carisma intelectual"],atencao:["Pode ser argumentativo demais","Dificuldade de finalizar"],dicas:["Canalise energia para projetos concretos","Nem todo debate precisa de vencedor","Ouça mais, fale menos às vezes"]},
  INFJ:{nome:"INFJ — O Advogado",emoji:"🌸",cor:"#4C1D95",desc:"O mais raro de todos (1%). Visionário idealista com profunda empatia. Você enxerga o potencial humano onde outros não veem.",fortes:["Empatia profunda","Visão e propósito","Criatividade intuitiva"],atencao:["Perfeccionismo","Esgotamento emocional"],dicas:["Coloque limites — você não pode salvar todos","Cuide de si tanto quanto cuida dos outros","Aceite que imperfeito pode ser belo"]},
  INFP:{nome:"INFP — O Mediador",emoji:"🌈",cor:"#4C1D95",desc:"Poeta da alma humana. Você é guiado por valores profundos e vê beleza onde outros não percebem.",fortes:["Criatividade e empatia","Valores sólidos","Abertura para novas ideias"],atencao:["Idealismo excessivo","Dificuldade com críticas"],dicas:["Expresse sua criatividade no mundo","Seus valores são forças — não os esconda","Ação concreta muda o mundo, não só sonhos"]},
  ENFJ:{nome:"ENFJ — O Protagonista",emoji:"🌟",cor:"#92400E",desc:"Líder carismático e empático. Você inspira e eleva todos ao seu redor. Nasceu para fazer o bem em escala.",fortes:["Liderança inspiradora","Empatia e comunicação","Capacidade de motivar"],atencao:["Coloca os outros antes de si","Medo de conflito"],dicas:["Cuide de você antes dos outros","Conflito saudável é crescimento","Estabeleça limites com amor"]},
  ENFP:{nome:"ENFP — O Ativista",emoji:"🦋",cor:"#92400E",desc:"Espírito livre, criativo e contagiante. Você vê possibilidades em tudo e inspira os outros a sonhar alto.",fortes:["Criatividade e entusiasmo","Conexões humanas","Adaptabilidade"],atencao:["Dificuldade de foco","Começa mais do que termina"],dicas:["Complete um projeto antes de começar outro","Sua energia é contagiante — use bem","Estrutura não é prisão — é trampolim"]},
  ISTJ:{nome:"ISTJ — O Logístico",emoji:"📋",cor:"#065F46",desc:"Confiável, prático e dedicado. O pilar de qualquer organização. Você faz acontecer com precisão e responsabilidade.",fortes:["Confiabilidade","Organização","Dedicação"],atencao:["Resistência a mudanças","Pode ser rígido"],dicas:["Inovação não é ameaça — é oportunidade","Compartilhe mais suas opiniões","Flexibilidade é uma competência"]},
  ISFJ:{nome:"ISFJ — O Defensor",emoji:"🛡️",cor:"#065F46",desc:"Protetor dedicado, sempre pronto para ajudar. Você cuida das pessoas com atenção aos detalhes que poucos percebem.",fortes:["Lealdade e cuidado","Atenção aos detalhes","Dedicação"],atencao:["Dificuldade em dizer não","Pode ser explorado"],dicas:["Suas necessidades também importam","Dizer não é um ato de amor próprio","Peça ajuda — não é fraqueza"]},
  ESTJ:{nome:"ESTJ — O Executivo",emoji:"⚙️",cor:"#1E3A8A",desc:"Administrador nato, organizado e decisivo. Você coloca ordem no caos com eficiência e determinação.",fortes:["Organização e liderança","Confiabilidade","Dedicação"],atencao:["Pode ser rígido","Dificuldade com emoções"],dicas:["Emoções são dados válidos","Escute antes de decidir","Flexibilidade é eficiência a longo prazo"]},
  ESFJ:{nome:"ESFJ — O Cônsul",emoji:"🤝",cor:"#1E3A8A",desc:"Cuidador nato e sociável. Você harmoniza grupos e garante que todos se sintam bem-vindos.",fortes:["Empatia social","Organização","Lealdade"],atencao:["Busca aprovação demais","Dificuldade com críticas"],dicas:["Seu valor não depende da aprovação alheia","Crítica bem-intencionada é crescimento","Cuide de você também"]},
  ISTP:{nome:"ISTP — O Virtuoso",emoji:"🔧",cor:"#374151",desc:"Observador ousado e prático. Você resolve problemas com as mãos e a mente, explorando o mundo com curiosidade.",fortes:["Habilidade prática","Calma sob pressão","Resolução de problemas"],atencao:["Pode parecer frio","Dificuldade de se comprometer"],dicas:["Expresse mais suas emoções","Relacionamentos precisam de manutenção","Sua calma é rara — ensine outros"]},
  ISFP:{nome:"ISFP — O Aventureiro",emoji:"🎨",cor:"#374151",desc:"Artista sensível e espontâneo. Você vive o presente com intensidade e expressa beleza de formas únicas.",fortes:["Criatividade e sensibilidade","Espontaneidade","Empatia"],atencao:["Evita conflitos","Pode ser muito reservado"],dicas:["Compartilhe sua arte com o mundo","Conflito resolvido é liberdade","Seus sentimentos merecem ser expressos"]},
  ESTP:{nome:"ESTP — O Empreendedor",emoji:"🚀",cor:"#92400E",desc:"Enérgico e perceptivo. Você age rápido, pensa rápido e arrasta todos para a ação. Vive para o presente.",fortes:["Energia e ação","Percepção aguçada","Carisma"],atencao:["Impulsividade","Dificuldade com planejamento"],dicas:["Planejamento é liberdade futura","Desacelere às vezes — profundidade vale","Seus impulsos são força — direcione-os"]},
  ESFP:{nome:"ESFP — O Animador",emoji:"🎉",cor:"#92400E",desc:"A festa onde quer que vá! Você ilumina o ambiente com energia, humor e um amor genuíno pelas pessoas.",fortes:["Energia contagiante","Espontaneidade","Empatia prática"],atencao:["Dificuldade de planejamento","Foge de conflitos"],dicas:["Planejamento não tira a magia","Conflito evitado vira ressentimento","Canalize a energia em projetos maiores"]},
};

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

// ============================================================
// 🎨 COMPONENTE PRINCIPAL DO APP
// ============================================================
// ============================================================
// UTILS
// ============================================================
export const DEUSA_QUESTIONS = [
  {q:"O que mais te move?",opts:[{t:"Amor, beleza e conexão profunda",w:"afrodite"},{t:"Sabedoria, estratégia e justiça",w:"atena"},{t:"Liberdade, natureza e independência",w:"artemis"},{t:"Poder, lealdade e proteção dos meus",w:"hera"}]},
  {q:"Seu maior dom natural é:",opts:[{t:"Fazer as pessoas se sentirem amadas e desejadas",w:"afrodite"},{t:"Resolver problemas complexos com clareza",w:"atena"},{t:"Agir com precisão e sem depender de ninguém",w:"artemis"},{t:"Liderar e manter o que construiu",w:"hera"}]},
  {q:"Como você reage à traição?",opts:[{t:"Com paixão intensa — dói fundo e por muito tempo",w:"afrodite"},{t:"Com lógica — analiso e respondo com estratégia",w:"atena"},{t:"Me afasto — não dou segunda chance",w:"artemis"},{t:"Com intensidade — defendo o meu território",w:"hera"}]},
  {q:"O que você busca numa conexão?",opts:[{t:"Paixão, fusão e entrega total",w:"afrodite"},{t:"Igualdade intelectual e respeito mútuo",w:"atena"},{t:"Liberdade dentro da relação — não abro mão disso",w:"artemis"},{t:"Estabilidade, compromisso e parceria duradoura",w:"hera"}]},
  {q:"Qual ambiente te nutre mais?",opts:[{t:"Festas, arte, intimidade, conexões belas",w:"afrodite"},{t:"Bibliotecas, debates, ambientes de estratégia",w:"atena"},{t:"Florestas, montanhas, ao ar livre com animais",w:"artemis"},{t:"Casa estruturada, família, ambientes de poder",w:"hera"}]},
  {q:"Quando precisa de apoio, você:",opts:[{t:"Busca quem possa te ouvir e sentir junto",w:"afrodite"},{t:"Prefere resolver sozinha — emoção em segundo plano",w:"atena"},{t:"Processa em solidão antes de qualquer coisa",w:"artemis"},{t:"Mobiliza sua rede — quem é seu precisa estar presente",w:"hera"}]},
  {q:"Sua relação com poder é:",opts:[{t:"Poder de atração e influência emocional",w:"afrodite"},{t:"Poder intelectual e estratégico",w:"atena"},{t:"Poder de autonomia — ninguém me define",w:"artemis"},{t:"Poder formal, de liderança e autoridade",w:"hera"}]},
  {q:"O que as pessoas sentem em você?",opts:[{t:"Magnetismo, calor e presença irresistível",w:"afrodite"},{t:"Inteligência, clareza e capacidade fora do comum",w:"atena"},{t:"Força, autossuficiência e determinação",w:"artemis"},{t:"Segurança, autoridade e presença que inspira respeito",w:"hera"}]},
];
export const DEUSA_INFO = {
  afrodite:{nome:"Afrodite",emoji:"🌹",cor:"#EC4899",desc:"Você é a deusa do amor, da beleza e do desejo. Sua presença aquece os ambientes e as pessoas se abrem com você naturalmente. Tem o dom de fazer sentir — e isso é poder real.",fortes:["Magnetismo e charme natural","Empatia emocional profunda","Conexão autêntica com as pessoas","Criatividade e senso estético"],atencao:["Pode ser afetada demais pelo outro","Tende a idealizar relacionamentos"],dicas:["Seu amor começa em você mesma","Beleza sem fronteiras esgota — cuide da sua energia"]},
  atena:{nome:"Atena",emoji:"🦉",cor:"#1E40AF",desc:"Você é a deusa da sabedoria e da estratégia. Pensa antes de sentir, planeja antes de agir e encontra soluções onde outros veem só problemas. Sua mente é sua arma mais poderosa.",fortes:["Clareza intelectual extraordinária","Capacidade estratégica e analítica","Liderança por competência","Fairness e senso de justiça"],atencao:["Pode racionalizar demais o que pede sentimento","Tendência a ser excessivamente exigente"],dicas:["Inteligência emocional complementa a racional","Vulnerabilidade não é fraqueza — é coragem"]},
  artemis:{nome:"Ártemis",emoji:"🏹",cor:"#059669",desc:"Você é a deusa da caça, da lua e da independência. Não precisa de aprovação para agir. Tem clareza de propósito e não se curva a pressões externas. Seu espaço sagrado é inviolável.",fortes:["Autonomia e autossuficiência","Precisão e foco","Conexão com a natureza e o instinto","Coragem de seguir sozinha quando precisa"],atencao:["Pode se isolar em excesso","Dificuldade de pedir ajuda ou receber"],dicas:["Independência + conexão é a combinação mais poderosa","Seus aliados aumentam seu alcance — permita-os"]},
  hera:{nome:"Hera",emoji:"👑",cor:"#7C3AED",desc:"Você é a rainha. Protetora dos seus, guardiã de compromissos e de estruturas que sustentam. Tem autoridade natural e não abre mão do que é seu. Lealdade é tudo para você.",fortes:["Liderança e autoridade natural","Comprometimento e lealdade profundos","Capacidade de construir e manter estruturas","Presença imponente que inspira respeito"],atencao:["Pode ser intensa demais quando se sente ameaçada","Dificuldade em liberar controle"],dicas:["Seu poder não depende da ameaça — ele já existe","Delegue sem perder a soberania"]},
};

// ============================================================
// NOVOS TESTES — 10 testes completos
// ============================================================

// 1. ESTILO DE APEGO
export const APEGO_INTRO = {
  emoji: "🔗",
  nome: "Estilo de Apego",
  criador: "John Bowlby & Mary Ainsworth",
  historia: "A teoria do apego foi desenvolvida por John Bowlby nos anos 50 e refinada por Mary Ainsworth. Ela explica como nossas primeiras relações moldam todos os vínculos que formamos na vida adulta.",
  comoFunciona: "12 perguntas sobre como você age e sente nos relacionamentos identificam seu padrão de apego dominante.",
  comoInterpretar: "Não existe estilo perfeito — cada um tem pontos fortes e pontos de atenção. O reconhecimento é o primeiro passo para relações mais saudáveis.",
};

export const APEGO_QUESTIONS = [
  { q: "Quando começa um relacionamento novo, você geralmente:", opts: [
    { t: "Fica confortável abrindo-se gradualmente", w: "seguro" },
    { t: "Quer intensidade logo de início", w: "ansioso" },
    { t: "Sente necessidade de manter distância emocional", w: "evitativo" },
    { t: "Quer, mas ao mesmo tempo teme se aproximar", w: "desorganizado" }
  ]},
  { q: "Quando alguém que você ama demora para responder mensagens:", opts: [
    { t: "Imagina que está ocupado e aguarda tranquilo(a)", w: "seguro" },
    { t: "Começa a pensar que algo está errado", w: "ansioso" },
    { t: "Prefere nem ter mandado mensagem", w: "evitativo" },
    { t: "Alterna entre ignorar e mandar várias mensagens", w: "desorganizado" }
  ]},
  { q: "Como você reage quando percebe que está dependendo de alguém emocionalmente?", opts: [
    { t: "Vejo como natural numa relação de confiança", w: "seguro" },
    { t: "Sinto medo de que esse alguém vá embora", w: "ansioso" },
    { t: "Dou um passo atrás — não gosto disso", w: "evitativo" },
    { t: "Sinto confusão — quero e ao mesmo tempo não quero", w: "desorganizado" }
  ]},
  { q: "Após uma briga com pessoa próxima, você:", opts: [
    { t: "Busca a reconciliação quando os ânimos baixam", w: "seguro" },
    { t: "Quer resolver imediatamente, sente ansiedade", w: "ansioso" },
    { t: "Prefere tempo sozinho(a) para processar", w: "evitativo" },
    { t: "Às vezes reconcilia, às vezes isola — nunca sabe", w: "desorganizado" }
  ]},
  { q: "Como você se sente quando alguém expressa amor por você de forma intensa?", opts: [
    { t: "Fico tocado(a) e retribuo naturalmente", w: "seguro" },
    { t: "Fico feliz mas logo preocupado(a) em perder", w: "ansioso" },
    { t: "Me sinto um pouco sufocado(a)", w: "evitativo" },
    { t: "Fico confuso(a) — não sei como reagir", w: "desorganizado" }
  ]},
  { q: "Em relacionamentos, você costuma:", opts: [
    { t: "Confiar na outra pessoa sem precisar de provas", w: "seguro" },
    { t: "Precisar de reasseguramento frequente", w: "ansioso" },
    { t: "Manter uma reserva emocional sempre", w: "evitativo" },
    { t: "Oscilar entre confiar demais e desconfiar", w: "desorganizado" }
  ]},
  { q: "Quando alguém próximo está mal, você:", opts: [
    { t: "Oferece apoio e fica disponível genuinamente", w: "seguro" },
    { t: "Assume como problema seu, se sobrecarrega", w: "ansioso" },
    { t: "Não sabe bem como ajudar e se distancia", w: "evitativo" },
    { t: "Quer ajudar mas tem medo de fazer errado", w: "desorganizado" }
  ]},
  { q: "Você pensa sobre seus relacionamentos como:", opts: [
    { t: "Fontes de alegria e suporte mútuo", w: "seguro" },
    { t: "Algo frágil que pode se quebrar a qualquer hora", w: "ansioso" },
    { t: "Algo complicado que exige energia demais", w: "evitativo" },
    { t: "Imprevisíveis — nunca sabe como vão ser", w: "desorganizado" }
  ]},
  { q: "Como você reage quando percebe que está gostando muito de alguém?", opts: [
    { t: "Curto a sensação e deixo fluir", w: "seguro" },
    { t: "Fico com medo de me machucar", w: "ansioso" },
    { t: "Começo a questionar se é boa ideia", w: "evitativo" },
    { t: "Sinto excitação e pavor ao mesmo tempo", w: "desorganizado" }
  ]},
  { q: "Sua principal preocupação nos relacionamentos:", opts: [
    { t: "Não tenho grandes preocupações — confio no processo", w: "seguro" },
    { t: "Ser abandonado(a) ou não ser suficiente", w: "ansioso" },
    { t: "Perder minha independência e espaço", w: "evitativo" },
    { t: "Machucar ou ser machucado(a) sem querer", w: "desorganizado" }
  ]},
  { q: "Quando termina um relacionamento, você:", opts: [
    { t: "Sofre, mas consegue seguir em frente com tempo", w: "seguro" },
    { t: "Sente dificuldade enorme de soltar", w: "ansioso" },
    { t: "Tende a anestesiar e seguir em frente rápido", w: "evitativo" },
    { t: "Tem reações imprevisíveis — às vezes bem, às vezes não", w: "desorganizado" }
  ]},
  { q: "Sua visão sobre amor é:", opts: [
    { t: "Que é possível e vale a pena", w: "seguro" },
    { t: "Que é lindo mas assustador", w: "ansioso" },
    { t: "Que é superestimado e complicado", w: "evitativo" },
    { t: "Que não entende muito bem o que é", w: "desorganizado" }
  ]},
];

export const APEGO_INFO = {
  seguro: { nome: "Apego Seguro", emoji: "🌿", cor: "#10B981",
    desc: "Você tem uma base emocional sólida. Consegue criar vínculos profundos sem medo excessivo de abandono ou sufocamento. Confia e permite ser confiado(a).",
    fortes: ["Equilíbrio entre intimidade e independência", "Comunicação saudável em conflitos", "Capaz de oferecer e receber suporte", "Relações duradouras e estáveis"],
    atencao: ["Pode subestimar dificuldades do parceiro", "Às vezes parece distante para quem é mais ansioso"],
    dicas: ["Continue cultivando sua base emocional", "Seja paciente com parceiros de outros estilos", "Sua estabilidade é um presente para as relações", "Compartilhe como você faz isso — inspire outros"]
  },
  ansioso: { nome: "Apego Ansioso", emoji: "💛", cor: "#F59E0B",
    desc: "Você ama profundamente e com intensidade. Mas o medo de perder ou não ser suficiente pode criar ciclos de preocupação que sobrecarregam seus relacionamentos.",
    fortes: ["Amor intenso e dedicado", "Alta empatia com o outro", "Compromisso genuíno", "Percebe nuances emocionais sutis"],
    atencao: ["Medo de abandono que gera comportamentos que afastam", "Necessidade de reasseguramento constante", "Dificuldade em confiar sem provas"],
    dicas: ["Trabalhe a segurança interna — ela não vem do outro", "Terapia pode transformar esse padrão", "Comunique suas necessidades sem acusação", "O medo de perder pode fazer você perder — respira"]
  },
  evitativo: { nome: "Apego Evitativo", emoji: "🌊", cor: "#3B82F6",
    desc: "Você valoriza muito sua independência e tem dificuldade com vulnerabilidade emocional. Intimidade pode parecer ameaçadora — mas isso não significa que não sente.",
    fortes: ["Autossuficiência e força interna", "Clareza sobre seus próprios limites", "Não se perde nas relações", "Estável nas crises"],
    atencao: ["Dificuldade em expressar necessidades emocionais", "Pode parecer frio(a) para quem está próximo", "Intimidade real pode ser difícil de alcançar"],
    dicas: ["Vulnerabilidade controlada é o primeiro passo", "Terapia ajuda a desbloquear o que foi aprendido", "Intimidade não precisa significar perder quem você é", "Permita que alguém te conheça de verdade"]
  },
  desorganizado: { nome: "Apego Desorganizado", emoji: "🌀", cor: "#7C3AED",
    desc: "Você deseja conexão profunda mas ao mesmo tempo teme ela. Esse padrão surge de experiências passadas onde quem deveria proteger também machucou — e pode ser transformado.",
    fortes: ["Profundidade emocional única", "Resiliência em situações difíceis", "Alta consciência das dinâmicas relacionais", "Capacidade de transformação quando apoiado"],
    atencao: ["Oscilações emocionais podem confundir parceiros", "Dificuldade em prever suas próprias reações", "Relações podem ser intensas e instáveis"],
    dicas: ["Terapia é especialmente importante para este padrão", "Segurança vem de dentro — mas pode ser construída", "Você não está quebrado(a) — está adaptado(a) ao passado", "Com suporte certo, relações seguras são possíveis"]
  },
};

// 2. VOCÊ É CIUMENTO?
export const CIUMENTO_INTRO = {
  emoji: "👀",
  nome: "Você É Ciumento?",
  criador: "KomparAI",
  historia: "O ciúme é uma emoção universal — mas seus níveis e formas variam muito de pessoa para pessoa. Entender seu padrão é o primeiro passo para relações mais leves.",
  comoFunciona: "10 perguntas sobre situações reais medem seu nível de ciúme em 3 dimensões: baixo, moderado e intenso.",
  comoInterpretar: "O resultado mostra seu padrão dominante — mas lembre que o contexto sempre importa.",
};

export const CIUMENTO_QUESTIONS = [
  { q: "Seu parceiro(a) vai a uma festa sem você. Você:", opts: [
    { t: "Fica tranquilo(a), curte sua noite", w: "baixo" },
    { t: "Fica curioso(a) mas sem ansiedade", w: "moderado" },
    { t: "Fica pensando a noite toda em quem estava lá", w: "intenso" },
    { t: "Manda mensagens frequentes pra checar", w: "intenso" }
  ]},
  { q: "Você vê uma foto do(a) seu/sua parceiro(a) com um(a) amigo(a) bonito(a). Você:", opts: [
    { t: "Acha a foto bonita e segue sua vida", w: "baixo" },
    { t: "Sente uma pontadinha mas descarta", w: "moderado" },
    { t: "Fica olhando a foto várias vezes", w: "intenso" },
    { t: "Questiona quem é aquela pessoa", w: "intenso" }
  ]},
  { q: "Seu(sua) parceiro(a) ri muito de uma piada de outra pessoa. Você:", opts: [
    { t: "Acha legal, curte o momento", w: "baixo" },
    { t: "Ri junto, talvez sinta algo mínimo", w: "moderado" },
    { t: "Sente um incômodo difícil de explicar", w: "intenso" },
    { t: "Começa a observar a interação com atenção", w: "intenso" }
  ]},
  { q: "Seu(sua) parceiro(a) trabalha com uma pessoa que você acha atraente. Você:", opts: [
    { t: "Não pensa nisso — confia plenamente", w: "baixo" },
    { t: "Pensa de vez em quando, mas supera fácil", w: "moderado" },
    { t: "Sempre tem aquela preocupação no fundo", w: "intenso" },
    { t: "Tenta saber mais sobre essa pessoa", w: "intenso" }
  ]},
  { q: "Quando não recebe resposta por horas, você:", opts: [
    { t: "Imagina que está ocupado(a) e aguarda normal", w: "baixo" },
    { t: "Nota, mas não age por isso", w: "moderado" },
    { t: "Fica imaginando vários cenários", w: "intenso" },
    { t: "Manda mensagem de novo ou busca outro meio", w: "intenso" }
  ]},
  { q: "Seu(sua) ex manda mensagem para o(a) seu/sua parceiro(a). Você:", opts: [
    { t: "Não me perturba — eles têm vida deles", w: "baixo" },
    { t: "Pergunto de forma casual o que foi", w: "moderado" },
    { t: "Fico desconfortável e quero saber tudo", w: "intenso" },
    { t: "Acho que é uma ameaça à relação", w: "intenso" }
  ]},
  { q: "Seu(sua) parceiro(a) faz amizade com alguém novo(a). Você:", opts: [
    { t: "Fico feliz pela nova amizade dele(a)", w: "baixo" },
    { t: "Fico curioso(a) mas não me preocupo", w: "moderado" },
    { t: "Quero conhecer logo essa pessoa", w: "moderado" },
    { t: "Fico de olho nessa nova amizade", w: "intenso" }
  ]},
  { q: "Em relacionamentos anteriores, o ciúme foi:", opts: [
    { t: "Raramente um problema", w: "baixo" },
    { t: "Às vezes surgiu, resolvemos fácil", w: "moderado" },
    { t: "Um tema frequente de conversa", w: "intenso" },
    { t: "Fonte de conflitos sérios", w: "intenso" }
  ]},
  { q: "Você seguiria as redes sociais da pessoa que te preocupa?", opts: [
    { t: "Jamais — respeito privacidade", w: "baixo" },
    { t: "Provavelmente não faria isso", w: "moderado" },
    { t: "Já fiz isso antes ou pensaria nisso", w: "intenso" },
    { t: "Já fiz e monitorei regularmente", w: "intenso" }
  ]},
  { q: "Quando se sente com ciúme, você costuma:", opts: [
    { t: "Processar internamente e superar", w: "baixo" },
    { t: "Conversar com parceiro(a) de forma calma", w: "moderado" },
    { t: "Ficar ruminando por horas", w: "intenso" },
    { t: "Agir de formas que depois me arrependo", w: "intenso" }
  ]},
];

export const CIUMENTO_INFO = {
  baixo: { nome: "Ciúme Baixo", emoji: "🌿", cor: "#10B981",
    desc: "Você tem alta confiança nas suas relações e processa a emoção do ciúme com leveza. Sua segurança interna é um dos pilares de relacionamentos saudáveis.",
    fortes: ["Confiança sólida no(a) parceiro(a)", "Não deixa o ciúme controlar ações", "Dá espaço e recebe espaço", "Relações baseadas em liberdade mútua"],
    atencao: ["Muito pouco ciúme pode sinalizar desapego", "Certifique-se que é segurança real — não indiferença"],
    dicas: ["Continue cultivando confiança", "Compartilhe sua postura com o(a) parceiro(a)", "Ciúme zero pode ser suspeito — verifique se está conectado(a)", "Sua tranquilidade é uma qualidade rara"]
  },
  moderado: { nome: "Ciúme Moderado", emoji: "💛", cor: "#F59E0B",
    desc: "Você sente ciúme — como todo ser humano — mas não deixa essa emoção tomar o controle. Consegue processar, comunicar e seguir em frente de forma saudável.",
    fortes: ["Ciúme sinaliza que você se importa", "Consegue comunicar sem acusar", "Não deixa a emoção virar controle", "Usa o ciúme como termômetro relacional"],
    atencao: ["Fique atento(a) se o padrão aumentar em momentos de insegurança", "Não suprima — comunique"],
    dicas: ["Diálogo aberto com o(a) parceiro(a) previne acúmulos", "O ciúme moderado é saudável quando comunicado", "Fortaleça sua autoestima — ela é o antídoto", "Diferença entre ciúme e controle é fundamental"]
  },
  intenso: { nome: "Ciúme Intenso", emoji: "🔥", cor: "#EF4444",
    desc: "O ciúme ocupa bastante espaço na sua vida afetiva. Isso frequentemente vem de insegurança interna ou experiências passadas de traição. É possível transformar esse padrão.",
    fortes: ["Amor intenso e apaixonado", "Alta percepção emocional", "Comprometimento profundo", "Sensibilidade às dinâmicas da relação"],
    atencao: ["Ciúme intenso pode sufocar o(a) parceiro(a)", "Monitoramento e controle destroem relações", "Comportamentos impulsivos podem criar o que mais teme"],
    dicas: ["Terapia é muito eficaz para este padrão", "Trabalhe a autoestima — ciúme nasce da insegurança", "Converse sobre necessidades sem acusar", "Controle não é amor — aprenda a diferença"]
  },
};

// 3. PERFIL ROMÂNTICO
export const ROMANTICO_INTRO = {
  emoji: "💑",
  nome: "Perfil Romântico",
  criador: "KomparAI",
  historia: "A forma como nos relacionamos romanticamente é moldada por temperamento, experiências e valores. Conhecer seu perfil ajuda a entender seus padrões e a se comunicar melhor com quem ama.",
  comoFunciona: "12 perguntas sobre como você age, sente e decide nos relacionamentos revelam seu perfil dominante.",
  comoInterpretar: "Cada perfil tem pontos fortes e desafios. O autoconhecimento é o maior presente que você pode dar a um relacionamento.",
};

export const ROMANTICO_QUESTIONS = [
  { q: "No início de um relacionamento, você tende a:", opts: [
    { t: "Ir devagar — precisa de segurança", w: "cauteloso" },
    { t: "Mergulhar de cabeça — vive o presente", w: "apaixonado" },
    { t: "Analisar antes de se comprometer", w: "racional" },
    { t: "Deixar o outro tomar a iniciativa", w: "receptivo" }
  ]},
  { q: "Para você, um relacionamento ideal tem:", opts: [
    { t: "Companheirismo e estabilidade", w: "cauteloso" },
    { t: "Paixão, intensidade e surpresas", w: "apaixonado" },
    { t: "Alinhamento de valores e projetos", w: "racional" },
    { t: "Cumplicidade e conexão emocional", w: "receptivo" }
  ]},
  { q: "Quando tem um problema no relacionamento, você:", opts: [
    { t: "Prefere deixar o clima baixar antes de conversar", w: "cauteloso" },
    { t: "Sente e reage na hora — pode ser intenso(a)", w: "apaixonado" },
    { t: "Analisa a situação e propõe soluções", w: "racional" },
    { t: "Escuta bastante antes de se posicionar", w: "receptivo" }
  ]},
  { q: "Ciúme para você é:", opts: [
    { t: "Algo que prefiro evitar — não gosto de conflito", w: "cauteloso" },
    { t: "Natural — sinto e expresso quando aparece", w: "apaixonado" },
    { t: "Uma emoção que analiso antes de agir", w: "racional" },
    { t: "Raro — confio e me sinto seguro(a)", w: "receptivo" }
  ]},
  { q: "Como demonstra carinho no dia a dia?", opts: [
    { t: "Atos de cuidado — faço coisas pela pessoa", w: "cauteloso" },
    { t: "Afeto físico e palavras intensas", w: "apaixonado" },
    { t: "Estou presente e resolvo problemas", w: "racional" },
    { t: "Ouço com atenção e dou apoio emocional", w: "receptivo" }
  ]},
  { q: "Seus relacionamentos costumam ser:", opts: [
    { t: "Longos e construídos com calma", w: "cauteloso" },
    { t: "Intensos desde o início", w: "apaixonado" },
    { t: "Bem estruturados e planejados", w: "racional" },
    { t: "Profundos e cheios de conexão", w: "receptivo" }
  ]},
  { q: "O que mais valora em um(a) parceiro(a)?", opts: [
    { t: "Lealdade e confiabilidade", w: "cauteloso" },
    { t: "Energia, entusiasmo e paixão", w: "apaixonado" },
    { t: "Inteligência e alinhamento de valores", w: "racional" },
    { t: "Empatia e sensibilidade emocional", w: "receptivo" }
  ]},
  { q: "Quando pensa em 'futuro a dois', imagina:", opts: [
    { t: "Segurança, lar, rotina saudável", w: "cauteloso" },
    { t: "Aventura, descobertas, paixão duradoura", w: "apaixonado" },
    { t: "Projetos compartilhados e metas", w: "racional" },
    { t: "Crescimento emocional juntos", w: "receptivo" }
  ]},
  { q: "O que mais te incomoda em um relacionamento?", opts: [
    { t: "Instabilidade e imprevisibilidade", w: "cauteloso" },
    { t: "Monotonia e rotina sem emoção", w: "apaixonado" },
    { t: "Falta de lógica ou objetivos claros", w: "racional" },
    { t: "Falta de escuta e conexão emocional", w: "receptivo" }
  ]},
  { q: "Em uma discussão difícil, você costuma:", opts: [
    { t: "Buscar a paz, mesmo cedendo às vezes", w: "cauteloso" },
    { t: "Sentir e expressar tudo na hora", w: "apaixonado" },
    { t: "Manter a lógica e focar na solução", w: "racional" },
    { t: "Priorizar que o outro se sinta ouvido", w: "receptivo" }
  ]},
  { q: "Romance para você é:", opts: [
    { t: "Conforto, presença, estabilidade", w: "cauteloso" },
    { t: "Paixão, gestos, intensidade", w: "apaixonado" },
    { t: "Parceria, projeto de vida compartilhado", w: "racional" },
    { t: "Conexão, entendimento, cumplicidade", w: "receptivo" }
  ]},
  { q: "Seu maior medo em um relacionamento:", opts: [
    { t: "Ser abandonado(a) ou trair a confiança", w: "cauteloso" },
    { t: "Perder a paixão e virar rotina", w: "apaixonado" },
    { t: "Tomar decisões erradas por emoção", w: "racional" },
    { t: "Não ser verdadeiramente compreendido(a)", w: "receptivo" }
  ]},
];

export const ROMANTICO_INFO = {
  cauteloso: { nome: "O Construtor", emoji: "🏛️", cor: "#10B981",
    desc: "Você constrói amor com paciência. Preza pela estabilidade, lealdade e cuidado prático. Seus relacionamentos tendem a ser duradouros porque são bem alicerçados.",
    fortes: ["Lealdade e comprometimento profundo", "Relações estáveis e duradouras", "Cuidado prático pelo parceiro(a)", "Confiabilidade que inspira segurança"],
    atencao: ["Pode evitar conversas difíceis", "Espontaneidade pode ser difícil", "Pode parecer distante emocionalmente"],
    dicas: ["Pratique expressar sentimentos mesmo quando é difícil", "Estabilidade não precisa ser monotonia", "Surpreenda o(a) parceiro(a) de vez em quando", "Vulnerabilidade fortalece — não enfraquece"]
  },
  apaixonado: { nome: "O Apaixonado", emoji: "🔥", cor: "#EF4444",
    desc: "Você ama com intensidade e entrega total. O amor, para você, deve ser vivido com paixão. Sua energia cria relacionamentos vibrantes e memoráveis.",
    fortes: ["Intensidade e entrega emocional", "Cria momentos inesquecíveis", "Não tem medo de se apaixonar", "Espontaneidade e energia"],
    atencao: ["Intensidade pode assustar parceiros mais calmos", "A paixão inicial pode ofuscar sinais de alerta", "Relacionamentos podem acabar quando a intensidade baixa"],
    dicas: ["Amor maduro também tem intensidade — ela só muda de forma", "Parceiro(a) precisa de espaço às vezes — e tudo bem", "Construa também na estabilidade", "Trabalhe a tolerância à rotina"]
  },
  racional: { nome: "O Estrategista", emoji: "🧩", cor: "#3B82F6",
    desc: "Você aborda o amor com clareza e intencionalidade. Não ama menos — ama de forma mais consciente. Seus relacionamentos são construídos com alinhamento genuíno.",
    fortes: ["Decisões conscientes nos relacionamentos", "Clareza sobre o que quer e não quer", "Parceiro(a) de projetos de vida", "Evita armadilhas emocionais comuns"],
    atencao: ["Pode parecer frio(a) para parceiros emocionais", "Racionalizar demais pode bloquear conexão", "Espontaneidade amorosa pode ser rara"],
    dicas: ["Permita-se sentir sem analisar tudo", "Emoção e razão coexistem — as duas importam", "Deixe o(a) parceiro(a) guiar às vezes", "Surpresas irracionais têm seu valor"]
  },
  receptivo: { nome: "O Empático", emoji: "🌊", cor: "#7C3AED",
    desc: "Você ama com o coração aberto e a escuta ativa. Sua profundidade emocional cria conexões raras. Para você, ser verdadeiramente compreendido(a) é a maior forma de amor.",
    fortes: ["Empatia e escuta profunda", "Conexões emocionais muito ricas", "Parceiro(a) que faz o outro se sentir visto", "Sensibilidade que cria intimidade real"],
    atencao: ["Pode absorver emoções do(a) parceiro(a) demais", "Pode ceder seus próprios limites", "Dependência emocional pode ser um risco"],
    dicas: ["Cuide também das suas próprias necessidades", "Limites saudáveis protegem a relação", "Sua sensibilidade é um dom — não a suprima", "Parceiro(a) que também cuida de você é essencial"]
  },
};

// 4. COMPATIBILIDADE DE SIGNOS
export const COMP_SIGNOS_INTRO = {
  emoji: "💫",
  nome: "Compatibilidade de Signos",
  criador: "Astrologia Ocidental",
  historia: "A astrologia divide os 12 signos em 4 elementos — Fogo, Terra, Água e Ar — e 3 modalidades. A compatibilidade entre signos considera esses elementos e como suas energias se complementam ou se chocam.",
  comoFunciona: "Responda perguntas sobre sua forma de ser e relacionar — sem precisar saber seu signo — e descubra com qual elemento você mais se conecta romanticamente.",
  comoInterpretar: "O resultado mostra o elemento com que você tem maior compatibilidade de energia, e quais signos carregam essa vibração.",
};

export const COMP_SIGNOS_QUESTIONS = [
  { q: "Em um relacionamento, você precisa principalmente de:", opts: [
    { t: "Aventura, entusiasmo e admiração mútua", w: "fogo" },
    { t: "Estabilidade, segurança e confiança", w: "terra" },
    { t: "Conexão emocional profunda", w: "agua" },
    { t: "Estimulação intelectual e conversas ricas", w: "ar" }
  ]},
  { q: "Seu jeito de demonstrar amor é:", opts: [
    { t: "Gestos grandiosos e palavras apaixonadas", w: "fogo" },
    { t: "Cuidado prático e presença constante", w: "terra" },
    { t: "Intuição — percebe sem precisar falar", w: "agua" },
    { t: "Conversas, ideias compartilhadas", w: "ar" }
  ]},
  { q: "O tipo de pessoa que te atrai romanticamente:", opts: [
    { t: "Energética, confiante e inspiradora", w: "fogo" },
    { t: "Confiável, presente e trabalhadora", w: "terra" },
    { t: "Sensível, intuitiva e profunda", w: "agua" },
    { t: "Inteligente, comunicativa e curiosa", w: "ar" }
  ]},
  { q: "O que mais te incomoda em uma relação:", opts: [
    { t: "Mediocridade e falta de ambição", w: "fogo" },
    { t: "Instabilidade e falta de compromisso", w: "terra" },
    { t: "Superficialidade e falta de empatia", w: "agua" },
    { t: "Monotonia e falta de diálogo", w: "ar" }
  ]},
  { q: "Você prefere um(a) parceiro(a) que:", opts: [
    { t: "Te desafia e te inspira a crescer", w: "fogo" },
    { t: "Te traz segurança e conforto real", w: "terra" },
    { t: "Entende seus silêncios e sentimentos", w: "agua" },
    { t: "Expande sua mente e visão de mundo", w: "ar" }
  ]},
  { q: "Em momentos de crise no relacionamento, você:", opts: [
    { t: "Enfrenta diretamente — não gosta de esperar", w: "fogo" },
    { t: "Analisa com calma e busca solução prática", w: "terra" },
    { t: "Sente muito e precisa de tempo para processar", w: "agua" },
    { t: "Quer conversar e entender a perspectiva do outro", w: "ar" }
  ]},
  { q: "Seu maior sonho a dois:", opts: [
    { t: "Viver grandes experiências e aventuras", w: "fogo" },
    { t: "Construir algo sólido: família, casa, futuro", w: "terra" },
    { t: "Conexão íntima e entendimento profundo", w: "agua" },
    { t: "Crescer juntos intelectual e culturalmente", w: "ar" }
  ]},
  { q: "Você se sente mais atraído(a) por pessoas:", opts: [
    { t: "Leoninas, arianas ou sagitarianas", w: "fogo" },
    { t: "Taurinas, virginianas ou capricornianas", w: "terra" },
    { t: "Cancerianas, escorpianas ou piscinas", w: "agua" },
    { t: "Geminianas, librianas ou aquarianas", w: "ar" }
  ]},
];

export const COMP_SIGNOS_INFO = {
  fogo: { nome: "Fogo 🔥", emoji: "🔥", cor: "#EF4444",
    desc: "Você vibra com a energia do Fogo — paixão, entusiasmo e intensidade. Seus relacionamentos mais compatíveis são com signos de Fogo (Áries, Leão, Sagitário) e Ar (que alimenta a chama).",
    fortes: ["Paixão contagiante", "Inspire e seja inspirado(a)", "Aventura e crescimento juntos", "Energia que cria memórias"],
    atencao: ["Pode entrar em conflito com Terra (controle vs. liberdade)", "Duas chamas podem se consumir — equilíbrio importa"],
    dicas: ["Com Fogo: intensa e épica — mas precisa de espaço", "Com Ar: perfeita — estimulam sem sufocar", "Com Terra: aprendem muito — mas precisam de paciência", "Com Água: intensa no início — pode ficar complicado"]
  },
  terra: { nome: "Terra 🌍", emoji: "🌍", cor: "#92400E",
    desc: "Você vibra com a energia da Terra — solidez, lealdade e construção. Seus relacionamentos mais compatíveis são com signos de Terra (Touro, Virgem, Capricórnio) e Água (que nutre a terra).",
    fortes: ["Relacionamentos duradouros e confiáveis", "Parceiro(a) de vida real", "Segurança emocional e financeira", "Amor construído com cuidado"],
    atencao: ["Pode parecer rígido(a) para Fogo e Ar", "Rotina demais pode sufocar espontaneidade"],
    dicas: ["Com Terra: profundo e estável — às vezes precisam de novidade", "Com Água: muito nutritivo — emocional e prático se completam", "Com Ar: aprendem a se soltar — mas podem frustrar", "Com Fogo: excitante mas desafiador"]
  },
  agua: { nome: "Água 🌊", emoji: "🌊", cor: "#1D4ED8",
    desc: "Você vibra com a energia da Água — emoção, intuição e profundidade. Seus relacionamentos mais compatíveis são com signos de Água (Câncer, Escorpião, Peixes) e Terra (que contém e protege).",
    fortes: ["Conexão emocional raramente encontrada", "Empatia e intuição que surpreendem", "Amor que vai fundo de verdade", "Intimidade profunda e transformadora"],
    atencao: ["Pode absorver emoções do(a) parceiro(a)", "Extremamente sensível a frieza ou distância"],
    dicas: ["Com Água: intensa e profunda — não subestimem vocês mesmos", "Com Terra: complemento perfeito — segurança + emoção", "Com Ar: pode se sentir incompreendido(a)", "Com Fogo: apaixonante mas pode ser volátil"]
  },
  ar: { nome: "Ar 💨", emoji: "💨", cor: "#7C3AED",
    desc: "Você vibra com a energia do Ar — intelecto, comunicação e liberdade. Seus relacionamentos mais compatíveis são com signos de Ar (Gêmeos, Libra, Aquário) e Fogo (que o ar alimenta).",
    fortes: ["Conversas que nunca entediam", "Crescimento intelectual junto", "Amor com leveza e humor", "Parceiro(a) curioso(a) e estimulante"],
    atencao: ["Pode parecer frio(a) para signos de Água", "Liberdade demais pode gerar instabilidade"],
    dicas: ["Com Ar: química mental incrível — mas aterrem às vezes", "Com Fogo: dinâmico e inspirador — uma dupla de muito movimento", "Com Terra: aprendem estabilidade — mas pode frustrar", "Com Água: conexão emocional pode ser difícil"]
  },
};

// 5. SEUS VALORES FUNDAMENTAIS
export const VALORES_INTRO = {
  emoji: "🧭",
  nome: "Seus Valores Fundamentais",
  criador: "KomparAI",
  historia: "Valores são as bússolas invisíveis que orientam nossas decisões — o que defendemos, o que admiramos, o que não abrimos mão. Saber quais são os seus valores fundamentais é saber quem você realmente é.",
  comoFunciona: "12 perguntas sobre situações reais e dilemas revelam qual valor guia suas escolhas de forma dominante.",
  comoInterpretar: "Todos os valores são válidos e complementares. O resultado mostra apenas sua orientação dominante — aquela que você naturalmente prioriza.",
};

export const VALORES_QUESTIONS = [
  { q: "Num trabalho, o que você jamais abriria mão:", opts: [
    { t: "Fazer o que me realiza de verdade", w: "liberdade" },
    { t: "Ser tratado(a) com respeito e justiça", w: "justica" },
    { t: "Ter impacto real na vida das pessoas", w: "servico" },
    { t: "Aprender e crescer constantemente", w: "crescimento" }
  ]},
  { q: "Qual causa você defende com mais intensidade?", opts: [
    { t: "Liberdade de expressão e autonomia individual", w: "liberdade" },
    { t: "Igualdade de direitos e combate à injustiça", w: "justica" },
    { t: "Ajudar comunidades vulneráveis", w: "servico" },
    { t: "Educação e acesso ao conhecimento", w: "crescimento" }
  ]},
  { q: "Em qual situação você se sente mais você mesmo(a)?", opts: [
    { t: "Quando faço o que quero, sem precisar de aprovação", w: "liberdade" },
    { t: "Quando defendo alguém que foi tratado injustamente", w: "justica" },
    { t: "Quando faço algo que realmente ajudou", w: "servico" },
    { t: "Quando aprendo algo que muda minha visão", w: "crescimento" }
  ]},
  { q: "O que mais te incomoda nas pessoas?", opts: [
    { t: "Quem tenta controlar ou limitar outros", w: "liberdade" },
    { t: "Quem trata pessoas de formas diferentes sem razão", w: "justica" },
    { t: "Quem não pensa nos outros, só em si", w: "servico" },
    { t: "Quem não questiona e aceita tudo sem pensar", w: "crescimento" }
  ]},
  { q: "Ao tomar uma decisão difícil, o que pesa mais?", opts: [
    { t: "Ser fiel a mim mesmo(a)", w: "liberdade" },
    { t: "Fazer o que é certo", w: "justica" },
    { t: "O que vai ajudar mais pessoas", w: "servico" },
    { t: "O que vai me fazer crescer mais", w: "crescimento" }
  ]},
  { q: "Qual tipo de herói você mais admira?", opts: [
    { t: "O que quebra as regras para seguir o coração", w: "liberdade" },
    { t: "O que luta por quem não tem voz", w: "justica" },
    { t: "O que sacrifica tudo pelos outros", w: "servico" },
    { t: "O que busca conhecimento para mudar o mundo", w: "crescimento" }
  ]},
  { q: "O que te faz sentir que viveu um dia significativo?", opts: [
    { t: "Fiz o que queria, sem concessões", w: "liberdade" },
    { t: "Fiz a coisa certa mesmo sendo difícil", w: "justica" },
    { t: "Ajudei alguém de forma concreta", w: "servico" },
    { t: "Aprendi algo novo ou superei um limite", w: "crescimento" }
  ]},
  { q: "Qual é seu relacionamento com regras?", opts: [
    { t: "Questiono toda regra que limita sem sentido", w: "liberdade" },
    { t: "Sigo quando são justas, questiono quando não são", w: "justica" },
    { t: "Sigo se protegem quem é mais fraco", w: "servico" },
    { t: "Regras mudam — o que importa é a razão delas", w: "crescimento" }
  ]},
  { q: "Num grupo, você costuma ser:", opts: [
    { t: "O(a) que propõe caminhos fora do padrão", w: "liberdade" },
    { t: "O(a) que garante que todos são ouvidos", w: "justica" },
    { t: "O(a) que assume o que é difícil para ajudar", w: "servico" },
    { t: "O(a) que traz novas perspectivas e ideias", w: "crescimento" }
  ]},
  { q: "Qual legado você quer deixar?", opts: [
    { t: "Que vivi do meu jeito, sem me trair", w: "liberdade" },
    { t: "Que tornei o mundo mais justo", w: "justica" },
    { t: "Que fiz diferença na vida de pessoas reais", w: "servico" },
    { t: "Que contribuí com algo que expandiu o humano", w: "crescimento" }
  ]},
  { q: "O que nunca te deixa dormir tranquilo(a)?", opts: [
    { t: "Sentir que não fui autêntico(a)", w: "liberdade" },
    { t: "Ter sido injusto(a) ou omisso(a) diante de injustiça", w: "justica" },
    { t: "Não ter ajudado quando podia", w: "servico" },
    { t: "Ter desperdiçado oportunidade de aprender ou evoluir", w: "crescimento" }
  ]},
  { q: "Sua definição pessoal de sucesso:", opts: [
    { t: "Viver do meu jeito e nas minhas condições", w: "liberdade" },
    { t: "Ter agido com integridade sempre", w: "justica" },
    { t: "Ter impactado positivamente quem cruzou meu caminho", w: "servico" },
    { t: "Ter evoluído como pessoa e profissional continuamente", w: "crescimento" }
  ]},
];

export const VALORES_INFO = {
  liberdade: { nome: "Liberdade & Autenticidade", emoji: "🦅", cor: "#F59E0B",
    desc: "Seu valor fundamental é a liberdade — de ser, escolher e viver de acordo com quem você realmente é. Você não abre mão da autenticidade por nenhum preço.",
    fortes: ["Autenticidade que inspira", "Coragem de ser diferente", "Não se perde em aprovação alheia", "Criatividade e visão própria"],
    atencao: ["Pode ser percebido(a) como rebelde ou difícil", "Liberdade individual vs. compromissos coletivos"],
    dicas: ["Sua autenticidade é um presente raro", "Liberdade com responsabilidade é a forma mais poderosa", "Respeite a liberdade dos outros tanto quanto a sua", "Você pode inspirar outros a serem mais eles mesmos"]
  },
  justica: { nome: "Justiça & Integridade", emoji: "⚖️", cor: "#3B82F6",
    desc: "Seu valor fundamental é a justiça. Você tem um senso ético aguçado e sente profundamente quando algo ou alguém é tratado de forma injusta.",
    fortes: ["Senso moral forte e consistente", "Defende quem não consegue se defender", "Integridade mesmo sob pressão", "Confiabilidade e coerência"],
    atencao: ["Pode se machucar com as injustiças do mundo", "Rigidez ética pode gerar conflitos desnecessários"],
    dicas: ["Sua bússola moral é rara — honre ela", "Escolha as batalhas — não dá para lutar por tudo", "Perdoar não é validar a injustiça", "Seu senso de justiça pode mudar sistemas"]
  },
  servico: { nome: "Serviço & Impacto", emoji: "🤲", cor: "#10B981",
    desc: "Seu valor fundamental é o impacto nos outros. Você se realiza quando sabe que fez diferença — mesmo que pequena — na vida de alguém.",
    fortes: ["Generosidade genuína", "Empatia que gera ação", "Capacidade de mobilizar pessoas", "Amor que se transforma em resultado"],
    atencao: ["Risco de se esgota colocando outros sempre na frente", "Pode ter dificuldade de receber ajuda"],
    dicas: ["Cuide de você para poder cuidar dos outros", "Servir não é se sacrificar", "Seu impacto começa pelas pequenas ações diárias", "Aprenda a dizer não — é cuidado também"]
  },
  crescimento: { nome: "Crescimento & Evolução", emoji: "🌱", cor: "#7C3AED",
    desc: "Seu valor fundamental é o crescimento contínuo. Você não aceita estagnação — em si mesmo(a) nem nas pessoas e sistemas ao redor.",
    fortes: ["Mente aberta e curiosa", "Evolução constante", "Inspiração para quem está perto", "Capacidade de se reinventar"],
    atencao: ["Pode ser impaciente com quem não quer crescer", "Busca constante pode gerar insatisfação"],
    dicas: ["Crescimento também tem ritmo — respeite o seu", "Cada fase tem seu valor — mesmo as de pausa", "Compartilhe seu aprendizado — isso multiplica", "Evolução não é sempre linear — e tudo bem"]
  },
};

// 6. ARQUÉTIPO DE JUNG
export const ARQUETIPO_INTRO = {
  emoji: "🎭",
  nome: "Arquétipo de Jung",
  criador: "Carl Gustav Jung",
  historia: "Carl Jung identificou padrões universais na psique humana — os arquétipos. Presentes em mitologias, contos e sonhos de todas as culturas, eles representam facetas fundamentais da experiência humana.",
  comoFunciona: "12 perguntas sobre como você age, pensa e se relaciona com o mundo identificam seu arquétipo dominante entre Herói, Sábio, Rebelde e Cuidador.",
  comoInterpretar: "Seu arquétipo é a energia que pulsa mais forte em você. Ele explica muito sobre suas motivações e padrões mais profundos.",
};

export const ARQUETIPO_QUESTIONS = [
  { q: "Quando enfrenta um grande desafio, sua primeira reação é:", opts: [
    { t: "Partir para o ataque — superar é a única opção", w: "heroi" },
    { t: "Entender profundamente antes de agir", w: "sabio" },
    { t: "Questionar se as regras do jogo fazem sentido", w: "rebelde" },
    { t: "Pensar em quem pode ajudar e como proteger", w: "cuidador" }
  ]},
  { q: "O que mais te motiva?", opts: [
    { t: "Superar limites e provar o que sou capaz", w: "heroi" },
    { t: "Descobrir verdades profundas", w: "sabio" },
    { t: "Transformar o que está errado no mundo", w: "rebelde" },
    { t: "Fazer a diferença na vida de quem amo", w: "cuidador" }
  ]},
  { q: "Como você é visto(a) pelos outros?", opts: [
    { t: "Forte, determinado(a) e corajoso(a)", w: "heroi" },
    { t: "Inteligente, pensativo(a) e confiável", w: "sabio" },
    { t: "Intenso(a), original e desafiador(a)", w: "rebelde" },
    { t: "Generoso(a), protetor(a) e empático(a)", w: "cuidador" }
  ]},
  { q: "Sua maior conquista seria:", opts: [
    { t: "Alcançar algo que parecia impossível", w: "heroi" },
    { t: "Contribuir com conhecimento que mudou vidas", w: "sabio" },
    { t: "Mudar algo que estava errado há muito tempo", w: "rebelde" },
    { t: "Ser lembrado(a) pelo cuidado que dei", w: "cuidador" }
  ]},
  { q: "O que você não tolera?", opts: [
    { t: "Fraqueza e desistência fácil", w: "heroi" },
    { t: "Ignorância e falta de reflexão", w: "sabio" },
    { t: "Conformismo e obediência cega", w: "rebelde" },
    { t: "Indiferença ao sofrimento alheio", w: "cuidador" }
  ]},
  { q: "Em uma crise coletiva, você naturalmente:", opts: [
    { t: "Assume a liderança e enfrenta o problema", w: "heroi" },
    { t: "Analisa e propõe a melhor estratégia", w: "sabio" },
    { t: "Questiona as causas e quer mudar o sistema", w: "rebelde" },
    { t: "Cuida dos mais vulneráveis", w: "cuidador" }
  ]},
  { q: "Qual livro, filme ou história ressoa com você?", opts: [
    { t: "Histórias de superação e conquista heroica", w: "heroi" },
    { t: "Obras filosóficas ou de descoberta", w: "sabio" },
    { t: "Histórias de revoluções e rebeldes", w: "rebelde" },
    { t: "Histórias de amor, cuidado e sacrifício", w: "cuidador" }
  ]},
  { q: "Seu medo mais profundo:", opts: [
    { t: "Ser fraco(a) ou falhar no momento crucial", w: "heroi" },
    { t: "Ser enganado(a) ou perder clareza mental", w: "sabio" },
    { t: "Ser controlado(a) ou perder a autenticidade", w: "rebelde" },
    { t: "Ver quem amo sofrer sem poder ajudar", w: "cuidador" }
  ]},
  { q: "Sua sombra (lado que precisa trabalhar):", opts: [
    { t: "Arrogância e dificuldade de pedir ajuda", w: "heroi" },
    { t: "Frieza e distância das emoções", w: "sabio" },
    { t: "Destruição sem construção", w: "rebelde" },
    { t: "Perder a si mesmo(a) no cuidado dos outros", w: "cuidador" }
  ]},
  { q: "Em qual papel você se imagina num grupo:", opts: [
    { t: "Quem lidera e enfrenta os obstáculos", w: "heroi" },
    { t: "Quem guia com sabedoria e visão", w: "sabio" },
    { t: "Quem questiona e propõe o novo", w: "rebelde" },
    { t: "Quem garante que todos estão bem", w: "cuidador" }
  ]},
  { q: "Como você enxerga o sofrimento?", opts: [
    { t: "Como algo a superar e transformar em força", w: "heroi" },
    { t: "Como um professor que tem lições a dar", w: "sabio" },
    { t: "Como consequência de sistemas injustos a mudar", w: "rebelde" },
    { t: "Como algo a aliviar nos outros quando posso", w: "cuidador" }
  ]},
  { q: "Sua relação com as regras:", opts: [
    { t: "Sigo se fazem sentido para minha missão", w: "heroi" },
    { t: "Analiso antes de aceitar ou questionar", w: "sabio" },
    { t: "Questiono sempre — regras existem para ser testadas", w: "rebelde" },
    { t: "Sigo se protegem quem é mais vulnerável", w: "cuidador" }
  ]},
];

export const ARQUETIPO_INFO = {
  heroi: { nome: "O Herói", emoji: "⚔️", cor: "#EF4444",
    desc: "Você carrega a energia do Herói — aquele que enfrenta o impossível e transforma desafios em conquistas. Sua coragem e determinação são sua assinatura no mundo.",
    fortes: ["Coragem genuína em momentos de pressão", "Liderança natural em situações difíceis", "Resiliência e capacidade de superar", "Inspira outros a acreditar no possível"],
    atencao: ["Pode ter dificuldade de mostrar vulnerabilidade", "Tendência a carregar tudo sozinho(a)", "Sombra: arrogância e isolamento"],
    dicas: ["Heróis também precisam de aliados", "Vulnerabilidade é coragem — não fraqueza", "Cuide da sua saúde enquanto cuida do mundo", "Seu maior inimigo pode ser você mesmo(a)"]
  },
  sabio: { nome: "O Sábio", emoji: "🦉", cor: "#3B82F6",
    desc: "Você carrega a energia do Sábio — aquele que busca a verdade, compreende o que outros não veem e guia com conhecimento e clareza.",
    fortes: ["Clareza analítica extraordinária", "Capacidade de ver além do óbvio", "Confiabilidade como conselheiro(a)", "Aprendizagem contínua e profunda"],
    atencao: ["Pode racionalizar demais o que pede sentimento", "Tendência ao isolamento intelectual", "Sombra: frieza e arrogância intelectual"],
    dicas: ["Conhecimento sem ação é incompleto", "Deixe as emoções ter seu espaço", "Compartilhe — não acumule saber", "Sua mente é um presente — use-a para construir, não para julgar"]
  },
  rebelde: { nome: "O Rebelde", emoji: "⚡", cor: "#7C3AED",
    desc: "Você carrega a energia do Rebelde — aquele que questiona, transforma e não aceita o status quo. Sua presença é necessária onde há injustiça ou estagnação.",
    fortes: ["Coragem de ser diferente", "Visão crítica que poucos têm", "Energia transformadora", "Original e incapaz de ser genérico(a)"],
    atencao: ["Rebeldia sem direção pode destruir sem criar", "Pode alienar aliados desnecessariamente", "Sombra: niilismo e sabotagem"],
    dicas: ["Transformação precisa de estratégia, não só energia", "Escolha suas batalhas — nem tudo precisa ser questionado", "Construa enquanto transforma", "Seu radicalismo pode ser um dom — canalize-o com sabedoria"]
  },
  cuidador: { nome: "O Cuidador", emoji: "🌹", cor: "#EC4899",
    desc: "Você carrega a energia do Cuidador — aquele que protege, nutre e cria espaço para que outros floresçam. Seu amor é uma força que move o mundo.",
    fortes: ["Empatia profunda e genuína", "Capacidade de criar segurança emocional", "Generosidade que transforma vidas", "Presença que faz as pessoas se sentirem vistas"],
    atencao: ["Pode se perder no cuidado dos outros", "Dificuldade em cuidar de si mesmo(a)", "Sombra: controle disfarçado de cuidado"],
    dicas: ["Cuide de você para poder cuidar dos outros", "Limites são uma forma de amor", "Você não é responsável pela felicidade de todos", "Receber cuidado também é uma prática — aprenda"]
  },
};

// 7. INTELIGÊNCIA EMOCIONAL
export const IQ_EMOCIONAL_INTRO = {
  emoji: "❤️",
  nome: "Inteligência Emocional",
  criador: "Daniel Goleman",
  historia: "Em 1995, Daniel Goleman popularizou o conceito de Inteligência Emocional (QE) mostrando que ela pode ser mais determinante para o sucesso do que o QI. O QE envolve reconhecer, compreender e gerenciar emoções — nas próprias e nos outros.",
  comoFunciona: "12 perguntas sobre situações do dia a dia — no trabalho e na vida pessoal — medem seu nível de inteligência emocional em 4 dimensões.",
  comoInterpretar: "O resultado mostra seu padrão dominante: do Iniciante ao Mestre Emocional. Todas as dimensões são desenvolvíveis.",
};

export const IQ_EMOCIONAL_QUESTIONS = [
  { q: "Quando algo te irrita muito, você geralmente:", opts: [
    { t: "Reage imediatamente sem filtro", w: "iniciante" },
    { t: "Sente a raiva mas espera um pouco antes de agir", w: "desenvolvendo" },
    { t: "Percebe, nomeia e decide como vai responder", w: "avancado" },
    { t: "Processa rapidamente e mantém o foco na solução", w: "mestre" }
  ]},
  { q: "Você consegue identificar exatamente o que está sentindo?", opts: [
    { t: "Raramente — é tudo meio confuso", w: "iniciante" },
    { t: "Às vezes, para as emoções mais intensas", w: "desenvolvendo" },
    { t: "Sim, consigo dar nome à maioria das emoções", w: "avancado" },
    { t: "Sim, e entendo de onde vêm e o que significam", w: "mestre" }
  ]},
  { q: "Quando alguém do trabalho te faz mal, você:", opts: [
    { t: "Deixa afetar o dia e as relações ao redor", w: "iniciante" },
    { t: "Tenta ignorar, mas fica pensando nisso", w: "desenvolvendo" },
    { t: "Processa e decide uma forma saudável de lidar", w: "avancado" },
    { t: "Mantém o foco no que é importante e segue", w: "mestre" }
  ]},
  { q: "Quando alguém está passando por algo difícil, você:", opts: [
    { t: "Não sabe muito o que dizer ou fazer", w: "iniciante" },
    { t: "Sente o peso da situação mas fica desconfortável", w: "desenvolvendo" },
    { t: "Consegue oferecer presença e escuta genuínas", w: "avancado" },
    { t: "Percebe o que a pessoa precisa mesmo sem ela dizer", w: "mestre" }
  ]},
  { q: "Em momentos de frustração profissional, você:", opts: [
    { t: "Fica desmotivado(a) e se questiona", w: "iniciante" },
    { t: "Sente o impacto mas tenta superar", w: "desenvolvendo" },
    { t: "Usa como aprendizado e segue em frente", w: "avancado" },
    { t: "Mantém clareza de propósito mesmo em adversidade", w: "mestre" }
  ]},
  { q: "Quando recebe uma crítica, sua primeira reação é:", opts: [
    { t: "Defender-se ou sentir-se atacado(a)", w: "iniciante" },
    { t: "Sentir o impacto mas tentar escutar", w: "desenvolvendo" },
    { t: "Avaliar o que é válido e o que não é", w: "avancado" },
    { t: "Agradecer genuinamente — mesmo que doa", w: "mestre" }
  ]},
  { q: "Como você gerencia o estresse?", opts: [
    { t: "Não gerencia muito bem — sente e explode ou implode", w: "iniciante" },
    { t: "Tem algumas estratégias mas nem sempre funciona", w: "desenvolvendo" },
    { t: "Tem um repertório de ferramentas que usa conscientemente", w: "avancado" },
    { t: "Mantém equilíbrio mesmo sob alta pressão", w: "mestre" }
  ]},
  { q: "Você percebe o estado emocional das pessoas ao redor?", opts: [
    { t: "Não muito — foco no conteúdo, não nas emoções", w: "iniciante" },
    { t: "Percebo às vezes, especialmente nas mais óbvias", w: "desenvolvendo" },
    { t: "Sim, leio bem o ambiente e as pessoas", w: "avancado" },
    { t: "Percebo nuances sutis que outros não notam", w: "mestre" }
  ]},
  { q: "Quando toma uma decisão importante, a emoção:", opts: [
    { t: "Domina — sigo o impulso do momento", w: "iniciante" },
    { t: "Tenho dificuldade de equilibrar com a razão", w: "desenvolvendo" },
    { t: "Considero junto com a análise racional", w: "avancado" },
    { t: "É parte da inteligência — nem domina nem ignoro", w: "mestre" }
  ]},
  { q: "Você consegue se motivar mesmo sem recompensa imediata?", opts: [
    { t: "Tenho dificuldade — preciso de resultado rápido", w: "iniciante" },
    { t: "Consigo às vezes mas depende muito do contexto", w: "desenvolvendo" },
    { t: "Sim — tenho propósito que me sustenta", w: "avancado" },
    { t: "Sim — minha motivação vem de dentro, sempre", w: "mestre" }
  ]},
  { q: "Como você lida com conflitos interpessoais?", opts: [
    { t: "Evito ou reajo de forma que escalona", w: "iniciante" },
    { t: "Enfrento, mas às vezes saio pior", w: "desenvolvendo" },
    { t: "Abordo com cuidado, buscando entender os dois lados", w: "avancado" },
    { t: "Transformo conflitos em oportunidade de conexão real", w: "mestre" }
  ]},
  { q: "Quando erra algo importante, você:", opts: [
    { t: "Fica paralisado(a) pela autocrítica", w: "iniciante" },
    { t: "Sente muito mas tenta seguir em frente", w: "desenvolvendo" },
    { t: "Assume, aprende e age para corrigir", w: "avancado" },
    { t: "Usa o erro como bússola de crescimento genuíno", w: "mestre" }
  ]},
];

export const IQ_EMOCIONAL_INFO = {
  iniciante: { nome: "Em Desenvolvimento", emoji: "🌱", cor: "#F59E0B",
    desc: "Você ainda está construindo sua inteligência emocional — e reconhecer isso já é o primeiro passo. Emoções às vezes te controlam mais do que você as controla, mas isso é completamente transformável.",
    fortes: ["Honestidade emocional — sente de verdade", "Potencial enorme de crescimento", "Reconhecer o ponto de partida é coragem"],
    atencao: ["Emoções podem dominar decisões", "Relações podem sofrer com reações impulsivas", "Estresse pode ser difícil de gerenciar"],
    dicas: ["Nomeie suas emoções — isso já cria distância saudável", "Respire 10 segundos antes de reagir", "Terapia ou coaching emocional aceleram muito", "Leia sobre inteligência emocional — Daniel Goleman é ótimo ponto de partida"]
  },
  desenvolvendo: { nome: "Crescendo", emoji: "🌿", cor: "#10B981",
    desc: "Você está em boa trajetória. Tem autoconsciência emocional em desenvolvimento e, apesar de nem sempre conseguir regular suas emoções, está claramente evoluindo.",
    fortes: ["Autoconsciência crescente", "Boa intenção nas relações", "Capaz de refletir após conflitos", "Abertura para aprender"],
    atencao: ["Consistência ainda é desafio", "Situações de alta pressão podem te desestabilizar"],
    dicas: ["Pratique mindfulness — mesmo 5 minutos por dia fazem diferença", "Journaling emocional acelera o autoconhecimento", "Busque feedback das pessoas próximas", "Cada tropeço é dado de crescimento — celebre a consciência"]
  },
  avancado: { nome: "Avançado", emoji: "🎯", cor: "#3B82F6",
    desc: "Você tem um QE bem desenvolvido. Consegue identificar, regular e usar suas emoções a seu favor na maior parte do tempo. Suas relações e decisões refletem essa maturidade.",
    fortes: ["Alta autoconsciência emocional", "Regulação eficaz na maioria das situações", "Boa leitura de pessoas e ambientes", "Decisões equilibradas emoção-razão"],
    atencao: ["Situações extremas ainda podem desestabilizar", "Cuidado para não se tornar excessivamente racional"],
    dicas: ["Continue praticando — o topo ainda tem espaço", "Ensine outros — isso solidifica o próprio aprendizado", "Mantenha autocompaixão mesmo com alta performance", "Situações novas são laboratórios de crescimento"]
  },
  mestre: { nome: "Mestre Emocional", emoji: "💎", cor: "#7C3AED",
    desc: "Você tem um QE excepcional. Suas emoções são aliadas, não inimigas. Você as reconhece, regula e usa como inteligência — em você e nas relações ao redor.",
    fortes: ["Equilíbrio emoção-razão em alta pressão", "Empatia profunda e precisa", "Liderança emocional natural", "Transforma conflitos em conexão"],
    atencao: ["Cuidado com a expectativa de que todos têm o mesmo nível", "Alta sensibilidade pode ser exaustiva"],
    dicas: ["Você é referência — compartilhe esse caminho", "Continue se desafiando com situações novas", "Cuide da sua energia emocional — não é infinita", "Mentore pessoas que ainda estão em desenvolvimento"]
  },
};

// 8. SÍNDROME DO IMPOSTOR
export const IMPOSTOR_INTRO = {
  emoji: "🎭",
  nome: "Síndrome do Impostor",
  criador: "Pauline Clance & Suzanne Imes",
  historia: "O termo foi criado em 1978 pelas psicólogas Pauline Clance e Suzanne Imes após observar padrões em mulheres de alta performance que, apesar de competentes, sentiam-se fraudes. Hoje sabe-se que afeta 70% das pessoas em algum momento.",
  comoFunciona: "10 perguntas sobre como você percebe suas conquistas e capacidades revelam seu nível de síndrome do impostor.",
  comoInterpretar: "O resultado mostra onde você está no espectro — do 'Quase Nada' ao 'Intenso'. Todas as variações são comuns e transformáveis.",
};

export const IMPOSTOR_QUESTIONS = [
  { q: "Quando você conquista algo importante, sua primeira reação é:", opts: [
    { t: "Celebrar — sei que me esforcei para isso", w: "baixo" },
    { t: "Fico feliz mas um pouco surpreso(a)", w: "moderado" },
    { t: "Penso que foi sorte ou timing certo", w: "alto" },
    { t: "Fico com medo de que descubram que não mereço", w: "intenso" }
  ]},
  { q: "Quando alguém te elogia profissionalmente, você:", opts: [
    { t: "Aceito com gratidão — reconheço meu trabalho", w: "baixo" },
    { t: "Agradeço mas internamente questiono um pouco", w: "moderado" },
    { t: "Fico desconfortável — acho que é exagero", w: "alto" },
    { t: "Tenho certeza que logo vão perceber que me enganaram", w: "intenso" }
  ]},
  { q: "Antes de uma apresentação ou tarefa importante:", opts: [
    { t: "Me preparo e fico confiante", w: "baixo" },
    { t: "Me preparo mas ainda fico um pouco ansioso(a)", w: "moderado" },
    { t: "Tenho medo de decepcionar — preparo demais", w: "alto" },
    { t: "Tenho terror que descubram que não sei o suficiente", w: "intenso" }
  ]},
  { q: "Você atribui seu sucesso principalmente a:", opts: [
    { t: "Meu esforço, habilidade e preparo", w: "baixo" },
    { t: "Combinação de esforço e circunstâncias", w: "moderado" },
    { t: "Sorte e timing mais do que competência", w: "alto" },
    { t: "Uma farsa que vai se revelar em algum momento", w: "intenso" }
  ]},
  { q: "Comparado(a) a colegas de mesma área, você se sente:", opts: [
    { t: "Competente — sei o que sei e o que não sei", w: "baixo" },
    { t: "Às vezes atrás — às vezes comparável", w: "moderado" },
    { t: "Geralmente menos competente que pareço", w: "alto" },
    { t: "Como o(a) menos qualificado(a) do grupo", w: "intenso" }
  ]},
  { q: "Quando comete um erro no trabalho, você:", opts: [
    { t: "Assumo, corrijo e sigo em frente", w: "baixo" },
    { t: "Fico chateado(a) mas consigo superar", w: "moderado" },
    { t: "Fico ruminando — prova de que não sou bom(a) o suficiente", w: "alto" },
    { t: "Sinto que agora todos vão saber da fraude", w: "intenso" }
  ]},
  { q: "Quando assume uma nova responsabilidade:", opts: [
    { t: "Aceito com confiança — aprendo o que precisar", w: "baixo" },
    { t: "Aceito mas com alguma ansiedade", w: "moderado" },
    { t: "Aceito com muito medo de não dar conta", w: "alto" },
    { t: "Me pergunto se vão me 'expor' antes de aprender", w: "intenso" }
  ]},
  { q: "O sucesso de outras pessoas te faz sentir:", opts: [
    { t: "Inspirado(a) — o que eles podem, eu também posso", w: "baixo" },
    { t: "Feliz por eles, levemente consciente dos meus limites", w: "moderado" },
    { t: "Que sou menos do que parece — eles são 'de verdade'", w: "alto" },
    { t: "Que eventualmente vai ficar claro que estou fingindo", w: "intenso" }
  ]},
  { q: "Você evita oportunidades por medo de não estar pronto(a)?", opts: [
    { t: "Raramente — sei quando estou preparado(a) o suficiente", w: "baixo" },
    { t: "Às vezes espero mais do que o necessário", w: "moderado" },
    { t: "Frequentemente — nunca me sinto pronto(a)", w: "alto" },
    { t: "Evito oportunidades que poderiam me expor", w: "intenso" }
  ]},
  { q: "Alguém confia em você para um projeto importante. Você pensa:", opts: [
    { t: "Que bom — vou fazer o melhor trabalho possível", w: "baixo" },
    { t: "Espero que eu realmente consiga corresponder", w: "moderado" },
    { t: "Por que escolheram alguém como eu para isso?", w: "alto" },
    { t: "Logo vão descobrir que cometeram um erro comigo", w: "intenso" }
  ]},
];

export const IMPOSTOR_INFO = {
  baixo: { nome: "Autoconfiança Sólida", emoji: "🌟", cor: "#10B981",
    desc: "Você tem uma base de autoconfiança saudável e atribui suas conquistas ao que realmente são — fruto do seu esforço e capacidade. Isso é mais raro do que parece.",
    fortes: ["Autoconhecimento realista", "Capaz de aceitar sucesso sem culpa", "Resiliente a erros e críticas", "Modelo de saúde psicológica"],
    atencao: ["Certifique-se que é autoconfiança real — não defesa", "Continue cultivando humildade junto com a confiança"],
    dicas: ["Compartilhe sua postura com pessoas que lutam com isso", "Continue reconhecendo a diferença entre esforço e sorte", "Autoconfiança sólida atrai oportunidades — aproveite", "Mantenha o feedback externo como calibrador"]
  },
  moderado: { nome: "Síndrome Leve", emoji: "💛", cor: "#F59E0B",
    desc: "Você tem doses moderadas de síndrome do impostor — o que é completamente normal e comum. Na maioria das vezes reconhece seu valor, mas às vezes a dúvida bate.",
    fortes: ["Humildade saudável", "Busca constante de melhoria", "Consciência dos próprios limites", "Boa capacidade de aprendizado"],
    atencao: ["Não deixe a dúvida te impedir de oportunidades", "Diferencie autocrítica construtiva de autossabotagem"],
    dicas: ["Liste suas conquistas regularmente — cria evidência contra o impostor", "Fale com pessoas de confiança sobre suas inseguranças", "Aceite elogios — treine isso conscientemente", "Lembre: a maioria dos especialistas também sente isso"]
  },
  alto: { nome: "Síndrome Frequente", emoji: "🌀", cor: "#7C3AED",
    desc: "A síndrome do impostor é uma companheira frequente na sua vida. Você claramente tem competência — mas tem dificuldade de acreditar nisso. É possível e vale muito a pena trabalhar isso.",
    fortes: ["Preparo e dedicação acima da média", "Alta autocrítica que gera qualidade", "Sensibilidade que cria empatia"],
    atencao: ["Autossabotagem de oportunidades é real", "Overpreparation pode ser esgotante", "Relação com sucesso pode ser ambivalente"],
    dicas: ["Terapia cognitivo-comportamental é muito eficaz para isso", "Documente suas conquistas — crie um 'arquivo de evidências'", "Quando o impostor falar, pergunte: quais são as evidências reais?", "Leia 'A Síndrome do Impostor' — Pauline Rose Clance"]
  },
  intenso: { nome: "Síndrome Intensa", emoji: "🔥", cor: "#EF4444",
    desc: "A síndrome do impostor tem um impacto significativo na sua vida e nas suas decisões. Você provavelmente tem muito mais a oferecer do que acredita — e essa crença pode mudar com o suporte certo.",
    fortes: ["Dedicação extrema ao trabalho", "Empatia genuína com os erros dos outros", "Consciência aguçada das próprias lacunas"],
    atencao: ["Pode estar perdendo oportunidades por medo de exposição", "Burnout por overpreparation é real", "Relações profissionais podem ser afetadas"],
    dicas: ["Procure um psicólogo — isso tem tratamento muito eficaz", "Seu cérebro está mentindo para você — há evidências concretas do contrário", "Converse com alguém de confiança sobre como se sente", "Você não chegou onde chegou por acidente — isso é real"]
  },
};

// 9. ESTILO DE COMUNICAÇÃO
export const COMUNICACAO_INTRO = {
  emoji: "💬",
  nome: "Estilo de Comunicação",
  criador: "Andrew Salter & Joseph Wolpe",
  historia: "Os estilos de comunicação foram mapeados dentro da psicologia do comportamento assertivo. Assertividade, passividade e agressividade descrevem padrões que moldam todas as nossas interações — no trabalho, nos relacionamentos e na vida social.",
  comoFunciona: "Perguntas sobre situações reais do dia a dia revelam como você se comunica de forma dominante entre 3 estilos: Passivo, Assertivo e Agressivo.",
  comoInterpretar: "Não existe estilo 'ruim' — existe o que serve você e o que pode ser desenvolvido. O assertivo é o equilíbrio mais saudável.",
};

export const COMUNICACAO_QUESTIONS = [
  { q: "Quando alguém interrompe você enquanto fala:", opts: [
    { t: "Cedo e deixo a pessoa continuar", w: "passivo" },
    { t: "Com calma, digo que ainda não terminei", w: "assertivo" },
    { t: "Elevo a voz para não perder o espaço", w: "agressivo" }
  ]},
  { q: "Quando discorda da opinião de alguém em grupo:", opts: [
    { t: "Prefiro não falar — evito conflito", w: "passivo" },
    { t: "Expresso meu ponto com respeito e firmeza", w: "assertivo" },
    { t: "Digo o que acho sem muita preocupação com a reação", w: "agressivo" }
  ]},
  { q: "Quando precisa pedir um aumento ou melhoria:", opts: [
    { t: "Fico esperando o momento certo — que nunca vem", w: "passivo" },
    { t: "Marco uma reunião e apresento meus argumentos", w: "assertivo" },
    { t: "Deixo claro que não aceito menos", w: "agressivo" }
  ]},
  { q: "Quando alguém faz algo que te machuca:", opts: [
    { t: "Engulo o sapo — prefiro não criar problema", w: "passivo" },
    { t: "Digo como me senti, no momento certo", w: "assertivo" },
    { t: "Reajo na hora — não tolero esse tipo de coisa", w: "agressivo" }
  ]},
  { q: "Quando alguém te pede algo que não quer fazer:", opts: [
    { t: "Aceito mesmo contra a vontade", w: "passivo" },
    { t: "Digo não de forma gentil mas firme", w: "assertivo" },
    { t: "Digo não de forma bem direta e dura", w: "agressivo" }
  ]},
  { q: "Em reuniões ou grupos, você costuma:", opts: [
    { t: "Escutar mais do que falar", w: "passivo" },
    { t: "Participar ativamente e escutar os outros", w: "assertivo" },
    { t: "Dominar a conversa — suas ideias são mais importantes", w: "agressivo" }
  ]},
  { q: "Quando recebe uma crítica que acha injusta:", opts: [
    { t: "Aceito em silêncio mesmo discordando", w: "passivo" },
    { t: "Apresento minha perspectiva com calma", w: "assertivo" },
    { t: "Rebato na hora com intensidade", w: "agressivo" }
  ]},
  { q: "Sua principal preocupação ao se comunicar:", opts: [
    { t: "Não criar conflito nem desconforto", w: "passivo" },
    { t: "Ser claro(a), honesto(a) e respeitoso(a)", w: "assertivo" },
    { t: "Ser direto(a) e eficiente — sem rodeios", w: "agressivo" }
  ]},
  { q: "Quando você precisa dar um feedback difícil:", opts: [
    { t: "Enrolo muito — fico com medo de magoar", w: "passivo" },
    { t: "Dou de forma direta mas cuidadosa", w: "assertivo" },
    { t: "Dou sem filtro — a verdade precisa ser dita", w: "agressivo" }
  ]},
  { q: "As pessoas ao redor te descrevem como:", opts: [
    { t: "Gentil, fácil de lidar, às vezes indeciso(a)", w: "passivo" },
    { t: "Direto(a), respeitoso(a) e equilibrado(a)", w: "assertivo" },
    { t: "Intenso(a), direto(a) ao ponto — às vezes demais", w: "agressivo" }
  ]},
];

export const COMUNICACAO_INFO = {
  passivo: { nome: "Comunicação Passiva", emoji: "🌊", cor: "#3B82F6",
    desc: "Você prioriza a harmonia e o conforto dos outros, frequentemente à sua própria custa. Evita conflitos e tem dificuldade em expressar necessidades e limites.",
    fortes: ["Empatia e escuta genuínas", "Não cria conflitos desnecessários", "Percebido(a) como gentil e agradável", "Boa capacidade de adaptação"],
    atencao: ["Necessidades próprias ficam para trás", "Acúmulo interno pode gerar explosões ou ressentimento", "Pode ser manipulado(a) com mais facilidade"],
    dicas: ["Pratique dizer não em situações pequenas — crie o músculo", "Seus sentimentos e necessidades são tão válidos quanto os dos outros", "Assertividade não é agressividade — é respeito mútuo", "Terapia de assertividade pode transformar esse padrão"]
  },
  assertivo: { nome: "Comunicação Assertiva", emoji: "🎯", cor: "#10B981",
    desc: "Você comunica com equilíbrio — é direto(a) sem ser agressivo(a), e respeitoso(a) sem ser passivo(a). A comunicação assertiva é a mais saudável e eficaz.",
    fortes: ["Clareza sem agressividade", "Capaz de dizer não sem culpa", "Relações baseadas em respeito mútuo", "Resolve conflitos de forma construtiva"],
    atencao: ["Situações de alta pressão podem desestabilizar", "Certifique-se que assertividade não vira rigidez"],
    dicas: ["Continue praticando — em novas situações o padrão pode vacilar", "Ensine assertividade — isso consolida o próprio aprendizado", "Reconheça quando situações pedem mais suavidade", "Sua comunicação é um modelo a ser seguido"]
  },
  agressivo: { nome: "Comunicação Agressiva", emoji: "⚡", cor: "#EF4444",
    desc: "Você tende a se comunicar de forma direta e intensa — o que tem valor, mas pode ultrapassar limites sem perceber. Sua presença é forte, mas às vezes intimidadora.",
    fortes: ["Clareza absoluta nas mensagens", "Não carrega problemas acumulados", "Coragem de falar o que pensa", "Presença marcante que lidera"],
    atencao: ["Pode magoar pessoas sem intenção", "Relações podem sofrer com a intensidade", "Pode criar resistência onde queria cooperação"],
    dicas: ["Pausa de 3 segundos antes de responder em situações tensas", "Diferencie urgência real de impaciência", "O que você diz importa — como você diz também", "Assertividade inclui o cuidado com o receptor"]
  },
};

// 10. CULTURA POP BRASIL
export const CULTPOP_INTRO = {
  emoji: "🎭",
  nome: "Cultura Pop Brasil",
  criador: "KomparAI",
  historia: "Do BBB ao Carnaval, de Anitta ao Matuê, o Brasil cria sua própria cultura pop que mistura influências globais com identidade única. Qual é o seu nível de atualização com o que rola no país?",
  comoFunciona: "Perguntas sobre memes, artistas, programas, trends e momentos icônicos da cultura brasileira recente. Descubra se você é Fora da Bolha, Antenado ou Especialista em Pop BR.",
  comoInterpretar: "Não é sobre certo ou errado — é sobre quanto da energia cultural do país está no seu radar.",
};

export const CULTPOP_QUESTIONS = [
  { q: "Qual desses artistas é conhecido como 'Rei do Funk Carioca' contemporâneo?", opts: [
    { t: "MC Cabelinho", w: "certo" },
    { t: "Gusttavo Lima", w: "errado" },
    { t: "Luan Santana", w: "errado" },
    { t: "Zé Neto", w: "errado" }
  ]},
  { q: "O que é 'Brega-Funk'?", opts: [
    { t: "Gênero musical que mistura funk com brega pernambucano", w: "certo" },
    { t: "Estilo de dança nordestino", w: "errado" },
    { t: "Nome de um festival de música em Recife", w: "errado" },
    { t: "Movimento artístico visual dos anos 90", w: "errado" }
  ]},
  { q: "Qual frase viralizou como meme após o BBB?", opts: [
    { t: "'Tô com febre'", w: "certo" },
    { t: "'Tô com calor'", w: "errado" },
    { t: "'Tô cansado(a)'", w: "errado" },
    { t: "'Tô bem'", w: "errado" }
  ]},
  { q: "Anitta foi a primeira artista brasileira a:", opts: [
    { t: "Alcançar o número 1 do Spotify global", w: "certo" },
    { t: "Se apresentar no Grammy de Los Angeles", w: "errado" },
    { t: "Lançar música com BTS", w: "errado" },
    { t: "Vencer o Eurovision Song Contest", w: "errado" }
  ]},
  { q: "O que é 'fila do pão' no contexto das redes sociais brasileiras?", opts: [
    { t: "Meme de situações onde algo óbvio é discutido desnecessariamente", w: "certo" },
    { t: "Grupo de WhatsApp para notícias locais", w: "errado" },
    { t: "Trend de dança do TikTok", w: "errado" },
    { t: "Programa de culinária da Globo", w: "errado" }
  ]},
  { q: "Qual gênero musical o Matuê popularizou no Brasil?", opts: [
    { t: "Trap nacional com estética cyberpunk", w: "certo" },
    { t: "Pagode fusion com eletrônico", w: "errado" },
    { t: "Forró eletrônico urbano", w: "errado" },
    { t: "Funk ostentação paulistano", w: "errado" }
  ]},
  { q: "O que é 'lacrar' no contexto das redes sociais brasileiras?", opts: [
    { t: "Dizer algo impactante, poderoso ou que não tem resposta", w: "certo" },
    { t: "Publicar foto ou vídeo viral no TikTok", w: "errado" },
    { t: "Cancelar alguém nas redes sociais", w: "errado" },
    { t: "Fechar uma live com muitos seguidores", w: "errado" }
  ]},
  { q: "Quem ficou famoso(a) com o bordão 'tô nem aí'?", opts: [
    { t: "Luísa Sonza em polêmica de entrevista", w: "errado" },
    { t: "Viih Tube no BBB", w: "errado" },
    { t: "MC Cabelinho em funk viral", w: "errado" },
    { t: "Personagem do meme 'brasileira raiz'", w: "certo" }
  ]},
  { q: "O que é 'sigma' no contexto dos memes brasileiros?", opts: [
    { t: "Arquétipo masculino de autossuficiência e frieza emocional", w: "certo" },
    { t: "Nome de app de relacionamentos", w: "errado" },
    { t: "Tipo de filtro do Instagram", w: "errado" },
    { t: "Personagem de série brasileira da Netflix", w: "errado" }
  ]},
  { q: "O Carnaval de qual cidade é patrimônio imaterial da humanidade pela UNESCO?", opts: [
    { t: "Rio de Janeiro", w: "errado" },
    { t: "Salvador", w: "errado" },
    { t: "Recife e Olinda", w: "certo" },
    { t: "São Paulo", w: "errado" }
  ]},
];

// Para Cultura Pop, usamos tipo "cultpop" (contagem de certos/errados)
export const CULTPOP_INFO = {
  expert: { nome: "Especialista em Pop BR", emoji: "🏆", cor: "#10B981",
    desc: "Você está completamente antenado(a) com a cultura pop brasileira. Do funk ao meme, dos artistas às gírias — você tem o Brasil no seu radar.",
    fortes: ["Referência cultural para o seu círculo", "Entende os códigos do momento", "Conectado(a) com a identidade cultural do país"],
    atencao: ["Cuidado para não se limitar só ao mainstream", "A cultura pop muda rápido — continue atualizado(a)"],
    dicas: ["Explore as culturas regionais além do eixo Rio-SP", "Compartilhe seus conhecimentos — vira conversa incrível", "Está preparado(a) para qualquer quiz cultural"]
  },
  antenado: { nome: "Antenado(a)", emoji: "📡", cor: "#F59E0B",
    desc: "Você acompanha bem a cultura pop brasileira — sabe o suficiente para participar das conversas e entender as referências. Tem algumas lacunas, mas o radar está ligado.",
    fortes: ["Boa base de referências culturais", "Participa das conversas culturais com propriedade", "Sabe o que está rolando no país"],
    atencao: ["Alguns nichos ainda são pontos cegos"],
    dicas: ["Explore mais os artistas e movimentos regionais", "Siga alguns criadores de conteúdo cultural", "Você está mais por dentro do que pensa"]
  },
  fora_bolha: { nome: "Fora da Bolha", emoji: "🫧", cor: "#3B82F6",
    desc: "A cultura pop brasileira não é seu forte — e tudo bem. Você provavelmente tem outros interesses profundos. Mas quando quiser entrar nessa, o país tem muito a oferecer.",
    fortes: ["Provavelmente tem culturas de nicho que você domina", "Visão menos influenciada pelo mainstream"],
    atencao: ["Pode perder referências importantes das conversas cotidianas"],
    dicas: ["Abra um Spotify e explore os mais tocados do Brasil", "Assista ao BBB por um mês — é um estudo cultural", "Siga memes brasileiros — você aprende muito sobre o país"]
  },
};

// Quizzes astrais para QUIZ_BANKS (#35 e #37)

// Quiz inline #33: Adivinhe o signo
export const FILOSOFO_QUESTIONS = [
  {q:"Quando você não sabe algo, você:",opts:[{t:"Faz perguntas até entender de verdade",w:"socrates"},{t:"Cria seu próprio ponto de vista sobre isso",w:"nietzsche"},{t:"Aceita a incerteza com serenidade",w:"buda"},{t:"Observa como as coisas fluem naturalmente",w:"laotse"}]},
  {q:"O que te move na vida?",opts:[{t:"Buscar a verdade, mesmo que doa",w:"socrates"},{t:"Superar meus limites e me tornar quem posso ser",w:"nietzsche"},{t:"Reduzir o sofrimento meu e dos outros",w:"buda"},{t:"Viver em harmonia com o que é",w:"laotse"}]},
  {q:"Diante de uma injustiça, você:",opts:[{t:"Questiona publicamente, mesmo com risco",w:"socrates"},{t:"Age com toda sua força para mudar",w:"nietzsche"},{t:"Pratica compaixão pelos envolvidos",w:"buda"},{t:"Confia que o equilíbrio se restaura",w:"laotse"}]},
  {q:"Sua relação com o poder é:",opts:[{t:"Desconfio dele — prefiro questionar a obedecer",w:"socrates"},{t:"O poder é para ser conquistado e exercido",w:"nietzsche"},{t:"Poder gera apego — prefiro a liberdade",w:"buda"},{t:"O poder real é não precisar de poder",w:"laotse"}]},
  {q:"Você acredita que a felicidade é:",opts:[{t:"Consequência de viver com sabedoria e virtude",w:"socrates"},{t:"Superação contínua — a felicidade é o caminho, não o destino",w:"nietzsche"},{t:"Ausência de sofrimento e presença plena",w:"buda"},{t:"Não resistir ao fluxo da vida",w:"laotse"}]},
  {q:"Sua visão sobre a morte:",opts:[{t:"É a fronteira que dá sentido à vida bem vivida",w:"socrates"},{t:"Deve ser encarada com coragem — dá força ao presente",w:"nietzsche"},{t:"É uma transição — não algo a temer",w:"buda"},{t:"É parte natural do ciclo — como o outono",w:"laotse"}]},
  {q:"O que você pensa sobre as regras da sociedade?",opts:[{t:"Devem ser questionadas constantemente",w:"socrates"},{t:"São limitações que os fortes superam",w:"nietzsche"},{t:"São convenções — o despertar está além delas",w:"buda"},{t:"As melhores regras imitam a natureza",w:"laotse"}]},
  {q:"Como você enfrenta a dor?",opts:[{t:"Analiso sua origem e aprendo com ela",w:"socrates"},{t:"A uso como combustível para crescer",w:"nietzsche"},{t:"Observo sem me identificar com ela",w:"buda"},{t:"Deixo que passe como passa a chuva",w:"laotse"}]},
  {q:"O que significa ser livre para você?",opts:[{t:"Pensar por conta própria e questionar tudo",w:"socrates"},{t:"Criar a si mesmo sem seguir rebanho",w:"nietzsche"},{t:"Libertar-se dos desejos que aprisionam",w:"buda"},{t:"Agir sem esforço, fluindo com o universo",w:"laotse"}]},
  {q:"Sua forma favorita de aprender:",opts:[{t:"Diálogo e questionamento com outras pessoas",w:"socrates"},{t:"Experiência intensa e superação de limites",w:"nietzsche"},{t:"Meditação, silêncio e observação interna",w:"buda"},{t:"Observar a natureza e os padrões do mundo",w:"laotse"}]},
];
export const FILOSOFO_INFO = {
  socrates:{nome:"Sócrates",emoji:"🏛️",cor:"#1E40AF",desc:"Você é um questionador nato. Não aceita respostas fáceis e acredita que a sabedoria começa reconhecendo o que não se sabe. Vive para o diálogo honesto e a busca da verdade — mesmo quando ela incomoda.",fortes:["Pensamento crítico aguçado","Honestidade intelectual","Capacidade de questionar o óbvio","Abertura para mudar de ideia"],atencao:["Pode parecer confrontador","Tende a analisar demais"],dicas:["Use perguntas para liderar, não para vencer","O silêncio também é sabedoria"]},
  nietzsche:{nome:"Nietzsche",emoji:"⚡",cor:"#7C3AED",desc:"Você é movido pela vontade de superar limites e criar a si mesmo. Não aceita verdades prontas — quer forjar as suas. Tem coragem para romper com o que não ressoa e recomeçar do zero.",fortes:["Força de vontade e coragem","Originalidade e autenticidade","Disposição para romper padrões","Visão de longo prazo"],atencao:["Pode ser solitário","Tendência ao perfeccionismo"],dicas:["Equilibre a superação com aceitação","Construa pontes, não apenas monumentos"]},
  buda:{nome:"Buda",emoji:"☸️",cor:"#10B981",desc:"Você busca a paz interna e a presença plena. Enxerga o sofrimento como parte da vida e encontra liberdade no desapego. Tem profunda empatia e vive em busca do equilíbrio entre o mundo interno e externo.",fortes:["Empatia e compaixão profundas","Capacidade de presença","Equilíbrio emocional","Sabedoria sobre o sofrimento"],atencao:["Pode parecer distante","Dificuldade com conflitos diretos"],dicas:["A compaixão começa por você mesmo","A presença é o presente mais raro"]},
  laotse:{nome:"Lao-Tsé",emoji:"☯️",cor:"#6B7280",desc:"Você flui. Acredita que o melhor caminho muitas vezes é o de menor resistência. Tem sabedoria intuitiva, harmonia com o ambiente e uma presença tranquilizadora que os outros sentem sem entender.",fortes:["Harmonia e adaptabilidade","Sabedoria intuitiva","Presença tranquilizadora","Visão sistêmica e holística"],atencao:["Pode ser passivo em demasia","Dificuldade de agir em crises"],dicas:["Wu wei não é omissão — é ação no tempo certo","Seu silêncio tem peso"]},
};

// T2: Visão de mundo
export const VISAOMUNDO_QUESTIONS = [
  {q:"O que existe fundamentalmente?",opts:[{t:"Matéria, energia e leis físicas — só isso",w:"materialista"},{t:"Consciência — tudo o mais é manifestação dela",w:"espiritualista"},{t:"Não sei, e tenho paz com isso",w:"agnostico"},{t:"O que funciona e resolve problemas concretos",w:"pragmatico"}]},
  {q:"O que acontece depois da morte?",opts:[{t:"Nada — o corpo se desfaz e acaba",w:"materialista"},{t:"A consciência continua de alguma forma",w:"espiritualista"},{t:"Não tenho como saber — e está tudo bem",w:"agnostico"},{t:"Importa mais como vivemos do que o que vem depois",w:"pragmatico"}]},
  {q:"De onde vêm os valores morais?",opts:[{t:"Da evolução e da cultura humana",w:"materialista"},{t:"De uma dimensão superior à nossa",w:"espiritualista"},{t:"Não tenho certeza — cada tradição tem algo válido",w:"agnostico"},{t:"Do que produz mais bem-estar para todos",w:"pragmatico"}]},
  {q:"Você acredita em propósito universal?",opts:[{t:"Não — somos acaso num universo indiferente",w:"materialista"},{t:"Sim — existe um plano maior que não entendemos",w:"espiritualista"},{t:"Talvez — a questão permanece aberta",w:"agnostico"},{t:"Criamos nosso propósito através das nossas ações",w:"pragmatico"}]},
  {q:"O que guia suas decisões?",opts:[{t:"Lógica, dados e evidências",w:"materialista"},{t:"Intuição, espiritualidade e propósito maior",w:"espiritualista"},{t:"Uma mistura — depende do contexto",w:"agnostico"},{t:"O que funciona melhor na prática",w:"pragmatico"}]},
  {q:"Sua relação com a ciência:",opts:[{t:"É o melhor caminho para entender a realidade",w:"materialista"},{t:"Explica o como, mas não o porquê profundo",w:"espiritualista"},{t:"É uma ferramenta valiosa, entre outras",w:"agnostico"},{t:"Vale pela sua utilidade para resolver problemas",w:"pragmatico"}]},
  {q:"O que você pensa sobre milagres?",opts:[{t:"São coincidências mal interpretadas",w:"materialista"},{t:"São manifestações do espiritual no físico",w:"espiritualista"},{t:"Não sei — mantenho a mente aberta",w:"agnostico"},{t:"O que importa é o efeito que produzem nas pessoas",w:"pragmatico"}]},
  {q:"Para você, a realidade é:",opts:[{t:"Objetiva — existe independente de quem observa",w:"materialista"},{t:"Co-criada pela consciência que a percebe",w:"espiritualista"},{t:"Mais complexa do que qualquer modelo captura",w:"agnostico"},{t:"O conjunto das experiências e problemas concretos",w:"pragmatico"}]},
  {q:"Quando tudo dá errado, o que te sustenta?",opts:[{t:"Racional: 'isso vai passar, o que posso fazer?'",w:"pragmatico"},{t:"Estoicismo: aceito o que não posso controlar",w:"materialista"},{t:"Fé: existe algo maior cuidando",w:"espiritualista"},{t:"Incerteza: não sei, mas vivo um dia de cada vez",w:"agnostico"}]},
  {q:"O universo tem consciência?",opts:[{t:"Não — é um sistema físico-químico sem intenção",w:"materialista"},{t:"Sim — a consciência é a natureza do universo",w:"espiritualista"},{t:"Impossível saber — é uma das grandes questões abertas",w:"agnostico"},{t:"Questão fascinante, mas o foco é o que fazemos com isso",w:"pragmatico"}]},
];
export const VISAOMUNDO_INFO = {
  materialista:{nome:"Materialista",emoji:"⚗️",cor:"#3B82F6",desc:"Você ancora sua visão de mundo na ciência e na razão. Acredita que a realidade é física, observável e compreensível — e que isso não diminui a maravilha de existir. Tem clareza, objetividade e um compromisso profundo com a verdade verificável.",fortes:["Clareza e objetividade","Pensamento baseado em evidências","Capacidade analítica","Honestidade intelectual"],atencao:["Pode subestimar o que não é mensurável","Rigidez diante do mistério"],dicas:["A ciência está sempre evoluindo — mantenha humildade","O mistério não contradiz a razão"]},
  espiritualista:{nome:"Espiritualista",emoji:"✨",cor:"#8B5CF6",desc:"Você sente que há mais no universo do que os sentidos captam. Acredita numa dimensão além do físico e busca conexão com ela. Sua visão de mundo é rica em significado, símbolo e presença.",fortes:["Profundidade e sentido","Intuição e percepção sutil","Conexão emocional e empática","Capacidade de transcendência"],atencao:["Pode perder o contato com o prático","Dificuldade com ceticismo alheio"],dicas:["Ancoragem prática fortalece a espiritualidade","Diálogo com quem pensa diferente amplia a visão"]},
  agnostico:{nome:"Agnóstico",emoji:"🌊",cor:"#6B7280",desc:"Você abraça a incerteza como uma posição intelectualmente honesta. Não fecha a questão onde ela permanece aberta — e encontra liberdade nisso. Tem abertura genuína e respeita perspectivas muito diferentes.",fortes:["Abertura e humildade intelectual","Tolerância e respeito à diversidade","Conforto com ambiguidade","Curiosidade sem dogma"],atencao:["Pode se tornar indeciso","Falta de âncora em momentos difíceis"],dicas:["Incerteza não é fraqueza — é honestidade","Escolha valores mesmo sem certezas absolutas"]},
  pragmatico:{nome:"Pragmático",emoji:"🔧",cor:"#F59E0B",desc:"Para você, o que importa é o que funciona. Sua filosofia é orientada pelos resultados reais e pelo impacto concreto no mundo. Tem senso prático extraordinário e capacidade de resolver problemas que outros só descrevem.",fortes:["Foco em resultados e impacto","Adaptabilidade e flexibilidade","Eficácia na resolução de problemas","Visão clara de causa e efeito"],atencao:["Pode ignorar dimensões imateriais da vida","Tendência ao utilitarismo extremo"],dicas:["O que 'funciona' inclui o que nos dá sentido","Às vezes o inútil é o mais necessário"]},
};

// T3: Espiritualidade vs Religiosidade
export const ESPVREL_QUESTIONS = [
  {q:"Você se sente mais à vontade em:",opts:[{t:"Um templo/igreja com rituais e comunidade",w:"devoto"},{t:"Uma floresta ou lugar de silêncio na natureza",w:"espiritual"},{t:"Uma boa conversa filosófica sobre o sentido da vida",w:"mistico"},{t:"Em nenhum desses — prefiro viver sem rótulos",w:"secular"}]},
  {q:"Sua prática espiritual inclui:",opts:[{t:"Oração, culto e rituais de uma tradição",w:"devoto"},{t:"Meditação, respiração e conexão interior",w:"espiritual"},{t:"Estudo de filosofias, simbolismos e mistérios",w:"mistico"},{t:"Nenhuma prática formal — a vida em si é suficiente",w:"secular"}]},
  {q:"Você acredita em:",opts:[{t:"Um Deus ou força superior com quem se pode ter relação",w:"devoto"},{t:"Uma energia ou consciência universal presente em tudo",w:"espiritual"},{t:"Camadas de realidade que a razão comum não alcança",w:"mistico"},{t:"O que pode ser observado e experienciado diretamente",w:"secular"}]},
  {q:"A morte te leva a pensar em:",opts:[{t:"A vida eterna prometida pela tradição que sigo",w:"devoto"},{t:"O retorno ao grande todo do universo",w:"espiritual"},{t:"A jornada da alma por múltiplas dimensões",w:"mistico"},{t:"O legado que deixamos e como vivemos agora",w:"secular"}]},
  {q:"O que os textos sagrados representam para você?",opts:[{t:"Palavra revelada — fundamento da minha fé",w:"devoto"},{t:"Sabedoria humana sobre a experiência espiritual",w:"espiritual"},{t:"Mapas simbólicos para realidades profundas",w:"mistico"},{t:"Documentos históricos e filosóficos interessantes",w:"secular"}]},
  {q:"Sua comunidade espiritual:",opts:[{t:"É central — faço parte de uma congregação ativa",w:"devoto"},{t:"É pequena e íntima — pessoas que compartilham a jornada",w:"espiritual"},{t:"É dispersa — conectada por estudos e trocas profundas",w:"mistico"},{t:"É a família e amigos — o sagrado está nas relações",w:"secular"}]},
  {q:"O que te conecta ao transcendente?",opts:[{t:"A oração e os sacramentos da minha tradição",w:"devoto"},{t:"A natureza, a música, a respiração consciente",w:"espiritual"},{t:"O silêncio profundo, o sonho, o símbolo",w:"mistico"},{t:"A arte, o amor e os momentos de beleza extrema",w:"secular"}]},
  {q:"Você segue uma tradição específica?",opts:[{t:"Sim — e ela é o centro da minha vida espiritual",w:"devoto"},{t:"Me identifico com algumas, mas sem me limitar",w:"espiritual"},{t:"Estudo várias — cada uma tem um pedaço da verdade",w:"mistico"},{t:"Não — prefiro minha própria visão de mundo",w:"secular"}]},
  {q:"Rituais para você são:",opts:[{t:"Sagrados — conectam com o divino de forma real",w:"devoto"},{t:"Belas ferramentas de ancoragem e presença",w:"espiritual"},{t:"Linguagem simbólica que aponta para o invisível",w:"mistico"},{t:"Interessantes culturalmente, mas não me vinculam",w:"secular"}]},
  {q:"Como você descreveria sua espiritualidade?",opts:[{t:"Enraizada numa tradição com doutrina clara",w:"devoto"},{t:"Pessoal, fluida e em constante evolução",w:"espiritual"},{t:"Profunda, simbólica e à margem das correntes",w:"mistico"},{t:"Expressa no modo como trato as pessoas e vivo",w:"secular"}]},
];
export const ESPVREL_INFO = {
  devoto:{nome:"Devoto",emoji:"🕊️",cor:"#1E40AF",desc:"Sua espiritualidade tem raízes profundas numa tradição específica. A comunidade, os rituais e a doutrina são pilares reais da sua vida — não apenas hábitos, mas ancoragens genuínas de sentido e pertencimento.",fortes:["Ancoragem e estabilidade","Senso de comunidade","Disciplina espiritual","Clareza de valores"],atencao:["Pode ser inflexível com outras perspectivas","Risco de confundir regras com essência"],dicas:["Tradição é a forma — a essência está viva","Diálogo com outras tradições fortalece a própria fé"]},
  espiritual:{nome:"Espiritual",emoji:"🌿",cor:"#10B981",desc:"Você tem uma jornada interior rica e personalizada. Colhe de muitas tradições, confia na experiência direta e mantém a espiritualidade viva sem a rigidez de um sistema único.",fortes:["Abertura e adaptabilidade","Jornada interior autêntica","Conexão com o presente","Empatia espiritual"],atencao:["Pode faltar estrutura nos momentos difíceis","Risco de superficialidade ao tocar tudo pouco"],dicas:["Aprofunde alguma prática — profundidade cria raízes","Comunidade também é caminho espiritual"]},
  mistico:{nome:"Místico",emoji:"🔮",cor:"#7C3AED",desc:"Você explora as bordas do conhecimento humano. Não se contenta com respostas fáceis e sente que a realidade tem camadas que a maioria não percebe. Simbolismo, sonho e silêncio são sua linguagem.",fortes:["Profundidade e sagacidade","Capacidade de ver além do óbvio","Rica vida interior","Abertura ao mistério"],atencao:["Pode parecer hermético para outros","Dificuldade de comunicar o que percebe"],dicas:["O mistério precisa de âncora prática","Compartilhe — sua visão pode iluminar muitos"]},
  secular:{nome:"Secular",emoji:"🌍",cor:"#6B7280",desc:"Para você, o sagrado se manifesta nas relações, na arte e na vida vivida com presença e ética. Não precisa de rótulo espiritual para ter profundidade — sua busca de sentido é igualmente genuína.",fortes:["Autenticidade e integridade","Foco no concreto e humano","Ética vivida, não declarada","Liberdade de perspectiva"],atencao:["Pode carecer de estrutura em crises","Isolamento espiritual"],dicas:["Rituais próprios criam âncoras poderosas","O sagrado se encontra também na beleza ordinária"]},
};

// T4: Corrente filosófica
export const CORRENTE_QUESTIONS = [
  {q:"Como você lida com o que não pode controlar?",opts:[{t:"Aceito com equanimidade — só posso controlar minha resposta",w:"estoico"},{t:"Sinto o peso da existência — e escolho minha atitude diante dela",w:"existencialista"},{t:"Adapto minha abordagem ao que funciona nessa situação",w:"pragmatico"},{t:"Busco o bem maior para todos — inclusive a mim mesmo",w:"humanista"}]},
  {q:"De onde vêm o sentido e o propósito?",opts:[{t:"Da virtude e da razão — não das circunstâncias",w:"estoico"},{t:"Nós criamos o próprio sentido — não existe pronto",w:"existencialista"},{t:"Do que produz experiências ricas e resolução de problemas",w:"pragmatico"},{t:"Do desenvolvimento humano e das relações que construímos",w:"humanista"}]},
  {q:"Como você vê as emoções?",opts:[{t:"Podem ser reguladas pela razão — não me domino por elas",w:"estoico"},{t:"São autênticas e devem ser vividas plenamente",w:"existencialista"},{t:"São dados importantes, mas não o guia principal",w:"pragmatico"},{t:"São parte do que nos torna humanos — merecem atenção",w:"humanista"}]},
  {q:"O que define uma boa vida?",opts:[{t:"Viver de acordo com a natureza e a razão",w:"estoico"},{t:"Uma vida autêntica, escolhida livremente",w:"existencialista"},{t:"Uma vida que resolve problemas e gera satisfação",w:"pragmatico"},{t:"Uma vida de crescimento, conexão e contribuição",w:"humanista"}]},
  {q:"Sua visão sobre o destino:",opts:[{t:"Existe — mas posso escolher como reagir a ele",w:"estoico"},{t:"Não existe — somos condenados a ser livres",w:"existencialista"},{t:"É uma abstração — o que importa são os resultados",w:"pragmatico"},{t:"Podemos moldá-lo com escolhas e relações saudáveis",w:"humanista"}]},
  {q:"Diante de uma decisão difícil, você busca:",opts:[{t:"O que a razão e a virtude recomendam",w:"estoico"},{t:"O que é autêntico para quem quero ser",w:"existencialista"},{t:"O que produz o melhor resultado prático",w:"pragmatico"},{t:"O que respeita a dignidade de todos os envolvidos",w:"humanista"}]},
  {q:"Como você enfrenta o fracasso?",opts:[{t:"Analiso o que depende de mim e sigo em frente",w:"estoico"},{t:"Aceito como parte de existir e me redefino",w:"existencialista"},{t:"Aprendo o que funcionou e ajusto a estratégia",w:"pragmatico"},{t:"Busco apoio e recomeço com mais compreensão",w:"humanista"}]},
  {q:"O que você pensa sobre a felicidade?",opts:[{t:"É um estado de virtude — não depende do externo",w:"estoico"},{t:"É construída a cada escolha autêntica",w:"existencialista"},{t:"É a satisfação de resolver problemas e crescer",w:"pragmatico"},{t:"É florescer — realizar o potencial humano",w:"humanista"}]},
  {q:"Sua relação com regras e autoridade:",opts:[{t:"Sigo o que a razão e a lei natural sustentam",w:"estoico"},{t:"Questiono toda regra que não escolhi livremente",w:"existencialista"},{t:"Sigo o que funciona — adapto quando não funciona",w:"pragmatico"},{t:"Respeito regras que promovem a dignidade humana",w:"humanista"}]},
  {q:"O que você mais valoriza nas outras pessoas?",opts:[{t:"Autocontrole e integridade",w:"estoico"},{t:"Autenticidade e coragem de ser quem são",w:"existencialista"},{t:"Competência e pragmatismo",w:"pragmatico"},{t:"Bondade e compromisso com o crescimento",w:"humanista"}]},
];
export const CORRENTE_INFO = {
  estoico:{nome:"Estoico",emoji:"🏛️",cor:"#374151",desc:"Você vive pela razão e pela virtude. Marco Aurélio, Sêneca e Epicteto seriam seus companheiros. Aceita o que não pode mudar com equanimidade — e age com força sobre o que pode.",fortes:["Resiliência e equanimidade","Clareza sobre o que está sob seu controle","Integridade e disciplina","Presença nos desafios"],atencao:["Pode suprimir emoções legítimas","Risco de frieza nas relações"],dicas:["'Memento mori' — a consciência da finitude liberta","O estoicismo não é indiferença, é presença"]},
  existencialista:{nome:"Existencialista",emoji:"🌑",cor:"#1F2937",desc:"Sartre, Camus e Kierkegaard habitam sua filosofia. Você carrega a liberdade como peso e presente — e recusa qualquer rótulo que defina quem você deve ser antes de você mesmo escolher.",fortes:["Autenticidade radical","Liberdade e responsabilidade pessoal","Profundidade emocional","Criatividade e originalidade"],atencao:["Pode ser pesado demais no cotidiano","Tendência à angústia existencial"],dicas:["A náusea existencial é sinal de lucidez","Escolha com consciência — você cria a si mesmo"]},
  pragmatico:{nome:"Pragmático",emoji:"⚙️",cor:"#0369A1",desc:"William James e John Dewey te inspiram. Verdade não é abstrata — é o que funciona. Você avalia ideias pelo impacto concreto e tem talento raro para resolver o que outros só descrevem.",fortes:["Eficácia e orientação a resultados","Adaptabilidade","Pensamento claro e prático","Foco no que é acionável"],atencao:["Pode ignorar o valor do que não tem utilidade imediata","Risco de instrumentalizar pessoas"],dicas:["Às vezes o mais inútil é o mais necessário","Deixe espaço para o que não resolve — e apenas é"]},
  humanista:{nome:"Humanista",emoji:"🌺",cor:"#047857",desc:"Você acredita no potencial humano. Maslow, Rogers e Fromm ecoam em seu olhar. Sua filosofia é de florescimento — não sobrevivência — e você investe genuinamente nas relações e no crescimento.",fortes:["Empatia e cuidado genuíno","Fé no potencial das pessoas","Capacidade de criar vínculos","Orientação ao desenvolvimento"],atencao:["Pode ser demasiado otimista","Dificuldade com conflito e limites"],dicas:["O cuidado com o outro começa no autocuidado","Nem toda bondade é bem recebida — e está tudo bem"]},
};

// T5: Qual virtude é seu pilar
export const VIRTUDE_QUESTIONS = [
  {q:"O que você mais admira em alguém?",opts:[{t:"A coragem de agir mesmo com medo",w:"coragem"},{t:"A profundidade e clareza do pensamento",w:"sabedoria"},{t:"O compromisso com o que é certo, sempre",w:"justica"},{t:"A capacidade de se controlar e encontrar equilíbrio",w:"temperanca"}]},
  {q:"Em momentos de conflito, você tende a:",opts:[{t:"Enfrentar de frente, mesmo que desconfortável",w:"coragem"},{t:"Analisar todos os lados antes de agir",w:"sabedoria"},{t:"Defender o que é justo, independente do custo",w:"justica"},{t:"Buscar o equilíbrio e evitar excessos",w:"temperanca"}]},
  {q:"O que você considera seu maior recurso interno?",opts:[{t:"A determinação de ir em frente apesar do medo",w:"coragem"},{t:"A capacidade de enxergar o que outros não veem",w:"sabedoria"},{t:"O senso de certo e errado que nunca abandono",w:"justica"},{t:"O autocontrole que mantenho em qualquer situação",w:"temperanca"}]},
  {q:"Qual livro/história mais te marcou?",opts:[{t:"Uma história de superação contra todas as probabilidades",w:"coragem"},{t:"Uma obra que ampliou radicalmente minha forma de pensar",w:"sabedoria"},{t:"Uma história sobre luta por direitos e igualdade",w:"justica"},{t:"Uma narrativa sobre equilíbrio e encontrar a justa medida",w:"temperanca"}]},
  {q:"Quando erra, você:",opts:[{t:"Assume, enfrenta as consequências e segue em frente",w:"coragem"},{t:"Analisa o que falhou para não repetir",w:"sabedoria"},{t:"Pede desculpas e busca reparar o dano causado",w:"justica"},{t:"Trata-se com compaixão e busca o meio-termo",w:"temperanca"}]},
  {q:"O que te impede de ser quem quer ser?",opts:[{t:"O medo — que sei que posso vencer",w:"coragem"},{t:"A falta de clareza — ainda estou aprendendo",w:"sabedoria"},{t:"As injustiças do mundo que drena minha energia",w:"justica"},{t:"Meus próprios excessos e falta de equilíbrio",w:"temperanca"}]},
  {q:"Como as pessoas te descrevem?",opts:[{t:"Corajoso(a), determinado(a), disposto(a) a arriscar",w:"coragem"},{t:"Inteligente, perspicaz, cheio(a) de reflexão",w:"sabedoria"},{t:"Íntegro(a), confiável, com forte senso de certo/errado",w:"justica"},{t:"Equilibrado(a), calmo(a), sensato(a)",w:"temperanca"}]},
  {q:"O que te motiva a agir?",opts:[{t:"A crença de que o risco vale a pena",w:"coragem"},{t:"A busca por compreensão mais profunda",w:"sabedoria"},{t:"O desejo de um mundo mais justo e igualitário",w:"justica"},{t:"A busca do ponto de equilíbrio em tudo",w:"temperanca"}]},
  {q:"Qual herói mitológico te representa?",opts:[{t:"Aquiles — guerreiro que enfrenta o destino de frente",w:"coragem"},{t:"Atena — deusa da sabedoria e da estratégia",w:"sabedoria"},{t:"Astréia — deusa da justiça que nunca abandona os humanos",w:"justica"},{t:"Apolo — deus do equilíbrio, da medida e da harmonia",w:"temperanca"}]},
  {q:"Para você, uma vida bem vivida é:",opts:[{t:"Uma vida que não recuou dos desafios mais difíceis",w:"coragem"},{t:"Uma vida de aprendizado contínuo e compreensão",w:"sabedoria"},{t:"Uma vida justa — consigo, com os outros e com o mundo",w:"justica"},{t:"Uma vida equilibrada, sem excessos nem ausências",w:"temperanca"}]},
];
export const VIRTUDE_INFO = {
  coragem:{nome:"Coragem",emoji:"🔥",cor:"#DC2626",desc:"Sua virtude fundamental é a coragem — não a ausência de medo, mas a escolha de agir apesar dele. Você enfrenta desafios, assume riscos e vive com a disposição de se colocar na linha. Os outros sentem isso.",fortes:["Liderança natural em crises","Disposição para o risco necessário","Presença nos momentos difíceis","Capacidade de inspirar ação"],atencao:["Pode confundir coragem com imprudência","Tendência a subestimar riscos reais"],dicas:["Coragem sem prudência é temeridade","Às vezes a maior coragem é parar"]},
  sabedoria:{nome:"Sabedoria",emoji:"🦉",cor:"#1E40AF",desc:"Você busca compreender mais profundamente. Sua virtude cardinal é a sabedoria — a capacidade de ver além do óbvio, aprender continuamente e guiar as ações com discernimento. O conhecimento sem sabedoria é informação — você vai além.",fortes:["Discernimento e clareza","Visão de longo prazo","Capacidade de aprender com tudo","Orientação segura em situações complexas"],atencao:["Pode procrastinar por excesso de análise","Dificuldade de agir sem ter certeza"],dicas:["A sabedoria também sabe quando não saber","Ação imperfeita hoje supera perfeição amanhã"]},
  justica:{nome:"Justiça",emoji:"⚖️",cor:"#0369A1",desc:"Você não vira os olhos para o que é errado. Sua virtude central é a justiça — o compromisso profundo com o que é certo, independente do custo pessoal. Tem integridade que os outros sentem e que cria confiança genuína.",fortes:["Integridade e confiabilidade","Compromisso com o que é certo","Força moral em situações difíceis","Capacidade de defender o que é justo"],atencao:["Pode ser rígido(a) ou moralizante","Dificuldade de aceitar meias soluções"],dicas:["A justiça começa pela própria consciência","Imparcialidade não é neutralidade"]},
  temperanca:{nome:"Temperança",emoji:"🌊",cor:"#047857",desc:"Você encontra o equilíbrio onde outros encontram extremos. A temperança não é fraqueza — é a virtude mais difícil. Você sabe o que é suficiente, quando parar e como se regular em qualquer circunstância.",fortes:["Equilíbrio emocional e mental","Autocontrole em situações de pressão","Sabedoria sobre limites","Capacidade de durar mais do que os outros"],atencao:["Pode parecer sem entusiasmo","Tendência a se conter em demasia"],dicas:["Equilíbrio não é mediocridade — é maestria","Às vezes o excesso é o que uma situação pede"]},
};

// T6: Ikigai
export const IKIGAI_QUESTIONS = [
  {q:"O que você faria mesmo que ninguém pagasse?",opts:[{t:"Criar — escrever, fazer, inventar algo novo",w:"artesao"},{t:"Cuidar — apoiar, ouvir, ajudar pessoas",w:"missionario"},{t:"Explorar — aprender, descobrir, questionar",w:"explorador"},{t:"Construir — resolver problemas e entregar resultados",w:"profissional"}]},
  {q:"Quando o tempo voa sem você perceber, você está:",opts:[{t:"Criando algo com as mãos ou a mente",w:"artesao"},{t:"Ajudando alguém a atravessar algo difícil",w:"missionario"},{t:"Estudando, pesquisando ou viajando",w:"explorador"},{t:"Solucionando um problema complexo",w:"profissional"}]},
  {q:"O que o mundo mais precisa que você oferece?",opts:[{t:"Beleza, criatividade e novas perspectivas",w:"artesao"},{t:"Cuidado, presença e suporte humano genuíno",w:"missionario"},{t:"Ideias novas, conhecimento e questionamento",w:"explorador"},{t:"Competência, eficiência e entrega de resultados",w:"profissional"}]},
  {q:"Qual legado você quer deixar?",opts:[{t:"Obras que inspirem e emocionem",w:"artesao"},{t:"Pessoas que transformei de alguma forma",w:"missionario"},{t:"Descobertas que expandiram o conhecimento humano",w:"explorador"},{t:"Sistemas e soluções que continuam funcionando",w:"profissional"}]},
  {q:"O que você faz melhor que a maioria?",opts:[{t:"Criar coisas únicas e com alma",w:"artesao"},{t:"Conectar com pessoas e entender o que precisam",w:"missionario"},{t:"Sintetizar informações e ver padrões",w:"explorador"},{t:"Executar com qualidade e consistência",w:"profissional"}]},
  {q:"O que te tira da cama de manhã?",opts:[{t:"A vontade de criar algo que ainda não existe",w:"artesao"},{t:"A oportunidade de fazer diferença para alguém",w:"missionario"},{t:"A curiosidade sobre o que vou descobrir hoje",w:"explorador"},{t:"A satisfação de resolver um problema difícil",w:"profissional"}]},
  {q:"Em qual ambiente você mais floresce?",opts:[{t:"Ateliê, estúdio, espaço de criação",w:"artesao"},{t:"Comunidade, escola, clínica, espaço de cuidado",w:"missionario"},{t:"Laboratório, biblioteca, campo de pesquisa",w:"explorador"},{t:"Empresa, projeto, equipe com metas claras",w:"profissional"}]},
  {q:"O que você mais valoriza no trabalho?",opts:[{t:"Autonomia criativa e liberdade de expressão",w:"artesao"},{t:"Impacto real na vida das pessoas",w:"missionario"},{t:"Aprendizado contínuo e desafios intelectuais",w:"explorador"},{t:"Resultados mensuráveis e reconhecimento pela entrega",w:"profissional"}]},
  {q:"Como você prefere contribuir para um projeto?",opts:[{t:"Trazendo uma visão criativa e original",w:"artesao"},{t:"Sendo o ponto de apoio emocional e humano do time",w:"missionario"},{t:"Pesquisando, analisando e trazendo novas perspectivas",w:"explorador"},{t:"Liderando a execução e garantindo que funcione",w:"profissional"}]},
  {q:"O que faz você se sentir vivo(a)?",opts:[{t:"Ver algo que criei ganhar vida e emocionar",w:"artesao"},{t:"Ver alguém crescer por algo que você fez junto",w:"missionario"},{t:"Ter um insight que muda como você enxerga tudo",w:"explorador"},{t:"Concluir algo difícil com qualidade e no prazo",w:"profissional"}]},
];
export const IKIGAI_INFO = {
  artesao:{nome:"Artesão",emoji:"🎨",cor:"#DC2626",desc:"Seu ikigai vive na interseção entre o que você ama e no que é excepcional. Você cria com alma — cada obra é uma extensão de quem você é. O mundo precisa da sua originalidade. O desafio é encontrar como sustentá-la.",fortes:["Criatividade e originalidade únicas","Expressão autêntica","Habilidade de emocionar e inspirar","Maestria na sua área"],atencao:["Pode ter dificuldade com sustentabilidade financeira","Tende ao perfeccionismo paralisante"],dicas:["Sua arte é um presente — compartilhe sem medo","Negócio não diminui arte — pode amplificá-la"]},
  missionario:{nome:"Missionário",emoji:"🤝",cor:"#10B981",desc:"Seu ikigai está no cuidado genuíno. Você ama ajudar, é muito bom nisso e o mundo claramente precisa disso. Sua presença tem peso — as pessoas saem das interações com você diferentes de como entraram.",fortes:["Empatia e presença transformadora","Escuta profunda e apoio genuíno","Capacidade de criar vínculos","Impacto direto e visível"],atencao:["Tende ao esgotamento por cuidar demais","Dificuldade de colocar limites"],dicas:["Você não pode dar o que não tem — cuide-se primeiro","Seu bem-estar é parte da missão"]},
  explorador:{nome:"Explorador",emoji:"🔭",cor:"#7C3AED",desc:"Seu ikigai está nas fronteiras do conhecimento. Você ama aprender, é extraordinário em sintetizar e o mundo precisa de quem avance o que sabe. Sua curiosidade é um dom — e raramente se apaga.",fortes:["Curiosidade insaciável","Capacidade de síntese e conexão de ideias","Visão de longo prazo","Abertura para o novo"],atencao:["Pode começar muitas coisas e concluir poucas","Dificuldade de monetizar a exploração"],dicas:["A profundidade complementa a amplitude","Escolha uma área para ser definitivamente bom(a)"]},
  profissional:{nome:"Profissional",emoji:"⚡",cor:"#F59E0B",desc:"Seu ikigai está na excelência executada. Você entrega — e sabe o valor disso. É a combinação de competência com o que o mundo precisa que cria a base da sua realização. Resultados são sua linguagem de amor.",fortes:["Confiabilidade e consistência","Capacidade de execução sob pressão","Clareza de metas e entrega","Impacto tangível e mensurável"],atencao:["Pode negligenciar o que ama em prol do que sabe","Risco de esquecer o propósito maior"],dicas:["Excelência sem paixão esgota — conecte-se ao porquê","O mercado paga pela competência; você floresce com o sentido"]},
};

// Provérbios do dia
