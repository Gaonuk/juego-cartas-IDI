import { React, useState } from "react";
import "./Counter.css";

export default function Counter(props) {
  const [counter, setCounter] = useState(props.initialBalance);
  //   const [player, setPlayer] = useState(player);
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState(`Balance ${props.player}`);

  const increase = () => {
    setCounter((count) => count + props.amount);
  };

  const decrease = () => {
    if (counter - props.amount <= 0) {
      setStatus(true);
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
    <>
      {status ? (
        <div className="container">
          <h2>Perdiste la partida!</h2>
          <p>Para empezar una nueva partida, por favor usa el siguiente boton</p>
          <button onClick={() => window.location.reload(false)} className="btn-perder">Game Over!</button>
        </div>
      ) : (
        <div className="counter" style={{ background: props.color }}>
          <div className="div1">
            <h2>{message}</h2>
            <span>puede ganar o perder hasta {props.range}</span>
          </div>
          <span className="div2">{counter}M</span>

          <button className="div3" onClick={increase}>
            +
          </button>
          <button className="div4" onClick={decrease}>
            -
          </button>
        </div>
      )}
    </>
  );
}
