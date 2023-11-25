const readline = require("readline");

const interacao = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularAreaCirculo(raio) {
  return Math.PI * Math.pow(raio, 2);
}

interacao.question("Digite o raio do círculo: ", (raioInput) => {
  const raio = parseFloat(raioInput);

  if (!isNaN(raio) && raio >= 0) {
    const area = calcularAreaCirculo(raio);
    console.log(`A área do círculo com raio ${raio} é: ${area.toFixed(2)}`);
  } else {
    console.log("Por favor, digite um raio válido.");
  }

  interacao.close();
});
