import styles from "./categories.module.css";

export default async function Categories() {

  const data = await fetch("https://dummyjson.com/products/categories")
  const catagories = await data.json();

  return (
    <div className={styles.categories}>
       <h2>Our Categories</h2>
       <ul className={`${styles.wrapper} container`}>
            {
              catagories.map(catagory => (
                <li key={catagory.slug} className={styles.catagory}>
                  {catagory.name}
                </li>
              ))
            }
       </ul>
    </div>
  )
}
