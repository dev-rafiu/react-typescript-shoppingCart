import { FunctionComponent } from "react";
import { useFetchProduct } from "../../hooks/api/useFetchProduct";
import classes from "./product-details.module.scss";
import { Link } from "react-router-dom";

export const ProductDetails: FunctionComponent = () => {
  const { isLoading, data } = useFetchProduct();

  {
    if (isLoading)
      return (
        <article className={classes.productDetails}>
          <div className={classes.productImg} />
          <div className={classes.info}>
            <p className="bg-gray-300 w-[10rem] h-8"></p>
            <p className="bg-gray-300 w-[20rem] max-w-[25rem] h-8"></p>
          </div>
        </article>
      );
  }

  return (
    <>
      <article className={classes.productDetails}>
        <img
          src={data?.thumbnail}
          alt="product image"
          className={classes.productImg}
        />
        <div className={classes.info}>
          <h3 className={classes.productTitle}>{data?.title}</h3>
          <p className={classes.productDesc}>{data?.description}</p>
        </div>
      </article>

      <Link to="/" className={classes.homeLink}>
        return home
      </Link>
    </>
  );
};
