import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({
  id,
  name = "Sản phẩm không có tên",
  price = 0,
  description = "Không có mô tả sản phẩm",
  image = "../public/coffee-shop-logos.jpg",
  isNew = true,
  discount = 0.1,
}) {
  const formattedPrice = price.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  return (
    <Link to={`/products/${id}`} className="product-card-link">
      <div className="product-card">
        {/* Image */}
        <div className="product-image">
          <img src={image} alt={name} />
          {isNew && <span className="badge-new">New</span>}
          {discount > 0 && (
            <span className="badge-discount">-{discount * 100}%</span>
          )}
        </div>

        {/* Content */}
        <div className="product-content">
          <h3 className="product-name">{name}</h3>
          <p className="product-description">{description}</p>

          <div className="product-footer">
            <span className="product-price">{formattedPrice}</span>
            <button className="add-to-cart-btn">Thêm vào giỏ</button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
