import { useState } from "react";
import Buttons from "./Buttons.jsx";

export default function ThemeSelector({ themes }) {
  const [theme, setTheme] = useState(1);

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    <div
      className={`root theme-${theme} flex flex-col items-center justify-center`}
    >
      <div className="w-[325px] lg:w-[450px] mb-8">
        <div>
          <div className="flex items-end justify-between">
            <h1
              className={`${themes[theme].inputAndThemeColor} font-mainFont text-[32px]`}
            >
              calc
            </h1>
            <div className="flex gap-x-8 items-end">
              <p
                className={`font-mainFont ${themes[theme].inputAndThemeColor} text-[12px]`}
              >
                THEME
              </p>
              <label htmlFor="toggle">
                <div className="relative">
                  <div
                    className={`flex justify-around ${themes[theme].inputAndThemeColor} font-mainFont text-[12px]`}
                  >
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                  </div>
                  <input
                    type="checkbox"
                    id="toggle"
                    className="hidden"
                    checked={theme === 1}
                    onChange={() =>
                      handleThemeChange(theme === 1 ? 2 : theme === 2 ? 3 : 1)
                    }
                  />
                  <div
                    className={`w-16 h-6 rounded-full ${themes[theme].keypadAndToggleBackground} shadow-inner`}
                  ></div>
                  <div
                    className={`absolute w-4 h-4 left-1 top-[22px] ${
                      themes[theme].equalKeyAndSwitchBackground
                    } ${
                      themes[theme].equalKeyAndSwitchActive
                    } rounded-full transition ${
                      theme === 2
                        ? "translate-x-[19px]"
                        : theme === 3
                        ? "translate-x-10"
                        : ""
                    }`}
                  ></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <Buttons themes={themes} theme={theme} />
    </div>
  );
}
