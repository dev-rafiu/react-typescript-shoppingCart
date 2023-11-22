import { FunctionComponent } from "react";
import classes from "./footer.module.scss";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer} data-cy="footer">
      <p className={classes.footerCopyrights}>
        © React TypeScript Shopping Cart {currentYear}. All rights reserved.
      </p>
    </footer>
  );
};
