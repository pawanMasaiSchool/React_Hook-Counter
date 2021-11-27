import Counter from "./Components/Counter/Counter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React Hook - Counter</h1>
      <Counter initial={0} />
    </div>
  );
}
