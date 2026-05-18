import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import { useState } from "react";

function Product({ id, image, name, description, price, updateBasket }) {
  
  const [quantity, setQuantity] = useState(1);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateBasket(id, quantity);
  };

  return (
    <div className={styles.card}>
        <Link to={`/shop/${id}`} className={styles.image}>
            <img src={image} alt={name} />
        </Link>

        <h3 className={styles.title}>{name}</h3>

        <span className={styles.price}>£{price}</span>

        <div className={styles.quantityWrapper}>
            <label className={styles.quantityLabel}>Qty</label>

            <select
            className={styles.quantitySelect}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            >
            {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                {i + 1}
                </option>
            ))}
            </select>
        </div>

        <button className={styles.button} onClick={handleAdd}>
            Add to Basket
        </button>
    </div>
  );
}

export default Product;