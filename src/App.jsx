import { useState, useEffect } from "react";

// ============================================================
// 🇧🇷 KOMPARAI - Arquivo Único Consolidado (Tudo-em-Um)
// Todos os dados inline (sem imports externos da pasta /data)
// Apenas substitua este arquivo em /src/App.jsx no GitHub
// ============================================================

const famosos = [{"day": 1, "month": 1, "name": "J. D. Salinger", "born": 1919, "category": "Literatura", "country": "EUA", "emoji": "📚", "fact": "Autor de 'O Apanhador no Campo de Centeio', um dos livros mais influentes do século XX.", "curiosity": "O livro foi banido em várias escolas americanas e ainda assim vendeu 65 milhões de cópias.", "gender": "M", "temperamento": "melancolico", "height": 173, "weight": 68, "quote": "A profundidade vem do silêncio antes da palavra.", "popularity": 55}, {"day": 2, "month": 1, "name": "Isaac Asimov", "born": 1920, "category": "Ciência & Literatura", "country": "EUA", "emoji": "🚀", "fact": "Um dos maiores escritores de ficção científica de todos os tempos. Criou as 'Três Leis da Robótica'.", "curiosity": "Publicou mais de 500 livros ao longo da vida — uma obra a cada 2 semanas em média.", "gender": "M", "temperamento": "melancolico", "height": 178, "weight": 75, "quote": "Escreva todos os dias. Não espere a inspiração — ela chega depois.", "popularity": 74}, {"day": 3, "month": 1, "name": "Mel Gibson", "born": 1956, "category": "Cinema", "country": "Austrália", "emoji": "🎬", "fact": "Ator e diretor vencedor do Oscar por 'Coração Valente'.", "curiosity": "Apesar de ser símbolo australiano, nasceu em Nova York e se mudou para a Austrália aos 12 anos.", "gender": "M", "temperamento": "colerico", "height": 177, "weight": 78, "quote": "Faça acontecer. Ninguém vai fazer por você.", "popularity": 77}, {"day": 4, "month": 1, "name": "Isaac Newton", "born": 1643, "category": "Ciência", "country": "Reino Unido", "emoji": "🍎", "fact": "Um dos maiores cientistas de todos os tempos. Descobriu a lei da gravidade e inventou o cálculo.", "curiosity": "Nasceu prematuro e tão pequeno que cabia dentro de uma caneca. Ninguém esperava que sobrevivesse.", "gender": "M", "temperamento": "melancolico", "height": 167, "weight": 60, "quote": "Se vi mais longe, foi por estar sobre os ombros de gigantes.", "popularity": 76}, {"day": 5, "month": 1, "name": "Whindersson Nunes", "born": 1995, "category": "Humor & Entretenimento", "country": "Brasil", "emoji": "😂", "fact": "Um dos youtubers mais famosos do Brasil. Nascido em Grajaú, Maranhão.", "curiosity": "Chegou a ser o youtuber mais seguido da América Latina, com mais de 40 milhões de inscritos.", "gender": "M", "temperamento": "sanguineo", "height": 174, "weight": 65, "quote": "Eu nunca desisti porque alguém me disse que não daria certo.", "popularity": 97}, {"day": 6, "month": 1, "name": "Rowan Atkinson", "born": 1955, "category": "Humor & Cinema", "country": "Reino Unido", "emoji": "🤵", "fact": "O eterno Mr. Bean. Um dos comediantes mais famosos do mundo.", "curiosity": "Tem mestrado em Engenharia Elétrica em Oxford. Escolheu a comédia depois de formado.", "gender": "M", "temperamento": "sanguineo", "height": 178, "weight": 74, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 66}, {"day": 7, "month": 1, "name": "Nicolau Copérnico", "born": 1473, "category": "Ciência", "country": "Polônia", "emoji": "🌍", "fact": "O homem que provou que a Terra gira ao redor do Sol — e não o contrário.", "curiosity": "Teve medo de publicar sua teoria por décadas. Recebeu o livro impresso no dia de sua morte.", "gender": "M", "temperamento": "melancolico", "height": 168, "weight": 65, "quote": "Quem sente mais, vive mais.", "popularity": 59}, {"day": 8, "month": 1, "name": "Stephen Hawking", "born": 1942, "category": "Ciência", "country": "Reino Unido", "emoji": "🔭", "fact": "O físico mais famoso do século XX. Revolucionou o entendimento sobre buracos negros.", "curiosity": "Diagnosticado com ELA aos 21 anos, viveu até os 76. Os médicos davam 2 anos de vida.", "gender": "M", "temperamento": "melancolico", "height": 163, "weight": 50, "quote": "Por mais difícil que seja a vida, sempre há algo que você pode fazer.", "popularity": 100}, {"day": 9, "month": 1, "name": "Kate Middleton", "born": 1982, "category": "Realeza", "country": "Reino Unido", "emoji": "👑", "fact": "Princesa de Gales, futura rainha da Inglaterra.", "curiosity": "Foi colega de quarto de William na universidade. Eles namoraram em segredo por anos.", "gender": "F", "temperamento": "fleumatico", "height": 175, "weight": 57, "quote": "A maternidade é uma jornada incrível.", "popularity": 92}, {"day": 10, "month": 1, "name": "Chico Anysio", "born": 1931, "category": "Humor & TV", "country": "Brasil", "emoji": "😄", "fact": "Um dos maiores humoristas da história da televisão brasileira. Criou mais de 200 personagens.", "curiosity": "Nascido em Maranguape, Ceará. Começou como vendedor ambulante antes de virar estrela.", "gender": "M", "temperamento": "sanguineo", "height": 177, "weight": 70, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 48}, {"day": 11, "month": 1, "name": "Mary J. Blige", "born": 1971, "category": "Música", "country": "EUA", "emoji": "🎵", "fact": "Vencedora de 9 Grammys. Uma das cantoras de R&B mais influentes de todos os tempos.", "curiosity": "Gravou sua primeira demo numa cabine de karaokê num shopping. O produtor ouviu e quis conhecê-la.", "gender": "F", "temperamento": "sanguineo", "height": 169, "weight": 55, "quote": "A felicidade é um caminho — não um destino.", "popularity": 40}, {"day": 12, "month": 1, "name": "Jeff Bezos", "born": 1964, "category": "Tecnologia", "country": "EUA", "emoji": "📦", "fact": "Fundador da Amazon, uma das maiores empresas do planeta.", "curiosity": "Começou a Amazon em 1994 na garagem de casa. O primeiro produto vendido foi um livro usado.", "gender": "M", "temperamento": "colerico", "height": 170, "weight": 75, "quote": "A vida é muito curta para perder tempo com pessoas que não te valorizam.", "popularity": 96}, {"day": 13, "month": 1, "name": "Orlando Bloom", "born": 1977, "category": "Cinema", "country": "Reino Unido", "emoji": "🧝", "fact": "Famoso pelos papéis de Legolas em 'O Senhor dos Anéis' e Will Turner em 'Piratas do Caribe'.", "curiosity": "Sofreu uma queda de 3 andares aos 21 anos e os médicos acharam que ficaria paralítico. Se recuperou completamente.", "gender": "M", "temperamento": "sanguineo", "height": 179, "weight": 74, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 56}, {"day": 14, "month": 1, "name": "LL Cool J", "born": 1968, "category": "Música", "country": "EUA", "emoji": "🎤", "fact": "Pioneiro do hip-hop. Uma das maiores influências do rap americano.", "curiosity": "Lançou seu primeiro álbum aos 16 anos. LL Cool J significa 'Ladies Love Cool James'.", "gender": "M", "temperamento": "colerico", "height": 172, "weight": 84, "quote": "O impossível leva um pouco mais de tempo.", "popularity": 71}, {"day": 15, "month": 1, "name": "Martin Luther King Jr", "born": 1929, "category": "Direitos Humanos", "country": "EUA", "emoji": "✊", "fact": "O maior líder do movimento pelos direitos civis nos EUA. Ganhador do Nobel da Paz.", "curiosity": "Seu discurso 'I Have a Dream' foi improvisado em grande parte. Ele se desviou do roteiro na hora.", "gender": "M", "temperamento": "colerico", "height": 173, "weight": 77, "quote": "Eu tenho um sonho.", "popularity": 41}, {"day": 16, "month": 1, "name": "Ronaldo Gaúcho", "born": 1972, "category": "Esporte", "country": "Brasil", "emoji": "⚽", "fact": "Ídolo do Grêmio e da Seleção Brasileira. Um dos maiores jogadores da história do futebol gaúcho.", "curiosity": "Campeão da Copa do Mundo de 1994 com a Seleção Brasileira.", "gender": "M", "temperamento": "colerico", "height": 187, "weight": 70, "quote": "A vida não recompensa quem hesita.", "popularity": 44}, {"day": 17, "month": 1, "name": "Muhammad Ali", "born": 1942, "category": "Esporte", "country": "EUA", "emoji": "🥊", "fact": "Considerado o maior boxeador de todos os tempos. Tricampeão mundial dos pesos pesados.", "curiosity": "Seu nome de nascimento era Cassius Clay. Mudou para Muhammad Ali ao se converter ao Islã.", "gender": "M", "temperamento": "colerico", "height": 191, "weight": 107, "quote": "Impossível é apenas uma palavra usada por homens pequenos.", "popularity": 100}, {"day": 18, "month": 1, "name": "Kevin Costner", "born": 1955, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Ator e diretor vencedor do Oscar por 'Dança com Lobos'.", "curiosity": "Trabalhava como funcionário de marketing antes de ser descoberto por um acidente em um avião.", "gender": "M", "temperamento": "sanguineo", "height": 170, "weight": 68, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 63}, {"day": 19, "month": 1, "name": "Dolly Parton", "born": 1946, "category": "Música", "country": "EUA", "emoji": "🎸", "fact": "Uma das maiores cantoras country de todos os tempos. Mais de 100 álbuns gravados.", "curiosity": "Recusou a Medalha da Liberdade duas vezes por achar que não merecia. Depois aceitou a terceira.", "gender": "F", "temperamento": "sanguineo", "height": 152, "weight": 54, "quote": "A felicidade é um caminho — não um destino.", "popularity": 80}, {"day": 20, "month": 1, "name": "Raul Seixas", "born": 1945, "category": "Música", "country": "Brasil", "emoji": "🎸", "fact": "O 'Maluco Beleza'. Um dos maiores ícones do rock brasileiro.", "curiosity": "Foi parceiro de Paulo Coelho antes de o escritor se tornar mundialmente famoso.", "gender": "M", "temperamento": "colerico", "height": 172, "weight": 70, "quote": "Sonho que se sonha só é só um sonho que se sonha só.", "popularity": 81}, {"day": 21, "month": 1, "name": "Jack Nicklaus", "born": 1940, "category": "Esporte", "country": "EUA", "emoji": "⛳", "fact": "Considerado o maior golfista de todos os tempos. 18 títulos em torneios Major.", "curiosity": "Aprendeu golfe aos 10 anos e já era considerado prodígio aos 13.", "gender": "M", "temperamento": "colerico", "height": 180, "weight": 76, "quote": "Quem não arrisca, não vence.", "popularity": 65}, {"day": 22, "month": 1, "name": "Didi", "born": 1928, "category": "Esporte", "country": "Brasil", "emoji": "⚽", "fact": "Meia lendário da Seleção Brasileira. Bicampeão mundial (1958 e 1962).", "curiosity": "Inventor da famosa 'folha seca' — cobrança de falta que mudou o futebol para sempre.", "gender": "M", "temperamento": "melancolico", "height": 190, "weight": 88, "quote": "Aceite o que você não pode mudar. Mude o que você não pode aceitar.", "popularity": 61}, {"day": 23, "month": 1, "name": "Moacyr Scliar", "born": 1937, "category": "Literatura", "country": "Brasil", "emoji": "📖", "fact": "Um dos maiores escritores brasileiros. Autor de 'O Centauro no Jardim'.", "curiosity": "Era médico e escritor ao mesmo tempo. Publicou mais de 70 livros ao longo da vida.", "gender": "M", "temperamento": "melancolico", "height": 170, "weight": 85, "quote": "Quem sente mais, vive mais.", "popularity": 49}, {"day": 24, "month": 1, "name": "Neil Diamond", "born": 1941, "category": "Música", "country": "EUA", "emoji": "🎵", "fact": "Um dos cantores mais bem-sucedidos da história. 'Sweet Caroline' é seu maior hit.", "curiosity": "Vendeu mais de 130 milhões de discos. Mais do que muitos artistas modernos juntos.", "gender": "M", "temperamento": "sanguineo", "height": 176, "weight": 88, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 62}, {"day": 25, "month": 1, "name": "Alicia Keys", "born": 1981, "category": "Música", "country": "EUA", "emoji": "🎹", "fact": "Pianista e cantora com 15 Grammys. Uma das maiores artistas da sua geração.", "curiosity": "Entrou na escola de música Juilliard aos 12 anos e assinou com gravadora antes de se formar.", "gender": "F", "temperamento": "sanguineo", "height": 168, "weight": 65, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 63}, {"day": 26, "month": 1, "name": "Ellen DeGeneres", "born": 1958, "category": "TV & Humor", "country": "EUA", "emoji": "😄", "fact": "Uma das apresentadoras mais queridas dos EUA. Seu talk show durou 19 temporadas.", "curiosity": "Foi a primeira celebridade a assumir publicamente ser lésbica em horário nobre americano.", "gender": "F", "temperamento": "sanguineo", "height": 165, "weight": 57, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 42}, {"day": 27, "month": 1, "name": "Mozart", "born": 1756, "category": "Música Clássica", "country": "Áustria", "emoji": "🎼", "fact": "Wolfgang Amadeus Mozart. O maior gênio da música clássica. Compositor de mais de 600 obras.", "curiosity": "Compôs sua primeira sinfonia aos 8 anos. Tocava violino e cravo de olhos vendados para impressionar a realeza.", "gender": "M", "temperamento": "sanguineo", "height": 163, "weight": 56, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 94}, {"day": 28, "month": 1, "name": "Elijah Wood", "born": 1981, "category": "Cinema", "country": "EUA", "emoji": "🧙", "fact": "O eterno Frodo Baggins de 'O Senhor dos Anéis'. Um dos atores mais queridos do cinema de fantasia.", "curiosity": "Começou a atuar aos 8 anos. Foi descoberto numa feira de talentos em Iowa.", "gender": "M", "temperamento": "sanguineo", "height": 168, "weight": 66, "quote": "A felicidade é um caminho — não um destino.", "popularity": 55}, {"day": 29, "month": 1, "name": "Oprah Winfrey", "born": 1954, "category": "TV & Negócios", "country": "EUA", "emoji": "🌟", "fact": "A apresentadora mais influente do mundo. Construiu um império de mídia do zero.", "curiosity": "Nasceu numa família extremamente pobre no Mississippi. Virou bilionária por mérito próprio.", "gender": "F", "temperamento": "sanguineo", "height": 169, "weight": 72, "quote": "A maior aventura é viver a vida dos seus sonhos.", "popularity": 93}, {"day": 30, "month": 1, "name": "Phil Collins", "born": 1951, "category": "Música", "country": "Reino Unido", "emoji": "🥁", "fact": "Baterista e vocalista do Genesis. Solo career com hits como 'In the Air Tonight'.", "curiosity": "Tocou bateria no álbum 'A Hard Day's Night' dos Beatles quando tinha 13 anos — como figurante.", "gender": "M", "temperamento": "fleumatico", "height": 177, "weight": 80, "quote": "Ouvir é um superpoder.", "popularity": 59}, {"day": 31, "month": 1, "name": "Justin Timberlake", "born": 1981, "category": "Música", "country": "EUA", "emoji": "🎤", "fact": "Um dos maiores artistas pop do mundo. Ex-integrante do *NSYNC e carreira solo de enorme sucesso.", "curiosity": "Começou no Mickey Mouse Club ao lado de Britney Spears e Ryan Gosling.", "gender": "M", "temperamento": "sanguineo", "height": 185, "weight": 77, "quote": "A felicidade é um caminho — não um destino.", "popularity": 75}, {"day": 1, "month": 2, "name": "Lisa Marie Presley", "born": 1968, "category": "Música", "country": "EUA", "emoji": "🎵", "fact": "Filha de Elvis Presley. Cantora e uma das herdeiras mais famosas do mundo.", "curiosity": "Foi casada com Michael Jackson por dois anos. Os dois foram os filhos mais famosos do entretenimento.", "gender": "F", "temperamento": "sanguineo", "height": 167, "weight": 60, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 58}, {"day": 2, "month": 2, "name": "Claudia Leitte", "born": 1980, "category": "Música", "country": "Brasil", "emoji": "🎤", "fact": "Um dos maiores nomes do axé e da música baiana. Nascida em Salvador.", "curiosity": "Foi vocalista da Babado Novo antes de seguir carreira solo de imenso sucesso internacional.", "gender": "F", "temperamento": "sanguineo", "height": 170, "weight": 52, "quote": "Espalhe alegria por onde passar.", "popularity": 54}, {"day": 3, "month": 2, "name": "Warwick Davis", "born": 1970, "category": "Cinema", "country": "Reino Unido", "emoji": "🎬", "fact": "Ator famoso por 'Willow', 'Harry Potter' e 'Star Wars'. Uma das presenças mais marcantes do cinema.", "curiosity": "Tem menos de 1 metro de altura. Isso nunca impediu uma carreira de décadas em Hollywood.", "gender": "M", "temperamento": "sanguineo", "height": 175, "weight": 88, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 51}, {"day": 4, "month": 2, "name": "Édson Arantes do Nascimento", "born": 1940, "category": "Esporte", "country": "Brasil", "emoji": "⚽", "fact": "Pelé. O Rei do Futebol. O único tricampeão mundial como jogador.", "curiosity": "O apelido 'Pelé' surgiu na infância. Ele mesmo não sabe a origem e sempre disse não gostar.", "gender": "M", "temperamento": "colerico", "height": 187, "weight": 79, "quote": "O impossível leva um pouco mais de tempo.", "popularity": 51}, {"day": 5, "month": 2, "name": "Neymar Jr", "born": 1992, "category": "Esporte", "country": "Brasil", "emoji": "⚽", "fact": "Um dos maiores jogadores da história do futebol brasileiro. Nascido em Mogi das Cruzes, SP.", "curiosity": "Aos 17 anos já era titular do Santos e chamava atenção do mundo todo.", "gender": "M", "temperamento": "sanguineo", "height": 175, "weight": 68, "quote": "Nunca deixe de acreditar. Os melhores momentos da sua vida ainda estão por vir.", "popularity": 99}, {"day": 6, "month": 2, "name": "Bob Marley", "born": 1945, "category": "Música", "country": "Jamaica", "emoji": "🎸", "fact": "O rei do reggae. Um dos músicos mais influentes de todos os tempos.", "curiosity": "Nunca ganhou um Grammy em vida. Recebeu o prêmio póstumo em 2001 — por toda sua obra.", "gender": "M", "temperamento": "fleumatico", "height": 172, "weight": 68, "quote": "As pessoas mais felizes não têm tudo de melhor. Fazem o melhor com o que têm.", "popularity": 97}, {"day": 7, "month": 2, "name": "Charles Dickens", "born": 1812, "category": "Literatura", "country": "Reino Unido", "emoji": "📚", "fact": "Um dos maiores escritores de língua inglesa. Autor de 'Oliver Twist' e 'Conto de Natal'.", "curiosity": "Começou a trabalhar numa fábrica aos 12 anos para ajudar a família. A experiência marcou toda sua obra.", "gender": "M", "temperamento": "melancolico", "height": 175, "weight": 70, "quote": "Foi o melhor dos tempos, foi o pior dos tempos.", "popularity": 67}, {"day": 8, "month": 2, "name": "Seth MacFarlane", "born": 1973, "category": "Animação & Humor", "country": "EUA", "emoji": "📺", "fact": "Criador de 'Family Guy', 'American Dad' e 'The Orville'.", "curiosity": "Tinha passagem no voo 11 da American Airlines no dia 11/09. Chegou atrasado e perdeu o voo — que foi sequestrado.", "gender": "M", "temperamento": "fleumatico", "height": 178, "weight": 70, "quote": "Ouvir é um superpoder.", "popularity": 49}, {"day": 9, "month": 2, "name": "Zibia Gasparetto", "born": 1920, "category": "Literatura", "country": "Brasil", "emoji": "📖", "fact": "Escritora brasileira espiritualista. Autora de mais de 50 livros de imenso sucesso.", "curiosity": "Seus livros venderam mais de 20 milhões de exemplares no Brasil. Uma das mais vendidas do país.", "gender": "F", "temperamento": "melancolico", "height": 161, "weight": 64, "quote": "Aceite o que você não pode mudar. Mude o que você não pode aceitar.", "popularity": 71}, {"day": 10, "month": 2, "name": "Roberta Miranda", "born": 1959, "category": "Música", "country": "Brasil", "emoji": "🎵", "fact": "Rainha da música sertaneja. Uma das artistas brasileiras de maior longevidade.", "curiosity": "Nascida em Olho d'Água das Flores, Alagoas. Começou a carreira em São Paulo.", "gender": "F", "temperamento": "fleumatico", "height": 159, "weight": 54, "quote": "Ouvir é um superpoder.", "popularity": 64}, {"day": 11, "month": 2, "name": "Thomas Edison", "born": 1847, "category": "Ciência & Invenção", "country": "EUA", "emoji": "💡", "fact": "Inventou a lâmpada elétrica, o fonógrafo e mais de 1.000 patentes registradas.", "curiosity": "Foi expulso da escola aos 12 anos por ser considerado 'difícil de ensinar'. Sua mãe o ensinou em casa.", "gender": "M", "temperamento": "melancolico", "height": 175, "weight": 72, "quote": "Gênio é 1% inspiração e 99% transpiração.", "popularity": 89}, {"day": 12, "month": 2, "name": "Tina Turner", "born": 1939, "category": "Música", "country": "EUA", "emoji": "🎤", "fact": "A 'Rainha do Rock'. Uma das cantoras mais energéticas e icônicas da história.", "curiosity": "Refez a carreira solo do zero depois dos 40 anos, após separação difícil. Vendeu mais do que nunca.", "gender": "F", "temperamento": "colerico", "height": 165, "weight": 57, "quote": "Às vezes você tem que deixar tudo para trás e começar de novo.", "popularity": 75}, {"day": 13, "month": 2, "name": "Robson Crusoé", "born": 1988, "category": "Esporte", "country": "Brasil", "emoji": "🏃", "fact": "Atleta paralímpico brasileiro. Recordista mundial e multicampeão.", "curiosity": "Perdeu um braço num acidente e se tornou um dos maiores velocistas paralímpicos do mundo.", "gender": "M", "temperamento": "colerico", "height": 186, "weight": 72, "quote": "A vida não recompensa quem hesita.", "popularity": 49}, {"day": 14, "month": 2, "name": "Roberta Flack", "born": 1937, "category": "Música", "country": "EUA", "emoji": "🎵", "fact": "Cantora de soul e R&B. 'Killing Me Softly' é um dos maiores hits da história.", "curiosity": "Era professora de inglês e música antes de ser descoberta por acidente num clube de jazz.", "gender": "F", "temperamento": "melancolico", "height": 163, "weight": 63, "quote": "Quem sente mais, vive mais.", "popularity": 59}, {"day": 15, "month": 2, "name": "Galileu Galilei", "born": 1564, "category": "Ciência", "country": "Itália", "emoji": "🔭", "fact": "Pai da astronomia moderna. Provou com telescópio que a Terra gira ao redor do Sol.", "curiosity": "Foi julgado pela Igreja e forçado a negar suas descobertas. Dizem que murmurou 'E pur si muove' — 'E mesmo assim se move'.", "gender": "M", "temperamento": "melancolico", "height": 163, "weight": 60, "quote": "Você não pode ensinar nada a um homem. Pode apenas ajudá-lo a descobrir.", "popularity": 76}, {"day": 16, "month": 2, "name": "Ice-T", "born": 1958, "category": "Música & TV", "country": "EUA", "emoji": "🎤", "fact": "Pioneiro do gangsta rap e ator famoso pela série Law & Order.", "curiosity": "Alistou-se no Exército e só depois seguiu a carreira musical. Uma das transições mais incomuns do showbiz.", "gender": "M", "temperamento": "fleumatico", "height": 178, "weight": 67, "quote": "Ouvir é um superpoder.", "popularity": 59}, {"day": 17, "month": 2, "name": "Michael Jordan", "born": 1963, "category": "Esporte", "country": "EUA", "emoji": "🏀", "fact": "Considerado o maior jogador de basquete de todos os tempos. 6 títulos da NBA.", "curiosity": "Foi cortado do time de basquete da sua escola no 2° ano. Usou essa rejeição como motivação.", "gender": "M", "temperamento": "colerico", "height": 198, "weight": 98, "quote": "Aceitei os erros e continuei tentando. É por isso que sou bem-sucedido.", "popularity": 99}, {"day": 18, "month": 2, "name": "Dr. Dre", "born": 1965, "category": "Música", "country": "EUA", "emoji": "🎧", "fact": "Produtor e rapper que moldou o hip-hop moderno. Criador do estilo West Coast.", "curiosity": "Vendeu a Beats Electronics para a Apple por 3 bilhões de dólares — tornando-se o rapper mais rico.", "gender": "M", "temperamento": "colerico", "height": 184, "weight": 83, "quote": "Quem espera o momento certo nunca começa.", "popularity": 58}, {"day": 19, "month": 2, "name": "Marta", "born": 1986, "category": "Esporte", "country": "Brasil", "emoji": "⚽", "fact": "A maior jogadora de futebol da história. Eleita melhor do mundo 6 vezes. Nascida em Dois Riachos, AL.", "curiosity": "Jogava descalça pelas ruas de Alagoas. Hoje é ícone global do futebol feminino.", "gender": "F", "temperamento": "colerico", "height": 163, "weight": 57, "quote": "Lute para ser feliz. Não espere a felicidade chegar.", "popularity": 91}, {"day": 20, "month": 2, "name": "Rihanna", "born": 1988, "category": "Música", "country": "Barbados", "emoji": "🎵", "fact": "Uma das artistas mais vendidas de todos os tempos. Mais de 250 milhões de discos vendidos.", "curiosity": "Foi descoberta aos 15 anos quando cantou para um produtor americano de férias em Barbados.", "gender": "F", "temperamento": "colerico", "height": 173, "weight": 63, "quote": "Nunca seja uma jovem mulher sem voz.", "popularity": 92}, {"day": 21, "month": 2, "name": "Nina Simone", "born": 1933, "category": "Música", "country": "EUA", "emoji": "🎹", "fact": "Pianista e cantora extraordinária. Um dos maiores talentos da história da música americana.", "curiosity": "Passou a vida inteira tentando se tornar pianista clássica. A rejeição virou jazz, soul e ativismo.", "gender": "F", "temperamento": "melancolico", "height": 159, "weight": 64, "quote": "A arte é a verdade que mente para dizer mais verdade.", "popularity": 42}, {"day": 22, "month": 2, "name": "Steve Irwin", "born": 1962, "category": "Natureza & TV", "country": "Austrália", "emoji": "🐊", "fact": "O 'Caçador de Crocodilos'. Apresentador de TV que ensinou o mundo a amar a vida selvagem.", "curiosity": "Começou a capturar crocodilos aos 9 anos, com o pai. Era quase um esporte de família.", "gender": "M", "temperamento": "melancolico", "height": 172, "weight": 83, "quote": "Aceite o que você não pode mudar. Mude o que você não pode aceitar.", "popularity": 41}, {"day": 23, "month": 2, "name": "Kelly Rowland", "born": 1981, "category": "Música", "country": "EUA", "emoji": "🎤", "fact": "Integrante do Destiny's Child ao lado de Beyoncé. Carreira solo de imenso sucesso.", "curiosity": "Morou na casa da família de Beyoncé durante a infância. As duas são amigas há mais de 30 anos.", "gender": "F", "temperamento": "sanguineo", "height": 162, "weight": 63, "quote": "A felicidade é um caminho — não um destino.", "popularity": 65}, {"day": 24, "month": 2, "name": "Steve Jobs", "born": 1955, "category": "Tecnologia", "country": "EUA", "emoji": "🍎", "fact": "Cofundador da Apple. Criou o iPhone, o iPod e o Mac. Mudou o mundo com design e tecnologia.", "curiosity": "Foi adotado ao nascer. Largou a faculdade após 6 meses mas ficou assistindo aulas de caligrafia — que influenciaram as fontes do Mac.", "gender": "M", "temperamento": "colerico", "height": 188, "weight": 78, "quote": "Faça o que você acredita ser um ótimo trabalho. A única forma de ser feliz é fazer o que você ama.", "popularity": 90}, {"day": 25, "month": 2, "name": "George Harrison", "born": 1943, "category": "Música", "country": "Reino Unido", "emoji": "🎸", "fact": "Guitarrista dos Beatles. Compôs 'Something' e 'Here Comes the Sun'.", "curiosity": "Aprendeu violão sozinho viajando de ônibus para a escola em Liverpool.", "gender": "M", "temperamento": "fleumatico", "height": 176, "weight": 88, "quote": "A paz interior vale mais que qualquer conquista.", "popularity": 67}, {"day": 26, "month": 2, "name": "Johnny Cash", "born": 1932, "category": "Música", "country": "EUA", "emoji": "🎸", "fact": "O 'Homem de Preto'. Um dos maiores nomes da música country e americana de todos os tempos.", "curiosity": "Gravou um álbum ao vivo numa prisão — 'At Folsom Prison' — que se tornou um dos maiores da história.", "gender": "M", "temperamento": "sanguineo", "height": 172, "weight": 67, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 73}, {"day": 27, "month": 2, "name": "Elizabeth Taylor", "born": 1932, "category": "Cinema", "country": "Reino Unido", "emoji": "🎬", "fact": "Uma das maiores estrelas de Hollywood. Vencedora de dois Oscars. Ícone de beleza e talento.", "curiosity": "Casou-se 8 vezes — duas delas com o mesmo homem, Richard Burton.", "gender": "F", "temperamento": "sanguineo", "height": 168, "weight": 59, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 73}, {"day": 28, "month": 2, "name": "Bernadette Peters", "born": 1948, "category": "Teatro & Música", "country": "EUA", "emoji": "🎭", "fact": "Uma das maiores estrelas da Broadway americana. Voz e talento únicos.", "curiosity": "Apareceu no The Tonight Show pela primeira vez aos 10 anos. Era prodigy da TV americana.", "gender": "F", "temperamento": "fleumatico", "height": 170, "weight": 61, "quote": "A paz interior vale mais que qualquer conquista.", "popularity": 67}, {"day": 29, "month": 2, "name": "Dinah Shore", "born": 1916, "category": "Música & TV", "country": "EUA", "emoji": "🎵", "fact": "Cantora e apresentadora pioneira. Uma das maiores estrelas da TV americana dos anos 50.", "curiosity": "Nasceu em 29 de fevereiro — o famoso 'dia dos bissextos'. Fez aniversário oficial apenas uma vez a cada 4 anos.", "gender": "F", "temperamento": "fleumatico", "height": 159, "weight": 59, "quote": "Ouvir é um superpoder.", "popularity": 74}, {"day": 1, "month": 3, "name": "Justin Bieber", "born": 1994, "category": "Música", "country": "Canadá", "emoji": "🎵", "fact": "Um dos artistas mais ouvidos do mundo. Descoberto no YouTube ainda adolescente.", "curiosity": "Tinha 13 anos quando Scooter Braun o encontrou por acaso no YouTube. Mudou sua vida para sempre.", "gender": "M", "temperamento": "sanguineo", "height": 175, "weight": 68, "quote": "Acreditem nos seus sonhos. Tudo é possível se você acreditar.", "popularity": 85}, {"day": 2, "month": 3, "name": "Jon Bon Jovi", "born": 1962, "category": "Música", "country": "EUA", "emoji": "🎸", "fact": "Líder da banda Bon Jovi. Um dos maiores ícones do rock dos anos 80 e 90.", "curiosity": "Seu primeiro emprego foi varrer estúdio de gravação. Acabou gravando músicas lá.", "gender": "M", "temperamento": "sanguineo", "height": 173, "weight": 78, "quote": "A felicidade é um caminho — não um destino.", "popularity": 45}, {"day": 3, "month": 3, "name": "Zico", "born": 1953, "category": "Esporte", "country": "Brasil", "emoji": "⚽", "fact": "O 'Galinho de Quintino'. Considerado um dos maiores jogadores da história do futebol.", "curiosity": "Era tão magro na infância que os médicos diziam que nunca jogaria futebol profissional.", "gender": "M", "temperamento": "melancolico", "height": 176, "weight": 73, "quote": "O talento você tem. O que faz a diferença é a disciplina.", "popularity": 99}, {"day": 4, "month": 3, "name": "Channing Tatum", "born": 1980, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Ator e dançarino. Famoso por 'Magic Mike' e 'Ela Dança, Eu Danço'.", "curiosity": "Trabalhou como stripper antes de ser descoberto. Basicamente viveu o roteiro de Magic Mike.", "gender": "M", "temperamento": "sanguineo", "height": 178, "weight": 80, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 72}, {"day": 5, "month": 3, "name": "Eva Mendes", "born": 1974, "category": "Cinema", "country": "EUA", "emoji": "🎭", "fact": "Atriz e empresária cubano-americana. Uma das mais belas e talentosas de Hollywood.", "curiosity": "Estudou marketing antes de ser descoberta por um agente. Quase não seguiu carreira de atriz.", "gender": "F", "temperamento": "sanguineo", "height": 168, "weight": 63, "quote": "A felicidade é um caminho — não um destino.", "popularity": 70}, {"day": 6, "month": 3, "name": "Michelangelo", "born": 1475, "category": "Arte", "country": "Itália", "emoji": "🎨", "fact": "Um dos maiores artistas de todos os tempos. Criador do teto da Capela Sistina e da escultura 'Davi'.", "curiosity": "Pintou o teto da Capela Sistina deitado de costas por 4 anos. Ficou com problemas de visão pelo resto da vida.", "gender": "M", "temperamento": "melancolico", "height": 168, "weight": 65, "quote": "Eu vi o anjo no mármore e esculpi até libertá-lo.", "popularity": 99}, {"day": 7, "month": 3, "name": "Rachel Weisz", "born": 1970, "category": "Cinema", "country": "Reino Unido", "emoji": "🎬", "fact": "Atriz vencedora do Oscar por 'O Jardineiro Fiel'. Casada com Daniel Craig.", "curiosity": "Formou-se em inglês em Cambridge antes de seguir a carreira de atriz.", "gender": "F", "temperamento": "sanguineo", "height": 160, "weight": 63, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 48}, {"day": 8, "month": 3, "name": "Camila Cabello", "born": 1997, "category": "Música", "country": "EUA", "emoji": "🎤", "fact": "Cantora cubano-americana. Grande hit 'Havana'. Carreira solo de enorme sucesso.", "curiosity": "Imigrou para os EUA aos 6 anos sem falar inglês. Essa história inspira muitas de suas músicas.", "gender": "F", "temperamento": "sanguineo", "height": 157, "weight": 54, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 53}, {"day": 9, "month": 3, "name": "Yuri Gagarin", "born": 1934, "category": "Exploração Espacial", "country": "União Soviética", "emoji": "🚀", "fact": "O primeiro ser humano a ir ao espaço, em 1961. Herói soviético e símbolo da humanidade.", "curiosity": "O voo durou 108 minutos. Ao retornar, tornou-se a pessoa mais famosa do mundo da noite pro dia.", "gender": "M", "temperamento": "colerico", "height": 181, "weight": 72, "quote": "Vamos.", "popularity": 83}, {"day": 10, "month": 3, "name": "Bad Bunny", "born": 1994, "category": "Música", "country": "Porto Rico", "emoji": "🐰", "fact": "O artista de língua hispânica mais ouvido do mundo. Revoluionou o reggaeton global.", "curiosity": "Trabalhava como empacotador em supermercado enquanto uploadava músicas no SoundCloud.", "gender": "M", "temperamento": "sanguineo", "height": 182, "weight": 82, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 71}, {"day": 11, "month": 3, "name": "Johnny Knoxville", "born": 1971, "category": "TV & Entretenimento", "country": "EUA", "emoji": "😂", "fact": "Criador e estrela do programa Jackass. Um dos fenômenos da MTV.", "curiosity": "Enviou uma fita VHS de trucos perigosos para a MTV e foi contratado na hora.", "gender": "M", "temperamento": "fleumatico", "height": 178, "weight": 88, "quote": "A paz interior vale mais que qualquer conquista.", "popularity": 72}, {"day": 12, "month": 3, "name": "Liza Minnelli", "born": 1946, "category": "Cinema & Teatro", "country": "EUA", "emoji": "🎭", "fact": "Vencedora do Oscar por 'Cabaret'. Uma das maiores estrelas da Broadway.", "curiosity": "Filha da lendária Judy Garland. Apareceu no primeiro filme da mãe ainda bebê, de colo.", "gender": "F", "temperamento": "melancolico", "height": 172, "weight": 54, "quote": "A profundidade vem do silêncio antes da palavra.", "popularity": 60}, {"day": 13, "month": 3, "name": "Leandro", "born": 1961, "category": "Música", "country": "Brasil", "emoji": "🎵", "fact": "Leandro, da dupla Leandro & Leonardo. Um dos maiores ídolos da música sertaneja.", "curiosity": "Nascido em Goianápolis, Goiás. A dupla vendeu mais de 30 milhões de discos no Brasil.", "gender": "M", "temperamento": "sanguineo", "height": 175, "weight": 83, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 62}, {"day": 14, "month": 3, "name": "Albert Einstein", "born": 1879, "category": "Ciência", "country": "Alemanha", "emoji": "🧠", "fact": "O físico mais famoso da história. Criador da Teoria da Relatividade. Prêmio Nobel de Física.", "curiosity": "Só aprendeu a falar aos 4 anos. Seus professores achavam que tinha dificuldade de aprendizado.", "gender": "M", "temperamento": "melancolico", "height": 175, "weight": 70, "quote": "A imaginação é mais importante que o conhecimento.", "popularity": 91}, {"day": 15, "month": 3, "name": "Eva Longoria", "born": 1975, "category": "Cinema & TV", "country": "EUA", "emoji": "🎬", "fact": "Atriz e produtora. Famosa pela série 'Desperate Housewives'.", "curiosity": "Formou-se em Cinesiologia antes de ser atriz. Começou no cinema depois dos 20 anos.", "gender": "F", "temperamento": "sanguineo", "height": 169, "weight": 59, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 41}, {"day": 16, "month": 3, "name": "Victor Hugo", "born": 1802, "category": "Literatura", "country": "França", "emoji": "📚", "fact": "Autor de 'Os Miseráveis'. Um dos maiores escritores da história da humanidade.", "curiosity": "Escreveu 'Os Miseráveis' em partes ao longo de 17 anos. Quando saiu, virou clássico instantâneo.", "gender": "M", "temperamento": "melancolico", "height": 175, "weight": 82, "quote": "Mesmo a noite mais escura terminará e o sol nascerá.", "popularity": 61}, {"day": 17, "month": 3, "name": "Rob Lowe", "born": 1964, "category": "Cinema & TV", "country": "EUA", "emoji": "🎬", "fact": "Ator e produtor. Famoso por 'The West Wing' e 'Parks and Recreation'.", "curiosity": "Era parte do 'Brat Pack' dos anos 80 ao lado de Emilio Estevez e Tom Cruise.", "gender": "M", "temperamento": "sanguineo", "height": 182, "weight": 74, "quote": "Espalhe alegria por onde passar.", "popularity": 59}, {"day": 18, "month": 3, "name": "Adam Levine", "born": 1979, "category": "Música", "country": "EUA", "emoji": "🎵", "fact": "Vocalista e guitarrista do Maroon 5. Jurado do The Voice americano.", "curiosity": "Tem TDAH diagnosticado e fala publicamente sobre o tema para ajudar outras pessoas.", "gender": "M", "temperamento": "sanguineo", "height": 177, "weight": 87, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 42}, {"day": 19, "month": 3, "name": "Bruce Willis", "born": 1955, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Ator icônico de Hollywood. Famoso pela franquia Die Hard e 'O Sexto Sentido'.", "curiosity": "Tinha gagueira grave na infância. Começou a fazer teatro para superar o problema.", "gender": "M", "temperamento": "colerico", "height": 183, "weight": 84, "quote": "O impossível leva um pouco mais de tempo.", "popularity": 86}, {"day": 20, "month": 3, "name": "Fernando Pessoa", "born": 1888, "category": "Literatura", "country": "Portugal", "emoji": "📖", "fact": "O maior poeta de língua portuguesa do século XX. Criou heterônimos com personalidades distintas.", "curiosity": "Criou mais de 70 heterônimos — cada um com biografia, estilo e filosofia próprios.", "gender": "M", "temperamento": "melancolico", "height": 180, "weight": 92, "quote": "Os pensamentos mais belos vêm na madrugada.", "popularity": 58}, {"day": 21, "month": 3, "name": "Johann Sebastian Bach", "born": 1685, "category": "Música Clássica", "country": "Alemanha", "emoji": "🎼", "fact": "Um dos maiores compositores de todos os tempos. Base de toda a música ocidental.", "curiosity": "Teve 20 filhos, sendo 10 de cada um de seus dois casamentos. Vários viraram músicos famosos.", "gender": "M", "temperamento": "melancolico", "height": 171, "weight": 73, "quote": "Aceite o que você não pode mudar. Mude o que você não pode aceitar.", "popularity": 61}, {"day": 22, "month": 3, "name": "Reese Witherspoon", "born": 1976, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Atriz vencedora do Oscar por 'Johnny & June'. Produtora e empresária de sucesso.", "curiosity": "Fundou a Hello Sunshine, produtora focada em histórias de mulheres, vendida por 900 milhões.", "gender": "F", "temperamento": "sanguineo", "height": 171, "weight": 53, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 41}, {"day": 23, "month": 3, "name": "Chico Buarque", "born": 1944, "category": "Música", "country": "Brasil", "emoji": "🎵", "fact": "Um dos maiores compositores brasileiros. Símbolo da MPB e da resistência cultural.", "curiosity": "Filho do historiador Sérgio Buarque de Holanda. Cresceu em ambiente intelectual e artístico.", "gender": "M", "temperamento": "melancolico", "height": 175, "weight": 72, "quote": "A música é o silêncio entre as notas.", "popularity": 98}, {"day": 24, "month": 3, "name": "Alyson Hannigan", "born": 1974, "category": "TV & Cinema", "country": "EUA", "emoji": "📺", "fact": "Atriz famosa por 'Buffy, a Caça-Vampiros' e 'How I Met Your Mother'.", "curiosity": "Fez comercial da McDonald's aos 4 anos. Foi sua primeira aparição em câmera.", "gender": "F", "temperamento": "sanguineo", "height": 170, "weight": 62, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 68}, {"day": 25, "month": 3, "name": "Elton John", "born": 1947, "category": "Música", "country": "Reino Unido", "emoji": "🎹", "fact": "Um dos músicos mais bem-sucedidos da história. Mais de 300 milhões de álbuns vendidos.", "curiosity": "Entrou para a Academia Real de Música de Londres aos 11 anos. Ganhou bolsa de estudos.", "gender": "M", "temperamento": "sanguineo", "height": 182, "weight": 74, "quote": "Espalhe alegria por onde passar.", "popularity": 84}, {"day": 26, "month": 3, "name": "Diana Ross", "born": 1944, "category": "Música", "country": "EUA", "emoji": "🎤", "fact": "Líder das Supremes e grande carreira solo. Um dos maiores nomes do soul americano.", "curiosity": "Descobriu e lançou Michael Jackson quando ele tinha 8 anos, ainda no Jackson 5.", "gender": "F", "temperamento": "sanguineo", "height": 159, "weight": 58, "quote": "A felicidade é um caminho — não um destino.", "popularity": 40}, {"day": 27, "month": 3, "name": "Xuxa", "born": 1963, "category": "TV & Entretenimento", "country": "Brasil", "emoji": "👑", "fact": "A 'Rainha dos Baixinhos'. Uma das maiores apresentadoras da história da televisão brasileira.", "curiosity": "Nascida em Santa Rosa, Rio Grande do Sul. Seu programa foi exibido em mais de 50 países.", "gender": "F", "temperamento": "sanguineo", "height": 175, "weight": 58, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 83}, {"day": 28, "month": 3, "name": "Lady Gaga", "born": 1986, "category": "Música", "country": "EUA", "emoji": "🎭", "fact": "Uma das artistas mais criativas da geração. 13 Grammys e Oscar pela música de 'Nasce uma Estrela'.", "curiosity": "Estudou na mesma turma que Nicki Minaj antes de ser expulsa — por chamar atenção demais.", "gender": "F", "temperamento": "colerico", "height": 155, "weight": 55, "quote": "Não sou arrogante. Só sei que sou boa.", "popularity": 98}, {"day": 29, "month": 3, "name": "Eric Idle", "born": 1943, "category": "Humor", "country": "Reino Unido", "emoji": "😂", "fact": "Membro do lendário Monty Python. Um dos grupos de humor mais influentes da história.", "curiosity": "Escreveu 'Always Look on the Bright Side of Life', cantada hoje em estádios pelo mundo todo.", "gender": "M", "temperamento": "sanguineo", "height": 180, "weight": 78, "quote": "Espalhe alegria por onde passar.", "popularity": 74}, {"day": 30, "month": 3, "name": "Anitta", "born": 1993, "category": "Música", "country": "Brasil", "emoji": "🎤", "fact": "A artista brasileira mais ouvida no mundo. Nascida no Rio de Janeiro.", "curiosity": "Surgiu de um funk proibidão e foi a primeira brasileira a alcançar o Top 10 do Spotify global.", "gender": "F", "temperamento": "colerico", "height": 160, "weight": 55, "quote": "Ninguém vai acreditar em você se você não acreditar primeiro.", "popularity": 96}, {"day": 31, "month": 3, "name": "Ewan McGregor", "born": 1971, "category": "Cinema", "country": "Escócia", "emoji": "🎬", "fact": "Ator escocês famoso por 'Trainspotting', 'Moulin Rouge!' e o jovem Obi-Wan Kenobi em Star Wars.", "curiosity": "Tocou numa banda antes de ser ator. Aprendeu a tocar gaita de foles como parte do papel.", "gender": "M", "temperamento": "sanguineo", "height": 180, "weight": 72, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 61}, {"day": 1, "month": 4, "name": "Susan Boyle", "born": 1961, "category": "Música", "country": "Reino Unido", "emoji": "🎤", "fact": "Cantora que se tornou famosa mundialmente ao cantar no Britain's Got Talent aos 47 anos.", "curiosity": "Nunca havia se apresentado profissionalmente antes. O vídeo do programa tem mais de 100 milhões de views.", "gender": "F", "temperamento": "sanguineo", "height": 168, "weight": 67, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 63}, {"day": 2, "month": 4, "name": "Hans Christian Andersen", "born": 1805, "category": "Literatura", "country": "Dinamarca", "emoji": "📚", "fact": "Autor de 'A Pequena Sereia', 'O Patinho Feio' e 'A Rainha da Neve'. Os contos mais amados da história.", "curiosity": "Era filho de sapateiro e lavadeira. Nunca casou, nunca teve filhos. Canalizou tudo para os contos.", "gender": "M", "temperamento": "melancolico", "height": 182, "weight": 88, "quote": "Quem sente mais, vive mais.", "popularity": 74}, {"day": 3, "month": 4, "name": "Marlon Brando", "born": 1924, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Um dos maiores atores da história. O Poderoso Chefão e Apocalipse Now são seus maiores legados.", "curiosity": "Recusou o Oscar de melhor ator por 'O Poderoso Chefão' em protesto pelo tratamento dos nativos americanos.", "gender": "M", "temperamento": "colerico", "height": 175, "weight": 110, "quote": "O privilégio do ator é viver mil vidas.", "popularity": 77}, {"day": 4, "month": 4, "name": "Heath Ledger", "born": 1979, "category": "Cinema", "country": "Austrália", "emoji": "🎭", "fact": "Ator australiano. Seu Coringa em 'Batman: O Cavaleiro das Trevas' é considerado o melhor vilão do cinema.", "curiosity": "Ganhou o Oscar postumamente. Mergulhou tanto no personagem que afetou seu sono e sua saúde mental.", "gender": "M", "temperamento": "melancolico", "height": 185, "weight": 80, "quote": "Quem sente mais, vive mais.", "popularity": 79}, {"day": 5, "month": 4, "name": "Pharrell Williams", "born": 1973, "category": "Música", "country": "EUA", "emoji": "🎵", "fact": "Produtor e cantor responsável por hits como 'Happy' e 'Get Lucky'. Um dos mais criativos da música atual.", "curiosity": "Produziu músicas para Beyoncé, Jay-Z, Justin Timberlake e Daft Punk antes de lançar carreira solo.", "gender": "M", "temperamento": "sanguineo", "height": 180, "weight": 75, "quote": "A felicidade é um caminho — não um destino.", "popularity": 60}, {"day": 6, "month": 4, "name": "Paul Rudd", "born": 1969, "category": "Cinema", "country": "EUA", "emoji": "🦸", "fact": "Ator famoso por 'Homem-Formiga' e 'Friends'. Conhecido também por parecer que não envelhece.", "curiosity": "A internet criou a teoria de que ele é vampiro porque parece ter 35 anos há mais de duas décadas.", "gender": "M", "temperamento": "sanguineo", "height": 184, "weight": 70, "quote": "A felicidade é um caminho — não um destino.", "popularity": 65}, {"day": 7, "month": 4, "name": "Jackie Chan", "born": 1954, "category": "Cinema", "country": "Hong Kong", "emoji": "🥋", "fact": "O maior astro de artes marciais do cinema. Realizou todas as suas acrobacias sem dublê por décadas.", "curiosity": "Quebrou quase todos os ossos do corpo em diferentes filmagens. Tem um museu das fraturas na Ásia.", "gender": "M", "temperamento": "colerico", "height": 174, "weight": 74, "quote": "Não tenha medo de falhar. É quando você falha que aprende mais.", "popularity": 84}, {"day": 8, "month": 4, "name": "Patricia Abravanel", "born": 1977, "category": "TV", "country": "Brasil", "emoji": "📺", "fact": "Apresentadora brasileira e filha de Silvio Santos. Um dos rostos mais conhecidos do SBT.", "curiosity": "Cresceu dentro dos bastidores da TV. Estreou como apresentadora ainda adolescente.", "gender": "F", "temperamento": "sanguineo", "height": 162, "weight": 56, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 68}, {"day": 9, "month": 4, "name": "Kristen Stewart", "born": 1990, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Atriz famosa pela saga 'Crepúsculo' e indicada ao Oscar por 'Spencer'.", "curiosity": "Era a atriz mais bem paga de Hollywood em 2012. Transformou completamente sua carreira depois do Crepúsculo.", "gender": "F", "temperamento": "melancolico", "height": 161, "weight": 60, "quote": "Os pensamentos mais belos vêm na madrugada.", "popularity": 73}, {"day": 10, "month": 4, "name": "Manoel Carlos", "born": 1938, "category": "TV", "country": "Brasil", "emoji": "📺", "fact": "'Maneco'. O maior autor de novelas da Globo. Criou 'Mulheres Apaixonadas', 'Laços de Família' e tantas outras.", "curiosity": "Tem uma obsessão conhecida por flores — especialmente ipê amarelo. Aparece em quase todas as novelas dele.", "gender": "M", "temperamento": "melancolico", "height": 183, "weight": 84, "quote": "A profundidade vem do silêncio antes da palavra.", "popularity": 70}, {"day": 11, "month": 4, "name": "Joss Stone", "born": 1987, "category": "Música", "country": "Reino Unido", "emoji": "🎤", "fact": "Cantora de soul britânica que lançou seu primeiro álbum aos 16 anos.", "curiosity": "Tentou fazer um show em todos os países do mundo — incluindo os mais perigosos e remotos do planeta.", "gender": "F", "temperamento": "sanguineo", "height": 164, "weight": 63, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 56}, {"day": 12, "month": 4, "name": "David Letterman", "born": 1947, "category": "TV", "country": "EUA", "emoji": "📺", "fact": "Apresentador do Late Show por 33 anos. Ícone da televisão americana noturna.", "curiosity": "Começou como apresentador de clima na TV local do Indiana antes de conquistar Nova York.", "gender": "M", "temperamento": "sanguineo", "height": 185, "weight": 83, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 63}, {"day": 13, "month": 4, "name": "Al Green", "born": 1946, "category": "Música", "country": "EUA", "emoji": "🎵", "fact": "Um dos maiores cantores de soul e gospel de todos os tempos. 'Let's Stay Together' é eterno.", "curiosity": "Após um acidente pessoal grave, abandonou a carreira secular e se tornou pastor religioso.", "gender": "M", "temperamento": "sanguineo", "height": 177, "weight": 70, "quote": "Espalhe alegria por onde passar.", "popularity": 69}, {"day": 14, "month": 4, "name": "Loretta Lynn", "born": 1932, "category": "Música", "country": "EUA", "emoji": "🎸", "fact": "Rainha da música country americana. Uma vida tão intensa que virou filme com Sissy Spacek.", "curiosity": "Casou aos 15 anos, teve 6 filhos e virou estrela de country antes dos 30. Uma história improvável.", "gender": "F", "temperamento": "sanguineo", "height": 166, "weight": 67, "quote": "Espalhe alegria por onde passar.", "popularity": 59}, {"day": 15, "month": 4, "name": "Emma Watson", "born": 1990, "category": "Cinema", "country": "França/Reino Unido", "emoji": "🎬", "fact": "A eterna Hermione Granger de Harry Potter. Também ativista dos direitos das mulheres na ONU.", "curiosity": "Formou-se em literatura inglesa em Brown, nos EUA, mesmo enquanto era uma das atrizes mais famosas do mundo.", "gender": "F", "temperamento": "melancolico", "height": 165, "weight": 54, "quote": "O feminismo, no fundo, é simples: igualdade.", "popularity": 85}, {"day": 16, "month": 4, "name": "Charlie Chaplin", "born": 1889, "category": "Cinema", "country": "Reino Unido", "emoji": "🎩", "fact": "O maior comediante da era do cinema mudo. Criou o personagem 'Carlitos' que atravessou gerações.", "curiosity": "Participou de um concurso de imitadores de Charlie Chaplin — e ficou em terceiro lugar.", "gender": "M", "temperamento": "sanguineo", "height": 165, "weight": 63, "quote": "Um dia sem sorrir é um dia perdido.", "popularity": 98}, {"day": 17, "month": 4, "name": "Victoria Beckham", "born": 1974, "category": "Moda & Música", "country": "Reino Unido", "emoji": "👗", "fact": "Ex-Spice Girl e estilista. Fundou uma das marcas de moda mais valorizadas do mundo.", "curiosity": "Nunca sorri em fotos por achar mais sofisticado. Isso virou uma das peculiaridades mais famosas do showbiz.", "gender": "F", "temperamento": "colerico", "height": 167, "weight": 48, "quote": "Faça acontecer. Ninguém vai fazer por você.", "popularity": 57}, {"day": 18, "month": 4, "name": "Conan O'Brien", "born": 1963, "category": "TV & Humor", "country": "EUA", "emoji": "😄", "fact": "Apresentador de late night e comediante. Um dos rostos mais queridos da TV americana.", "curiosity": "Se formou em Harvard com louvor em história e literatura antes de se tornar comediante.", "gender": "M", "temperamento": "sanguineo", "height": 193, "weight": 86, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 48}, {"day": 19, "month": 4, "name": "Angélica", "born": 1973, "category": "TV", "country": "Brasil", "emoji": "🌟", "fact": "Apresentadora e atriz brasileira. Um dos maiores ícones da televisão infantil brasileira.", "curiosity": "Nascida em Londrina, PR. Casada com Luciano Huck, formam um dos casais mais famosos do Brasil.", "gender": "F", "temperamento": "sanguineo", "height": 178, "weight": 62, "quote": "Espalhe alegria por onde passar.", "popularity": 84}, {"day": 20, "month": 4, "name": "Miranda Kerr", "born": 1983, "category": "Moda", "country": "Austrália", "emoji": "👗", "fact": "Supermodelo australiana. Primeira modelo australiana a ser Angel da Victoria's Secret.", "curiosity": "Fundou a linha de beleza KORA Organics antes das marcas de celebridades virarem tendência.", "gender": "F", "temperamento": "colerico", "height": 179, "weight": 50, "quote": "A vida não recompensa quem hesita.", "popularity": 74}, {"day": 21, "month": 4, "name": "Andie MacDowell", "born": 1958, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Atriz e modelo americana. Famosa por 'Quatro Casamentos e um Funeral' e 'O Dia da Marmota'.", "curiosity": "Começou como modelo da L'Oreal antes de partir para o cinema. Fez a transição com sucesso raro.", "gender": "F", "temperamento": "sanguineo", "height": 160, "weight": 57, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 51}, {"day": 22, "month": 4, "name": "Jack Nicholson", "born": 1937, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Um dos maiores atores da história de Hollywood. 12 indicações ao Oscar e 3 vitórias.", "curiosity": "Descobriu aos 37 anos que a mulher que criou como 'irmã' era sua mãe biológica. A família o escondeu por décadas.", "gender": "M", "temperamento": "sanguineo", "height": 183, "weight": 85, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 52}, {"day": 23, "month": 4, "name": "William Shakespeare", "born": 1564, "category": "Literatura", "country": "Reino Unido", "emoji": "📜", "fact": "O maior escritor da língua inglesa. Criou Romeu e Julieta, Hamlet, Otelo e dezenas de obras eternas.", "curiosity": "Inventou mais de 1.700 palavras em inglês que ainda usamos hoje — como 'bedroom', 'eyeball' e 'fashionable'.", "gender": "M", "temperamento": "melancolico", "height": 172, "weight": 80, "quote": "A profundidade vem do silêncio antes da palavra.", "popularity": 70}, {"day": 24, "month": 4, "name": "Barbra Streisand", "born": 1942, "category": "Música & Cinema", "country": "EUA", "emoji": "🎤", "fact": "Uma das cantoras mais premiadas da história. Oscar, Grammy, Emmy e Tony — o EGOT completo.", "curiosity": "Tem medo de palco mesmo sendo uma das maiores estrelas do mundo. Ficou 27 anos sem fazer shows.", "gender": "F", "temperamento": "sanguineo", "height": 164, "weight": 66, "quote": "A felicidade é um caminho — não um destino.", "popularity": 45}, {"day": 25, "month": 4, "name": "Al Pacino", "born": 1940, "category": "Cinema", "country": "EUA", "emoji": "🎭", "fact": "Um dos maiores atores da história. O Poderoso Chefão e Scarface são ícones da cultura pop.", "curiosity": "Foi rejeitado em várias escolas de teatro antes de ser aceito. Os professores diziam que era muito intenso.", "gender": "M", "temperamento": "colerico", "height": 167, "weight": 72, "quote": "Quem não arrisca, não vence.", "popularity": 75}, {"day": 26, "month": 4, "name": "Dudu Nobre", "born": 1978, "category": "Música", "country": "Brasil", "emoji": "🎵", "fact": "Cantor e compositor carioca. Um dos grandes nomes do pagode e samba brasileiro.", "curiosity": "Nascido no Morro do Borel, no Rio de Janeiro. Começou cantando em rodas de samba ainda criança.", "gender": "M", "temperamento": "sanguineo", "height": 186, "weight": 74, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 67}, {"day": 27, "month": 4, "name": "Ulysses Guimarães", "born": 1916, "category": "História", "country": "Brasil", "emoji": "📜", "fact": "O 'Senhor Diretas'. Presidente da Assembleia Constituinte que promulgou a Constituição de 1988.", "curiosity": "Ficou 21 anos na oposição à ditadura. Nunca desistiu da democracia. Morreu num acidente de helicóptero.", "gender": "M", "temperamento": "melancolico", "height": 170, "weight": 87, "quote": "Os pensamentos mais belos vêm na madrugada.", "popularity": 43}, {"day": 28, "month": 4, "name": "Penélope Cruz", "born": 1974, "category": "Cinema", "country": "Espanha", "emoji": "🎬", "fact": "Atriz espanhola vencedora do Oscar. Primeira atriz espanhola a ganhar o prêmio.", "curiosity": "Trabalhou como modelo aos 15 anos para pagar aulas de dança. O cinema veio depois.", "gender": "F", "temperamento": "sanguineo", "height": 168, "weight": 56, "quote": "A elegância está em ser quem você é.", "popularity": 83}, {"day": 29, "month": 4, "name": "Jerry Seinfeld", "born": 1954, "category": "Humor & TV", "country": "EUA", "emoji": "😄", "fact": "Criador e estrela de 'Seinfeld', considerada uma das melhores séries de TV de todos os tempos.", "curiosity": "Recusou 110 milhões de dólares para fazer a 10ª temporada de Seinfeld. Parou quando era perfeito.", "gender": "M", "temperamento": "sanguineo", "height": 173, "weight": 87, "quote": "Espalhe alegria por onde passar.", "popularity": 54}, {"day": 30, "month": 4, "name": "Kirsten Dunst", "born": 1982, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Atriz famosa pela trilogia Homem-Aranha e 'Entrevista com o Vampiro'.", "curiosity": "Fez sua primeira cena de beijo no cinema aos 10 anos — com Brad Pitt em Entrevista com o Vampiro.", "gender": "F", "temperamento": "sanguineo", "height": 172, "weight": 60, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 68}, {"day": 1, "month": 5, "name": "Ana Maria Braga", "born": 1949, "category": "TV", "country": "Brasil", "emoji": "☕", "fact": "A apresentadora matinal mais famosa do Brasil. 'Mais Você' é um dos programas mais longos da TV.", "curiosity": "Nascida em São Carlos, SP. Sobreviveu a um câncer grave no pulmão e voltou mais forte do que nunca.", "gender": "F", "temperamento": "sanguineo", "height": 170, "weight": 62, "quote": "A felicidade é um caminho — não um destino.", "popularity": 60}, {"day": 2, "month": 5, "name": "Dwayne Johnson", "born": 1972, "category": "Cinema & Esporte", "country": "EUA", "emoji": "💪", "fact": "The Rock. Ex-lutador de wrestling e um dos atores mais bem pagos de Hollywood.", "curiosity": "Foi preso 3 vezes antes dos 17 anos. Mudou completamente depois de ser recortado do time de futebol.", "gender": "M", "temperamento": "colerico", "height": 196, "weight": 118, "quote": "O sucesso não é dado. É conquistado no trabalho duro e no sacrifício.", "popularity": 80}, {"day": 3, "month": 5, "name": "Bing Crosby", "born": 1903, "category": "Música", "country": "EUA", "emoji": "🎵", "fact": "Um dos cantores mais vendidos de todos os tempos. 'White Christmas' é o single mais vendido da história.", "curiosity": "Vendeu mais de 500 milhões de discos. É o terceiro artista mais vendido de todos os tempos.", "gender": "M", "temperamento": "sanguineo", "height": 173, "weight": 75, "quote": "A felicidade é um caminho — não um destino.", "popularity": 55}, {"day": 4, "month": 5, "name": "Audrey Hepburn", "born": 1929, "category": "Cinema", "country": "Bélgica", "emoji": "🎬", "fact": "Um dos maiores ícones do cinema e da moda. Venceu Oscar, Emmy, Grammy e Tony — o EGOT.", "curiosity": "Sobreviveu à ocupação nazista na Holanda passando fome severa na infância. Isso moldou seu ativismo.", "gender": "F", "temperamento": "melancolico", "height": 164, "weight": 57, "quote": "Nada é impossível. A própria palavra diz: I'm possible.", "popularity": 99}, {"day": 5, "month": 5, "name": "Adele", "born": 1988, "category": "Música", "country": "Reino Unido", "emoji": "🎤", "fact": "Uma das cantoras mais aclamadas da história. Álbun '21' vendeu mais de 31 milhões de cópias.", "curiosity": "Escreveu 'Someone Like You' no mesmo dia em que terminou um relacionamento. Levou 40 minutos.", "gender": "F", "temperamento": "melancolico", "height": 175, "weight": 73, "quote": "A dor que você sente hoje é a força que você sentirá amanhã.", "popularity": 90}, {"day": 6, "month": 5, "name": "George Clooney", "born": 1961, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Ator, diretor e produtor vencedor do Oscar. Um dos atores mais elegantes de Hollywood.", "curiosity": "Jurou que nunca se casaria de novo e era famoso pelos namoros curtos. Casou com Amal aos 53 anos.", "gender": "M", "temperamento": "colerico", "height": 180, "weight": 80, "quote": "Quem não arrisca, não vence.", "popularity": 50}, {"day": 7, "month": 5, "name": "Tchaikovsky", "born": 1840, "category": "Música Clássica", "country": "Rússia", "emoji": "🎼", "fact": "Compositor de 'Lago dos Cisnes', 'O Quebra-Nozes' e '1812'. Um dos maiores da história.", "curiosity": "Sofria de depressão severa e ansiedade. Toda essa angústia está nas suas composições mais belas.", "gender": "M", "temperamento": "melancolico", "height": 182, "weight": 78, "quote": "Aceite o que você não pode mudar. Mude o que você não pode aceitar.", "popularity": 51}, {"day": 8, "month": 5, "name": "Enrique Iglesias", "born": 1975, "category": "Música", "country": "Espanha", "emoji": "🎵", "fact": "Filho de Julio Iglesias. Tornou-se maior que o pai. Um dos artistas latinos mais vendidos da história.", "curiosity": "Escondeu a identidade do pai e enviou demos para gravadoras com outro nome para provar seu valor.", "gender": "M", "temperamento": "sanguineo", "height": 184, "weight": 66, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 71}, {"day": 9, "month": 5, "name": "Billy Joel", "born": 1949, "category": "Música", "country": "EUA", "emoji": "🎹", "fact": "O 'Piano Man'. Um dos compositores mais aclamados da história do rock americano.", "curiosity": "Abandonou a escola para trabalhar num bar como pianista. A experiência virou a música 'Piano Man'.", "gender": "M", "temperamento": "sanguineo", "height": 178, "weight": 82, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 61}, {"day": 10, "month": 5, "name": "Bono", "born": 1960, "category": "Música", "country": "Irlanda", "emoji": "🎸", "fact": "Vocalista do U2, uma das maiores bandas de rock de todos os tempos e grande ativista global.", "curiosity": "Nunca tira seus óculos coloridos em público — diz sofrer de glaucoma desde jovem.", "gender": "M", "temperamento": "colerico", "height": 176, "weight": 77, "quote": "A música pode mudar o mundo porque pode mudar as pessoas.", "popularity": 87}, {"day": 11, "month": 5, "name": "Salvador Dali", "born": 1904, "category": "Arte", "country": "Espanha", "emoji": "🎨", "fact": "O maior nome do surrealismo. Criou 'A Persistência da Memória', com os famosos relógios derretidos.", "curiosity": "Dormia sentado numa cadeira com uma chave na mão. Quando adormecia, a chave caía e o acordava — para capturar os sonhos.", "gender": "M", "temperamento": "melancolico", "height": 178, "weight": 70, "quote": "Não tenha medo da perfeição — você nunca a alcançará.", "popularity": 93}, {"day": 12, "month": 5, "name": "Florence Nightingale", "born": 1820, "category": "Ciência & Saúde", "country": "Reino Unido", "emoji": "🏥", "fact": "A fundadora da enfermagem moderna. Revolucionou os cuidados hospitalares no século XIX.", "curiosity": "Era de família nobre e recusou vários casamentos para se dedicar à medicina. Era incomum para a época.", "gender": "F", "temperamento": "melancolico", "height": 170, "weight": 59, "quote": "A profundidade vem do silêncio antes da palavra.", "popularity": 50}, {"day": 13, "month": 5, "name": "Stevie Wonder", "born": 1950, "category": "Música", "country": "EUA", "emoji": "🎹", "fact": "25 Grammys. Cego desde bebê, é um dos maiores músicos de todos os tempos.", "curiosity": "Assinou com a Motown aos 11 anos. Renovou o contrato aos 21 exigindo controle criativo total — e ganhou.", "gender": "M", "temperamento": "sanguineo", "height": 183, "weight": 90, "quote": "A música é uma das coisas mais poderosas do mundo. Tem a capacidade de curar.", "popularity": 93}, {"day": 14, "month": 5, "name": "Cate Blanchett", "born": 1969, "category": "Cinema", "country": "Austrália", "emoji": "🎬", "fact": "Atriz australiana com dois Oscars. Considerada uma das melhores atrizes de sua geração.", "curiosity": "Formou-se em teatro e economia. Usou o conhecimento em negócios para gerir o Sydney Theatre Company.", "gender": "F", "temperamento": "melancolico", "height": 174, "weight": 59, "quote": "A profundidade vem do silêncio antes da palavra.", "popularity": 85}, {"day": 15, "month": 5, "name": "Zé Ramalho", "born": 1949, "category": "Música", "country": "Brasil", "emoji": "🎸", "fact": "Um dos maiores artistas do rock e da música nordestina brasileira. Clássicos como 'A Dança dos Homens'.", "curiosity": "Nascido em Serra Redonda, Paraíba. Misturou rock progressivo com forró e baião como ninguém.", "gender": "M", "temperamento": "sanguineo", "height": 186, "weight": 69, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 47}, {"day": 16, "month": 5, "name": "Janet Jackson", "born": 1966, "category": "Música", "country": "EUA", "emoji": "🎤", "fact": "Irmã caçula dos Jacksons. Construiu carreira solo tão grande quanto a do irmão Michael.", "curiosity": "Estreou como atriz na série 'Good Times' aos 10 anos, mesmo antes de lançar música.", "gender": "F", "temperamento": "sanguineo", "height": 171, "weight": 61, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 47}, {"day": 17, "month": 5, "name": "Caetano Veloso", "born": 1942, "category": "Música", "country": "Brasil", "emoji": "🎶", "fact": "Um dos maiores compositores brasileiros. Pai do Tropicalismo e símbolo da MPB.", "curiosity": "Foi exilado pela ditadura militar em 1969 e viveu em Londres por dois anos. Voltou mais influente ainda.", "gender": "M", "temperamento": "fleumatico", "height": 175, "weight": 70, "quote": "De perto, ninguém é normal.", "popularity": 96}, {"day": 18, "month": 5, "name": "Tina Fey", "born": 1970, "category": "Humor & TV", "country": "EUA", "emoji": "😄", "fact": "Comediante, atriz e escritora. Criadora de '30 Rock' e 'Unbreakable Kimmy Schmidt'.", "curiosity": "Foi a primeira mulher a ser chefe de redação do Saturday Night Live, um dos programas mais importantes da TV.", "gender": "F", "temperamento": "sanguineo", "height": 171, "weight": 68, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 43}, {"day": 19, "month": 5, "name": "Grace Jones", "born": 1948, "category": "Música & Moda", "country": "Jamaica", "emoji": "🎵", "fact": "Cantora e modelo jamaicana. Um dos maiores ícones de moda e cultura do século XX.", "curiosity": "Tem mais de 70 anos e ainda se apresenta dançando com arco na cabeça. Uma força da natureza.", "gender": "F", "temperamento": "colerico", "height": 175, "weight": 53, "quote": "Quem espera o momento certo nunca começa.", "popularity": 43}, {"day": 20, "month": 5, "name": "Cher", "born": 1946, "category": "Música & Cinema", "country": "EUA", "emoji": "🎤", "fact": "A 'Deusa do Pop'. Único artista a ter número 1 nas paradas em 6 décadas diferentes.", "curiosity": "Venceu o Oscar por 'Loucamente Apaixonada', quando já tinha mais de 40 anos — depois de muitos duvidarem dela.", "gender": "F", "temperamento": "sanguineo", "height": 170, "weight": 54, "quote": "Em vez de procurar o homem certo, seja a mulher certa.", "popularity": 77}, {"day": 21, "month": 5, "name": "Nei Matogrosso", "born": 1941, "category": "Música", "country": "Brasil", "emoji": "🎤", "fact": "Um dos artistas mais originais da música brasileira. Voz e presença únicos.", "curiosity": "Começou no teatro antes da música. Tornou-se símbolo de liberdade artística no Brasil.", "gender": "M", "temperamento": "fleumatico", "height": 174, "weight": 77, "quote": "A paz interior vale mais que qualquer conquista.", "popularity": 67}, {"day": 22, "month": 5, "name": "Gal Costa", "born": 1945, "category": "Música", "country": "Brasil", "emoji": "🎵", "fact": "Uma das maiores vozes da MPB brasileira. Ícone do Tropicalismo ao lado de Caetano e Gil.", "curiosity": "Nascida em Salvador, BA. Sua voz foi descrita por músicos do mundo todo como 'instrumento perfeito'.", "gender": "F", "temperamento": "melancolico", "height": 163, "weight": 57, "quote": "A arte é a verdade que mente para dizer mais verdade.", "popularity": 77}, {"day": 23, "month": 5, "name": "Drew Carey", "born": 1958, "category": "Humor & TV", "country": "EUA", "emoji": "😄", "fact": "Comediante e apresentador americano. Assumiu o 'The Price is Right' depois de Bob Barker.", "curiosity": "Serviu o Exército por 6 anos antes de seguir a carreira no humor. A experiência moldou seu estilo.", "gender": "M", "temperamento": "sanguineo", "height": 175, "weight": 83, "quote": "A felicidade é um caminho — não um destino.", "popularity": 40}, {"day": 24, "month": 5, "name": "Bob Dylan", "born": 1941, "category": "Música", "country": "EUA", "emoji": "🎸", "fact": "O maior letrista da história do rock. Vencedor do Nobel de Literatura em 2016.", "curiosity": "Foi o primeiro músico de rock a ganhar o Nobel de Literatura. Demorou semanas para responder ao comitê.", "gender": "M", "temperamento": "melancolico", "height": 186, "weight": 66, "quote": "Quem sente mais, vive mais.", "popularity": 69}, {"day": 25, "month": 5, "name": "Ian McKellen", "born": 1939, "category": "Cinema", "country": "Reino Unido", "emoji": "🧙", "fact": "O eterno Gandalf de 'O Senhor dos Anéis' e Magneto de 'X-Men'. Grande nome do cinema britânico.", "curiosity": "Assumiu sua sexualidade aos 49 anos ao vivo no rádio. Diz que se sente completamente livre desde então.", "gender": "M", "temperamento": "melancolico", "height": 180, "weight": 81, "quote": "Os pensamentos mais belos vêm na madrugada.", "popularity": 63}, {"day": 26, "month": 5, "name": "Lenny Kravitz", "born": 1964, "category": "Música", "country": "EUA", "emoji": "🎸", "fact": "Músico e produtor que mistura rock, soul, funk e R&B. 4 Grammys consecutivos — recorde histórico.", "curiosity": "Toca todos os instrumentos nas gravações e produz tudo sozinho. Perfeccionista absoluto.", "gender": "M", "temperamento": "melancolico", "height": 170, "weight": 69, "quote": "A arte é a verdade que mente para dizer mais verdade.", "popularity": 57}, {"day": 27, "month": 5, "name": "Ivete Sangalo", "born": 1972, "category": "Música", "country": "Brasil", "emoji": "🎤", "fact": "A maior artista baiana do país. Uma das cantoras mais queridas da história da música brasileira.", "curiosity": "Nascida em Juazeiro, Bahia. Mãe de trigêmeas. Voltou aos palcos semanas após o parto.", "gender": "F", "temperamento": "sanguineo", "height": 178, "weight": 65, "quote": "A vida é muito curta para ser vivida de forma medíocre.", "popularity": 94}, {"day": 28, "month": 5, "name": "Kylie Minogue", "born": 1968, "category": "Música", "country": "Austrália", "emoji": "🎵", "fact": "A 'Princesa do Pop' australiana. Superou um câncer de mama e voltou mais forte do que nunca.", "curiosity": "Fez um show no Glastonbury 2019 que muitos chamam do melhor da história do festival.", "gender": "F", "temperamento": "sanguineo", "height": 172, "weight": 63, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 63}, {"day": 29, "month": 5, "name": "Bob Hope", "born": 1903, "category": "Humor & TV", "country": "EUA", "emoji": "😄", "fact": "Um dos maiores comediantes da história americana. Entreteve tropas durante 5 guerras.", "curiosity": "Viveu até os 100 anos e quando perguntado sobre o segredo, respondeu: 'Não morrer'.", "gender": "M", "temperamento": "sanguineo", "height": 179, "weight": 73, "quote": "A felicidade é um caminho — não um destino.", "popularity": 40}, {"day": 30, "month": 5, "name": "Bela Gil", "born": 1984, "category": "Gastronomia & TV", "country": "Brasil", "emoji": "🌿", "fact": "Chef, apresentadora e filha de Gilberto Gil. Pioneira da gastronomia saudável no Brasil.", "curiosity": "Formou-se em nutrição em Nova York e trouxe a culinária natural para o mainstream brasileiro.", "gender": "F", "temperamento": "sanguineo", "height": 158, "weight": 59, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 42}, {"day": 31, "month": 5, "name": "Brooke Shields", "born": 1965, "category": "Cinema & Moda", "country": "EUA", "emoji": "🎬", "fact": "Atriz e modelo americana. Uma das faces mais famosas dos anos 80 e 90.", "curiosity": "Começou a modelar aos 11 meses de vida. Apareceu em mais de 30 capas de revistas antes dos 12 anos.", "gender": "F", "temperamento": "fleumatico", "height": 180, "weight": 49, "quote": "Pequenos passos firmes vão mais longe que grandes saltos.", "popularity": 63}, {"day": 1, "month": 6, "name": "Alanis Morissette", "born": 1974, "category": "Música", "country": "Canadá", "emoji": "🎤", "fact": "Cantora que definiu o rock alternativo dos anos 90. 'Jagged Little Pill' vendeu 33 milhões de cópias.", "curiosity": "Gravou 'Jagged Little Pill' em apenas 3 semanas. O disco virou o álbum mais vendido dos anos 90.", "gender": "F", "temperamento": "sanguineo", "height": 159, "weight": 67, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 51}, {"day": 2, "month": 6, "name": "Morena Baccarin", "born": 1979, "category": "Cinema & TV", "country": "Brasil", "emoji": "🎬", "fact": "Atriz brasileira radicada nos EUA. Famosa por 'Deadpool', 'Homeland' e 'Firefly'.", "curiosity": "Nascida no Rio de Janeiro. Mudou para os EUA na infância e construiu carreira em Hollywood.", "gender": "F", "temperamento": "sanguineo", "height": 171, "weight": 54, "quote": "A felicidade é um caminho — não um destino.", "popularity": 60}, {"day": 3, "month": 6, "name": "Rafael Nadal", "born": 1986, "category": "Esporte", "country": "Espanha", "emoji": "🎾", "fact": "O 'Rei do Saibro'. 22 títulos de Grand Slam. Um dos maiores tenistas da história.", "curiosity": "Tem rituais supersticiosos famosos: arruma as garrafinhas com perfeição e nunca pisa na linha do campo.", "gender": "M", "temperamento": "colerico", "height": 185, "weight": 85, "quote": "Eu sempre digo: tudo o que vale a pena tem que custar muito.", "popularity": 85}, {"day": 4, "month": 6, "name": "Angelina Jolie", "born": 1975, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Atriz vencedora do Oscar, diretora e humanitária. Embaixadora da ONU por mais de 20 anos.", "curiosity": "Adotou 3 dos seus 6 filhos. Faz missões humanitárias em zonas de guerra há mais de duas décadas.", "gender": "F", "temperamento": "sanguineo", "height": 170, "weight": 56, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 62}, {"day": 5, "month": 6, "name": "Mark Wahlberg", "born": 1971, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Ator e produtor. De músico de rap a um dos mais bem-sucedidos de Hollywood.", "curiosity": "Começou como Marky Mark, rapper. Quase foi ao Titanic mas cancelou por causa de um papel em filme.", "gender": "M", "temperamento": "colerico", "height": 174, "weight": 87, "quote": "Faça acontecer. Ninguém vai fazer por você.", "popularity": 67}, {"day": 6, "month": 6, "name": "Björk", "born": 1965, "category": "Música", "country": "Islândia", "emoji": "🎵", "fact": "Cantora islandesa única no mundo. Uma das artistas mais experimentais e criativas da história.", "curiosity": "Lançou seu primeiro álbum solo aos 11 anos na Islândia. O país inteiro a conhecia antes dos 12.", "gender": "F", "temperamento": "melancolico", "height": 165, "weight": 57, "quote": "A profundidade vem do silêncio antes da palavra.", "popularity": 60}, {"day": 7, "month": 6, "name": "Prince", "born": 1958, "category": "Música", "country": "EUA", "emoji": "🎸", "fact": "Um dos maiores músicos de todos os tempos. 'Purple Rain' é considerado um dos melhores álbuns da história.", "curiosity": "Tocava mais de 27 instrumentos. Gravava suas músicas inteiro sozinho — sem banda.", "gender": "M", "temperamento": "sanguineo", "height": 178, "weight": 82, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 48}, {"day": 8, "month": 6, "name": "Kanye West", "born": 1977, "category": "Música", "country": "EUA", "emoji": "🎵", "fact": "Um dos produtores e artistas mais influentes do hip-hop moderno. 24 Grammys.", "curiosity": "Gravou 'Jesus Walks' e 'Through the Wire' com o maxilar quebrado e com fio dental na boca.", "gender": "M", "temperamento": "colerico", "height": 173, "weight": 89, "quote": "Quem não arrisca, não vence.", "popularity": 80}, {"day": 9, "month": 6, "name": "Natalie Portman", "born": 1981, "category": "Cinema", "country": "Israel", "emoji": "🎬", "fact": "Atriz vencedora do Oscar por 'Cisne Negro'. Também formada em psicologia em Harvard.", "curiosity": "Recusou papéis em Star Wars inicialmente. Só topou depois de ler o roteiro completo e confiar em Lucas.", "gender": "F", "temperamento": "melancolico", "height": 171, "weight": 65, "quote": "Quem sente mais, vive mais.", "popularity": 69}, {"day": 10, "month": 6, "name": "Gustavo Kuerten", "born": 1976, "category": "Esporte", "country": "Brasil", "emoji": "🎾", "fact": "Guga. O maior tenista brasileiro da história. Tricampeão de Roland Garros.", "curiosity": "Nascido em Florianópolis, SC. Depois de vencer Roland Garros pela primeira vez, desenhou um coração na areia.", "gender": "M", "temperamento": "colerico", "height": 180, "weight": 86, "quote": "A vida não recompensa quem hesita.", "popularity": 59}, {"day": 11, "month": 6, "name": "Peter Dinklage", "born": 1969, "category": "Cinema & TV", "country": "EUA", "emoji": "🎭", "fact": "Ator famoso por Tyrion Lannister em 'Game of Thrones'. Vencedor de 4 Emmy Awards.", "curiosity": "Recusou papéis de anão e duende por anos. Só aceitava personagens com profundidade e dignidade.", "gender": "M", "temperamento": "sanguineo", "height": 176, "weight": 88, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 52}, {"day": 12, "month": 6, "name": "Adriana Lima", "born": 1981, "category": "Moda", "country": "Brasil", "emoji": "👗", "fact": "Supermodelo baiana. Angel da Victoria's Secret por 18 anos — o mais longo da história.", "curiosity": "Nascida em Salvador, BA. Descoberta num concurso de modelagem aos 13 anos por sua mãe.", "gender": "F", "temperamento": "colerico", "height": 178, "weight": 57, "quote": "Quem não arrisca, não vence.", "popularity": 70}, {"day": 13, "month": 6, "name": "Leandro", "born": 1961, "category": "Música", "country": "Brasil", "emoji": "🎵", "fact": "Leandro, da dupla Leandro & Leonardo. Um dos maiores ídolos da música sertaneja brasileira.", "curiosity": "A dupla vendeu mais de 30 milhões de discos. Leandro faleceu em 1998, deixando uma das maiores saudades do sertanejo.", "gender": "M", "temperamento": "sanguineo", "height": 179, "weight": 78, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 62}, {"day": 14, "month": 6, "name": "Boy George", "born": 1961, "category": "Música", "country": "Reino Unido", "emoji": "🎤", "fact": "Vocalista do Culture Club. Ícone dos anos 80 com hits como 'Karma Chameleon'.", "curiosity": "Seu visual andrógino chocou o mundo nos anos 80 e abriu caminho para toda uma geração.", "gender": "M", "temperamento": "sanguineo", "height": 181, "weight": 80, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 61}, {"day": 15, "month": 6, "name": "Neil Patrick Harris", "born": 1973, "category": "TV & Teatro", "country": "EUA", "emoji": "🎭", "fact": "Ator famoso por 'How I Met Your Mother' e apresentador brilhante do Tony Awards.", "curiosity": "Era criança prodígio do teatro americano. Estreou como ator profissional aos 14 anos.", "gender": "M", "temperamento": "fleumatico", "height": 186, "weight": 80, "quote": "Calma é a maior virtude em tempos difíceis.", "popularity": 40}, {"day": 16, "month": 6, "name": "Tupac Shakur", "born": 1971, "category": "Música", "country": "EUA", "emoji": "🎤", "fact": "Um dos maiores rappers da história. Ícone cultural que transcendeu a música.", "curiosity": "Estudou artes performáticas e balé antes do rap. A dança e o teatro moldaram sua presença de palco.", "gender": "M", "temperamento": "sanguineo", "height": 173, "weight": 73, "quote": "Espalhe alegria por onde passar.", "popularity": 64}, {"day": 17, "month": 6, "name": "Tite", "born": 1961, "category": "Esporte", "country": "Brasil", "emoji": "⚽", "fact": "Treinador multicampeão pelo Corinthians e técnico da Seleção Brasileira.", "curiosity": "Ganhou o Mundial de Clubes em 2012 pelo Corinthians derrotando o Chelsea de Mourinho.", "gender": "M", "temperamento": "fleumatico", "height": 181, "weight": 71, "quote": "O que tem que ser, será — sem pressa.", "popularity": 61}, {"day": 18, "month": 6, "name": "Paul McCartney", "born": 1942, "category": "Música", "country": "Reino Unido", "emoji": "🎸", "fact": "Co-fundador dos Beatles. Uma das figuras mais importantes da história da música popular.", "curiosity": "É destro, mas aprendeu a tocar violão com as cordas invertidas porque era canhoto. E nunca mudou.", "gender": "M", "temperamento": "sanguineo", "height": 180, "weight": 75, "quote": "Há uma resposta. Deixe que seja.", "popularity": 100}, {"day": 19, "month": 6, "name": "Paula Abdul", "born": 1962, "category": "Música & TV", "country": "EUA", "emoji": "💃", "fact": "Cantora, dançarina e jurada do American Idol. Coreografou videoclipes de Janet Jackson e outros.", "curiosity": "Começou como cheerleader dos LA Lakers. Foi contratada por Janet Jackson depois de um treino de basquete.", "gender": "F", "temperamento": "fleumatico", "height": 163, "weight": 52, "quote": "A paz interior vale mais que qualquer conquista.", "popularity": 57}, {"day": 20, "month": 6, "name": "Nicole Kidman", "born": 1967, "category": "Cinema", "country": "Austrália", "emoji": "🎬", "fact": "Atriz australiana com Oscar, SAG, BAFTA e Globo de Ouro. Uma das maiores de sua geração.", "curiosity": "Nasceu em Havaí e cresceu na Austrália. Seu sotaque australiano some completamente quando atua.", "gender": "F", "temperamento": "sanguineo", "height": 180, "weight": 58, "quote": "O que você não fala te define mais do que o que fala.", "popularity": 77}, {"day": 21, "month": 6, "name": "Prince William", "born": 1982, "category": "Realeza", "country": "Reino Unido", "emoji": "👑", "fact": "Príncipe de Gales. Futuro rei da Inglaterra. Filho do Rei Charles e da Princesa Diana.", "curiosity": "Serviu como piloto de helicóptero de resgate e salvou vidas reais antes de assumir deveres reais.", "gender": "M", "temperamento": "fleumatico", "height": 177, "weight": 84, "quote": "Pequenos passos firmes vão mais longe que grandes saltos.", "popularity": 68}, {"day": 22, "month": 6, "name": "Meryl Streep", "born": 1949, "category": "Cinema", "country": "EUA", "emoji": "🏆", "fact": "A atriz mais premiada da história do cinema. 21 indicações ao Oscar e 3 vitórias.", "curiosity": "Aprendeu a cozinhar comida polaca, a tocar harpa e a falar seis idiomas diferentes para seus papéis.", "gender": "F", "temperamento": "melancolico", "height": 168, "weight": 61, "quote": "O grande presente da vida é a capacidade de se reinventar.", "popularity": 75}, {"day": 23, "month": 6, "name": "Zinedine Zidane", "born": 1972, "category": "Esporte", "country": "França", "emoji": "⚽", "fact": "Um dos maiores jogadores da história. Tricampeão da Champions League como técnico do Real Madrid.", "curiosity": "Filho de imigrantes argelinos. Sua cabelada em Materazzi na Copa de 2006 é a mais famosa da história.", "gender": "M", "temperamento": "fleumatico", "height": 181, "weight": 69, "quote": "O que tem que ser, será — sem pressa.", "popularity": 46}, {"day": 24, "month": 6, "name": "Lionel Messi", "born": 1987, "category": "Esporte", "country": "Argentina", "emoji": "⚽", "fact": "Considerado por muitos o maior jogador da história. 8 Bolas de Ouro e campeão mundial em 2022.", "curiosity": "Tinha problema de crescimento na infância. O Barcelona pagou o tratamento hormonal e ganhou um gênio.", "gender": "M", "temperamento": "fleumatico", "height": 170, "weight": 72, "quote": "Você deve lutar para alcançar seu sonho, mas nunca deixar que ele pare de ser um sonho.", "popularity": 95}, {"day": 25, "month": 6, "name": "Michael Jackson", "born": 1958, "category": "Música", "country": "EUA", "emoji": "🕺", "fact": "O Rei do Pop. 'Thriller' é o álbum mais vendido de todos os tempos. 750 milhões de cópias.", "curiosity": "Criou o moonwalk assistindo a danças de Fred Astaire e James Brown. Aperfeiçoou e eternizou o movimento.", "gender": "M", "temperamento": "melancolico", "height": 175, "weight": 58, "quote": "Se você entra no mundo querendo ser amado por todos, você vai ficar magoado muitas vezes.", "popularity": 91}, {"day": 26, "month": 6, "name": "Ariana Grande", "born": 1993, "category": "Música", "country": "EUA", "emoji": "🎤", "fact": "Uma das artistas mais ouvidas do streaming. Quarta artista com mais de 1 bilhão de streams mensais.", "curiosity": "Tem medo de altura apesar de usar plataformas altíssimas nos shows. Ensaia com terapia para superar.", "gender": "F", "temperamento": "sanguineo", "height": 153, "weight": 47, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 81}, {"day": 27, "month": 6, "name": "Fernanda Montenegro", "born": 1929, "category": "Cinema", "country": "Brasil", "emoji": "🏆", "fact": "A maior atriz brasileira da história. Indicada ao Oscar por 'Central do Brasil' em 1999.", "curiosity": "Nascida no Rio de Janeiro. Sua indicação foi a primeira de uma atriz latino-americana em papel principal.", "gender": "F", "temperamento": "melancolico", "height": 159, "weight": 53, "quote": "A profundidade vem do silêncio antes da palavra.", "popularity": 75}, {"day": 28, "month": 6, "name": "Elon Musk", "born": 1971, "category": "Tecnologia & Negócios", "country": "África do Sul", "emoji": "🚀", "fact": "Fundador da Tesla, SpaceX e X. Um dos empresários mais influentes e polêmicos do século XXI.", "curiosity": "Leu a Encyclopaedia Britannica inteira aos 9 anos. E depois de terminar, leu todos os quadrinhos da biblioteca.", "gender": "M", "temperamento": "colerico", "height": 188, "weight": 82, "quote": "Quando algo é suficientemente importante, você tenta mesmo que as probabilidades não estejam a seu favor.", "popularity": 90}, {"day": 29, "month": 6, "name": "Antoine de Saint-Exupéry", "born": 1900, "category": "Literatura", "country": "França", "emoji": "📖", "fact": "Autor de 'O Pequeno Príncipe', o livro mais traduzido da história depois da Bíblia.", "curiosity": "Era piloto de guerra e escreveu o livro num trem. Desapareceu numa missão de reconhecimento em 1944.", "gender": "M", "temperamento": "melancolico", "height": 177, "weight": 70, "quote": "Aqueles que passam por nós não vão sós. Deixam um pouco de si.", "popularity": 61}, {"day": 30, "month": 6, "name": "Mike Tyson", "born": 1966, "category": "Esporte", "country": "EUA", "emoji": "🥊", "fact": "O mais jovem campeão mundial dos pesos pesados da história, com apenas 20 anos.", "curiosity": "Começou a boxear na prisão juvenil. O treinador Cus D'Amato viu nele um potencial extraordinário.", "gender": "M", "temperamento": "colerico", "height": 178, "weight": 100, "quote": "Todo mundo tem um plano até levar o primeiro soco na cara.", "popularity": 85}, {"day": 1, "month": 7, "name": "Diana Spencer", "born": 1961, "category": "Realeza", "country": "Reino Unido", "emoji": "👑", "fact": "A Princesa Diana. O membro mais amado da família real britânica de todos os tempos.", "curiosity": "Era tímida e insegura antes de se casar com Charles. A coragem que mostrou ao mundo veio depois.", "gender": "F", "temperamento": "melancolico", "height": 178, "weight": 58, "quote": "Faça apenas três coisas — ame, ria e seja feliz.", "popularity": 90}, {"day": 2, "month": 7, "name": "Margot Robbie", "born": 1990, "category": "Cinema", "country": "Austrália", "emoji": "🎬", "fact": "Atriz australiana. De 'O Lobo de Wall Street' à Barbie — uma das mais versáteis de Hollywood.", "curiosity": "Nascida em Dalby, Queensland. Trabalhou como garçonete e vendedora antes de ir para Hollywood.", "gender": "F", "temperamento": "sanguineo", "height": 168, "weight": 57, "quote": "Eu prefiro tentar e falhar do que viver com 'e se?'.", "popularity": 85}, {"day": 3, "month": 7, "name": "Tom Cruise", "born": 1962, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Um dos maiores astros de Hollywood. Faz suas próprias acrobacias em Missão Impossível.", "curiosity": "Tem dislexia diagnosticada. Memoriza todos os roteiros ouvindo gravações de áudio.", "gender": "M", "temperamento": "sanguineo", "height": 170, "weight": 72, "quote": "Eu nunca tirei o pé do acelerador.", "popularity": 96}, {"day": 4, "month": 7, "name": "Post Malone", "born": 1995, "category": "Música", "country": "EUA", "emoji": "🎵", "fact": "Um dos artistas de hip-hop e pop mais ouvidos da sua geração. Recorde de streaming no Spotify.", "curiosity": "Aprendeu a tocar guitarra assistindo a tutoriais no YouTube. Nunca teve aula formal de música.", "gender": "M", "temperamento": "sanguineo", "height": 183, "weight": 97, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 53}, {"day": 5, "month": 7, "name": "Renato Russo", "born": 1960, "category": "Música", "country": "Brasil", "emoji": "🎸", "fact": "Fundador da Legião Urbana. Um dos maiores poetas do rock brasileiro de todos os tempos.", "curiosity": "Nascido no Rio, criado em Brasília. 'Tempo Perdido' e 'Monte Castelo' são hinos de gerações inteiras.", "gender": "M", "temperamento": "melancolico", "height": 185, "weight": 78, "quote": "O amor é necessário para a sobrevivência humana.", "popularity": 85}, {"day": 6, "month": 7, "name": "Frida Kahlo", "born": 1907, "category": "Arte", "country": "México", "emoji": "🎨", "fact": "A pintora mexicana mais famosa do mundo. Seus autorretratos são obras únicas e marcantes.", "curiosity": "Sofreu um grave acidente de ônibus aos 18 anos. Começou a pintar enquanto se recuperava na cama.", "gender": "F", "temperamento": "melancolico", "height": 162, "weight": 55, "quote": "Pinto a mim mesma porque sou o tema que melhor conheço.", "popularity": 99}, {"day": 7, "month": 7, "name": "Ringo Starr", "born": 1940, "category": "Música", "country": "Reino Unido", "emoji": "🥁", "fact": "Baterista dos Beatles. Um dos grupos mais importantes da história da música.", "curiosity": "Era o último a entrar nos Beatles — substituiu Pete Best às vésperas da fama. Timing perfeito.", "gender": "M", "temperamento": "sanguineo", "height": 171, "weight": 76, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 48}, {"day": 8, "month": 7, "name": "Jaden Smith", "born": 1998, "category": "Música & Cinema", "country": "EUA", "emoji": "🎵", "fact": "Filho de Will Smith. Ator e músico com carreira sólida e estilo único.", "curiosity": "Estreou no cinema aos 7 anos ao lado do pai em 'À Procura da Felicidade'. Hoje é músico independente.", "gender": "M", "temperamento": "sanguineo", "height": 172, "weight": 82, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 56}, {"day": 9, "month": 7, "name": "Jack White", "born": 1975, "category": "Música", "country": "EUA", "emoji": "🎸", "fact": "Guitarrista e vocalista do White Stripes. Um dos maiores guitarristas do rock moderno.", "curiosity": "No White Stripes tocava com uma baterista que apresentava como irmã. Era na verdade sua ex-esposa.", "gender": "M", "temperamento": "sanguineo", "height": 177, "weight": 74, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 63}, {"day": 10, "month": 7, "name": "Sofia Vergara", "born": 1972, "category": "TV & Cinema", "country": "Colômbia", "emoji": "🎬", "fact": "Atriz colombiana. Famosa por 'Modern Family'. A atriz mais bem paga da TV americana por anos.", "curiosity": "Formada em odontologia antes de virar atriz. Abandonou o curso no último semestre para seguir o sonho.", "gender": "F", "temperamento": "sanguineo", "height": 170, "weight": 63, "quote": "Aceite seus defeitos. Eles te tornam único.", "popularity": 86}, {"day": 11, "month": 7, "name": "Giorgio Armani", "born": 1934, "category": "Moda", "country": "Itália", "emoji": "👔", "fact": "Um dos maiores estilistas da história. Revolucionou o terno masculino nas décadas de 70 e 80.", "curiosity": "Começou a trabalhar como visual merchandiser numa loja de departamentos antes de criar sua marca.", "gender": "M", "temperamento": "colerico", "height": 190, "weight": 72, "quote": "Quem espera o momento certo nunca começa.", "popularity": 63}, {"day": 12, "month": 7, "name": "Malala Yousafzai", "born": 1997, "category": "Ativismo", "country": "Paquistão", "emoji": "✊", "fact": "A mais jovem ganhadora do Nobel da Paz. Sobreviveu a um atentado por defender a educação feminina.", "curiosity": "Levou um tiro na cabeça aos 15 anos. Se recuperou completamente e se tornou símbolo global.", "gender": "F", "temperamento": "colerico", "height": 160, "weight": 52, "quote": "Uma criança, um professor, um livro e uma caneta podem mudar o mundo.", "popularity": 92}, {"day": 13, "month": 7, "name": "Harrison Ford", "born": 1942, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "O Han Solo e Indiana Jones. Um dos atores mais bem-sucedidos da história de Hollywood.", "curiosity": "Era carpinteiro e instalava portas em Hollywood quando foi escalado para Star Wars por acaso.", "gender": "M", "temperamento": "sanguineo", "height": 174, "weight": 89, "quote": "Espalhe alegria por onde passar.", "popularity": 44}, {"day": 14, "month": 7, "name": "Gisele Bündchen", "born": 1980, "category": "Moda", "country": "Brasil", "emoji": "👗", "fact": "A supermodelo mais famosa do mundo. A mais bem paga do planeta por 14 anos consecutivos.", "curiosity": "Nascida em Horizontina, RS. Descoberta num shopping em Porto Alegre aos 13 anos.", "gender": "F", "temperamento": "colerico", "height": 180, "weight": 57, "quote": "Faça acontecer. Ninguém vai fazer por você.", "popularity": 96}, {"day": 15, "month": 7, "name": "Forest Whitaker", "born": 1961, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Ator vencedor do Oscar por 'O Último Rei da Escócia'. Um dos mais versáteis de Hollywood.", "curiosity": "Estudou canto lírico antes de mudar para atuação. A musicalidade que ele tem vem dessa formação.", "gender": "M", "temperamento": "melancolico", "height": 185, "weight": 73, "quote": "A profundidade vem do silêncio antes da palavra.", "popularity": 65}, {"day": 16, "month": 7, "name": "Will Ferrell", "born": 1967, "category": "Humor & Cinema", "country": "EUA", "emoji": "😄", "fact": "Um dos comediantes mais queridos de Hollywood. 'Anchorman' e 'Elf' são clássicos do gênero.", "curiosity": "Se formou em economia antes de ir para o Saturday Night Live. Nunca chegou a trabalhar na área.", "gender": "M", "temperamento": "sanguineo", "height": 190, "weight": 95, "quote": "A felicidade é um caminho — não um destino.", "popularity": 55}, {"day": 17, "month": 7, "name": "David Hasselhoff", "born": 1952, "category": "TV", "country": "EUA", "emoji": "📺", "fact": "Ator famoso por 'Knight Rider' e 'Baywatch'. Um dos atores mais reconhecidos do mundo nos anos 80.", "curiosity": "Cantou no Muro de Berlim na noite da queda em 1989. É considerado herói na Alemanha até hoje.", "gender": "M", "temperamento": "sanguineo", "height": 185, "weight": 79, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 56}, {"day": 18, "month": 7, "name": "Vin Diesel", "born": 1967, "category": "Cinema", "country": "EUA", "emoji": "🚗", "fact": "Ator e produtor. O Dom Toretto da franquia Velozes e Furiosos — uma das mais rentáveis da história.", "curiosity": "Começou como segurança de boate em Nova York antes de conquistar Hollywood.", "gender": "M", "temperamento": "colerico", "height": 182, "weight": 102, "quote": "Quem espera o momento certo nunca começa.", "popularity": 78}, {"day": 19, "month": 7, "name": "Brian May", "born": 1947, "category": "Música", "country": "Reino Unido", "emoji": "🎸", "fact": "Guitarrista do Queen. Um dos maiores guitarristas da história do rock.", "curiosity": "Tem doutorado em Astrofísica pela Universidade de Londres. Um dos poucos PhD's do rock.", "gender": "M", "temperamento": "sanguineo", "height": 176, "weight": 69, "quote": "Espalhe alegria por onde passar.", "popularity": 74}, {"day": 20, "month": 7, "name": "Sandra Bullock", "born": 1964, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Atriz vencedora do Oscar por 'Um Sonho Possível'. Uma das atrizes mais queridas de Hollywood.", "curiosity": "Fala alemão fluente — aprendeu na infância porque sua mãe era cantora de ópera alemã.", "gender": "F", "temperamento": "sanguineo", "height": 171, "weight": 59, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 77}, {"day": 21, "month": 7, "name": "Robin Williams", "born": 1951, "category": "Humor & Cinema", "country": "EUA", "emoji": "😄", "fact": "Um dos maiores comediantes da história. Gênio no improviso e vencedor do Oscar por 'Gênio Indomável'.", "curiosity": "Era tão tímido na escola que mal falava. O humor surgiu como escudo contra o bullying.", "gender": "M", "temperamento": "melancolico", "height": 175, "weight": 78, "quote": "Você é apenas tão bom quanto o amor que você se dá.", "popularity": 78}, {"day": 22, "month": 7, "name": "Marília Mendonça", "born": 1995, "category": "Música", "country": "Brasil", "emoji": "🎤", "fact": "A 'Rainha da Sofrência'. Uma das cantoras mais amadas da história da música sertaneja.", "curiosity": "Nascida em Cristianópolis, GO. Começou a compor músicas aos 12 anos. Faleceu em 2021 num acidente aéreo.", "gender": "F", "temperamento": "melancolico", "height": 165, "weight": 78, "quote": "A vida é feita de momentos. Aproveite cada um.", "popularity": 94}, {"day": 23, "month": 7, "name": "Daniel Radcliffe", "born": 1989, "category": "Cinema", "country": "Reino Unido", "emoji": "🧙", "fact": "O eterno Harry Potter. Um dos atores mais famosos de sua geração.", "curiosity": "Tem dispraxia — dificuldade de coordenação motora. Por isso não consegue amarrar o próprio tênis direito.", "gender": "M", "temperamento": "melancolico", "height": 165, "weight": 64, "quote": "Aceite o que você não pode mudar. Mude o que você não pode aceitar.", "popularity": 76}, {"day": 24, "month": 7, "name": "Jennifer Lopez", "born": 1969, "category": "Música & Cinema", "country": "EUA", "emoji": "💃", "fact": "A JLo. Cantora, atriz e empresária. Uma das artistas mais bem-sucedidas da história latina.", "curiosity": "Começou como dançarina no In Living Color antes de gravar seu primeiro álbum. A dança sempre foi primeiro.", "gender": "F", "temperamento": "colerico", "height": 164, "weight": 57, "quote": "Você precisa amar a si mesmo antes de qualquer outra coisa.", "popularity": 83}, {"day": 25, "month": 7, "name": "Matt LeBlanc", "born": 1967, "category": "TV", "country": "EUA", "emoji": "📺", "fact": "O Joey Tribbiani de 'Friends'. Um dos personagens mais amados da história da televisão.", "curiosity": "Tinha apenas 11 dólares na conta quando foi escalado para Friends. A série mudou tudo.", "gender": "M", "temperamento": "sanguineo", "height": 173, "weight": 87, "quote": "Espalhe alegria por onde passar.", "popularity": 49}, {"day": 26, "month": 7, "name": "Mick Jagger", "born": 1943, "category": "Música", "country": "Reino Unido", "emoji": "🎤", "fact": "Vocalista dos Rolling Stones. Uma das maiores bandas de rock de todos os tempos.", "curiosity": "Estudou na London School of Economics antes de abandonar tudo pelos Rolling Stones.", "gender": "M", "temperamento": "sanguineo", "height": 173, "weight": 65, "quote": "Você não pode sempre conseguir o que quer, mas se tentar, consegue o que precisa.", "popularity": 85}, {"day": 27, "month": 7, "name": "Maisa Silva", "born": 2002, "category": "TV & Cinema", "country": "Brasil", "emoji": "⭐", "fact": "Apresentadora e atriz brasileira. Uma das personalidades mais seguidas do Brasil nas redes.", "curiosity": "Nascida em Jundiaí, SP. Estreou no SBT aos 4 anos e nunca mais saiu do coração do público.", "gender": "F", "temperamento": "sanguineo", "height": 158, "weight": 50, "quote": "Espalhe alegria por onde passar.", "popularity": 84}, {"day": 28, "month": 7, "name": "Beatriz Segall", "born": 1926, "category": "Cinema & TV", "country": "Brasil", "emoji": "🎭", "fact": "Uma das maiores atrizes da história do teatro e da televisão brasileira.", "curiosity": "Atuou por mais de 60 anos, marcando gerações inteiras com vilãs e protagonistas inesquecíveis.", "gender": "F", "temperamento": "melancolico", "height": 164, "weight": 63, "quote": "A profundidade vem do silêncio antes da palavra.", "popularity": 65}, {"day": 29, "month": 7, "name": "Zé Felipe", "born": 1998, "category": "Música", "country": "Brasil", "emoji": "🎵", "fact": "Cantor sertanejo e filho de Leonardo. Um dos nomes mais populares do sertanejo atual.", "curiosity": "Cresceu rodeado de música pela família. Casado com a influenciadora Virgínia Fonseca.", "gender": "M", "temperamento": "sanguineo", "height": 183, "weight": 79, "quote": "Espalhe alegria por onde passar.", "popularity": 69}, {"day": 30, "month": 7, "name": "Arnold Schwarzenegger", "born": 1947, "category": "Cinema & Esporte", "country": "Áustria", "emoji": "💪", "fact": "Multicampeão de musculação, ator icônico (O Exterminador do Futuro) e ex-governador da Califórnia.", "curiosity": "Chegou nos EUA sem falar inglês e sem dinheiro. Virou milionário com imóveis antes de ser ator.", "gender": "M", "temperamento": "colerico", "height": 188, "weight": 113, "quote": "O impossível leva um pouco mais de tempo.", "popularity": 81}, {"day": 31, "month": 7, "name": "J. K. Rowling", "born": 1965, "category": "Literatura", "country": "Reino Unido", "emoji": "🧙", "fact": "Criadora de Harry Potter. A série mais vendida da história da literatura infantojuvenil.", "curiosity": "Escreveu o primeiro Harry Potter em cafés de Edimburgo enquanto era mãe solteira vivendo de assistência social.", "gender": "F", "temperamento": "melancolico", "height": 165, "weight": 55, "quote": "Quem sente mais, vive mais.", "popularity": 59}, {"day": 1, "month": 8, "name": "Caio Castro", "born": 1989, "category": "TV & Cinema", "country": "Brasil", "emoji": "🎬", "fact": "Ator e piloto de corrida brasileiro. Um dos galãs mais famosos das novelas brasileiras.", "curiosity": "Larga a atuação periodicamente para correr em campeonatos de automobilismo. A velocidade é sua segunda paixão.", "gender": "M", "temperamento": "sanguineo", "height": 183, "weight": 80, "quote": "A felicidade é um caminho — não um destino.", "popularity": 85}, {"day": 2, "month": 8, "name": "Edward Norton", "born": 1969, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Ator e diretor de 'Clube da Luta' e 'American History X'. Um dos mais talentosos de Hollywood.", "curiosity": "Formou-se em história japonesa em Yale. Só foi para Hollywood depois de se formar.", "gender": "M", "temperamento": "melancolico", "height": 178, "weight": 75, "quote": "A profundidade vem do silêncio antes da palavra.", "popularity": 80}, {"day": 3, "month": 8, "name": "Tom Brady", "born": 1977, "category": "Esporte", "country": "EUA", "emoji": "🏈", "fact": "O maior quarterback da história da NFL. 7 títulos do Super Bowl — o recorde absoluto.", "curiosity": "Foi escolhido apenas na 6ª rodada do draft. Todos os times do mundo passaram por ele antes dos Patriots.", "gender": "M", "temperamento": "colerico", "height": 196, "weight": 102, "quote": "Você ganha algumas vezes. Outras, você aprende.", "popularity": 75}, {"day": 4, "month": 8, "name": "Barack Obama", "born": 1961, "category": "História", "country": "EUA", "emoji": "🌟", "fact": "O 44º presidente dos EUA e o primeiro afroamericano a ocupar o cargo. Prêmio Nobel da Paz.", "curiosity": "Ganhou o Nobel da Paz antes de completar um ano de mandato. Ele próprio ficou surpreso com o prêmio.", "gender": "M", "temperamento": "colerico", "height": 185, "weight": 82, "quote": "Mudança não virá se esperarmos por outra pessoa.", "popularity": 100}, {"day": 5, "month": 8, "name": "Romário", "born": 1966, "category": "Esporte", "country": "Brasil", "emoji": "⚽", "fact": "O Baixinho. Um dos maiores artilheiros da história do futebol. Campeão mundial em 1994.", "curiosity": "Nascido no subúrbio do Rio de Janeiro. Afirma ter marcado mais de 1.000 gols na carreira.", "gender": "M", "temperamento": "colerico", "height": 169, "weight": 68, "quote": "Não jogo para agradar ninguém. Jogo para vencer.", "popularity": 42}, {"day": 6, "month": 8, "name": "M. Night Shyamalan", "born": 1970, "category": "Cinema", "country": "Índia/EUA", "emoji": "🎬", "fact": "Diretor de 'O Sexto Sentido' e 'Corpo Fechado'. Mestre dos finais surpreendentes.", "curiosity": "Escreveu e dirigiu 'O Sexto Sentido' com 28 anos. O twist final enganou 99% do público.", "gender": "M", "temperamento": "melancolico", "height": 173, "weight": 67, "quote": "Os pensamentos mais belos vêm na madrugada.", "popularity": 58}, {"day": 7, "month": 8, "name": "Charlize Theron", "born": 1975, "category": "Cinema", "country": "África do Sul", "emoji": "🎬", "fact": "Atriz sul-africana vencedora do Oscar. Uma das mais versáteis e corajosas de Hollywood.", "curiosity": "Foi descoberta numa briga num banco em Los Angeles. O agente a viu discutindo e deixou seu cartão.", "gender": "F", "temperamento": "colerico", "height": 177, "weight": 62, "quote": "Sou uma mulher feita de cicatrizes — e cada uma me ensinou algo.", "popularity": 83}, {"day": 8, "month": 8, "name": "Roger Federer", "born": 1981, "category": "Esporte", "country": "Suíça", "emoji": "🎾", "fact": "Um dos maiores tenistas da história. 20 títulos de Grand Slam e modelo de elegância dentro e fora das quadras.", "curiosity": "Chorou tanto ao perder uma final do Australian Open que mal conseguia falar na premiação.", "gender": "M", "temperamento": "fleumatico", "height": 185, "weight": 85, "quote": "Quando você está fazendo o que ama, não trabalha um dia.", "popularity": 75}, {"day": 9, "month": 8, "name": "Whitney Houston", "born": 1963, "category": "Música", "country": "EUA", "emoji": "🎤", "fact": "Uma das maiores vozes da história da música. 'I Will Always Love You' é um marco eterno.", "curiosity": "Seu cover de 'I Will Always Love You' — de Dolly Parton — vendeu mais que a versão original.", "gender": "F", "temperamento": "melancolico", "height": 170, "weight": 62, "quote": "O amor é o maior poder do universo.", "popularity": 90}, {"day": 10, "month": 8, "name": "Antonio Banderas", "born": 1960, "category": "Cinema", "country": "Espanha", "emoji": "🎬", "fact": "Ator espanhol que conquistou Hollywood. O Zorro e o Gato de Botas são personagens icônicos.", "curiosity": "Sofreu um infarto aos 57 anos. Disse que foi o melhor presente da vida — o acordou para o que importa.", "gender": "M", "temperamento": "sanguineo", "height": 182, "weight": 89, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 47}, {"day": 11, "month": 8, "name": "Chris Hemsworth", "born": 1983, "category": "Cinema", "country": "Austrália", "emoji": "⚡", "fact": "O Thor do Universo Marvel. Um dos atores australianos mais famosos do mundo.", "curiosity": "Foi eliminado no começo do American Idol australiano. Foi dispensado antes de Hollywood o abraçar.", "gender": "M", "temperamento": "sanguineo", "height": 190, "weight": 97, "quote": "A felicidade é um caminho — não um destino.", "popularity": 75}, {"day": 12, "month": 8, "name": "Pete Sampras", "born": 1971, "category": "Esporte", "country": "EUA", "emoji": "🎾", "fact": "Um dos maiores tenistas da história. 14 títulos de Grand Slam e dominação no saque.", "curiosity": "Era tão habilidoso que muitos achavam o estilo monótono. Djokovic e Federer dizem que ele foi o melhor.", "gender": "M", "temperamento": "colerico", "height": 185, "weight": 80, "quote": "Quem espera o momento certo nunca começa.", "popularity": 68}, {"day": 13, "month": 8, "name": "Halle Berry", "born": 1966, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Primeira mulher negra a ganhar o Oscar de melhor atriz — um marco histórico.", "curiosity": "Dormiu em parques de Nova York quando tentava ser atriz. Recusou ajuda da mãe por princípio.", "gender": "F", "temperamento": "melancolico", "height": 166, "weight": 54, "quote": "Você não precisa ser perfeito. Apenas verdadeiro.", "popularity": 75}, {"day": 14, "month": 8, "name": "Steve Martin", "born": 1945, "category": "Humor & Cinema", "country": "EUA", "emoji": "😄", "fact": "Comediante, ator, escritor e músico. Um dos maiores nomes da comédia americana.", "curiosity": "Vendeu mais de 1 milhão de ingressos para shows de stand-up nos anos 70 — antes de CDs e Netflix.", "gender": "M", "temperamento": "sanguineo", "height": 183, "weight": 77, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 51}, {"day": 15, "month": 8, "name": "Ben Affleck", "born": 1972, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Ator e diretor. Ganhou o Oscar por 'Gênio Indomável' (roteiro) e 'Argo' (produção).", "curiosity": "Escreveu 'Gênio Indomável' com o amigo Matt Damon quando ambos eram desconhecidos.", "gender": "M", "temperamento": "sanguineo", "height": 180, "weight": 69, "quote": "A felicidade é um caminho — não um destino.", "popularity": 60}, {"day": 16, "month": 8, "name": "Madonna", "born": 1958, "category": "Música", "country": "EUA", "emoji": "🎤", "fact": "A Rainha do Pop. A artista feminina mais bem-sucedida de todos os tempos.", "curiosity": "Chegou a Nova York com 35 dólares na bolsa. Em menos de 5 anos era a maior estrela do mundo.", "gender": "F", "temperamento": "colerico", "height": 164, "weight": 54, "quote": "Eu sou ambiciosa. Sempre fui. Não vou parar agora.", "popularity": 99}, {"day": 17, "month": 8, "name": "Thiaguinho", "born": 1983, "category": "Música", "country": "Brasil", "emoji": "🎵", "fact": "Cantor de pagode e samba. Um dos artistas mais populares do Brasil na atualidade.", "curiosity": "Nascido em Ferraz de Vasconcelos, SP. Foi vocalista do Exaltasamba antes de seguir carreira solo.", "gender": "M", "temperamento": "sanguineo", "height": 177, "weight": 72, "quote": "A felicidade é um caminho — não um destino.", "popularity": 45}, {"day": 18, "month": 8, "name": "Patrick Swayze", "born": 1952, "category": "Cinema", "country": "EUA", "emoji": "💃", "fact": "Ator de 'Ghost' e 'Dirty Dancing'. Ícone romântico do cinema dos anos 80 e 90.", "curiosity": "Era bailarino profissional antes de Hollywood. A dança abriu as portas do cinema para ele.", "gender": "M", "temperamento": "melancolico", "height": 176, "weight": 83, "quote": "Aceite o que você não pode mudar. Mude o que você não pode aceitar.", "popularity": 41}, {"day": 19, "month": 8, "name": "Matthew Perry", "born": 1969, "category": "TV", "country": "EUA", "emoji": "😄", "fact": "O Chandler Bing de 'Friends'. Um dos personagens mais amados da história da televisão.", "curiosity": "Lutou publicamente contra dependência química e foi honesto sobre a batalha para ajudar outros.", "gender": "M", "temperamento": "melancolico", "height": 184, "weight": 70, "quote": "Quem sente mais, vive mais.", "popularity": 74}, {"day": 20, "month": 8, "name": "Amy Adams", "born": 1974, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Atriz com 6 indicações ao Oscar. Uma das mais versáteis de sua geração.", "curiosity": "Trabalhou como garçonete e dançarina do Hooters enquanto fazia audições em Hollywood.", "gender": "F", "temperamento": "sanguineo", "height": 164, "weight": 57, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 58}, {"day": 21, "month": 8, "name": "Usain Bolt", "born": 1986, "category": "Esporte", "country": "Jamaica", "emoji": "🏃", "fact": "O homem mais rápido da história. 8 ouros olímpicos e recordes mundiais que duram até hoje.", "curiosity": "Comeu 1.000 nuggets de frango durante as Olimpíadas de Pequim 2008. E quebrou 3 recordes mundiais assim.", "gender": "M", "temperamento": "colerico", "height": 195, "weight": 94, "quote": "Eu treinei 4 anos para correr 9 segundos.", "popularity": 80}, {"day": 22, "month": 8, "name": "Dua Lipa", "born": 1995, "category": "Música", "country": "Reino Unido", "emoji": "🎤", "fact": "Cantora britânico-albanesa. Uma das artistas mais ouvidas do mundo no streaming.", "curiosity": "Mudou-se sozinha para Londres aos 15 anos para seguir o sonho de ser cantora.", "gender": "F", "temperamento": "sanguineo", "height": 173, "weight": 60, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 86}, {"day": 23, "month": 8, "name": "Kobe Bryant", "born": 1978, "category": "Esporte", "country": "EUA", "emoji": "🏀", "fact": "Um dos maiores jogadores da história da NBA. 5 títulos com o Los Angeles Lakers.", "curiosity": "Viveu na Itália na infância — seu pai jogava lá. Aprendeu italiano fluente e adorava o país.", "gender": "M", "temperamento": "colerico", "height": 198, "weight": 97, "quote": "Os grandes te inspiram a fazer mais.", "popularity": 87}, {"day": 24, "month": 8, "name": "Rupert Grint", "born": 1988, "category": "Cinema", "country": "Reino Unido", "emoji": "🎬", "fact": "O eterno Rony Weasley de Harry Potter. Um dos atores mais queridos do cinema britânico.", "curiosity": "Enviou um rap num vídeo caseiro se candidatando ao papel de Rony. A Warner gostou e chamou.", "gender": "M", "temperamento": "melancolico", "height": 180, "weight": 79, "quote": "Quem sente mais, vive mais.", "popularity": 44}, {"day": 25, "month": 8, "name": "Tim Burton", "born": 1958, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Diretor de 'Batman', 'Beetlejuice' e 'Eduardo Mãos de Tesoura'. Estilo visual único no cinema.", "curiosity": "Era tão antissocial na escola que ficava desenhando sozinho. Os desenhos se tornaram sua linguagem.", "gender": "M", "temperamento": "melancolico", "height": 178, "weight": 80, "quote": "Os pensamentos mais belos vêm na madrugada.", "popularity": 48}, {"day": 26, "month": 8, "name": "Macaulay Culkin", "born": 1980, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "O Kevin McCallister de 'Esqueceram de Mim'. O menino mais famoso do cinema dos anos 90.", "curiosity": "Era o ator mais bem pago do mundo com 10 anos — 5 milhões de dólares por filme.", "gender": "M", "temperamento": "sanguineo", "height": 177, "weight": 68, "quote": "Espalhe alegria por onde passar.", "popularity": 44}, {"day": 27, "month": 8, "name": "Tom Ford", "born": 1961, "category": "Moda", "country": "EUA", "emoji": "👔", "fact": "Um dos maiores estilistas do mundo. Revolucionou a Gucci nos anos 90 e fundou sua própria marca.", "curiosity": "Começou querendo ser ator antes de descobrir a moda. O cinema sempre influenciou seu estilo.", "gender": "M", "temperamento": "colerico", "height": 185, "weight": 80, "quote": "A vida não recompensa quem hesita.", "popularity": 69}, {"day": 28, "month": 8, "name": "Jack Black", "born": 1969, "category": "Cinema & Música", "country": "EUA", "emoji": "🎸", "fact": "Ator e músico. Famoso por 'School of Rock' e a banda Tenacious D com Kyle Gass.", "curiosity": "Apareceu num comercial de videogame aos 13 anos. O showbiz sempre foi parte da vida dele.", "gender": "M", "temperamento": "sanguineo", "height": 184, "weight": 83, "quote": "Espalhe alegria por onde passar.", "popularity": 54}, {"day": 29, "month": 8, "name": "Michael Jackson", "born": 1958, "category": "Música", "country": "EUA", "emoji": "🕺", "fact": "O Rei do Pop. O maior entertainer da história. 'Thriller' é o álbum mais vendido de todos os tempos.", "curiosity": "Começou a se apresentar profissionalmente aos 5 anos. A infância foi inteiramente dedicada à música.", "gender": "M", "temperamento": "melancolico", "height": 175, "weight": 58, "quote": "Se você entra no mundo querendo ser amado por todos, você vai ficar magoado muitas vezes.", "popularity": 91}, {"day": 30, "month": 8, "name": "Cameron Diaz", "born": 1972, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Atriz e modelo. Uma das comediantes mais talentosas de Hollywood dos anos 90 e 2000.", "curiosity": "Conheceu Jim Carrey antes de virar atriz — os dois estavam no mesmo casting. Ele foi escolhido, ela não.", "gender": "F", "temperamento": "sanguineo", "height": 173, "weight": 60, "quote": "O sorriso é a melhor maquiagem.", "popularity": 89}, {"day": 31, "month": 8, "name": "Richard Gere", "born": 1949, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Ator icônico de 'Pretty Woman' e 'Chicago'. Um dos galãs mais famosos da história do cinema.", "curiosity": "Pratica budismo tibetano há décadas e é amigo pessoal do Dalai Lama.", "gender": "M", "temperamento": "sanguineo", "height": 173, "weight": 67, "quote": "A felicidade é um caminho — não um destino.", "popularity": 50}, {"day": 1, "month": 9, "name": "Zendaya", "born": 1996, "category": "Cinema & Música", "country": "EUA", "emoji": "🌟", "fact": "Atriz e cantora. Emmy Award mais jovem da história por 'Euphoria'. Estrela de Duna e Desafio.", "curiosity": "Começou como dançarina de fundo num videoclipe de Kidz Bop. A dança sempre foi sua base.", "gender": "F", "temperamento": "sanguineo", "height": 168, "weight": 52, "quote": "Seja você mesmo. Todo mundo já está ocupado sendo outros.", "popularity": 79}, {"day": 2, "month": 9, "name": "Salma Hayek", "born": 1966, "category": "Cinema", "country": "México", "emoji": "🎬", "fact": "Atriz e produtora mexicana. Indicada ao Oscar por 'Frida'. Uma das mais influentes de Hollywood.", "curiosity": "Sofreu racismo e foi chamada de 'muito mexicana' ao tentar entrar em Hollywood nos anos 90.", "gender": "F", "temperamento": "sanguineo", "height": 157, "weight": 53, "quote": "O sucesso não muda quem você é. Revela quem você sempre foi.", "popularity": 88}, {"day": 3, "month": 9, "name": "Paulinho da Viola", "born": 1942, "category": "Música", "country": "Brasil", "emoji": "🎵", "fact": "Um dos maiores compositores de samba da história do Brasil. Hinos como 'Argumento' e 'Foi um Rio que Passou em Minha Vida'.", "curiosity": "Filho do músico César Faria. Cresceu no samba como quem aprende a andar — era natural e inevitável.", "gender": "M", "temperamento": "fleumatico", "height": 172, "weight": 90, "quote": "Calma é a maior virtude em tempos difíceis.", "popularity": 65}, {"day": 4, "month": 9, "name": "Beyoncé", "born": 1981, "category": "Música", "country": "EUA", "emoji": "👑", "fact": "A rainha do pop e R&B. Artista com mais Grammys da história — 32 prêmios.", "curiosity": "Seu primeiro show foi num salão de beleza onde a mãe trabalhava. O público eram os clientes.", "gender": "F", "temperamento": "colerico", "height": 169, "weight": 63, "quote": "Eu trabalho mais duro do que você. Treine mais, tente mais, seja mais.", "popularity": 91}, {"day": 5, "month": 9, "name": "Freddie Mercury", "born": 1946, "category": "Música", "country": "Reino Unido/Zanzibar", "emoji": "🎤", "fact": "Vocalista do Queen. Considerado por muitos o maior frontman da história do rock.", "curiosity": "Nascido em Zanzibar (atual Tanzânia) como Farrokh Bulsara. Mudou o nome ao criar o Queen.", "gender": "M", "temperamento": "sanguineo", "height": 175, "weight": 70, "quote": "Devo continuar. Não posso ficar parado. Tenho que ir em frente.", "popularity": 90}, {"day": 6, "month": 9, "name": "Idris Elba", "born": 1972, "category": "Cinema & TV", "country": "Reino Unido", "emoji": "🎬", "fact": "Ator britânico. Famoso por 'The Wire' e 'Luther'. Um dos mais elogiados de sua geração.", "curiosity": "É também DJ e produtor musical. Toca em clubes da Europa nos fins de semana de folga das filmagens.", "gender": "M", "temperamento": "melancolico", "height": 177, "weight": 71, "quote": "Os pensamentos mais belos vêm na madrugada.", "popularity": 58}, {"day": 7, "month": 9, "name": "Evaristo Costa", "born": 1965, "category": "TV", "country": "Brasil", "emoji": "📺", "fact": "Jornalista e apresentador. Um dos rostos mais queridos e engraçados do jornalismo nacional.", "curiosity": "Ficou famoso pelos memes de seus gestos ao vivo. Um dos primeiros jornalistas virais antes das redes sociais.", "gender": "M", "temperamento": "sanguineo", "height": 183, "weight": 81, "quote": "Espalhe alegria por onde passar.", "popularity": 49}, {"day": 8, "month": 9, "name": "Pink", "born": 1979, "category": "Música", "country": "EUA", "emoji": "🎤", "fact": "Cantora rock-pop conhecida pelas performances aéreas acrobáticas. Uma das mais energéticas do mundo.", "curiosity": "Faz acrobacias a 20 metros de altura durante os shows. Treina ginástica e dança para cada turnê.", "gender": "F", "temperamento": "colerico", "height": 165, "weight": 58, "quote": "Quem não arrisca, não vence.", "popularity": 60}, {"day": 9, "month": 9, "name": "Adam Sandler", "born": 1966, "category": "Cinema & Humor", "country": "EUA", "emoji": "😄", "fact": "Comediante e ator. Um dos mais bem-sucedidos de Hollywood. Estrela do Netflix.", "curiosity": "Mesmo sendo dispensado do SNL, não mudou seu estilo. A Netflix apostou nele com 250 milhões.", "gender": "M", "temperamento": "sanguineo", "height": 180, "weight": 88, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 47}, {"day": 10, "month": 9, "name": "Colin Firth", "born": 1960, "category": "Cinema", "country": "Reino Unido", "emoji": "🎬", "fact": "Ator vencedor do Oscar por 'O Discurso do Rei'. Um dos atores mais elegantes do cinema britânico.", "curiosity": "O papel do Rei George VI exigiu que ele estudasse a gagueira durante meses. Aprendeu e nunca mais esqueceu.", "gender": "M", "temperamento": "melancolico", "height": 183, "weight": 82, "quote": "Os pensamentos mais belos vêm na madrugada.", "popularity": 58}, {"day": 11, "month": 9, "name": "Taraji P. Henson", "born": 1970, "category": "Cinema & TV", "country": "EUA", "emoji": "🎬", "fact": "Atriz indicada ao Oscar por 'O Curioso Caso de Benjamin Button'. Famosa por 'Empire'.", "curiosity": "Criou a filha sozinha enquanto estudava atuação em Washington DC. Não parou nunca.", "gender": "F", "temperamento": "melancolico", "height": 171, "weight": 64, "quote": "Aceite o que você não pode mudar. Mude o que você não pode aceitar.", "popularity": 66}, {"day": 12, "month": 9, "name": "Jesse Owens", "born": 1913, "category": "Esporte", "country": "EUA", "emoji": "🏃", "fact": "O maior atleta das Olimpíadas de Berlim 1936. Ganhou 4 ouros — humilhando o regime nazista.", "curiosity": "Hitler saiu do estádio antes de cumprimentá-lo. O presidente americano também não o reconheceu.", "gender": "M", "temperamento": "colerico", "height": 175, "weight": 74, "quote": "Faça acontecer. Ninguém vai fazer por você.", "popularity": 62}, {"day": 13, "month": 9, "name": "Roald Dahl", "born": 1916, "category": "Literatura", "country": "Reino Unido", "emoji": "📚", "fact": "Autor de 'Charlie e a Fábrica de Chocolate', 'James e o Pêssego Gigante' e 'Matilda'.", "curiosity": "Era piloto de guerra antes de escrever. O acidente de avião que sofreu o deixou numa cama por semanas — e ele começou a escrever.", "gender": "M", "temperamento": "melancolico", "height": 182, "weight": 68, "quote": "Aqueles que não acreditam em magia nunca a encontrarão.", "popularity": 49}, {"day": 14, "month": 9, "name": "Amy Winehouse", "born": 1983, "category": "Música", "country": "Reino Unido", "emoji": "🎤", "fact": "Cantora britânica com voz única. 'Back to Black' é um dos maiores álbuns do século XXI.", "curiosity": "Ganhou 5 Grammys numa única noite em 2008. Era a maior voz do soul britânico antes de falecer aos 27.", "gender": "F", "temperamento": "melancolico", "height": 164, "weight": 60, "quote": "Os pensamentos mais belos vêm na madrugada.", "popularity": 48}, {"day": 15, "month": 9, "name": "Tom Hardy", "born": 1977, "category": "Cinema", "country": "Reino Unido", "emoji": "🎬", "fact": "Ator britânico. Bane em Batman, Max Fury Road, Venom. Um dos mais versáteis do cinema atual.", "curiosity": "Passou pela dependência química e superou. Usa a história pessoal para aprofundar seus personagens.", "gender": "M", "temperamento": "colerico", "height": 175, "weight": 87, "quote": "Faça acontecer. Ninguém vai fazer por você.", "popularity": 42}, {"day": 16, "month": 9, "name": "Nick Jonas", "born": 1992, "category": "Música", "country": "EUA", "emoji": "🎵", "fact": "Cantor e ator. Ex-Jonas Brothers com grande carreira solo. Casado com Priyanka Chopra.", "curiosity": "Tem diabetes tipo 1 desde os 13 anos. Fala abertamente sobre a condição para inspirar outros.", "gender": "M", "temperamento": "sanguineo", "height": 184, "weight": 75, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 63}, {"day": 17, "month": 9, "name": "Ronaldinho Gaúcho", "born": 1980, "category": "Esporte", "country": "Brasil", "emoji": "⚽", "fact": "O jogador mais habilidoso da história do futebol para muitos. Bola de Ouro em 2004 e 2005.", "curiosity": "Seu sorriso e alegria dentro de campo são parte do que o tornou único na história do esporte.", "gender": "M", "temperamento": "sanguineo", "height": 181, "weight": 80, "quote": "O futebol tem a magia de unir pessoas. Isso é o que me faz sorrir.", "popularity": 100}, {"day": 18, "month": 9, "name": "Jada Pinkett Smith", "born": 1971, "category": "Cinema & TV", "country": "EUA", "emoji": "🎬", "fact": "Atriz, apresentadora e empresária. Casada com Will Smith há mais de 25 anos.", "curiosity": "Era colega de turma de Tupac Shakur no ensino médio. Os dois foram grandes amigos por anos.", "gender": "F", "temperamento": "melancolico", "height": 164, "weight": 67, "quote": "Os pensamentos mais belos vêm na madrugada.", "popularity": 58}, {"day": 19, "month": 9, "name": "Jimmy Fallon", "born": 1974, "category": "TV & Humor", "country": "EUA", "emoji": "😄", "fact": "Apresentador do The Tonight Show. Um dos apresentadores de late night mais queridos dos EUA.", "curiosity": "Ligou para Lorne Michaels 6 vezes por semana durante um ano antes de ser chamado para o SNL.", "gender": "M", "temperamento": "sanguineo", "height": 183, "weight": 79, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 68}, {"day": 20, "month": 9, "name": "Sophia Loren", "born": 1934, "category": "Cinema", "country": "Itália", "emoji": "🎬", "fact": "A maior atriz italiana da história. Primeira a ganhar o Oscar por um filme em língua estrangeira.", "curiosity": "Nasceu na pobreza extrema em Nápoles. A beleza e o talento a tiraram de uma vida de miséria.", "gender": "F", "temperamento": "sanguineo", "height": 160, "weight": 58, "quote": "Espalhe alegria por onde passar.", "popularity": 69}, {"day": 21, "month": 9, "name": "Bill Murray", "born": 1950, "category": "Cinema & Humor", "country": "EUA", "emoji": "😄", "fact": "Ator e comediante. 'Caça-Fantasmas', 'Groundhog Day' e 'Lost in Translation' são ícones.", "curiosity": "Aparece em festas aleatórias por Chicago, lava pratos e parte — sem dar explicação. Virou lenda urbana.", "gender": "M", "temperamento": "sanguineo", "height": 188, "weight": 90, "quote": "A felicidade é um caminho — não um destino.", "popularity": 65}, {"day": 22, "month": 9, "name": "Tom Felton", "born": 1987, "category": "Cinema", "country": "Reino Unido", "emoji": "🎬", "fact": "Ator britânico. O eterno Draco Malfoy de Harry Potter.", "curiosity": "Tinha cabelo castanho e teve que descolorir para o papel. O processo levou horas toda semana.", "gender": "M", "temperamento": "melancolico", "height": 180, "weight": 75, "quote": "Quem sente mais, vive mais.", "popularity": 54}, {"day": 23, "month": 9, "name": "Ronaldo Fenômeno", "born": 1976, "category": "Esporte", "country": "Brasil", "emoji": "⚽", "fact": "O Fenômeno. Um dos maiores artilheiros da história da Copa do Mundo. Tricampeão.", "curiosity": "Nascido em Bento Ribeiro, subúrbio do Rio. Descoberto ainda criança jogando pelada na rua.", "gender": "M", "temperamento": "sanguineo", "height": 183, "weight": 82, "quote": "O segredo do sucesso é nunca desistir.", "popularity": 99}, {"day": 24, "month": 9, "name": "F. Scott Fitzgerald", "born": 1896, "category": "Literatura", "country": "EUA", "emoji": "📚", "fact": "Autor de 'O Grande Gatsby'. Um dos maiores romances americanos da história.", "curiosity": "Morreu sem saber que Gatsby seria um clássico eterno. O livro foi redescoberto décadas depois.", "gender": "M", "temperamento": "melancolico", "height": 179, "weight": 74, "quote": "Aceite o que você não pode mudar. Mude o que você não pode aceitar.", "popularity": 41}, {"day": 25, "month": 9, "name": "Will Smith", "born": 1968, "category": "Cinema & Música", "country": "EUA", "emoji": "🎬", "fact": "Ator e músico. Um dos maiores astros da história de Hollywood. 'Ali', 'Homens de Preto' e 'À Procura da Felicidade'.", "curiosity": "Recusou o papel de Neo em Matrix. Keanu Reeves foi escalado e o resto é história.", "gender": "M", "temperamento": "sanguineo", "height": 188, "weight": 84, "quote": "O fracasso é seu maior parceiro de sucesso.", "popularity": 82}, {"day": 26, "month": 9, "name": "Serena Williams", "born": 1981, "category": "Esporte", "country": "EUA", "emoji": "🎾", "fact": "A maior tenista da história. 23 títulos de Grand Slam. Ícone de força e determinação.", "curiosity": "Nasceu em Saginaw, Michigan — cidade industrial. O pai a treinou em quadras públicas de Compton.", "gender": "F", "temperamento": "colerico", "height": 175, "weight": 70, "quote": "Eu não tenho medo de cair sete vezes — me levantar oito.", "popularity": 82}, {"day": 27, "month": 9, "name": "Avril Lavigne", "born": 1984, "category": "Música", "country": "Canadá", "emoji": "🎸", "fact": "Cantora e compositora punk-pop. Ícone dos anos 2000 com hits como 'Complicated' e 'Sk8er Boi'.", "curiosity": "Assinou com uma gravadora aos 16 anos depois de cantar numa loja de música para um executivo.", "gender": "F", "temperamento": "colerico", "height": 158, "weight": 53, "quote": "O impossível leva um pouco mais de tempo.", "popularity": 56}, {"day": 28, "month": 9, "name": "Confúcio", "born": -551, "category": "Filosofia", "country": "China", "emoji": "📜", "fact": "O filósofo mais influente da história da Ásia. Seus ensinamentos moldam a cultura asiática até hoje.", "curiosity": "Nunca escreveu nada. Todos os seus ensinamentos foram registrados por seus alunos depois de sua morte.", "gender": "M", "temperamento": "melancolico", "height": 195, "weight": 90, "quote": "Não importa o quão devagar você vá, desde que você não pare.", "popularity": 91}, {"day": 29, "month": 9, "name": "Halsey", "born": 1994, "category": "Música", "country": "EUA", "emoji": "🎤", "fact": "Cantora alternativa pop. Uma das artistas mais originais e corajosas de sua geração.", "curiosity": "Fez shows em Nova York como artista de rua durante meses antes de ser descoberta.", "gender": "F", "temperamento": "melancolico", "height": 165, "weight": 55, "quote": "A arte é a verdade que mente para dizer mais verdade.", "popularity": 82}, {"day": 30, "month": 9, "name": "Fábio Jr", "born": 1947, "category": "Música", "country": "Brasil", "emoji": "🎵", "fact": "Um dos maiores cantores românticos do Brasil. 'Pai' é considerada uma das canções mais emocionantes da MPB.", "curiosity": "Nascido em Aracaju, Sergipe. 'Pai' foi composta para seu próprio filho e tocou o coração do Brasil inteiro.", "gender": "M", "temperamento": "fleumatico", "height": 180, "weight": 67, "quote": "Pequenos passos firmes vão mais longe que grandes saltos.", "popularity": 53}, {"day": 1, "month": 10, "name": "Julie Andrews", "born": 1935, "category": "Cinema & Música", "country": "Reino Unido", "emoji": "🎬", "fact": "A Mary Poppins e a Freira de 'A Noviça Rebelde'. Uma das atrizes mais amadas da história.", "curiosity": "Perdeu a voz após uma cirurgia nas cordas vocais em 1997. Nunca mais cantou profissionalmente.", "gender": "F", "temperamento": "sanguineo", "height": 158, "weight": 67, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 51}, {"day": 2, "month": 10, "name": "Mahatma Gandhi", "born": 1869, "category": "História & Ativismo", "country": "Índia", "emoji": "☮️", "fact": "O líder da independência da Índia. Símbolo mundial da não-violência e resistência pacífica.", "curiosity": "Era advogado formado em Londres. A transformação em líder espiritual aconteceu gradualmente na África do Sul.", "gender": "M", "temperamento": "colerico", "height": 164, "weight": 46, "quote": "Seja a mudança que você deseja ver no mundo.", "popularity": 99}, {"day": 3, "month": 10, "name": "Gwen Stefani", "born": 1969, "category": "Música", "country": "EUA", "emoji": "🎤", "fact": "Vocalista do No Doubt e grande carreira solo. Ícone de estilo e música dos anos 90.", "curiosity": "Escreveu 'Don't Speak' depois que seu namorado — e baixista da banda — terminou o relacionamento.", "gender": "F", "temperamento": "sanguineo", "height": 166, "weight": 68, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 57}, {"day": 4, "month": 10, "name": "Alicia Silverstone", "born": 1976, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Atriz famosa por 'Clueless'. Um dos filmes mais influentes da cultura pop dos anos 90.", "curiosity": "Apareceu em três videoclipes do Aerosmith antes de virar atriz — incluindo o de 'Crazy'.", "gender": "F", "temperamento": "sanguineo", "height": 160, "weight": 53, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 57}, {"day": 5, "month": 10, "name": "Kate Winslet", "born": 1975, "category": "Cinema", "country": "Reino Unido", "emoji": "🎬", "fact": "Atriz vencedora do Oscar. A Rose de 'Titanic'. Uma das maiores de sua geração.", "curiosity": "Foi chamada de 'gorda' por professores de teatro na adolescência. Usou isso como combustível.", "gender": "F", "temperamento": "melancolico", "height": 169, "weight": 63, "quote": "Aceite o que você não pode mudar. Mude o que você não pode aceitar.", "popularity": 76}, {"day": 6, "month": 10, "name": "Jeremy Renner", "born": 1971, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Ator famoso pelo Gavião Arqueiro da Marvel e 'Guerra ao Terror', pelo qual foi indicado ao Oscar.", "curiosity": "Sobreviveu a um acidente gravíssimo com um limpa-neve em 2023. Voltou a trabalhar em tempo recorde.", "gender": "M", "temperamento": "sanguineo", "height": 186, "weight": 68, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 47}, {"day": 7, "month": 10, "name": "Simon Cowell", "born": 1959, "category": "TV & Música", "country": "Reino Unido", "emoji": "📺", "fact": "Empresário e jurado do American Idol, X Factor e Britain's Got Talent. Descobriu One Direction.", "curiosity": "Largou a escola aos 16 anos e trabalhou no correio. Entrou na indústria musical pela porta dos fundos.", "gender": "M", "temperamento": "colerico", "height": 175, "weight": 68, "quote": "Quem não arrisca, não vence.", "popularity": 45}, {"day": 8, "month": 10, "name": "Bruno Mars", "born": 1985, "category": "Música", "country": "EUA", "emoji": "🎵", "fact": "Cantor, compositor e produtor. 15 Grammys. Um dos maiores performers ao vivo da sua geração.", "curiosity": "Cresceu no Havaí numa família de músicos. Se apresentava em shows de Elvis com 4 anos.", "gender": "M", "temperamento": "sanguineo", "height": 165, "weight": 64, "quote": "Eu só quero fazer músicas que façam as pessoas se sentirem bem.", "popularity": 89}, {"day": 9, "month": 10, "name": "John Lennon", "born": 1940, "category": "Música", "country": "Reino Unido", "emoji": "🕊️", "fact": "Co-fundador dos Beatles. 'Imagine' é considerado um dos maiores hinos de paz da história.", "curiosity": "Foi criado por sua tia, não pelos pais. A insegurança e a busca por amor estão em toda sua obra.", "gender": "M", "temperamento": "melancolico", "height": 178, "weight": 71, "quote": "A vida é o que acontece enquanto você está ocupado fazendo outros planos.", "popularity": 91}, {"day": 10, "month": 10, "name": "Mario Vargas Llosa", "born": 1936, "category": "Literatura", "country": "Peru", "emoji": "📚", "fact": "Um dos maiores escritores latino-americanos. Vencedor do Nobel de Literatura em 2010.", "curiosity": "Bateu o rosto de Gabriel García Márquez num aeroporto numa briga histórica. Os dois nunca se reconciliaram.", "gender": "M", "temperamento": "melancolico", "height": 172, "weight": 89, "quote": "A arte é a verdade que mente para dizer mais verdade.", "popularity": 57}, {"day": 11, "month": 10, "name": "Chespirito", "born": 1929, "category": "Humor & TV", "country": "México", "emoji": "😄", "fact": "Roberto Gómez Bolaños. Criador do Chaves e do Chapolin. Os personagens mais amados da América Latina.", "curiosity": "O apelido Chespirito vem de 'Shakespearito' — dado porque era baixinho e escrevia muito bem.", "gender": "M", "temperamento": "sanguineo", "height": 177, "weight": 78, "quote": "A felicidade é um caminho — não um destino.", "popularity": 40}, {"day": 12, "month": 10, "name": "Hugh Jackman", "born": 1968, "category": "Cinema", "country": "Austrália", "emoji": "🎬", "fact": "O Wolverine. Um dos atores mais queridos do cinema mundial. Também brilha na Broadway.", "curiosity": "Tinha medo de agulhas e tatuagens antes de viver o Wolverine. Teve que superar para entrar no papel.", "gender": "M", "temperamento": "sanguineo", "height": 188, "weight": 90, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 82}, {"day": 13, "month": 10, "name": "Paul Simon", "born": 1941, "category": "Música", "country": "EUA", "emoji": "🎸", "fact": "Da dupla Simon & Garfunkel. 'The Sound of Silence' é um dos maiores clássicos da música pop.", "curiosity": "Conheceu Art Garfunkel na escola primária. Os dois tinham 11 anos quando formaram a dupla.", "gender": "M", "temperamento": "sanguineo", "height": 173, "weight": 84, "quote": "Espalhe alegria por onde passar.", "popularity": 44}, {"day": 14, "month": 10, "name": "Usher", "born": 1978, "category": "Música", "country": "EUA", "emoji": "🎵", "fact": "Cantor e dançarino. Um dos maiores nomes do R&B moderno. Superbowl de 2024 foi histórico.", "curiosity": "Foi mentor de Justin Bieber quando o cantor tinha 13 anos. Apostou nele antes de todo mundo.", "gender": "M", "temperamento": "sanguineo", "height": 177, "weight": 84, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 58}, {"day": 15, "month": 10, "name": "Virgínia Fonseca", "born": 1999, "category": "Entretenimento Digital", "country": "Brasil", "emoji": "📱", "fact": "A influenciadora digital mais seguida do Brasil. Fenômeno das redes sociais.", "curiosity": "Chegou a 50 milhões de seguidores no Instagram em tempo recorde — um dos maiores do Brasil.", "gender": "F", "temperamento": "colerico", "height": 160, "weight": 57, "quote": "Faça acontecer. Ninguém vai fazer por você.", "popularity": 82}, {"day": 16, "month": 10, "name": "Eminem", "born": 1972, "category": "Música", "country": "EUA", "emoji": "🎤", "fact": "O rapper mais vendido da história. 15 Grammys e mais de 220 milhões de álbuns vendidos.", "curiosity": "Cresceu na pobreza em Detroit, mudou-se dezenas de vezes. A instabilidade virou combustível criativo.", "gender": "M", "temperamento": "colerico", "height": 173, "weight": 75, "quote": "Quem não arrisca, não vence.", "popularity": 75}, {"day": 17, "month": 10, "name": "Rita Lee", "born": 1947, "category": "Música", "country": "Brasil", "emoji": "🎸", "fact": "A Rainha do Rock brasileiro. A artista mais influente da história do rock nacional.", "curiosity": "Nascida em São Paulo. Começou nos Mutantes e construiu carreira solo única, irreverente e pioneira.", "gender": "F", "temperamento": "sanguineo", "height": 167, "weight": 53, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 51}, {"day": 18, "month": 10, "name": "Zac Efron", "born": 1987, "category": "Cinema & Música", "country": "EUA", "emoji": "🎬", "fact": "Ator e cantor. Ficou famoso com 'High School Musical' e construiu carreira sólida no cinema adulto.", "curiosity": "Quebrou o nariz ao escorregar numa meia em casa e bater no batente de madeira. Precisou de cirurgia.", "gender": "M", "temperamento": "sanguineo", "height": 173, "weight": 77, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 71}, {"day": 19, "month": 10, "name": "John Mayer", "born": 1977, "category": "Música", "country": "EUA", "emoji": "🎸", "fact": "Guitarrista e cantor. 7 Grammys. Considerado um dos maiores guitarristas da sua geração.", "curiosity": "Largou o Berklee College of Music para tentar a sorte em Atlanta — e deu certo rápido.", "gender": "M", "temperamento": "fleumatico", "height": 172, "weight": 79, "quote": "Ouvir é um superpoder.", "popularity": 69}, {"day": 20, "month": 10, "name": "Snoop Dogg", "born": 1971, "category": "Música", "country": "EUA", "emoji": "🎤", "fact": "Um dos rappers mais famosos da história. Ícone do hip-hop californiano.", "curiosity": "Tornou-se comentarista esportivo e apresentador olímpico. A NBC o contratou para os Jogos de Paris 2024.", "gender": "M", "temperamento": "colerico", "height": 186, "weight": 76, "quote": "A vida não recompensa quem hesita.", "popularity": 54}, {"day": 21, "month": 10, "name": "Kim Kardashian", "born": 1980, "category": "TV & Negócios", "country": "EUA", "emoji": "📱", "fact": "Empresária e personalidade de TV. Criou um império de beleza avaliado em bilhões de dólares.", "curiosity": "SKIMS, sua marca de roupas íntimas, foi avaliada em 3,2 bilhões de dólares em menos de 3 anos.", "gender": "F", "temperamento": "colerico", "height": 160, "weight": 57, "quote": "Quem espera o momento certo nunca começa.", "popularity": 63}, {"day": 22, "month": 10, "name": "Jeff Goldblum", "born": 1952, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Ator icônico de 'Jurassic Park', 'Independence Day' e 'Thor: Ragnarok'. Presença única no cinema.", "curiosity": "É pianista de jazz talentoso. Toca regularmente em clubes de Los Angeles mesmo sendo estrela de Hollywood.", "gender": "M", "temperamento": "sanguineo", "height": 178, "weight": 72, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 67}, {"day": 23, "month": 10, "name": "Pelé", "born": 1940, "category": "Esporte", "country": "Brasil", "emoji": "⚽", "fact": "O Rei do Futebol. O único tricampeão mundial como jogador. O maior da história.", "curiosity": "Nascido em Três Corações, MG. O apelido 'Pelé' surgiu na infância e ele sempre disse não gostar.", "gender": "M", "temperamento": "sanguineo", "height": 173, "weight": 75, "quote": "O sucesso não é acidente. É trabalho duro, perseverança, aprendizado, estudo e sacrifício.", "popularity": 93}, {"day": 24, "month": 10, "name": "Drake", "born": 1986, "category": "Música", "country": "Canadá", "emoji": "🎵", "fact": "O artista com mais músicas no Top 100 da Billboard da história. Revolucionou o rap e o R&B.", "curiosity": "Começou como ator na série canadense 'Degrassi' antes de lançar sua carreira musical.", "gender": "M", "temperamento": "colerico", "height": 182, "weight": 82, "quote": "Quem espera o momento certo nunca começa.", "popularity": 88}, {"day": 25, "month": 10, "name": "Katy Perry", "born": 1984, "category": "Música", "country": "EUA", "emoji": "🎤", "fact": "Cantora com 5 singles número 1 no mesmo álbum — igualando Michael Jackson. Mais de 40 bilhões de streams.", "curiosity": "Começou cantando gospel na igreja do pai pastor. 'I Kissed a Girl' foi o choque de virar o mundo.", "gender": "F", "temperamento": "colerico", "height": 168, "weight": 62, "quote": "O impossível leva um pouco mais de tempo.", "popularity": 66}, {"day": 26, "month": 10, "name": "Rita Cadillac", "born": 1950, "category": "TV & Entretenimento", "country": "Brasil", "emoji": "🌟", "fact": "Uma das personalidades mais marcantes do entretenimento brasileiro dos anos 80.", "curiosity": "Participou do Programa do Chacrinha e tornou-se um dos rostos mais reconhecidos da TV brasileira.", "gender": "F", "temperamento": "sanguineo", "height": 161, "weight": 60, "quote": "A felicidade é um caminho — não um destino.", "popularity": 55}, {"day": 27, "month": 10, "name": "Roberto Dinamite", "born": 1954, "category": "Esporte", "country": "Brasil", "emoji": "⚽", "fact": "O maior ídolo da história do Vasco da Gama. Um dos maiores artilheiros do futebol brasileiro.", "curiosity": "Marcou mais de 700 gols pelo Vasco. Foi considerado o melhor atacante da América do Sul nos anos 70.", "gender": "M", "temperamento": "melancolico", "height": 178, "weight": 77, "quote": "Os pensamentos mais belos vêm na madrugada.", "popularity": 58}, {"day": 28, "month": 10, "name": "Joaquin Phoenix", "born": 1974, "category": "Cinema", "country": "EUA", "emoji": "🎭", "fact": "Ator vencedor do Oscar por 'Coringa'. Um dos mais intensos e comprometidos de sua geração.", "curiosity": "Para 'Coringa', perdeu 24 quilos em poucos meses. Os médicos acompanharam de perto todo o processo.", "gender": "M", "temperamento": "melancolico", "height": 173, "weight": 73, "quote": "A profundidade vem do silêncio antes da palavra.", "popularity": 80}, {"day": 29, "month": 10, "name": "Winona Ryder", "born": 1971, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Atriz ícone dos anos 90. Voltou ao estrelato com 'Stranger Things' décadas depois.", "curiosity": "Tim Burton a escalou para 'Beetlejuice' depois de vê-la numa foto. Nunca fez teste formal.", "gender": "F", "temperamento": "melancolico", "height": 164, "weight": 56, "quote": "A arte é a verdade que mente para dizer mais verdade.", "popularity": 72}, {"day": 30, "month": 10, "name": "Paulo Gustavo", "born": 1978, "category": "Cinema & Humor", "country": "Brasil", "emoji": "😂", "fact": "O maior comediante do cinema brasileiro. 'Minha Mãe é uma Peça' é a franquia mais vista da história do cinema nacional.", "curiosity": "Nascido em Niterói, RJ. Faleceu em 2021. Seu legado segue com recordes de público e carinho eterno.", "gender": "M", "temperamento": "sanguineo", "height": 170, "weight": 68, "quote": "A felicidade é um caminho — não um destino.", "popularity": 45}, {"day": 31, "month": 10, "name": "Willow Smith", "born": 2000, "category": "Música", "country": "EUA", "emoji": "🎵", "fact": "Filha de Will Smith. Lançou 'Whip My Hair' aos 10 anos e construiu carreira artística única.", "curiosity": "Pediu para ser retirada do filme 'Karate Kid 2' para preservar a própria saúde mental. Raro para a idade.", "gender": "F", "temperamento": "sanguineo", "height": 168, "weight": 61, "quote": "Espalhe alegria por onde passar.", "popularity": 49}, {"day": 1, "month": 11, "name": "Pabllo Vittar", "born": 1994, "category": "Música", "country": "Brasil", "emoji": "🎤", "fact": "A drag queen mais seguida do mundo. Artista que levou a música brasileira ao mainstream global.", "curiosity": "Nascida em São Luís, MA. Foi a primeira artista drag a se apresentar no Rock in Rio.", "gender": "F", "temperamento": "colerico", "height": 181, "weight": 72, "quote": "Quem não arrisca, não vence.", "popularity": 75}, {"day": 2, "month": 11, "name": "Shah Rukh Khan", "born": 1965, "category": "Cinema", "country": "Índia", "emoji": "🎬", "fact": "O maior astro de Bollywood. Chamado de 'O Rei de Bollywood'. Mais de 80 filmes no currículo.", "curiosity": "Perdeu os pais ainda jovem. Começou na TV e foi para Bollywood sem conhecer ninguém.", "gender": "M", "temperamento": "sanguineo", "height": 184, "weight": 76, "quote": "Eu sou um sonhador. Não consigo evitar.", "popularity": 42}, {"day": 3, "month": 11, "name": "Anna Wintour", "born": 1949, "category": "Moda", "country": "Reino Unido", "emoji": "👗", "fact": "Editora-chefe da Vogue americana há mais de 35 anos. A mulher mais poderosa da moda mundial.", "curiosity": "Usa óculos escuros em todos os eventos. Ninguém nunca viu seus olhos em público há décadas.", "gender": "F", "temperamento": "colerico", "height": 180, "weight": 49, "quote": "O impossível leva um pouco mais de tempo.", "popularity": 51}, {"day": 4, "month": 11, "name": "Matthew McConaughey", "born": 1969, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Ator vencedor do Oscar por 'Clube de Compras Dallas'. Especialista em recriar a própria carreira.", "curiosity": "Ficou famoso por papéis de comédia romântica — e abandonou tudo para fazer filmes sérios. Deu certo.", "gender": "M", "temperamento": "sanguineo", "height": 170, "weight": 80, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 47}, {"day": 5, "month": 11, "name": "Tilda Swinton", "born": 1960, "category": "Cinema", "country": "Reino Unido", "emoji": "🎬", "fact": "Atriz britânica vencedora do Oscar. Uma das mais vanguardistas do cinema mundial.", "curiosity": "Dormiu dentro de uma caixa de vidro no museu MoMA de Nova York como obra de arte viva.", "gender": "F", "temperamento": "melancolico", "height": 179, "weight": 59, "quote": "A arte é a verdade que mente para dizer mais verdade.", "popularity": 52}, {"day": 6, "month": 11, "name": "Emma Stone", "born": 1988, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Atriz vencedora de dois Oscars — 'La La Land' e 'Pobres Criaturas'. Geração de ouro do cinema.", "curiosity": "Convenceu os pais a se mudarem para Hollywood fazendo uma apresentação de PowerPoint com 10 slides.", "gender": "F", "temperamento": "sanguineo", "height": 168, "weight": 54, "quote": "Quem ri por último ri melhor — porque levou mais tempo para entender.", "popularity": 79}, {"day": 7, "month": 11, "name": "Marie Curie", "born": 1867, "category": "Ciência", "country": "Polônia/França", "emoji": "⚗️", "fact": "A única pessoa a ganhar dois Prêmios Nobel em áreas diferentes — Física e Química.", "curiosity": "Seus cadernos de laboratório ainda são radioativos e ficam guardados em caixas de chumbo em Paris.", "gender": "F", "temperamento": "melancolico", "height": 158, "weight": 55, "quote": "Nada na vida deve ser temido. Apenas compreendido.", "popularity": 94}, {"day": 8, "month": 11, "name": "Gordon Ramsay", "born": 1966, "category": "Gastronomia & TV", "country": "Reino Unido", "emoji": "👨‍🍳", "fact": "Chef com 17 estrelas Michelin. Apresentador de 'Hell's Kitchen' e 'MasterChef'.", "curiosity": "Jogou futebol profissionalmente até se machucar gravemente. A cozinha foi o plano B que virou lenda.", "gender": "M", "temperamento": "colerico", "height": 173, "weight": 68, "quote": "Quem espera o momento certo nunca começa.", "popularity": 48}, {"day": 9, "month": 11, "name": "Anne Frank", "born": 1929, "category": "História", "country": "Alemanha/Holanda", "emoji": "📖", "fact": "Sua história e diário tornaram-se símbolo da resistência humana contra o horror da Segunda Guerra.", "curiosity": "O pai sobreviveu ao campo de concentração e encontrou o diário. Nunca soube que ela havia escrito tanto.", "gender": "F", "temperamento": "melancolico", "height": 162, "weight": 50, "quote": "Apesar de tudo, eu ainda acredito na bondade do ser humano.", "popularity": 97}, {"day": 10, "month": 11, "name": "Fabio Assunção", "born": 1971, "category": "TV & Cinema", "country": "Brasil", "emoji": "🎬", "fact": "Um dos maiores atores da televisão brasileira. Décadas de novelas marcantes na Globo.", "curiosity": "Nascido em Brasília. Superou publicamente batalhas pessoais e é admirado pela transparência.", "gender": "M", "temperamento": "sanguineo", "height": 176, "weight": 82, "quote": "Espalhe alegria por onde passar.", "popularity": 44}, {"day": 11, "month": 11, "name": "Leonardo DiCaprio", "born": 1974, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Um dos maiores atores da história. Oscar por 'O Regresso' após 22 anos de indicações.", "curiosity": "Ficou 22 anos sendo indicado ao Oscar sem ganhar. Quando ganhou, a internet explodiu de alegria.", "gender": "M", "temperamento": "sanguineo", "height": 183, "weight": 82, "quote": "Se você consegue fazer alguém rir, ganhou o dia.", "popularity": 94}, {"day": 12, "month": 11, "name": "Anne Hathaway", "born": 1982, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Atriz vencedora do Oscar por 'Os Miseráveis'. Uma das mais versáteis de Hollywood.", "curiosity": "Cortou o cabelo ao vivo para o papel em 'Os Miseráveis'. Não foi efeito especial — foi real.", "gender": "F", "temperamento": "melancolico", "height": 173, "weight": 54, "quote": "Aceite o que você não pode mudar. Mude o que você não pode aceitar.", "popularity": 76}, {"day": 13, "month": 11, "name": "Whoopi Goldberg", "born": 1955, "category": "Cinema & TV", "country": "EUA", "emoji": "🎬", "fact": "Uma das poucas artistas a completar o EGOT: Emmy, Grammy, Oscar e Tony.", "curiosity": "Tinha dislexia grave na infância. Só foi diagnosticada na vida adulta. A luta foi enorme.", "gender": "F", "temperamento": "colerico", "height": 168, "weight": 73, "quote": "Faça acontecer. Ninguém vai fazer por você.", "popularity": 52}, {"day": 14, "month": 11, "name": "Claude Monet", "born": 1840, "category": "Arte", "country": "França", "emoji": "🎨", "fact": "O pai do impressionismo. 'As Ninféias' são uma das obras mais reproduzidas do mundo.", "curiosity": "Pintou grande parte das Ninféias quase cego por cataratas. Via cores distorcidas — e seguiu pintando.", "gender": "M", "temperamento": "melancolico", "height": 178, "weight": 70, "quote": "Aceite o que você não pode mudar. Mude o que você não pode aceitar.", "popularity": 41}, {"day": 15, "month": 11, "name": "Cauã Reymond", "born": 1980, "category": "TV & Cinema", "country": "Brasil", "emoji": "🎬", "fact": "Um dos galãs mais amados da televisão brasileira. Ator e modelo de sucesso.", "curiosity": "Nascido em São Paulo. Começou como modelo antes de virar ator de novelas de imenso sucesso.", "gender": "M", "temperamento": "colerico", "height": 183, "weight": 82, "quote": "O impossível leva um pouco mais de tempo.", "popularity": 86}, {"day": 16, "month": 11, "name": "Gusttavo Lima", "born": 1989, "category": "Música", "country": "Brasil", "emoji": "🎵", "fact": "O 'Embaixador'. Um dos maiores nomes do sertanejo universitário e romântico do Brasil.", "curiosity": "Nascido em Presidente Olegário, MG. Começou em festas caipiras regionais até conquistar o Brasil.", "gender": "M", "temperamento": "sanguineo", "height": 181, "weight": 68, "quote": "Espalhe alegria por onde passar.", "popularity": 49}, {"day": 17, "month": 11, "name": "Martin Scorsese", "born": 1942, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Um dos maiores diretores da história. 'Taxi Driver', 'Os Bons Companheiros' e 'Infiltrados'.", "curiosity": "Queria ser padre antes do cinema. A Igreja foi o primeiro lugar onde sentiu fascinação pelo sagrado.", "gender": "M", "temperamento": "melancolico", "height": 177, "weight": 77, "quote": "Aceite o que você não pode mudar. Mude o que você não pode aceitar.", "popularity": 66}, {"day": 18, "month": 11, "name": "Owen Wilson", "born": 1968, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Ator e roteirista. Parceiro de Wes Anderson. Famoso por comédias e por seu nariz peculiar.", "curiosity": "Quebrou o nariz três vezes. Recusou cirurgia plástica porque acha que faz parte de quem ele é.", "gender": "M", "temperamento": "sanguineo", "height": 179, "weight": 71, "quote": "A felicidade é um caminho — não um destino.", "popularity": 60}, {"day": 19, "month": 11, "name": "Jodie Foster", "born": 1962, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Atriz e diretora. Dois Oscars — 'O Silêncio dos Inocentes' e 'O Acusado'. Começou aos 3 anos.", "curiosity": "Entrou em Yale enquanto era estrela de Hollywood. Formou-se em literatura francesa.", "gender": "F", "temperamento": "melancolico", "height": 165, "weight": 61, "quote": "Quem sente mais, vive mais.", "popularity": 59}, {"day": 20, "month": 11, "name": "Celso Portiolli", "born": 1967, "category": "TV", "country": "Brasil", "emoji": "📺", "fact": "Apresentador do Programa Silvio Santos e das mais reconhecidas vozes do rádio brasileiro.", "curiosity": "Trabalhou no rádio por décadas antes de chegar à TV. Tornou-se principal herdeiro de Silvio Santos.", "gender": "M", "temperamento": "sanguineo", "height": 183, "weight": 88, "quote": "Espalhe alegria por onde passar.", "popularity": 69}, {"day": 21, "month": 11, "name": "Goldie Hawn", "born": 1945, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Atriz vencedora do Oscar. Ícone do cinema americano dos anos 70. Mãe de Kate Hudson.", "curiosity": "Começou como dançarina profissional antes de atuar. O humor era uma habilidade natural desde criança.", "gender": "F", "temperamento": "sanguineo", "height": 167, "weight": 68, "quote": "A felicidade é um caminho — não um destino.", "popularity": 50}, {"day": 22, "month": 11, "name": "Scarlett Johansson", "born": 1984, "category": "Cinema", "country": "EUA", "emoji": "🎭", "fact": "A Viúva Negra do MCU. A atriz com maior bilheteria da história do cinema.", "curiosity": "Fez seu primeiro teste de elenco aos 8 anos. Nunca parou de trabalhar desde então.", "gender": "F", "temperamento": "sanguineo", "height": 160, "weight": 57, "quote": "Eu não tenho tempo para fingir.", "popularity": 76}, {"day": 23, "month": 11, "name": "Miley Cyrus", "born": 1992, "category": "Música & TV", "country": "EUA", "emoji": "🎤", "fact": "Artista que reinventou a própria carreira várias vezes. 'Flowers' bateu recordes de streaming.", "curiosity": "Filha de Billy Ray Cyrus, cresceu nos bastidores do mundo country antes de virar Hannah Montana.", "gender": "F", "temperamento": "sanguineo", "height": 165, "weight": 55, "quote": "Espalhe alegria por onde passar.", "popularity": 89}, {"day": 24, "month": 11, "name": "Luiz Gonzaga", "born": 1912, "category": "Música", "country": "Brasil", "emoji": "🪗", "fact": "O Rei do Baião. O maior nome da música nordestina de todos os tempos. 'Asa Branca' é eterno.", "curiosity": "Nascido em Exu, PE. Levou o forró e o baião para o Brasil inteiro numa época em que o Nordeste era invisível.", "gender": "M", "temperamento": "fleumatico", "height": 170, "weight": 87, "quote": "Calma é a maior virtude em tempos difíceis.", "popularity": 50}, {"day": 25, "month": 11, "name": "Ramón Valdés", "born": 1924, "category": "Humor & TV", "country": "México", "emoji": "😄", "fact": "O eterno Seu Madruga do Chaves. Um dos personagens mais amados da América Latina.", "curiosity": "Era irmão do ator Manuel 'El Loco' Valdés. O talento para a comédia corria no sangue da família.", "gender": "M", "temperamento": "sanguineo", "height": 179, "weight": 87, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 43}, {"day": 26, "month": 11, "name": "Chitãozinho", "born": 1954, "category": "Música", "country": "Brasil", "emoji": "🎵", "fact": "Metade da dupla Chitãozinho & Xororó. Uma das duplas sertanejas mais bem-sucedidas da história.", "curiosity": "Nascido em Astorga, PR. Com o irmão Xororó, venderam mais de 30 milhões de discos no Brasil.", "gender": "M", "temperamento": "fleumatico", "height": 173, "weight": 70, "quote": "O que tem que ser, será — sem pressa.", "popularity": 66}, {"day": 27, "month": 11, "name": "Bruce Lee", "born": 1940, "category": "Cinema & Esporte", "country": "Hong Kong", "emoji": "🥋", "fact": "O maior mestre das artes marciais da história. Revolucionou o cinema de ação e as artes marciais.", "curiosity": "Era campeão de dança de cha-cha-cha em Hong Kong antes de se dedicar às artes marciais.", "gender": "M", "temperamento": "colerico", "height": 171, "weight": 61, "quote": "Seja como a água, meu amigo.", "popularity": 75}, {"day": 28, "month": 11, "name": "Chico Xavier", "born": 1910, "category": "Espiritualidade", "country": "Brasil", "emoji": "✨", "fact": "O médium mais famoso do Brasil. Psicografou mais de 400 livros e é símbolo de fé e caridade.", "curiosity": "Nascido em Pedro Leopoldo, MG. Doou todos os direitos autorais de suas obras para caridade.", "gender": "M", "temperamento": "fleumatico", "height": 178, "weight": 69, "quote": "Embora ninguém possa voltar atrás e fazer um novo começo, qualquer um pode começar agora e fazer um novo fim.", "popularity": 84}, {"day": 29, "month": 11, "name": "Chadwick Boseman", "born": 1976, "category": "Cinema", "country": "EUA", "emoji": "🦾", "fact": "O Pantera Negra. Um dos heróis mais importantes da história do cinema. Símbolo de representatividade.", "curiosity": "Gravou Pantera Negra e todos os filmes da Marvel já diagnosticado com câncer. Nunca contou publicamente.", "gender": "M", "temperamento": "melancolico", "height": 173, "weight": 89, "quote": "A arte é a verdade que mente para dizer mais verdade.", "popularity": 52}, {"day": 30, "month": 11, "name": "Ben Stiller", "born": 1965, "category": "Cinema & Humor", "country": "EUA", "emoji": "😄", "fact": "Ator, diretor e produtor. 'Zoolander', 'Trovão Tropical' e 'Noite no Museu' são seus maiores hits.", "curiosity": "Filho dos comediantes Jerry Stiller e Anne Meara. Cresceu nos bastidores do showbiz americano.", "gender": "M", "temperamento": "colerico", "height": 174, "weight": 74, "quote": "O impossível leva um pouco mais de tempo.", "popularity": 56}, {"day": 1, "month": 12, "name": "Nicki Minaj", "born": 1982, "category": "Música", "country": "Trinidad e Tobago", "emoji": "🎤", "fact": "Uma das rappers femininas mais bem-sucedidas da história. Pioneira e influência geracional.", "curiosity": "Nasceu em Trinidad e mudou para o Queens, Nova York, aos 5 anos. O choque cultural moldou sua música.", "gender": "F", "temperamento": "colerico", "height": 162, "weight": 58, "quote": "Quem espera o momento certo nunca começa.", "popularity": 58}, {"day": 2, "month": 12, "name": "Britney Spears", "born": 1981, "category": "Música", "country": "EUA", "emoji": "🎤", "fact": "A Princesa do Pop. Uma das artistas mais vendidas da história. 'Baby One More Time' é icônico.", "curiosity": "Participou do Mickey Mouse Club aos 11 anos, na mesma turma de Justin Timberlake e Ryan Gosling.", "gender": "F", "temperamento": "colerico", "height": 169, "weight": 62, "quote": "Faça acontecer. Ninguém vai fazer por você.", "popularity": 42}, {"day": 3, "month": 12, "name": "Brendan Fraser", "born": 1968, "category": "Cinema", "country": "Canadá", "emoji": "🎬", "fact": "Ator de 'A Múmia' e vencedor do Oscar por 'A Baleia'. Uma das grandes redenções do cinema.", "curiosity": "Sumiu de Hollywood por anos. Seu retorno com 'A Baleia' foi uma das histórias mais emocionantes do Oscar.", "gender": "M", "temperamento": "sanguineo", "height": 176, "weight": 87, "quote": "Conecte-se. Cada pessoa traz um novo mundo.", "popularity": 63}, {"day": 4, "month": 12, "name": "Jay-Z", "born": 1969, "category": "Música & Negócios", "country": "EUA", "emoji": "🎤", "fact": "Um dos rappers mais bem-sucedidos da história. Primeiro bilionário do hip-hop.", "curiosity": "Cresceu no Marcy Projects, Brooklyn. Vendeu CDs no metrô de Nova York antes de assinar com gravadora.", "gender": "M", "temperamento": "colerico", "height": 188, "weight": 88, "quote": "Eu não estou numa corrida com mais ninguém. Estou correndo a minha.", "popularity": 81}, {"day": 5, "month": 12, "name": "Walt Disney", "born": 1901, "category": "Cinema & Entretenimento", "country": "EUA", "emoji": "🏰", "fact": "O criador de Mickey Mouse e do império de entretenimento mais poderoso do mundo.", "curiosity": "Foi demitido de um jornal por 'falta de criatividade'. Esse episódio o motivou a criar sua própria empresa.", "gender": "M", "temperamento": "sanguineo", "height": 178, "weight": 77, "quote": "Todos os nossos sonhos podem se tornar realidade se tivermos a coragem de persegui-los.", "popularity": 99}, {"day": 6, "month": 12, "name": "Agnaldo Timóteo", "born": 1934, "category": "Música", "country": "Brasil", "emoji": "🎵", "fact": "Um dos maiores cantores da música romântica brasileira. Voz marcante e décadas de sucessos.", "curiosity": "Nascido em Sabará, MG. Um dos primeiros artistas negros a fazer sucesso no mainstream da música brasileira.", "gender": "M", "temperamento": "fleumatico", "height": 178, "weight": 82, "quote": "O que tem que ser, será — sem pressa.", "popularity": 56}, {"day": 7, "month": 12, "name": "Tom Waits", "born": 1949, "category": "Música", "country": "EUA", "emoji": "🎸", "fact": "Músico e compositor. Uma das vozes mais únicas e inimitáveis da história da música americana.", "curiosity": "Sua voz rouca e áspera é resultado de décadas de cigarro e whisky — e de uma decisão artística.", "gender": "M", "temperamento": "melancolico", "height": 183, "weight": 78, "quote": "Aceite o que você não pode mudar. Mude o que você não pode aceitar.", "popularity": 46}, {"day": 8, "month": 12, "name": "Jim Morrison", "born": 1943, "category": "Música", "country": "EUA", "emoji": "🎸", "fact": "Vocalista do The Doors. Ícone do rock e da contracultura dos anos 60.", "curiosity": "Era filho de almirante da Marinha americana. O conflito com o pai alimentou sua rebeldia artística.", "gender": "M", "temperamento": "melancolico", "height": 185, "weight": 74, "quote": "A profundidade vem do silêncio antes da palavra.", "popularity": 45}, {"day": 9, "month": 12, "name": "Judi Dench", "born": 1934, "category": "Cinema & Teatro", "country": "Reino Unido", "emoji": "🎬", "fact": "Atriz britânica com 8 indicações ao Oscar e 1 vitória. A M de James Bond e ícone da Broadway.", "curiosity": "Tem degeneração macular avançada e mal enxerga. Continua atuando memorizando roteiros pela voz.", "gender": "F", "temperamento": "fleumatico", "height": 172, "weight": 53, "quote": "O que tem que ser, será — sem pressa.", "popularity": 61}, {"day": 10, "month": 12, "name": "Felipe Neto", "born": 1988, "category": "Entretenimento Digital", "country": "Brasil", "emoji": "📱", "fact": "Um dos maiores youtubers do Brasil. Pioneiro do entretenimento digital no país.", "curiosity": "Nascido no Rio de Janeiro. Chegou a 40 milhões de inscritos no YouTube e diversificou para outros negócios.", "gender": "M", "temperamento": "colerico", "height": 183, "weight": 83, "quote": "Não importa o que falam de você. Importa o que você faz com isso.", "popularity": 88}, {"day": 12, "month": 12, "name": "Silvio Santos", "born": 1930, "category": "TV & Negócios", "country": "Brasil", "emoji": "🎰", "fact": "O maior nome da televisão brasileira. Fundador do SBT e um dos maiores empresários do país.", "curiosity": "Começou vendendo brinquedos nas ruas do Rio de Janeiro. Construiu um dos maiores impérios de mídia do Brasil.", "gender": "M", "temperamento": "colerico", "height": 178, "weight": 75, "quote": "Quem não arrisca, não petisca.", "popularity": 78}, {"day": 13, "month": 12, "name": "Taylor Swift", "born": 1989, "category": "Música", "country": "EUA", "emoji": "🎸", "fact": "A artista mais ouvida do mundo no Spotify em vários anos. Maior vendedora de ingressos da história.", "curiosity": "Considera o número 13 seu número da sorte e o inclui em shows, lançamentos e datas estratégicas.", "gender": "F", "temperamento": "melancolico", "height": 180, "weight": 60, "quote": "Os erros que cometemos nos tornam quem somos.", "popularity": 96}, {"day": 14, "month": 12, "name": "Marcelo D2", "born": 1967, "category": "Música", "country": "Brasil", "emoji": "🎤", "fact": "Rapper e cantor carioca. Um dos maiores nomes do hip-hop e do samba-rap brasileiro.", "curiosity": "Nascido no Rio de Janeiro. Misturou samba e rap de forma única, criando estilo inconfundível.", "gender": "M", "temperamento": "colerico", "height": 172, "weight": 86, "quote": "O impossível leva um pouco mais de tempo.", "popularity": 61}, {"day": 15, "month": 12, "name": "Gilberto Gil", "born": 1942, "category": "Música", "country": "Brasil", "emoji": "🎸", "fact": "Um dos maiores músicos brasileiros. Pai do Tropicalismo e ex-ministro da Cultura do Brasil.", "curiosity": "Exilado junto com Caetano Veloso pela ditadura em 1969. Voltou e foi nomeado ministro 34 anos depois.", "gender": "M", "temperamento": "fleumatico", "height": 173, "weight": 68, "quote": "A alegria é a prova dos nove.", "popularity": 93}, {"day": 16, "month": 12, "name": "Ludwig van Beethoven", "born": 1770, "category": "Música Clássica", "country": "Alemanha", "emoji": "🎼", "fact": "Um dos maiores compositores da história. Compôs a Nona Sinfonia completamente surdo.", "curiosity": "Compôs a 9ª Sinfonia sem ouvir nenhuma nota. Ficou de costas ao público na estreia e não ouviu a ovação.", "gender": "M", "temperamento": "melancolico", "height": 183, "weight": 74, "quote": "Os pensamentos mais belos vêm na madrugada.", "popularity": 58}, {"day": 17, "month": 12, "name": "Milla Jovovich", "born": 1975, "category": "Cinema", "country": "Ucrânia", "emoji": "🎬", "fact": "Atriz e modelo. Famosa por 'Resident Evil' e 'O Quinto Elemento'. Uma das atrizes de ação mais icônicas.", "curiosity": "Nasceu na Ucrânia e veio para os EUA com a família fugindo da Guerra Fria.", "gender": "F", "temperamento": "sanguineo", "height": 158, "weight": 52, "quote": "A felicidade é um caminho — não um destino.", "popularity": 55}, {"day": 18, "month": 12, "name": "Brad Pitt", "born": 1963, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Um dos maiores astros e atores de Hollywood. Oscar por 'Era Uma Vez em Hollywood'.", "curiosity": "Estudou jornalismo na Universidade do Missouri. Abandonou a faculdade semanas antes de se formar.", "gender": "M", "temperamento": "colerico", "height": 180, "weight": 78, "quote": "As pessoas que falam menos são as que mais pensam.", "popularity": 92}, {"day": 19, "month": 12, "name": "Jake Gyllenhaal", "born": 1980, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Ator e produtor americano. 'Brokeback Mountain', 'Zodíaco' e 'Nocturnal Animals' são marcos.", "curiosity": "Seu nome Jake foi escolhido pela irmã Maggie. Ela tinha 3 anos quando ele nasceu e insistiu no nome.", "gender": "M", "temperamento": "melancolico", "height": 180, "weight": 90, "quote": "A arte é a verdade que mente para dizer mais verdade.", "popularity": 72}, {"day": 20, "month": 12, "name": "Kylian Mbappé", "born": 1998, "category": "Esporte", "country": "França", "emoji": "⚽", "fact": "O jogador mais rápido e caro do futebol moderno. Fenômeno desde os 18 anos.", "curiosity": "Nasceu em Paris. Sonhava em ser Cristiano Ronaldo — que depois foi ao vestiário conhecê-lo pessoalmente.", "gender": "M", "temperamento": "colerico", "height": 178, "weight": 89, "quote": "Quem espera o momento certo nunca começa.", "popularity": 48}, {"day": 21, "month": 12, "name": "Jane Fonda", "born": 1937, "category": "Cinema & Ativismo", "country": "EUA", "emoji": "🎬", "fact": "Atriz vencedora de dois Oscars e ativista incansável. Pioneira do fitness nos anos 80.", "curiosity": "Criou a indústria do videocassete de aeróbica nos anos 80. Vendeu mais de 17 milhões de cópias.", "gender": "F", "temperamento": "fleumatico", "height": 162, "weight": 57, "quote": "Calma é a maior virtude em tempos difíceis.", "popularity": 70}, {"day": 22, "month": 12, "name": "Gabriel Medina", "born": 1993, "category": "Esporte", "country": "Brasil", "emoji": "🏄", "fact": "Tricampeão mundial de surfe. O maior surfista da história do Brasil e um dos maiores do mundo.", "curiosity": "Nascido em São Sebastião, SP. Começou a surfar aos 4 anos. Aos 20 já era campeão mundial.", "gender": "M", "temperamento": "colerico", "height": 178, "weight": 73, "quote": "Não importa quantas vezes você cai. Importa quantas vezes você levanta.", "popularity": 76}, {"day": 23, "month": 12, "name": "Carla Bruni", "born": 1967, "category": "Música & Moda", "country": "Itália/França", "emoji": "🎵", "fact": "Modelo, cantora e ex-primeira-dama da França. Uma das mulheres mais fascinantes do mundo.", "curiosity": "Era uma das modelos mais bem pagas do mundo antes de largar a carreira pelo amor — e pela música.", "gender": "F", "temperamento": "sanguineo", "height": 177, "weight": 61, "quote": "A felicidade é um caminho — não um destino.", "popularity": 45}, {"day": 24, "month": 12, "name": "Ricky Martin", "born": 1971, "category": "Música", "country": "Porto Rico", "emoji": "🎵", "fact": "O latino mais famoso do mundo nos anos 90. 'Livin' la Vida Loca' virou hino global.", "curiosity": "Começou no grupo Menudo aos 12 anos — e foi demitido aos 17 porque cresceu demais e a voz mudou.", "gender": "M", "temperamento": "sanguineo", "height": 183, "weight": 83, "quote": "A vida é uma festa. Quem ficar dentro de casa, perde.", "popularity": 47}, {"day": 25, "month": 12, "name": "Isaac Newton", "born": 1643, "category": "Ciência", "country": "Reino Unido", "emoji": "🍎", "fact": "O maior cientista de todos os tempos nasceu no Natal. Descobriu a gravidade e inventou o cálculo.", "curiosity": "Nasceu tão pequeno que cabia numa jarra de litro. Ninguém imaginava que sobreviveria, menos ainda que mudaria o mundo.", "gender": "M", "temperamento": "melancolico", "height": 167, "weight": 60, "quote": "Se vi mais longe, foi por estar sobre os ombros de gigantes.", "popularity": 76}, {"day": 26, "month": 12, "name": "Jared Leto", "born": 1971, "category": "Música & Cinema", "country": "EUA", "emoji": "🎸", "fact": "Vocalista do Thirty Seconds to Mars e ator vencedor do Oscar por 'Dallas Buyers Club'.", "curiosity": "Para o papel em 'Dallas Buyers Club', perdeu 30 quilos. Para o Coringa, enviou ratos mortos ao elenco.", "gender": "M", "temperamento": "melancolico", "height": 170, "weight": 69, "quote": "A arte é a verdade que mente para dizer mais verdade.", "popularity": 67}, {"day": 27, "month": 12, "name": "Timothée Chalamet", "born": 1995, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Um dos atores mais talentosos de sua geração. Duna, Wonka e Me Chame pelo Seu Nome são marcos.", "curiosity": "Seu sobrenome é francês pelo avô. Cresceu entre Nova York e Paris — dois mundos que moldaram seu gosto.", "gender": "M", "temperamento": "sanguineo", "height": 172, "weight": 88, "quote": "Sorria. Você nunca sabe quem está se apaixonando pelo seu sorriso.", "popularity": 71}, {"day": 28, "month": 12, "name": "Denzel Washington", "born": 1954, "category": "Cinema", "country": "EUA", "emoji": "🎬", "fact": "Dois Oscars e considerado por muitos o maior ator americano vivo. Uma carreira de 40 anos impecável.", "curiosity": "Foi aconselhado na faculdade a abandonar atuação. O professor disse que não tinha futuro. Ignorou.", "gender": "M", "temperamento": "melancolico", "height": 185, "weight": 83, "quote": "Quem sente mais, vive mais.", "popularity": 79}, {"day": 29, "month": 12, "name": "Jude Law", "born": 1972, "category": "Cinema", "country": "Reino Unido", "emoji": "🎬", "fact": "Ator britânico. De 'O Talentoso Ripley' ao Dumbledore jovem em Animais Fantásticos.", "curiosity": "Era um dos atores mais bonitos e bem-sucedidos de Hollywood aos 30 anos. Reinventou a carreira aos 40.", "gender": "M", "temperamento": "melancolico", "height": 178, "weight": 75, "quote": "Quem sente mais, vive mais.", "popularity": 44}, {"day": 30, "month": 12, "name": "LeBron James", "born": 1984, "category": "Esporte", "country": "EUA", "emoji": "🏀", "fact": "O maior jogador da história da NBA para muitos. 4 títulos, 4 MVPs e o único tricampeão em 3 franquias.", "curiosity": "Nascido em Akron, Ohio, numa família de baixa renda. Dormia em ginásios com amigos para treinar mais.", "gender": "M", "temperamento": "colerico", "height": 206, "weight": 113, "quote": "Você não pode deixar as expectativas dos outros te limitarem.", "popularity": 76}, {"day": 31, "month": 12, "name": "Anthony Hopkins", "born": 1937, "category": "Cinema", "country": "Reino Unido", "emoji": "🎬", "fact": "Dois Oscars. Hannibal Lecter em 'O Silêncio dos Inocentes' é um dos maiores vilões do cinema.", "curiosity": "Tem dislexia e TDAH. Lê os roteiros centenas de vezes para memorizar — e nunca esquece uma linha.", "gender": "M", "temperamento": "melancolico", "height": 175, "weight": 80, "quote": "A felicidade é um trabalho interno.", "popularity": 76}];

// ============================================================
// DATA: yearFacts.js
// ============================================================
// ============================================================
// KOMPARAI — FATOS POR ANO (1930–2025)
// 96 anos de história em uma linha
// ============================================================
// Uso: YEAR_FACTS[1984] → string com o fato marcante do ano

const YEAR_FACTS = {
  // ─── ANOS 30 ───
  1930: "A Copa do Mundo de Futebol foi realizada pela primeira vez, no Uruguai.",
  1931: "O Empire State Building foi inaugurado em Nova York — o maior do mundo na época.",
  1932: "A Revolução Constitucionalista mobilizou São Paulo contra o governo federal.",
  1933: "Adolf Hitler tornou-se chanceler da Alemanha, mudando o rumo do século.",
  1934: "Bonnie e Clyde, o casal de criminosos mais famoso da América, foi morto.",
  1935: "O 'Monopoly' foi lançado oficialmente — virou o jogo de tabuleiro mais vendido da história.",
  1936: "Jesse Owens venceu 4 ouros nas Olimpíadas de Berlim, desafiando o nazismo.",
  1937: "O dirigível Hindenburg explodiu, encerrando a era das aeronaves de hidrogênio.",
  1938: "Orson Welles transmitiu 'A Guerra dos Mundos' pelo rádio — milhões acreditaram.",
  1939: "Começou a Segunda Guerra Mundial. O mundo mergulhou em 6 anos de horror.",

  // ─── ANOS 40 ───
  1940: "A Disney lançou 'Pinóquio' e 'Fantasia' — marcos da animação mundial.",
  1941: "O ataque a Pearl Harbor trouxe os EUA para a Segunda Guerra.",
  1942: "Casablanca, com Humphrey Bogart, estreou e virou um dos maiores clássicos do cinema.",
  1943: "A penicilina começou a ser produzida em massa, salvando milhões de vidas.",
  1944: "O Dia D — o desembarque na Normandia mudou o rumo da guerra.",
  1945: "A Segunda Guerra Mundial terminou. Bombas em Hiroshima e Nagasaki encerraram uma era.",
  1946: "A ONU teve sua primeira assembleia geral, em Londres.",
  1947: "A Índia conquistou independência do Reino Unido. Gandhi vitorioso pacificamente.",
  1948: "O Estado de Israel foi criado, mudando o mapa do Oriente Médio.",
  1949: "A China se tornou comunista sob Mao Tsé-Tung.",

  // ─── ANOS 50 ───
  1950: "O Brasil sediou a Copa do Mundo e perdeu para o Uruguai no Maracanazo.",
  1951: "A TV chegou ao Brasil. A primeira transmissão foi da TV Tupi.",
  1952: "Elizabeth II tornou-se rainha do Reino Unido. Reinaria por 70 anos.",
  1953: "A estrutura do DNA foi descoberta por Watson e Crick.",
  1954: "Getúlio Vargas suicidou-se. 'Saio da vida para entrar na história.'",
  1955: "Disneyland abriu suas portas pela primeira vez na Califórnia.",
  1956: "Brasília começou a ser construída por ordem de Juscelino Kubitschek.",
  1957: "A União Soviética lançou o Sputnik — começava a corrida espacial.",
  1958: "O Brasil ganhou sua primeira Copa do Mundo. Pelé, com 17 anos, estreou.",
  1959: "Fidel Castro tomou o poder em Cuba. A Revolução Cubana mudou as Américas.",

  // ─── ANOS 60 ───
  1960: "Brasília foi inaugurada como nova capital do Brasil.",
  1961: "Yuri Gagarin foi o primeiro humano a ir ao espaço. 108 minutos que mudaram a história.",
  1962: "Os Beatles lançaram seu primeiro single, 'Love Me Do'.",
  1963: "Martin Luther King fez o discurso 'Eu Tenho um Sonho' em Washington.",
  1964: "O golpe militar instaurou a ditadura no Brasil. Durou 21 anos.",
  1965: "A guerra do Vietnã se intensificou. Os EUA mergulharam num conflito de uma década.",
  1966: "John Lennon disse que os Beatles eram 'mais populares que Jesus' — escândalo mundial.",
  1967: "O 'Verão do Amor' em San Francisco marcou a cultura hippie para sempre.",
  1968: "1968 foi o ano que não acabou — protestos em Paris, México, Brasil.",
  1969: "Neil Armstrong pisou na Lua. 'Um pequeno passo para o homem...'",

  // ─── ANOS 70 ───
  1970: "O Brasil ganhou o tricampeonato mundial no México. O 'time da seleção brasileira' eterno.",
  1971: "Greenpeace foi fundado, marcando o início do ambientalismo moderno.",
  1972: "O massacre de Munique nos Jogos Olímpicos chocou o mundo.",
  1973: "O golpe militar derrubou Salvador Allende no Chile. Pinochet assumiu o poder.",
  1974: "ABBA venceu o Eurovision com 'Waterloo'. Nasceu o fenômeno pop.",
  1975: "Bill Gates fundou a Microsoft. Aos 19 anos, mudaria o mundo da computação.",
  1976: "Steve Jobs e Steve Wozniak fundaram a Apple numa garagem na Califórnia.",
  1977: "Elvis Presley morreu aos 42 anos. Milhões choraram em todo o mundo.",
  1978: "O primeiro 'bebê de proveta' nasceu na Inglaterra. A medicina nunca mais foi a mesma.",
  1979: "Margaret Thatcher tornou-se a primeira mulher primeira-ministra da Inglaterra.",

  // ─── ANOS 80 ───
  1980: "John Lennon foi assassinado em Nova York. O mundo perdeu um ícone.",
  1981: "Charles e Diana se casaram. 750 milhões de pessoas assistiram pela TV.",
  1982: "Michael Jackson lançou 'Thriller' — o álbum mais vendido de todos os tempos.",
  1983: "A internet começou a ganhar forma com a criação do protocolo TCP/IP.",
  1984: "O Macintosh foi lançado pela Apple — o primeiro computador pessoal de sucesso.",
  1985: "A campanha 'We Are the World' reuniu 45 artistas para ajudar a África.",
  1986: "O acidente de Chernobyl mudou o debate sobre energia nuclear para sempre.",
  1987: "O filme 'Dirty Dancing' estreou e virou fenômeno cultural imediato.",
  1988: "Os Jogos Olímpicos de Seul mostraram a Coreia do Sul ao mundo.",
  1989: "A queda do Muro de Berlim marcou o fim da Guerra Fria.",

  // ─── ANOS 90 ───
  1990: "Nelson Mandela saiu da prisão após 27 anos — um dos momentos mais emocionantes do século.",
  1991: "A União Soviética se dissolveu, mudando o mapa político mundial.",
  1992: "A World Wide Web foi disponibilizada ao público. A internet nasceu para todos.",
  1993: "O filme 'Jurassic Park' revolucionou os efeitos especiais no cinema.",
  1994: "O Brasil ganhou a Copa do Mundo pela 4ª vez, nos pênaltis contra a Itália.",
  1995: "O Windows 95 foi lançado e popularizou os computadores pessoais.",
  1996: "A ovelha Dolly foi clonada — primeiro mamífero clonado da história.",
  1997: "O filme 'Titanic' de James Cameron quebrou todos os recordes de bilheteria.",
  1998: "O Google foi fundado por Larry Page e Sergey Brin numa garagem.",
  1999: "O mundo vivia a paranoia do 'Bug do Milênio' — o Y2K.",

  // ─── ANOS 2000 ───
  2000: "Os Jogos Olímpicos de Sydney foram os mais assistidos até então.",
  2001: "Os ataques de 11 de setembro mudaram o mundo e a política global.",
  2002: "O Brasil venceu a Copa do Mundo pela 5ª vez, na Coreia/Japão, com Ronaldo.",
  2003: "O MySpace foi lançado — a primeira grande rede social da internet.",
  2004: "O Facebook foi fundado por Mark Zuckerberg em seu quarto na universidade.",
  2005: "O YouTube foi fundado e mudou para sempre o consumo de vídeo.",
  2006: "Plutão deixou de ser considerado planeta. Uma decisão que dividiu o mundo.",
  2007: "Steve Jobs apresentou o primeiro iPhone — o mundo dos celulares nunca mais foi o mesmo.",
  2008: "Barack Obama foi eleito o primeiro presidente negro dos EUA.",
  2009: "Michael Jackson morreu. O mundo inteiro parou.",
  2010: "O Instagram foi fundado e mudou para sempre a fotografia e as redes sociais.",

  // ─── ANOS 2010 (NOVOS) ───
  2011: "A Primavera Árabe derrubou ditadores no Egito, Tunísia e Líbia. As redes sociais foram as armas.",
  2012: "O fim do mundo previsto pelos maias não aconteceu. A humanidade respirou aliviada.",
  2013: "O Papa Francisco foi eleito — o primeiro latino-americano e jesuíta na história.",
  2014: "O Brasil sediou a Copa do Mundo. A derrota de 7x1 para a Alemanha entrou para a história.",
  2015: "A homossexualidade foi descriminalizada em mais países. Os EUA legalizaram o casamento gay.",
  2016: "O Brexit aprovado no Reino Unido. Trump eleito nos EUA. O mundo deu uma guinada.",
  2017: "O movimento #MeToo explodiu, derrubando poderosos em vários setores ao redor do mundo.",
  2018: "Black Panther estreou e virou o primeiro grande blockbuster com elenco majoritariamente negro.",
  2019: "Greta Thunberg, com 16 anos, virou a face do ativismo climático mundial.",

  // ─── ANOS 2020 (NOVOS) ───
  2020: "A pandemia de COVID-19 parou o mundo. Mais de 6 milhões de mortes. A vida mudou para sempre.",
  2021: "Vacinas contra a COVID-19 foram criadas em tempo recorde e começaram a ser aplicadas globalmente.",
  2022: "A Rússia invadiu a Ucrânia, a maior guerra na Europa desde 1945. ChatGPT foi lançado.",
  2023: "A inteligência artificial entrou no cotidiano das pessoas com ChatGPT, Midjourney e outras.",
  2024: "O Brasil venceu várias medalhas em Paris-2024. Gabriel Medina entrou para a história com 'a foto'.",
  2025: "A IA generativa transformou completamente o trabalho, a educação e o entretenimento. O mundo se adaptou rápido.",
};

const getYearFact = (year) => YEAR_FACTS[year] || null;

// ============================================================
// Estatísticas
// ============================================================
// Total: 96 anos cobertos (1930-2025)
// Foco: marcos globais + brasileiros importantes
// Densidade: 1 fato por ano, formato 1-2 frases

// ============================================================
// DATA: lua.js
// ============================================================
// ============================================================
// KOMPARAI — FASE DA LUA
// Cálculo pela data real + significado espiritual
// ============================================================

// Algoritmo baseado em ciclos lunares (29.53 dias)
// Data de referência: Lua Nova em 06/01/2000 (Julian Day 2451549.5)
const getFaseLua = (date = new Date()) => {
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

// ============================================================
// DATA: santos.js
// ============================================================
// ============================================================
// KOMPARAI — SANTO / FIGURA ESPIRITUAL DO DIA
// Cobertura básica de datas conhecidas + fallback
// ============================================================

// Santos e figuras por data fixa (dia-mês)
const SANTOS_FIXOS = {
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
const FALLBACK_SANTOS = [
  { nome:"Anjos da Guarda", emoji:"👼", tradicao:"Universal", desc:"Mensageiros de luz que caminham ao seu lado hoje." },
  { nome:"Espíritos de Luz", emoji:"🌟", tradicao:"Universal", desc:"Entidades elevadas que guiam passos na escuridão." },
  { nome:"Ancestrais", emoji:"🌿", tradicao:"Universal", desc:"Aqueles que vieram antes e abriram o caminho que você trilha." },
  { nome:"Os Mestres Ascensionados", emoji:"☁️", tradicao:"Universal", desc:"Almas que completaram a jornada e guiam as que ainda caminham." },
  { nome:"Nossa Senhora", emoji:"🌹", tradicao:"Católica", desc:"Mãe universal. Acolhimento que não tem fim nem condição." },
  { nome:"O Espírito Santo", emoji:"🕊️", tradicao:"Cristã", desc:"Fogo interior. Inspiração que ilumina a mente e aquece o coração." },
  { nome:"Os Bodhisattvas", emoji:"☸️", tradicao:"Budista", desc:"Seres iluminados que adiaram o nirvana para ajudar a humanidade." },
];

const getSantoDoDiaCompleto = (day, month) => {
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
const HOROSCOPO_GREGO = {
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
const ANIMAIS_CHINESES = {
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
const getAnimalChines = (ano) => {
  if (!ano || ano < 1900) return null;
  const animals = ["macaco","galo","cachorro","porco","rato","boi","tigre","coelho","dragao","serpente","cavalo","carneiro"];
  return animals[ano % 12];
};

// ============================================================
// 3. HORÓSCOPO INDIANO (Rashis Védicos)
// ============================================================
// Sistema védico — os signos são similares aos ocidentais mas com nomes em sânscrito
// Cálculo simplificado (Nirayana — sem Ayanamsa precisa)
const RASHIS_VEDICOS = {
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
const getRashi = (signoOcidental) => {
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
const MESES_HEBRAICOS = [
  "Tishrei","Cheshvan","Kislev","Tevet","Shevat","Adar",
  "Nissan","Iyar","Sivan","Tamuz","Av","Elul"
];

// Tabela aproximada de equivalências (início do mês hebraico) para 2026
// Formato: { dataGregoriana: [mesHebraico, anoHebraico] }
const HEBREW_MONTH_STARTS_2026 = [
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

const getHebrewDate = (gregDate) => {
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
const FRASES_GREGAS = {
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

const FRASES_CHINESAS = {
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

const FRASES_VEDICAS = {
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
const getFraseGrega = (signo, dayOfYear) => {
  const pool = FRASES_GREGAS[signo];
  if (!pool) return null;
  return pool[dayOfYear % pool.length];
};

const getFraseChinesa = (animal, dayOfYear) => {
  const pool = FRASES_CHINESAS[animal];
  if (!pool) return null;
  return pool[dayOfYear % pool.length];
};

const getFraseVedica = (rashi, dayOfYear) => {
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
const FIXED_DATES = [
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
const MOVABLE_DATES_2026 = [
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
const getShabat = (date) => {
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
const SANTO_DO_DIA = {
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

const getSantoDoDia = (day, month) => SANTO_DO_DIA[`${day}-${month}`] || null;

// ============================================================
// 5. FUNÇÃO PRINCIPAL — Eventos espirituais do dia
// ============================================================
const getEspiritualidadeDoDia = (day, month, year=null) => {
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
const TRADICAO_COLORS = {
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

const TRADICAO_EMOJI = {
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

// ============================================================
// DATA: versiculos.js
// ============================================================
// ============================================================
// KOMPARAI — VERSÍCULOS E FRASES DO DIA
// Por tradição religiosa + fallback aleatório
// ============================================================

// 31 frases por tradição (uma por dia do mês)
const VERSICULOS = {
  Católica: [
    { ref:"Filipenses 4:13", texto:"Tudo posso naquele que me fortalece." },
    { ref:"Salmo 23:1", texto:"O Senhor é meu pastor e nada me faltará." },
    { ref:"Jeremias 29:11", texto:"Conheço os planos que tenho para você, planos de paz e não de calamidade." },
    { ref:"Mateus 6:34", texto:"Não vos preocupeis com o amanhã, pois o amanhã se preocupará consigo mesmo." },
    { ref:"João 8:32", texto:"Conhecereis a verdade e a verdade vos libertará." },
    { ref:"Romanos 8:28", texto:"Sabemos que tudo concorre para o bem daqueles que amam a Deus." },
    { ref:"Provérbios 3:5", texto:"Confia no Senhor de todo o teu coração e não te apoies em tua própria inteligência." },
    { ref:"Isaías 40:31", texto:"Os que esperam no Senhor renovam as forças; sobem com asas como águias." },
    { ref:"Mateus 7:7", texto:"Pedis e dar-se-vos-á, buscai e encontrareis, batei e abrir-se-vos-á." },
    { ref:"Salmo 46:1", texto:"Deus é nosso refúgio e fortaleza, socorro bem presente nas tribulações." },
    { ref:"João 14:27", texto:"Deixo-vos a paz, a minha paz vos dou." },
    { ref:"Salmo 118:24", texto:"Este é o dia que o Senhor fez; alegremo-nos e nele nos regozijemos." },
    { ref:"1 Coríntios 13:4", texto:"O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, não se ensoberbece." },
    { ref:"Mateus 5:8", texto:"Bem-aventurados os puros de coração, porque eles verão a Deus." },
    { ref:"Lucas 6:38", texto:"Dai e ser-vos-á dado. Boa medida, calcada, sacudida e transbordante." },
    { ref:"Salmo 27:1", texto:"O Senhor é minha luz e minha salvação; a quem temerei?" },
    { ref:"João 3:16", texto:"Porque Deus amou o mundo de tal maneira que deu seu Filho Unigênito." },
    { ref:"Romanos 12:2", texto:"Não vos conformeis com este século, mas transformai-vos pela renovação da vossa mente." },
    { ref:"Efésios 6:10", texto:"Sede fortes no Senhor e no poder da sua força." },
    { ref:"Salmo 34:8", texto:"Provai e vede que o Senhor é bom; bem-aventurado o homem que nele se refugia." },
    { ref:"Mateus 11:28", texto:"Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei." },
    { ref:"1 João 4:8", texto:"Deus é amor, e quem permanece no amor permanece em Deus." },
    { ref:"Salmo 91:1", texto:"Quem habita no esconderijo do Altíssimo morará sob a sombra do Onipotente." },
    { ref:"Gálatas 6:9", texto:"Não nos cansemos de fazer o bem, pois a seu tempo ceifaremos, se não desanimarmos." },
    { ref:"Josué 1:9", texto:"Sê forte e corajoso. Não te assustes nem te perturbes, pois o Senhor teu Deus estará contigo." },
    { ref:"Salmo 32:8", texto:"Eu te instruirei e te ensinarei o caminho que deves seguir." },
    { ref:"Mateus 5:14", texto:"Vós sois a luz do mundo. Não se pode esconder uma cidade edificada sobre um monte." },
    { ref:"Hebreus 11:1", texto:"A fé é a certeza daquilo que esperamos e a prova das coisas que não vemos." },
    { ref:"Salmo 16:8", texto:"Tenho o Senhor sempre diante de mim; estando ele à minha direita, não serei abalado." },
    { ref:"João 15:13", texto:"Ninguém tem maior amor do que este: dar a vida pelos seus amigos." },
    { ref:"Apocalipse 21:4", texto:"Ele enxugará toda lágrima dos seus olhos; não haverá mais morte, nem luto, nem pranto." },
  ],
  Evangélica: [
    { ref:"João 14:6", texto:"Eu sou o caminho, a verdade e a vida." },
    { ref:"Salmo 119:105", texto:"Lâmpada para os meus pés é tua palavra, e luz para o meu caminho." },
    { ref:"2 Timóteo 1:7", texto:"Deus não nos deu espírito de covardia, mas de poder, amor e equilíbrio." },
    { ref:"Mateus 28:20", texto:"Estou convosco todos os dias até a consumação do século." },
    { ref:"João 16:33", texto:"No mundo tendes tribulações; mas tende bom ânimo, eu venci o mundo." },
    { ref:"Salmo 37:4", texto:"Tem o teu prazer no Senhor, e ele atenderá ao desejo do teu coração." },
    { ref:"Filipenses 4:6", texto:"Não andeis ansiosos por coisa alguma, mas em tudo fazei conhecidas as vossas petições." },
    { ref:"Isaías 41:10", texto:"Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus." },
    { ref:"2 Crônicas 7:14", texto:"Se o meu povo... se humilhar e orar... eu ouvirei dos céus e perdoarei." },
    { ref:"Romanos 10:9", texto:"Se com a tua boca confessares Jesus como Senhor... serás salvo." },
    { ref:"João 11:25", texto:"Eu sou a ressurreição e a vida; quem crê em mim, mesmo que morra, viverá." },
    { ref:"Lucas 1:37", texto:"Porque para Deus nenhuma palavra é impossível." },
    { ref:"Mateus 6:33", texto:"Buscai primeiro o reino de Deus e a sua justiça e todas estas coisas vos serão acrescentadas." },
    { ref:"Salmo 55:22", texto:"Lança sobre o Senhor o teu peso, e ele te susterá." },
    { ref:"1 Pedro 5:7", texto:"Lançai sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós." },
    { ref:"Provérbios 16:3", texto:"Confia ao Senhor as tuas obras, e os teus planos serão bem-sucedidos." },
    { ref:"Salmo 121:2", texto:"O meu socorro vem do Senhor, que fez os céus e a terra." },
    { ref:"Romanos 8:31", texto:"Se Deus é por nós, quem será contra nós?" },
    { ref:"Efésios 3:20", texto:"Aquele que pode fazer infinitamente mais do que tudo quanto pedimos ou pensamos." },
    { ref:"Tiago 1:17", texto:"Toda boa dádiva e todo dom perfeito vêm do alto." },
    { ref:"Miquéias 6:8", texto:"O que o Senhor pede: que pratiques a justiça, ames a misericórdia e andes humildemente com Deus." },
    { ref:"Deuteronômio 31:8", texto:"O Senhor vai adiante de ti e será contigo; não te abandonará." },
    { ref:"Salmo 23:4", texto:"Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum." },
    { ref:"João 10:10", texto:"Eu vim para que tenham vida e a tenham em abundância." },
    { ref:"Mateus 19:26", texto:"Para Deus tudo é possível." },
    { ref:"Isaías 55:11", texto:"Assim será a minha palavra: não voltará para mim vazia, mas realizará o que desejo." },
    { ref:"Salmo 145:18", texto:"O Senhor está perto de todos os que o invocam com sinceridade." },
    { ref:"Colossenses 3:23", texto:"Tudo o que fizerdes, fazei-o de boa vontade, como ao Senhor e não aos homens." },
    { ref:"Hebreus 13:8", texto:"Jesus Cristo é o mesmo ontem, hoje e eternamente." },
    { ref:"Salmo 30:5", texto:"Ao anoitecer pode aparecer o choro, mas de manhã vem a alegria." },
    { ref:"Apocalipse 3:8", texto:"Eis que diante de ti pus uma porta aberta, que ninguém pode fechar." },
  ],
  Judaica: [
    { ref:"Talmude Bavli, Sanhedrin 37a", texto:"Quem salva uma única vida, é como se tivesse salvo um mundo inteiro." },
    { ref:"Pirke Avot 1:14", texto:"Se não sou por mim, quem será? E se só por mim, o que sou? E se não agora, quando?" },
    { ref:"Shemá Yisrael (Deut 6:4)", texto:"Ouve, Israel: o Senhor é nosso Deus, o Senhor é Um." },
    { ref:"Levítico 19:18", texto:"Amarás ao teu próximo como a ti mesmo." },
    { ref:"Salmo 133:1", texto:"Quão bom e quão deleitoso é habitarem os irmãos em união." },
    { ref:"Provérbios 3:17", texto:"Seus caminhos são caminhos de agrado, e todas as suas veredas são paz." },
    { ref:"Miquéias 6:8", texto:"Fazer justiça, amar a misericórdia e andar humildemente com o teu Deus." },
    { ref:"Bereshit Rabah 8:5", texto:"A alma que Deus nos deu é pura. Ele a criou, ele a formou, ele a soprou em nós." },
    { ref:"Pirke Avot 2:4", texto:"Anule a sua vontade diante da vontade Dele, para que Ele anule a vontade dos outros diante da sua." },
    { ref:"Salmo 16:8", texto:"Coloco o Senhor diante de mim constantemente." },
    { ref:"Talmude, Berachot 54a", texto:"Uma pessoa deve sempre ter cuidado com a honra de sua esposa, pois a bênção do lar vem por causa dela." },
    { ref:"Tehilim 121:1", texto:"Erguo os meus olhos para os montes; donde me virá o socorro?" },
    { ref:"Mesilat Yesharim", texto:"O ser humano foi criado apenas para se alegrar com Deus." },
    { ref:"Pirke Avot 4:1", texto:"Quem é rico? Aquele que está satisfeito com o que tem." },
    { ref:"Deuteronômio 30:19", texto:"Escolhe a vida, para que vivas tu e os teus filhos." },
    { ref:"Salmo 27:1", texto:"O Eterno é minha luz e minha salvação; a quem temerei?" },
    { ref:"Isaías 2:4", texto:"Transformarão suas espadas em arados e suas lanças em podadeiras." },
    { ref:"Kohelet 9:11", texto:"Nem sempre os rápidos vencem a corrida, nem os fortes saem vitoriosos na batalha." },
    { ref:"Pirke Avot 3:14", texto:"Amado é o homem, pois foi criado à imagem de Deus." },
    { ref:"Salmo 145:9", texto:"O Eterno é bom para todos; sua misericórdia está sobre todas as suas obras." },
    { ref:"Lamentações 3:22", texto:"As misericórdias do Senhor não se esgotaram; suas compaixões não cessam." },
    { ref:"Isaías 40:31", texto:"Os que esperam no Eterno renovam as forças." },
    { ref:"Provérbios 31:10", texto:"Uma mulher de valor, quem a achará? O seu valor supera em muito o dos rubis." },
    { ref:"Talmude, Shabbat 127a", texto:"Estas são as coisas cujos frutos o homem come neste mundo: honrar pai e mãe, gemilut hassadim..." },
    { ref:"Salmo 92:2", texto:"É bom louvar ao Eterno e cantar ao teu nome, Altíssimo." },
    { ref:"Pirke Avot 1:2", texto:"O mundo se sustenta em três coisas: Torá, serviço divino e boas ações." },
    { ref:"Josué 1:9", texto:"Sê forte e corajoso! Não temas nem te desanimes." },
    { ref:"Salmo 118:24", texto:"Este é o dia que o Eterno criou; alegremo-nos e nos regozijemos nele." },
    { ref:"Zohar I:11b", texto:"As almas se conhecem antes de descer ao mundo. O encontro é um reencontro." },
    { ref:"Rashi sobre Bereshit 1:1", texto:"No princípio — para que o mundo fosse criado pelo amor." },
    { ref:"Pirke Avot 2:1", texto:"Sê tão cuidadoso com um mandamento menor quanto com um maior." },
  ],
  Islâmica: [
    { ref:"Surah Al-Baqarah 2:286", texto:"Allah não sobrecarrega uma alma além de sua capacidade." },
    { ref:"Surah Al-Inshirah 94:5", texto:"Com a dificuldade vem a facilidade." },
    { ref:"Surah Al-Imran 3:139", texto:"Não fraquejeis nem vos entristeçais, pois sereis os superiores se sois verdadeiros crentes." },
    { ref:"Hadith (Bukhari)", texto:"As ações valem pelas intenções." },
    { ref:"Surah Ar-Ra'd 13:11", texto:"Allah não muda a condição de um povo até que eles mudem o que está em si mesmos." },
    { ref:"Surah Az-Zumar 39:53", texto:"Não desespereis da misericórdia de Allah. Allah perdoa todos os pecados." },
    { ref:"Hadith (Muslim)", texto:"O mundo inteiro é uma mesquita." },
    { ref:"Surah Al-Fatiha 1:1", texto:"Em nome de Allah, o Clemente, o Misericordioso." },
    { ref:"Surah Al-Baqarah 2:153", texto:"Ó crentes! Buscai auxílio na paciência e na oração." },
    { ref:"Hadith (Bukhari)", texto:"Sorrir para seu irmão é uma caridade." },
    { ref:"Surah Al-Ankabut 29:69", texto:"Aqueles que se esforçam por Nós, guiá-los-emos pelos Nossos caminhos." },
    { ref:"Surah Al-Baqarah 2:186", texto:"Quando os Meus servos te perguntarem sobre Mim, dize: Estou próximo." },
    { ref:"Hadith (Abu Dawud)", texto:"Aquele que planta uma árvore recebe recompensa por cada sombra que ela der." },
    { ref:"Surah Al-Isra 17:44", texto:"Não há coisa alguma que não O glorifique, mas vós não compreendeis a Sua glorificação." },
    { ref:"Surah Yusuf 12:87", texto:"Não desespereis da misericórdia de Allah. Apenas os descrentes desesperam." },
    { ref:"Hadith (Tirmidhi)", texto:"O melhor de vós é aquele que aprende o Alcorão e o ensina." },
    { ref:"Surah Al-Hujurat 49:13", texto:"O mais honrado entre vós perante Allah é o mais temente." },
    { ref:"Surah Al-Anfal 8:46", texto:"E sede pacientes. Allah está com os pacientes." },
    { ref:"Hadith (Bukhari)", texto:"O forte não é aquele que derruba os outros, mas aquele que controla a si mesmo na ira." },
    { ref:"Surah Al-Mulk 67:2", texto:"Ele criou a morte e a vida para vos testar." },
    { ref:"Hadith (Muslim)", texto:"Facilitai as coisas às pessoas e não as dificulteis." },
    { ref:"Surah Al-Nahl 16:97", texto:"Quem fizer boas obras, terá vida boa neste mundo e recompensa no Além." },
    { ref:"Surah Luqman 31:34", texto:"Somente Allah conhece o que está nos úteros e o que cada alma ganhará amanhã." },
    { ref:"Hadith (Bukhari)", texto:"Nenhum de vós crê verdadeiramente até que deseje para seu irmão o que deseja para si mesmo." },
    { ref:"Surah Al-Imran 3:200", texto:"Sede pacientes, fortalecei-vos e mantende vossos postos." },
    { ref:"Hadith (Tirmidhi)", texto:"Aquele que remove uma dificuldade de um crente, Allah removerá uma dificuldade dele." },
    { ref:"Surah Al-Zumar 39:9", texto:"São iguais os que sabem e os que não sabem? Só os dotados de entendimento refletem." },
    { ref:"Surah Al-Kahf 18:46", texto:"Riqueza e filhos são ornamentos da vida mundana, mas as boas obras duram eternamente." },
    { ref:"Hadith (Abu Hurairah)", texto:"Allah é belo e ama a beleza." },
    { ref:"Surah Al-Hashr 59:18", texto:"Ó crentes! Temei a Allah e que cada alma observe o que preparou para o amanhã." },
    { ref:"Surah Al-Imran 3:160", texto:"Se Allah vos socorrer, ninguém poderá vencer-vos." },
  ],
  Budista: [
    { ref:"Dhammapada 1:1", texto:"A mente é a precursora de todos os atos. Se um homem fala ou age com uma mente impura, o sofrimento o seguirá." },
    { ref:"Buda Gautama", texto:"Três coisas não podem ser escondidas por muito tempo: o Sol, a Lua e a Verdade." },
    { ref:"Dhammapada 183", texto:"Não fazer nenhum mal, cultivar o bem e purificar a mente — este é o ensinamento dos Budas." },
    { ref:"Buda Gautama", texto:"Você mesmo, tanto quanto qualquer pessoa no universo inteiro, merece seu amor e afeição." },
    { ref:"Majjhima Nikaya", texto:"A paz vem de dentro. Não a busques sem." },
    { ref:"Buda Gautama", texto:"O passado já se foi, o futuro ainda não chegou. Há apenas um momento para você viver: este." },
    { ref:"Dhammapada 21", texto:"A diligência é o caminho para o imortal. A negligência é o caminho para a morte." },
    { ref:"Buda Gautama", texto:"Se você acender a lâmpada para outra pessoa, também iluminará seu próprio caminho." },
    { ref:"Theravada", texto:"Não há caminho para a felicidade. A felicidade é o caminho." },
    { ref:"Buda Gautama", texto:"Acredite em nada simplesmente porque você ouviu. Teste tudo por si mesmo." },
    { ref:"Dhammapada 197", texto:"Oh, felizes são aqueles que não têm nada de seu!" },
    { ref:"Buda Gautama", texto:"Três coisas são necessárias para o sucesso: grande esforço, perseverança e sabedoria." },
    { ref:"Majjhima Nikaya", texto:"Todo o sofrimento nasce do desejo. O fim do desejo é o fim do sofrimento." },
    { ref:"Buda Gautama", texto:"Cada manhã nascemos de novo. O que fazemos hoje é o que mais importa." },
    { ref:"Dhammapada 103", texto:"Embora alguém conquiste mil vezes mil homens na batalha, quem conquista a si mesmo é o maior conquistador." },
    { ref:"Anguttara Nikaya", texto:"Cuida dos seus pensamentos, eles se tornam palavras. Cuida das palavras, elas se tornam ações." },
    { ref:"Buda Gautama", texto:"Quando você percebe que não há nada que falta, o mundo inteiro pertence a você." },
    { ref:"Theravada", texto:"A paz começa com um sorriso." },
    { ref:"Buda Gautama", texto:"Um nobre estudante torna-se um mestre quando cuida dos alunos como cuida de si mesmo." },
    { ref:"Majjhima Nikaya", texto:"Como a flor de lótus emerge da lama imaculada, que você floresça em qualquer circunstância." },
    { ref:"Dhammapada 223", texto:"Vença a raiva pelo amor; vença o mal pelo bem; vença o avaro pela generosidade." },
    { ref:"Buda Gautama", texto:"A mente que se abre a uma nova ideia nunca volta ao seu tamanho original." },
    { ref:"Theravada", texto:"Compaixão é a base de toda moral." },
    { ref:"Buda Gautama", texto:"Mesmo a morte não é para ser temida por quem viveu com sabedoria." },
    { ref:"Dhammapada 222", texto:"Quem controla sua raiva como um cocheiro controla uma carruagem — esse é verdadeiro mestre." },
    { ref:"Buda Gautama", texto:"Se você soubesse o que eu sei sobre o poder de dar, nunca deixaria de compartilhar." },
    { ref:"Theravada", texto:"Nada é permanente. Com compreensão disso vem serenidade." },
    { ref:"Buda Gautama", texto:"Trabalha pela sua salvação. Não dependa de ninguém." },
    { ref:"Majjhima Nikaya", texto:"Viver bem e belamente é suficiente." },
    { ref:"Dhammapada 1", texto:"Somos o que pensamos. Tudo que somos surge de nossos pensamentos." },
    { ref:"Buda Gautama", texto:"O caminho do meio é o caminho da sabedoria." },
  ],
  Espírita: [
    { ref:"O Livro dos Espíritos, Q.115", texto:"O espírito não é senão um ser moral que, depois de cada existência corporal, se acha num estado mais ou menos avançado." },
    { ref:"Chico Xavier", texto:"Embora ninguém possa voltar atrás e fazer um novo começo, qualquer um pode começar agora e fazer um novo fim." },
    { ref:"O Evangelho Segundo o Espiritismo", texto:"Amai-vos uns aos outros: esse é todo o dever." },
    { ref:"Chico Xavier", texto:"Nenhuma saudade de amanhã nublará o sol de amanhã." },
    { ref:"O Livro dos Espíritos, Q.918", texto:"Fazei ao próximo o que queríeis que vos fizessem: eis toda a lei." },
    { ref:"Allan Kardec", texto:"Fora da caridade não há salvação." },
    { ref:"Chico Xavier", texto:"A felicidade não tem endereço certo. Mora em nós, se a cultivamos com amor." },
    { ref:"O Livro dos Médiuns", texto:"Só a prática do bem leva ao conhecimento das coisas superiores." },
    { ref:"Chico Xavier", texto:"Se é verdade que toda ação tem sua reação, seja então bondoso(a), para que você mereça receber bondade." },
    { ref:"O Livro dos Espíritos, Q.730", texto:"A reencarnação é o principal agente do progresso humano." },
    { ref:"André Luiz (Chico Xavier)", texto:"A oração é a mais nobre função do ser humano, porque é a linguagem da alma com Deus." },
    { ref:"Allan Kardec", texto:"Sede bons e caridosos. Tudo o mais lhe será dado por acréscimo." },
    { ref:"Chico Xavier", texto:"Trabalha, luta e crê. Estas três palavras resumem o mais belo programa de vida." },
    { ref:"O Evangelho Segundo o Espiritismo", texto:"Nada acontece sem a permissão de Deus. Tudo o que acontece é para melhor." },
    { ref:"Bezerra de Menezes", texto:"O médico que não reza não cura. A cura é de Deus." },
    { ref:"Chico Xavier", texto:"A vida é um dom precioso. Não a desperdices com rancores nem ressentimentos." },
    { ref:"O Livro dos Espíritos", texto:"Progresso moral e intelectual são a finalidade da existência." },
    { ref:"Chico Xavier", texto:"Não te preocupes em ser feliz. Preocupa-te em fazer os outros felizes." },
    { ref:"Allan Kardec", texto:"O que o Espiritismo nos ensina é que amor e sabedoria são os dois polos da existência." },
    { ref:"Chico Xavier", texto:"Somos eternos aprendizes em escola chamada vida." },
    { ref:"O Evangelho Segundo o Espiritismo", texto:"Cada sofrimento é uma lição; cada alegria, um estímulo." },
    { ref:"Emmanuel (Chico Xavier)", texto:"Perdoa sempre. Nunca é tarde para o recomeço." },
    { ref:"Chico Xavier", texto:"A bondade é o perfume que o coração oferece quando pisado." },
    { ref:"O Livro dos Espíritos, Q.222", texto:"O corpo morre, mas o espírito é imortal." },
    { ref:"Chico Xavier", texto:"Nunca se afaste das crianças e dos velhos, pois ambos lhe darão a dimensão exata da vida." },
    { ref:"Allan Kardec", texto:"Toda a lei de Deus está contida neste princípio: amar a Deus e o próximo." },
    { ref:"Chico Xavier", texto:"O homem que crê na imortalidade vive diferente do que pensa que vai morrer." },
    { ref:"Emmanuel (Chico Xavier)", texto:"A vida é uma escola. Aprende enquanto podes." },
    { ref:"O Evangelho Segundo o Espiritismo", texto:"Felizes os que têm o coração puro, porque verão a Deus." },
    { ref:"Chico Xavier", texto:"A dor é uma bênção disfarçada — ela nos leva à reflexão." },
    { ref:"Allan Kardec", texto:"O bem que fazemos para os outros é o bem que fazemos para nós mesmos." },
  ],
  Universal: [
    { ref:"Rumi", texto:"O que você busca está te buscando." },
    { ref:"Lao Tsé", texto:"Conhecer os outros é sabedoria. Conhecer a si mesmo é iluminação." },
    { ref:"Osho", texto:"Seja corajoso o suficiente para viver criativamente." },
    { ref:"Khalil Gibran", texto:"A dor é a ruptura do invólucro que encerra a vossa compreensão." },
    { ref:"Thich Nhat Hanh", texto:"A paz está em cada passo. A jornada é o destino." },
    { ref:"Rumi", texto:"Ontem sou inteligente, então quero mudar o mundo. Hoje sou sábio, então estou me mudando." },
    { ref:"Epicteto", texto:"Não há nada de bem ou mal além das escolhas morais." },
    { ref:"Marcus Aurelius", texto:"A qualidade dos seus pensamentos determina a qualidade da sua vida." },
    { ref:"Lao Tsé", texto:"A viagem de mil milhas começa com um único passo." },
    { ref:"Kahlil Gibran", texto:"Seu filho não é seu filho. É filho e filha do desejo da Vida por si mesma." },
    { ref:"Alan Watts", texto:"Você não é uma gota no oceano. Você é o oceano inteiro numa gota." },
    { ref:"Rumi", texto:"Quando encontrar pessoas com amor, faça com que se levantem." },
    { ref:"Dalai Lama", texto:"Seja gentil sempre que possível. E é sempre possível." },
    { ref:"Eckhart Tolle", texto:"A maioria dos problemas humanos vêm de não conseguir ficar em silêncio por uma hora." },
    { ref:"Carl Jung", texto:"Quem olha para fora sonha. Quem olha para dentro desperta." },
    { ref:"Rumi", texto:"Esqueça a segurança. Viva onde você teme viver." },
    { ref:"Seneca", texto:"Não é que tenhamos pouco tempo, é que desperdiçamos muito." },
    { ref:"Paulo Coelho", texto:"Quando você quer algo, todo o universo conspira para que você realize seu desejo." },
    { ref:"Khalil Gibran", texto:"O amor não possui, nem se deixa possuir. Pois o amor é suficiente para o amor." },
    { ref:"Lao Tsé", texto:"Ser amado profundamente por alguém te dá força; amar alguém profundamente te dá coragem." },
    { ref:"Rumi", texto:"Por trás de toda imagem existe o Criador. Por trás de toda palavra, o Verbo." },
    { ref:"Thich Nhat Hanh", texto:"A esperança é importante porque pode nos tornar presentes para o momento." },
    { ref:"Carl Sagan", texto:"Somos poeira de estrelas contemplando estrelas." },
    { ref:"Viktor Frankl", texto:"Entre o estímulo e a resposta existe um espaço. Nesse espaço está o poder de escolher." },
    { ref:"Epicteto", texto:"Não são as coisas que nos perturbam, mas as opiniões que temos sobre elas." },
    { ref:"Rumi", texto:"Silêncio é o oceano do conhecimento." },
    { ref:"Lao Tsé", texto:"O maior líder é aquele de quem o povo mal sabe que existe." },
    { ref:"Marcus Aurelius", texto:"Perde a sua noção do tempo. Abraça o momento presente." },
    { ref:"Khalil Gibran", texto:"E quando ele voltar no vento, abre os teus braços para recebê-lo." },
    { ref:"Rumi", texto:"Você não é uma gota no oceano, você é o oceano inteiro em uma gota." },
    { ref:"Dalai Lama", texto:"Se você quer que os outros sejam felizes, pratique compaixão. Se você quer ser feliz, pratique compaixão." },
  ],
};

const getVersiculoDoDia = (dia, tradicao = "Universal") => {
  const pool = VERSICULOS[tradicao] || VERSICULOS["Universal"];
  return pool[(dia - 1) % pool.length];
};

const TRADICOES_DISPONIVEIS = Object.keys(VERSICULOS);

// ============================================================
// DATA: numerologia.js
// ============================================================
// ============================================================
// KOMPARAI — NUMEROLOGIA
// Número do Caminho de Vida (Life Path Number)
// ============================================================

// Reduz número até chegar a 1-9, 11, 22, 33 (mestres)
const reduceNumber = (n) => {
  while (n > 9 && n !== 11 && n !== 22 && n !== 33) {
    n = String(n).split('').reduce((s, d) => s + parseInt(d), 0);
  }
  return n;
};

const calcNumerologia = (day, month, year) => {
  if (!day || !month || !year) return null;
  const sumDay   = reduceNumber(day);
  const sumMonth = reduceNumber(month);
  const sumYear  = String(year).split('').reduce((s, d) => s + parseInt(d), 0);
  const total    = reduceNumber(reduceNumber(sumDay) + reduceNumber(sumMonth) + reduceNumber(sumYear));
  return total;
};

const NUMEROS = {
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

const getNumerologia = (day, month, year) => {
  const num = calcNumerologia(day, month, year);
  return num ? NUMEROS[num] || null : null;
};

// Número pessoal do dia (ciclo anual)
const getNumeroDoDia = (day, month, year, birthDay, birthMonth) => {
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

const HUMOR_EXPANDIDO = {
  feliz: {
    emoji: "😄", label: "Feliz", cor: "#F59E0B",
    abertura: "Que energia linda a de hoje! ✨",
    acolhimento: "Dias assim são raros e preciosos. Sua alegria não é casual — ela é o reflexo de tudo que você construiu, das escolhas que fez e da pessoa que se tornou. Permita-se sentir isso completamente.",
    motivacao: "Aproveite esse estado para fazer algo que você vinha adiando. A felicidade genuína é combustível de altíssima qualidade — use-a com intenção e assista ao que acontece ao seu redor.",
    atividades: ["📞 Ligue para alguém que está com saudade de você", "📝 Escreva sobre o que te faz feliz hoje — vai querer lembrar disso", "🎵 Coloque sua música favorita no máximo", "💪 Comece aquela meta que estava esperando o momento certo"],
    desafio: "Espalhe sua alegria hoje — faça um elogio genuíno para 3 pessoas.",
    musica: "Algo animado e cheio de energia — Bruno Mars, Ivete Sangalo ou o que fizer seu coração acelerar.",
  },
  focado: {
    emoji: "🎯", label: "Focado", cor: "#3B82F6",
    abertura: "Sua mente está afiada hoje. 🧠",
    acolhimento: "Esse estado de foco é um presente raro. Significa que sua mente está alinhada com seus objetivos, livre de distrações internas. Não desperdice — dias assim definem semanas inteiras.",
    motivacao: "Escolha a tarefa mais importante e vá fundo. Não abra redes sociais antes de terminar o bloco principal de trabalho. Você está no estado que grandes resultados requerem.",
    atividades: ["📴 Coloque o celular no modo 'não perturbe' por 2 horas", "📋 Liste suas 3 prioridades antes de começar qualquer coisa", "🎧 Coloque um fundo musical instrumental e entre em modo flow", "⏱️ Use a técnica Pomodoro: 25 minutos focado, 5 de pausa"],
    desafio: "Conclua hoje aquela tarefa que você está postergando há dias.",
    musica: "Lofi hip-hop, música clássica ou qualquer coisa instrumental sem letra.",
  },
  cansado: {
    emoji: "😴", label: "Cansado", cor: "#8B5CF6",
    abertura: "Tudo bem. O cansaço também faz parte. 💜",
    acolhimento: "Seu corpo e sua mente estão pedindo um momento de pausa — e isso não é fraqueza, é sabedoria. O cansaço é a linguagem que seu organismo usa para dizer que você importa o suficiente para ser cuidado. Ouça essa mensagem com carinho.",
    motivacao: "Você não precisa dar 100% hoje. Às vezes 60% já é incrível diante das circunstâncias. Faça o essencial com calma, cuide de si, e amanhã você vai se surpreender com quanta energia voltou.",
    atividades: ["☕ Prepare uma bebida quente e sente-se por 10 minutos sem fazer nada", "🚶 Uma caminhada de 15 minutos ao ar livre renova mais do que parece", "💤 Se possível, uma soneca de 20 minutos muda o dia", "🛁 Uma ducha quente à noite para desligar o cérebro"],
    desafio: "Escolha UMA coisa pra fazer hoje. Só uma. E faça bem-feita.",
    musica: "Algo suave e calmo — bossa nova, jazz ou lo-fi.",
  },
  ansioso: {
    emoji: "😰", label: "Ansioso", cor: "#EF4444",
    abertura: "Respira. Você está aqui e está bem. 🌬️",
    acolhimento: "A ansiedade é desconfortável, mas ela não é sua inimiga — é um sinal de que algo importa para você. O problema não é sentir ansiedade, é deixar que ela tome as decisões. Você é maior do que esse sentimento, mesmo quando não parece.",
    motivacao: "Quebre o ciclo: ao invés de pensar no que pode dar errado, escolha UMA ação concreta e pequena que você pode fazer agora. A ação dissolve a ansiedade melhor do que qualquer pensamento. Comece pelo menor passo.",
    atividades: ["🫁 Respire: 4 segundos dentro, 7 de pausa, 8 para fora — repita 4 vezes", "📓 Escreva o que está te preocupando — tirar da cabeça alivia", "🚶 Mova o corpo: 10 minutos de caminhada reduz cortisol imediatamente", "📵 Fique 1 hora longe de notícias e redes sociais"],
    desafio: "Identifique o menor passo possível em relação ao que te preocupa — e dê ele agora.",
    musica: "Música calma, frequências 432hz ou sons da natureza.",
  },
  inspirado: {
    emoji: "✨", label: "Inspirado", cor: "#10B981",
    abertura: "Hoje você está em modo criativo total. 🌟",
    acolhimento: "Inspiração é rara e não avisa quando vai embora. Esse estado que você sente agora é ouro puro — é quando as melhores ideias nascem, quando conexões impossíveis se tornam óbvias, quando você acessa o melhor de si mesmo.",
    motivacao: "Não deixe escapar: registre tudo que vier à mente. Escreva, grave um áudio, rabisque. A inspiração precisa de terra fértil para virar realidade — dê a ela papel, tela ou qualquer suporte. O mundo precisa do que só você pode criar.",
    atividades: ["📓 Abra um caderno e deixe as ideias fluírem sem julgamento por 15 minutos", "🎨 Crie algo — um texto, um projeto, um desenho, uma receita", "🗣️ Compartilhe suas ideias com alguém que vai potencializá-las", "🎯 Conecte sua inspiração com um projeto real que você quer tirar do papel"],
    desafio: "Tire do papel pelo menos uma ideia que ficou na sua cabeça há mais de uma semana.",
    musica: "Algo que te levanta — Bono, Hans Zimmer, ou o que faz sua criatividade explodir.",
  },
};

// Frases de famosos por humor (expandidas)
const HUMOR_FRASES_EXPANDIDAS = {
  feliz: [
    { famoso:"Ivete Sangalo", emoji:"🎤", quote:"A vida é muito curta para ser vivida de forma medíocre.", contexto:"Artista que transformou alegria em carreira de décadas." },
    { famoso:"Will Smith", emoji:"✨", quote:"A felicidade não é estação do ano — é uma prática diária.", contexto:"Ator que encontrou alegria mesmo nos momentos mais duros." },
    { famoso:"Bruno Mars", emoji:"🎵", quote:"Eu só quero fazer coisas que façam as pessoas se sentirem bem.", contexto:"Músico cujas canções se tornaram trilha sonora da alegria global." },
    { famoso:"Pharrell Williams", emoji:"😊", quote:"Felicidade é a verdade.", contexto:"Cantor que criou o hino da alegria mais ouvido do século XXI." },
    { famoso:"Walt Disney", emoji:"🏰", quote:"Todos os sonhos podem se tornar realidade se tivermos coragem de persegui-los.", contexto:"Homem que construiu um império sobre pura alegria e imaginação." },
  ],
  focado: [
    { famoso:"Steve Jobs", emoji:"🍎", quote:"Foco é dizer não a cem boas ideias.", contexto:"Fundador da Apple, que sabia que menos é mais." },
    { famoso:"Kobe Bryant", emoji:"🏀", quote:"A única diferença entre os bons e os grandes é o trabalho das 3 da manhã.", contexto:"Lenda do basquete cujo foco era lendário." },
    { famoso:"Marta", emoji:"⚽", quote:"Você tem que lutar para alcançar seu sonho.", contexto:"A melhor jogadora do mundo venceu na base do foco inabalável." },
    { famoso:"Elon Musk", emoji:"🚀", quote:"O trabalho mais importante que você pode fazer é focado.", contexto:"Fundador de Tesla e SpaceX, mestre em concentração extrema." },
    { famoso:"Rafael Nadal", emoji:"🎾", quote:"Cada dia você tem que trabalhar mais que o dia anterior.", contexto:"Tenista que transformou disciplina em 22 títulos de Grand Slam." },
  ],
  cansado: [
    { famoso:"Bob Marley", emoji:"🎸", quote:"Você não sabe quão forte é até que ser forte seja a única opção.", contexto:"Ícone jamaicano que criou música em meio a circunstâncias brutais." },
    { famoso:"Adele", emoji:"🎤", quote:"A dor que você sente hoje é a força que você sentirá amanhã.", contexto:"Cantora que transformou cansaço emocional em álbuns históricos." },
    { famoso:"Stephen Hawking", emoji:"🔭", quote:"Por mais difícil que seja a vida, sempre há algo que você pode fazer.", contexto:"Físico que revolucionou a ciência com quase nenhum movimento." },
    { famoso:"Dalai Lama", emoji:"🙏", quote:"O sono é a melhor meditação.", contexto:"Líder espiritual que ensina que descanso é prática sagrada." },
    { famoso:"Michael Jordan", emoji:"🏀", quote:"Talento ganha jogos, mas trabalho em equipe e inteligência ganham campeonatos.", contexto:"Mesmo Jordan precisava de descanso para voar." },
  ],
  ansioso: [
    { famoso:"Muhammad Ali", emoji:"🥊", quote:"Impossível é apenas uma palavra usada por homens pequenos.", contexto:"Boxeador que enfrentou o medo como parte da estratégia de vitória." },
    { famoso:"Albert Einstein", emoji:"🧠", quote:"Um problema não se resolve com o mesmo nível de pensamento que o criou.", contexto:"Físico que transformava ansiedade em curiosidade investigativa." },
    { famoso:"Malala Yousafzai", emoji:"✊", quote:"Quando o mundo fica quieto, uma voz se torna poderosa.", contexto:"Menina que enfrentou o maior dos medos com coragem absoluta." },
    { famoso:"Dalai Lama", emoji:"🙏", quote:"Se tem solução, não há razão para ansiedade. Se não tem, ansiedade não ajuda.", contexto:"Filosofia budista que dissolve a ansiedade com lógica compassiva." },
    { famoso:"Frida Kahlo", emoji:"🎨", quote:"Coloco minha dor em tela e ela deixa de me pertencer.", contexto:"Artista que transformou sofrimento em beleza imortal." },
  ],
  inspirado: [
    { famoso:"Lady Gaga", emoji:"🎭", quote:"Não sou arrogante. Só sei que sou boa.", contexto:"Artista que usa inspiração como combustível de criação constante." },
    { famoso:"J.K. Rowling", emoji:"🧙", quote:"Você não precisa de mágica. Já tem todo o poder dentro de si.", contexto:"Escritora que criou o maior universo literário do século." },
    { famoso:"Bono", emoji:"🎸", quote:"A música pode mudar o mundo porque pode mudar as pessoas.", contexto:"Músico que transformou inspiração em movimento global." },
    { famoso:"Salvador Dalí", emoji:"🎨", quote:"Não tenha medo da perfeição — você nunca a alcançará.", contexto:"Artista surrealista que libertou a criatividade de todas as amarras." },
    { famoso:"Pablo Picasso", emoji:"🖌️", quote:"A inspiração existe, mas tem que te encontrar trabalhando.", contexto:"Gênio que produziu mais de 20 mil obras na vida." },
  ],
};

// ============================================================
// DATA: conteudo.js
// ============================================================
// ============================================================
// KOMPARAI — HISTÓRIAS INSPIRADORAS DO DIA
// 31 histórias rotativas (uma por dia do mês)
// ============================================================
const HISTORIAS = {
  1:  { titulo:"A garagem que mudou o mundo", emoji:"🍎", famoso:"Steve Jobs",
        historia:"Em 1976, dois Steves montaram um computador numa garagem com zero investimento. Jobs tinha 21 anos, Wozniak 25. Apenas uma ideia e uma obsessão. Meses depois venderam 50 computadores para uma loja local. Jobs viu naquilo o futuro.",
        licao:"Toda grande empresa começou em algum lugar pequeno. A questão não é onde você começa — é o que você enxerga quando olha para o futuro." },
  2:  { titulo:"O menino descalço de Alagoas", emoji:"⚽", famoso:"Marta",
        historia:"Numa cidade pequena de Alagoas, uma menina jogava futebol descalça. Os meninos não queriam ela no time — ela era boa demais. Aos 14 anos, viajou sozinha para o Rio, sem família, sem dinheiro. Essa menina era Marta. Seis vezes eleita a melhor do mundo.",
        licao:"Os recursos que você não tem forçam você a desenvolver o que ninguém pode te dar." },
  3:  { titulo:"O homem demitido da própria empresa", emoji:"💡", famoso:"Steve Jobs",
        historia:"Em 1985, Steve Jobs foi demitido da Apple — que ele havia fundado 9 anos antes. Aos 30 anos. Publicamente. Para o mundo, era o fim. Para Jobs, foi o começo. Nos 11 anos seguintes fundou a NeXT e comprou a Pixar. Quando a Apple estava falindo, chamaram-no de volta.",
        licao:"O pior dia da sua vida pode estar preparando o terreno para o melhor capítulo." },
  4:  { titulo:"108 minutos que mudaram a história", emoji:"🚀", famoso:"Yuri Gagarin",
        historia:"Em abril de 1961, Yuri Gagarin entrou numa cápsula do tamanho de um armário e orbitou a Terra em 108 minutos. Ninguém sabia se voltaria vivo. Os riscos eram incalculáveis. Mas Gagarin disse simplesmente: 'Vamos.' Quando pousou, era a pessoa mais famosa do mundo.",
        licao:"'Vamos.' Duas palavras. Uma decisão. É assim que a história é feita." },
  5:  { titulo:"A música que levou 40 minutos", emoji:"🎤", famoso:"Adele",
        historia:"Era tarde da noite. Adele acabara de terminar um relacionamento importante. Sentou ao piano e compôs 'Someone Like You' em 40 minutos. Sem cálculos. Apenas dor transformada em nota. A música chegou ao número 1 em mais de 25 países.",
        licao:"Autenticidade não pode ser fabricada. Quando você para de tentar agradar e começa a ser verdadeiro, algo eterno nasce." },
  6:  { titulo:"O rei que ninguém queria", emoji:"🏀", famoso:"LeBron James",
        historia:"Em Akron, Ohio, uma criança dormia em ginásios com amigos porque não tinha onde dormir. A mãe lutava para sobreviver. Esse garoto era LeBron James. O mundo esperava que ele falhasse. Ele não falhou. 4 títulos da NBA.",
        licao:"Quando o mundo duvida de você, use essa dúvida como combustível." },
  7:  { titulo:"A âncora do impossível", emoji:"🔭", famoso:"Stephen Hawking",
        historia:"Aos 21 anos, Hawking recebeu diagnóstico de ELA. Os médicos davam 2 anos. Nos 55 anos seguintes revolucionou a física teórica e escreveu 'Uma Breve História do Tempo' — 10 milhões de cópias vendidas.",
        licao:"Seus limites são menores do que você pensa." },
  8:  { titulo:"O rapper que vendeu CDs no metrô", emoji:"🎤", famoso:"Jay-Z",
        historia:"Jay-Z foi rejeitado por todas as gravadoras de Nova York. Fundou a sua própria. Começou vendendo CDs no metrô. Tornou-se o primeiro bilionário do hip-hop.",
        licao:"Quando o mercado fecha a porta, construa a sua." },
  9:  { titulo:"Demitida por não ter rosto para TV", emoji:"🌟", famoso:"Oprah Winfrey",
        historia:"Oprah foi demitida do seu primeiro emprego de TV por ser 'inadequada'. Nascida na pobreza extrema, seguiu em frente. Tornou-se a apresentadora mais influente do mundo e a primeira afro-americana bilionária.",
        licao:"O que alguém chama de limitação pode ser exatamente o que te diferencia." },
  10: { titulo:"O músico que nunca desistiu", emoji:"🎸", famoso:"Bono",
        historia:"Bono e o U2 foram rejeitados por várias gravadoras. Um executivo disse: 'Bandas de quatro garotos de guitarra estão fora de moda.' O U2 vendeu mais de 170 milhões de álbuns. Bono tornou-se um dos ativistas mais respeitados do planeta.",
        licao:"Continue. Aqueles que disseram não eram apenas o filtro que separava quem realmente queria." },
  11: { titulo:"A menina que levou um tiro pela educação", emoji:"✊", famoso:"Malala",
        historia:"Em 2012, Malala Yousafzai, com 15 anos, levou um tiro na cabeça por defender o direito das meninas à educação. Sobreviveu. Aos 17 anos tornou-se a mais jovem ganhadora do Nobel da Paz.",
        licao:"O que tentaram calar em você pode se tornar sua maior mensagem." },
  12: { titulo:"O cientista que falhou 9.999 vezes", emoji:"💡", famoso:"Thomas Edison",
        historia:"Edison tentou criar a lâmpada elétrica por anos. Quando perguntado sobre as tentativas fracassadas, disse: 'Não falhei. Aprendi 9.999 maneiras que não funcionam.' Na tentativa 10.000, funcionou.",
        licao:"A persistência é o único diferencial que o talento não supera." },
  13: { titulo:"De carpinteiro a estrela", emoji:"🎬", famoso:"Harrison Ford",
        historia:"Harrison Ford era carpinteiro e instalava portas em Hollywood quando foi escalado para Star Wars quase que por acaso. George Lucas o viu lendo falas com outro ator e o contratou na hora.",
        licao:"Esteja no lugar certo fazendo o trabalho certo. A oportunidade abre a porta que você está consertando." },
  14: { titulo:"O cantor que não conseguia falar", emoji:"🎵", famoso:"Elton John",
        historia:"Elton John entrou para a Academia Real de Música de Londres aos 11 anos com uma bolsa. Mas era tímido a ponto de mal conseguir falar com estranhos. Transformou essa timidez em extravagância. Vendeu mais de 300 milhões de discos.",
        licao:"Sua maior fraqueza, bem administrada, pode se tornar sua maior força." },
  15: { titulo:"Escreveu em cafés para não congelar", emoji:"🧙", famoso:"J.K. Rowling",
        historia:"J.K. Rowling era mãe solteira vivendo de assistência social. Escrevia nos cafés porque o aquecimento de casa não funcionava. Harry Potter foi recusado por 12 editoras. A 13ª aceitou. Hoje é a escritora mais rica do mundo.",
        licao:"Escreva o seu livro mesmo que a casa esteja fria." },
  16: { titulo:"Faliu duas vezes antes dos 40", emoji:"🚗", famoso:"Henry Ford",
        historia:"Henry Ford fundou e faliu duas empresas antes de criar a Ford. A terceira não foi sorte — foi a sabedoria acumulada de dois fracassos. A Ford inventou a linha de montagem e democratizou o automóvel.",
        licao:"A terceira tentativa carrega o aprendizado das duas primeiras." },
  17: { titulo:"O piloto que escreveu para crianças", emoji:"📖", famoso:"Saint-Exupéry",
        historia:"Antoine de Saint-Exupéry era piloto de guerra. Escreveu 'O Pequeno Príncipe' durante uma viagem de trem nos EUA, num período de exílio e solidão. O livro mais traduzido da história, depois da Bíblia.",
        licao:"Suas fases mais difíceis podem produzir as obras mais bonitas." },
  18: { titulo:"25 dólares e um sonho", emoji:"💪", famoso:"Arnold Schwarzenegger",
        historia:"Arnold chegou nos EUA sem falar inglês e sem dinheiro. Especialistas disseram que seu sotaque seria impeditivo. Virou milionário com imóveis antes de ser ator. Depois, o maior astro de ação. Depois, governador.",
        licao:"As limitações que outros enxergam em você são frequentemente as que você supera com mais facilidade." },
  19: { titulo:"O boxeador que perdeu tudo e voltou", emoji:"🥊", famoso:"Muhammad Ali",
        historia:"Muhammad Ali foi banido do boxe por 3 anos no auge da carreira. Perdeu o título. Perdeu dinheiro. Voltou aos 32 anos e se tornou tricampeão mundial. 'Impossível' era sua palavra favorita para desafiar.",
        licao:"O que tentam tirar de você com força mostra o quanto você vale." },
  20: { titulo:"A voz que o mundo não queria ouvir", emoji:"🎤", famoso:"Nina Simone",
        historia:"Nina Simone queria ser pianista clássica — a primeira afro-americana no Curtis Institute. Foi rejeitada. Canalizou a raiva no jazz e no blues. Tornou-se uma das maiores vozes da história da música.",
        licao:"A porta fechada te empurrou para a janela certa." },
  21: { titulo:"500 livros e uma máquina de escrever", emoji:"📚", famoso:"Isaac Asimov",
        historia:"Isaac Asimov publicou mais de 500 livros ao longo da vida — uma média de um a cada duas semanas. Escrevia 7 dias por semana, incluindo feriados. Não por obrigação. Por paixão.",
        licao:"Quando o trabalho e a paixão se encontram, a disciplina deixa de ser esforço." },
  22: { titulo:"O menino que não conseguia ler", emoji:"🎸", famoso:"John Lennon",
        historia:"John Lennon tinha dislexia e era considerado 'problemático' na escola. Seus professores disseram que não chegaria a lugar nenhum. Co-fundou os Beatles e escreveu 'Imagine', um dos maiores hinos de paz.",
        licao:"O sistema que te reprova muitas vezes não tem categorias para te classificar. Isso não é fraqueza — é singularidade." },
  23: { titulo:"De pastora a bilionária", emoji:"🌟", famoso:"Oprah Winfrey",
        historia:"Oprah nasceu na pobreza extrema, foi criada pela avó numa fazenda sem banheiro interno, sofreu abusos. Conseguiu uma bolsa de estudos, entrou na TV, foi demitida. Recomeçou. Aos 50 anos era bilionária.",
        licao:"O caminho não precisa ser reto para chegar lá. Cada desvio foi um atalho disfarçado." },
  24: { titulo:"A garota que dançou para sobreviver", emoji:"💃", famoso:"Jennifer Lopez",
        historia:"J.Lo cresceu no Bronx, filha de imigrantes porto-riquenhos. Começou como dançarina de fundo. Foi rejeitada diversas vezes. Mas nunca parou de dançar. Hoje é atriz, cantora, produtora e empresária.",
        licao:"Comece de onde você está. Use o que você tem. Faça o que você pode." },
  25: { titulo:"A dignidade que virou legado", emoji:"🎭", famoso:"Meryl Streep",
        historia:"Meryl Streep foi ao teste para 'King Kong' e o produtor disse em italiano que ela era 'muito feia' — sem saber que ela entendia o idioma. Ela respondeu em italiano: 'Sinto muito que você me ache assim.' Depois ganhou 3 Oscars.",
        licao:"A dignidade silenciosa que você mantém nas humilhações define quem você realmente é." },
  26: { titulo:"Recusou o Oscar pelo princípio", emoji:"🎭", famoso:"Marlon Brando",
        historia:"Marlon Brando ganhou o Oscar por 'O Poderoso Chefão', mas enviou uma atriz nativa americana para recusar o prêmio em seu nome como protesto. Gerou escândalo. Também gerou consciência.",
        licao:"Ter princípios tem um custo. Mas viver sem eles tem um custo maior." },
  27: { titulo:"A música que o mundo inteiro conhece", emoji:"🕊️", famoso:"John Lennon",
        historia:"John Lennon compôs 'Imagine' em poucas horas num piano branco em sua mansão. A música que pedia um mundo sem fronteiras virou o hino de paz mais ouvido da história. Simples, profunda, eterna.",
        licao:"As ideias mais poderosas cabem numa única frase clara. Qual é a sua?" },
  28: { titulo:"Mudou de nome para mudar o mundo", emoji:"🥊", famoso:"Muhammad Ali",
        historia:"Cassius Clay ganhou o ouro olímpico em 1960. Depois se converteu ao Islã e mudou o nome para Muhammad Ali — um ato radical para a época. Foi vaiado. Ameaçado. Mas Ali sabia que reinventar-se externamente era necessário para honrar quem era internamente.",
        licao:"Não tenha medo de se reinventar quando sua identidade cresce além do seu nome." },
  29: { titulo:"O surfista que voou", emoji:"🏄", famoso:"Gabriel Medina",
        historia:"Gabriel Medina nasceu em São Sebastião, SP, e começou a surfar aos 4 anos. Aos 20, era campeão mundial. Seu aéreo nas Olimpíadas de Paris 2024 — com a foto que pareceu um pôster de Deus — rodou o mundo inteiro.",
        licao:"Quando você está no seu elemento, fazendo o que ama com excelência, o mundo para para assistir." },
  30: { titulo:"A escritora dos cafés", emoji:"🧙", famoso:"J.K. Rowling",
        historia:"J.K. Rowling escrevia em cafés porque sua casa não tinha aquecimento. Mãe solteira, vivia de auxílio social. Quando finalmente terminou Harry Potter, levou cinco anos para conseguir publicar.",
        licao:"Persistência paciente é mais poderosa que talento impaciente." },
  31: { titulo:"O cientista que nasceu no Natal", emoji:"🍎", famoso:"Isaac Newton",
        historia:"Isaac Newton nasceu prematuro em 25 de dezembro de 1643 — tão pequeno que cabia numa jarra de litro. Ninguém esperava que sobrevivesse. Sobreviveu e descobriu a lei da gravidade.",
        licao:"O que começa pequeno demais pode crescer maior do que o esperado. Não subestime nenhum começo." },
};

const getHistoriaDoDia = (day) => HISTORIAS[day] || HISTORIAS[1];

// ============================================================
// QUIZ DE FAMOSOS — 50 perguntas
// ============================================================
const QUIZ_QUESTIONS = [
  // 🟢 FÁCIL (18 perguntas) — conhecimento geral óbvio
  { q:"Em que cidade nasceu Pelé?", opts:["Rio de Janeiro","São Paulo","Três Corações","Belo Horizonte"], c:2, level:"facil" },
  { q:"Qual famoso disse 'Impossível é apenas uma palavra'?", opts:["Neymar","Muhammad Ali","Michael Jordan","LeBron"], c:1, level:"facil" },
  { q:"Steve Jobs foi demitido de qual empresa?", opts:["Microsoft","Google","Apple","Amazon"], c:2, level:"facil" },
  { q:"Quem foi o primeiro humano a ir ao espaço?", opts:["Neil Armstrong","Yuri Gagarin","Buzz Aldrin","John Glenn"], c:1, level:"facil" },
  { q:"Qual artista escreveu 'Imagine'?", opts:["Paul McCartney","John Lennon","George Harrison","Ringo Starr"], c:1, level:"facil" },
  { q:"Quem disse 'A imaginação é mais importante que o conhecimento'?", opts:["Newton","Tesla","Einstein","Hawking"], c:2, level:"facil" },
  { q:"Quem fundou a Microsoft com 19 anos?", opts:["Steve Jobs","Bill Gates","Mark Zuckerberg","Larry Page"], c:1, level:"facil" },
  { q:"Em que ano caiu o Muro de Berlim?", opts:["1985","1987","1989","1991"], c:2, level:"facil" },
  { q:"Quem foi o primeiro presidente negro dos EUA?", opts:["Martin Luther King","Barack Obama","Malcolm X","Jesse Jackson"], c:1, level:"facil" },
  { q:"Em que ano o iPhone foi lançado?", opts:["2005","2006","2007","2008"], c:2, level:"facil" },
  { q:"Qual brasileiro foi eleito 'Atleta do Século' pela FIFA?", opts:["Garrincha","Pelé","Zico","Ronaldo Fenômeno"], c:1, level:"facil" },
  { q:"Qual rede social foi fundada por Mark Zuckerberg?", opts:["Twitter","Instagram","Facebook","Snapchat"], c:2, level:"facil" },
  { q:"Quem dirigiu o filme 'Titanic'?", opts:["Steven Spielberg","James Cameron","Martin Scorsese","Quentin Tarantino"], c:1, level:"facil" },
  { q:"Em que país nasceu Frida Kahlo?", opts:["Espanha","Argentina","México","Cuba"], c:2, level:"facil" },
  { q:"Quantas Copas do Mundo o Brasil ganhou?", opts:["3","4","5","6"], c:2, level:"facil" },
  { q:"Quem fundou a Tesla?", opts:["Elon Musk","Mark Zuckerberg","Steve Jobs","Bill Gates"], c:0, level:"facil" },
  { q:"Quem fundou a Amazon?", opts:["Jeff Bezos","Mark Cuban","Larry Ellison","Steve Wozniak"], c:0, level:"facil" },
  { q:"Qual personagem é vivido por Daniel Radcliffe?", opts:["Frodo","Harry Potter","Percy Jackson","Edward Cullen"], c:1, level:"facil" },

  // 🟡 MÉDIO (22 perguntas) — conhecimento intermediário
  { q:"Qual artista foi demitida do primeiro emprego de TV por ser 'inadequada'?", opts:["Beyoncé","Madonna","Oprah Winfrey","Lady Gaga"], c:2, level:"medio" },
  { q:"Quem compôs 'Someone Like You' em apenas 40 minutos?", opts:["Taylor Swift","Adele","Rihanna","Amy Winehouse"], c:1, level:"medio" },
  { q:"Qual jogador foi eleito melhor do mundo 2 vezes com seu sorriso?", opts:["Messi","Neymar","Ronaldinho","Zico"], c:2, level:"medio" },
  { q:"Em que ano o Brasil ganhou o tetra na Copa do Mundo?", opts:["1990","1994","1998","2002"], c:1, level:"medio" },
  { q:"Qual cientista foi diagnosticado com ELA aos 21 anos?", opts:["Einstein","Hawking","Newton","Galileu"], c:1, level:"medio" },
  { q:"Qual menina ganhou o Nobel da Paz mais jovem da história?", opts:["Greta Thunberg","Anne Frank","Malala Yousafzai","Emma Watson"], c:2, level:"medio" },
  { q:"Qual é o álbum mais vendido de todos os tempos?", opts:["Back in Black","Thriller","The Dark Side of the Moon","Their Greatest Hits"], c:1, level:"medio" },
  { q:"Quem escreveu 'O Pequeno Príncipe'?", opts:["Júlio Verne","Saint-Exupéry","Tolstói","Hemingway"], c:1, level:"medio" },
  { q:"Quem é o autor de 'Cem Anos de Solidão'?", opts:["Jorge Amado","Pablo Neruda","Gabriel García Márquez","Mario Vargas Llosa"], c:2, level:"medio" },
  { q:"Quem inventou a lâmpada incandescente?", opts:["Nikola Tesla","Thomas Edison","Benjamin Franklin","Alessandro Volta"], c:1, level:"medio" },
  { q:"Em que ano nasceu Pelé?", opts:["1935","1940","1945","1950"], c:1, level:"medio" },
  { q:"Qual cantora compôs 'Like a Prayer'?", opts:["Cyndi Lauper","Madonna","Whitney Houston","Cher"], c:1, level:"medio" },
  { q:"Qual livro vendeu mais cópias na história, depois da Bíblia?", opts:["Harry Potter","O Pequeno Príncipe","Senhor dos Anéis","Dom Quixote"], c:1, level:"medio" },
  { q:"Quem foi a primeira mulher a ganhar um Nobel?", opts:["Marie Curie","Madre Teresa","Rosa Parks","Florence Nightingale"], c:0, level:"medio" },
  { q:"Em que ano morreu Michael Jackson?", opts:["2005","2007","2009","2011"], c:2, level:"medio" },
  { q:"Quem dirigiu o filme 'O Poderoso Chefão'?", opts:["Martin Scorsese","Francis Ford Coppola","Stanley Kubrick","Quentin Tarantino"], c:1, level:"medio" },
  { q:"Quem foi o primeiro homem a pisar na Lua?", opts:["Buzz Aldrin","Yuri Gagarin","Neil Armstrong","John Glenn"], c:2, level:"medio" },
  { q:"Qual cantora britânica fez sucesso com 'Rolling in the Deep'?", opts:["Adele","Amy Winehouse","Ellie Goulding","Florence Welch"], c:0, level:"medio" },
  { q:"Quem fundou a Apple junto com Steve Jobs?", opts:["Steve Wozniak","Bill Gates","Tim Cook","Jonathan Ive"], c:0, level:"medio" },
  { q:"Em que ano o Brasil tornou-se República?", opts:["1822","1889","1891","1900"], c:1, level:"medio" },
  { q:"Qual famoso brasileiro foi exilado pela ditadura militar?", opts:["Chico Buarque","Gilberto Gil","Caetano Veloso","Todos os três"], c:3, level:"medio" },
  { q:"Qual brasileira foi a primeira mulher no Top 10 do Spotify global?", opts:["Anitta","Pabllo Vittar","Ludmilla","Ivete Sangalo"], c:0, level:"medio" },

  // 🔴 DIFÍCIL (10 perguntas) — trivia avançada
  { q:"Qual músico assinou com a Motown aos 11 anos?", opts:["Michael Jackson","Stevie Wonder","Prince","James Brown"], c:1, level:"dificil" },
  { q:"Quem nasceu em Zanzibar com o nome Farrokh Bulsara?", opts:["Bob Marley","Freddie Mercury","David Bowie","Elton John"], c:1, level:"dificil" },
  { q:"Qual empresário leu a Encyclopaedia Britannica inteira aos 9 anos?", opts:["Bill Gates","Steve Jobs","Elon Musk","Jeff Bezos"], c:2, level:"dificil" },
  { q:"J.K. Rowling foi rejeitada por quantas editoras antes de publicar?", opts:["3","7","12","20"], c:2, level:"dificil" },
  { q:"Em que cidade Marta começou a jogar futebol?", opts:["Recife","Maceió","Dois Riachos","Salvador"], c:2, level:"dificil" },
  { q:"Qual rapper vendeu CDs no metrô antes da fama?", opts:["Eminem","Jay-Z","50 Cent","Snoop Dogg"], c:1, level:"dificil" },
  { q:"Qual atleta tem mais medalhas olímpicas?", opts:["Usain Bolt","Michael Phelps","Carl Lewis","Larisa Latynina"], c:1, level:"dificil" },
  { q:"Qual estilo musical foi criado por James Brown?", opts:["Soul","Funk","Hip-Hop","R&B"], c:1, level:"dificil" },
  { q:"Qual brasileiro tem mais Oscars?", opts:["Walter Salles","Fernando Meirelles","Glauber Rocha","Hector Babenco"], c:0, level:"dificil" },
  { q:"Quem escreveu 'Cem Anos de Solidão'?", opts:["Mario Vargas Llosa","Pablo Neruda","Gabriel García Márquez","Jorge Luis Borges"], c:2, level:"dificil" },
];

const getQuizByLevel = (level) => QUIZ_QUESTIONS.filter(q => q.level === level);

// ============================================================
// HUMOR MATINAL — 7 frases por mood
// ============================================================
const HUMOR_FRASES = {
  feliz:[
    { famoso:"Ivete Sangalo", emoji:"🎤", quote:"A vida é muito curta para ser vivida de forma medíocre. Aproveite cada momento!" },
    { famoso:"Ronaldinho", emoji:"⚽", quote:"O futebol tem a magia de unir pessoas. Assim como sua alegria une o mundo hoje." },
    { famoso:"Bruno Mars", emoji:"🎵", quote:"Eu só quero fazer coisas que façam as pessoas se sentirem bem. Você já está fazendo isso." },
    { famoso:"Pharrell", emoji:"😊", quote:"Happy é mais que uma música — é uma escolha. Continue escolhendo." },
    { famoso:"Walt Disney", emoji:"🏰", quote:"Se você consegue sonhar, consegue realizar. Comece hoje." },
    { famoso:"Tom Hanks", emoji:"🎬", quote:"Acredite no que você está fazendo. A alegria é contagiante." },
    { famoso:"Whindersson", emoji:"😂", quote:"Sorrir é uma forma silenciosa de gritar pelo mundo." },
  ],
  focado:[
    { famoso:"Steve Jobs", emoji:"🍎", quote:"Foco é dizer não a cem boas ideias. Use essa clareza hoje." },
    { famoso:"Marta", emoji:"⚽", quote:"Lute. Não espere. Você tem a energia certa hoje — não desperdice." },
    { famoso:"Elon Musk", emoji:"🚀", quote:"Quando algo é importante, você tenta mesmo contra todas as probabilidades." },
    { famoso:"Bill Gates", emoji:"💻", quote:"Suas conquistas mais valiosas exigirão sua atenção indivisa." },
    { famoso:"Serena Williams", emoji:"🎾", quote:"Sem foco não há grandeza. Você está pronto para a grandeza?" },
    { famoso:"Michael Jordan", emoji:"🏀", quote:"Talento ganha jogos. Foco ganha campeonatos." },
    { famoso:"Einstein", emoji:"🧠", quote:"Se eu tivesse 1 hora, passaria 55 minutos pensando no problema certo." },
  ],
  cansado:[
    { famoso:"Bob Marley", emoji:"🎸", quote:"As pessoas mais felizes fazem o melhor com o que têm. Hoje, o suficiente é suficiente." },
    { famoso:"Adele", emoji:"🎤", quote:"A dor que você sente hoje é a força que você sentirá amanhã. Descanse sem culpa." },
    { famoso:"Stephen Hawking", emoji:"🔭", quote:"Por mais difícil que seja, há sempre algo que você pode fazer. Hoje, respirar é suficiente." },
    { famoso:"Dalai Lama", emoji:"🙏", quote:"O sono é a melhor meditação. Cuide do seu descanso." },
    { famoso:"Audrey Hepburn", emoji:"🌸", quote:"Coisas que valem a pena raramente são fáceis. Pause sem culpa." },
    { famoso:"Albert Einstein", emoji:"🧠", quote:"O cansaço é um sinal de que sua mente trabalhou. Honre-o." },
    { famoso:"Buda", emoji:"🧘", quote:"Você não pode atravessar o mar simplesmente olhando para a água. Mas pode descansar antes de nadar." },
  ],
  ansioso:[
    { famoso:"Muhammad Ali", emoji:"🥊", quote:"Impossível é uma palavra. O que te preocupa não vai se materializar como você imagina." },
    { famoso:"Einstein", emoji:"🧠", quote:"Um problema não se resolve com o mesmo pensamento que o criou. Respira. Muda o ângulo." },
    { famoso:"Malala", emoji:"✊", quote:"Quando o mundo fica quieto, uma única voz se torna poderosa. A sua diz: você consegue." },
    { famoso:"Dalai Lama", emoji:"🙏", quote:"Se um problema tem solução, não há por que se preocupar. Se não tem, também não." },
    { famoso:"Mahatma Gandhi", emoji:"🕊️", quote:"Há mais coisas na vida do que aumentar sua velocidade. Respire fundo agora." },
    { famoso:"Frida Kahlo", emoji:"🎨", quote:"Eu pinto flores para que não morram. Você pode transformar a ansiedade em arte." },
    { famoso:"Anne Frank", emoji:"📖", quote:"Apesar de tudo, eu ainda acredito na bondade do ser humano. Inclusive na sua." },
  ],
  inspirado:[
    { famoso:"Bono", emoji:"🎸", quote:"A música pode mudar o mundo porque pode mudar as pessoas. Você está no estado certo para criar." },
    { famoso:"Lady Gaga", emoji:"🎭", quote:"Não sou arrogante. Só sei que sou boa. Você também é. Use essa inspiração agora." },
    { famoso:"J.K. Rowling", emoji:"🧙", quote:"Você não precisa de mágica. Já tem todo o poder dentro de si." },
    { famoso:"Salvador Dali", emoji:"🎨", quote:"Não tenha medo da perfeição. Mas tampouco a espere antes de começar." },
    { famoso:"Frida Kahlo", emoji:"🌺", quote:"Pés, para que os quero, se tenho asas para voar?" },
    { famoso:"Pablo Picasso", emoji:"🖌️", quote:"A inspiração existe, mas tem que te encontrar trabalhando." },
    { famoso:"Beethoven", emoji:"🎼", quote:"Não há regra que não possa ser quebrada para criar algo mais belo." },
  ],
};

// ============================================================
// DATA: multiCalendar.js
// ============================================================
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
const getOcidental = (date = new Date()) => {
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

const getHebraico = (date = new Date()) => {
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
const getJapones = (date = new Date()) => {
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

const getEtiope = (date = new Date()) => {
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

const getIslamico = (date = new Date()) => {
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
// Nomes dos 12 meses lunares chineses
const MESES_CHINA = ["Zhēngyuè (正月)","Èryuè (二月)","Sānyuè (三月)","Sìyuè (四月)","Wǔyuè (五月)","Liùyuè (六月)","Qīyuè (七月)","Bāyuè (八月)","Jiǔyuè (九月)","Shíyuè (十月)","Shíyīyuè (十一月)","Làyuè (臘月)"];

const getChines = (date = new Date()) => {
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
const getRomano = (date = new Date()) => {
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
const getPersa = (date = new Date()) => {
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
const getAssirio = (date = new Date()) => {
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
const getArmenio = (date = new Date()) => {
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
const getBudista = (date = new Date()) => {
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
const getCoreano = (date = new Date()) => {
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
const getHoloceno = (date = new Date()) => {
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
const getGeologico = (date = new Date()) => {
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
const getTodosCalendarios = (date = new Date()) => [
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

const MENTOR_MESSAGES = {

  // ============================================================
  // 🔥 COLÉRICO — Mentor principal: Steve Jobs
  // Mentores alternativos: Anitta, Madonna, Muhammad Ali, Elon Musk
  // ============================================================
  colerico: {
    principal: {
      nome: "Steve Jobs",
      emoji: "🍎",
      mensagens: [
        "Hoje, elimine uma coisa inútil da sua rotina. Simplificar é genial.",
        "Foco. Dizer não é tão importante quanto dizer sim. O que você vai recusar hoje?",
        "Lembra que fui demitido da minha própria empresa? Usei isso como combustível. Qual é o seu combustível hoje?",
        "As pessoas com paixão podem mudar o mundo. Qual é a sua missão hoje?",
        "Não faça pesquisa de mercado. Crie o futuro.",
        "Sua maior conquista ainda está por vir. Acredite nisso.",
        "Um home run é melhor que dois duplos. Qualidade sobre quantidade.",
        "A qualidade é mais importante que a quantidade. Faça menos, mas faça bem.",
        "Inovação é dizer não a mil coisas para dizer sim a uma só.",
        "Stay hungry. Stay foolish.",
        "Você não pode conectar os pontos olhando para frente. Conecte-os olhando para trás.",
        "Seu tempo é limitado. Não o gaste vivendo a vida de outra pessoa.",
        "Não deixe o barulho da opinião dos outros abafar sua voz interior.",
        "Tenha coragem para seguir seu coração e intuição.",
        "Os loucos são aqueles que mudam o mundo.",
        "Quando você quer uma coisa muito, o universo conspira a seu favor — mas só se você agir.",
        "Detalhes importam. Vale a pena esperar para fazer certo.",
        "Design não é só como parece. É como funciona.",
        "Eu prefiro perder por algo em que acredito do que ganhar por algo que não acredito.",
        "Manter um padrão pessoal de excelência é o que vai te diferenciar.",
        "Aprendi que o mais importante na vida é estar cercado de pessoas brilhantes.",
        "Se você vive cada dia como se fosse o último, um dia você estará certo.",
        "A criatividade é apenas conectar coisas.",
        "Não saber é o estado mais valioso. Te força a aprender.",
        "Quando você inova, errar é inevitável. Admita rápido e siga em frente.",
        "Seu trabalho vai ocupar grande parte da sua vida. Faça o que você ama.",
        "Reúna pessoas melhores que você. Senão você lidera medíocres.",
        "O viagem é a recompensa.",
        "Você precisa estar disposto a errar muito antes de acertar.",
        "Pensar diferente não é uma escolha. É um modo de vida.",
      ],
    },
    alternativos: [
      {
        nome: "Anitta", emoji: "🎤",
        mensagens: [
          "Ninguém vai acreditar em você se você não acreditar primeiro. Comece hoje.",
          "Estratégia é tudo. Sonho sem plano vira frustração.",
          "Faça barulho. O silêncio não muda nada.",
          "Eu estudei o jogo antes de jogar. Estude o seu.",
          "Não tenha medo de pedir o que você merece.",
          "Cobre seu valor. Quem te quer de graça, não te quer.",
          "Disciplina come talento no café da manhã.",
        ],
      },
      {
        nome: "Madonna", emoji: "👑",
        mensagens: [
          "Reinventar-se é a única forma de continuar relevante.",
          "Eu sou ambiciosa. Sempre fui. Não vou parar agora.",
          "As pessoas vão criticar. Continue do mesmo jeito.",
          "Eu não fui feita para encaixar. Fui feita para se destacar.",
          "Sua arte é sua arma. Use-a.",
        ],
      },
      {
        nome: "Muhammad Ali", emoji: "🥊",
        mensagens: [
          "Impossível é uma palavra usada por homens pequenos.",
          "Voe como uma borboleta, ferroe como uma abelha.",
          "O homem que vê o mundo aos 50 anos do mesmo jeito que aos 20, desperdiçou 30 anos.",
          "A luta é vencida muito longe das luzes — nos treinos secretos.",
          "Eu odeio cada minuto de treino. Mas eu disse: 'Não desista. Sofra agora e viva como campeão para o resto da vida.'",
        ],
      },
      {
        nome: "Elon Musk", emoji: "🚀",
        mensagens: [
          "Quando algo é suficientemente importante, você tenta mesmo contra todas as probabilidades.",
          "Se algo é importante o bastante, você o faz mesmo com medo.",
          "Quando você inova, deve estar preparado para que as pessoas digam que você é louco.",
          "Trabalhe como se sua vida dependesse disso. Porque dependesse.",
          "Persistência é muito importante. Você não pode desistir a menos que seja forçado.",
        ],
      },
    ],
  },

  // ============================================================
  // ☀️ SANGUÍNEO — Mentor principal: Ivete Sangalo
  // Mentores alternativos: Bruno Mars, Whindersson, Robin Williams, Will Smith
  // ============================================================
  sanguineo: {
    principal: {
      nome: "Ivete Sangalo",
      emoji: "🎤",
      mensagens: [
        "Sua energia é contagiante. Compartilhe algo que te alegra hoje.",
        "A alegria não é ingenuidade. É resistência. Sorria como um ato de coragem.",
        "Você tem o dom de conectar pessoas. Use-o hoje.",
        "A criatividade não espera inspiração. Comece agora.",
        "Paixão genuína não espera o momento perfeito.",
        "Sua autenticidade é seu maior presente para o mundo.",
        "Um sorriso genuíno abre mais portas do que qualquer estratégia.",
        "Eu voltei aos palcos semanas após o parto. Quando você ama, não cansa.",
        "Não tem fórmula. Tem entrega total ou nada.",
        "Quem brilha é quem é fiel a si mesmo. Brilha hoje.",
        "Faz o que tem que ser feito — e depois dança.",
        "A vida é uma festa. Não fique de fora da pista.",
        "Generosidade volta multiplicada. Dê hoje sem esperar nada.",
        "O palco te ensina: o público sente quando você é verdadeiro.",
        "Não tenha vergonha de ser feliz numa hora que todo mundo está reclamando.",
        "Eu danço para esquecer. Eu danço para lembrar. Dança hoje.",
        "Cada manhã é uma chance de recomeçar com mais alegria.",
        "Quem aprende a se divertir trabalhando, nunca mais trabalha.",
        "Eu rio antes mesmo do problema chegar. Recomendo.",
        "Sua presença pode mudar o dia de alguém. Use esse poder.",
        "Não venda sua alegria por aprovação. Ela é sua identidade.",
        "Faça pequenas coisas com grande amor.",
        "Quem ri por último ri melhor — mas quem ri sempre ri muito mais.",
        "A música cura. Coloque uma música boa pra tocar agora.",
        "Você não precisa estar bem o tempo todo. Mas precisa voltar sempre.",
        "Cantar no chuveiro é uma forma de oração. Não pare.",
        "O amor pelas pessoas é o combustível mais sustentável que existe.",
        "Eu sou felizão. E felizão atrai felizão. Comece o ciclo.",
        "Quem se cuida sorri mais. E quem sorri mais é mais cuidado.",
        "A vida me ensinou: pode chorar — mas depois levanta e arrasa.",
      ],
    },
    alternativos: [
      {
        nome: "Bruno Mars", emoji: "🎵",
        mensagens: [
          "Eu só quero fazer coisas que façam as pessoas se sentirem bem.",
          "Practice doesn't make perfect — perfect practice makes perfect.",
          "O dom é só 10%. O resto é trabalho constante.",
          "Eu cresci num palco. Aprenda a se sentir em casa onde você atua.",
          "Pequenos detalhes fazem grandes diferenças nos seus shows da vida.",
        ],
      },
      {
        nome: "Whindersson Nunes", emoji: "😂",
        mensagens: [
          "Eu nunca desisti porque alguém me disse que não daria certo.",
          "Faça do humor sua arma contra a vida. Funciona.",
          "Ser de um lugar pequeno não te impede de ter sonhos enormes.",
          "Eu falei pra minha mãe que ia ser famoso. Ela acreditou. Faz isso pela sua.",
          "Internet democratizou tudo. Use isso a seu favor hoje.",
        ],
      },
      {
        nome: "Robin Williams", emoji: "🎭",
        mensagens: [
          "Você é apenas tão bom quanto o amor que você dá a si mesmo.",
          "Carpe diem. Aproveitem o dia, meninos. Façam suas vidas extraordinárias.",
          "Eu acredito que sorrir é o segundo melhor remédio. O primeiro é dar risada.",
          "Existe um mundo lá fora que precisa do que só você pode dar.",
          "Os outros podem ser cruéis. Você pode escolher ser gentil.",
        ],
      },
      {
        nome: "Will Smith", emoji: "✨",
        mensagens: [
          "O fracasso é seu maior parceiro de sucesso.",
          "Se você quer algo que nunca teve, faça algo que nunca fez.",
          "Não há nenhuma razão para ter um plano B porque ele distrai do plano A.",
          "Eu não tenho medo de morrer. Eu tenho medo de não ter vivido.",
          "Onde estiverem seu medo e seu sonho — o sonho está logo atrás.",
        ],
      },
    ],
  },

  // ============================================================
  // 🌊 MELANCÓLICO — Mentor principal: Albert Einstein
  // Mentores alternativos: Adele, Chico Buarque, Stephen Hawking, Frida Kahlo
  // ============================================================
  melancolico: {
    principal: {
      nome: "Albert Einstein",
      emoji: "🧠",
      mensagens: [
        "Você pensa fundo antes de agir — isso é virtude, não fraqueza. Confie no seu insight hoje.",
        "Minha mente precisava de tempo. A sua profundidade é um presente.",
        "A imaginação é mais importante que o conhecimento.",
        "Os erros são prova de que você está tentando.",
        "Nunca tive certeza — só curiosidade. Faça uma pergunta que ninguém te fez.",
        "Sua sensibilidade é o que te permite enxergar o que outros não veem.",
        "O perfeccionismo bem direcionado cria obras eternas.",
        "Lógica te leva de A a B. Imaginação te leva a qualquer lugar.",
        "A medida da inteligência é a capacidade de mudar.",
        "A vida é como andar de bicicleta. Para manter o equilíbrio, você precisa continuar se movendo.",
        "Não tente ser um homem de sucesso. Seja um homem de valor.",
        "A pessoa que nunca cometeu um erro nunca tentou algo novo.",
        "Olhe profundamente para a natureza. Você entenderá tudo.",
        "Insanidade é fazer a mesma coisa esperando resultados diferentes.",
        "O importante é não parar de questionar.",
        "Apenas duas coisas são infinitas: o universo e a estupidez humana — e da primeira eu não tenho certeza.",
        "Não é que eu seja tão inteligente. Eu só fico com os problemas mais tempo.",
        "Em meio à dificuldade, encontra-se a oportunidade.",
        "A diferença entre o gênio e o estupidez é que o gênio tem limites.",
        "Aprender com a história, sim. Repetir a história, não.",
        "Educação é o que sobra quando você esquece tudo que aprendeu na escola.",
        "Quem não cometeu erros nunca tentou nada novo.",
        "Eu não me preocupo com o futuro. Ele chega rápido demais.",
        "Pense devagar. As respostas mais profundas raramente vêm rápido.",
        "Um homem é como uma fração — o numerador é o que ele é, o denominador é o que ele pensa que é.",
        "Se eu tivesse 1 hora para resolver um problema, gastaria 55 minutos pensando e 5 minutos agindo.",
        "Lembre-se que o tempo, embora pareça, não é dinheiro. O tempo é vida.",
        "Tente não se tornar um homem de sucesso, mas sim um homem com valores.",
        "Estamos todos juntos nessa nave estelar. Aprenda a se importar com o pequeno.",
        "Eu sou um artista. Eu desenho livremente da minha imaginação.",
      ],
    },
    alternativos: [
      {
        nome: "Adele", emoji: "🎤",
        mensagens: [
          "A dor que você sente hoje é a força que você sentirá amanhã.",
          "Eu escrevo da dor porque a dor é honesta.",
          "Você precisa se sentir confortável com o silêncio antes da próxima nota.",
          "Quanto mais real, mais conexão. Não filtre tudo.",
          "Não tenha medo das suas próprias emoções. Elas são suas, ninguém mais sente exatamente assim.",
        ],
      },
      {
        nome: "Chico Buarque", emoji: "🎵",
        mensagens: [
          "A música é o silêncio entre as notas.",
          "Apesar de você, amanhã há de ser outro dia.",
          "Sua produção mais profunda vem quando você está sozinho com você mesmo.",
          "Pensar é resistir. Continue pensando.",
          "O artista verdadeiro nunca está totalmente satisfeito. É isso que o move.",
        ],
      },
      {
        nome: "Stephen Hawking", emoji: "🔭",
        mensagens: [
          "Por mais difícil que seja a vida, sempre há algo que você pode fazer.",
          "Curiosidade é o segredo. Continue olhando para as estrelas, não para seus pés.",
          "Inteligência é a habilidade de se adaptar à mudança.",
          "Lembrem-se de olhar para cima nas estrelas e não para baixo nos seus pés.",
          "O passado, assim como o futuro, é indefinido — só temos o agora.",
        ],
      },
      {
        nome: "Frida Kahlo", emoji: "🎨",
        mensagens: [
          "Pinte sua dor. Ela vira beleza.",
          "Eu pinto a mim mesma porque sou o tema que melhor conheço.",
          "No fim, o que importa é continuar pintando — vivendo — apesar de tudo.",
          "Você não precisa de aprovação para ser inteira.",
          "Faça das suas cicatrizes a sua arte.",
        ],
      },
    ],
  },

  // ============================================================
  // 🌿 FLEUMÁTICO — Mentor principal: Lionel Messi
  // Mentores alternativos: Bob Marley, Dalai Lama, Roger Federer, Gilberto Gil
  // ============================================================
  fleumatico: {
    principal: {
      nome: "Lionel Messi",
      emoji: "⚽",
      mensagens: [
        "Nunca fui o mais barulhento. Mas fui o mais consistente. Consistência bate talento.",
        "Aceitar ajuda não é fraqueza. Você pediu ajuda hoje?",
        "Meu segredo não é velocidade — é precisão. Uma ação certa vale por dez.",
        "Cai muitas vezes. Me levantei todas. Qual foi sua última levantada silenciosa?",
        "A paz interior não é ausência de desafio. É equilíbrio dentro do caos.",
        "Sua calma em momentos de pressão é um dom raro.",
        "Pequenos passos consistentes chegam mais longe que grandes saltos erráticos.",
        "Trabalhe em silêncio. Que seu sucesso faça o barulho.",
        "Eu nunca quis ser o melhor do mundo. Quis ser o melhor possível.",
        "O time é mais importante que o jogador. Sempre.",
        "Cada dia tem o seu trabalho. Faça o trabalho de hoje, hoje.",
        "Não preciso provar nada para ninguém. Só preciso ser melhor que ontem.",
        "Confiança vem da prática. Pratique.",
        "Os melhores momentos da minha vida foram em família. Não esqueça os seus.",
        "Eu jogo porque amo. Faça o que você ama.",
        "Quando você é discreto, suas conquistas duram mais.",
        "Nervosismo é normal. Mas só você pode controlar como ele te afeta.",
        "Eu não corro atrás do título. Corro atrás da boa jogada.",
        "Se você se preocupa demais com o que vão dizer, esquece de jogar.",
        "Treine como se o jogo dependesse de cada lance. Porque depende.",
        "Quem não acredita em você um dia vai te pedir foto.",
        "A maior derrota é desistir antes da última jogada.",
        "Eu cheguei longe porque continuei mesmo quando ninguém estava olhando.",
        "Não tente ser igual a ninguém. Você não foi feito para isso.",
        "Os meus erros me ensinaram mais que os meus acertos.",
        "Quem joga junto, ganha junto. Construa equipe.",
        "Eu prefiro um companheiro mediano comprometido a um craque desengajado.",
        "Calma é o estado natural do campeão. Pratique-a fora do campo também.",
        "Aceitar o passado liberta o presente.",
        "Quanto mais alto você chega, mais simples deve ser.",
      ],
    },
    alternativos: [
      {
        nome: "Bob Marley", emoji: "🎸",
        mensagens: [
          "As pessoas mais felizes fazem o melhor com o que têm.",
          "Não viva para que sua presença seja notada — viva para que sua ausência faça falta.",
          "O dinheiro pode comprar conforto, mas não compra paz.",
          "Um amor, um coração. Vamos nos unir e nos sentir bem.",
          "Você não sabe o quão forte é até que ser forte seja a única opção.",
        ],
      },
      {
        nome: "Dalai Lama", emoji: "🙏",
        mensagens: [
          "Lembre-se que ser silencioso às vezes é a melhor resposta.",
          "Ame e seja amado. É o sentido de tudo.",
          "Se você acha que é pequeno demais para fazer diferença, durma com um mosquito.",
          "Compartilhe seu conhecimento. É uma forma de se tornar imortal.",
          "Felicidade não é algo pronto. Vem das suas ações diárias.",
        ],
      },
      {
        nome: "Roger Federer", emoji: "🎾",
        mensagens: [
          "Quando você está fazendo o que ama, não trabalha um dia.",
          "Eu não jogo contra adversários. Eu jogo o melhor tênis possível.",
          "Educação no campo e fora dele é o que define um campeão.",
          "Algumas batalhas são mentais. Vença a sua primeiro.",
          "Aproveite cada jogo — eles passam rápido demais.",
        ],
      },
      {
        nome: "Gilberto Gil", emoji: "🎸",
        mensagens: [
          "A alegria é a prova dos nove.",
          "Andar com fé eu vou — que a fé não costuma falhar.",
          "Cultura é tudo o que você faz quando ninguém está olhando.",
          "Aprender é o único caminho. Aprenda algo novo hoje.",
          "A música cura — escute uma boa hoje, sem distração.",
        ],
      },
    ],
  },
};

// ============================================================
// FUNÇÃO HELPER — Pega mensagem do dia rotacionando
// ============================================================
const getMentorMessage = (temperamento, dayOfYear, useAlternative = false) => {
  const t = MENTOR_MESSAGES[temperamento];
  if (!t) return null;

  if (useAlternative) {
    // Rotaciona entre os 4 mentores alternativos a cada 7 dias
    const altIdx = Math.floor(dayOfYear / 7) % t.alternativos.length;
    const alt = t.alternativos[altIdx];
    const msgIdx = dayOfYear % alt.mensagens.length;
    return {
      mentor: alt.nome,
      emoji: alt.emoji,
      mensagem: alt.mensagens[msgIdx],
      tipo: "alternativo",
    };
  }

  // Mentor principal: rotaciona pelas 30 mensagens
  const msgIdx = dayOfYear % t.principal.mensagens.length;
  return {
    mentor: t.principal.nome,
    emoji: t.principal.emoji,
    mensagem: t.principal.mensagens[msgIdx],
    tipo: "principal",
  };
};

// ============================================================
// Estatísticas
// ============================================================
// Colérico:    30 (Jobs) +  7+5+5+5 alternativos =  52 mensagens
// Sanguíneo:   30 (Ivete)+  5+5+5+5 alternativos =  50 mensagens
// Melancólico: 30 (Eins) +  5+5+5+5 alternativos =  50 mensagens
// Fleumático:  30 (Messi)+  5+5+5+5 alternativos =  50 mensagens
// TOTAL: ~200 mensagens únicas
// Suficiente para mais de 6 meses de conteúdo único.

// ============================================================
// DATA: testeTradicao.js
// ============================================================
// ============================================================
// KOMPARAI — TESTE DE TRADIÇÃO ESPIRITUAL
// "Qual tradição combina com você?"
// ============================================================

const TRADICAO_TESTE_INTRO = {
  emoji: "🧭",
  nome: "Qual tradição espiritual combina com você?",
  criador: "Baseado em tipologias comparativas de tradições mundiais",
  historia: "Estudos comparativos de religião, como os de Mircea Eliade e Karen Armstrong, mostram que cada tradição tem uma 'personalidade' — e que naturalmente somos mais atraídos por algumas do que outras.",
  comoFunciona: "7 perguntas sobre sua espiritualidade, valores e visão de mundo identificam a tradição que mais ressoa com sua alma.",
  comoInterpretar: "O resultado não é uma conversão ou julgamento — é um espelho. Mostra onde seu espírito já está, mesmo sem você saber.",
};

const TRADICAO_QUESTIONS = [
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

const TRADICAO_INFO = {
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
const AMOR_INTRO = {
  emoji: "💘",
  nome: "As 5 Linguagens do Amor",
  criador: "Gary Chapman",
  historia: "Em 1992, Gary Chapman publicou 'As 5 Linguagens do Amor'. O livro vendeu mais de 20 milhões de cópias.",
  comoFunciona: "O teste identifica qual das 5 formas você mais sente amor.",
  comoInterpretar: "Sua linguagem dominante é como você prefere RECEBER amor.",
};

const AMOR_QUESTIONS = [
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

const AMOR_INFO = {
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
const POLITICO_INTRO = {
  emoji: "🗳️",
  nome: "Espectro Político",
  criador: "Adaptado do Political Compass",
  historia: "O Political Compass surgiu em 2001. Antes, Hans Eysenck (1954) propunha dois eixos: econômico e social.",
  comoFunciona: "15 perguntas mapeiam suas preferências em 4 vertentes.",
  comoInterpretar: "Não é rótulo — é tendência.",
};

const POLITICO_QUESTIONS = [
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

const POLITICO_INFO = {
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
const PERSONALIDADE_INTRO = {
  emoji: "🧩",
  nome: "Introvertido, Ambivertido ou Extrovertido?",
  criador: "Carl Gustav Jung",
  historia: "Em 1921, Jung publicou 'Tipos Psicológicos', introduzindo introversão e extroversão.",
  comoFunciona: "15 perguntas analisam como você recupera energia e se relaciona socialmente.",
  comoInterpretar: "Introvertidos recuperam energia na solidão. Extrovertidos na companhia. Ambivertidos fluem.",
};

const PERSONALIDADE_QUESTIONS = [
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

const PERSONALIDADE_INFO = {
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
const QI_INTRO = {
  emoji: "🧠",
  nome: "QI Cultural",
  criador: "Inspirado em CQ - Inteligência Cultural",
  historia: "Inteligência Cultural foi desenvolvida por Soon Ang e Linn Van Dyne nos anos 2000.",
  comoFunciona: "15 perguntas testam conhecimento em história, ciência, arte e cultura.",
  comoInterpretar: "Não é sobre QI — é sobre curiosidade e abertura.",
};

const QI_QUESTIONS = [
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

const QI_LEVELS = [
  { min: 0, max: 4, nome: "Aprendiz", emoji: "🌱", cor: "#10B981", desc: "Sua jornada mal começou." },
  { min: 5, max: 8, nome: "Curioso(a)", emoji: "🔍", cor: "#3B82F6", desc: "Base cultural sólida. Continue explorando!" },
  { min: 9, max: 11, nome: "Culto(a)", emoji: "📚", cor: "#8B5CF6", desc: "Seu repertório impressiona." },
  { min: 12, max: 13, nome: "Erudito(a)", emoji: "🎓", cor: "#F59E0B", desc: "Conhecimento profundo." },
  { min: 14, max: 15, nome: "Gênio Cultural", emoji: "🏆", cor: "#EF4444", desc: "Raro nível de cultura geral!" },
];

// ============================================================
// 5. TESTE PROFISSIONAL
// ============================================================
const PROFISSIONAL_INTRO = {
  emoji: "💼",
  nome: "Perfil Profissional",
  criador: "Baseado em Holland e Belbin",
  historia: "John Holland (1959) criou tipos vocacionais. Belbin (1970) mapeou papéis em equipes.",
  comoFunciona: "15 perguntas identificam seu perfil entre 4 arquétipos.",
  comoInterpretar: "Não existe perfil melhor.",
};

const PROFISSIONAL_QUESTIONS = [
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

const PROFISSIONAL_INFO = {
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
const today   = new Date();
const DAY     = today.getDate();
const MONTH   = today.getMonth() + 1;
const YEAR    = today.getFullYear();
const DOW     = today.getDay();
const DOY     = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
const MONTHS  = ["","Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const DAYS_PT = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];

// Embaralhamento usando Fisher-Yates (não muta o array original)
const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// Mensagens genéricas do dia (rotativas)
const MENSAGENS_DIA = [
  "Cada amanhecer traz uma chance que ontem não existia. Use bem o seu hoje.",
  "Você é o livro mais valioso que vai ler na vida. Comece a leitura agora.",
  "A vida não responde quem grita mais alto. Responde quem persiste com clareza.",
  "Tudo o que você precisa hoje já vive dentro de você. Confie no processo.",
  "Pequenos passos diários constroem grandes destinos. Dê o seu hoje.",
  "Não compare seu capítulo 3 com o capítulo 20 de outra pessoa.",
  "Você não precisa estar pronto. Só precisa estar disposto a começar.",
  "A coragem não é ausência de medo. É agir apesar dele.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "Sua vida é sua responsabilidade, sua jornada e sua arte. Pinte com cuidado.",
  "Hoje é o melhor dia para se tornar a pessoa que você sempre quis ser.",
  "Não espere por inspiração. Comece — ela vai te encontrar trabalhando.",
  "A vida muda quando você muda. Tudo começa em você.",
  "Você não está atrasado. Está exatamente onde precisa estar para o próximo passo.",
  "O presente é um presente. Por isso se chama presente.",
  "Confiar em si mesmo é o primeiro passo de qualquer grande jornada.",
  "Você atrai aquilo que você é, não aquilo que você quer.",
  "O dia mais importante de sua vida é hoje. Faça dele algo bonito.",
  "A felicidade não é destino. É forma de viajar.",
  "Aquilo que você procura também está procurando você.",
  "Nada nasce pronto. Tudo se torna.",
  "Sua intuição é mais sábia que mil opiniões. Escute-a.",
  "Coragem não é não ter medo. É medo com fé.",
  "Aceitar o que é, é o primeiro passo para transformar.",
  "Você é único. Compare-se apenas com a versão de ontem de si.",
  "Gratidão multiplica. Reclamação divide. Escolha hoje.",
  "Cada respiração é uma chance de recomeçar.",
  "Não existe atalho para lugares que valem a pena.",
  "O que você planta hoje, colhe amanhã. Plante com sabedoria.",
  "A vida acontece pra você, não com você.",
  "Hoje você é a soma de todas as suas escolhas. Amanhã também será.",
];

const getMensagemDoDia = () => MENSAGENS_DIA[DOY % MENSAGENS_DIA.length];

// ============================================================
// ============================================================
// GERADOR DE IMAGEM COMPARTILHÁVEL (Canvas 1080x1920)
// ============================================================
const W = 1080, H = 1920;

// PADRÃO VISUAL ÚNICO: preto profundo + verde neon (#10B981)
// Cores fixas em TODOS os templates (consistência da marca)
const BRAND = {
  bgTop: "#0A1F1A",     // verde escuríssimo
  bgBottom: "#000000",  // preto absoluto
  green: "#10B981",     // verde neon principal
  greenLight: "#34D399",// verde claro (acentos)
  greenDeep: "#064E3B", // verde profundo (cards)
  white: "#FFFFFF",
  textMuted: "rgba(255,255,255,0.65)",
  cardBorder: "rgba(16,185,129,0.25)",
  cardBg: "rgba(16,185,129,0.06)",
};

// Tema legado (mantido para compatibilidade — todos apontam pra BRAND)
const SHARE_THEMES = {
  temperamento: { bg1:BRAND.bgTop, bg2:BRAND.bgBottom, accent:BRAND.green, overlay:"#10B98115" },
  raioX:        { bg1:BRAND.bgTop, bg2:BRAND.bgBottom, accent:BRAND.green, overlay:"#10B98115" },
  versiculo:    { bg1:BRAND.bgTop, bg2:BRAND.bgBottom, accent:BRAND.green, overlay:"#10B98115" },
  historia:     { bg1:BRAND.bgTop, bg2:BRAND.bgBottom, accent:BRAND.green, overlay:"#10B98115" },
  mundo:        { bg1:BRAND.bgTop, bg2:BRAND.bgBottom, accent:BRAND.green, overlay:"#10B98115" },
  horoscopo:    { bg1:BRAND.bgTop, bg2:BRAND.bgBottom, accent:BRAND.green, overlay:"#10B98115" },
  numerologia:  { bg1:BRAND.bgTop, bg2:BRAND.bgBottom, accent:BRAND.green, overlay:"#10B98115" },
};

// Helper: quebra texto em múltiplas linhas
const wrapText = (ctx, text, maxWidth) => {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    const test = current ? current + ' ' + word : word;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
};

// Helper: desenha texto centralizado com quebra automática
const drawWrappedText = (ctx, text, x, y, maxWidth, lineHeight, color, font, align="center") => {
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textAlign = align;
  const lines = wrapText(ctx, text, maxWidth);
  lines.forEach((line, i) => ctx.fillText(line, x, y + i * lineHeight));
  return y + lines.length * lineHeight;
};

// Helper: desenha estrelas decorativas (pontinhos verdes no fundo)
const drawStars = (ctx, count = 60) => {
  for (let i = 0; i < count; i++) {
    const x = Math.random() * W;
    const y = Math.random() * H;
    const r = Math.random() * 1.8 + 0.4;
    ctx.fillStyle = Math.random() > 0.7 ? "rgba(16,185,129,0.45)" : "rgba(255,255,255,0.18)";
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
};

// Helper: desenha um arco/órbita decorativa (efeito globo)
const drawGlobeArc = (ctx, cx, cy, radius) => {
  ctx.strokeStyle = "rgba(16,185,129,0.18)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.stroke();
};

// Helper: logo K vetorial em verde neon
const drawKLogo = (ctx, x, y, size) => {
  const g = BRAND.green;
  ctx.save();
  ctx.translate(x, y);
  // Glow externo
  ctx.shadowColor = g;
  ctx.shadowBlur = 25;
  ctx.fillStyle = g;
  // Forma estilizada do K: duas barras
  // Barra vertical
  ctx.fillRect(0, 0, size*0.18, size);
  // Diagonal superior
  ctx.beginPath();
  ctx.moveTo(size*0.18, size*0.5);
  ctx.lineTo(size*0.85, 0);
  ctx.lineTo(size*1.0, size*0.12);
  ctx.lineTo(size*0.38, size*0.5);
  ctx.closePath();
  ctx.fill();
  // Diagonal inferior
  ctx.beginPath();
  ctx.moveTo(size*0.18, size*0.5);
  ctx.lineTo(size*0.85, size);
  ctx.lineTo(size*1.0, size*0.88);
  ctx.lineTo(size*0.38, size*0.5);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
};

// Helper: desenha logo KomparAI no topo (K + texto)
const drawLogo = (ctx) => {
  drawKLogo(ctx, 60, 70, 70);
  // Texto "KOMPARAI"
  ctx.shadowBlur = 0;
  ctx.fillStyle = BRAND.white;
  ctx.font = "bold 56px 'Sora', sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("KOMPAR", 160, 130);
  const wKompar = ctx.measureText("KOMPAR").width;
  ctx.fillStyle = BRAND.green;
  ctx.fillText("AI", 160 + wKompar, 130);
};

// Helper: desenha footer no padrão KomparAI (selo verde com URL)
const drawFooter = (ctx, customMsg=null) => {
  // Linha tênue separadora
  ctx.strokeStyle = "rgba(16,185,129,0.18)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(80, H - 240);
  ctx.lineTo(W - 80, H - 240);
  ctx.stroke();

  // Selo K à esquerda
  drawKLogo(ctx, 80, H - 200, 60);

  // Texto à esquerda do selo: "DESCUBRA A SUA HISTÓRIA EM"
  ctx.shadowBlur = 0;
  ctx.fillStyle = BRAND.textMuted;
  ctx.font = "500 22px 'Sora', sans-serif";
  ctx.textAlign = "left";
  ctx.fillText((customMsg || "DESCUBRA A SUA HISTÓRIA EM").toUpperCase(), 200, H - 175);

  // Pílula com URL
  const pillW = 380, pillH = 70;
  const pillX = 200, pillY = H - 155;
  ctx.strokeStyle = BRAND.green;
  ctx.lineWidth = 2;
  ctx.fillStyle = "rgba(16,185,129,0.08)";
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(pillX, pillY, pillW, pillH, 35);
    ctx.fill();
    ctx.stroke();
  } else {
    ctx.fillRect(pillX, pillY, pillW, pillH);
    ctx.strokeRect(pillX, pillY, pillW, pillH);
  }
  ctx.fillStyle = BRAND.green;
  ctx.font = "bold 34px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("KOMPARAI.COM", pillX + pillW/2, pillY + 46);
};

// Helper: cria fundo padrão KomparAI (preto + verde + estrelas + orbitas)
const drawBackground = (ctx, _theme) => {
  // Gradient base
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, BRAND.bgTop);
  grad.addColorStop(0.5, "#000000");
  grad.addColorStop(1, BRAND.bgBottom);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Globo sugerido no canto superior direito (orbitas + glow)
  const cx = W + 100, cy = -50;
  ctx.save();
  for (let r = 600; r < 1400; r += 120) {
    drawGlobeArc(ctx, cx, cy, r);
  }
  // Glow do "sol/borda do globo"
  const sunGlow = ctx.createRadialGradient(cx-200, cy+200, 50, cx-200, cy+200, 700);
  sunGlow.addColorStop(0, "rgba(16,185,129,0.35)");
  sunGlow.addColorStop(0.4, "rgba(16,185,129,0.08)");
  sunGlow.addColorStop(1, "transparent");
  ctx.fillStyle = sunGlow;
  ctx.fillRect(0, 0, W, H/2);
  ctx.restore();

  // Estrelas
  drawStars(ctx, 70);
};

// Helper: desenha um card retangular padrão KomparAI (borda verde sutil, fundo translúcido)
const drawCard = (ctx, x, y, w, h, radius=24) => {
  ctx.save();
  ctx.fillStyle = BRAND.cardBg;
  ctx.strokeStyle = BRAND.cardBorder;
  ctx.lineWidth = 1.5;
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, radius);
    ctx.fill();
    ctx.stroke();
  } else {
    ctx.fillRect(x, y, w, h);
    ctx.strokeRect(x, y, w, h);
  }
  ctx.restore();
};

// ============================================================
// TEMPLATES DE IMAGEM
// ============================================================

// 0. COINCIDÊNCIAS (MOTOR PRINCIPAL DE VIRALIZAÇÃO)
// Imagem do resultado do Teste de Coincidências — share rico para WhatsApp/Instagram
const renderCoincidencias = (ctx, { nome, total, top, tags }) => {
  drawBackground(ctx);
  drawLogo(ctx);

  // ─────── SELO DE TOPO "EU, FULANO, ENCONTREI:" ───────
  const seloX = 80, seloY = 250, seloW = W - 160, seloH = 80;
  ctx.save();
  ctx.fillStyle = "rgba(16,185,129,0.12)";
  ctx.strokeStyle = "rgba(16,185,129,0.4)";
  ctx.lineWidth = 2;
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(seloX, seloY, seloW, seloH, 40);
    ctx.fill();
    ctx.stroke();
  }
  ctx.fillStyle = BRAND.green;
  ctx.font = "bold 30px 'Sora', sans-serif";
  ctx.textAlign = "center";
  const seloText = nome ? `🪞 EU, ${nome.toUpperCase()}, ENCONTREI:` : "🪞 ENCONTREI:";
  // Ajuste fonte se nome longo
  let seloFont = 30;
  while (ctx.measureText(seloText).width > seloW - 60 && seloFont > 18) {
    seloFont -= 1;
    ctx.font = `bold ${seloFont}px 'Sora', sans-serif`;
  }
  ctx.fillText(seloText, W/2, seloY + 52);
  ctx.restore();

  // ─────── NÚMERO GIGANTE ───────
  ctx.save();
  ctx.shadowColor = BRAND.green;
  ctx.shadowBlur = 50;
  ctx.fillStyle = BRAND.green;
  ctx.textAlign = "center";
  let tamNum = 380;
  ctx.font = `900 ${tamNum}px 'Sora', sans-serif`;
  while (ctx.measureText(String(total)).width > W - 100 && tamNum > 180) {
    tamNum -= 20;
    ctx.font = `900 ${tamNum}px 'Sora', sans-serif`;
  }
  ctx.fillText(String(total), W/2, 660);
  ctx.restore();

  // ─────── PALAVRA "COINCIDÊNCIAS!" ───────
  ctx.fillStyle = BRAND.white;
  ctx.textAlign = "center";
  let tamCoinc = 64;
  ctx.font = `900 ${tamCoinc}px 'Sora', sans-serif`;
  while (ctx.measureText("COINCIDÊNCIAS!").width > W - 100 && tamCoinc > 38) {
    tamCoinc -= 3;
    ctx.font = `900 ${tamCoinc}px 'Sora', sans-serif`;
  }
  ctx.fillText("COINCIDÊNCIAS!", W/2, 750);

  // Subtítulo
  ctx.fillStyle = BRAND.textMuted;
  ctx.textAlign = "center";
  ctx.font = "italic 28px 'Sora', sans-serif";
  ctx.fillText("com famosos do mundo todo", W/2, 800);

  // ─────── TOP 3 FAMOSOS ───────
  if (top && top.length > 0) {
    // Header
    ctx.fillStyle = BRAND.green;
    ctx.font = "bold 28px 'Sora', sans-serif";
    ctx.fillText("⭐ TOP COINCIDÊNCIAS", W/2, 880);

    let yPos = 930;
    top.slice(0, 3).forEach((celeb) => {
      // Card do famoso
      drawCard(ctx, 80, yPos, W-160, 140, 24);

      // Avatar circular com emoji da categoria
      ctx.save();
      const avX = 165, avY = yPos + 70;
      ctx.fillStyle = "rgba(16,185,129,0.2)";
      ctx.beginPath();
      ctx.arc(avX, avY, 50, 0, Math.PI*2);
      ctx.fill();
      ctx.strokeStyle = "rgba(16,185,129,0.5)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(avX, avY, 50, 0, Math.PI*2);
      ctx.stroke();
      ctx.fillStyle = BRAND.white;
      ctx.font = "52px 'Sora', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(celeb.emoji || "⭐", avX, avY);
      ctx.restore();
      ctx.textBaseline = "alphabetic";

      // Nome (BRANCO)
      ctx.fillStyle = BRAND.white;
      ctx.font = "bold 38px 'Sora', sans-serif";
      ctx.textAlign = "left";
      // Trunca se for muito grande
      let displayName = celeb.name || "";
      ctx.font = "bold 38px 'Sora', sans-serif";
      while (ctx.measureText(displayName).width > W - 420 && displayName.length > 8) {
        displayName = displayName.slice(0, -1);
      }
      if (displayName !== celeb.name) displayName += "…";
      ctx.fillText(displayName, 240, yPos + 60);

      // Categoria · ano
      ctx.fillStyle = BRAND.textMuted;
      ctx.font = "500 22px 'Sora', sans-serif";
      ctx.fillText(`${celeb.category || ""} · ${celeb.born || ""}`, 240, yPos + 95);

      // Número de matches (à direita)
      ctx.save();
      ctx.fillStyle = "rgba(16,185,129,0.18)";
      ctx.strokeStyle = BRAND.green;
      ctx.lineWidth = 2;
      const pillX = W - 220, pillY = yPos + 35, pillW = 130, pillH = 70;
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(pillX, pillY, pillW, pillH, 14);
        ctx.fill();
        ctx.stroke();
      }
      ctx.fillStyle = BRAND.green;
      ctx.font = "900 40px 'Sora', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(String(celeb.matches || 1), pillX + pillW/2, pillY + 50);
      ctx.restore();
      ctx.fillStyle = BRAND.textMuted;
      ctx.font = "500 16px 'Sora', sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("em comum", pillX + pillW/2, yPos + 125);

      yPos += 155;
    });
  }

  // ─────── TAGS (o que tem em comum) ───────
  if (tags && tags.length > 0) {
    let yTags = 1410;
    ctx.fillStyle = BRAND.green;
    ctx.font = "bold 24px 'Sora', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("🔗 O QUE TÊM EM COMUM", W/2, yTags);
    yTags += 50;

    // Renderiza tags como pílulas em até 2 linhas
    ctx.font = "500 24px 'Sora', sans-serif";
    let xCursor = 0;
    const tagPadX = 24, tagH = 50, tagGap = 14;
    const tagWidths = tags.slice(0, 6).map(t => ctx.measureText(t).width + tagPadX * 2);

    // Layout em linhas (máx 2)
    const lines = [];
    let currentLine = [];
    let currentWidth = 0;
    const maxLineWidth = W - 160;

    tags.slice(0, 6).forEach((tag, idx) => {
      const tw = tagWidths[idx];
      if (currentWidth + tw + tagGap > maxLineWidth && currentLine.length > 0) {
        lines.push({tags: currentLine, totalW: currentWidth - tagGap});
        currentLine = [];
        currentWidth = 0;
      }
      currentLine.push({tag, w: tw});
      currentWidth += tw + tagGap;
    });
    if (currentLine.length > 0) lines.push({tags: currentLine, totalW: currentWidth - tagGap});

    lines.slice(0, 2).forEach((line) => {
      let xStart = (W - line.totalW) / 2;
      line.tags.forEach(({tag, w}) => {
        // Pílula
        ctx.save();
        ctx.fillStyle = "rgba(16,185,129,0.12)";
        ctx.strokeStyle = "rgba(16,185,129,0.4)";
        ctx.lineWidth = 1.5;
        if (ctx.roundRect) {
          ctx.beginPath();
          ctx.roundRect(xStart, yTags, w, tagH, 25);
          ctx.fill();
          ctx.stroke();
        }
        ctx.fillStyle = BRAND.greenLight;
        ctx.font = "500 24px 'Sora', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(tag, xStart + w/2, yTags + 34);
        ctx.restore();
        xStart += w + tagGap;
      });
      yTags += tagH + 16;
    });
  }

  drawFooter(ctx);
};

// 1. TEMPERAMENTO
const renderTemperamento = (ctx, { nome, resultado, emoji, mentor, desc, cor }) => {
  const theme = { bg1: cor, bg2: "#0A1F1A", accent: "#fff", overlay: "#ffffff15" };
  drawBackground(ctx, theme);
  drawStars(ctx, 30);
  drawLogo(ctx, "#fff");

  // Emoji gigante
  ctx.font = "300px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(emoji, W/2, 540);

  // Nome
  ctx.fillStyle = "rgba(255,255,255,0.7)";
  ctx.textAlign = "center";
  const nomeTextoTemp = `${(nome||"").toUpperCase()} É`;
  let tamNomeTemp = 50;
  ctx.font = `bold ${tamNomeTemp}px 'Sora', sans-serif`;
  while (ctx.measureText(nomeTextoTemp).width > W - 120 && tamNomeTemp > 28) {
    tamNomeTemp -= 2;
    ctx.font = `bold ${tamNomeTemp}px 'Sora', sans-serif`;
  }
  ctx.fillText(nomeTextoTemp, W/2, 720);

  // Resultado
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  let tamResTemp = 140;
  ctx.font = `900 ${tamResTemp}px 'Sora', sans-serif`;
  while (ctx.measureText((resultado||"").toUpperCase()).width > W - 80 && tamResTemp > 70) {
    tamResTemp -= 6;
    ctx.font = `900 ${tamResTemp}px 'Sora', sans-serif`;
  }
  ctx.fillText((resultado||"").toUpperCase(), W/2, 880);

  // Mentor
  if (mentor) {
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.textAlign = "center";
    const txtMentor = `Como ${mentor}`;
    let tamMentor = 44;
    ctx.font = `italic ${tamMentor}px 'Sora', sans-serif`;
    while (ctx.measureText(txtMentor).width > W - 100 && tamMentor > 24) {
      tamMentor -= 2;
      ctx.font = `italic ${tamMentor}px 'Sora', sans-serif`;
    }
    ctx.fillText(txtMentor, W/2, 970);
  }

  // Caixa com descrição
  if (desc) {
    ctx.fillStyle = "rgba(0,0,0,0.25)";
    ctx.roundRect ? (() => {
      ctx.beginPath();
      ctx.roundRect(120, 1080, W-240, 280, 30);
      ctx.fill();
    })() : ctx.fillRect(120, 1080, W-240, 280);

    ctx.fillStyle = "#fff";
    ctx.font = "italic 42px 'Sora', sans-serif";
    drawWrappedText(ctx, `"${desc}"`, W/2, 1180, W-320, 60, "#fff", "italic 42px 'Sora', sans-serif");
  }

  drawFooter(ctx);
};

// 2. RAIO X
const renderRaioX = (ctx, { nome, resultados }) => {
  drawBackground(ctx);
  drawLogo(ctx);

  // ÍCONE DE TOPO (radiação) em VERDE NEON com glow
  ctx.save();
  ctx.shadowColor = BRAND.green;
  ctx.shadowBlur = 30;
  ctx.fillStyle = BRAND.green;
  ctx.font = "100px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("☢", W/2, 340);
  ctx.restore();

  // Título — "RAIO X DE" em verde + nome em branco/grande
  ctx.fillStyle = BRAND.green;
  ctx.font = "bold 42px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("RAIO X DE", W/2, 420);

  // Nome — em CAPS + quebra automática se for longo
  ctx.fillStyle = BRAND.white;
  // Ajusta tamanho dinamicamente para caber
  const nomeUpper = (nome || "VOCÊ").toUpperCase();
  let nomeFontSize = 110;
  ctx.font = `900 ${nomeFontSize}px 'Sora', sans-serif`;
  while (ctx.measureText(nomeUpper).width > W - 160 && nomeFontSize > 60) {
    nomeFontSize -= 6;
    ctx.font = `900 ${nomeFontSize}px 'Sora', sans-serif`;
  }
  // Se ainda muito largo, quebra em 2 linhas
  if (ctx.measureText(nomeUpper).width > W - 160) {
    const palavras = nomeUpper.split(" ");
    const meio = Math.ceil(palavras.length / 2);
    const linha1 = palavras.slice(0, meio).join(" ");
    const linha2 = palavras.slice(meio).join(" ");
    ctx.fillText(linha1, W/2, 510);
    ctx.fillText(linha2, W/2, 510 + nomeFontSize + 10);
  } else {
    ctx.fillText(nomeUpper, W/2, 540);
  }

  // Subtitulo
  ctx.fillStyle = BRAND.greenLight;
  ctx.font = "italic 32px 'Sora', sans-serif";
  ctx.fillText("Quem você é, em poucas palavras", W/2, 640);

  // Lista de resultados (cards visuais com ícone verde brilhante)
  let yPos = 720;
  resultados.slice(0, 6).forEach((r) => {
    // Card com borda verde sutil
    drawCard(ctx, 90, yPos, W-180, 130, 20);

    // ÍCONE com fundo circular verde
    ctx.save();
    ctx.fillStyle = "rgba(16,185,129,0.18)";
    ctx.beginPath();
    ctx.arc(180, yPos + 65, 42, 0, Math.PI*2);
    ctx.fill();
    // Emoji por cima do círculo
    ctx.fillStyle = BRAND.greenLight;
    ctx.font = "52px 'Sora', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(r.emoji, 180, yPos + 65);
    ctx.restore();
    ctx.textBaseline = "alphabetic";

    // Label (cinza claro)
    ctx.fillStyle = BRAND.textMuted;
    ctx.font = "500 26px 'Sora', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(r.label, 260, yPos + 52);

    // Valor (branco bold)
    ctx.fillStyle = BRAND.white;
    ctx.textAlign = "left";
    const valorTexto = String(r.valor || "");
    let tamValor = 46;
    ctx.font = `bold ${tamValor}px 'Sora', sans-serif`;
    const valorMaxW = W - 320;
    while (ctx.measureText(valorTexto).width > valorMaxW && tamValor > 24) {
      tamValor -= 2;
      ctx.font = `bold ${tamValor}px 'Sora', sans-serif`;
    }
    ctx.fillText(valorTexto, 260, yPos + 100);

    yPos += 145;
  });

  drawFooter(ctx);
};

// 3. VERSÍCULO
const renderVersiculo = (ctx, { texto, ref, tradicao, dataStr }) => {
  const theme = SHARE_THEMES.versiculo;
  drawBackground(ctx, theme);
  drawStars(ctx, 60);
  drawLogo(ctx, theme.accent);

  // Data
  ctx.fillStyle = theme.accent;
  ctx.font = "bold 36px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(dataStr || "Versículo do Dia", W/2, 280);

  // Ícone
  ctx.font = "180px 'Sora', sans-serif";
  ctx.fillText("📖", W/2, 480);

  // Tradição
  ctx.fillStyle = "rgba(255,255,255,0.6)";
  ctx.font = "32px 'Sora', sans-serif";
  ctx.fillText(tradicao || "Universal", W/2, 540);

  // Versículo (texto principal)
  ctx.font = "italic bold 56px 'Sora', sans-serif";
  drawWrappedText(ctx, `"${texto}"`, W/2, 720, W-200, 80, "#fff", "italic bold 56px 'Sora', sans-serif");

  // Referência
  ctx.fillStyle = theme.accent;
  ctx.textAlign = "center";
  const refTexto = `— ${ref || ""}`;
  let tamRef = 48;
  ctx.font = `bold ${tamRef}px 'Sora', sans-serif`;
  while (ctx.measureText(refTexto).width > W - 100 && tamRef > 24) {
    tamRef -= 2;
    ctx.font = `bold ${tamRef}px 'Sora', sans-serif`;
  }
  ctx.fillText(refTexto, W/2, 1400);

  drawFooter(ctx);
};

// 4. HISTÓRIA DO DIA
const renderHistoria = (ctx, { texto, dataStr }) => {
  const theme = SHARE_THEMES.historia;
  drawBackground(ctx, theme);
  drawStars(ctx, 20);
  drawLogo(ctx, theme.accent);

  // Ícone
  ctx.font = "200px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("📜", W/2, 450);

  // Título
  ctx.fillStyle = theme.accent;
  ctx.font = "bold 48px 'Sora', sans-serif";
  ctx.fillText("Neste dia na história", W/2, 580);

  // Data
  ctx.fillStyle = "#fff";
  ctx.textAlign = "center";
  let tamData = 64;
  ctx.font = `bold ${tamData}px 'Sora', sans-serif`;
  while (ctx.measureText(dataStr || "").width > W - 100 && tamData > 32) {
    tamData -= 3;
    ctx.font = `bold ${tamData}px 'Sora', sans-serif`;
  }
  ctx.fillText(dataStr || "", W/2, 680);

  // Texto histórico
  ctx.font = "italic 50px 'Sora', sans-serif";
  drawWrappedText(ctx, texto, W/2, 850, W-160, 72, "#fff", "italic 50px 'Sora', sans-serif");

  drawFooter(ctx);
};

// 5. HOJE NO MUNDO
const renderMundo = (ctx, { dataStr, calendarios }) => {
  drawBackground(ctx);
  drawLogo(ctx);

  // Globo gigante com glow verde
  ctx.save();
  ctx.shadowColor = BRAND.green;
  ctx.shadowBlur = 35;
  ctx.font = "180px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("🌍", W/2, 380);
  ctx.restore();

  // Título — garantindo centralização
  ctx.fillStyle = BRAND.white;
  ctx.textAlign = "center";
  let tituloMundo = "Em que ano estamos?";
  let tamMundo = 72;
  ctx.font = `900 ${tamMundo}px 'Sora', sans-serif`;
  while (ctx.measureText(tituloMundo).width > W - 120 && tamMundo > 40) {
    tamMundo -= 4;
    ctx.font = `900 ${tamMundo}px 'Sora', sans-serif`;
  }
  ctx.fillText(tituloMundo, W/2, 490);

  // Subtítulo (data)
  ctx.fillStyle = BRAND.textMuted;
  ctx.textAlign = "center";
  ctx.font = "500 32px 'Sora', sans-serif";
  ctx.fillText(dataStr, W/2, 550);

  // Linha decorativa verde
  ctx.strokeStyle = BRAND.green;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(W/2 - 40, 590);
  ctx.lineTo(W/2 + 40, 590);
  ctx.stroke();

  // Grid de calendários (até 6)
  let yPos = 650;
  calendarios.slice(0, 6).forEach((cal) => {
    drawCard(ctx, 80, yPos, W-160, 145, 22);

    // ÍCONE: círculo verde com emoji EM BRANCO/CLARO por cima (contraste)
    ctx.save();
    ctx.fillStyle = "rgba(16,185,129,0.2)";
    ctx.beginPath();
    ctx.arc(160, yPos + 72, 44, 0, Math.PI*2);
    ctx.fill();
    // Borda do círculo
    ctx.strokeStyle = "rgba(16,185,129,0.45)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(160, yPos + 72, 44, 0, Math.PI*2);
    ctx.stroke();
    // Emoji do calendário centralizado
    ctx.font = "48px 'Sora', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = BRAND.white;
    ctx.fillText(cal.emoji, 160, yPos + 72);
    ctx.restore();
    ctx.textBaseline = "alphabetic";

    // Nome (cinza claro)
    ctx.fillStyle = BRAND.textMuted;
    ctx.font = "500 28px 'Sora', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(cal.nome, 240, yPos + 55);

    // Ano em verde neon (tamanho ajustado se for muito longo)
    ctx.fillStyle = BRAND.green;
    let anoFontSize = 44;
    ctx.font = `bold ${anoFontSize}px 'Sora', sans-serif`;
    while (ctx.measureText(cal.formatado).width > W - 320 && anoFontSize > 26) {
      anoFontSize -= 2;
      ctx.font = `bold ${anoFontSize}px 'Sora', sans-serif`;
    }
    ctx.fillText(cal.formatado, 240, yPos + 110);

    yPos += 160;
  });

  drawFooter(ctx);
};

// 6. HORÓSCOPO
const renderHoroscopo = (ctx, { nome, signo, emoji, sistema, mensagem }) => {
  drawBackground(ctx);
  drawLogo(ctx);

  // Selo "HORÓSCOPO DO DIA" no topo
  ctx.save();
  const seloW = 380, seloH = 70;
  const seloX = W/2 - seloW/2, seloY = 240;
  ctx.fillStyle = "rgba(16,185,129,0.15)";
  ctx.strokeStyle = BRAND.green;
  ctx.lineWidth = 2;
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(seloX, seloY, seloW, seloH, 35);
    ctx.fill();
    ctx.stroke();
  }
  ctx.fillStyle = BRAND.green;
  ctx.font = "bold 30px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("✨ SEU HORÓSCOPO", W/2, seloY + 46);
  ctx.restore();

  // Quadrado roxo decorativo com emoji do signo (estilo App)
  ctx.save();
  const qSize = 260;
  const qX = W/2 - qSize/2;
  const qY = 380;
  // Quadrado roxo gradient
  const qGrad = ctx.createLinearGradient(qX, qY, qX, qY + qSize);
  qGrad.addColorStop(0, "#8B5CF6");
  qGrad.addColorStop(1, "#6D28D9");
  ctx.fillStyle = qGrad;
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(qX, qY, qSize, qSize, 36);
    ctx.fill();
  } else {
    ctx.fillRect(qX, qY, qSize, qSize);
  }
  // Glow ao redor
  ctx.shadowColor = "#8B5CF6";
  ctx.shadowBlur = 30;
  ctx.fillStyle = "rgba(139,92,246,0.4)";
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(qX, qY, qSize, qSize, 36);
    ctx.stroke();
  }
  ctx.restore();

  // Emoji do signo dentro do quadrado
  ctx.save();
  ctx.fillStyle = BRAND.white;
  ctx.font = "180px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(emoji, W/2, 380 + 130);
  ctx.restore();
  ctx.textBaseline = "alphabetic";

  // Nome (BRANCO em CAPS)
  if (nome) {
    ctx.fillStyle = BRAND.textMuted;
    ctx.textAlign = "center";
    const nomeUp = nome.toUpperCase();
    let tamNomeH = 36;
    ctx.font = `bold ${tamNomeH}px 'Sora', sans-serif`;
    while (ctx.measureText(nomeUp).width > W - 100 && tamNomeH > 20) {
      tamNomeH -= 2;
      ctx.font = `bold ${tamNomeH}px 'Sora', sans-serif`;
    }
    ctx.fillText(nomeUp, W/2, 730);
  }

  // Signo gigante (em branco com glow)
  ctx.save();
  ctx.shadowColor = BRAND.green;
  ctx.shadowBlur = 20;
  ctx.fillStyle = BRAND.white;
  ctx.textAlign = "center";
  let tamSigno = 120;
  ctx.font = `900 ${tamSigno}px 'Sora', sans-serif`;
  while (ctx.measureText(signo || "").width > W - 100 && tamSigno > 60) {
    tamSigno -= 5;
    ctx.font = `900 ${tamSigno}px 'Sora', sans-serif`;
  }
  ctx.fillText(signo || "", W/2, 850);
  ctx.restore();

  // Sistema
  ctx.fillStyle = BRAND.green;
  ctx.textAlign = "center";
  const sistemaTexto = `Astrologia ${sistema || ""}`;
  let tamSist = 36;
  ctx.font = `italic ${tamSist}px 'Sora', sans-serif`;
  while (ctx.measureText(sistemaTexto).width > W - 100 && tamSist > 20) {
    tamSist -= 2;
    ctx.font = `italic ${tamSist}px 'Sora', sans-serif`;
  }
  ctx.fillText(sistemaTexto, W/2, 905);

  // Card grande com mensagem
  if (mensagem) {
    drawCard(ctx, 80, 980, W-160, 540, 30);
    ctx.fillStyle = BRAND.greenLight;
    ctx.font = "bold 24px 'Sora', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("⭐ MENSAGEM DO DIA", W/2, 1040);

    drawWrappedText(ctx, `"${mensagem}"`, W/2, 1140, W-200, 58, BRAND.white, "italic 38px 'Sora', sans-serif");
  }

  drawFooter(ctx);
};

// 7. NUMEROLOGIA
const renderNumerologia = (ctx, { nome, numero, arquetipo, essencia }) => {
  drawBackground(ctx);
  drawLogo(ctx);

  // Selo "NUMEROLOGIA" no topo (pílula verde)
  const seloW = 380, seloH = 70;
  const seloX = W/2 - seloW/2, seloY = 250;
  ctx.save();
  ctx.fillStyle = "rgba(16,185,129,0.15)";
  ctx.strokeStyle = BRAND.green;
  ctx.lineWidth = 2;
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(seloX, seloY, seloW, seloH, 35);
    ctx.fill();
    ctx.stroke();
  }
  ctx.fillStyle = BRAND.green;
  ctx.font = "bold 32px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("🔢 NUMEROLOGIA", W/2, seloY + 46);
  ctx.restore();

  // Nome do usuário (BRANCO, sem competir com o número)
  if (nome) {
    ctx.fillStyle = BRAND.white;
    ctx.textAlign = "center";
    const nomeUpN = nome.toUpperCase();
    let tamNomeN = 44;
    ctx.font = `bold ${tamNomeN}px 'Sora', sans-serif`;
    while (ctx.measureText(nomeUpN).width > W - 100 && tamNomeN > 24) {
      tamNomeN -= 2;
      ctx.font = `bold ${tamNomeN}px 'Sora', sans-serif`;
    }
    ctx.fillText(nomeUpN, W/2, 410);
  }

  // Círculo de fundo (para o número ficar com peso visual)
  ctx.save();
  const circR = 280;
  const circY = 760;
  // Glow externo
  const circGlow = ctx.createRadialGradient(W/2, circY, 50, W/2, circY, circR);
  circGlow.addColorStop(0, "rgba(16,185,129,0.18)");
  circGlow.addColorStop(0.6, "rgba(16,185,129,0.04)");
  circGlow.addColorStop(1, "transparent");
  ctx.fillStyle = circGlow;
  ctx.beginPath();
  ctx.arc(W/2, circY, circR, 0, Math.PI*2);
  ctx.fill();
  // Anel verde
  ctx.strokeStyle = "rgba(16,185,129,0.4)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(W/2, circY, circR - 30, 0, Math.PI*2);
  ctx.stroke();
  ctx.restore();

  // Número GIGANTE (em verde neon brilhante)
  ctx.save();
  ctx.shadowColor = BRAND.green;
  ctx.shadowBlur = 40;
  ctx.fillStyle = BRAND.green;
  ctx.font = "900 360px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(numero, W/2, circY);
  ctx.restore();
  ctx.textBaseline = "alphabetic";

  // Arquétipo (em branco, grande)
  ctx.fillStyle = BRAND.white;
  ctx.font = "900 80px 'Sora', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(arquetipo || "", W/2, 1140);

  // Essência (em itálico, dentro de um card verde sutil)
  if (essencia) {
    drawCard(ctx, 100, 1200, W-200, 280, 28);
    ctx.fillStyle = BRAND.greenLight;
    ctx.font = "bold 22px 'Sora', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ ESSÊNCIA", W/2, 1255);
    drawWrappedText(ctx, `"${essencia}"`, W/2, 1320, W-260, 56, BRAND.white, "italic 38px 'Sora', sans-serif");
  }

  drawFooter(ctx);
};

// ============================================================
// FUNÇÃO PRINCIPAL: gera imagem e compartilha
// ============================================================
const generateShareImage = async (type, data) => {
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Polyfill para roundRect em navegadores antigos
  if (!ctx.roundRect) {
    ctx.roundRect = function(x, y, w, h, r) {
      this.beginPath();
      this.moveTo(x + r, y);
      this.arcTo(x + w, y, x + w, y + h, r);
      this.arcTo(x + w, y + h, x, y + h, r);
      this.arcTo(x, y + h, x, y, r);
      this.arcTo(x, y, x + w, y, r);
      this.closePath();
      return this;
    };
  }

  // Renderiza conforme tipo
  switch (type) {
    case 'coincidencias': renderCoincidencias(ctx, data); break;
    case 'temperamento':  renderTemperamento(ctx, data); break;
    case 'raioX':         renderRaioX(ctx, data); break;
    case 'versiculo':     renderVersiculo(ctx, data); break;
    case 'historia':      renderHistoria(ctx, data); break;
    case 'mundo':         renderMundo(ctx, data); break;
    case 'horoscopo':     renderHoroscopo(ctx, data); break;
    case 'numerologia':   renderNumerologia(ctx, data); break;
    default: return null;
  }

  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), 'image/png', 1.0);
  });
};

// ============================================================
// COMPARTILHAR (com fallbacks)
// ============================================================
const shareContent = async (type, data, textMessage) => {
  const fullText = `${textMessage}\n\n🌐 komparai.com`;
  const blob = await generateShareImage(type, data);
  if (!blob) {
    // Fallback: só texto
    if (navigator.share) {
      try { await navigator.share({ title: "KomparAI", text: fullText, url: "https://komparai.com" }); } catch (e) {}
    } else {
      navigator.clipboard?.writeText(fullText + "\nhttps://komparai.com");
      alert("Link copiado!");
    }
    return;
  }

  const file = new File([blob], `komparai-${type}.png`, { type: 'image/png' });

  // Tenta Web Share API com arquivo
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        files: [file],
        title: "KomparAI",
        text: fullText,
      });
      return;
    } catch (e) {
      if (e.name === 'AbortError') return;
    }
  }

  // Fallback: baixa a imagem
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `komparai-${type}.png`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

// Botão flutuante compartilhar
function ShareBtn({ onClick, style }) {
  return (
    <button onClick={(e)=>{ e.stopPropagation(); onClick(); }}
      style={{
        position:"absolute", top:14, right:14,
        width:38, height:38, borderRadius:"50%",
        border:"none", background:"rgba(255,255,255,0.95)",
        boxShadow:"0 4px 12px rgba(0,0,0,0.15)",
        cursor:"pointer", fontSize:18,
        display:"flex", alignItems:"center", justifyContent:"center",
        zIndex:10,
        ...style,
      }} aria-label="Compartilhar">📤</button>
  );
}


const STORAGE_KEY = "komparai_profile_v2";
const loadProfile = () => { try { const r = localStorage.getItem(STORAGE_KEY); return r ? JSON.parse(r) : null; } catch { return null; } };
const saveProfileLS = (p) => { try { if (p) localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); else localStorage.removeItem(STORAGE_KEY); } catch {} };

const getSign = (d, m) => {
  if (!d || !m) return null;
  if ((m===3&&d>=21)||(m===4&&d<=19)) return "Áries";
  if ((m===4&&d>=20)||(m===5&&d<=20)) return "Touro";
  if ((m===5&&d>=21)||(m===6&&d<=20)) return "Gêmeos";
  if ((m===6&&d>=21)||(m===7&&d<=22)) return "Câncer";
  if ((m===7&&d>=23)||(m===8&&d<=22)) return "Leão";
  if ((m===8&&d>=23)||(m===9&&d<=22)) return "Virgem";
  if ((m===9&&d>=23)||(m===10&&d<=22)) return "Libra";
  if ((m===10&&d>=23)||(m===11&&d<=21)) return "Escorpião";
  if ((m===11&&d>=22)||(m===12&&d<=21)) return "Sagitário";
  if ((m===12&&d>=22)||(m===1&&d<=19)) return "Capricórnio";
  if ((m===1&&d>=20)||(m===2&&d<=18)) return "Aquário";
  return "Peixes";
};
const SIGN_EMOJI = {"Áries":"♈","Touro":"♉","Gêmeos":"♊","Câncer":"♋","Leão":"♌","Virgem":"♍","Libra":"♎","Escorpião":"♏","Sagitário":"♐","Capricórnio":"♑","Aquário":"♒","Peixes":"♓"};
const calcVida = (d, m, y) => {
  if (!d || !m || !y || y < 1900) return null;
  const born = new Date(y, m-1, d);
  const now = new Date();
  if (born > now) return null;
  const totalDias = Math.floor((now - born)/86400000);
  let anos = now.getFullYear() - born.getFullYear();
  let meses = now.getMonth() - born.getMonth();
  let dias = now.getDate() - born.getDate();
  if (dias < 0) { meses--; dias += new Date(now.getFullYear(), now.getMonth(), 0).getDate(); }
  if (meses < 0) { anos--; meses += 12; }
  let proxAniv = new Date(now.getFullYear(), m-1, d);
  if (proxAniv <= now) proxAniv = new Date(now.getFullYear()+1, m-1, d);
  const diasParaAniv = Math.ceil((proxAniv - now)/86400000);
  return { anos, meses, dias, totalDias, diaSemNasc: DAYS_PT[born.getDay()], diasParaAniv };
};

const sanitizeInt = (v) => { if (v==="" || v==null) return ""; const n = parseInt(v); return isNaN(n)||n<0 ? "" : n; };
const clampInt = (v, min, max) => { if (v==="") return ""; const n = parseInt(v); if (isNaN(n)) return ""; if (n<min) return min; if (n>max) return max; return n; };

const getFamousOfDay = () => {
  const match = famosos.filter(c => c.day === DAY && c.month === MONTH);
  if (match.length > 0) return match.sort((a,b) => b.popularity - a.popularity)[0];
  return famosos[(DAY * MONTH) % famosos.length];
};

const findMatches = (user) => {
  const userSign = user.birthDay && user.birthMonth ? getSign(user.birthDay, user.birthMonth) : null;
  const results = [];
  famosos.forEach(cel => {
    const hits = [];
    const celSign = getSign(cel.day, cel.month);
    const gBoost = user.gender && cel.gender === user.gender ? 1 : 0;

    // Flags de priorização (usadas no sort)
    let isBirthdayMatch = false;
    let heightDiff = 9999;
    let weightDiff = 9999;
    let sameHeight = false;
    let sameWeight = false;

    if (user.birthDay && user.birthMonth && cel.day===user.birthDay && cel.month===user.birthMonth) {
      hits.push({icon:"🎂",text:`Vocês fazem aniversário no mesmo dia — ${user.birthDay} de ${MONTHS[user.birthMonth]}!`,weight:100+gBoost});
      isBirthdayMatch = true;
    } else if (user.birthMonth && cel.month===user.birthMonth) {
      hits.push({icon:"🗓️",text:`Vocês nasceram no mesmo mês — ${MONTHS[user.birthMonth]}!`,weight:4+gBoost});
    }
    if (user.birthYear && cel.born===user.birthYear)
      hits.push({icon:"🎉",text:`Mesma geração! Ambos nascidos em ${user.birthYear}.`,weight:5+gBoost});
    if (userSign && celSign && userSign===celSign)
      hits.push({icon:SIGN_EMOJI[userSign],text:`Vocês têm o mesmo signo — ${userSign}!`,weight:6+gBoost});
    if (user.height && cel.height) {
      heightDiff = Math.abs(user.height - cel.height);
      if (heightDiff===0) {
        hits.push({icon:"📏",text:`Mesma altura exata — ${cel.height}cm!`,weight:50+gBoost});
        sameHeight = true;
      } else if (heightDiff<=2) {
        hits.push({icon:"📏",text:`Sua altura é quase igual à de ${cel.name} (${cel.height}cm).`,weight:15+gBoost});
      } else if (heightDiff<=5) {
        hits.push({icon:"📏",text:`Altura próxima: ${cel.name} tem ${cel.height}cm.`,weight:5+gBoost});
      }
    }
    if (user.weight && cel.weight) {
      weightDiff = Math.abs(user.weight - cel.weight);
      if (weightDiff===0) {
        hits.push({icon:"⚖️",text:`Mesmo peso exato — ${cel.weight}kg!`,weight:45+gBoost});
        sameWeight = true;
      } else if (weightDiff<=3) {
        hits.push({icon:"⚖️",text:`Seu peso é quase igual ao de ${cel.name} (${cel.weight}kg).`,weight:12+gBoost});
      } else if (weightDiff<=7) {
        hits.push({icon:"⚖️",text:`Peso próximo: ${cel.name} pesa ${cel.weight}kg.`,weight:4+gBoost});
      }
    }
    if (user.gender && cel.temperamento && user.temperamento && cel.temperamento === user.temperamento)
      hits.push({icon:"🧬",text:`Mesmo temperamento — ${cel.temperamento}!`,weight:3+gBoost});

    if (hits.length > 0) {
      const score = hits.reduce((s,h)=>s+h.weight,0);
      results.push({ cel, hits, score, isBirthdayMatch, sameHeight, sameWeight, heightDiff, weightDiff });
    }
  });

  // Ordenação multi-nível:
  // 1º) Aniversário no mesmo dia (sempre topo)
  // 2º) Mesma altura E mesmo peso (exato)
  // 3º) Mesma altura OU mesmo peso (exato)
  // 4º) Por proximidade combinada de altura+peso
  // 5º) Por score total (desempate)
  return results.sort((a,b) => {
    if (a.isBirthdayMatch !== b.isBirthdayMatch) return b.isBirthdayMatch - a.isBirthdayMatch;
    const aExact = (a.sameHeight?1:0) + (a.sameWeight?1:0);
    const bExact = (b.sameHeight?1:0) + (b.sameWeight?1:0);
    if (aExact !== bExact) return bExact - aExact;
    const aProx = a.heightDiff + a.weightDiff;
    const bProx = b.heightDiff + b.weightDiff;
    if (aProx !== bProx) return aProx - bProx;
    return b.score - a.score;
  });
};

// ============================================================
// COMPONENTES BASE
// ============================================================
const Logo = ({size=22}) => (
  <span style={{fontSize:size,fontWeight:900,letterSpacing:-1,lineHeight:1}}>
    <span style={{color:"#0A1F1A"}}>Kompar</span><span style={{color:"#10B981",fontStyle:"italic"}}>AI</span>
  </span>
);
const Card = ({children,style={},onClick}) => (
  <div onClick={onClick} style={{background:"#fff",borderRadius:20,padding:"18px",boxShadow:"0 2px 8px #0000000a",marginBottom:14,cursor:onClick?"pointer":"default",...style}}>{children}</div>
);
const Btn = ({label,onClick,ghost=false,disabled=false,small=false}) => (
  <button onClick={onClick} disabled={disabled} style={{width:"100%",padding:small?"11px":"15px",
    background:disabled?"#F3F4F6":ghost?"transparent":"#10B981",
    border:ghost?"1.5px solid #D1D5DB":"none",borderRadius:14,
    color:disabled?"#9CA3AF":ghost?"#6B7280":"#fff",
    fontSize:small?13:14,fontWeight:700,cursor:disabled?"not-allowed":"pointer",
    fontFamily:"inherit",boxShadow:ghost||disabled?"none":"0 4px 12px #10B98130"}}>{label}</button>
);
const Label = ({children}) => <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:6}}>{children}</div>;

function Toast({message,type="success",onClose}) {
  useEffect(() => { if (message) { const t = setTimeout(onClose, 2400); return () => clearTimeout(t); }}, [message, onClose]);
  if (!message) return null;
  const bg = type==="error"?"#DC2626":"#10B981";
  return <div style={{position:"fixed",bottom:96,left:"50%",transform:"translateX(-50%)",
    background:bg,color:"#fff",padding:"12px 22px",borderRadius:30,fontSize:14,fontWeight:700,
    boxShadow:"0 8px 24px #00000033",zIndex:200,maxWidth:"90%"}}>{type==="error"?"⚠️":"✅"} {message}</div>;
}

// Share API helper
const shareCard = async (title, text) => {
  try {
    if (navigator.share) {
      await navigator.share({ title, text, url: window.location.href });
      return true;
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(`${title}\n\n${text}\n\n${window.location.href}`);
      return "copied";
    }
  } catch {}
  return false;
};

// ============================================================
// ONBOARDING
// ============================================================
function Onboarding({onDone}) {
  const [name,setName] = useState("");
  const [bd,setBd] = useState("");
  const [bm,setBm] = useState("");
  const [by,setBy] = useState("");
  const sign = bd && bm ? getSign(parseInt(bd), parseInt(bm)) : null;
  const canGo = name.trim().length >= 2 && bd && bm;

  return (
    <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#10B981,#047857)",
      display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",
      padding:"48px 24px 52px",fontFamily:"'Sora',sans-serif",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",top:-80,right:-80,width:280,height:280,borderRadius:"50%",background:"#34D39928",filter:"blur(60px)"}}/>
      <div style={{position:"absolute",bottom:-100,left:-80,width:300,height:300,borderRadius:"50%",background:"#A7F3D030",filter:"blur(70px)"}}/>
      <div style={{zIndex:2,textAlign:"center"}}>
        <div style={{fontSize:60,fontWeight:900,letterSpacing:-2,lineHeight:1}}>
          <span style={{color:"#fff"}}>Kompar</span>
          <span style={{color:"#0A1F1A",fontStyle:"italic"}}>AI</span>
        </div>
        <div style={{marginTop:10,fontSize:11,color:"#D1FAE5",fontWeight:700,letterSpacing:2.5,textTransform:"uppercase"}}>
          Compare · Descubra · Compartilhe
        </div>
      </div>
      <div style={{fontSize:72,lineHeight:1,zIndex:2,
        animation:"mirrorFloat 3s ease-in-out infinite"}}>🪞</div>
      <style>{`@keyframes mirrorFloat{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-14px) rotate(3deg)}}`}</style>
      <div style={{width:"100%",maxWidth:360,zIndex:2}}>
        <div style={{background:"#fff",borderRadius:24,padding:"22px 20px",marginBottom:14,boxShadow:"0 16px 40px #00000022"}}>
          <div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",letterSpacing:-.5,marginBottom:4,lineHeight:1.25}}>
            Será que você tem algo em comum com algum famoso?
          </div>
          <div style={{fontSize:13,color:"#5A6B68",lineHeight:1.5,marginBottom:18}}>
            Dois dados rápidos para personalizar tudo.
          </div>
          <Label>Como podemos te chamar?</Label>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Seu nome ou apelido" autoFocus
            style={{width:"100%",background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:12,
              color:"#0A1F1A",fontSize:15,padding:"13px 15px",boxSizing:"border-box",fontWeight:500,marginBottom:14}}/>
          <Label>Data de nascimento</Label>
          <div style={{display:"flex",gap:6,marginBottom:sign?12:0,width:"100%"}}>
            <input type="number" inputMode="numeric" value={bd}
              onChange={e=>setBd(sanitizeInt(e.target.value))}
              onBlur={e=>setBd(clampInt(e.target.value,1,31))}
              placeholder="Dia"
              style={{flex:"0 0 22%",minWidth:0,background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:10,
                color:"#0A1F1A",fontSize:14,padding:"12px 8px",boxSizing:"border-box",fontWeight:500,WebkitAppearance:"none",textAlign:"center"}}/>
            <select value={bm} onChange={e=>setBm(e.target.value)}
              style={{flex:"1 1 auto",minWidth:0,background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:10,
                color:bm?"#0A1F1A":"#9CA3AF",fontSize:14,padding:"12px 6px",WebkitAppearance:"none",boxSizing:"border-box"}}>
              <option value="">Mês</option>
              {MONTHS.slice(1).map((m,i)=><option key={i+1} value={i+1}>{m}</option>)}
            </select>
            <input type="number" inputMode="numeric" value={by}
              onChange={e=>setBy(sanitizeInt(e.target.value))}
              onBlur={e=>setBy(clampInt(e.target.value,1900,new Date().getFullYear()))}
              placeholder="Ano"
              style={{flex:"0 0 28%",minWidth:0,background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:10,
                color:"#0A1F1A",fontSize:14,padding:"12px 8px",boxSizing:"border-box",fontWeight:500,WebkitAppearance:"none",textAlign:"center"}}/>
          </div>
          {sign && (
            <div style={{display:"flex",alignItems:"center",gap:10,background:"#F5F3FF",borderRadius:12,padding:"10px 14px",marginBottom:4}}>
              <span style={{fontSize:20}}>{SIGN_EMOJI[sign]}</span>
              <span style={{fontSize:13,fontWeight:700,color:"#7C3AED"}}>{sign}</span>
            </div>
          )}
        </div>
        <Btn label="Entrar no KomparAI →" onClick={()=>onDone({
          name:name.trim(),
          birthDay:parseInt(bd)||null,
          birthMonth:parseInt(bm)||null,
          birthYear:parseInt(by)||null,
          sign,
        })} disabled={!canGo}/>
        <div style={{textAlign:"center",marginTop:12,fontSize:10,color:"#A7F3D0",fontWeight:700,letterSpacing:2}}>
          365 FAMOSOS · 8 RELIGIÕES · 4 HORÓSCOPOS
        </div>
      </div>
    </div>
  );
}

// ============================================================
// TELA HOME
// ============================================================

function HomeScreen({profile, goCoincidence, goTest, goEspiritualidade}) {
  const [daysBack, setDaysBack] = useState(0);

  const viewDate = new Date(today);
  viewDate.setDate(viewDate.getDate() - daysBack);
  const vDay   = viewDate.getDate();
  const vMonth = viewDate.getMonth() + 1;
  const vYear  = viewDate.getFullYear();
  const vDOW   = viewDate.getDay();
  const vDOY   = Math.floor((viewDate - new Date(viewDate.getFullYear(), 0, 0)) / 86400000);

  const isToday = daysBack === 0;
  const calendarios = getTodosCalendarios(viewDate);

  const famous  = (() => {
    const match = famosos.filter(c => c.day === vDay && c.month === vMonth);
    if (match.length > 0) return match.sort((a,b) => b.popularity - a.popularity)[0];
    return famosos[(vDay * vMonth) % famosos.length];
  })();
  const historia = getHistoriaDoDia(vDay);
  const tradicao = profile?.tradicao || "Universal";
  const mensagemDia = getMensagemDoDia();

  return (
    <div>
      {/* Topo: Logo + Navegação de dias */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16}}>
        <Logo size={22}/>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <button onClick={()=>setDaysBack(d=>Math.min(d+1,10))}
            style={{width:30,height:30,borderRadius:"50%",border:"1.5px solid #E5E7EB",background:"#fff",
              fontSize:14,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#5A6B68"}}>◀</button>
          <div style={{fontSize:12,color:isToday?"#10B981":"#9CA3AF",fontWeight:700,minWidth:60,textAlign:"center"}}>
            {isToday ? "Hoje" : `-${daysBack}d`}
          </div>
          <button onClick={()=>setDaysBack(d=>Math.max(d-1,0))} disabled={isToday}
            style={{width:30,height:30,borderRadius:"50%",border:"1.5px solid #E5E7EB",
              background:isToday?"#F9FAFB":"#fff",fontSize:14,cursor:isToday?"not-allowed":"pointer",
              display:"flex",alignItems:"center",justifyContent:"center",color:isToday?"#D1D5DB":"#5A6B68"}}>▶</button>
        </div>
      </div>

      {!isToday && (
        <div style={{background:"#FFF7ED",borderRadius:12,padding:"10px 14px",marginBottom:12,
          fontSize:12,color:"#92400E",fontWeight:600}}>
          📅 Exibindo: {DAYS_PT[vDOW]}, {vDay} de {MONTHS[vMonth]} de {vYear}
        </div>
      )}

      {/* 1. HOJE NO MUNDO — Todos os calendários visíveis */}
      <div style={{marginBottom:18}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10,position:"relative"}}>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>
            🌍 Hoje no Mundo
          </div>
          <ShareBtn onClick={()=>shareContent("mundo", {
            dataStr: `${vDay} de ${MONTHS[vMonth]} de ${vYear}`,
            calendarios: calendarios,
          }, `🌍 Em que ano estamos ao redor do mundo?\n\n${calendarios.map(c=>`${c.emoji} ${c.nome}: ${c.formatado}`).join("\n")}`)}/>
        </div>
        <Card style={{background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",color:"#fff",marginBottom:0,position:"relative",overflow:"hidden",padding:"14px 16px"}}>
          {calendarios.map((cal, idx) => (
            <div key={cal.nome} style={{
              display:"flex",
              alignItems:"center",
              gap:14,
              padding:"10px 0",
              borderBottom: idx < calendarios.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none"
            }}>
              <div style={{fontSize:28,flexShrink:0,width:36,textAlign:"center"}}>{cal.emoji}</div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:10,color:"#34D399",fontWeight:700,textTransform:"uppercase",letterSpacing:0.8,marginBottom:1}}>
                  {cal.nome}
                </div>
                <div style={{fontSize:14,fontWeight:700,color:"#fff",lineHeight:1.25,wordBreak:"break-word"}}>
                  {cal.formatado}
                </div>
              </div>
            </div>
          ))}
        </Card>
      </div>

      {/* 2. HISTÓRIA DO DIA */}
      <Card style={{position:"relative"}}>
        <ShareBtn onClick={()=>shareContent("historia", {
          texto: historia?.historia || "",
          dataStr: `${vDay} de ${MONTHS[vMonth]}`,
        }, `📜 ${historia?.titulo || "Neste dia na história"} — ${vDay} de ${MONTHS[vMonth]}:\n\n${historia?.historia || ""}`)} style={{background:"rgba(0,0,0,0.05)"}}/>
        <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:8}}>
          {historia?.emoji || "📜"} História do Dia
        </div>
        <div style={{fontSize:16,fontWeight:800,color:"#0A1F1A",marginBottom:6}}>
          {historia?.titulo || ""}
        </div>
        <div style={{fontSize:12,color:"#9CA3AF",marginBottom:12}}>{vDay} de {MONTHS[vMonth]} {historia?.famoso ? `· ${historia.famoso}` : ""}</div>
        <div style={{fontSize:14,color:"#374151",lineHeight:1.7,fontStyle:"italic"}}>
          {historia?.historia || ""}
        </div>
        {historia?.licao && (
          <div style={{fontSize:13,color:"#065F46",lineHeight:1.55,marginTop:12,padding:"10px 14px",background:"#ECFDF5",borderRadius:10,borderLeft:"3px solid #10B981"}}>
            💡 {historia.licao}
          </div>
        )}
      </Card>

      {/* 4. FAMOSO DO DIA */}
      <Card>
        <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>
          ⭐ Famoso do Dia
        </div>
        <div style={{display:"flex",gap:14,alignItems:"flex-start"}}>
          <div style={{fontSize:36,flexShrink:0}}>{famous.emoji}</div>
          <div style={{flex:1}}>
            <div style={{fontSize:17,fontWeight:800,color:"#0A1F1A",lineHeight:1.2}}>{famous.name}</div>
            <div style={{fontSize:11,color:"#9CA3AF",marginTop:3}}>
              {famous.day} de {MONTHS[famous.month]} · {famous.category} · {famous.country}
            </div>
            {famous.quote && (
              <div style={{fontSize:13,color:"#374151",lineHeight:1.6,fontStyle:"italic",marginTop:10,borderLeft:"3px solid #10B981",paddingLeft:12}}>
                "{famous.quote}"
              </div>
            )}
            {famous.fact && (
              <div style={{fontSize:12,color:"#5A6B68",marginTop:8,lineHeight:1.6}}>{famous.fact}</div>
            )}
          </div>
        </div>
      </Card>

      {/* 5. MENSAGEM DO DIA */}
      <Card style={{background:"linear-gradient(135deg,#10B98112,#10B98106)",border:"1px solid #10B98130"}}>
        <div style={{fontSize:11,color:"#10B981",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>
          💬 Mensagem do Dia
        </div>
        <div style={{fontSize:15,color:"#0A1F1A",lineHeight:1.7,fontWeight:500,fontStyle:"italic"}}>
          "{mensagemDia}"
        </div>
      </Card>
    </div>
  );
}

// ============================================================
function CoincidenceTest({profile, onSaveToProfile, onBack, goPerfil, goTest}) {
  const [step,setStep] = useState("input");
  const [height,setHeight] = useState(profile?.height||"");
  const [weight,setWeight] = useState(profile?.weight||"");
  const [gender,setGender] = useState(profile?.gender||"");
  const [results,setResults] = useState([]);
  const [showAll,setShowAll] = useState(false);
  const [saved,setSaved] = useState(false);

  // Se goPerfil existe, estamos na aba principal "KomparAI" — não mostrar botão Voltar
  const isMainTab = !!goPerfil;

  const run = () => {
    const user = { birthDay:profile?.birthDay, birthMonth:profile?.birthMonth, birthYear:profile?.birthYear,
      height:parseInt(height)||null, weight:parseInt(weight)||null, gender, temperamento:profile?.temperamento };
    setResults(findMatches(user));
    setShowAll(false);
    setStep("result");
  };

  const reset = () => { setStep("input"); setResults([]); setSaved(false); };

  if (step==="input") return (
    <div>
      {!isMainTab && <button onClick={onBack} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:16,fontFamily:"inherit"}}>← Voltar</button>}

      {/* HEADER COM MEU PERFIL EM DESTAQUE */}
      <div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",marginBottom:4}}>🪞 KomparAI</div>
      <div style={{fontSize:12,color:"#9CA3AF",marginBottom:14}}>Descubra o que você tem em comum com 365 famosos</div>

      {/* Card MEU PERFIL — destacado COM SELO DE PROGRESSO */}
      {isMainTab && (() => {
        // Calcula progresso do perfil: 7 campos possíveis
        const camposPerfil = [
          !!profile?.name,
          !!profile?.birthDay,
          !!profile?.birthYear,
          !!profile?.gender,
          !!profile?.height,
          !!profile?.tradicao,
          !!profile?.temperamento,
        ];
        const preenchidos = camposPerfil.filter(Boolean).length;
        const totalCampos = camposPerfil.length;
        const pctCompleto = Math.round((preenchidos / totalCampos) * 100);

        return (
          <div onClick={goPerfil} style={{cursor:"pointer",background:"linear-gradient(135deg,#10B981,#059669)",borderRadius:18,padding:"16px",marginBottom:16,boxShadow:"0 4px 14px rgba(16,185,129,0.25)",position:"relative",overflow:"hidden"}}>
            {/* Decoração de fundo */}
            <div style={{position:"absolute",top:-30,right:-30,width:120,height:120,borderRadius:"50%",background:"#34D39920",filter:"blur(20px)"}}/>

            <div style={{display:"flex",alignItems:"center",gap:14,position:"relative",zIndex:2}}>
              <div style={{width:56,height:56,borderRadius:"50%",background:"#ffffff25",display:"flex",alignItems:"center",justifyContent:"center",fontSize:30,fontWeight:800,color:"#fff",flexShrink:0,border:"2px solid #ffffff40"}}>
                {profile?.name ? profile.name.trim().charAt(0).toUpperCase() : "👤"}
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:10,color:"#D1FAE5",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:2}}>
                  {profile?.name ? "Meu Perfil" : "Crie seu Perfil"}
                </div>
                <div style={{fontSize:17,fontWeight:800,color:"#fff",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                  {profile?.name || "Toque aqui para começar"}
                </div>
                {profile?.birthDay && (
                  <div style={{fontSize:11,color:"#D1FAE5",marginTop:3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>
                    📅 {profile.birthDay}/{profile.birthMonth}{profile.birthYear?`/${profile.birthYear}`:""}{profile.sign?` · ${SIGN_EMOJI[profile.sign]} ${profile.sign}`:""}
                  </div>
                )}
              </div>
              <div style={{background:"#ffffff25",borderRadius:20,padding:"6px 10px",fontSize:11,fontWeight:700,color:"#fff",flexShrink:0}}>
                ✏️ Editar
              </div>
            </div>

            {/* SELO DE PROGRESSO */}
            <div style={{marginTop:14,position:"relative",zIndex:2}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                <span style={{fontSize:10,color:"#D1FAE5",fontWeight:700,textTransform:"uppercase",letterSpacing:0.8}}>
                  {pctCompleto === 100 ? "✨ Perfil Completo!" : `Perfil ${pctCompleto}% completo`}
                </span>
                <span style={{fontSize:10,color:"#fff",fontWeight:700}}>{preenchidos}/{totalCampos}</span>
              </div>
              {/* Barra de progresso */}
              <div style={{width:"100%",height:6,background:"#ffffff25",borderRadius:3,overflow:"hidden"}}>
                <div style={{width:`${pctCompleto}%`,height:"100%",background:"#fff",borderRadius:3,transition:"width .4s",boxShadow:"0 0 8px rgba(255,255,255,0.6)"}}/>
              </div>
              {pctCompleto < 100 && (
                <div style={{fontSize:10,color:"#D1FAE5",marginTop:6,fontStyle:"italic"}}>
                  💡 Quanto mais completo, mais precisas as coincidências
                </div>
              )}
            </div>
          </div>
        );
      })()}
      {profile?.birthDay && !isMainTab && (
        <div style={{background:"#F0FDF4",border:"1px solid #BBF7D0",borderRadius:14,padding:"12px 14px",marginBottom:16}}>
          <div style={{fontSize:11,color:"#059669",fontWeight:700,textTransform:"uppercase",marginBottom:6}}>✅ Do seu perfil</div>
          <div style={{fontSize:13,color:"#0A1F1A",fontWeight:600}}>
            📅 {profile.birthDay} de {MONTHS[profile.birthMonth]}{profile.birthYear?` de ${profile.birthYear}`:""}
            {profile.sign?`  ${SIGN_EMOJI[profile.sign]} ${profile.sign}`:""}
          </div>
        </div>
      )}
      <Label>Seu gênero</Label>
      <div style={{display:"flex",gap:10,marginBottom:16}}>
        {[{v:"M",l:"👨 Homem"},{v:"F",l:"👩 Mulher"},{v:"X",l:"🌈 Outro"}].map(o=>(
          <button key={o.v} onClick={()=>setGender(o.v)} style={{
            flex:1,padding:"13px 8px",borderRadius:12,border:`1.5px solid ${gender===o.v?"#10B981":"#E5E7EB"}`,
            background:gender===o.v?"#10B981":"#fff",color:gender===o.v?"#fff":"#0A1F1A",
            fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>{o.l}</button>
        ))}
      </div>
      <Label>Sua altura</Label>
      <div style={{position:"relative",marginBottom:14}}>
        <input type="number" inputMode="numeric" value={height}
          onChange={e=>setHeight(sanitizeInt(e.target.value))}
          onBlur={e=>setHeight(clampInt(e.target.value,50,250))}
          placeholder="Ex: 175"
          style={{width:"100%",background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:12,
            color:"#0A1F1A",fontSize:15,padding:"13px 44px 13px 15px",boxSizing:"border-box",fontWeight:500}}/>
        <span style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",color:"#9CA3AF",fontSize:13,fontWeight:600}}>cm</span>
      </div>
      <Label>Seu peso <span style={{fontSize:10,color:"#9CA3AF",fontWeight:500}}>(privado · só usado na comparação)</span></Label>
      <div style={{position:"relative",marginBottom:20}}>
        <input type="number" inputMode="numeric" value={weight}
          onChange={e=>setWeight(sanitizeInt(e.target.value))}
          onBlur={e=>setWeight(clampInt(e.target.value,20,300))}
          placeholder="Ex: 70"
          style={{width:"100%",background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:12,
            color:"#0A1F1A",fontSize:15,padding:"13px 44px 13px 15px",boxSizing:"border-box",fontWeight:500}}/>
        <span style={{position:"absolute",right:14,top:"50%",transform:"translateY(-50%)",color:"#9CA3AF",fontSize:13,fontWeight:600}}>kg</span>
      </div>
      <Btn label="🔍 Buscar coincidências" onClick={run} disabled={!profile?.birthDay && !height && !weight}/>
    </div>
  );

  const total = results.length;
  // 🎮 Mostra apenas desbloqueados + 3 "teaser" bloqueados
  // (showAll só vale após desbloquear todos os 55)
  const TEASER_BLOQUEADOS = 3;

  // ============================================================
  // 🏆 LÓGICA DE RARIDADE
  // ============================================================
  const calcRaridade = (totalCoincidencias) => {
    if (totalCoincidencias === 0) return null;
    if (totalCoincidencias >= 200) return { selo: "✨ TOP 1%", desc: "Conexão Extraordinária", cor: "#FCD34D" };
    if (totalCoincidencias >= 100) return { selo: "🌟 TOP 5%", desc: "Perfil de Alta Conexão", cor: "#10B981" };
    if (totalCoincidencias >= 50)  return { selo: "🔥 TOP 20%", desc: "Boa Conexão Cósmica", cor: "#34D399" };
    if (totalCoincidencias <= 5 && totalCoincidencias > 0) return { selo: "💎 PERFIL RARO", desc: "Você é Único no Mundo", cor: "#A78BFA" };
    return null;
  };
  const raridade = calcRaridade(total);

  // ============================================================
  // 💫 MANIFESTO PERSONALIZADO
  // ============================================================
  const gerarManifesto = () => {
    if (!results.length) return null;
    const top1 = results[0];
    const top2 = results[1];
    const top3 = results[2];
    if (!top1) return null;

    // Pegar conceitos únicos dos top 3
    const conceitos = [];
    [top1, top2, top3].forEach((r, idx) => {
      if (!r) return;
      const principal = r.hits[0]?.text || "";
      // Extrair o "o quê" (ex: "Mesmo signo", "Mesma altura")
      let conceito = "";
      if (principal.includes("signo")) conceito = "o céu";
      else if (principal.includes("altura")) conceito = "a altura";
      else if (principal.includes("peso")) conceito = "a estrutura";
      else if (principal.includes("aniversário") || principal.includes("data") || principal.includes("nasceu")) conceito = "a data exata";
      else if (principal.includes("mês")) conceito = "o mês";
      else if (principal.includes("ano")) conceito = "a geração";
      else if (principal.includes("temperamento")) conceito = "a essência";
      else if (principal.includes("gênero")) conceito = "o caminho";
      else conceito = "algo profundo";
      conceitos.push({ conceito, nome: r.cel.name });
    });

    // Montar frase
    if (conceitos.length >= 3) {
      return `Você compartilha ${conceitos[0].conceito} de ${conceitos[0].nome}, ${conceitos[1].conceito} de ${conceitos[1].nome} e ${conceitos[2].conceito} de ${conceitos[2].nome}. Você nasceu para criar algo único.`;
    } else if (conceitos.length === 2) {
      return `Você compartilha ${conceitos[0].conceito} de ${conceitos[0].nome} e ${conceitos[1].conceito} de ${conceitos[1].nome}. Você não nasceu por acaso.`;
    } else if (conceitos.length === 1) {
      return `Você compartilha ${conceitos[0].conceito} de ${conceitos[0].nome}. Existe um motivo pra isso.`;
    }
    return null;
  };
  const manifesto = gerarManifesto();
  const famosoTop = results[0]; // O #1 da lista

  // ============================================================
  // 🎮 SISTEMA DE GAMIFICAÇÃO / DESBLOQUEIO
  // ============================================================
  // Cada teste feito desbloqueia +10 famosos
  // Top 5 sempre visível, resto bloqueado até fazer testes
  const TESTES_DESBLOQUEIO = [
    { key: "temperamento", nome: "Temperamento",      emoji: "🧬", cor: "#10B981" },
    { key: "amor",         nome: "Linguagens do Amor", emoji: "💘", cor: "#EC4899" },
    { key: "personalidade",nome: "Introvertido ou Extrovertido", emoji: "🧩", cor: "#6366F1" },
    { key: "profissional", nome: "Perfil Profissional", emoji: "💼", cor: "#10B981" },
    { key: "politico",     nome: "Espectro Político",  emoji: "🗳️", cor: "#3B82F6" },
  ];
  const TOP_INICIAL = 5;
  const POR_TESTE = 10;
  const testesFeitos = TESTES_DESBLOQUEIO.filter(t => !!profile?.[t.key]);
  const testesFaltam = TESTES_DESBLOQUEIO.filter(t => !profile?.[t.key]);
  const limiteDesbloqueado = TOP_INICIAL + (testesFeitos.length * POR_TESTE);
  const maxDesbloqueavel = TOP_INICIAL + (TESTES_DESBLOQUEIO.length * POR_TESTE); // 55
  // Próximo teste a sugerir (primeiro que falta)
  const proximoTeste = testesFaltam[0] || null;

  // 🎮 Quantidade visível na tela:
  // - Cards desbloqueados (limiteDesbloqueado)
  // - + 3 cards bloqueados como teaser (se houver próximo teste)
  // - Se já desbloqueou tudo e showAll, mostra todos
  const cortePadrao = limiteDesbloqueado + (proximoTeste ? TEASER_BLOQUEADOS : 0);
  const visible = showAll ? results : results.slice(0, Math.min(cortePadrao, total));

  return (
    <div>
      <button onClick={reset} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Nova busca</button>
      <div style={{background:"linear-gradient(160deg,#10B981,#047857)",borderRadius:24,padding:"24px 20px",marginBottom:14,position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-40,right:-40,width:140,height:140,borderRadius:"50%",background:"#34D39928",filter:"blur(30px)"}}/>
        <div style={{position:"relative",zIndex:2}}>
          <div style={{fontSize:11,color:"#A7F3D0",fontWeight:700,letterSpacing:2.5,textTransform:"uppercase",marginBottom:8}}>
            {profile?.name?`${profile.name}, encontrei`:"Encontrei"}
          </div>
          <div style={{display:"flex",alignItems:"baseline",gap:10}}>
            <div style={{fontSize:64,fontWeight:900,color:"#fff",lineHeight:1,letterSpacing:-4}}>{total}</div>
            <div style={{fontSize:16,color:"#D1FAE5",fontWeight:700}}>
              {total===0?"coincidências":total===1?"coincidência!":"coincidências!"}
            </div>
          </div>
          <button onClick={()=>{
            // Top 3 famosos com mais coincidências
            const top3 = results.slice(0,3).map(r => ({
              name: r.cel.name,
              emoji: r.cel.emoji,
              category: r.cel.category,
              born: r.cel.born,
              matches: r.hits.length,
            }));
            // Tags únicas extraídas dos hits (ex: "Mesmo signo", "Mesma altura")
            const tagSet = new Set();
            results.slice(0,10).forEach(r => r.hits.forEach(h => {
              // Extrai conceito principal antes de "—" se houver
              const concept = h.text.split("—")[0].trim().replace(/!$/,"");
              if (concept.length < 30) tagSet.add(concept);
            }));
            const tags = [...tagSet].slice(0,6);

            // Mensagem rica para WhatsApp
            const topText = top3.map(c => `${c.emoji} ${c.name} — ${c.matches} em comum`).join("\n");
            const message = `🪞 Eu${profile?.name?`, ${profile.name},`:""} tenho ${total} coincidências com famosos!\n\n⭐ Top 3:\n${topText}\n\nDescobre as suas: komparai.com`;

            shareContent("coincidencias", {
              nome: profile?.name || "",
              total: total,
              top: top3,
              tags: tags,
            }, message);
          }}
            style={{marginTop:12,background:"#ffffff20",border:"none",color:"#fff",fontSize:13,padding:"6px 14px",borderRadius:12,cursor:"pointer",fontFamily:"inherit",fontWeight:700}}>
            ↗ Compartilhar resultado
          </button>

          {/* 🎮 BARRA DE PROGRESSO DE DESBLOQUEIO */}
          {total > TOP_INICIAL && (
            <div style={{marginTop:14,paddingTop:14,borderTop:"1px solid rgba(255,255,255,0.18)"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6}}>
                <span style={{fontSize:10,color:"#A7F3D0",fontWeight:700,letterSpacing:1,textTransform:"uppercase"}}>
                  🎮 Famosos desbloqueados
                </span>
                <span style={{fontSize:11,color:"#fff",fontWeight:800}}>
                  {Math.min(limiteDesbloqueado, total)}/{Math.min(maxDesbloqueavel, total)}
                </span>
              </div>
              <div style={{width:"100%",height:7,background:"rgba(255,255,255,0.18)",borderRadius:4,overflow:"hidden"}}>
                <div style={{
                  width:`${Math.min(100, (Math.min(limiteDesbloqueado, total) / Math.min(maxDesbloqueavel, total)) * 100)}%`,
                  height:"100%",
                  background:"#fff",
                  borderRadius:4,
                  transition:"width .5s",
                  boxShadow:"0 0 8px rgba(255,255,255,0.6)"
                }}/>
              </div>
              {proximoTeste && (
                <div style={{fontSize:10,color:"#D1FAE5",marginTop:6,fontStyle:"italic"}}>
                  💡 Faça o teste de {proximoTeste.nome} pra liberar +{POR_TESTE} famosos
                </div>
              )}
              {!proximoTeste && limiteDesbloqueado >= total && (
                <div style={{fontSize:10,color:"#FCD34D",marginTop:6,fontWeight:700}}>
                  ✨ Você desbloqueou todas as suas coincidências!
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 🏆 SELO DE RARIDADE                                            */}
      {/* ============================================================ */}
      {raridade && (
        <div style={{
          background:`linear-gradient(135deg, ${raridade.cor}22, ${raridade.cor}08)`,
          border:`1.5px solid ${raridade.cor}66`,
          borderRadius:18,
          padding:"14px 16px",
          marginBottom:14,
          textAlign:"center",
          position:"relative",
          overflow:"hidden"
        }}>
          <div style={{position:"absolute",top:-10,right:-10,fontSize:60,opacity:0.08,pointerEvents:"none"}}>
            {raridade.selo.split(" ")[0]}
          </div>
          <div style={{fontSize:13,fontWeight:900,color:raridade.cor,letterSpacing:2,marginBottom:4}}>
            {raridade.selo}
          </div>
          <div style={{fontSize:14,fontWeight:700,color:"#0A1F1A"}}>
            {raridade.desc}
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 🎴 CARD PREMIUM DO FAMOSO TOP                                 */}
      {/* ============================================================ */}
      {famosoTop && total > 0 && (
        <div style={{
          background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",
          borderRadius:22,
          padding:"20px 18px",
          marginBottom:14,
          position:"relative",
          overflow:"hidden",
          boxShadow:"0 4px 20px rgba(16,185,129,0.15)"
        }}>
          {/* Glow decorativo */}
          <div style={{position:"absolute",top:-30,right:-30,width:160,height:160,borderRadius:"50%",background:"#10B98130",filter:"blur(35px)"}}/>

          <div style={{position:"relative",zIndex:2}}>
            <div style={{fontSize:10,color:"#10B981",fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:6}}>
              🏆 Sua maior coincidência
            </div>

            <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:14}}>
              <div style={{
                width:64,height:64,borderRadius:"50%",
                background:"linear-gradient(135deg,#10B981,#047857)",
                display:"flex",alignItems:"center",justifyContent:"center",
                fontSize:36,boxShadow:"0 4px 12px rgba(16,185,129,0.4)",
                border:"2px solid #34D399",
                flexShrink:0
              }}>
                {famosoTop.cel.emoji}
              </div>
              <div style={{flex:1,minWidth:0}}>
                <div style={{fontSize:22,fontWeight:900,color:"#fff",lineHeight:1.1,marginBottom:3}}>
                  {famosoTop.cel.name}
                </div>
                <div style={{fontSize:12,color:"#6EE7B7",fontWeight:600}}>
                  {famosoTop.cel.category} · {famosoTop.cel.born}
                </div>
                <div style={{fontSize:11,color:"#A7F3D0",marginTop:3}}>
                  {famosoTop.hits.length} {famosoTop.hits.length===1?"ponto":"pontos"} em comum com você
                </div>
              </div>
            </div>

            {/* Lista resumida dos pontos em comum (top 3 hits) */}
            <div style={{background:"#ffffff10",borderRadius:14,padding:"10px 12px"}}>
              {famosoTop.hits.slice(0,3).map((h,k)=>(
                <div key={k} style={{display:"flex",gap:8,alignItems:"flex-start",marginBottom:k<famosoTop.hits.slice(0,3).length-1?7:0}}>
                  <span style={{fontSize:14,flexShrink:0}}>{h.icon}</span>
                  <span style={{fontSize:12,color:"#D1FAE5",lineHeight:1.45,fontWeight:500}}>{h.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ============================================================ */}
      {/* 💫 MANIFESTO PERSONALIZADO                                    */}
      {/* ============================================================ */}
      {manifesto && (
        <div style={{
          background:"linear-gradient(135deg,#FCD34D08,#10B98108)",
          border:"1px dashed #10B98155",
          borderRadius:18,
          padding:"16px 18px",
          marginBottom:14,
          position:"relative"
        }}>
          <div style={{fontSize:10,color:"#10B981",fontWeight:800,letterSpacing:2,textTransform:"uppercase",marginBottom:8,textAlign:"center"}}>
            ✨ Seu Manifesto Cósmico
          </div>
          <div style={{
            fontSize:14,
            color:"#0A1F1A",
            lineHeight:1.65,
            fontStyle:"italic",
            fontWeight:500,
            textAlign:"center"
          }}>
            "{manifesto}"
          </div>
        </div>
      )}

      {!saved && (height||weight||gender) && (
        <div style={{background:"#FFF7ED",border:"1px solid #FED7AA",borderRadius:16,padding:"14px 16px",marginBottom:14}}>
          <div style={{fontSize:13,fontWeight:700,color:"#C2410C",marginBottom:6}}>💾 Salvar no perfil?</div>
          <div style={{fontSize:12,color:"#92400E",lineHeight:1.5,marginBottom:10}}>
            Deixa tudo mais personalizado — coincidências futuras e mentores.
          </div>
          <Btn label="Salvar no meu perfil" onClick={()=>{
            onSaveToProfile({height:parseInt(height)||null,weight:parseInt(weight)||null,gender});
            setSaved(true);
          }} small/>
        </div>
      )}
      {visible.map((r,i)=>{
        // 🎮 Posição na lista (índice 0 = top 1)
        const posicao = i + 1;
        const bloqueado = posicao > limiteDesbloqueado;

        return (
          <div key={i} style={{position:"relative"}}>
            <Card style={{
              borderLeft:"4px solid #10B981",
              filter: bloqueado ? "blur(7px)" : "none",
              pointerEvents: bloqueado ? "none" : "auto",
              userSelect: bloqueado ? "none" : "auto",
              opacity: bloqueado ? 0.55 : 1,
              transition: "filter .3s, opacity .3s"
            }}>
              <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
                <div style={{width:44,height:44,borderRadius:"50%",background:"#10B98118",
                  display:"flex",alignItems:"center",justifyContent:"center",fontSize:22}}>{r.cel.emoji}</div>
                <div style={{flex:1,minWidth:0}}>
                  <div style={{fontSize:15,fontWeight:800,color:"#0A1F1A"}}>{r.cel.name}</div>
                  <div style={{fontSize:11,color:"#9CA3AF"}}>{r.cel.category} · {r.cel.born}</div>
                </div>
                <div style={{textAlign:"right"}}>
                  <div style={{fontSize:13,color:"#10B981",fontWeight:800}}>{r.hits.length}</div>
                  <div style={{fontSize:10,color:"#9CA3AF"}}>em comum</div>
                </div>
              </div>
              {r.hits.map((h,j)=>(
                <div key={j} style={{display:"flex",gap:10,background:"#F9FAFB",borderRadius:10,padding:"8px 12px",marginBottom:6}}>
                  <span style={{fontSize:15}}>{h.icon}</span>
                  <span style={{fontSize:13,color:"#374151",fontWeight:500}}>{h.text}</span>
                </div>
              ))}
            </Card>

            {/* 🔒 Overlay de cadeado para cards bloqueados */}
            {bloqueado && (
              <div style={{
                position:"absolute",
                top:0, left:0, right:0, bottom:0,
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                pointerEvents:"none"
              }}>
                <div style={{
                  background:"rgba(10,31,26,0.85)",
                  borderRadius:"50%",
                  width:54, height:54,
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                  fontSize:24,
                  boxShadow:"0 4px 16px rgba(0,0,0,0.3)",
                  border:"2px solid #34D399"
                }}>
                  🔒
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* 🎯 CTA: PRÓXIMO TESTE PARA DESBLOQUEAR MAIS */}
      {proximoTeste && total > limiteDesbloqueado && (
        <div style={{
          background:`linear-gradient(135deg, ${proximoTeste.cor}, ${proximoTeste.cor}cc)`,
          borderRadius:20,
          padding:"18px 20px",
          marginTop:8,
          marginBottom:14,
          position:"relative",
          overflow:"hidden",
          boxShadow:"0 4px 16px rgba(0,0,0,0.12)"
        }}>
          <div style={{position:"absolute",top:-20,right:-20,fontSize:80,opacity:0.12,pointerEvents:"none"}}>
            {proximoTeste.emoji}
          </div>
          <div style={{position:"relative",zIndex:2,textAlign:"center"}}>
            <div style={{fontSize:11,color:"#ffffff",opacity:0.85,fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",marginBottom:6}}>
              🔓 Desbloqueie +{POR_TESTE} famosos
            </div>
            <div style={{fontSize:20,fontWeight:900,color:"#fff",marginBottom:4,lineHeight:1.2}}>
              {proximoTeste.emoji} Teste de {proximoTeste.nome}
            </div>
            <div style={{fontSize:12,color:"#ffffff",opacity:0.85,marginBottom:12}}>
              Você fez {testesFeitos.length} de {TESTES_DESBLOQUEIO.length} testes · Faltam {testesFaltam.length}
            </div>
            <button onClick={()=>{ if (goTest) goTest(proximoTeste.key); else onBack(); }} style={{
              background:"#fff",
              color:proximoTeste.cor,
              border:"none",
              padding:"10px 22px",
              borderRadius:24,
              fontSize:13,
              fontWeight:800,
              cursor:"pointer",
              fontFamily:"inherit",
              boxShadow:"0 2px 8px rgba(0,0,0,0.15)"
            }}>
              Fazer teste agora →
            </button>
          </div>
        </div>
      )}
      {!showAll && !proximoTeste && total > visible.length && (
        <button onClick={()=>setShowAll(true)} style={{width:"100%",padding:13,background:"transparent",
          border:"1.5px solid #10B981",borderRadius:14,color:"#10B981",fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
          👁️ Ver todas as {total} coincidências
        </button>
      )}
    </div>
  );
}

// ============================================================
// TELA ASTRAL (antes Horóscopo) — 5 sistemas + Numerologia do dia
// ============================================================
function AstralScreen({profile, goHumor}) {
  const [sistema,setSistema] = useState("ocidental");
  const sign = profile?.sign;
  const animal = profile?.birthYear ? getAnimalChines(profile.birthYear) : null;
  const rashi = sign ? getRashi(sign) : null;
  const hebDate = getHebrewDate(today);

  const SISTEMAS = [
    {id:"ocidental",l:"Ocidental",emoji:"♈"},
    {id:"grego",l:"Grego",emoji:"🏛️"},
    {id:"chines",l:"Chinês",emoji:"🐉"},
    {id:"vedico",l:"Védico",emoji:"🕉️"},
    {id:"judaico",l:"Judaico",emoji:"✡️"},
  ];

  const numInfo = profile?.birthDay ? getNumerologia(profile.birthDay, profile.birthMonth, profile.birthYear) : null;

  return (
    <div>
      <div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",marginBottom:4}}>✨ Astral</div>
      <div style={{fontSize:12,color:"#9CA3AF",marginBottom:14}}>{DAYS_PT[DOW]}, {DAY} de {MONTHS[MONTH]}</div>

      {/* Humor Matinal — atalho */}
      {goHumor && (
        <Card onClick={goHumor} style={{cursor:"pointer",background:"linear-gradient(135deg,#3B82F615,#3B82F605)",border:"1px solid #3B82F630",marginBottom:14}}>
          <div style={{display:"flex",gap:14,alignItems:"center"}}>
            <div style={{width:52,height:52,borderRadius:16,background:"#3B82F620",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>🌅</div>
            <div style={{flex:1}}>
              <div style={{fontSize:16,fontWeight:800,color:"#0A1F1A"}}>Humor Matinal</div>
              <div style={{fontSize:12,color:"#6B7280",marginTop:3}}>Como você está hoje?</div>
            </div>
            <span style={{fontSize:18,color:"#3B82F6",opacity:.6}}>→</span>
          </div>
        </Card>
      )}

      {/* Numerologia do Caminho de Vida — NOVO */}
      {numInfo && (
        <Card style={{background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",marginBottom:14,position:"relative",overflow:"hidden"}}>
          <ShareBtn onClick={()=>shareContent("numerologia", {
            nome: profile?.name || "",
            numero: String(numInfo.numero),
            arquetipo: numInfo.nome,
            essencia: numInfo.essencia,
          }, `🔢 Minha numerologia:\n\nNúmero ${numInfo.numero} — ${numInfo.nome}\n${numInfo.arquetipo}\n\n"${numInfo.essencia}"`)} style={{background:"rgba(255,255,255,0.95)"}}/>
          <div style={{position:"absolute",top:-20,right:-20,fontSize:100,opacity:.05}}>{numInfo.numero}</div>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10,position:"relative"}}>
            <div style={{width:52,height:52,borderRadius:"50%",background:"#10B98130",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>{numInfo.emoji}</div>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:2}}>
                <div style={{fontSize:10,color:"#34D399",fontWeight:700,textTransform:"uppercase",letterSpacing:1.5}}>🔢 Numerologia</div>
                <span style={{fontSize:9,background:"#10B981",color:"#fff",padding:"2px 7px",borderRadius:20,fontWeight:700}}>NOVO</span>
              </div>
              <div style={{fontSize:18,fontWeight:900,color:"#fff"}}>Número {numInfo.numero} — {numInfo.nome}</div>
              <div style={{fontSize:11,color:"#6EE7B7"}}>{numInfo.arquetipo}</div>
            </div>
          </div>
          <div style={{fontSize:13,color:"#D1FAE5",lineHeight:1.6,marginBottom:10,fontStyle:"italic",borderLeft:"3px solid #10B981",paddingLeft:12}}>
            "{numInfo.essencia}"
          </div>
          <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:10}}>
            {numInfo.fortes.slice(0,3).map((f,i)=>(
              <span key={i} style={{fontSize:10,background:"#10B98120",color:"#34D399",padding:"3px 9px",borderRadius:20,fontWeight:600}}>✅ {f}</span>
            ))}
          </div>
          <div style={{fontSize:12,color:"#A7F3D0",fontStyle:"italic",borderLeft:"2px solid #34D399",paddingLeft:10}}>"{numInfo.afirmacao}"</div>
        </Card>
      )}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:18}}>
        {SISTEMAS.map(s=>(
          <button key={s.id} onClick={()=>setSistema(s.id)} style={{
            padding:"12px 10px",borderRadius:14,
            border:`1.5px solid ${sistema===s.id?"#7C3AED":"#E5E7EB"}`,
            background:sistema===s.id?"#7C3AED":"#fff",
            color:sistema===s.id?"#fff":"#5A6B68",
            fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit",
            display:"flex",alignItems:"center",justifyContent:"center",gap:6}}>
            <span>{s.emoji}</span><span>{s.l}</span>
          </button>
        ))}
      </div>

      {sistema==="ocidental" && sign && (
        <Card style={{background:"linear-gradient(135deg,#7C3AED18,#7C3AED06)",border:"1px solid #7C3AED30",position:"relative"}}>
          <ShareBtn onClick={()=>shareContent("horoscopo", {
            nome: profile?.name || "",
            signo: sign, emoji: SIGN_EMOJI[sign],
            sistema: "Astrologia Ocidental",
            mensagem: "Sua energia astral está em harmonia com os movimentos celestes de hoje. Confie na sua intuição.",
          }, `♈ Meu signo é ${sign}\n\nSua energia astral está em harmonia com os movimentos celestes de hoje.`)}/>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
            <span style={{fontSize:38}}>{SIGN_EMOJI[sign]}</span>
            <div>
              <div style={{fontSize:11,color:"#7C3AED",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>Signo Ocidental</div>
              <div style={{fontSize:22,fontWeight:900,color:"#0A1F1A"}}>{sign}</div>
            </div>
          </div>
          <div style={{fontSize:14,color:"#374151",lineHeight:1.7}}>
            Sua energia astral está em harmonia com os movimentos celestes de hoje. Confie na sua intuição.
          </div>
        </Card>
      )}

      {sistema==="grego" && sign && HOROSCOPO_GREGO[sign] && (
        <Card style={{position:"relative"}}>
          <ShareBtn onClick={()=>shareContent("horoscopo", {
            nome: profile?.name || "",
            signo: sign, emoji: SIGN_EMOJI[sign],
            sistema: "Zodíaco Helênico",
            mensagem: getFraseGrega(sign, DOY),
          }, `🏛️ Meu signo helênico é ${sign}\n\n"${getFraseGrega(sign, DOY)}"`)}/>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
            <span style={{fontSize:38}}>{SIGN_EMOJI[sign]}</span>
            <div>
              <div style={{fontSize:11,color:"#92400E",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>Zodíaco Helênico</div>
              <div style={{fontSize:20,fontWeight:900,color:"#0A1F1A"}}>{sign}</div>
              <div style={{fontSize:12,color:"#5A6B68"}}>Regente: {HOROSCOPO_GREGO[sign].regente}</div>
            </div>
          </div>
          <div style={{background:"#FFF7ED",borderRadius:12,padding:"12px 14px",marginBottom:12}}>
            <div style={{fontSize:11,color:"#C2410C",fontWeight:700,marginBottom:4}}>🏛️ MITO</div>
            <div style={{fontSize:13,color:"#92400E",lineHeight:1.5}}>{HOROSCOPO_GREGO[sign].mito}</div>
          </div>
          <div style={{fontSize:13,color:"#374151",lineHeight:1.6,marginBottom:8}}><strong>Poder:</strong> {HOROSCOPO_GREGO[sign].poder}</div>
          <div style={{fontSize:13,color:"#374151",lineHeight:1.6,marginBottom:8}}><strong>Desafio:</strong> {HOROSCOPO_GREGO[sign].desafio}</div>
          <div style={{display:"flex",gap:8,marginTop:10,flexWrap:"wrap"}}>
            <span style={{fontSize:11,background:"#F3F4F6",borderRadius:10,padding:"4px 10px"}}>💎 {HOROSCOPO_GREGO[sign].pedra}</span>
            <span style={{fontSize:11,background:"#F3F4F6",borderRadius:10,padding:"4px 10px"}}>🔢 {HOROSCOPO_GREGO[sign].numero}</span>
            <span style={{fontSize:11,background:"#F3F4F6",borderRadius:10,padding:"4px 10px"}}>🎨 {HOROSCOPO_GREGO[sign].cor}</span>
          </div>
          <div style={{marginTop:12,padding:"10px 12px",background:"#F0FDF4",borderRadius:10,borderLeft:"3px solid #10B981"}}>
            <div style={{fontSize:13,color:"#065F46",fontStyle:"italic",lineHeight:1.5}}>"{getFraseGrega(sign, DOY)}"</div>
          </div>
        </Card>
      )}

      {sistema==="chines" && animal && ANIMAIS_CHINESES[animal] && (
        <Card style={{background:"linear-gradient(135deg,#DC262618,#DC262606)",border:"1px solid #DC262630",position:"relative"}}>
          <ShareBtn onClick={()=>shareContent("horoscopo", {
            nome: profile?.name || "",
            signo: ANIMAIS_CHINESES[animal].animal,
            emoji: ANIMAIS_CHINESES[animal].emoji,
            sistema: "Horóscopo Chinês",
            mensagem: getFraseChinesa(animal, DOY),
          }, `🐉 Meu signo chinês é ${ANIMAIS_CHINESES[animal].animal}\n\n"${getFraseChinesa(animal, DOY)}"`)}/>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
            <span style={{fontSize:44}}>{ANIMAIS_CHINESES[animal].emoji}</span>
            <div>
              <div style={{fontSize:11,color:"#DC2626",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>Horóscopo Chinês</div>
              <div style={{fontSize:22,fontWeight:900,color:"#0A1F1A"}}>{ANIMAIS_CHINESES[animal].animal}</div>
              <div style={{fontSize:12,color:"#5A6B68"}}>Elemento: {ANIMAIS_CHINESES[animal].elemento}</div>
            </div>
          </div>
          <div style={{fontSize:14,color:"#374151",lineHeight:1.6,marginBottom:10}}>{ANIMAIS_CHINESES[animal].traços}</div>
          <div style={{fontSize:13,color:"#374151",marginBottom:6}}><strong>✨ Poder:</strong> {ANIMAIS_CHINESES[animal].poder}</div>
          <div style={{fontSize:13,color:"#374151",marginBottom:6}}><strong>💞 Compatível:</strong> {ANIMAIS_CHINESES[animal].compatibilidade.join(", ")}</div>
          <div style={{marginTop:12,padding:"10px 12px",background:"#FEF2F2",borderRadius:10,borderLeft:"3px solid #DC2626"}}>
            <div style={{fontSize:13,color:"#991B1B",fontStyle:"italic",lineHeight:1.5}}>"{getFraseChinesa(animal, DOY)}"</div>
          </div>
        </Card>
      )}

      {sistema==="vedico" && rashi && RASHIS_VEDICOS[rashi] && (
        <Card style={{background:"linear-gradient(135deg,#F59E0B18,#F59E0B06)",border:"1px solid #F59E0B30",position:"relative"}}>
          <ShareBtn onClick={()=>shareContent("horoscopo", {
            nome: profile?.name || "",
            signo: rashi, emoji: RASHIS_VEDICOS[rashi].emoji,
            sistema: "Rashi Védico",
            mensagem: `Energia ${RASHIS_VEDICOS[rashi].natureza}. ${RASHIS_VEDICOS[rashi].caracteristicas}`,
          }, `🕉️ Meu Rashi védico é ${rashi}\n\nNatureza: ${RASHIS_VEDICOS[rashi].natureza}`)}/>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12}}>
            <span style={{fontSize:38}}>{RASHIS_VEDICOS[rashi].emoji}</span>
            <div>
              <div style={{fontSize:11,color:"#D97706",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>Rashi Védico</div>
              <div style={{fontSize:20,fontWeight:900,color:"#0A1F1A"}}>{rashi}</div>
              <div style={{fontSize:12,color:"#5A6B68"}}>= {RASHIS_VEDICOS[rashi].ocidental}</div>
            </div>
          </div>
          <div style={{fontSize:14,color:"#374151",lineHeight:1.6,marginBottom:12}}>{RASHIS_VEDICOS[rashi].descricao}</div>
          <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:12}}>
            <span style={{fontSize:11,background:"#FFF7ED",borderRadius:10,padding:"4px 10px",color:"#92400E"}}>🪐 {RASHIS_VEDICOS[rashi].planeta}</span>
            <span style={{fontSize:11,background:"#FFF7ED",borderRadius:10,padding:"4px 10px",color:"#92400E"}}>{RASHIS_VEDICOS[rashi].elemento}</span>
          </div>
          <div style={{padding:"10px 12px",background:"#FFFBEB",borderRadius:10,marginBottom:12}}>
            <div style={{fontSize:10,color:"#D97706",fontWeight:700,marginBottom:4}}>🕉️ MANTRA</div>
            <div style={{fontSize:13,color:"#92400E",fontStyle:"italic"}}>{RASHIS_VEDICOS[rashi].mantra}</div>
          </div>
          <div style={{padding:"10px 12px",background:"#F0FDF4",borderRadius:10,borderLeft:"3px solid #10B981"}}>
            <div style={{fontSize:13,color:"#065F46",fontStyle:"italic",lineHeight:1.5}}>"{getFraseVedica(rashi, DOY)}"</div>
          </div>
        </Card>
      )}

      {sistema==="judaico" && (
        <Card style={{background:"linear-gradient(135deg,#7C3AED18,#7C3AED06)",border:"1px solid #7C3AED30"}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:14}}>
            <span style={{fontSize:38}}>✡️</span>
            <div>
              <div style={{fontSize:11,color:"#7C3AED",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>Calendário Hebraico</div>
              <div style={{fontSize:18,fontWeight:900,color:"#0A1F1A"}}>{hebDate.formatted}</div>
            </div>
          </div>
          <div style={{padding:"12px 14px",background:"#F5F3FF",borderRadius:12,marginBottom:12}}>
            <div style={{fontSize:11,color:"#7C3AED",fontWeight:700,marginBottom:4}}>📅 HOJE NA TRADIÇÃO JUDAICA</div>
            <div style={{fontSize:13,color:"#5B21B6",lineHeight:1.5}}>
              {DOW === 5 ? "É véspera de Shabat. Ao pôr-do-sol começa o dia de descanso sagrado." :
               DOW === 6 ? "É Shabat — dia de descanso, oração e comunhão familiar." :
               `É um dia comum da semana hebraica. O Shabat se aproxima.`}
            </div>
          </div>
          <div style={{fontSize:13,color:"#374151",lineHeight:1.6}}>
            <strong>Mês de {hebDate.month}:</strong> Tempo de reflexão e conexão espiritual no calendário hebraico.
          </div>
        </Card>
      )}

      {!sign && (
        <div style={{textAlign:"center",padding:"40px 20px",color:"#9CA3AF"}}>
          <div style={{fontSize:44,marginBottom:10}}>♈</div>
          <div style={{fontSize:14,fontWeight:600}}>Complete sua data de nascimento no perfil para ver todos os horóscopos.</div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// ESPIRITUALIDADE (Nova Aba!)
// ============================================================
function EspiritualidadeScreen({profile, onSaveTradicao, initialTesteAba}) {
  const [mes,setMes] = useState(MONTH);
  const [testeAba,setTesteAba] = useState(initialTesteAba || "menu"); // menu | perguntas | resultado
  const [tradStep,setTradStep] = useState(0);
  const [tradScores,setTradScores] = useState({});
  const [tradResult,setTradResult] = useState(null);
  const [tradQuestions,setTradQuestions] = useState(() =>
    shuffle(TRADICAO_QUESTIONS).map(q => ({...q, opts: shuffle(q.opts)}))
  );

  const eventosHoje = getEspiritualidadeDoDia(DAY, MONTH, YEAR);
  const tradicao = profile?.tradicao || "Universal";
  const versiculo = getVersiculoDoDia(DAY, tradicao);
  const lua = getFaseLua();
  const santo = getSantoDoDiaCompleto(DAY, MONTH);

  const answerTrad = (w) => {
    const ns = {...tradScores, [w]:(tradScores[w]||0)+1};
    setTradScores(ns);
    if (tradStep < tradQuestions.length-1) setTradStep(s=>s+1);
    else {
      const result = Object.entries(ns).sort((a,b)=>b[1]-a[1])[0][0];
      setTradResult(result);
      setTesteAba("resultado");
      onSaveTradicao(result);
    }
  };
  const resetTrad = () => {
    setTesteAba("menu"); setTradStep(0); setTradScores({}); setTradResult(null);
    setTradQuestions(shuffle(TRADICAO_QUESTIONS).map(q => ({...q, opts: shuffle(q.opts)})));
  };

  // Eventos do mês
  const fixedMes = FIXED_DATES.filter(d => d.month === mes);
  const movableMes = MOVABLE_DATES_2026.filter(d => parseInt(d.date.split("-")[1]) === mes)
    .map(d => ({...d, day:parseInt(d.date.split("-")[2])}));
  const todosEventosMes = [...fixedMes, ...movableMes].sort((a,b)=>(a.day||0)-(b.day||0));

  if (testeAba === "perguntas") {
    const q = tradQuestions[tradStep];
    return (
      <div>
        <button onClick={resetTrad} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Voltar</button>
        <div style={{fontSize:14,fontWeight:700,color:"#0A1F1A",marginBottom:6}}>🧭 Pergunta {tradStep+1}/{tradQuestions.length}</div>
        <div style={{height:5,background:"#E5E7EB",borderRadius:3,marginBottom:20,overflow:"hidden"}}>
          <div style={{height:"100%",width:`${((tradStep+1)/tradQuestions.length)*100}%`,background:"linear-gradient(90deg,#10B981,#047857)",borderRadius:3,transition:"width .4s"}}/>
        </div>
        <div style={{fontSize:17,fontWeight:800,marginBottom:18,lineHeight:1.35}}>{q.q}</div>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {q.opts.map((o,i)=>(
            <button key={i} onClick={()=>answerTrad(o.w)} style={{padding:"14px 18px",borderRadius:16,border:"1.5px solid #E5E7EB",background:"#fff",color:"#0A1F1A",fontSize:14,fontWeight:500,cursor:"pointer",fontFamily:"inherit",textAlign:"left",lineHeight:1.4}}>{o.t}</button>
          ))}
        </div>
      </div>
    );
  }

  if (testeAba === "resultado" && tradResult) {
    const t = TRADICAO_INFO[tradResult];
    return (
      <div>
        <Card style={{background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",color:"#fff"}}>
          <div style={{textAlign:"center",padding:"10px 0 14px"}}>
            <div style={{fontSize:44,marginBottom:8}}>{t.emoji}</div>
            <div style={{fontSize:11,color:"#34D399",fontWeight:700,letterSpacing:2,textTransform:"uppercase",marginBottom:6}}>Sua Tradição</div>
            <div style={{fontSize:24,fontWeight:900}}>{tradResult}</div>
          </div>
          <div style={{fontSize:14,color:"#D1FAE5",lineHeight:1.6,marginBottom:12}}>{t.desc}</div>
          <div style={{background:"#10B98120",borderRadius:12,padding:"12px",marginBottom:12}}>
            <div style={{fontSize:11,color:"#34D399",fontWeight:700,marginBottom:4}}>✨ ESSÊNCIA</div>
            <div style={{fontSize:13,color:"#A7F3D0"}}>{t.essencia}</div>
          </div>
          <div style={{background:"#ffffff10",borderRadius:12,padding:"12px"}}>
            <div style={{fontSize:11,color:"#6EE7B7",fontWeight:700,marginBottom:4}}>🕊️ CONVITE DO DIA</div>
            <div style={{fontSize:13,color:"#D1FAE5",fontStyle:"italic"}}>{t.convite}</div>
          </div>
        </Card>
        <div style={{fontSize:11,color:"#9CA3AF",textAlign:"center",marginBottom:12}}>
          ✅ Salvo no seu perfil — versículos agora serão desta tradição
        </div>
        <Btn label="↻ Refazer teste" onClick={resetTrad} ghost/>
        <div style={{marginTop:10}}><Btn label="← Voltar" onClick={resetTrad} ghost/></div>
      </div>
    );
  }

  return (
    <div>
      <div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",marginBottom:4}}>🙏 Alma & Tradição</div>
      <div style={{fontSize:12,color:"#9CA3AF",marginBottom:18}}>Calendário das tradições do mundo</div>

      {/* Versículo do dia — NOVO */}
      <Card style={{background:"linear-gradient(135deg,#1E40AF18,#1E40AF06)",border:"1px solid #1E40AF30",marginBottom:14,position:"relative"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:8}}>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <span style={{fontSize:22}}>📖</span>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:6}}>
                <div style={{fontSize:10,color:"#1E40AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>Versículo do Dia</div>
                <span style={{fontSize:9,background:"#10B981",color:"#fff",padding:"2px 7px",borderRadius:20,fontWeight:700}}>NOVO</span>
              </div>
              <div style={{fontSize:11,color:"#9CA3AF"}}>{tradicao}</div>
            </div>
          </div>
        </div>
        <div style={{fontSize:15,color:"#0A1F1A",lineHeight:1.6,fontStyle:"italic",fontWeight:600,marginBottom:6}}>
          "{versiculo.texto}"
        </div>
        <div style={{fontSize:11,color:"#9CA3AF",fontWeight:600}}>{versiculo.ref}</div>
        {!profile?.tradicao && (
          <div style={{marginTop:10,fontSize:11,color:"#9CA3AF",background:"#F9FAFB",borderRadius:8,padding:"8px 10px"}}>
            💡 Faça o Teste de Tradição no card Testes para personalizar este versículo
          </div>
        )}
      </Card>

      {/* Fase da Lua — NOVO */}
      <Card style={{background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",marginBottom:14,position:"relative"}}>
        <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:10}}>
          <span style={{fontSize:40}}>{lua.emoji}</span>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <div style={{fontSize:10,color:"#34D399",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>🌙 Lua de Hoje</div>
              <span style={{fontSize:9,background:"#10B981",color:"#fff",padding:"2px 7px",borderRadius:20,fontWeight:700}}>NOVO</span>
            </div>
            <div style={{fontSize:18,fontWeight:900,color:"#fff"}}>{lua.fase}</div>
            <div style={{fontSize:11,color:"#6EE7B7"}}>{lua.nomeEspiritual} · {lua.iluminacao}% iluminada</div>
          </div>
        </div>
        <div style={{fontSize:13,color:"#D1FAE5",lineHeight:1.6,marginBottom:10}}>{lua.desc}</div>
        <div style={{background:"#10B98120",borderRadius:12,padding:"12px",marginBottom:8}}>
          <div style={{fontSize:10,color:"#34D399",fontWeight:700,marginBottom:4}}>🌿 RITUAL DO DIA</div>
          <div style={{fontSize:13,color:"#A7F3D0"}}>{lua.ritual}</div>
        </div>
        <div style={{fontSize:12,color:"#6EE7B7",fontStyle:"italic"}}>"{lua.afirmacao}"</div>
        <div style={{marginTop:8,fontSize:11,color:"#9CA3AF"}}>
          Dia {lua.diaDoCliclo} do ciclo · Próxima Lua Nova em {lua.proximaLuaNova} dias
        </div>
      </Card>

      {/* Santo do Dia — NOVO */}
      <Card style={{borderLeft:`4px solid ${TRADICAO_COLORS[santo.tradicao]||"#10B981"}`,marginBottom:14}}>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
          <span style={{fontSize:28}}>{santo.emoji}</span>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:6}}>
              <div style={{fontSize:10,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>🕯️ Figura do Dia</div>
              <span style={{fontSize:9,background:"#10B981",color:"#fff",padding:"2px 7px",borderRadius:20,fontWeight:700}}>NOVO</span>
            </div>
            <div style={{fontSize:16,fontWeight:800,color:"#0A1F1A"}}>{santo.nome}</div>
            <div style={{fontSize:11,color:TRADICAO_COLORS[santo.tradicao]||"#10B981",fontWeight:600}}>{santo.tradicao}</div>
          </div>
        </div>
        <div style={{fontSize:13,color:"#374151",lineHeight:1.6}}>{santo.desc}</div>
      </Card>

      {/* Hoje na Espiritualidade */}
      {eventosHoje.length > 0 && (
        <>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>
            ✨ Hoje · {DAY} de {MONTHS[MONTH]}
          </div>
          {eventosHoje.map((e,i)=>(
            <Card key={i} style={{borderLeft:`4px solid ${e.cor||"#10B981"}`}}>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:8}}>
                <span style={{fontSize:26}}>{TRADICAO_EMOJI[e.tradicao]||"🌟"}</span>
                <div>
                  <div style={{fontSize:10,color:e.cor||"#10B981",fontWeight:700,textTransform:"uppercase",letterSpacing:1}}>{e.tradicao}</div>
                  <div style={{fontSize:15,fontWeight:800,color:"#0A1F1A"}}>{e.titulo}</div>
                </div>
              </div>
              <div style={{fontSize:13,color:"#374151",lineHeight:1.6}}>{e.desc}</div>
            </Card>
          ))}
        </>
      )}

      {/* Calendário do mês */}
      <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10,marginTop:20}}>
        Calendário do mês
      </div>
      <div style={{display:"flex",gap:6,overflowX:"auto",marginBottom:14,paddingBottom:6}}>
        {MONTHS.slice(1).map((m,i)=>(
          <button key={i+1} onClick={()=>setMes(i+1)} style={{
            padding:"8px 14px",borderRadius:18,
            border:`1.5px solid ${mes===i+1?"#10B981":"#E5E7EB"}`,
            background:mes===i+1?"#10B981":"#fff",
            color:mes===i+1?"#fff":"#5A6B68",
            fontSize:11,fontWeight:700,cursor:"pointer",fontFamily:"inherit",flexShrink:0,whiteSpace:"nowrap"}}>
            {m.slice(0,3)}
          </button>
        ))}
      </div>
      {todosEventosMes.map((e,i)=>(
        <div key={i} style={{display:"flex",gap:10,padding:"10px 12px",background:"#fff",borderRadius:12,marginBottom:6,boxShadow:"0 1px 3px #0000000a"}}>
          <div style={{textAlign:"center",minWidth:32}}>
            <div style={{fontSize:18,fontWeight:900,color:e.cor||"#10B981",lineHeight:1}}>{e.day}</div>
            <div style={{fontSize:9,color:"#9CA3AF",textTransform:"uppercase"}}>{MONTHS[mes].slice(0,3)}</div>
          </div>
          <div style={{fontSize:18}}>{TRADICAO_EMOJI[e.tradicao]||"🌟"}</div>
          <div style={{flex:1,minWidth:0}}>
            <div style={{fontSize:13,fontWeight:700,color:"#0A1F1A"}}>{e.titulo}</div>
            <div style={{fontSize:10,color:e.cor||"#10B981",fontWeight:700,textTransform:"uppercase"}}>{e.tradicao}</div>
          </div>
        </div>
      ))}
      {todosEventosMes.length === 0 && (
        <div style={{textAlign:"center",padding:"30px",color:"#9CA3AF",fontSize:13}}>
          Nenhum evento principal cadastrado neste mês.
        </div>
      )}
    </div>
  );
}

// ============================================================
// TESTES (Temperamento, Quiz, Humor)
// ============================================================
function TestesScreen({profile, onComplete, goCoincidence, onSaveExtra, initialAba, autoStart, goAstral, goEspiritualidadeTeste}) {
  const [aba,setAba] = useState(initialAba || "menu");
  // Temperamento
  const [step,setStep] = useState(0);
  const [scores,setScores] = useState({colerico:0,sanguineo:0,melancolico:0,fleumatico:0});
  // Quiz
  const [qIdx,setQIdx] = useState(0);
  const [qScore,setQScore] = useState(0);
  const [qDone,setQDone] = useState(false);
  const [qFb,setQFb] = useState(null);
  const [qLevel,setQLevel] = useState(null);
  const [qPool,setQPool] = useState([]);
  // Humor
  const [mood,setMood] = useState(null);
  // Novos testes genéricos (Amor, Político, Personalidade, Profissional)
  const [novoStep,setNovoStep] = useState(0);
  const [novoScores,setNovoScores] = useState({});
  const [novoResult,setNovoResult] = useState(null);
  // QI
  const [qiStep,setQiStep] = useState(0);
  const [qiScore,setQiScore] = useState(0);
  const [qiFb,setQiFb] = useState(null);
  const [qiDone,setQiDone] = useState(false);
  // Current novo test config
  const [currentTest,setCurrentTest] = useState(null);
  // Embaralhamento (Fisher-Yates aplicado em cada teste ao iniciar)
  const [shuffledQuestions,setShuffledQuestions] = useState(null);

  const QUESTIONS = [
    {q:"Em um grupo, você é quem:",opts:[{t:"Toma decisões e define o que fazer",w:"colerico"},{t:"Anima todo mundo e conta histórias",w:"sanguineo"},{t:"Observa detalhes e planeja",w:"melancolico"},{t:"Ouve a todos e mantém harmonia",w:"fleumatico"}]},
    {q:"Ao enfrentar um problema:",opts:[{t:"Ajo na hora, mesmo irritado",w:"colerico"},{t:"Fico ansioso e procuro desabafar",w:"sanguineo"},{t:"Paro para analisar tudo",w:"melancolico"},{t:"Mantenho a calma e espero",w:"fleumatico"}]},
    {q:"Sua organização é:",opts:[{t:"Funcional, só o necessário",w:"colerico"},{t:"Bagunçada com lembranças",w:"sanguineo"},{t:"Perfeitamente organizada",w:"melancolico"},{t:"Simples e estável",w:"fleumatico"}]},
    {q:"O que te motiva em um projeto:",opts:[{t:"O desafio de vencer",w:"colerico"},{t:"Conhecer pessoas",w:"sanguineo"},{t:"Criar algo perfeito",w:"melancolico"},{t:"Estabilidade",w:"fleumatico"}]},
    {q:"Ao receber crítica:",opts:[{t:"Fico defensivo",w:"colerico"},{t:"Triste mas esqueço",w:"sanguineo"},{t:"Fico magoado e remoendo",w:"melancolico"},{t:"Aceito para evitar conflito",w:"fleumatico"}]},
    {q:"Em discussão:",opts:[{t:"Argumento até convencer",w:"colerico"},{t:"Faço brincadeira pra aliviar",w:"sanguineo"},{t:"Aponto fatos e lógica",w:"melancolico"},{t:"Prefiro ceder pela paz",w:"fleumatico"}]},
    {q:"Elogio que mais te agrada:",opts:[{t:"Você tem atitude e liderança!",w:"colerico"},{t:"Você é a alma da festa!",w:"sanguineo"},{t:"Você é inteligente e detalhista!",w:"melancolico"},{t:"Você é uma pessoa de paz!",w:"fleumatico"}]},
  ];

  const TEMPE_INFO = {
    colerico: {nome:"Colérico",emoji:"🔥",cor:"#EF4444",mentor:"Steve Jobs",desc:"Líder nato. Determinado e focado em resultados."},
    sanguineo: {nome:"Sanguíneo",emoji:"☀️",cor:"#F59E0B",mentor:"Ivete Sangalo",desc:"Energia do ambiente. Criativo e comunicativo."},
    melancolico: {nome:"Melancólico",emoji:"🌊",cor:"#3B82F6",mentor:"Albert Einstein",desc:"Profundo e analítico. Sensível e criativo."},
    fleumatico: {nome:"Fleumático",emoji:"🌿",cor:"#10B981",mentor:"Lionel Messi",desc:"Âncora do grupo. Calmo e diplomático."},
  };

  const MOODS = [
    {id:"feliz",emoji:"😄",label:"Feliz",cor:"#F59E0B"},
    {id:"focado",emoji:"🎯",label:"Focado",cor:"#3B82F6"},
    {id:"cansado",emoji:"😴",label:"Cansado",cor:"#8B5CF6"},
    {id:"ansioso",emoji:"😰",label:"Ansioso",cor:"#EF4444"},
    {id:"inspirado",emoji:"✨",label:"Inspirado",cor:"#10B981"},
  ];

  // Config dos testes novos
  const NOVOS_TESTES = {
    amor:         { intro:AMOR_INTRO, questions:AMOR_QUESTIONS, info:AMOR_INFO, tipo:"weighted", saveKey:"amor" },
    politico:     { intro:POLITICO_INTRO, questions:POLITICO_QUESTIONS, info:POLITICO_INFO, tipo:"weighted", saveKey:"politico" },
    personalidade:{ intro:PERSONALIDADE_INTRO, questions:PERSONALIDADE_QUESTIONS, info:PERSONALIDADE_INFO, tipo:"weighted", saveKey:"personalidade" },
    profissional: { intro:PROFISSIONAL_INTRO, questions:PROFISSIONAL_QUESTIONS, info:PROFISSIONAL_INFO, tipo:"weighted", saveKey:"profissional" },
  };

  const answerTempe = (w) => {
    const ns = {...scores,[w]:scores[w]+1};
    setScores(ns);
    const qsTempe = shuffledQuestions || QUESTIONS;
    if (step < qsTempe.length-1) setStep(s=>s+1);
    else { const d = Object.entries(ns).sort((a,b)=>b[1]-a[1])[0][0]; onComplete(d); setAba("tempe_result"); }
  };
  const startTempe = () => {
    setShuffledQuestions(shuffle(QUESTIONS).map(q => ({...q, opts: shuffle(q.opts)})));
    setStep(0); setScores({colerico:0,sanguineo:0,melancolico:0,fleumatico:0});
    setAba("tempe");
  };
  const resetTempe = () => { setAba("menu"); setStep(0); setScores({colerico:0,sanguineo:0,melancolico:0,fleumatico:0}); setShuffledQuestions(null); };

  const answerQuiz = (idx) => {
    const q = qPool[qIdx];
    const ok = idx === q.c;
    setQFb(ok);
    if (ok) setQScore(s=>s+1);
    setTimeout(()=>{ setQFb(null); if (qIdx<qPool.length-1) setQIdx(i=>i+1); else setQDone(true); }, 900);
  };
  const startQuiz = (level) => {
    const pool = getQuizByLevel(level).sort(() => Math.random() - 0.5);
    setQLevel(level); setQPool(pool); setQIdx(0); setQScore(0); setQDone(false); setQFb(null);
  };
  const resetQuiz = () => { setAba("menu"); setQLevel(null); setQPool([]); setQIdx(0); setQScore(0); setQDone(false); setQFb(null); };

  // Responder novo teste (weighted)
  const answerNovo = (w) => {
    const ns = {...novoScores, [w]:(novoScores[w]||0)+1};
    setNovoScores(ns);
    const qsNovo = shuffledQuestions || NOVOS_TESTES[currentTest].questions;
    if (novoStep < qsNovo.length-1) setNovoStep(s=>s+1);
    else {
      const result = Object.entries(ns).sort((a,b)=>b[1]-a[1])[0][0];
      setNovoResult(result);
      onSaveExtra({[NOVOS_TESTES[currentTest].saveKey]:result});
      setAba("novo_result");
    }
  };
  const startNovo = (testKey) => {
    const baseQs = NOVOS_TESTES[testKey].questions;
    setShuffledQuestions(shuffle(baseQs).map(q => ({...q, opts: shuffle(q.opts)})));
    setCurrentTest(testKey); setNovoStep(0); setNovoScores({}); setNovoResult(null); setAba("novo_perguntas");
  };
  const resetNovo = () => { setAba("menu"); setCurrentTest(null); setNovoStep(0); setNovoScores({}); setNovoResult(null); setShuffledQuestions(null); };

  // QI
  const answerQI = (idx) => {
    const q = QI_QUESTIONS[qiStep];
    const ok = idx === q.c;
    setQiFb(ok);
    if (ok) setQiScore(s=>s+1);
    setTimeout(()=>{ setQiFb(null); if (qiStep<QI_QUESTIONS.length-1) setQiStep(i=>i+1); else setQiDone(true); }, 900);
  };
  const resetQI = () => { setAba("menu"); setQiStep(0); setQiScore(0); setQiFb(null); setQiDone(false); };

  // 🎯 Auto-inicia o teste quando o usuário chega pelo CTA "Fazer teste agora" do KomparAI.
  // Roda uma vez ao montar a tela (a tela remonta a cada entrada na aba Testes).
  useEffect(() => {
    if (!autoStart) return;
    if (autoStart === "temperamento") startTempe();
    else if (NOVOS_TESTES[autoStart]) startNovo(autoStart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ─── TELA MENU ───
  if (aba==="menu") {
    // Demais testes em ORDEM FIXA (sem embaralhamento)
    const novosCards = [
      {key:"personalidade", emoji:"🧩", nome:"Introvertido ou Extrovertido?", desc:"15 perguntas · seu perfil de energia social", cor:"#6366F1"},
      {key:"amor", emoji:"💘", nome:"Linguagens do Amor", desc:"15 perguntas · descubra como você ama", cor:"#EC4899"},
      {key:"profissional", emoji:"💼", nome:"Perfil Profissional", desc:"15 perguntas · seu estilo no trabalho", cor:"#10B981"},
      {key:"politico", emoji:"🗳️", nome:"Espectro Político", desc:"15 perguntas · Esquerda, Centro, Direita ou Liberal", cor:"#3B82F6"},
    ];

    return (
      <div>
        <div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",marginBottom:4}}>🧠 Testes & Descobertas</div>
        <div style={{fontSize:12,color:"#9CA3AF",marginBottom:16}}>Conheça-se de dentro para fora</div>

        {/* 1º — Coincidências (FIXO no topo) */}
        <Card onClick={goCoincidence} style={{background:"linear-gradient(135deg,#7C3AED,#5B21B6)",cursor:"pointer"}}>
          <div style={{display:"flex",gap:14,alignItems:"center"}}>
            <div style={{width:52,height:52,borderRadius:16,background:"#ffffff20",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>🪞</div>
            <div style={{flex:1}}>
              <div style={{fontSize:16,fontWeight:800,color:"#fff"}}>Teste de Coincidências</div>
              <div style={{fontSize:12,color:"#DDD6FE",marginTop:3}}>365 famosos · descubra os em comum</div>
              <div style={{marginTop:8,display:"inline-block",background:"#fff",borderRadius:20,padding:"4px 12px",fontSize:12,fontWeight:700,color:"#7C3AED"}}>Descobrir →</div>
            </div>
          </div>
        </Card>

        {/* 2º — Temperamento (FIXO no topo) */}
        <Card onClick={startTempe} style={{background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",cursor:"pointer"}}>
          <div style={{display:"flex",gap:14,alignItems:"center"}}>
            <div style={{width:52,height:52,borderRadius:16,background:"#10B98130",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>🧬</div>
            <div style={{flex:1}}>
              <div style={{fontSize:16,fontWeight:800,color:"#fff"}}>Teste de Temperamento</div>
              <div style={{fontSize:12,color:"#6EE7B7",marginTop:3}}>7 perguntas · descubra seu mentor</div>
              {profile?.temperamento && <div style={{fontSize:10,color:"#34D399",marginTop:3}}>✅ Feito · {profile.temperamento}</div>}
            </div>
          </div>
        </Card>

        {/* Demais testes — ORDEM FIXA */}
        {novosCards.map(nc => (
          <Card key={nc.key} onClick={()=>startNovo(nc.key)} style={{cursor:"pointer",borderLeft:`4px solid ${nc.cor}`}}>
            <div style={{display:"flex",gap:14,alignItems:"center"}}>
              <div style={{width:52,height:52,borderRadius:16,background:`${nc.cor}18`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>{nc.emoji}</div>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2}}>
                  <div style={{fontSize:15,fontWeight:800,color:"#0A1F1A"}}>{nc.nome}</div>
                  <span style={{fontSize:9,background:"#10B981",color:"#fff",padding:"2px 7px",borderRadius:20,fontWeight:700,flexShrink:0}}>NOVO</span>
                </div>
                <div style={{fontSize:12,color:"#9CA3AF"}}>{nc.desc}</div>
                {profile?.[NOVOS_TESTES[nc.key]?.saveKey||nc.key] && (
                  <div style={{fontSize:10,color:nc.cor,fontWeight:600,marginTop:3}}>✅ Feito · {profile[NOVOS_TESTES[nc.key]?.saveKey||nc.key]}</div>
                )}
              </div>
              <span style={{fontSize:18,color:nc.cor,opacity:.6}}>→</span>
            </div>
          </Card>
        ))}

        {/* Teste de Tradição Espiritual — leva pra tela de Alma */}
        <Card onClick={()=>goEspiritualidadeTeste && goEspiritualidadeTeste()} style={{cursor:"pointer",borderLeft:"4px solid #10B981"}}>
          <div style={{display:"flex",gap:14,alignItems:"center"}}>
            <div style={{width:52,height:52,borderRadius:16,background:"#10B98118",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>🧭</div>
            <div style={{flex:1}}>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2}}>
                <div style={{fontSize:15,fontWeight:800,color:"#0A1F1A"}}>Qual tradição combina com você?</div>
                <span style={{fontSize:9,background:"#10B981",color:"#fff",padding:"2px 7px",borderRadius:20,fontWeight:700,flexShrink:0}}>NOVO</span>
              </div>
              <div style={{fontSize:12,color:"#9CA3AF"}}>7 perguntas · descubra sua espiritualidade natural</div>
              {profile?.tradicao && (
                <div style={{fontSize:10,color:"#10B981",fontWeight:600,marginTop:3}}>✅ Feito · {profile.tradicao}</div>
              )}
            </div>
            <span style={{fontSize:18,color:"#10B981",opacity:.6}}>→</span>
          </div>
        </Card>

        {/* ============================================================ */}
        {/* SEÇÃO QUIZZ                                                   */}
        {/* ============================================================ */}
        <div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",marginTop:24,marginBottom:4}}>🎯 Quizzes</div>
        <div style={{fontSize:12,color:"#9CA3AF",marginBottom:16}}>Teste seus conhecimentos</div>

        {/* Quiz de Famosos */}
        <Card onClick={()=>setAba("quiz")} style={{cursor:"pointer"}}>
          <div style={{display:"flex",gap:14,alignItems:"center"}}>
            <div style={{width:52,height:52,borderRadius:16,background:"#F59E0B18",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>🎯</div>
            <div style={{flex:1}}>
              <div style={{fontSize:16,fontWeight:800,color:"#0A1F1A"}}>Quiz dos Famosos</div>
              <div style={{fontSize:12,color:"#9CA3AF",marginTop:3}}>3 níveis · {QUIZ_QUESTIONS.length} perguntas</div>
            </div>
          </div>
        </Card>

        {/* QI Cultural */}
        <Card onClick={()=>setAba("qi")} style={{cursor:"pointer",borderLeft:"4px solid #F59E0B"}}>
          <div style={{display:"flex",gap:14,alignItems:"center"}}>
            <div style={{width:52,height:52,borderRadius:16,background:"#F59E0B18",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>🧠</div>
            <div style={{flex:1}}>
              <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2}}>
                <div style={{fontSize:15,fontWeight:800,color:"#0A1F1A"}}>QI Cultural</div>
                <span style={{fontSize:9,background:"#10B981",color:"#fff",padding:"2px 7px",borderRadius:20,fontWeight:700,flexShrink:0}}>NOVO</span>
              </div>
              <div style={{fontSize:12,color:"#9CA3AF"}}>15 perguntas · quanto você conhece o mundo</div>
              {profile?.qi && (
                <div style={{fontSize:10,color:"#F59E0B",fontWeight:600,marginTop:3}}>✅ Feito · {profile.qi}</div>
              )}
            </div>
            <span style={{fontSize:18,color:"#F59E0B",opacity:.6}}>→</span>
          </div>
        </Card>
      </div>
    );
  }

  // ─── INTRO DO NOVO TESTE ───
  if (aba==="novo_intro" && currentTest) {
    const cfg = NOVOS_TESTES[currentTest];
    const intro = cfg.intro;
    return (
      <div>
        <button onClick={resetNovo} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Voltar</button>
        <Card style={{textAlign:"center",padding:"24px 20px"}}>
          <div style={{fontSize:52,marginBottom:12}}>{intro.emoji}</div>
          <div style={{fontSize:20,fontWeight:900,color:"#0A1F1A",marginBottom:8}}>{intro.nome}</div>
          <div style={{fontSize:13,color:"#9CA3AF",marginBottom:14}}>por {intro.criador}</div>
          <div style={{fontSize:13,color:"#374151",lineHeight:1.6,marginBottom:12,background:"#F9FAFB",borderRadius:12,padding:"12px"}}>{intro.historia}</div>
          <div style={{fontSize:13,color:"#374151",lineHeight:1.6,marginBottom:8}}><strong>Como funciona:</strong> {intro.comoFunciona}</div>
          <div style={{fontSize:13,color:"#5A6B68",lineHeight:1.6,fontStyle:"italic"}}>{intro.comoInterpretar}</div>
        </Card>
        <Btn label={`Começar — ${cfg.questions.length} perguntas →`} onClick={()=>setAba("novo_perguntas")}/>
      </div>
    );
  }

  // ─── PERGUNTAS DO NOVO TESTE ───
  if (aba==="novo_perguntas" && currentTest) {
    const cfg = NOVOS_TESTES[currentTest];
    const qsNovo = shuffledQuestions || cfg.questions;
    const q = qsNovo[novoStep];
    return (
      <div>
        <button onClick={()=>setAba("menu")} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Cancelar</button>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
          <div style={{fontSize:14,fontWeight:700}}>{cfg.intro.emoji} Pergunta {novoStep+1}/{qsNovo.length}</div>
        </div>
        <div style={{height:5,background:"#E5E7EB",borderRadius:3,marginBottom:20,overflow:"hidden"}}>
          <div style={{height:"100%",width:`${((novoStep+1)/qsNovo.length)*100}%`,background:"linear-gradient(90deg,#34D399,#10B981)",borderRadius:3,transition:"width .4s"}}/>
        </div>
        <div style={{fontSize:17,fontWeight:800,marginBottom:18,lineHeight:1.35}}>{q.q}</div>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {q.opts.map((o,i)=>(
            <button key={i} onClick={()=>answerNovo(o.w)} style={{padding:"14px 18px",borderRadius:16,border:"1.5px solid #E5E7EB",background:"#fff",color:"#0A1F1A",fontSize:14,fontWeight:500,cursor:"pointer",fontFamily:"inherit",textAlign:"left",lineHeight:1.4}}>{o.t}</button>
          ))}
        </div>
      </div>
    );
  }

  // ─── RESULTADO DO NOVO TESTE ───
  if (aba==="novo_result" && currentTest && novoResult) {
    const cfg = NOVOS_TESTES[currentTest];
    const info = cfg.info[novoResult];
    if (!info) return <div><Btn label="← Voltar" onClick={resetNovo} ghost/></div>;
    return (
      <div>
        <Card style={{background:`linear-gradient(135deg,${info.cor},${info.cor}bb)`,color:"#fff",marginBottom:14,position:"relative"}}>
          <ShareBtn onClick={()=>shareContent("temperamento", {
            nome: profile?.name || "Você",
            resultado: info.nome,
            emoji: info.emoji,
            mentor: cfg.intro.nome,
            desc: info.desc,
            cor: info.cor,
          }, `${info.emoji} ${cfg.intro.nome}: ${info.nome}!\n\n"${info.desc}"`)} style={{background:"rgba(255,255,255,0.95)"}}/>
          <div style={{textAlign:"center",padding:"10px 0 16px"}}>
            <div style={{fontSize:44,marginBottom:8}}>{info.emoji}</div>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:2,textTransform:"uppercase",opacity:.8,marginBottom:6}}>
              {cfg.intro.nome}
            </div>
            <div style={{fontSize:26,fontWeight:900}}>{info.nome}</div>
            <div style={{fontSize:14,opacity:.85,marginTop:6,lineHeight:1.5}}>{info.desc}</div>
          </div>
        </Card>
        <Card>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>✅ Pontos Fortes</div>
          {info.fortes.map((f,i)=>(
            <div key={i} style={{display:"flex",gap:10,padding:"8px 0",borderBottom:i<info.fortes.length-1?"1px solid #F3F4F6":"none"}}>
              <span style={{color:"#10B981",fontWeight:700}}>+</span>
              <span style={{fontSize:13,color:"#374151"}}>{f}</span>
            </div>
          ))}
        </Card>
        <Card>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>⚠️ Pontos de Atenção</div>
          {info.atencao.map((a,i)=>(
            <div key={i} style={{display:"flex",gap:10,padding:"8px 0",borderBottom:i<info.atencao.length-1?"1px solid #F3F4F6":"none"}}>
              <span style={{color:"#F59E0B",fontWeight:700}}>!</span>
              <span style={{fontSize:13,color:"#374151"}}>{a}</span>
            </div>
          ))}
        </Card>
        <Card style={{background:"#F0FDF4",border:"1px solid #BBF7D0"}}>
          <div style={{fontSize:11,color:"#059669",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>💡 Dicas Práticas</div>
          {info.dicas.map((d,i)=>(
            <div key={i} style={{display:"flex",gap:10,padding:"6px 0"}}>
              <span style={{color:"#10B981",flexShrink:0}}>→</span>
              <span style={{fontSize:13,color:"#065F46"}}>{d}</span>
            </div>
          ))}
        </Card>
        <div style={{fontSize:11,color:"#9CA3AF",textAlign:"center",marginBottom:12}}>✅ Salvo no seu perfil</div>
        <Btn label="↻ Refazer" onClick={()=>{setNovoStep(0);setNovoScores({});setNovoResult(null);setAba("novo_perguntas");}} ghost/>
        <div style={{marginTop:10}}><Btn label="← Voltar para Testes" onClick={resetNovo} ghost/></div>
      </div>
    );
  }

  // ─── QI CULTURAL ───
  if (aba==="qi") {
    if (qiDone) {
      const level = QI_LEVELS.find(l => qiScore >= l.min && qiScore <= l.max) || QI_LEVELS[0];
      return (
        <div>
          <Card style={{textAlign:"center",background:`${level.cor}18`,border:`1px solid ${level.cor}30`}}>
            <div style={{fontSize:52,marginBottom:10}}>{level.emoji}</div>
            <div style={{fontSize:22,fontWeight:900,color:"#0A1F1A",marginBottom:4}}>{level.nome}</div>
            <div style={{fontSize:28,fontWeight:900,color:level.cor,marginBottom:8}}>{qiScore}/{QI_QUESTIONS.length}</div>
            <div style={{fontSize:13,color:"#5A6B68",lineHeight:1.5}}>{level.desc}</div>
          </Card>
          <Btn label="↻ Tentar novamente" onClick={()=>{setQiStep(0);setQiScore(0);setQiFb(null);setQiDone(false);}} ghost/>
          <div style={{marginTop:10}}><Btn label="← Voltar para Testes" onClick={resetQI} ghost/></div>
        </div>
      );
    }
    const q = QI_QUESTIONS[qiStep];
    return (
      <div>
        <button onClick={resetQI} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Cancelar</button>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
          <div style={{fontSize:14,fontWeight:700}}>🧠 Pergunta {qiStep+1}/{QI_QUESTIONS.length}</div>
          <div style={{fontSize:13,fontWeight:700,color:"#F59E0B"}}>✓ {qiScore}</div>
        </div>
        <div style={{height:5,background:"#E5E7EB",borderRadius:3,marginBottom:20,overflow:"hidden"}}>
          <div style={{height:"100%",width:`${((qiStep+1)/QI_QUESTIONS.length)*100}%`,background:"linear-gradient(90deg,#FCD34D,#F59E0B)",borderRadius:3,transition:"width .4s"}}/>
        </div>
        <div style={{fontSize:17,fontWeight:800,marginBottom:18,lineHeight:1.35}}>{q.q}</div>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {q.opts.map((o,i)=>{
            let bg="#fff",bc="#E5E7EB",col="#0A1F1A";
            if (qiFb!==null){if(i===q.c){bg="#F0FDF4";bc="#10B981";col="#065F46";}else{bg="#FEF2F2";bc="#EF4444";}}
            return <button key={i} onClick={()=>qiFb===null&&answerQI(i)} style={{padding:"14px 18px",borderRadius:16,border:`1.5px solid ${bc}`,background:bg,color:col,fontSize:14,fontWeight:500,cursor:qiFb===null?"pointer":"default",fontFamily:"inherit",textAlign:"left",lineHeight:1.4,transition:"all .2s"}}>{o}</button>;
          })}
        </div>
        {qiFb!==null&&<div style={{marginTop:12,padding:"11px 14px",borderRadius:12,background:qiFb?"#F0FDF4":"#FEF2F2",fontSize:13,color:qiFb?"#065F46":"#991B1B",fontWeight:600}}>{qiFb?"✅ Correto!": `❌ Resposta: ${q.opts[q.c]}`}</div>}
      </div>
    );
  }

  // ─── TEMPERAMENTO ───
  if (aba==="tempe") {
    const qsTempe = shuffledQuestions || QUESTIONS;
    const q = qsTempe[step];
    return (
      <div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
          <div style={{fontSize:14,fontWeight:700,color:"#0A1F1A"}}>Pergunta {step+1}/{qsTempe.length}</div>
          <button onClick={resetTempe} style={{background:"transparent",border:"1px solid #E5E7EB",borderRadius:20,padding:"5px 12px",fontSize:12,color:"#9CA3AF",cursor:"pointer"}}>Cancelar</button>
        </div>
        <div style={{height:5,background:"#E5E7EB",borderRadius:3,marginBottom:22,overflow:"hidden"}}>
          <div style={{height:"100%",width:`${((step+1)/qsTempe.length)*100}%`,background:"linear-gradient(90deg,#34D399,#10B981)",borderRadius:3,transition:"width .4s"}}/>
        </div>
        <div style={{fontSize:18,fontWeight:800,color:"#0A1F1A",marginBottom:18,lineHeight:1.3}}>{q.q}</div>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {q.opts.map((o,i)=>(
            <button key={i} onClick={()=>answerTempe(o.w)} style={{padding:"15px 18px",borderRadius:16,border:"1.5px solid #E5E7EB",background:"#fff",color:"#0A1F1A",fontSize:14,fontWeight:500,cursor:"pointer",fontFamily:"inherit",textAlign:"left",lineHeight:1.4}}>{o.t}</button>
          ))}
        </div>
      </div>
    );
  }

  if (aba==="tempe_result") {
    const total = Object.values(scores).reduce((s,v)=>s+v,0);
    const d = Object.entries(scores).sort((a,b)=>b[1]-a[1])[0][0];
    const t = TEMPE_INFO[d];
    return (
      <div>
        <div style={{background:`linear-gradient(135deg,${t.cor},${t.cor}bb)`,borderRadius:24,padding:"26px 22px",marginBottom:14,color:"#fff",position:"relative"}}>
          <ShareBtn onClick={()=>shareContent("temperamento", {
            nome: profile?.name || "Você",
            resultado: t.nome,
            emoji: t.emoji,
            mentor: t.mentor,
            desc: t.desc,
            cor: t.cor,
          }, `${t.emoji} Sou ${t.nome}!\n\nComo ${t.mentor}.\n\n"${t.desc}"`)} style={{background:"rgba(255,255,255,0.95)"}}/>
          <div style={{fontSize:11,fontWeight:700,letterSpacing:2,textTransform:"uppercase",opacity:.8,marginBottom:10}}>Seu Temperamento</div>
          <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:12}}>
            <span style={{fontSize:44}}>{t.emoji}</span>
            <div>
              <div style={{fontSize:26,fontWeight:900,letterSpacing:-1}}>{t.nome}</div>
              <div style={{fontSize:13,opacity:.85,marginTop:2}}>Mentor: {t.mentor}</div>
            </div>
          </div>
          <div style={{fontSize:14,lineHeight:1.6,opacity:.92,marginBottom:14}}>{t.desc}</div>
        </div>
        <Card>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>Distribuição</div>
          {Object.entries(TEMPE_INFO).map(([k,info])=>{
            const pct = Math.round((scores[k]/total)*100);
            return (
              <div key={k} style={{marginBottom:12}}>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
                  <span style={{fontSize:13,fontWeight:600}}>{info.emoji} {info.nome}</span>
                  <span style={{fontSize:13,fontWeight:800,color:info.cor}}>{pct}%</span>
                </div>
                <div style={{height:6,background:"#F3F4F6",borderRadius:3,overflow:"hidden"}}>
                  <div style={{height:"100%",width:`${pct}%`,background:info.cor,borderRadius:3}}/>
                </div>
              </div>
            );
          })}
        </Card>
        <Btn label="↻ Refazer" onClick={resetTempe} ghost/>
        <div style={{marginTop:10}}><Btn label="← Voltar para Testes" onClick={()=>setAba("menu")} ghost/></div>
      </div>
    );
  }

  // ─── QUIZ ───
  if (aba==="quiz") {
    if (!qLevel) {
      const LEVELS = [
        {id:"facil",emoji:"🟢",nome:"Fácil",desc:"Conhecimento geral",cor:"#10B981",count:getQuizByLevel("facil").length},
        {id:"medio",emoji:"🟡",nome:"Médio",desc:"Conhecimento intermediário",cor:"#F59E0B",count:getQuizByLevel("medio").length},
        {id:"dificil",emoji:"🔴",nome:"Difícil",desc:"Trivia avançada",cor:"#EF4444",count:getQuizByLevel("dificil").length},
      ];
      return (
        <div>
          <button onClick={()=>setAba("menu")} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Voltar</button>
          <div style={{fontSize:18,fontWeight:800,marginBottom:4}}>🎯 Quiz de Famosos</div>
          <div style={{fontSize:12,color:"#9CA3AF",marginBottom:18}}>Escolha o nível</div>
          {LEVELS.map(lv=>(
            <Card key={lv.id} onClick={()=>startQuiz(lv.id)} style={{cursor:"pointer",borderLeft:`4px solid ${lv.cor}`}}>
              <div style={{display:"flex",gap:14,alignItems:"center"}}>
                <span style={{fontSize:32}}>{lv.emoji}</span>
                <div style={{flex:1}}>
                  <div style={{fontSize:17,fontWeight:800}}>{lv.nome}</div>
                  <div style={{fontSize:12,color:"#9CA3AF",marginTop:2}}>{lv.desc} · {lv.count} perguntas</div>
                </div>
                <span style={{fontSize:22,color:lv.cor,opacity:.6}}>→</span>
              </div>
            </Card>
          ))}
        </div>
      );
    }
    if (qDone) {
      const total=qPool.length, pct=Math.round((qScore/total)*100);
      const levelColor={facil:"#10B981",medio:"#F59E0B",dificil:"#EF4444"}[qLevel];
      return (
        <div>
          <Card style={{textAlign:"center",background:"#FFF7ED",border:"1px solid #FED7AA"}}>
            <div style={{fontSize:44,marginBottom:10}}>🏆</div>
            <div style={{fontSize:28,fontWeight:900,marginBottom:4}}>{qScore}/{total}</div>
            <div style={{fontSize:13,color:"#5A6B68",marginBottom:14}}>
              {pct>=80?"Incrível! Expert! 🌟":pct>=60?"Muito bom! 👍":pct>=40?"Bom começo! 📚":"Continue aprendendo! 🌱"}
            </div>
          </Card>
          <Btn label="↻ Outro nível" onClick={resetQuiz} ghost/>
          <div style={{marginTop:10}}><Btn label="← Voltar para Testes" onClick={()=>setAba("menu")} ghost/></div>
        </div>
      );
    }
    const q=qPool[qIdx];
    if(!q) return <div><Btn label="← Voltar" onClick={resetQuiz} ghost/></div>;
    const levelColor={facil:"#10B981",medio:"#F59E0B",dificil:"#EF4444"}[qLevel];
    const levelEmoji={facil:"🟢",medio:"🟡",dificil:"🔴"}[qLevel];
    return (
      <div>
        <div style={{display:"flex",justifyContent:"space-between",marginBottom:14,alignItems:"center"}}>
          <div style={{fontSize:14,fontWeight:700}}>{levelEmoji} Pergunta {qIdx+1}/{qPool.length}</div>
          <div style={{fontSize:13,fontWeight:700,color:levelColor}}>✓ {qScore}</div>
        </div>
        <div style={{height:5,background:"#E5E7EB",borderRadius:3,marginBottom:20,overflow:"hidden"}}>
          <div style={{height:"100%",width:`${((qIdx+1)/qPool.length)*100}%`,background:levelColor,borderRadius:3,transition:"width .4s"}}/>
        </div>
        <div style={{fontSize:17,fontWeight:800,marginBottom:18,lineHeight:1.35}}>{q.q}</div>
        <div style={{display:"flex",flexDirection:"column",gap:10}}>
          {q.opts.map((o,i)=>{
            let bg="#fff",bc="#E5E7EB",col="#0A1F1A";
            if(qFb!==null){if(i===q.c){bg="#F0FDF4";bc="#10B981";col="#065F46";}else if(qFb===false){bg="#FEF2F2";bc="#EF4444";}}
            return <button key={i} onClick={()=>qFb===null&&answerQuiz(i)} style={{padding:"14px 18px",borderRadius:16,border:`1.5px solid ${bc}`,background:bg,color:col,fontSize:14,fontWeight:500,cursor:qFb===null?"pointer":"default",fontFamily:"inherit",textAlign:"left",lineHeight:1.4,transition:"all .2s"}}>{o}</button>;
          })}
        </div>
        {qFb!==null&&<div style={{marginTop:12,padding:"11px 14px",borderRadius:12,background:qFb?"#F0FDF4":"#FEF2F2",fontSize:13,color:qFb?"#065F46":"#991B1B",fontWeight:600}}>{qFb?"✅ Correto!":`❌ Resposta: ${q.opts[q.c]}`}</div>}
      </div>
    );
  }

  // ─── HUMOR MATINAL EXPANDIDO ───
  if (aba==="humor") {
    if (mood) {
      const m = MOODS.find(x=>x.id===mood);
      const hExp = HUMOR_EXPANDIDO[mood];
      const frases = HUMOR_FRASES_EXPANDIDAS[mood];
      const f = frases[DOY % frases.length];
      return (
        <div>
          <button onClick={()=>setMood(null)} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Outro humor</button>
          <Card style={{background:`${m.cor}12`,border:`1px solid ${m.cor}30`}}>
            <div style={{textAlign:"center",marginBottom:16}}>
              <div style={{fontSize:44,marginBottom:8}}>{m.emoji}</div>
              <div style={{fontSize:17,fontWeight:800,color:"#0A1F1A"}}>Você está {m.label.toLowerCase()} hoje</div>
            </div>
            <div style={{fontSize:14,color:m.cor,fontWeight:700,marginBottom:6}}>{hExp.abertura}</div>
            <div style={{fontSize:14,color:"#374151",lineHeight:1.7,marginBottom:12}}>{hExp.acolhimento}</div>
            <div style={{fontSize:14,color:"#374151",lineHeight:1.7,marginBottom:16,fontWeight:500}}>{hExp.motivacao}</div>
          </Card>
          <Card>
            <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>✨ MENSAGEM DO DIA</div>
            <div style={{display:"flex",gap:10,alignItems:"center",marginBottom:8}}>
              <span style={{fontSize:22}}>{f.emoji}</span>
              <div style={{fontSize:13,fontWeight:700}}>{f.famoso}</div>
            </div>
            <div style={{fontSize:14,color:"#374151",lineHeight:1.7,fontStyle:"italic",borderLeft:`3px solid ${m.cor}`,paddingLeft:14}}>"{f.quote}"</div>
            {f.contexto && <div style={{fontSize:11,color:"#9CA3AF",marginTop:8,fontStyle:"italic"}}>{f.contexto}</div>}
          </Card>
          <Card>
            <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>🎯 ATIVIDADES PARA HOJE</div>
            {hExp.atividades.map((a,i)=>(
              <div key={i} style={{padding:"8px 0",borderBottom:i<hExp.atividades.length-1?"1px solid #F3F4F6":"none",fontSize:13,color:"#374151"}}>{a}</div>
            ))}
          </Card>
          <Card style={{background:"#F0FDF4",border:"1px solid #BBF7D0"}}>
            <div style={{fontSize:11,color:"#059669",fontWeight:700,marginBottom:4}}>🏆 DESAFIO DO DIA</div>
            <div style={{fontSize:13,color:"#065F46"}}>{hExp.desafio}</div>
          </Card>
          <Card>
            <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,marginBottom:4}}>🎵 TRILHA DO DIA</div>
            <div style={{fontSize:13,color:"#374151"}}>{hExp.musica}</div>
          </Card>
          <Btn label={`← Voltar ${goAstral ? "para Astral" : "para Testes"}`} onClick={()=>{setMood(null); goAstral ? goAstral() : setAba("menu");}} ghost/>
        </div>
      );
    }
    return (
      <div>
        <button onClick={()=>goAstral ? goAstral() : setAba("menu")} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Voltar {goAstral ? "para Astral" : ""}</button>
        <div style={{fontSize:18,fontWeight:800,marginBottom:4}}>🌅 Humor Matinal</div>
        <div style={{fontSize:12,color:"#9CA3AF",marginBottom:18}}>Como você está hoje?</div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          {MOODS.map(m=>(
            <button key={m.id} onClick={()=>setMood(m.id)} style={{padding:"20px 10px",borderRadius:20,border:`1.5px solid ${m.cor}30`,background:`${m.cor}10`,cursor:"pointer",fontFamily:"inherit",display:"flex",flexDirection:"column",alignItems:"center",gap:8}}>
              <span style={{fontSize:34}}>{m.emoji}</span>
              <span style={{fontSize:14,fontWeight:700}}>{m.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

// ============================================================
// PERFIL
// ============================================================
function PerfilScreen({profile, onSave, onReset, onBack}) {
  const [form,setForm] = useState(profile || {});
  const [showRaioX,setShowRaioX] = useState(false);
  const set = (k,v) => setForm(f => ({...f, [k]:v}));
  const sign = form.birthDay && form.birthMonth ? getSign(form.birthDay, form.birthMonth) : null;
  const vida = calcVida(form.birthDay, form.birthMonth, form.birthYear);
  const numInfo = form.birthDay && form.birthYear ? getNumerologia(form.birthDay, form.birthMonth, form.birthYear) : null;
  const inp = {width:"100%",background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:12,
    color:"#0A1F1A",fontSize:15,padding:"13px 15px",boxSizing:"border-box",fontWeight:500};

  // Raio X — conta testes feitos
  const TODOS_CAMPOS = ["temperamento","amor","politico","personalidade","profissional","tradicao"];
  const testesFEITOS = TODOS_CAMPOS.filter(k => profile?.[k]);

  if (showRaioX) {
    const animal = profile?.birthYear ? getAnimalChines(profile.birthYear) : null;
    const rashi = profile?.sign ? getRashi(profile.sign) : null;
    const lua = getFaseLua();
    const TEMPE_LABELS = {colerico:"🔥 Colérico",sanguineo:"☀️ Sanguíneo",melancolico:"🌊 Melancólico",fleumatico:"🌿 Fleumático"};
    const AMOR_LABELS = {palavras:"💬 Palavras de Afirmação",tempo:"⏰ Tempo de Qualidade",presentes:"🎁 Presentes",atos:"🤝 Atos de Serviço",toque:"🤗 Toque Físico"};
    const POL_LABELS = {esquerda:"🌹 Esquerda",centro:"⚖️ Centro",direita:"🦅 Direita",liberal:"🗽 Liberal"};
    const PER_LABELS = {intro:"🌙 Introvertido(a)",ambiv:"🌗 Ambivertido(a)",extra:"☀️ Extrovertido(a)"};
    const PROF_LABELS = {empreendedor:"🚀 Empreendedor(a)",executor:"⚙️ Executor(a)",criativo:"🎨 Criativo(a)",analitico:"📊 Analítico(a)"};

    return (
      <div>
        <button onClick={()=>setShowRaioX(false)} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Voltar ao Perfil</button>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:4}}>
          <div style={{fontSize:18,fontWeight:800}}>☢️ Raio X</div>
          <button onClick={()=>{
            const resultados = [];
            if (profile?.temperamento) resultados.push({emoji:"🔥",label:"Temperamento",valor:TEMPE_LABELS[profile.temperamento]?.replace(/^[^\s]+\s/,"")||profile.temperamento});
            if (profile?.personalidade) resultados.push({emoji:"🧩",label:"Personalidade",valor:PER_LABELS[profile.personalidade]?.replace(/^[^\s]+\s/,"")||profile.personalidade});
            if (profile?.amor) resultados.push({emoji:"💘",label:"Amor",valor:AMOR_LABELS[profile.amor]?.replace(/^[^\s]+\s/,"")||profile.amor});
            if (profile?.profissional) resultados.push({emoji:"💼",label:"Profissional",valor:PROF_LABELS[profile.profissional]?.replace(/^[^\s]+\s/,"")||profile.profissional});
            if (profile?.sign) resultados.push({emoji:SIGN_EMOJI[profile.sign],label:"Signo",valor:profile.sign});
            shareContent("raioX", {
              nome: profile?.name || "Você",
              resultados,
            }, `☢️ Meu Raio X completo no KomparAI:\n\n${resultados.map(r=>`${r.emoji} ${r.label}: ${r.valor}`).join("\n")}`);
          }} style={{background:"#10B981",color:"#fff",border:"none",borderRadius:20,padding:"8px 14px",fontSize:13,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:6}}>📤 Compartilhar</button>
        </div>
        <div style={{fontSize:12,color:"#9CA3AF",marginBottom:16}}>Tudo que você descobriu sobre si mesmo</div>

        {/* Identidade */}
        <Card style={{background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",color:"#fff",marginBottom:14}}>
          <div style={{fontSize:11,color:"#34D399",fontWeight:700,textTransform:"uppercase",letterSpacing:1.5,marginBottom:12}}>👤 Identidade</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
            {[
              {l:"Nome",v:profile?.name||"—"},
              {l:"Gênero",v:profile?.gender==="M"?"👨 Homem":profile?.gender==="F"?"👩 Mulher":profile?.gender==="X"?"🌈 Outro":"—"},
              {l:"Nascimento",v:profile?.birthDay?`${profile.birthDay}/${profile.birthMonth}/${profile.birthYear||"?"}`:"—"},
              {l:"Signo",v:profile?.sign?`${SIGN_EMOJI[profile.sign]} ${profile.sign}`:"—"},
            ].map(item=>(
              <div key={item.l} style={{background:"#ffffff10",borderRadius:10,padding:"10px"}}>
                <div style={{fontSize:9,color:"#9CA3AF",textTransform:"uppercase",letterSpacing:1,marginBottom:3}}>{item.l}</div>
                <div style={{fontSize:13,fontWeight:700,color:"#fff"}}>{item.v}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Físico */}
        {profile?.height && (
          <Card style={{marginBottom:14}}>
            <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>📏 Físico</div>
            <div style={{display:"flex",gap:10}}>
              <div style={{flex:1,background:"#F9FAFB",borderRadius:10,padding:"10px",textAlign:"center"}}>
                <div style={{fontSize:22,fontWeight:900,color:"#10B981"}}>{profile.height}cm</div>
                <div style={{fontSize:10,color:"#9CA3AF"}}>Altura</div>
              </div>
            </div>
          </Card>
        )}

        {/* Testes psicológicos */}
        <Card style={{marginBottom:14}}>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>🧠 Perfil Psicológico</div>
          {[
            {l:"Temperamento",v:TEMPE_LABELS[profile?.temperamento],cor:"#EF4444"},
            {l:"Personalidade",v:PER_LABELS[profile?.personalidade],cor:"#6366F1"},
            {l:"Amor",v:AMOR_LABELS[profile?.amor],cor:"#EC4899"},
            {l:"Político",v:POL_LABELS[profile?.politico],cor:"#3B82F6"},
            {l:"Profissional",v:PROF_LABELS[profile?.profissional],cor:"#10B981"},
          ].filter(i=>i.v).map(item=>(
            <div key={item.l} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #F3F4F6"}}>
              <div style={{fontSize:12,color:"#9CA3AF",fontWeight:600}}>{item.l}</div>
              <div style={{fontSize:13,fontWeight:700,color:item.cor}}>{item.v}</div>
            </div>
          ))}
          {testesFEITOS.filter(k=>["temperamento","amor","politico","personalidade","profissional"].includes(k)).length===0 && (
            <div style={{fontSize:13,color:"#9CA3AF",textAlign:"center",padding:"10px 0"}}>Faça os testes para preencher aqui</div>
          )}
        </Card>

        {/* Astrológico */}
        <Card style={{marginBottom:14}}>
          <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>✨ Mapa Astral</div>
          {[
            {l:"Signo Ocidental",v:profile?.sign?`${SIGN_EMOJI[profile.sign]} ${profile.sign}`:null},
            {l:"Animal Chinês",v:animal?`${ANIMAIS_CHINESES[animal]?.emoji} ${ANIMAIS_CHINESES[animal]?.animal}`:null},
            {l:"Rashi Védico",v:rashi?`${RASHIS_VEDICOS[rashi]?.emoji} ${rashi}`:null},
            {l:"Numerologia",v:numInfo?`${numInfo.emoji} Número ${numInfo.numero} — ${numInfo.nome}`:null},
            {l:"Lua de Hoje",v:`${lua.emoji} ${lua.fase}`},
          ].filter(i=>i.v).map(item=>(
            <div key={item.l} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #F3F4F6"}}>
              <div style={{fontSize:12,color:"#9CA3AF",fontWeight:600}}>{item.l}</div>
              <div style={{fontSize:13,fontWeight:700,color:"#0A1F1A"}}>{item.v}</div>
            </div>
          ))}
        </Card>

        {/* Espiritual */}
        {profile?.tradicao && (
          <Card style={{marginBottom:14}}>
            <div style={{fontSize:11,color:"#9CA3AF",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:10}}>🙏 Espiritualidade</div>
            <div style={{display:"flex",gap:10,alignItems:"center"}}>
              <span style={{fontSize:30}}>{TRADICAO_EMOJI[profile.tradicao]||"🌟"}</span>
              <div>
                <div style={{fontSize:15,fontWeight:800}}>{profile.tradicao}</div>
                <div style={{fontSize:12,color:"#9CA3AF"}}>Tradição que mais ressoa com você</div>
              </div>
            </div>
          </Card>
        )}

        {/* Testes pendentes */}
        {testesFEITOS.length < TODOS_CAMPOS.length && (
          <div style={{background:"#FFF7ED",borderRadius:16,padding:"14px",marginBottom:14}}>
            <div style={{fontSize:12,fontWeight:700,color:"#92400E",marginBottom:6}}>📊 Complete seu Raio X</div>
            <div style={{fontSize:12,color:"#92400E"}}>{TODOS_CAMPOS.length - testesFEITOS.length} testes pendentes para completar seu perfil.</div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      {onBack && <button onClick={onBack} style={{background:"transparent",border:"none",color:"#9CA3AF",fontSize:13,cursor:"pointer",padding:0,marginBottom:14,fontFamily:"inherit"}}>← Voltar ao KomparAI</button>}
      <div style={{fontSize:18,fontWeight:800,marginBottom:14}}>👤 Meu Perfil</div>

      {/* Botão Raio X */}
      {testesFEITOS.length >= 2 && (
        <Card onClick={()=>setShowRaioX(true)} style={{background:"linear-gradient(135deg,#0A1F1A,#1a3a2a)",cursor:"pointer",marginBottom:14}}>
          <div style={{display:"flex",gap:14,alignItems:"center"}}>
            <div style={{width:52,height:52,borderRadius:16,background:"#10B98130",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26}}>☢️</div>
            <div style={{flex:1}}>
              <div style={{fontSize:16,fontWeight:800,color:"#fff"}}>Meu Raio X</div>
              <div style={{fontSize:12,color:"#6EE7B7",marginTop:2}}>Visão completa do que você descobriu</div>
              <div style={{fontSize:10,color:"#34D399",marginTop:4}}>{testesFEITOS.length} de {TODOS_CAMPOS.length} perfis completos</div>
            </div>
            <span style={{fontSize:18,color:"#10B981"}}>→</span>
          </div>
        </Card>
      )}
      {testesFEITOS.length < 2 && (
        <div style={{background:"#F9FAFB",borderRadius:14,padding:"12px 14px",marginBottom:14,fontSize:12,color:"#9CA3AF"}}>
          ☢️ Complete pelo menos 2 testes para liberar o Raio X
        </div>
      )}
      <Label>Nome</Label>
      <input value={form.name||""} onChange={e=>set("name",e.target.value)} placeholder="Seu nome" style={{...inp,marginBottom:14}}/>
      <Label>Gênero</Label>
      <div style={{display:"flex",gap:10,marginBottom:14}}>
        {[{v:"M",l:"👨 Homem"},{v:"F",l:"👩 Mulher"},{v:"X",l:"🌈 Outro"}].map(o=>(
          <button key={o.v} onClick={()=>set("gender",o.v)} style={{
            flex:1,padding:"12px 8px",borderRadius:12,border:`1.5px solid ${form.gender===o.v?"#10B981":"#E5E7EB"}`,
            background:form.gender===o.v?"#10B981":"#fff",
            color:form.gender===o.v?"#fff":"#0A1F1A",
            fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>{o.l}</button>
        ))}
      </div>
      <Label>Data de nascimento</Label>
      <div style={{display:"flex",gap:6,marginBottom:14,width:"100%"}}>
        <input type="number" inputMode="numeric" value={form.birthDay||""}
          onChange={e=>set("birthDay",sanitizeInt(e.target.value))}
          onBlur={e=>set("birthDay",clampInt(e.target.value,1,31))}
          placeholder="Dia"
          style={{flex:"0 0 22%",minWidth:0,background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:10,color:"#0A1F1A",fontSize:14,padding:"12px 8px",boxSizing:"border-box",fontWeight:500,textAlign:"center"}}/>
        <select value={form.birthMonth||""} onChange={e=>set("birthMonth",parseInt(e.target.value)||"")}
          style={{flex:"1 1 auto",minWidth:0,background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:10,color:form.birthMonth?"#0A1F1A":"#9CA3AF",fontSize:14,padding:"12px 6px",boxSizing:"border-box",WebkitAppearance:"none"}}>
          <option value="">Mês</option>
          {MONTHS.slice(1).map((m,i)=><option key={i+1} value={i+1}>{m}</option>)}
        </select>
        <input type="number" inputMode="numeric" value={form.birthYear||""}
          onChange={e=>set("birthYear",sanitizeInt(e.target.value))}
          onBlur={e=>set("birthYear",clampInt(e.target.value,1900,new Date().getFullYear()))}
          placeholder="Ano"
          style={{flex:"0 0 28%",minWidth:0,background:"#fff",border:"1.5px solid #E5E7EB",borderRadius:10,color:"#0A1F1A",fontSize:14,padding:"12px 8px",boxSizing:"border-box",fontWeight:500,textAlign:"center"}}/>
      </div>
      {sign && (
        <div style={{display:"flex",alignItems:"center",gap:10,background:"#F5F3FF",borderRadius:12,padding:"10px 14px",marginBottom:14}}>
          <span style={{fontSize:20}}>{SIGN_EMOJI[sign]}</span>
          <div>
            <div style={{fontSize:11,color:"#7C3AED",fontWeight:700}}>Signo calculado</div>
            <div style={{fontSize:14,fontWeight:800}}>{sign}</div>
          </div>
        </div>
      )}
      {vida && (
        <Card style={{background:"linear-gradient(135deg,#F0FDF4,#fff)",border:"1px solid #BBF7D0"}}>
          <div style={{fontSize:11,color:"#059669",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:12}}>🎂 Sua Jornada</div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {[
              {icon:"🎂",l:"Idade",v:`${vida.anos}a ${vida.meses}m ${vida.dias}d`},
              {icon:"📅",l:"Nasceu na",v:vida.diaSemNasc},
              {icon:"⏳",l:"Dias vividos",v:`${vida.totalDias.toLocaleString("pt-BR")}`},
              {icon:"🎉",l:"Próx. aniv.",v:`em ${vida.diasParaAniv}d`},
            ].map(item=>(
              <div key={item.l} style={{background:"#fff",borderRadius:12,padding:"12px",border:"1px solid #E5E7EB"}}>
                <div style={{fontSize:16,marginBottom:3}}>{item.icon}</div>
                <div style={{fontSize:10,color:"#9CA3AF",fontWeight:600}}>{item.l}</div>
                <div style={{fontSize:12,fontWeight:800,lineHeight:1.3}}>{item.v}</div>
              </div>
            ))}
          </div>
        </Card>
      )}
      <Label>Altura</Label>
      <div style={{display:"flex",gap:10,marginBottom:14}}>
        <input type="number" inputMode="numeric" value={form.height||""}
          onChange={e=>set("height",sanitizeInt(e.target.value))}
          onBlur={e=>set("height",clampInt(e.target.value,50,250))}
          placeholder="Altura (cm)" style={{...inp,flex:1}}/>
      </div>
      <Label>Tradição Espiritual</Label>
      <select value={form.tradicao||""} onChange={e=>set("tradicao",e.target.value)}
        style={{...inp,marginBottom:14,color:form.tradicao?"#0A1F1A":"#9CA3AF",WebkitAppearance:"none"}}>
        <option value="">Selecione (ou faça o teste)</option>
        {TRADICOES_DISPONIVEIS.map(t=><option key={t} value={t}>{TRADICAO_EMOJI[t]||"🌟"} {t}</option>)}
      </select>
      {numInfo && (
        <div style={{background:"#F0FDF4",borderRadius:14,padding:"14px",marginBottom:14}}>
          <div style={{fontSize:11,color:"#059669",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:6}}>🔢 Numerologia</div>
          <div style={{fontSize:15,fontWeight:800,color:"#0A1F1A"}}>{numInfo.emoji} Número {numInfo.numero} — {numInfo.nome}</div>
          <div style={{fontSize:12,color:"#5A6B68",marginTop:4}}>{numInfo.essencia}</div>
        </div>
      )}
      <Btn label="💾 Salvar perfil" onClick={()=>onSave({...form, sign})}/>
      <div style={{marginTop:24,textAlign:"center"}}>
        <button onClick={onReset} style={{background:"transparent",border:"none",color:"#DC2626",fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:"inherit",padding:8}}>
          🗑️ Limpar todos os dados e recomeçar
        </button>
      </div>
    </div>
  );
}

// ============================================================
// APP PRINCIPAL
// ============================================================
export default function App() {
  const initial = (() => { const s = loadProfile(); return s && s.name ? s : null; })();
  const [screen,setScreen] = useState(initial ? "app" : "onboarding");
  const [tab,setTab] = useState("komparai");
  const [testesInitialAba,setTestesInitialAba] = useState(null);
  const [testesAutoStart,setTestesAutoStart] = useState(null);
  const [espiritualidadeInitialAba,setEspiritualidadeInitialAba] = useState(null);
  const [profile,setProfile] = useState(initial);
  const [toast,setToast] = useState({msg:"",type:"success"});

  useEffect(()=>{ saveProfileLS(profile); }, [profile]);

  // Limpa flags de "initialAba" quando troca de tab (para não reabrir o teste sempre que entrar em Alma)
  useEffect(()=>{
    if (tab !== "espiritualidade") setEspiritualidadeInitialAba(null);
    if (tab !== "testes") { setTestesInitialAba(null); setTestesAutoStart(null); }
  }, [tab]);

  const showToast = (msg,type="success") => setToast({msg,type});
  const hideToast = () => setToast({msg:"",type:"success"});

  const finishOnboarding = (data) => { setProfile(data); setScreen("app"); showToast(`Bem-vindo${data.gender==="F"?"a":""}, ${data.name}!`); };
  const saveProfile = (p) => { setProfile(p); showToast("Perfil salvo!"); };
  const saveToProfile = (extra) => { setProfile(prev => ({...(prev||{}), ...extra})); showToast("Salvo no perfil!"); };
  const onTestDone = (d) => setProfile(prev => ({...(prev||{}), temperamento:d}));
  const resetApp = () => { if (window.confirm("Limpar todos os dados?")) { saveProfileLS(null); setProfile(null); setScreen("onboarding"); }};
  const goCoincidence = () => setTab("komparai");

  const NAV = [
    {id:"komparai",emoji:"🪞",label:"KomparAI"},
    {id:"testes",emoji:"🧠",label:"Testes"},
    {id:"home",emoji:"🏠",label:"Home"},
    {id:"astral",emoji:"✨",label:"Astral"},
    {id:"espiritualidade",emoji:"🙏",label:"Alma"},
  ];

  if (screen === "onboarding") return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      <style>{`*{box-sizing:border-box;font-family:'Sora',sans-serif}input:focus,select:focus{outline:none!important;border-color:#10B981!important}select{-webkit-appearance:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{-webkit-appearance:none}`}</style>
      <Onboarding onDone={finishOnboarding}/>
      <Toast message={toast.msg} type={toast.type} onClose={hideToast}/>
    </>
  );

  return (
    <div style={{minHeight:"100vh",background:"#F8FAFB",fontFamily:"'Sora',sans-serif",paddingBottom:90}}>
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      <style>{`*{box-sizing:border-box}@keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}input,select,button{font-family:'Sora',sans-serif}input:focus,select:focus{outline:none!important;border-color:#10B981!important}select{-webkit-appearance:none}::-webkit-inner-spin-button,::-webkit-outer-spin-button{-webkit-appearance:none}`}</style>
      <div style={{maxWidth:440,margin:"0 auto",padding:"20px 16px 0",animation:"fadeUp .35s"}}>
        {tab==="komparai" && <CoincidenceTest profile={profile} onSaveToProfile={saveToProfile} onBack={()=>setTab("komparai")} goPerfil={()=>setTab("perfil")} goTest={(key)=>{ setTestesAutoStart(key); setTab("testes"); }}/>}
        {tab==="home" && <HomeScreen profile={profile} goCoincidence={()=>setTab("komparai")} goTest={()=>setTab("testes")} goEspiritualidade={()=>setTab("espiritualidade")}/>}
        {tab==="testes" && <TestesScreen profile={profile} onComplete={onTestDone} goCoincidence={()=>setTab("komparai")} onSaveExtra={saveToProfile} initialAba={testesInitialAba} autoStart={testesAutoStart} goAstral={testesInitialAba==="humor" ? ()=>{setTestesInitialAba(null); setTab("astral");} : null} goEspiritualidadeTeste={()=>{setEspiritualidadeInitialAba("perguntas"); setTab("espiritualidade");}}/>}
        {tab==="coincidencia" && <CoincidenceTest profile={profile} onSaveToProfile={saveToProfile} onBack={()=>setTab("komparai")} goTest={(key)=>{ setTestesAutoStart(key); setTab("testes"); }}/>}
        {tab==="astral" && <AstralScreen profile={profile} goHumor={()=>{setTestesInitialAba("humor"); setTab("testes");}}/>}
        {tab==="espiritualidade" && <EspiritualidadeScreen profile={profile} onSaveTradicao={(t)=>saveToProfile({tradicao:t})} initialTesteAba={espiritualidadeInitialAba}/>}
        {tab==="perfil" && <PerfilScreen profile={profile} onSave={saveProfile} onReset={resetApp} onBack={()=>setTab("komparai")}/>}
      </div>
      <div style={{position:"fixed",bottom:0,left:0,right:0,background:"#fff",borderTop:"1px solid #F0F0F0",display:"flex",justifyContent:"space-around",alignItems:"center",padding:"8px 0 20px",boxShadow:"0 -4px 20px #0000000a",zIndex:100}}>
        {NAV.map(n=>(
          <button key={n.id} onClick={()=>setTab(n.id)} style={{background:"transparent",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:3,padding:"6px 8px",borderRadius:12,fontFamily:"inherit"}}>
            <span style={{fontSize:20,filter:tab===n.id||(tab==="coincidencia"&&n.id==="komparai")||(tab==="perfil"&&n.id==="komparai")?"none":"grayscale(1) opacity(.5)"}}>{n.emoji}</span>
            <span style={{fontSize:9,fontWeight:700,color:tab===n.id||(tab==="coincidencia"&&n.id==="komparai")||(tab==="perfil"&&n.id==="komparai")?"#10B981":"#9CA3AF",letterSpacing:.3,textTransform:"uppercase"}}>{n.label}</span>          </button>
        ))}
      </div>
      <Toast message={toast.msg} type={toast.type} onClose={hideToast}/>
    </div>
  );
}
