import { ProductType } from "../../lib/ProductType";
import classes from "./product.module.scss";

type Props = {
  action: (product: ProductType) => void;
  product: ProductType;
  isInCart: (productId: number) => boolean;
};

function AddToCartBtn({ isInCart, action, product }: Props) {
  return (
    <button
      disabled={isInCart(product.id)}
      onClick={() => action(product)}
      className={classes.cartBtn}
    >
      Add to cart
    </button>
  );
}

export default AddToCartBtn;
