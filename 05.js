//5. Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na segunda, terceira e quarta coloque 3 notas (valores de 0 à 10). Calcule a média das notas e armazene na quinta variável criada. Apresente no documento html a seguinte informação: "O aluno _____ ficou com média _,_"

const nome = "Joel Luís Steffen";
const nota1 = 9;
const nota2 = 9.8;
const nota3 = 10;
const nota = (nota1+nota2+nota3)/3;

document.write(`O aluno ${nome} ficou com média ${nota.toFixed(2)}.`);
document.write(`<br>`);