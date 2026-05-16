import { Link, useParams, useOutletContext } from "react-router-dom";
import styles from "./ProductModal.module.css";

function ProductModal() {
  const { id } = useParams();
  const { products } = useOutletContext();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return null;

  return (
    <div className={styles.overlay}>
        <div className={styles.card}>

            <Link to="/shop" className={styles.close}>
            ✕
            </Link>

            <div className={styles.image}>
            <img src={product.image} alt={product.title} />
            </div>

            <div className={styles.content}>
            <h2 className={styles.title}>
                {product.title}
            </h2>

            <p className={styles.description}>
                {product.description}
            </p>

            <span className={styles.price}>
                £{product.price}
            </span>

            <button className={styles.button}>
                Add to Basket
            </button>
            </div>

        </div>
    </div>
  );
}

export default ProductModal;