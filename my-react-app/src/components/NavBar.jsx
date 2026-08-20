import { useCart } from "../context/CartContext";
import styles from "../App.module.css";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav className={styles.navbar}>
      <h2>My Store</h2>
      <p>Cart: {cartCount}</p>
    </nav>
  );
}