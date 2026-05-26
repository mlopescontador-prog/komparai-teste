// ============================================================
// KOMPARAI — TESTE DE TRADIÇÃO ESPIRITUAL
// "Qual tradição combina com você?"
// ============================================================

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
