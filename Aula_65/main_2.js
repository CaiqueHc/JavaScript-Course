const numeros = [5, 1, 50, 18, 30, 80, 1, 2, 7, 200, 45, 31, 17];

// function callbackFilter(valor, indice, aray){
//     return valor > 10;
// };

const numerosFiltrados = numeros.filter((valor) => valor > 10);
// console.log(numerosFiltrados);

const pessoas = [
    { nome: 'Caique', idade: 17 },
    { nome: 'Marcos', idade: 15 },
    { nome: 'Andre' , idade: 33 },
    { nome: 'Paulo' , idade: 66 },
    { nome: 'Jose'  , idade: 12 },
    { nome: 'Ana'   , idade: 25 },
    { nome: 'Maria' , idade: 98 }
];

const pessoasNomeGrande = pessoas.filter((valor) => valor.nome.length > 5);
// console.log(pessoasNomeGrande);

const pessoasCinquentaAnos = pessoas.filter((valor) => valor.idade > 50);
// console.log(pessoasCinquentaAnos); 

const pessoasNomeFinalA = pessoas.filter((valor) => valor.nome.toLowerCase().endsWith('a'));
// console.log(pessoasNomeFinalA);