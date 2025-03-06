// Função responsável por acrescentar/injetar o resultado no html
function setResult() {
    const resul     = document.querySelector(".container h1");
    const data      = new Date();
    const ano       = data.getFullYear();
    const diaMes    = data.getDate();
    const minutos   = data.getMinutes() < 10 ? `0${data.getMinutes()}` : data.getMinutes();
    const horas     = data.getHours() < 10 ? `0${data.getHours()}` : data.getHours();
    const diaSemana = [ 'Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira',
                        'Sexta-Feira','Sabádo'];
    const mes       = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho',
                        'Agosto','Setembro','Outubro','Novembro','Dezembro'];

    resul.innerHTML =   `${diaSemana[data.getDay()]}, ${diaMes} de` +
                        `${mes[data.getMonth()]} de ${ano}, ${horas}:${minutos}`;
};

function setResult2(){
    const h1 = document.querySelector('.container h1');
    const data = new Date();
    h1.innerHTML += `<p>${data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'})}</p>`;
};

setResult();
setResult2();
