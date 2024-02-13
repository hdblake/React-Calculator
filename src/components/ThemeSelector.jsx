import { useState } from "react";
// import Display from "./Display";
import Buttons from "./Buttons.jsx";

const themes = {
  1: {
    keypadAndToggleBackground: "bg-theme1KeypadAndToggleBg",
    displayBackground: "bg-theme1DisplayBg",
    numKeyColor: "text-theme1NumKeyColor",
    numKeyBackground: "bg-theme1NumKeyBg",
    numKeyShadow: "border-b-theme1NumKeyShadow",
    numKeyActive: "active:bg-theme1NumKeyActive",
    stringKeyColor: "text-theme1StringKeyColor",
    stringKeyBackground: "bg-theme1StringKeyBg",
    stringKeyShadow: "border-b-theme1StringKeyShadow",
    stringKeyActive: "active:bg-theme1StringKeyActive",
    equalKeyColor: "text-theme1EqualKeyColor",
    equalKeyAndSwitchBackground: "bg-theme1EqualAndSwitchBg",
    equalKeyShadow: "border-b-theme1EqualShadow",
    equalKeyAndSwitchActive: "active:bg-theme1EqualAndSwitchActive",
    inputAndThemeColor: "text-theme1InputAndThemeColor",
  },
  2: {
    keypadAndToggleBackground: "bg-theme2KeypadAndToggleBg",
    displayBackground: "bg-theme2DisplayBg",
    numKeyColor: "text-theme2NumKeyColor",
    numKeyBackground: "bg-theme2NumKeyBg",
    numKeyShadow: "border-b-theme2NumKeyShadow",
    numKeyActive: "active:bg-theme2NumKeyActive",
    stringKeyColor: "text-theme2StringKeyColor",
    stringKeyBackground: "bg-theme2StringKeyBg",
    stringKeyShadow: "border-b-theme2StringKeyShadow",
    stringKeyActive: "active:bg-theme2StringKeyActive",
    equalKeyColor: "text-theme2EqualKeyColor",
    equalKeyAndSwitchBackground: "bg-theme2EqualAndSwitchBg",
    equalKeyShadow: "border-b-theme2EqualShadow",
    equalKeyAndSwitchActive: "active:bg-theme2EqualAndSwitchActive",
    inputAndThemeColor: "text-theme2InputAndThemeColor",
  },
  3: {
    keypadAndToggleBackground: "bg-theme3KeypadAndToggleBg",
    displayBackground: "bg-theme3DisplayBg",
    numKeyColor: "text-theme3NumKeyColor",
    numKeyBackground: "bg-theme3NumKeyBg",
    numKeyShadow: "border-b-theme3NumKeyShadow",
    numKeyActive: "active:bg-theme3NumKeyActive",
    stringKeyColor: "text-theme3StringKeyColor",
    stringKeyBackground: "bg-theme3StringKeyBg",
    stringKeyShadow: "border-b-theme3StringKeyShadow",
    stringKeyActive: "active:bg-theme3StringKeyActive",
    equalKeyColor: "text-theme3EqualKeyColor",
    equalKeyAndSwitchBackground: "bg-theme3EqualAndSwitchBg",
    equalKeyShadow: "border-b-theme3EqualShadow",
    equalKeyAndSwitchActive: "active:bg-theme3EqualAndSwitchActive",
    inputAndThemeColor: "text-theme3InputAndThemeColor",
  },
};

export default function ThemeSelector() {
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
