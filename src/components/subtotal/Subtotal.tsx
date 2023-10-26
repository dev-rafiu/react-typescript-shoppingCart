import { FunctionComponent } from "react";
import classes from "./subtotal.module.scss";
import currencyFormatter from "../utils/currencyFormatter";

type Props = {
  total: number;
  totalItems: number;
};

export const Subtotal: FunctionComponent<Props> = ({ total, totalItems }) => {
  return (
    <div className={classes.subtotal}>
      <p>
        Subtotal ({`${totalItems} ${totalItems > 1 ? `items` : `item`}`} )
        <span className={classes.amount}>{currencyFormatter(total)}</span>
      </p>
    </div>
  );
};
