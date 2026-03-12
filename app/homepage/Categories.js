import style from "./categories.module.css";

export default function Categories() {
  return (
    <div className={style.categories}>
       <h2>Our Categories</h2>
       <ul className={`${style.wrapper} container`}>
            <li className={style.category}>Beauty</li>
            <li className={style.category}>Fragrances</li>
            <li className={style.category}>Furniture</li>
       </ul>
    </div>
  )
}
