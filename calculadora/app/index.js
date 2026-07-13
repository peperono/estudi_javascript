
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const operador = document.getElementById("operador");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", calcularOperacion);

console.log(op1, op2, operador, calcular, resultado);

function calcularOperacion() {
    const op = operador.value;
    const num1 = parseFloat(op1.value);
    const num2 = parseFloat(op2.value);
    switch (op) {
        case "+":
            resultado.textContent = num1 + num2;
            break;
        case "-":
            resultado.textContent = num1 - num2;
            break;
        case "*":
            resultado.textContent = num1 * num2;
            break;
        case "/":
            resultado.textContent = num1 / num2;
            break;
        default:
            resultado.textContent = "Operador no válido";
    }
}