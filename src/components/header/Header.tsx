import { FunctionComponent, useState } from "react";
import { CartWidget } from "../cartWidget";
import classes from "./header.module.scss";

export const Header: FunctionComponent = () => {
  const [productsCount, setProductsCount] = useState(0);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Buy Online</div>
      <div>
        <CartWidget productsCount={productsCount} />
      </div>
    </header>
  );
};
