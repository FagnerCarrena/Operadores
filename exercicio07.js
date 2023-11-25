const readline = require("readline");

const digite = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function validarIntervalo(numero) {
  return numero >= 1 && numero <= 100;
}

digite.question("Digite um número: ", (numeroInput) => {
  const numero = parseInt(numeroInput);

  if (!isNaN(numero)) {
    if (validarIntervalo(numero)) {
      console.log("O número está no intervalo de 1 a 100.");
    } else {
      console.log("O número está fora do intervalo de 1 a 100.");
    }
  } else {
    console.log("Por favor, digite um número válido.");
  }

  digite.close();
});
