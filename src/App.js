import logo from "./logo.svg";
import "./App.css";
import { First } from "./first";
import { Second } from "./second";
import { Third } from "./third";
import { Fourth } from "./fourth";

function App() {
  return (
    <div class="second">
      <First />
      <Second />
      <br />
      <Third />
      <br />
      <Fourth />
    </div>
  );
}

export default App;
