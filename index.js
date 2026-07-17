
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const operador = document.getElementById("operador");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
const saludo = document.getElementById("saludo");
let pp = new String("Pepe");

console.log(pp);
console.log(typeof pp);
console.log(pp);

calcular.addEventListener("click", calcularOperacion);

console.log(op1, op2, operador, calcular, resultado);

function calcularOperacion() {
    const op = operador.value;
    const num1 = Number(op1.value);
    const num2 = Number(op2.value);
    resultado.style.color = "black";
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
    if (isNaN(resultado.textContent) || resultado.textContent === "Operador no válido") {
        resultado.style.color = "red";
    }
}

// EXEMPLE DE LEXICAL BINDING
const persona = {
    numero: 0,
    saludar: function () {
        setInterval(() => {
            this.numero++;
            saludo.textContent = "Hola, soy " + this.numero;
        }, 1000);
    }
};

persona.saludar(); // ejecuta saludar una vez; internamente inicia un setInterval que repite cada 1s











