import { useCart } from "../context/CartContext";
import styles from "../App.module.css";
import SimpleCard from "./Card";
import { DropdownButton } from "react-bootstrap";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    totalPrice,
    updateQuantity
  } = useCart();
  console.log(cart)
  return (
    <div className={styles.cart}>
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <span>{item.name}</span>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
           <button
        onClick={() => updateQuantity(item.id, -1)}
      >
        −
      </button>

      <span>{item.quantity}</span>

      <button
        onClick={() => updateQuantity(item.id, 1)}
      >
        +
      </button>
        </div>
      ))}

      <h3>Total: ₹{totalPrice}</h3>
    </div>
  );
}