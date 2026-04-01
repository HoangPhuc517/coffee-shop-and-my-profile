import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");

      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <div className="logo">☕ Coffee Shop</div>
      </Link>

      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Trang chủ
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Sản phẩm
        </NavLink>

        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Thông tin
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
