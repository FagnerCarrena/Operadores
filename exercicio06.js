const readline = require("readline");

const usuarioInteeraction = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "O número é par.";
  } else {
    return "O número é ímpar.";
  }
}

usuarioInteeraction.question("Digite um número: ", (numeroInput) => {
  const numero = parseInt(numeroInput);

  if (!isNaN(numero)) {
    const resultado = verificarParOuImpar(numero);
    console.log(resultado);
  } else {
    console.log("Por favor, digite um número válido.");
  }

  usuarioInteeraction.close();
});
