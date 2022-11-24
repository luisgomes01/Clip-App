import { ThemeContext } from "./src/contexts/ThemeContext";
import Application from "./src/index";

const App = () => (
  <ThemeContext>
    <Application />
  </ThemeContext>
);

export default App;
