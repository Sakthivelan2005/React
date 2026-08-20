import { Card } from "react-bootstrap";
import styles from "../App.module.css";
import { Button } from "@mui/material";

function SimpleCard({ value  }) {
  return (
    <Card className={styles.card}>
      <Card.Img
        className={styles.image}
        variant="top"
        src={value.product.image}
      />

      <Card.Body>
        <Card.Title className={styles.title}>{value.product.name}</Card.Title>

        <Card.Text className={styles.price}>$ {value.product.price}</Card.Text>

        <Button className={styles.navbar} onClick={
          (e) => {
            e.preventDefault();
            value.addToCart(value.product)
            }}  
            variant="outlined">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SimpleCard;
