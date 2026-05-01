import styles from "./categoriesList.module.css"

export default async function CategoriesList() {

    const data = await fetch("https://dummyjson.com/products/categories")
    const catagories = await data.json();

  return (
    <ul className={`${styles.wrapper} container`}>
            {
              catagories.map(catagory => (
                <li key={catagory.slug} className={styles.catagory}>
                  {catagory.name}
                </li>
              ))
            }
       </ul>
  )
}
