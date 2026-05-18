import styles from './Shop.module.css'
import Product from '@/components/Product/Product';
import { useState, useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router';

function Shop() {
  
  const [filter, setFilter] = useState("all");
  const { basket, setBasket, products } = useOutletContext();
  
  useEffect(() => {
    console.table(basket);
    }, [basket]);

  const categories = [
    "all",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const capitalise = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  
  const updateFilter = (newFilter) => {
    setFilter((prev) => (prev === newFilter ? "all" : newFilter));
  };

  const updateBasket = (id, quantity) => {

    setBasket((prev) => {
        const existing = prev.find(item => item.id === id);

        if (existing) {
            return prev.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            );
        }

        return [...prev, { id, quantity: quantity }];
    });

    };

  return (
    <>
        <main className={styles.shop}>
            <section className={styles.top}>
                <div className={styles.topRow}>
                    <h1>Shop</h1>
                    <div className={styles.filters}>
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={filter === cat ? styles.active : ""}
                                onClick={() => updateFilter(cat)}
                            >
                                {capitalise(cat)}
                            </button>
                            ))}
                    </div>
                </div>
                <p className={styles.description}>
                    Everything you didn’t know you needed, now aggressively organised.
                </p>
            </section>
            <section className={styles.products}>
                {products
                    .filter((product) => filter === "all" || product.category === filter)
                    .map((product) => (
                    <Product
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        name={product.title}
                        description={product.description}
                        price={product.price}
                        updateBasket={updateBasket}
                    />
                    ))}
            </section>
        </main>
        <Outlet context={{ products, updateBasket }} />
    </>
  )
}

export default Shop;

