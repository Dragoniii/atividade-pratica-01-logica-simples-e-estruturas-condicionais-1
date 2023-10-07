//11. Crie um algoritmo que armazene um número inteiro positivo, e gere um alerta com as seguintes mensagens:
//a. “Número é par!”, se o valor armazenado for par;
//b. “Número é impar!”, se o valor armazenado for ímpar;

function num() {
  const numero = Math.random();
  return numero * 1000;
}

const numero = parseInt(num());

if (isNaN(numero)){
    document.write(`O valor não é um número`);
} else if (numero % 2 !== 0){
    document.write(`O número ${numero} é ímpar.`);
} else {
    document.write(`O número ${numero} é par.`);
}
document.write(`<br>`);