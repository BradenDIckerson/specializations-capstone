import Links from "./components/links";
import Classes from "./components/classes";
import TextArea from "./components/textarea";
import Goals from "./components/goals";
import CalandarMap from "./components/frames";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CalandarMap />
      <div className="CenterColumn">
        <TextArea />
        <Links />
      <Classes />
      </div>
      <Goals />
    </div>
  );
}

export default App;
