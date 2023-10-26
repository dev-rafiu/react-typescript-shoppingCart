import { FunctionComponent } from "react";
import { ProductType } from "../../lib/ProductType";
import classes from "./product.module.scss";
import CurrencyFormatter from "../utils/currencyFormatter";

import { Link } from "react-router-dom";
import AddToCartBtn from "./addToCartButton";

interface Props {
  product: ProductType;
  addToCart: (product: ProductType) => void;
  isInCart: (productId: number) => boolean;
}

export const Product: FunctionComponent<Props> = ({
  product,
  addToCart,
  isInCart,
}) => {
  const { id, price, thumbnail, title } = product;

  return (
    <li className={classes.product}>
      <Link to={`/products/${id}`}>
        <img src={thumbnail} alt={title} className={classes.productImg} />

        <div className={classes.info}>
          <p>{title}</p>
          <p>{CurrencyFormatter(price)}</p>
        </div>
      </Link>

      <AddToCartBtn action={addToCart} isInCart={isInCart} product={product} />
    </li>
  );
};
