function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaClique();
        this.pressEnter();
    };

    this.pressEnter = () => {
        document.addEventListener("keypress", (e) => {
            if (e.keyCode === 13) {
                this.eqNum();
            };
        })
    };

    this.capturaClique = () => {
        document.addEventListener('click', (e) => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-del')) this.delNumDisplay();
            if (el.classList.contains('btn-eq')) this.eqNum();
            if (el.classList.contains('btn-clear')) this.clearNumDisplay();
        });
    };

    this.addNumDisplay = (el) => {
        this.display.value += el.innerText;
        this.display.focus();
    };
    
    this.delNumDisplay = () => this.display.value = this.display.value.slice(0, -1);;
    this.clearNumDisplay = () => this.display.value = '';
    this.eqNum = () => {
        let conta = this.display.value;
        try {
            conta = eval(conta);

            if (!conta) {
                alert("Conta inválida");
                return;
            }
            this.display.value = String(conta);
        } catch (e) {
            alert('Conta inválida')
            return;
        };
    };
};

const calculadora = new Calculadora();
calculadora.inicia();