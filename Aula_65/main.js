const numeros = [5, 1, 50, 18, 30, 80, 1, 2, 7, 200, 45, 31, 17];
// const numerosFiltrados = numeros.filter();
const numerosOrdenados = [];
let menorElemento = numeros[0];

for (let index = 0; index < numeros.length; index++) {

    if (numeros[index] < menorElemento) {
        menorElemento = numeros[index];
        numerosOrdenados.unshift(numeros[index]);
    } else {
        if (numerosOrdenados.length === 0) {
            numerosOrdenados.push(numeros[index]);
        } else if (numeros[index] > numerosOrdenados[numerosOrdenados.length - 1]) {
            numerosOrdenados.push(numeros[index]);
        } else {
            for (let index2 = 0; index2 < numerosOrdenados.length; index2++) {
                if (numeros[index] < numerosOrdenados[index2]) {
                    numerosOrdenados.splice(index2, 0, numeros[index]);
                    break;
                };
            };
        };
    }
}

console.log(numerosOrdenados);