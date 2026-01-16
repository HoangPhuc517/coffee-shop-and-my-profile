import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="not-found-emoji">☕💔</div>
      <h1>404</h1>
      <p>
        Oops! Trang bạn đang tìm không tồn tại.
        <br />
        Có lẽ nó đã bị uống mất rồi ☕
      </p>
      <Link to="/" className="home-button">
        ← Về trang chủ
      </Link>
    </div>
  );
}

export default NotFoundPage;
