import { useState, useEffect } from "react";
import productService from "../services/productService";

function useProductDetail(id) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    async function fetchProduct() {
      try {
        setLoading(true);
        setError(null);

        const response = await productService.getById(id);

        setProduct(response);
      } catch (error) {
        setError(error);
        console.error("Failed to load product:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  return { product, loading, error };
}

export default useProductDetail;
