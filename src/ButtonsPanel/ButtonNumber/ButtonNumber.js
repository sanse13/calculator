const ButtonNumber = ({ buttonValue }) => {
  const updateDisplay = () => {
    const display = document.getElementById("calculator-result");
    display.value = `${display.value}${buttonValue}`;
  };
  return (
    <button
      type="button"
      className="px-2 py-1 bg-gray-700 text-white rounded-lg w-full"
      onClick={updateDisplay}
    >
      {buttonValue}
    </button>
  );
};

export default ButtonNumber;
