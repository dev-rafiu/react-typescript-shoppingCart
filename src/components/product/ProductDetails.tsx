import { FunctionComponent } from "react";
import { useFetchProduct } from "../../hooks/api/useFetchProduct";
import classes from "./product-details.module.scss";
import { Link } from "react-router-dom";

export const ProductDetails: FunctionComponent = () => {
  const { isLoading, data } = useFetchProduct();

  return (
    <article className={classes.productDetails}>
      <h1>Product Details</h1>

      {isLoading ? (
        <div className="width: min(100%, 30rem) bg-gray-200 h-[20rem] animate-pulse"></div>
      ) : (
        <>
          <img
            src={data?.thumbnail}
            alt="product image"
            className={classes.productImg}
          />
          <p className={classes.productTitle}>{data?.title}</p>
          <Link to="/" className={classes.homeLink}>
            return to home
          </Link>
        </>
      )}
    </article>
  );
};
