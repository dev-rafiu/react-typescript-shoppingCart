import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import classes from "./cart.module.scss";
import useLocalStorageState from "use-local-storage-state";
import { CartProps } from "../productsList/ProductsList";
import { Quantifier } from "../quantifier";

export const Cart: FunctionComponent = () => {
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {}); // reading the local storage value via the hook here
  const getProducts = () => Object.values(cart || {}); // method for getting all products data as an array data structure, that will allow us easier iteration later

  const handleRemoveProduct = (productId: number): void => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };

  console.log(handleRemoveProduct);

  return (
    <section className={classes.cart}>
      <header className={classes.cartHeader}>
        <h1>Your Cart</h1>
      </header>

      {getProducts().length == 0 ? (
        <p>You have an empty cart</p>
      ) : (
        <>
          <ul className={classes.cartItems}>
            {getProducts().map((product) => {
              const { id, title, image, thumbnail } = product;

              return (
                <li key={id} className={classes.product}>
                  <img
                    src={thumbnail}
                    alt={image}
                    className={classes.productImage}
                  />
                  <div>
                    <p>{title}</p>
                    <Quantifier />
                  </div>
                </li>
              );
            })}
          </ul>

          <div className={classes.subtotal}>
            <p>
              Subtotal(0 items): <span>$0.00</span>
            </p>
          </div>
        </>
      )}

      <Link to="/" className={classes.homeLink}>
        Back to home
      </Link>
    </section>
  );
};

export default Cart;
