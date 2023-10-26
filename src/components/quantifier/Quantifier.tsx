import { FunctionComponent, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import classes from "./quantifier.module.scss";
import QuantifierBtn from "../ui/quantifierButton";
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
    setValue((prev) => (prev += 1));

    handleUpdateQuantity(id, "increase");
  };

  const decrease = () => {
    setValue((prev) => {
      if (value <= 1) handleRemoveProduct(id);

      return (prev -= 1);
    });

    handleUpdateQuantity(id, "decrease");
  };

  return (
    <div className={classes.quantifier}>
      <QuantifierBtn action={decrease} Icon={<FaMinus />} />
      <span className={classes.quantity}>{value}</span>
      <QuantifierBtn action={increase} Icon={<FaPlus />} />
    </div>
  );
};
