function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log('Saldo insuficiente');
        // this.verSaldo();
        return;
    }
    this.saldo -= valor;
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    // this.verSaldo();
};

Conta.prototype.verSaldo = function () {
    console.log(
        `Ag/c.: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
};

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log('Saldo insuficiente');
        // this.verSaldo();
        return;
    }
    this.saldo -= valor;
};

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
};

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cc = new ContaCorrente(111, 123456, 0, 100);
cc.verSaldo();
cc.sacar(200);
cc.verSaldo();
cc.sacar(200);