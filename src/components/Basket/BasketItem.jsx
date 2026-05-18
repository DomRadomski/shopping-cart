import styles from "./BasketItem.module.css";

function BasketItem({ id, name, quantity, total, removeFromBasket }) {
  return (
    <tr>
      <td>{name}</td>

      <td>{quantity}</td>

      <td>£{total}</td>

      <td>
        <button className={styles.remove} onClick={() => removeFromBasket(id)}>
          ✕
        </button>
      </td>
    </tr>
  );
}

export default BasketItem;