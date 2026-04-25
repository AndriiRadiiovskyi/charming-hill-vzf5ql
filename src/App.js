import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clear = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>

      <div className="display">{input || "0"}</div>

      <div className="buttons">
        {["7", "8", "9", "/"].map((b) => (
          <button onClick={() => handleClick(b)}>{b}</button>
        ))}

        {["4", "5", "6", "*"].map((b) => (
          <button onClick={() => handleClick(b)}>{b}</button>
        ))}

        {["1", "2", "3", "-"].map((b) => (
          <button onClick={() => handleClick(b)}>{b}</button>
        ))}

        {["0", ".", "+"].map((b) => (
          <button onClick={() => handleClick(b)}>{b}</button>
        ))}

        <button className="equal" onClick={calculate}>
          =
        </button>
        <button className="clear" onClick={clear}>
          C
        </button>
      </div>
    </div>
  );
}
