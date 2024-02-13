import { useState } from "react";
import Display from "./Display.jsx";

export default function Buttons({ themes, theme }) {
  const [displayValue, setDisplayValue] = useState("");

  const buttons = [
    7,
    8,
    9,
    "DEL",
    4,
    5,
    6,
    "+",
    1,
    2,
    3,
    "-",
    ".",
    0,
    "/",
    "x",
    "RESET",
    "=",
  ];

  const handleClick = (value) => {
    if (value === "DEL") {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const handleClear = () => {
    setDisplayValue("");
  };

  const handleCalculate = () => {
    try {
      if (!displayValue) {
        setDisplayValue("");
        return;
      }
      const expression = displayValue.replace(/x/g, "*");
      setDisplayValue(eval(expression).toLocaleString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  return (
    <div>
      <Display displayValue={displayValue} theme={theme} themes={themes} />
      <div
        className={`grid grid-cols-4 gap-4 [&>*:nth-of-type(17)]:col-span-2 [&>*:nth-of-type(18)]:col-span-2 ${themes[theme].keypadAndToggleBackground} justify-items-center w-[325px] lg:w-[450px] rounded-xl p-4 m-auto mt-6`}
      >
        {buttons.map((button, i) => (
          <button
            key={i}
            onClick={() => {
              if (button === "RESET") {
                handleClear();
              } else if (button === "=") {
                handleCalculate();
              } else {
                handleClick(button);
              }
            }}
            className={`w-full h-[60px] rounded-lg font-mainFont border-b border-b-4 ${
              typeof button === "number" ||
              button.includes("+") ||
              button.includes("-") ||
              button.includes("x") ||
              button.includes("/") ||
              button.includes(".")
                ? `${themes[theme].numKeyBackground} ${themes[theme].numKeyColor} text-[32px] ${themes[theme].numKeyActive} ${themes[theme].numKeyShadow} `
                : button.includes("DEL") || button.includes("RESET")
                ? `${themes[theme].stringKeyColor} ${themes[theme].stringKeyBackground} text-[20px] ${themes[theme].stringKeyShadow} ${themes[theme].stringKeyActive}`
                : button.includes("=")
                ? `${themes[theme].equalKeyAndSwitchBackground} ${themes[theme].equalKeyAndSwitchActive} ${themes[theme].equalKeyShadow} ${themes[theme].equalKeyColor} text-[20px]`
                : ""
            }`}
          >
            <p className="mt-2">{button}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
