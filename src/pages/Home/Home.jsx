import styles from "./Home.module.css"

function Home() {
    return (
        <main className={styles.home}>

            <section className={styles.hero}>
                <h1>WELCOME TO MY SHOP</h1>

                <p>
                    Premium products for modern lifestyles,
                    carefully designed to look excellent in muted Instagram posts.
                </p>

                <button>Start Shopping</button>
            </section>

            <section className={styles.about}>
                <h2>Why Choose Us?</h2>

                <div className={styles["about-grid"]}>

                    <div className={styles["about-card"]}>
                        <h3>Fast Delivery</h3>

                        <p>
                            Your parcel arrives before you even remember ordering it.
                            Humanity demanded instant gratification and logistics complied.
                        </p>
                    </div>

                    <div className={styles["about-card"]}>
                        <h3>Premium Quality</h3>

                        <p>
                            Everything is labelled premium because apparently
                            adjectives are now a business model.
                        </p>
                    </div>

                    <div className={styles["about-card"]}>
                        <h3>Customer Support</h3>

                        <p>
                            Real humans answering real questions while slowly
                            losing faith in civilisation.
                        </p>
                    </div>

                </div>
            </section>

            <section className={styles.banner}>
                <h2>Spring Sale Now Live</h2>

                <p>
                    Massive discounts on products that were mysteriously more expensive last week.
                    Retail economics remains an interpretive art form.
                </p>

                <button>View Offers</button>
            </section>

            <section className={styles.newsletter}>
                <h2>Join Our Newsletter</h2>

                <p>
                    Receive updates, exclusive deals,
                    and emotionally manipulative countdown timers.
                </p>

                <div className={styles["newsletter-form"]}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                    />

                    <button>Subscribe</button>
                </div>
            </section>

        </main>
    )
}

export default Home