import { useCart } from "../context/CartContext";
import styles from "../App.module.css";
import SimpleCard from "./Card";

export default function Products() {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Laptop", price: 50000, image: "https://img.magnific.com/free-photo/laptop-with-sun-background_1232-429.jpg?semt=ais_hybrid&w=740&q=80" },
    { id: 2, name: "Phone", price: 20000, image: "https://images.philips.com/is/image/philipsconsumer/f11c3bb618c747b9a726b1be001e23ba?$pnglarge$&wid=1250" },
    { id: 3, name: "Headphone", price: 5000, image: "https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWQlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww"  },
  ];

  return (
    <div className={styles.products}>
      {products.map((product) => (
        <div key={product.id}>
          <SimpleCard value={{product, addToCart}}></SimpleCard>
        </div>
      ))}
    </div>
  );
}