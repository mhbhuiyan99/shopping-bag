import Products from "./Products";
import { ErrorBoundary } from "../../components/ErrorBoundary";

export default async function page({ params }) {

  const { slug } = await params;
  const category = slug?.[0] || null;
  
  return (
    <div className="products-page">
      <div className="page-header">
        <h1>Products Page</h1>
      </div>

      <ErrorBoundary fallback="Something went wrong while loading products. Please try again later.">
        <Products category={category} />
      </ErrorBoundary>
    </div>
  );
}
