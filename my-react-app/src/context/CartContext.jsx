import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.filter(val => val.id === product.id).length === 0;
     if(existingItem){
      setCart([...cart, {...product, quantity: 1}])
    }
};

const updateQuantity = (id, change) => {
   setCart(cart.map(val => {
    console.log("Sum: ",val.quantity +=change)
    if(id === val.id){
      if(val.quantity > 0){
        val.quantity = val.quantity +=change;
      }
    }
    return val;
   }))
};

  const removeFromCart = (id) => {
    console.log("Caryt vara id: ",id)
    setCart(cart.filter(val => val.id !== id));
  };

  const totalPrice = 0

  const cartCount = cart.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        totalPrice,
        cartCount,
        updateQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

export function useCart() {
  return useContext(CartContext);
}
