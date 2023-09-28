import { FunctionComponent, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import classes from "./quantifier.module.scss";
// import { ProductType } from "../../lib/ProductType";

export type Operation = "decrease" | "increase";

type Props = {
  handleRemoveProduct(id: number): void;
  handleUpdateQuantity(id: number, operation: string): void;
  id: number;
};

export const Quantifier: FunctionComponent<Props> = ({
  handleRemoveProduct,
  handleUpdateQuantity,
  id,
}) => {
  const [value, setValue] = useState(1);

  const increase = () => {
    setValue((prev) => {
      return (prev += 1);
    });

    handleUpdateQuantity(id, "increase");
  };

  const decrease = () => {
    setValue((prev) => {
      if (value <= 1) {
        console.log("less than 1");
        handleRemoveProduct(id);
      }
      return (prev -= 1);
    });

    handleUpdateQuantity(id, "decrease");
  };

  return (
    <div className={classes.quantifier}>
      <button onClick={increase}>
        <FaPlus />
      </button>

      <span className={classes.quantity}>{value}</span>

      <button onClick={decrease}>
        <FaMinus />
      </button>
    </div>
  );
};
