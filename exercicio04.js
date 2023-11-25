const readline = require("readline");

const interacao = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function compararStrings(str1, str2) {
  return str1 === str2;
}

interacao.question("Digite a primeira string: ", (str1) => {
  interacao.question("Digite a segunda string: ", (str2) => {
    if (compararStrings(str1, str2)) {
      console.log("As strings são iguais.");
    } else {
      console.log("As strings são diferentes.");
    }

    interacao.close();
  });
});
