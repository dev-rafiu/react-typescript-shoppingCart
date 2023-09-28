import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import classes from "./cart.module.scss";
import useLocalStorageState from "use-local-storage-state";
import { CartProps } from "../productsList/ProductsList";

export const Cart: FunctionComponent = () => {
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {}); // reading the local storage value via the hook here
  console.log(cart);

  const getProducts = () => Object.values(cart || {}); // method for getting all products data as an array data structure, that will allow us easier iteration later

  return (
    <section className={classes.cart}>
      <h1>Cart</h1>

      <ul>
        {getProducts().map((product) => {
          const { id, title } = product;

          return (
            <li key={id}>
              <p>{title}</p>
            </li>
          );
        })}
      </ul>

      <Link to="/" className={classes.homeLink}>
        Back to home
      </Link>
    </section>
  );
};

export default Cart;
