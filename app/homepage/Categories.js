import styles from "./categories.module.css";
import CategoriesList from "./CategoriesList";
import { ErrorBoundary } from "../components/ErrorBoundary";

export default function Categories() {

  return (
    <div className={styles.categories}>
       <h2>Our Categories</h2>
       <ErrorBoundary fallback="Failed to load categories. Please try again later."> 
          <CategoriesList/>
       </ErrorBoundary>
       
    </div>
  )
}
