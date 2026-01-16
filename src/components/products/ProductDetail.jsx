import { useParams, useNavigate } from "react-router-dom";
import useProductDetail from "../../hooks/useProductDetail";
import "./ProductDetail.css";

function ProductDetail() {
  // Lấy id từ URL params
  const { id } = useParams();

  // Hook để điều hướng
  const navigate = useNavigate();

  // Custom hook để fetch data
  const { product, loading, error } = useProductDetail(id);

  // Loading state
  if (loading) {
    return (
      <div className="product-detail-status">
        <div className="loading-spinner"></div>
        <p>Đang tải...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="product-detail-status error">
        <p>❌ Lỗi: {error.message}</p>
        <button onClick={() => navigate("/products")}>← Quay lại</button>
      </div>
    );
  }

  // Not found
  if (!product) {
    return (
      <div className="product-detail-status">
        <p>Không tìm thấy sản phẩm</p>
        <button onClick={() => navigate("/products")}>← Quay lại</button>
      </div>
    );
  }

  // Success - Render product
  return (
    <div className="product-detail">
      <button
        className="back-button"
        onClick={() => navigate(-1)} // Quay lại trang trước
      >
        ← Quay lại
      </button>

      <div className="product-detail-content">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">{product.price?.toLocaleString()}đ</p>
          <p className="description">{product.description}</p>

          <button className="add-to-cart-btn">🛒 Thêm vào giỏ hàng</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
