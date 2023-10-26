import { FunctionComponent } from "react";
import { ProductType } from "../../lib/ProductType";

import { useFetchProducts } from "../../hooks/api/useFetchProducts";
import { Product } from "../product/Product";
import classes from "./productsList.module.scss";
import useLocalStorageState from "use-local-storage-state";
import Skeleton from "../skeleton";

export interface CartProps {
  [productId: string]: ProductType;
}

export const ProductsList: FunctionComponent = () => {
  const [cart, setCart] = useLocalStorageState<CartProps>("cart", {});
  const { data, isLoading, isError } = useFetchProducts();

  const addToCart = (product: ProductType): void => {
    product.quantity = 1;
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: product,
    }));
  };

  const isInCart = (productId: number): boolean => {
    return Object.keys(cart || {}).includes(productId.toString());
  };

  if (isLoading) {
    return <Skeleton />;
  }

  if (isError) {
    return <h3>An error occured</h3>;
  }

  return (
    <ul className={classes.productsList}>
      {data.products?.map((product: ProductType) => {
        return (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            isInCart={isInCart}
          />
        );
      })}
    </ul>
  );
};
