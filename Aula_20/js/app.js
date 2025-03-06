// Função principal para executar o código
function meuEscopo(){
    const form = document.querySelector(".formulario"); // seleciona o formulário baseando na classe definida no html
    const resultado = document.querySelector(".resultado"); // seleciona a div onde será exibido o resultado
    const arrayDados = []; // array para armazenar os dados

    // Essa é uma forma alternativa porém mais antiga 
    // form.onSubmit = function(evento){
    //     evento.preventDefault(); // impede que a pagina seja atualizada a qualquer ação do formulário
    // };

    function recebeEventoForm(evento){
        evento.preventDefault(); // impede que a pagina seja atualizada a qualquer ação do formulário
        
        // seleciona os inputs do formulário pela classe definida 
        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        // adiciona dados ao array
        arrayDados.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        // apenda dados na div resultado
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} - ${peso.value}kg - ${altura.value}m</p>`;
    };

    // adiciona um evento de submit ao formulário
    form.addEventListener('submit',recebeEventoForm);
};

meuEscopo();