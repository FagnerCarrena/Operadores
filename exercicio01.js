const readline = require("readline");

const interacao = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Não é possível dividir por zero.";
  }
}

interacao.question("Digite o primeiro número: ", (numero1) => {
  interacao.question("Digite o segundo número: ", (numero2) => {
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    console.log("Soma:", soma(numero1, numero2));
    console.log("Subtração:", subtracao(numero1, numero2));
    console.log("Multiplicação:", multiplicacao(numero1, numero2));
    console.log("Divisão:", divisao(numero1, numero2));

    interacao.close();
  });
});
