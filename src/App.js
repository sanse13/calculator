import { useState } from "react";
import "./App.css";
import ButtonsPanel from "./ButtonsPanel/ButtonsPanel";
import CalculatorResult from "./CalculatorResult/CalculatorResult";

function App() {
  const [calculatorDisplayValue, setCalculatorDisplayValue] = useState("");
  const [result, setResult] = useState(0);

  const updateCalculatorDisplayValue = (value) => {
    setCalculatorDisplayValue(`${calculatorDisplayValue}` + value);
  };

  const clearCalculatorDisplayValue = () => {
    setCalculatorDisplayValue("");
  };

  const updateResult = (value) => {
    setResult(value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-4 w-1/4 h-1/2 justify-center border border-gray-300 p-6 rounded-2xl shadow-2xl bg-gray-400">
        <input type="hidden" id="currentOperator" />
        <CalculatorResult />
        <ButtonsPanel
          updateCalculatorDisplayValue={updateCalculatorDisplayValue}
          clearCalculatorDisplayValue={clearCalculatorDisplayValue}
          calculatorDisplayValue={calculatorDisplayValue}
          updateResult={updateResult}
          currentResult={result}
        />
      </div>
    </div>
  );
}

export default App;
