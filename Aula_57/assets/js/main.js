function criaCalculadora() {
    return {
        /// Propertis
        display: document.querySelector('.display'),

        /// Method
        inicia() {
            this.cliqueBotoes();
            this.pressEnter();
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        apagaContent() {
            this.display.value = "";
        },

        delContent() {
            this.display.value = this.display.value.slice(0, -1);
        },

        pressEnter() {
            this.display.addEventListener("keyup", (e) => {
                if (e.keyCode === 13) {
                    this.igual();
                };
            })
        },

        igual() {
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
        },

        cliqueBotoes() {
            document.addEventListener("click", (e) => {
                const el = e.target;

                if (el.classList.contains("btn-num")) {
                    this.btnParaDisplay(el.innerText);
                };

                if (el.classList.contains("btn-clear")) {
                    this.apagaContent();
                };

                if (el.classList.contains("btn-del")) {
                    this.delContent();
                };

                if (el.classList.contains("btn-eq")) {
                    this.igual();
                };
            });
        },
    }
};


const calculadora = criaCalculadora();
calculadora.inicia();