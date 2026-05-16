import styles from "./Product.module.css"

function Product({ image, name, description, price }) {
  return (
    <div className={styles.card}>

      <div className={styles.image}>
        <img src={image} alt={name} />
      </div>

      <h3 className={styles.title}>{name}</h3>

      <p className={styles.description}>{description}</p>

      <span className={styles.price}>
        £{price}
      </span>

      <button className={styles.button}>
        Add to Basket
      </button>

    </div>
  )
}

export default Product