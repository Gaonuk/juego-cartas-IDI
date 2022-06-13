import "./App.css";
import { React, useState } from "react";
import Counter from "./Counter";

function App() {
  const [game, setGame] = useState(false);
  const [count, setCount] = useState(0);
  const start = () => {
    setGame(true);
  };

  const increase = () => {
    setCount((count) => count + 1);
  };

  const decrease = () => {
    setCount((count) => count - 1);
  }
  const messages = [
    <>
      <h3>Descripción del Juego</h3>
      <p>
        El mundo es amenazado por una pandemia que arrasa con todo a su paso. La
        propagación del virus COVID-19 ha puesto en alerta a todos los países,
        especialmente a Chile, quienes han decidido cerrar sus fronteras y
        suspender casi totalmente los vuelos. Las aerolíneas sufren grandes
        pérdidas llevándolas en varios casos a la quiebra, afectando
        directamente a sus trabajadores. El gobierno sale al rescate pero no es
        fácil mantener una situación de este calibre. Prueba tus habilidades de
        estrategia, negocia y salva a las aerolíneas y a la economía mundial,
        nunca es tarde para tomar buenas decisiones.
      </p>
      <button onClick={increase}>Continuar</button>
    </>,
    <>
      <h3>¿Cómo se juega?</h3>
      <p>
        El juego consiste en que 4 personas se encargan de 4 entidades, éstas
        deben sobrevivir eventos relacionados con el contexto de pandemia en
        Chile entre los años 2019-2022, cada uno debe tomar las mejores
        decisiones para sus entidades. La idea es que los jugadores jueguen en
        conjunto para que ninguno quede en bancarrota, es decir, en monto 0,
        pues en caso de que uno pierde todos pierden. <br /> Se le entregará a
        cada uno cartas de poder y un monto inicial. Tendrán que ingresar a la
        página link/QR donde podrán visualizar el monto, en pesos, en tiempo
        real de todos los jugadores y al mismo tiempo podrán modificar el suyo.{" "}
        <br /> El monto inicial dependerá de la entidad escogida al igual que
        las cartas de poder. Este último consiste en cartas que les permiten a
        los jugadores negociar con los otros jugadores, pedir dinero o entregar
        dinero a los otros jugadores. Las cartas de fortuna permiten a los
        jugadores ganar o perder dinero debido a algún suceso que haya ocurrido,
        dependiendo de cuál saquen ganarán o perderán un monto aleatorio.
      </p>
      <div className="btn-container"><button onClick={decrease}>Regresar</button><button onClick={increase}>Continuar</button></div>
    </>,
    <>
      <h3>Reglas del Juego</h3>
      <ol>
        <li>
          4 jugadores, cada uno representará a los trabajadores de la aerolínea,
          los pasajeros, los encargados de la aerolínea LATAM o al gobierno.
          Para efectos de este juego cada uno se representará con el nombre:
          Trabajador, Pasajero, Aerolínea y Gobierno respectivamente. Los
          jugadores deciden a quién quieren interpretar.
        </li>
        <li>Si todos sobreviven los 5 eventos, ganan la partida</li>
        <li>Si uno pierde todos pierden.</li>
        <li>
          Se establecen máximos y mínimos de ganancia o pérdida de dinero para
          cada jugador. Por ejemplo, el jugador Trabajador, puede perder o ganar
          dinero hasta $4.250.000.
        </li>
        <li>
          Se pueden usar como máximo 2 cartas de poder por jugador por
          turno/evento.
        </li>
        <li>
          Las cartas de poder una vez usadas no pueden volver a usarse, en caso
          de que un jugador deba dinero, en los próximos turnos esta carta
          deberá ser entregada a la persona a la que se le debe la deuda. Esta
          última, debe cobrarle a la persona que le entregó la carta.
        </li>
        <li>
          Para efectos de orden, las negociaciones deben ser una a la vez,
          teniendo prioridad el que está con menos dinero.
        </li>
        <li>
          Recomendación: Se recomienda que el gobierno sea solidario con la
          sociedad.
        </li>
        <li>
          Recomendación 2: Se recomienda leer cuidadosamente las cartas de poder
          antes de negociar (Recordar que pueden usar solo 2 cartas por turno y
          no se pueden volver a usar)
        </li>
      </ol>
      <div className="btn-container"><button onClick={decrease}>Regresar</button><button onClick={increase}>Continuar</button></div>
    </>,
    <button onClick={start} className="btn-empezar">Empezar la partida</button>,
  ];

  return (
    <>
      {game ? (
        <div className="App parent">
          <Counter
            player="Gobierno"
            amount={10}
            initialBalance={850}
            range="100M"
            color="#93bf6b"
          ></Counter>
          <Counter
            player="Aerolínea"
            amount={10}
            initialBalance={3923}
            range="890M"
            color="#c33c25"
          ></Counter>
          <Counter
            player="Trabajadores"
            amount={0.5}
            initialBalance={18}
            range="4.25M"
            color="#fd8f45"
          ></Counter>
          <Counter
            player="Pasajeros"
            amount={0.5}
            initialBalance={30}
            range="16M"
            color="#6e00ae"
          ></Counter>
        </div>
      ) : (
        <div className="App center">
          <h1>ZERON'T</h1>
          <h2>Decide y sobrevive al COVID-19 para no quedar con $0</h2>
          {messages[count]}
        </div>
      )}
    </>
  );
}

export default App;
