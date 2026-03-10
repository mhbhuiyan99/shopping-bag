
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles['app-header']}>
        <div className={`${styles.wrapper} container`}>
            <aside>
                Logo
            </aside>

            <aside>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>Shopping Bag</li>
                    </ul>
                </nav>
            </aside>
        </div>
    </header>
  )
}
