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
          <button className={styles.button} onClick={(e) => updateBasket(e, id)}>
            Add to Basket
          </button>
      </div>
    </Link>
  );
}

export default Product;