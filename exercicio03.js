const readline = require("readline");

const interacao = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function converterCelsiusParaFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

interacao.question(
  "Digite a temperatura em Celsius: ",
  (temperaturaCelsiusInput) => {
    const temperaturaCelsius = parseFloat(temperaturaCelsiusInput);

    if (!isNaN(temperaturaCelsius)) {
      const temperaturaFahrenheit =
        converterCelsiusParaFahrenheit(temperaturaCelsius);
      console.log(
        `A temperatura em Fahrenheit é: ${temperaturaFahrenheit.toFixed(2)}`
      );
    } else {
      console.log("Por favor, digite uma temperatura válida.");
    }

    interacao.close();
  }
);
