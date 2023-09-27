import { FunctionComponent } from "react";
import { useFetchProduct } from "../../hooks/api/useFetchProduct";
import classes from "./product-details.module.scss";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { Quantifier } from "../quantifier";

export const ProductDetails: FunctionComponent = () => {
  // const { id } = useParams();
  const { product } = useFetchProduct();

  return (
    <article className={classes.productDetails}>
      <h1>Product Details</h1>

      <img
        src={product?.thumbnail}
        alt="product image"
        className={classes.productImg}
      />
      <p>{product?.title}</p>

      <Link to="/" className={classes.homeLink}>
        Back Home
      </Link>
    </article>
  );
};
