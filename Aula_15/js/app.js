const numero = Number(prompt("Digite um número: "));
const idTexto = document.getElementById("texto");
const idNumero = document.getElementById("num-tit");

idNumero.innerHTML = numero;
texto.innerHTML = `<p>Seu número +2 dois é igual a ${numero + 2}</p>`;
texto.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p>É inteiro?: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>É Nan?: ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para cima ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais ${numero.toFixed(2)}</p>`;