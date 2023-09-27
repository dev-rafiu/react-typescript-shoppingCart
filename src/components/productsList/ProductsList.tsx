import { useState } from "react";

import { FunctionComponent } from "react";
// import useLocalStorageState from "use-local-storage-state";
import { ProductType } from "../../lib/ProductType";

import { useFetchProducts } from "../../hooks/api/useFetchProducts";
import { Product } from "../product/Product";
import { Loader } from "../loader";
import classes from "./productsList.module.scss";

export interface CartProps {
  [productId: string]: ProductType;
}

export const ProductsList: FunctionComponent = () => {
  const [, setCart] = useState<ProductType[]>([]);
  const { products, isLoading, errorMessage, isError } = useFetchProducts();

  const addToCart = (product: ProductType): void => {
    product.quantity = 1;
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: product,
    }));
  };

  // const isInCart = (productId: number): boolean =>
  //   Object.keys(cart || {}).includes(productId.toString());

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <h3 className="">{errorMessage}</h3>;
  }

  return (
    <ul className={classes.productsList}>
      {products.map((product) => {
        return (
          <Product key={product.id} product={product} addToCart={addToCart} />
        );
      })}
    </ul>
  );
};
