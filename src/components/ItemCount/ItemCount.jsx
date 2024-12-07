import {useState} from "react"
import useCounter from "../../hooks/useCounter";

function ItemCount({initialValue=1, stock, onAdd}) {
  const {increment, decrement, valor: count} = useCounter(initialValue)
  //const [count, setCount] = useState(initialValue)
    //const [count, setCount] = useState(initialValue)
/*   const decrement = () => {
    if(count>1){
        setCount(count - 1)
    }
  } */
/*     const increment = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }; */
  
    return (
    <>
      <div className="flex items-center space-x-4">
  <button
    onClick={decrement}
    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
  >
    Decrementar
  </button>
  
  <h1 className="text-xl font-semibold">{count}</h1>
  
  <button
    onClick={increment}
    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200"
  >
    Incrementar
  </button>

  <button
    onClick={() => onAdd(count)}
    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
  >
    Agregar al carrito
  </button>
</div>
    </>
  );
}

export default ItemCount
