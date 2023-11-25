const readline = require("readline");

const interacao = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function compararIdades(idade1, idade2) {
  if (idade1 === idade2) {
    return "Ambos têm a mesma idade.";
  } else if (idade1 > idade2) {
    return "O primeiro usuário é mais velho.";
  } else {
    return "O segundo usuário é mais velho.";
  }
}

interacao.question("Digite a idade do primeiro usuário: ", (idade1Input) => {
  interacao.question("Digite a idade do segundo usuário: ", (idade2Input) => {
    const idade1 = parseInt(idade1Input);
    const idade2 = parseInt(idade2Input);

    if (!isNaN(idade1) && !isNaN(idade2)) {
      const resultado = compararIdades(idade1, idade2);
      console.log(resultado);
    } else {
      console.log("Por favor, digite idades válidas.");
    }

    interacao.close();
  });
});
