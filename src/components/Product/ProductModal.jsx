import { Link, useParams, useOutletContext } from "react-router-dom";
import { useState } from "react";
import styles from "./ProductModal.module.css";

function ProductModal() {
  const { id } = useParams();
  const { products, updateBasket, quantity, setQuantity } = useOutletContext();
  const [modalQuantity, setModalQuantity] = useState(1);
  const product = products.find((p) => p.id === Number(id));

  if (!product) return null;

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateBasket(product.id, modalQuantity);
  };

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
          <h2 className={styles.title}>{product.title}</h2>

          <p className={styles.description}>
            {product.description}
          </p>

          <span className={styles.price}>
            £{product.price}
          </span>

          {/* Quantity control (shared state) */}
          <div className={styles.quantityWrapper}>
            <label className={styles.quantityLabel}>Qty</label>

            <select
              className={styles.quantitySelect}
              value={quantity}
              onChange={(e) => setModalQuantity(Number(e.target.value))}
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

      </div>
    </div>
  );
}

export default ProductModal;