import styles from "./products.module.css";
import Link from "next/link";
import ProductCard from "../components/ProductCard";

export default async  function Products() {
  const data = await fetch('https://dummyjson.com/products?limit=12&sortBy=rating&order=desc');
  const products = await data.json();

  console.log(products);

  return (
    <div className={styles.products}>
        <div className={`${styles.wrapper} container`}>
            <h2>Highest Rated Products</h2>
            <p>Check out our most popular products that receive the highest ratings from our customers.</p>
            <ul className={styles['products-list']}>
                
                {
                    products.products.map(product=> (
                        <ProductCard key={product.id} product={product}/>
                    ))
                }

            </ul>
            <Link href="/products">
                <button>View All Products</button>
            </Link>
        </div>
    </div>
  )
}
