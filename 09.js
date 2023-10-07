//9. As maçãs desta estação custam R$0,30 se forem compradas menos do que uma dúzia, e R$0,25 se forem compradas pelo menos doze. Desenvolva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

let macas = 11;
let preco1 = 0.30;
let preco2 = 0.25;
let preco = undefined

if(macas <= 11){
    preco = preco1;
} else if (macas > 11){
    preco = preco2;
} 

let total = preco * macas

document.write(`Foram compradas ${macas} maçãs ao preço de R$${preco.toFixed(2)} dando um total de R$${total.toFixed(2)}.`);

document.write(`<br>`);