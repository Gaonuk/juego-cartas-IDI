import logo from "./logo.svg";
import "./App.css";
import { React, useState } from "react";
import Counter from "./Counter";

function App() {
  return (
    <div className="App parent">
      <Counter player="Gobierno" amount={1000} initialBalance={100000} range="1-30k" color="green"></Counter>
      <Counter player="Aerolinea" amount={1000} initialBalance={80000} range="1-60k" color="red"></Counter>
      <Counter player="Trabajador" amount={1000} initialBalance={10000} range="1-10k" color="yellow"></Counter>
      <Counter player="Pasajero" amount={1000} initialBalance={20000} range="1-20k" color="orange"></Counter>
    </div>
  );
}

export default App;
