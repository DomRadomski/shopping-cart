import styles from "./Basket.module.css";
import BasketItem from "@/components/Basket/BasketItem";
import { useOutletContext } from "react-router";

function Basket() {

  const {products, basket, setBasket} = useOutletContext();
  
  const getProductById = (id) => {
    return products.find((p) => p.id === id);
  };

  const removeFromBasket = (id) => {
    setBasket((prev) => {
        const index = prev.indexOf(id);
        if (index === -1) return prev;

        const copy = [...prev];
        copy.splice(index, 1);
        return copy;
    });
  };

  const calcTotal = (items) => {
    return items.reduce((total, id) => {
        const product = getProductById(id);
        return total + (product?.price || 0);
    }, 0);
  };


  return (
    <main className={styles.basket}>

      <section className={styles.top}>
        <h1>Basket</h1>

        <p>
          A carefully curated collection of impulses and questionable budgeting.
        </p>
      </section>

      <section className={styles.tableSection}>

        <table className={styles.table}>

          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {basket.map((id, index) => {
                const product = getProductById(id);

                if (!product) return null;

                return (
                    <BasketItem
                        key={index}
                        id={product.id}
                        name={product.title}
                        quantity={1}
                        total={product.price}
                        removeFromBasket={removeFromBasket}
                    />
                    );
                })}
            </tbody>

        </table>

      </section>

      <section className={styles.summary}>

        <div className={styles.summaryContent}>

          <div className={styles.total}>
            <span>Total</span>
            <strong>£{calcTotal(basket)}</strong>
          </div>

          <button className={styles.checkout}>
            Proceed to Checkout
          </button>

        </div>

      </section>

    </main>
  );
}

export default Basket;