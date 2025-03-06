class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    };

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    };

    handleSubmit(e) {
        e.preventDefault();
        const isValidField = this.checkField();
        const senhaValida = this.senhaIsValid();

        if (isValidField && senhaValida) {
            this.formulario.submit();
        };
    };

    checkField() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        };

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            let label = campo.previousElementSibling.innerText;
            if (!campo.value) {
                this.creatErro(campo, `"${label}" não pode estar em branco`);
                valid = false
            };

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            };

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            };
        };
        return valid;
    };

    creatErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    };

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.valida()) {
            this.creatErro(campo, 'CPF inválido');
            return false;
        };
        return true;
    };

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if (usuario.legth > 12 || usuario.length < 3) {
            this.creatErro(campo, 'Nome de usuário precisa ter entre 3 e 12 caracteres');
            valid = false;
        };

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.creatErro(campo, 'Nome de usuário precisa ter apenas letras e/ou números');
            valid = false;
        };

        return valid;
    };

    senhaIsValid(){
        let valid = true;
        const senha = this.formulario.querySelector('.password');
        const senha2 = this.formulario.querySelector('.password2');

        if (senha.value !== senha2.value){
            this.creatErro(senha, 'Senhas não conferem');
            this.creatErro(senha2, 'Senhas não conferem');

            valid = false;
        };
        
        if(senha.value.length < 6 || senha.value.length > 12){
            this.creatErro(senha, 'Senha precisa ter entre 6 e 12 caracteres');

            valid = false;
        };

        return valid;
    };
};

const valida = new ValidaFormulario();