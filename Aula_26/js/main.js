// desta forma, pega o valor baseado por id do input
const form = document.querySelector('#form-imc');

// Função responsável por previr de enviar o formulário
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputPeso = e.target.querySelector('#input-peso');
    const inputAltura = e.target.querySelector('#input-altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResult('Peso inválido!', false);
        return;
    };

    if (!altura) {
        setResult('Altura inválida!', false);
        return;
    };

    const imc = getImc(peso, altura);
    setResult(faixaIMC(imc), true);
});

// Função responsável por criar um parágrafo e classe com uma mensagem
function creatParagraph() {
    const p = document.createElement('p');
    return p;
};

// Faz a validação de quanto é o IMC e cria a mensagem
function faixaIMC(imc) {
    const arrayMensagens = [
        'Abaixo do peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade grau 1',
        'Obesidade grau 2',
        'Obesidade grau 3'
    ];
    if (imc >= 39.9) return `Seu IMC é: ${imc} ${arrayMensagens[5]}`;
    if (imc >= 34.9) return `Seu IMC é: ${imc} ${arrayMensagens[4]}`;
    if (imc >= 29.9) return `Seu IMC é: ${imc} ${arrayMensagens[3]}`;
    if (imc >= 24.9) return `Seu IMC é: ${imc} ${arrayMensagens[2]}`;
    if (imc >= 18.5) return `Seu IMC é: ${imc} ${arrayMensagens[1]}`;
    if (imc < 18.5) return `Seu IMC é: ${imc} ${arrayMensagens[0]}`;
};

// Função responsável por calcular o IMC
function getImc(peso, altura) {
    const result = (peso / (altura * altura)).toFixed(2);
    return result
};

// Função responsável por acrescentar/injetar o resultado no html
function setResult(mensagem, isValid) {
    const result = document.querySelector(".resultado");
    result.innerHTML = "";
    const paragrafo = creatParagraph();

    if (isValid) paragrafo.classList.add('resultado-true');
    if (!isValid) paragrafo.classList.add('resultado-false');

    paragrafo.innerHTML = mensagem;
    result.appendChild(paragrafo);
};

