// 64446165062
// 46320480033

/**  
 *  1) passo é multiplicar cada numero pelo indice inverso limitado a posição 8 do array
 *  2) somar o resultado
 *  3) pegar o Primeiro digito verificar, para isso, 11 - total % 11. Não pode ser maior que nove
 *     se o digito for maior que 9, então será 0 como digito verificador
 *  4) multiplicar cada numero pelo indice inverso limitado a posição 9 do array
 *     se o digito for maior que 9, então será 0 como digito verificador
 */

const cpf = '64446165062';
let cpfArray = cpf.split('');
let total = 0;
let primeiroDigito = 0;
let segundoDigito = 0;
let cpfNew = cpf.split('',9);

cpfArray.forEach((element, index)=> total = index <= 8 ? total += (Number(element) * (10 - index)) : total);
primeiroDigito = 11 - (total % 11) > 9 ? 0 : 11 - (total % 11);

total = 0;

cpfArray.forEach((element, index)=> total = index <= 9 ? total += (Number(element) * (11 - index)) : total);
segundoDigito = 11 - (total % 11) > 9 ? 0 : 11 - (total % 11)

cpfNew.push(primeiroDigito.toString(), segundoDigito.toString());

if (JSON.stringify(cpfNew) === JSON.stringify(cpfArray)) return console.log(`Boa garoto!!`);