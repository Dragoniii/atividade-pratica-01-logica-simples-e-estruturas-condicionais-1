//8. Desenvolva um algoritmo para ler dois valores e imprimir uma das três mensagens a seguir:
//a. ‘Números iguais’, caso os números sejam iguais;
//b. ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
//c. ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let primeiro = undefined;
let segundo = 0;

if(primeiro === segundo){
    document.write(`Números iguais.`);
} else if (primeiro > segundo){
    document.write(`O primeiro é maior.`);
} else if (primeiro < segundo){
    document.write(`O segundo é maior.`);
} else {
    document.write(`Isso não deveria acontecer.`);
}
 
document.write(`<br>`);