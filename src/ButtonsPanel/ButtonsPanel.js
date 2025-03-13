import { AC, DEL, divide, equal, minus, multiply, plus } from "../utils";
import ButtonNumber from "./ButtonNumber/ButtonNumber";
import ButtonOperator from "./ButtonOperator/ButtonOperator";

const ButtonsPanel = ({
  clearCalculatorDisplayValue,
  updateResult,
  currentResult,
}) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <ButtonOperator
        buttonValue={AC}
        operatorFunction={clearCalculatorDisplayValue}
        updateResult={updateResult}
      />
      <ButtonOperator buttonValue={DEL} />
      <ButtonOperator
        buttonValue={divide}
        updateResult={updateResult}
        currentResult={currentResult}
      />
      <ButtonOperator
        buttonValue={multiply}
        updateResult={updateResult}
        currentResult={currentResult}
      />

      <ButtonNumber buttonValue={7} />
      <ButtonNumber buttonValue={8} />
      <ButtonNumber buttonValue={9} />
      <ButtonOperator
        buttonValue={minus}
        updateResult={updateResult}
        currentResult={currentResult}
      />

      <ButtonNumber buttonValue={4} />
      <ButtonNumber buttonValue={5} />
      <ButtonNumber buttonValue={6} />
      <ButtonOperator
        buttonValue={plus}
        updateResult={updateResult}
        currentResult={currentResult}
      />

      <ButtonNumber buttonValue={1} />
      <ButtonNumber buttonValue={2} />
      <ButtonNumber buttonValue={3} />

      <div className="row-span-2 flex">
        <ButtonOperator
          buttonValue={equal}
          updateResult={updateResult}
          currentResult={currentResult}
          className="w-full h-full flex items-center justify-center"
        />
      </div>

      <div className="col-span-2">
        <ButtonNumber buttonValue={0} />
      </div>
      <ButtonNumber buttonValue={"."} />
    </div>
  );
};

export default ButtonsPanel;
