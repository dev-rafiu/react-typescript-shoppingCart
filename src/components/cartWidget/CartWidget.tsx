import { FunctionComponent } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import classes from "./cartwidget.module.scss";

interface Props {
  productsCount: number;
}

export const CartWidget: FunctionComponent<Props> = ({ productsCount }) => {
  const navigate = useNavigate();

  const navigateToCartPage = () => {
    navigate("/cart");
  };

  return (
    <button
      onClick={navigateToCartPage}
      className={classes.cartBtn}
      data-testid="cart-widget-btn"
    >
      <FaShoppingCart />
      <span className={classes.productsCount}>{productsCount}</span>
    </button>
  );
};
