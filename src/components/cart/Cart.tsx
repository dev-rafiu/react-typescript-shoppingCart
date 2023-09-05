import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export const Cart: FunctionComponent = () => {
  return (
    <section>
      <h1>Cart Page</h1>
      <ul></ul>

      <Link to="/">Back Home</Link>
    </section>
  );
};

export default Cart;
