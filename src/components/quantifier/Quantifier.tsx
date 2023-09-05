import { FunctionComponent } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import classes from "./quantifier.module.scss";

export const Quantifier: FunctionComponent = () => {
  return (
    <div className={classes.quantifierButtons}>
      <button>
        <FaPlus />
      </button>
      <span></span>
      <button>
        <FaMinus />
      </button>
    </div>
  );
};
