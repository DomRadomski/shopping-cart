import styles from './Header.module.css'
import { Link } from 'react-router'

function Header() {
    return(
      <>
        <div className={styles.header}>
            <h1>My Shop</h1>
            <ul className={styles.links}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/basket">Basket</Link></li>
            </ul>
        </div>
      </>
    )
}

export default Header