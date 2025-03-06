/** 
 * Nesta função, que é uma classe, é criado um objeto que tem uma property chamada 'CPF LIMPO
 * a property tem um método get que utiliza regex para retirar qualquer coisa diferente de númerico
 * e logo, retorna o CPF sem caracteres especiais
*/
function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', { // this = objeto que está sendo criado, cpfLimpo é a property
        get: function () {
            return cpfEnviado.replace(/\D+/g, ''); // '/\D+/g' = representa tudo diferente de números
        }
    })
};

/**
 * este é um método que adiciona dentro do __proto__ um método chamado valida
 * o valida é o cara que fará algumas validações
 */
ValidaCPF.prototype.valida = function () {

    if (typeof this.cpfLimpo === 'undefined') return false; // valida se é vázio
    if (this.cpfLimpo.length !== 11) return false; // CPF tem apenas 11 elementos
    if (this.isSequencia()) return false; // caso o user defina cpf com 11 sequenciais, retorna falso. isSequencia é criação própria

    const cpfParcial = this.cpfLimpo.slice(0, -2); // retira os dois ultimos digitos
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2; // concatena os dois digitos verificados 

    return novoCpf === this.cpfLimpo; // valida e retorna a similaridade 
};

/**
 * Este método criará um digito. A criação foi feita para deixar de forma dinâmica
 * também adiciona o método ao __proto__ do objeto
 */
ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial); // converte em array
    let regressivo = cpfArray.length + 1; // regressivo recebe o tamanho do array + 1, para iniciar no 10
    const total = cpfArray.reduce((ac, val) => { // reduce é usado para somar os valores do array
        ac += (Number(val) * regressivo); // multiplica o valor do array pelo indice(regressivo) e soma dentro do ACumulador
        regressivo--; // decremento
        return ac
    }, 0); // inicia o acumulador em 0

    const digito = 11 - (total % 11); // formulá verificadora do Brasil
    return digito > 9 ? '0' : String(digito); // caso seja maior que 9, retorna 0. Logica Brasil
};

/**
 * Método que valida se é sequencial, pois CPF não pode ser sequencial
 */
ValidaCPF.prototype.isSequencia = function() {
    // pega o primeiro digito e repete até o tamanho do CPF, fazendo comparação
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
};

// const cpf = new ValidaCPF('463.204.800-33');
const cpf = new ValidaCPF('111.111.111-00');
console.log(cpf.valida());