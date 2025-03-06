const data = new Date();
const diaSemana = data.getDay();

if (diaSemana === 1) return console.log(`Hoje é Segunda-Feira`);
if (diaSemana === 2) return console.log(`Hoje é Terça-Feira`);
if (diaSemana === 3) return console.log(`Hoje é Quarta-Feira`);
if (diaSemana === 4) return console.log(`Hoje é Quinta-Feira`);
if (diaSemana === 5) return console.log(`Hoje é Sexta-Feira`);
if (diaSemana === 6) return console.log(`Hoje é Sábado`);
if (diaSemana === 0) return console.log(`Hoje é Domingo`);