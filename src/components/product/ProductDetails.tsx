import { FunctionComponent } from "react";
import { useFetchProduct } from "../../hooks/api/useFetchProduct";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

// import { Quantifier } from "../quantifier";

export const ProductDetails: FunctionComponent = () => {
  // const { id } = useParams();
  const { product } = useFetchProduct();
  return (
    <div>
      <h1>Product Details</h1>
      <p>{product?.title}</p>
      <Link to="/">Back Home</Link>
    </div>
  );
};
