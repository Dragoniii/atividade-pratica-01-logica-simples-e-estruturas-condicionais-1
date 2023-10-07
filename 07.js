//7. Desenvolva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

const brancos = 12345;
const nulos = 23456;
const validos = 34567;

const total = brancos + nulos + validos;

const percentualBrancos = (brancos / total) * 100;
const percentualNulos = (nulos / total) * 100;
const percentualValidos = (validos / total) * 100;

document.write(`Votos brancos: ${brancos}. Votos nulos: ${nulos}. Votos validos: ${validos}. Votos totais: ${total}.`);
document.write(`<br>`);
document.write(`Votos brancos: ${percentualBrancos.toFixed(2)}. Votos nulos: ${percentualNulos.toFixed(2)}. Votos validos: ${percentualValidos.toFixed(2)}.`);
document.write(`<br>`);