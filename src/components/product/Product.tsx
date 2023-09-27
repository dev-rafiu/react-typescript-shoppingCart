import { FunctionComponent } from "react";
import { ProductType } from "../../lib/ProductType";
import classes from "./product.module.scss";
import CurrencyFormatter from "../utils/currencyFormatter";

import { Link } from "react-router-dom";

interface Props {
  product: ProductType;
  addToCart: (product: ProductType) => void;
}

export const Product: FunctionComponent<Props> = ({ product, addToCart }) => {
  const { id, price, thumbnail, title } = product;

  return (
    <li className={classes.product}>
      <Link to={`/products/${id}`}>
        <img
          src={thumbnail}
          alt="product image"
          className={classes.productImg}
        />

        <div className={classes.info}>
          <h5>{title}</h5>
          <p>{CurrencyFormatter(price)}</p>
        </div>
      </Link>

      <button
        onClick={() => addToCart(product)}
        className={classes.btnAddToCart}
      >
        Add To Cart
      </button>
    </li>
  );
};
