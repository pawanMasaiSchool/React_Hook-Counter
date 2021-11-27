import { useState } from "react";
import styling from "./Counter.module.css";

export default function Counter({ initial }) {
  const [counter, setCounter] = useState(initial);

  const handleClick = (val) => {
    setCounter(counter + val);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button className={styling.myBtn} onClick={() => handleClick(1)}>
        INCREAMENT
      </button>
      <button className={styling.myBtn} onClick={() => handleClick(-1)}>
        DECREAMENT
      </button>
      <button className={styling.double} onClick={() => handleClick(counter)}>
        DOUBLE
      </button>
    </div>
  );
}
