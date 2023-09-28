import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import classes from "./cart.module.scss";
import useLocalStorageState from "use-local-storage-state";
import { CartProps } from "../productsList/ProductsList";
import { Quantifier } from "../quantifier";
import { Subtotal } from "../subtotal/Subtotal";
import { Operation } from "../quantifier/Quantifier";

export const Cart: FunctionComponent = () => {
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {}); // reading the local storage value via the hook here
  const getProducts = () => Object.values(cart || {}); // method for getting all products data as an array data structure, that will allow us easier iteration later
  const totalItems = getProducts().length;

  const handleRemoveProduct = (productId: number): void => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };

  const handleUpdateQuantity = (productId: number, operation: Operation) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId]) {
        if (operation === "increase") {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: updatedCart[productId].quantity + 1,
          };
        } else {
          updatedCart[productId] = {
            ...updatedCart[productId],
            quantity: updatedCart[productId].quantity - 1,
          };
        }
      }
      return updatedCart;
    });
  };

  const subtotal = getProducts().reduce(
    (accumulator, product) => accumulator + product.price * product.quantity,
    0
  );

  return (
    <section className={classes.cart}>
      {getProducts().length == 0 ? (
        <p>You have an empty cart</p>
      ) : (
        <>
          {/* cart items */}
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
                    <Quantifier
                      handleRemoveProduct={handleRemoveProduct}
                      handleUpdateQuantity={handleUpdateQuantity}
                      id={id}
                    />
                  </div>
                </li>
              );
            })}
          </ul>

          {/* sub total */}
          <Subtotal total={subtotal} totalItems={totalItems} />
        </>
      )}

      <Link to="/" className={classes.homeLink}>
        Back to home
      </Link>
    </section>
  );
};

export default Cart;
