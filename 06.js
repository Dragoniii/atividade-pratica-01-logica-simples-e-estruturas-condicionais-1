//6. Desenvolva um algoritmo que armazene o valor 10 em uma variável A e o valor 20 em uma variável B. A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdos fazendo com que o valor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaram armazenados nas variáveis.

let a = 10
let b = 20

document.write(`Variável A: ${a}. Variável B: ${b}.`);

document.write(`<br>`);

let c = a
a = b
b = c

document.write(`Variável A: ${a}. Variável B: ${b}.`);
document.write(`<br>`);