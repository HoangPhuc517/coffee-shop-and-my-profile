import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Thông tin liên hệ */}
        <div className="footer-section">
          <h3>☕ Coffee Shop</h3>
          <p>Cà phê ngon - Không gian đẹp</p>
        </div>

        {/* Liên hệ */}
        <div className="footer-section">
          <h4>Liên hệ</h4>
          <p>📍 43 Vườn Lài, An Phú Đông, TP.Hồ Chí Minh</p>
          <p>📞 0337 523 349</p>
          <p>✉️ Hgphuc2k3@gmail.com</p>
        </div>

        {/* Giờ mở cửa */}
        <div className="footer-section">
          <h4>Giờ mở cửa</h4>
          <p>Thứ 2 - Thứ 6: 7:00 - 22:00</p>
          <p>Thứ 7 - Chủ nhật: 8:00 - 23:00</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Coffee Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
