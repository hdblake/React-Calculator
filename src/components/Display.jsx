export default function Display({ displayValue, theme, themes }) {
  return (
    <div
      className={`${themes[theme].displayBackground} w-[325px] lg:w-[450px] h-[80px] rounded-xl flex items-center justify-end m-auto`}
    >
      <h1
        className={`text-right mr-6 text-[40px] ${themes[theme].inputAndThemeColor} font-mainFont`}
      >
        {displayValue}
      </h1>
    </div>
  );
}
