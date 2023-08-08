import { FunctionComponent } from "react";
import { ProductType } from "../../lib/ProductType";
import classes from "./product.module.scss";
import CurrencyFormatter from "../utils/currencyFormatter";

interface Props {
  product: ProductType;
  addToCart: (product: ProductType) => void;
}

export const Product: FunctionComponent<Props> = ({ product, addToCart }) => {
  const { price, thumbnail, title } = product;
  // console.log(product);

  // console.log(CurrencyFormatter(28));

  return (
    <li className={classes.product}>
      <img src={thumbnail} alt="product image" className={classes.productImg} />

      <div className={classes.info}>
        <h5>{title}</h5>
        <p>
          {
            CurrencyFormatter(price)
            // price:
          }
        </p>
      </div>

      <button
        onClick={() => addToCart(product)}
        className={classes.btnAddToCart}
      >
        Add To Cart
      </button>
    </li>
  );
};
