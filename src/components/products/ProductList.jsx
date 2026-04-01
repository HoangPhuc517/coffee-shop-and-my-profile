import ProductCard from "./ProductCard";
import "./ProductList.css";
import useProducts from "../../hooks/useProducts";

function ProductList() {
  const { products, loading, error, loadProducts } = useProducts();

  if (loading) {
    return (
      <div className="product-list-status">
        <div className="loading-spinner"></div>
        <p>Đang tải sản phẩm...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-list-status error">
        <p>❌ Lỗi: {error}</p>
        <button onClick={loadProducts}>Thử lại</button>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="product-list-status">
        <p>Không có sản phẩm nào</p>
      </div>
    );
  }

  const sorted = products.sort((a, b) => b.price - a.price);

  return (
    <div className="product-list">
      <div className="product-grid">
        {products.map((sorted) => (
          <ProductCard key={sorted.id} {...sorted} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
