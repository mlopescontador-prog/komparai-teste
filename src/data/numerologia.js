export const reduceNumber = (n) => {
  while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
    n = String(n).split('').reduce((s, d) => s + parseInt(d), 0);
  }
  return n;
};

export const calcNumerologia = (day, month, year) => {
  if (!day || !month || !year) return null;
  const sumDay   = reduceNumber(day);
  const sumMonth = reduceNumber(month);
  const sumYear  = String(year).split('').reduce((s, d) => s + parseInt(d), 0);
  const total    = reduceNumber(reduceNumber(sumDay) + reduceNumber(sumMonth) + reduceNumber(sumYear));
  return total;
};

export const NUMEROS = {
  1: {
    numero: 1, emoji: "1️⃣", cor: "#EF4444",
    nome: "O Líder", arquetipo: "Pioneiro",
    essencia: "Você é um iniciador nato. Independência, originalidade e coragem de ser o primeiro são suas marcas registradas.",
    fortes: ["Iniciativa e coragem","Independência e autonomia","Criatividade original","Liderança natural","Determinação inabalável"],
    atencao: ["Pode ser teimoso(a)","Dificuldade em pedir ajuda","Tendência ao egocentrismo","Impaciência com outros"],
    proposito: "Liderar pelo exemplo. Abrir caminhos que outros ainda não ousaram trilhar.",
    famosos: ["Nikola Tesla","Martin Luther King","Steve Jobs"],
    afirmacao: "Sou pioneiro(a). Tenho a coragem de começar o que ainda não existe.",
  },
  2: {
    numero: 2, emoji: "2️⃣", cor: "#3B82F6",
    nome: "O Diplomata", arquetipo: "Mediador",
    essencia: "Você tem o dom da harmonia. Sensibilidade, cooperação e a capacidade de unir pessoas são seu superpoder.",
    fortes: ["Empatia profunda","Habilidade diplomática","Intuição aguçada","Paciência e cuidado","Parceria genuína"],
    atencao: ["Pode se perder nas necessidades dos outros","Dificuldade em dizer não","Sensibilidade excessiva","Indecisão em conflitos"],
    proposito: "Ser a ponte entre as pessoas. Criar harmonia onde há divisão.",
    famosos: ["Diana Spencer","Barack Obama","Bill Clinton"],
    afirmacao: "Sou harmonia. Minha sensibilidade conecta o que estava separado.",
  },
  3: {
    numero: 3, emoji: "3️⃣", cor: "#F59E0B",
    nome: "O Criador", arquetipo: "Artista",
    essencia: "Expressão, alegria e criatividade fluem em você. Você nasceu para comunicar, criar e iluminar.",
    fortes: ["Criatividade abundante","Comunicação magnética","Otimismo contagiante","Humor e leveza","Carisma natural"],
    atencao: ["Pode dispersar energia em muitos projetos","Tendência à superficialidade","Dificuldade com disciplina","Hipersensibilidade a críticas"],
    proposito: "Expressar a beleza do mundo. Inspirar através da arte e da palavra.",
    famosos: ["John Lennon","Celine Dion","Kylie Minogue"],
    afirmacao: "Sou expressão pura. Minha criatividade ilumina o mundo.",
  },
  4: {
    numero: 4, emoji: "4️⃣", cor: "#6366F1",
    nome: "O Construtor", arquetipo: "Arquiteto",
    essencia: "Você é a base sólida de tudo. Disciplina, confiabilidade e capacidade de construir o que dura são suas dádivas.",
    fortes: ["Organização impecável","Confiabilidade total","Paciência e persistência","Visão prática","Lealdade profunda"],
    atencao: ["Pode ser inflexível","Resistência a mudanças","Trabalho excessivo","Pode ignorar o prazer em busca da segurança"],
    proposito: "Construir alicerces duradouros. Dar forma e estrutura ao caos.",
    famosos: ["Oprah Winfrey","Elton John","Bill Gates"],
    afirmacao: "Sou alicerce. O que construo dura além de mim.",
  },
  5: {
    numero: 5, emoji: "5️⃣", cor: "#10B981",
    nome: "O Aventureiro", arquetipo: "Explorador",
    essencia: "Liberdade é seu elemento. Adaptabilidade, curiosidade e a sede por novas experiências movem sua vida.",
    fortes: ["Adaptabilidade extrema","Curiosidade insaciável","Comunicação versátil","Charme e magnetismo","Espírito livre"],
    atencao: ["Dificuldade com comprometimento","Impulsividade","Pode fugir das responsabilidades","Inquietação constante"],
    proposito: "Explorar e expandir. Mostrar ao mundo que há mais além do horizonte.",
    famosos: ["Mick Jagger","Vincent van Gogh","Abraham Lincoln"],
    afirmacao: "Sou liberdade. Minha curiosidade abre mundos novos.",
  },
  6: {
    numero: 6, emoji: "6️⃣", cor: "#EC4899",
    nome: "O Cuidador", arquetipo: "Guardião",
    essencia: "Amor, responsabilidade e cuidado definem sua essência. Você é o lar de todos ao seu redor.",
    fortes: ["Amor incondicional","Responsabilidade natural","Cuidado genuíno","Senso de justiça","Criação de ambientes seguros"],
    atencao: ["Pode se sobrecarregar cuidando de todos","Dificuldade em receber cuidado","Perfeccionismo familiar","Pode ser controlador(a) por amor"],
    proposito: "Nutrir e proteger. Ser o amor que transforma vidas.",
    famosos: ["Mother Teresa","John Lennon","Michael Jackson"],
    afirmacao: "Sou cuidado. Meu amor cria lar onde quer que eu esteja.",
  },
  7: {
    numero: 7, emoji: "7️⃣", cor: "#7C3AED",
    nome: "O Sábio", arquetipo: "Filósofo",
    essencia: "Você busca a verdade por baixo da superfície. Profundidade intelectual e espiritual são sua natureza.",
    fortes: ["Profundidade analítica","Intuição espiritual","Investigação minuciosa","Autoconhecimento profundo","Sabedoria natural"],
    atencao: ["Tendência ao isolamento","Pode parecer distante","Ceticismo excessivo","Dificuldade em confiar"],
    proposito: "Revelar verdades ocultas. Ser a luz que ilumina o que ninguém via.",
    famosos: ["Stephen Hawking","Leonardo da Vinci","Fyodor Dostoevsky"],
    afirmacao: "Sou sabedoria. Vejo o que está além do que os olhos alcançam.",
  },
  8: {
    numero: 8, emoji: "8️⃣", cor: "#D97706",
    nome: "O Realizador", arquetipo: "Magnata",
    essencia: "Poder, abundância e realização são sua linguagem. Você nasceu para manifestar resultados concretos.",
    fortes: ["Visão de negócios natural","Liderança executiva","Atração por abundância","Determinação inabalável","Capacidade de manifestação"],
    atencao: ["Pode priorizar poder sobre relações","Materialismo excessivo","Pode ser autoritário(a)","Dificuldade em demonstrar vulnerabilidade"],
    proposito: "Criar abundância. Transformar visão em resultado e partilhar o que constrói.",
    famosos: ["Nelson Mandela","Pablo Picasso","Elizabeth Taylor"],
    afirmacao: "Sou realização. O que imagino, manifesto.",
  },
  9: {
    numero: 9, emoji: "9️⃣", cor: "#059669",
    nome: "O Humanista", arquetipo: "Altruísta",
    essencia: "Você carrega a sabedoria de todos os números. Compaixão universal e serviço à humanidade são sua missão.",
    fortes: ["Compaixão profunda","Visão global e universal","Generosidade natural","Sabedoria acumulada","Missão de vida clara"],
    atencao: ["Pode se perder nos outros","Dificuldade em criar limites","Decepção quando não correspondido(a)","Pode carregar o mundo"],
    proposito: "Servir e elevar a humanidade. Ser farol de compaixão e sabedoria.",
    famosos:["Mahatma Gandhi","Mother Teresa","Bob Marley"],
    afirmacao: "Sou compaixão. Minha missão é mais do que eu — é a humanidade.",
  },
  11: {
    numero: 11, emoji: "✨", cor: "#8B5CF6",
    nome: "O Iluminado", arquetipo: "Visionário Mestre",
    essencia: "Número mestre. Você é canal entre o espiritual e o material. Intuição extraordinária e missão de inspirar.",
    fortes: ["Intuição elevadíssima","Sensibilidade espiritual","Inspiração que toca almas","Liderança carismática","Visão profética"],
    atencao: ["Hipersensibilidade pode paralisar","Alta expectativa de si mesmo","Tensão entre o ideal e o real","Ansiedade espiritual"],
    proposito: "Ser mensageiro(a) de luz. Inspirar pela própria existência.",
    famosos: ["Barack Obama","Michael Jordan","Madonna"],
    afirmacao: "Sou luz. Minha presença eleva tudo ao meu redor.",
  },
  22: {
    numero: 22, emoji: "🏗️", cor: "#DC2626",
    nome: "O Mestre Construtor", arquetipo: "Arquiteto da Realidade",
    essencia: "Número mestre mais poderoso. Você tem capacidade de construir legados que impactam a humanidade inteira.",
    fortes: ["Visão estratégica monumental","Capacidade de manifestação em larga escala","Liderança transformadora","Disciplina e sonho unidos","Legado duradouro"],
    atencao: ["Pressão enorme sobre si mesmo(a)","Pode paralisar pela grandiosidade","Dificuldade em delegar","Expectativa impossível"],
    proposito: "Construir o que muda a humanidade. Legado maior do que uma vida.",
    famosos:["Bill Gates","Dalai Lama","Plato"],
    afirmacao: "Sou legado. O que construo dura além do meu tempo.",
  },
  33: {
    numero: 33, emoji: "💫", cor: "#7C3AED",
    nome: "O Mestre Curador", arquetipo: "Cristo da Numerologia",
    essencia: "O número mestre mais raro. Amor incondicional, cura e serviço desinteressado são sua essência absoluta.",
    fortes: ["Amor universal profundo","Capacidade de cura","Compaixão sem limites","Inspiração espiritual","Serviço total"],
    atencao: ["Pode se sacrificar demais","Dificuldade em receber","Expectativa idealizada dos outros","Cansaço espiritual"],
    proposito: "Curar o mundo pelo amor. Ser o abraço que a humanidade precisa.",
    famosos: ["Mother Teresa","Francis of Assisi","Albert Einstein"],
    afirmacao: "Sou amor. Onde estou, há cura.",
  },
};

export const getNumerologia = (day, month, year) => {
  const num = calcNumerologia(day, month, year);
  return num ? NUMEROS[num] || null : null;
};

// Número pessoal do dia (ciclo anual)
export const getNumeroDoDia = (day, month, year, birthDay, birthMonth) => {
  if (!birthDay || !birthMonth) return null;
  // Número Universal do Ano
  const anoUniv = reduceNumber(String(year).split('').reduce((s,d)=>s+parseInt(d),0));
  // Número Pessoal do Ano = dia nasc + mês nasc + ano universal
  const numPessoalAno = reduceNumber(reduceNumber(birthDay) + reduceNumber(birthMonth) + anoUniv);
  // Número do dia = dia + mês atual + numPessoalAno
  const numDia = reduceNumber(reduceNumber(day) + reduceNumber(month) + numPessoalAno);
  return numDia;
};

// ============================================================
// DATA: humor.js
// ============================================================
// ============================================================
// KOMPARAI — HUMOR MATINAL EXPANDIDO
// Tom misto: acolhe primeiro, motiva depois
// Tamanho médio (4-5 linhas por seção)
// ============================================================

