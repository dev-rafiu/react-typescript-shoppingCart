import { useEffect, useState } from "react";
import { ProductType } from "../../lib/ProductType";
import { useParams } from "react-router-dom";
const API = "https://dummyjson.com/products";

export function useFetchProduct() {
  const [product, setProduct] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { id } = useParams();

  async function fetchProduct() {
    try {
      const response = await fetch(`${API}/${id}`);
      if (!response.ok) {
        throw new Error("failed to fetch products");
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      setIsError(true);
      setErrorMessage("error occured");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return { product, isLoading, isError, errorMessage };
}
