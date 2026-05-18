import { Link } from "react-router-dom";
import styles from "./Product.module.css";

function Product({ id, image, name, description, price, updateBasket }) {

  return (
    <Link to={`/shop/${id}`}>
      <div className={styles.card}>
          <div className={styles.image}>
            <img src={image} alt={name} />
          </div>
          <h3 className={styles.title}>{name}</h3>
          {/* <p className={styles.description}>{description}</p> */}
          <span className={styles.price}>
            £{price}
          </span>
          {/* Quantity selector */}
        <div className={styles.quantityWrapper}>
            <label className={styles.quantityLabel}>Qty</label>

            <select
                className={styles.quantitySelect}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                onClick={(e) => e.stopPropagation()}
            >
                {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                    {i + 1}
                </option>
                ))}
            </select>
        </div>
          <button className={styles.button} onClick={(e) => updateBasket(e, id)}>
            Add to Basket
          </button>
      </div>
    </Link>
  );
}

export default Product;