import { AC, DEL, divide, minus, multiply, plus } from "../../utils";

const ButtonOperator = ({ buttonValue, updateResult, currentResult }) => {
  const operate = (buttonValue) => {
    const currentOperator = document.getElementById("currentOperator");
    const display = document.getElementById("calculator-result");

    const OPERATIONS = {
      [plus]: (a, b) => parseFloat(a) + parseFloat(b),
      [minus]: (a, b) => a - b,
      [multiply]: (a, b) => a * b,
      [divide]: (a, b) => (b !== 0 ? a / b : "Error"),
    };

    const displayValue = display.value;
    if (buttonValue === AC) {
      display.value = "";
      updateResult(0);
      currentOperator.value = "";
      return;
    }

    if (buttonValue === DEL) {
      display.value = display.value.slice(0, -1);
      return;
    }

    if (buttonValue in OPERATIONS) {
      if (currentOperator.value !== "") {
        const num1 = parseFloat(currentResult);
        const num2 = parseFloat(displayValue);
        const newResult = OPERATIONS[currentOperator.value](num1, num2);
        updateResult(newResult);
        display.value = "";
        currentOperator.value = buttonValue;
      } else {
        updateResult(parseFloat(displayValue));
        display.value = "";
        currentOperator.value = buttonValue;
      }
      return;
    } else {
      const num1 = parseFloat(currentResult);
      const num2 = parseFloat(displayValue);
      const res = OPERATIONS[currentOperator.value](num1, num2);
      document.getElementById("calculator-result").value = res;
    }
  };

  return (
    <button
      className="px-2 py-1 bg-orange-400 text-white rounded-lg w-full"
      type="button"
      onClick={() => operate(buttonValue)}
    >
      {buttonValue}
    </button>
  );
};

export default ButtonOperator;
