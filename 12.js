//12. Escreva um algoritmo que armazene o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem no console que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).

let idade = undefined;
let condicao = undefined;

function calcularIdade(dataNascimento) {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);

  let velhidade = hoje.getFullYear() - nascimento.getFullYear();
  const verificarMes = hoje.getMonth() - nascimento.getMonth();

  const diaNascimento = nascimento.getDate();
  const hojeDia = hoje.getDate();

  if (verificarMes < 0 || (verificarMes === 0 && hojeDia < diaNascimento)) {
    velhidade = velhidade - 1;
  }

  return velhidade;
}

idade = calcularIdade("2014-12-04");
condicao = idade >= 18 ? "pode votar" : "não pode votar";


document.write(
  `A pessoa tem ${idade} anos de idade e ela ${condicao} esse ano.`
);
document.write(`<br>`);
