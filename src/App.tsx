import { useState } from "react";
import "./App.css";

type Value = string;

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operadores = ["/", "*", "+", "-", "."];

  const updateCalc = (value: Value) => {
    if (
      (operadores.includes(value) &&
        calc ===
          "") /**verifica se nao inclui um dos operadores ou se esta vazio */ ||
      (operadores.includes(value) &&
        operadores.includes(
          calc.slice(-1)
        )) /**verifica se o ultimo nao é um operador */
    ) {
      return;
    }

    setCalc(calc + value);
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return digits;
  };

  const calcular = () => {
    setCalc(
      eval(calc).toString()
    ); /**eval pega string e transforma em codigo js */
  };

  const deletarUltimo = () => {
    if (calc == "") {
      return;
    } else {
      const value = calc.slice(0, -1);

      setCalc(value);
    }
  };

  return (
    <div className="App">
      <div className="calculadora">
        <div className="display">{calc || "0"}</div>

        <div className="operadores">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>

          <button onClick={deletarUltimo}>DEL</button>
        </div>

        <div className="digitos">
          {createDigits()}
          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          {/**adicionar metodo para reconhecer se os ultimos numeros já nao tem u */}

          <button onClick={calcular}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
