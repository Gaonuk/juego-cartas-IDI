import { React, useState } from "react";
import "./Counter.css";

export default function Counter(props) {
  const [counter, setCounter] = useState(props.initialBalance);
  //   const [player, setPlayer] = useState(player);
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState(`Balance ${props.player}`);
  const [amount, setAmount] = useState(0);

  const increase = () => {
    setCounter((count) => parseInt(count) + parseInt(amount));
  };
  
  const decrease = () => {
    if (parseInt(counter) - parseInt(amount)<= 0) {
      setStatus(true);
      setCounter((count) => parseInt(count) - parseInt(amount));
    } else {
      setCounter((count) => parseInt(count) - parseInt(amount));
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
          <p>
            Para empezar una nueva partida, por favor usa el siguiente boton
          </p>
          <button
            onClick={() => window.location.reload(false)}
            className="btn-perder"
          >
            Game Over!
          </button>
        </div>
      ) : (
        <div className="counter" style={{ background: props.color }}>
          <div className="div1">
            <h2>{message}</h2>
            <span>Puede ganar o perder hasta {props.range}</span>
          </div>
          {props.player == "Gobierno" ? (
            <span className="div2">{counter}MM</span>
          ) : (
            <span className="div2">{counter}M</span>
          )}

          <button className="div3" onClick={increase}>
            +
          </button>
          <input
          type="number" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="div4"
        />
          <button className="div5" onClick={decrease}>
            -
          </button>
        </div>
      )}
    </>
  );
}
