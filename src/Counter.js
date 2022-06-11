import { React, useState } from "react";
import "./Counter.css";

export default function Counter(props) {
  const [counter, setCounter] = useState(props.initialBalance);
  //   const [player, setPlayer] = useState(player);
  const [message, setMessage] = useState(`Balance ${props.player}`);

  const increase = () => {
    setCounter((count) => count + props.amount);
  };

  const decrease = () => {
    if (counter - props.amount <= 0) {
      setMessage("Perdiste");
      setCounter((count) => count - props.amount);
    } else {
      setCounter((count) => count - props.amount);
    }
  };

  const reset = () => {
    setCounter(0);
    setMessage(`Balance ${props.player}`);
  };

  return (
    <div className="counter" style={{ background: props.color }}>
      <div className="div1">
        <h2>{message}</h2>
        <span>puede ganar o perder entre {props.range}</span>
      </div>
      <span className="div2">{counter}</span>

      <button className="div3" onClick={increase}>
        +
      </button>
      <button className="div4" onClick={decrease}>
        -
      </button>
    </div>
  );
}
