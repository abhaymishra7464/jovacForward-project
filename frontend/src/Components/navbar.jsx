import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        await axios.get("http://localhost:5000/api/auth/me", {
          withCredentials: true,
        });

        setIsLoggedIn(true);
      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    checkLogin();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );

      setIsLoggedIn(false);
      setMenuOpen(false);

      navigate("/");
    } catch (err) {
      console.log("Logout Error:", err);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <div className="navbar">

        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-mark">AI</span>
          <span>Validator</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="nav-links">
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/dashboard" onClick={closeMenu}>
            Dashboard
          </NavLink>

          <NavLink to="/history" onClick={closeMenu}>
            History
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </nav>

        {/* DESKTOP AUTH */}
        <div className="auth-buttons">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="nav-login"
                onClick={closeMenu}
              >
                Login
              </Link>

              <Link
                to="/register"
                className="nav-register"
                onClick={closeMenu}
              >
                Register
              </Link>
            </>
          ) : (
            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>

        {/* HAMBURGER */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* MOBILE MENU */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/dashboard" onClick={closeMenu}>
            Dashboard
          </NavLink>

          <NavLink to="/history" onClick={closeMenu}>
            History
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <div className="mobile-auth">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="mobile-login"
                  onClick={closeMenu}
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="mobile-register"
                  onClick={closeMenu}
                >
                  Register
                </Link>
              </>
            ) : (
              <button
                className="mobile-logout"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
          </div>

        </div>

      </div>
    </header>
  );
};

export default Navbar;