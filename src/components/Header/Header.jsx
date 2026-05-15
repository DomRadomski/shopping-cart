import styles from './Header.module.css'

function Header() {
    return(
      <>
        <div className={styles.header}>
            <h1>My Shop</h1>
            <ul className={styles.links}>
                <li>Home</li>
                <li>Shop</li>
                <li>Basket</li>
            </ul>
        </div>
      </>
    )
}

export default Header