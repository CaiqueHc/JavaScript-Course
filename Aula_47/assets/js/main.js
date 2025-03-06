const temporizador = document.querySelector('.temporizador');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const zero = document.querySelector('.zero');
const bodyStyle = getComputedStyle(document.body);
let segundos = 0;
let timer;

/**
 * existe uma forma mais performática de fazer o trecho
 * 
 * document.addEventListener('click', function(evento){
 *  const elemento = evento.target;
 *  
 *  if(elemento.target.contains('pause')){
 *      faz o que tem que ser feito para o pause;
 *  }else if(elemento.target.contains('zero'))
 *      faz o que tem que ser feito para o pause;
 * });
 */

start.addEventListener('click', function (e) {
    temporizador.classList.remove('stopped');
    clearInterval(timer);
    startTimer();
});

pause.addEventListener('click', function (e) {
    temporizador.classList.add('stopped');
    clearInterval(timer);
});

zero.addEventListener('click', function (e) {
    temporizador.classList.remove('stopped');
    clearInterval(timer);
    temporizador.innerHTML = "00:00:00";
    segundos = 0;
});

function getTimeSeconds(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-BR",{
        hour12: false,
        timeZone: 'UTC'
    });
};

function startTimer(){
    timer = setInterval(function() {
        segundos++;
        temporizador.innerHTML = getTimeSeconds(segundos); 
    },1000);
};