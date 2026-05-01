import styles from "./products.module.css";
import Link from "next/link";
import ProductsList from "./ProductsList";
import { ErrorBoundary } from "../components/ErrorBoundary";

export default function Products() {

  return (
    <div className={styles.products}>
        <div className={`${styles.wrapper} container`}>
            <h2>Highest Rated Products</h2>
            <p>Check out our most popular products that receive the highest ratings from our customers.</p>
            
            <ErrorBoundary fallback="Failed to load products. Please try again later.">
              <ProductsList />
            </ErrorBoundary>

            <Link href="/products">
                <button>View All Products</button>
            </Link>
        </div>
    </div>
  )
}
