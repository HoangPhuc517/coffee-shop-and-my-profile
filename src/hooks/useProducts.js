import { useState, useEffect } from "react";
import productService from "../services/productService";

function useProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    try {
      setLoading(true);
      setError(null);

      const data = await productService.getAll();
      setProducts(data);
    } catch (err) {
      setError(err.message);
      console.error("Failed to load products:", err);
    } finally {
      setLoading(false);
    }
  }

  return { products, loading, error, loadProducts };
}

export default useProduct;
