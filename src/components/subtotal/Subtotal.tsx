import { FunctionComponent } from "react";
import classes from "./subtotal.module.scss";

type Props = {
  total: number;
  totalItems: number;
};

export const Subtotal: FunctionComponent<Props> = ({ total, totalItems }) => {
  return (
    <div className={classes.subtotal}>
      <p>
        Subtotal({totalItems} items): <span>$ {total}</span>
      </p>
    </div>
  );
};
