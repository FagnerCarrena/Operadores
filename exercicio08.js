const readline = require("readline");

const digaAi = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function verificarAdolescente(idade) {
  return idade >= 13 && idade <= 19;
}

digaAi.question("Digite a idade do usuário: ", (idadeInput) => {
  const idade = parseInt(idadeInput);

  if (!isNaN(idade)) {
    if (verificarAdolescente(idade)) {
      console.log("O usuário é adolescente.");
    } else {
      console.log("O usuário não é adolescente.");
    }
  } else {
    console.log("Por favor, digite uma idade válida.");
  }

  digaAi.close();
});
