// import { Link, NavLink, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "../styles/navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const checkLogin = async () => {
//       try {
//         await axios.get("http://localhost:5000/api/auth/me", {
//           withCredentials: true,
//         });

//         setIsLoggedIn(true);
//       } catch (err) {
//         setIsLoggedIn(false);
//       }
//     };

//     checkLogin();
//   }, []);

//  const handleLogout = async () => {
//     try {
//       await axios.post(
//         "http://localhost:5000/api/auth/logout",
//         {},
//         {
//           withCredentials: true,
//         }
//       );

//       setIsLoggedIn(false);
//       navigate("/");
//     } catch (err) {
//       console.log("Logout Error:", err);
//     }
//   };

//   return (
//     <header className="navbar">
//       <div className="container nav-container">
//         {/* Logo */}
//         <Link to="/" className="logo">
//           AI<span>Validator</span>
//         </Link>

//         {/* Navigation */}
//         <nav className="nav-links">
//           <NavLink to="/">Home</NavLink>

//           <NavLink to="/dashboard">Dashboard</NavLink>

//           <NavLink to="/history">History</NavLink>

//           <NavLink to="/about">About</NavLink>
//         </nav>

//         {/* Auth Buttons */}
//         <div className="auth-buttons">
//           {!isLoggedIn ? (
//             <>
//               <Link to="/login" className="login-btn">
//                 Login
//               </Link>

//               <Link to="/register" className="register-btn">
//                 Register
//               </Link>
//             </>
//           ) : (
//             <button className="logout-btn" onClick={handleLogout}>
//               Logout
//             </button>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      navigate("/");
    } catch (err) {
      console.log("Logout Error:", err);
    }
  };

  return (
    <header className="navbar">
      <div className="container nav-container">

        <Link to="/" className="logo">
          <span className="logo-mark">AI</span>
          <span>Validator</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/history">History</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        <div className="auth-buttons">
          {!isLoggedIn ? (
            <>
              <Link to="/login" className="nav-login">
                Login
              </Link>

              <Link to="/register" className="nav-register">
                Register
              </Link>
            </>
          ) : (
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>

      </div>
    </header>
  );
};

export default Navbar;