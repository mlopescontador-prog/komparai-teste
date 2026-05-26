// ============================================================
// KOMPARAI — FASE DA LUA
// Cálculo pela data real + significado espiritual
// ============================================================

// Algoritmo baseado em ciclos lunares (29.53 dias)
// Data de referência: Lua Nova em 06/01/2000 (Julian Day 2451549.5)
export const getFaseLua = (date = new Date()) => {
  const JD = Math.floor(date.getTime() / 86400000) + 2440587.5;
  const daysSinceNew = (JD - 2451549.5) % 29.53059;
  const age = daysSinceNew < 0 ? daysSinceNew + 29.53059 : daysSinceNew;
  const iluminacao = Math.round((1 - Math.cos(age / 29.53059 * 2 * Math.PI)) / 2 * 100);

  let fase, emoji, nomeEspiritual, desc, energia, ritual, afirmacao;

  if (age < 1.85) {
    fase = "Lua Nova"; emoji = "🌑";
    nomeEspiritual = "Lua do Começo";
    desc = "Momento de semear intenções. A escuridão precede toda luz nova.";
    energia = "Plantio e intenção";
    ritual = "Escreva 3 intenções para o próximo ciclo. O que você quer manifestar?";
    afirmacao = "Planto hoje as sementes do que colherei amanhã.";
  } else if (age < 7.38) {
    fase = "Lua Crescente"; emoji = "🌒";
    nomeEspiritual = "Lua do Movimento";
    desc = "Energia em expansão. Hora de agir sobre as intenções plantadas.";
    energia = "Ação e impulso";
    ritual = "Dê o primeiro passo concreto em direção ao que deseja.";
    afirmacao = "Minha energia cresce junto com a lua. Estou em movimento.";
  } else if (age < 9.22) {
    fase = "Quarto Crescente"; emoji = "🌓";
    nomeEspiritual = "Lua da Decisão";
    desc = "Ponto de virada. Decisões tomadas agora têm força especial.";
    energia = "Decisão e compromisso";
    ritual = "Tome aquela decisão que você está adiando. A lua apoia.";
    afirmacao = "Decido com clareza e comprometo-me com o que importa.";
  } else if (age < 14.77) {
    fase = "Lua Gibosa Crescente"; emoji = "🌔";
    nomeEspiritual = "Lua do Refinamento";
    desc = "Quase lá. Ajuste, aperfeiçoe e prepare-se para a plena manifestação.";
    energia = "Refinamento e foco";
    ritual = "Revise seus projetos. O que precisa de último ajuste antes da colheita?";
    afirmacao = "Aperfeiçoo com amor o que estou criando.";
  } else if (age < 16.61) {
    fase = "Lua Cheia"; emoji = "🌕";
    nomeEspiritual = "Lua da Manifestação";
    desc = "Pico de energia. Manifestação, gratidão e iluminação do que estava oculto.";
    energia = "Manifestação e gratidão máximas";
    ritual = "Liste 10 coisas pelas quais é grato(a). A energia da lua cheia amplifica tudo.";
    afirmacao = "Sou grato(a). Tudo que plantei está florescendo.";
  } else if (age < 22.15) {
    fase = "Lua Gibosa Minguante"; emoji = "🌖";
    nomeEspiritual = "Lua da Gratidão";
    desc = "Compartilhe o que recebeu. Gratidão e generosidade amplificam os dons.";
    energia = "Gratidão e partilha";
    ritual = "Faça algo generoso hoje — um elogio, um gesto, uma ajuda inesperada.";
    afirmacao = "Sou abundância. Quanto mais dou, mais recebo.";
  } else if (age < 24.00) {
    fase = "Quarto Minguante"; emoji = "🌗";
    nomeEspiritual = "Lua da Reflexão";
    desc = "Momento de reflexão profunda. O que aprendeu neste ciclo?";
    energia = "Reflexão e sabedoria";
    ritual = "Escreva 3 lições do último ciclo lunar. O que vai levar para o próximo?";
    afirmacao = "Cada ciclo me ensina. Cresci e estou pronto(a) para o próximo.";
  } else {
    fase = "Lua Minguante"; emoji = "🌘";
    nomeEspiritual = "Lua do Desapego";
    desc = "Hora de soltar. Libere o que não serve mais — emoções, hábitos, relações tóxicas.";
    energia = "Liberação e desapego";
    ritual = "Escreva o que quer soltar e queime o papel (ou amasse e jogue fora com intenção).";
    afirmacao = "Solto o que não me serve. Faço espaço para o novo.";
  }

  return {
    fase, emoji, nomeEspiritual, desc, energia, ritual, afirmacao,
    iluminacao,
    diaDoCliclo: Math.round(age),
    proximaLuaNova: Math.round(29.53 - age),
  };
};
