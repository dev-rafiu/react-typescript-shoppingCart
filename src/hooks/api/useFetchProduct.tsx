import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

async function fetchProduct(id: string | undefined) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) {
    throw new Error("failed to fetch products");
  }

  return await response.json();
}

export function useFetchProduct() {
  const { id } = useParams();

  return useQuery({ queryKey: ["product"], queryFn: () => fetchProduct(id) });
}
