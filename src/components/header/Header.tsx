import { FunctionComponent } from "react";
import { CartWidget } from "../cartWidget";
import classes from "./header.module.scss";
import { Link } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";
import { CartProps } from "../productsList/ProductsList";

export const Header: FunctionComponent = () => {
  const [cart] = useLocalStorageState<CartProps>("cart", {});
  const productsCount: number = Object.keys(cart || {}).length;

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          Buy Online
        </Link>

        <CartWidget data-testid="cart-widget" productsCount={productsCount} />
      </div>
    </header>
  );
};
