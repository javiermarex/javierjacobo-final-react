import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Recuperar carrito desde LocalStorage al cargar
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Guardar carrito en LocalStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart((prev) => [...prev, productToAdd]);
    } else {
      console.log("El producto ya está en el carrito");
    }
  };

  const removeItem = (id) => {
    const cartUpdated = cart.filter((prod) => prod.id !== id);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    let accu = 0;
    cart.forEach((item) => {
      accu += item.quantity * item.price;
    });
    return accu;
  };

  const getTotalQuantity = () => {
    let accu = 0;
    cart.forEach((produc) => {
      accu += produc.quantity;
    });
    return accu;
  };

  const totalQuantity = getTotalQuantity();

  const obj = {
    cart,
    isInCart,
    addItem,
    removeItem,
    clearCart,
    totalQuantity,
    getTotal,
  };

  return (
    <CartContext.Provider value={obj}>
      {children}
    </CartContext.Provider>
  );
};
