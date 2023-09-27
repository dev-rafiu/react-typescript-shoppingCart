import { FunctionComponent } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import classes from "./quantifier.module.scss";

export const Quantifier: FunctionComponent = () => {
  return (
    <div className={classes.quantifier}>
      <button>
        <FaPlus />
      </button>

      <span className={classes.quantity}>0</span>

      <button>
        <FaMinus />
      </button>
    </div>
  );
};
