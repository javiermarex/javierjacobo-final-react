import { useState } from "react";

function useCounter(initialState = 0) {
  const [valor, setValor] = useState(initialState);

  const increment = () => {
    setValor((prevValor) => prevValor + 1); // Usamos el valor anterior para actualizar
  };

  const decrement = () => {
    setValor((prevValor) => prevValor - 1); // Lo mismo para decremento
  };

  const reset = () => {
    setValor(initialState);
  };

  return {
    increment,
    decrement,
    reset,
    valor,
  };
}

export default useCounter;
