const nome = 'Caique';
const obj = { nome };
const novoObj = { ...obj };
console.log(novoObj);
console.log('aaaa');

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
};

// npx babel js/main.js -o bundle.js --presets=@babel/env para gerar o bundles