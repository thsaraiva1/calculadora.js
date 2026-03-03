const visor = document.getElementById("visor");
const botoes = document.querySelectorAll("button");

// Estado da Calculadora

let numeroAtual = "";
let numeroAnterior = "";
let operadorAtual = null;

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    if (botao.dataset.numero) {
      numeroAtual += botao.dataset.numero;
      visor.textContent = numeroAtual;
    }

    if (botao.dataset.operador) {
      operadorAtual = botao.dataset.operador;
      visor.textContent = botao.dataset.operador;
      numeroAnterior = numeroAtual;
      numeroAtual = "";
    }

    if (botao.dataset.acao === "igual") {
      if (!numeroAnterior || !numeroAtual || operadorAtual === null) {
        return;
      }

      const resultado = calcular();
      visor.textContent = resultado;

      numeroAtual = resultado.toString();
      numeroAnterior = "";
      operadorAtual = null;
    }

    if (botao.dataset.acao === "limpar") {
      numeroAtual = "";
      numeroAnterior = "";
      operadorAtual = null;
      visor.textContent = "0";
    }

    if (botao.dataset.acao === "apagar") {
      numeroAtual = numeroAtual.slice(0, -1);
      visor.textContent = numeroAtual;

      if (numeroAtual === "") {
        visor.textContent = "0";
      }

      if (numeroAtual !== "") {
        visor.textContent = numeroAtual;
      }
    }
  });

  function calcular() {
    const a = parseFloat(numeroAnterior);
    const b = parseFloat(numeroAtual);

    switch (operadorAtual) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        if (b === 0) {
          return 1;
        }
        if (a === 0) {
          return 1;
       }
        return a * b;
      case "/":
        if (b === 0){
          return 0;
        } else {
        return a / b;
        }
      default:
        return null;
    }
  }
});
