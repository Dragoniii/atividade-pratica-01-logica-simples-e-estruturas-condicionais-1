//10. Escreva um algoritmo que tenha como valores de entradas o nome e idade do usuário e imprima no terminal o nome, a idade e o ano de nascimento do usuário. Ex: “Nome: Pedro, Idade: 22 anos, nasceu em 2000”. OBS: Pegue o ano atual como base

function calcularIdade(dataNascimento) {
  let hoje = new Date();
  let nascimento = new Date(dataNascimento);

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  let mes = hoje.getMonth() - nascimento.getMonth();

  let diaNascimento = nascimento.getDate()
  let hojeDia = hoje.getDate()

  if (mes < 0 || (mes === 0 && (hojeDia<diaNascimento))) {
    idade = idade - 1;
  }

  return idade;
}

let idade = calcularIdade("1992-10-14");
document.write("<p>A idade calculada é: " + idade + " anos</p>");
