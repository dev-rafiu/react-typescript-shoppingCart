import { useQuery } from "@tanstack/react-query";

async function fetchProducts() {
  const response = await fetch("https://dummyjson.com/products");
  if (!response.ok) {
    throw new Error("failed to fetch products");
  }

  return await response.json();
}

export function useFetchProducts() {
  return useQuery({ queryKey: ["products"], queryFn: fetchProducts });
}
