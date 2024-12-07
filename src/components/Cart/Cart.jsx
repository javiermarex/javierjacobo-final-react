import { useCart } from "../../hooks/useCart";

function Cart() {
  const { cart, getTotal, removeItem, clearCart } = useCart();

  return (
    <div className="container mx-auto px-4 mt-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en tu carrito.</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="flex justify-between mb-4">
              <span>{product.name}</span>
              <span>Qty: {product.quantity}</span>
              <span>Precio: ${product.price * product.quantity}</span>
              <button
                onClick={() => removeItem(product.id)}
                className="text-red-500 hover:underline"
              >
                Eliminar
              </button>
            </div>
          ))}
          <div className="mt-4">
            <h3 className="font-semibold">Total: ${getTotal()}</h3>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
