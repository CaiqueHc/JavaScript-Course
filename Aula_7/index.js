const nome = "Caique";
const sobreNome = "Carlos";
const idade = 28;
const peso = 70;
const altura = 1.67;
let anoNascimento = 2025 - idade;
let imc = peso / (altura * altura);

console.log(nome, 'tem', idade, 'anos, pesa', peso, 'kg, tem', altura, 'de altura e seu IMC é de', imc);
console.log("outra forma de concatenar");
console.log(`${nome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu IMC é de ${imc}`);