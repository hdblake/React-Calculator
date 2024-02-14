import ThemeSelector from "./ThemeSelector.jsx";
import { themes } from "../data/themes.js";

export default function Calculator() {
  return (
    <>
      <ThemeSelector themes={themes} />
    </>
  );
}
