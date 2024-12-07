

//import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import ItemCount from "../ItemCount/ItemCount";
function ItemDetail({id, name, img, description, category, price, stock }) {

  const { addItem, isInCart } = useCart();
  const handleAdd = (count) => {
    const productToAdd = {
      id, name, price, quantity: count
    }
    addItem(productToAdd)
  }
  // const [quantity, setQuantity] = useState(0)
  
  //  const handleAdd = (cantidad) => {
  //   setQuantity(cantidad)
  // }
  
  
  return (
    <div className="container mx-auto px-4 mt-8">
  <div className="card bg-white shadow-md rounded-lg overflow-hidden">
    <img
      src={img}
      style={{ width: 300 }}
      className="card-img-top"
      alt={name}
    />
    <div className="p-4">
    <h2 className="text-lg font-semibold text-gray-800 mb-2">{id}</h2>
      <h2 className="text-lg font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-gray-600">Categoría: {category}</p>
      <h3 className="text-lg font-semibold text-blue-600">Precio: $ {price}</h3>
      <h3 className="text-gray-500">Stock disponible: {stock}</h3>
    </div>
  </div>

  <div className="mt-4">
    {/* {quantity === 0 ? (
      <ItemCount stock={stock} onAdd={handleAdd} />
    ) : (
      <Link
        to="/cart"
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Finalizar Compra
      </Link>
    )} */}

{
        isInCart(id) ? (
          <Link to="/cart"className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Finalizar Compra</Link>
        ):
        (
          <ItemCount stock={stock} onAdd={ handleAdd } />
        )
      }
  </div>
</div>
  );
}

export default ItemDetail


