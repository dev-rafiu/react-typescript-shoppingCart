import { useState, useEffect } from "react";
import { ProductType } from "../../lib/ProductType";
const API = "https://dummyjson.com/products";

// async function fetchProducts() {
//   const response = await fetch(API);
//   const data = await response.json();

//   return data;
// }

export function useFetchProducts() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchProducts() {
    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw new Error("failed to fetch products");
      }
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      setIsError(true);
      setErrorMessage("error occured");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, isLoading, isError, errorMessage };
}
