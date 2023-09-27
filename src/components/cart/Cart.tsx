import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import classes from "./cart.module.scss";

export const Cart: FunctionComponent = () => {
  return (
    <section className={classes.cart}>
      <h1>Cart</h1>
      <ul></ul>

      <Link to="/" className={classes.homeLink}>
        Back to home
      </Link>
    </section>
  );
};

export default Cart;
