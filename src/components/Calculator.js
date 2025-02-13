import { useState } from "react";
import useCalculatorStore from "./useCalculatorStore";
import { evaluate } from "mathjs";

const Calculator = () => {
  const { components } = useCalculatorStore();
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const handleClear = () => {
    setDisplay("");
  };

  const handleEvaluate = () => {
    try {
      const result = evaluate(display);
      setDisplay(result.toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="max-w-sm mx-auto bg-gray-800 text-white p-4 rounded-lg shadow-lg">
      <input
        type="text"
        value={display}
        readOnly
        className="w-full text-right text-2xl p-3 bg-gray-900 rounded-md outline-none"
      />
      <div className="grid grid-cols-4 gap-2 mt-3">
        {components.map((comp, index) => (
          <button
            key={index}
            className="p-3 text-xl bg-gray-700 rounded-md hover:bg-gray-600"
            onClick={() => (comp.label === "=" ? handleEvaluate() : handleClick(comp.label))}
          >
            {comp.label}
          </button>
        ))}
        <button
          className="col-span-2 p-3 text-xl bg-red-500 rounded-md hover:bg-red-600"
          onClick={handleClear}
        >
          AC
        </button>
      </div>
    </div>
  );
};

export default Calculator;
