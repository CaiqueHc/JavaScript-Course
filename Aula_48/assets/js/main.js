// ############  Escopo Global ############

const inputTarefa = document.querySelector(".input-tarefa");
const btnAdd = document.querySelector(".btn-add");
const tarefas = document.querySelector(".tarefas")

// evento que valida se apertou enter
inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) { // tecla enter
        if (!inputTarefa.value) return; // valida se é diferente de vazio
        criaTarefa(inputTarefa.value);
    };
});

// evento de clique no botão apagar
document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains('Apagar')) {
        el.parentElement.remove(); // remove o pai do botão apagar
        inputTarefa.focus()
        saveTarefa()
    };
});

// ############ Fim ############


// Função principal do script
function main() {
    reloadTarefas();

    btnAdd.addEventListener('click', function () {
        if (!inputTarefa.value) return; // valida se é diferente de vazio
        criaTarefa(inputTarefa.value);
    });
};

// Cria um elemento e cria o botão atribuindo class e título
function criaBotao(li) {
    li.innerText += " ";
    const botaoDel = document.createElement("button");
    botaoDel.innerText = "Apagar";
    botaoDel.setAttribute("class", "Apagar");
    botaoDel.setAttribute("title", "Apagar esta tarefa");
    li.appendChild(botaoDel);
};

// Limpa o 'li' do html com o botão apagar
function delContent() {
    const element = document.querySelector(".Apagar");
};

// Limpa o conteúdo do input
function clearInput() {
    inputTarefa.value = "";
    inputTarefa.focus(); // posiciona o cursor de volta ao input
};

// Cria um elemento do tipo lista (li)
function criaLi() {
    const li = document.createElement('li');
    return li
};

// Salva o que já foi inserido na lista dentro do store do navegador
function saveTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace("Apagar", "").trim(); // tira o apagar e tira espaço
        listaTarefas.push(tarefaTexto); // apenda no final do array
    };

    const tarefaJson = JSON.stringify(listaTarefas); // transforma array em json
    localStorage.setItem('tarefas', tarefaJson); // salvo no storage
}

// Cria tarefa e appenda no HTML
function criaTarefa(textoInput) {
    const li = criaLi();

    li.innerText = textoInput;
    tarefas.appendChild(li);
    criaBotao(li);
    clearInput();
    saveTarefa();
};

// Recarrega os dados salvo previamento no storage do navegador
function reloadTarefas() {
    const tarefas = localStorage.getItem("tarefas"); // recarrega os dados da storage
    const listaTarefas = JSON.parse(tarefas); // decodifica para array o json

    for(let tarefa of listaTarefas){
        criaTarefa(tarefa);
    };
}

main();
