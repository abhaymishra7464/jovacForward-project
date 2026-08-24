// import { Link } from "react-router-dom";
// import "../styles/footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container footer-content">
//         <div>
//           <h2>AI Validator</h2>
//           <p>
//             AI-powered startup validation platform for entrepreneurs and
//             innovators.
//           </p>
//         </div>

//         <div className="footer-links">
//           <Link to="/">Home</Link>
//           <Link to="/dashboard">Dashboard</Link>
//           <Link to="/history">History</Link>
//           <Link to="/about">About</Link>
//         </div>
//       </div>

//       <div className="copyright">
//         © 2026 AI Startup Validator. All Rights Reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">

        <div className="footer-brand">
          <div className="footer-logo">
            AI<span>Validator</span>
          </div>

          <p>
            AI-powered startup validation for founders
            who want to build with confidence.
          </p>
        </div>

        <div className="footer-links">
          <span>EXPLORE</span>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/history">History</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="footer-links">
          <span>START</span>
          <Link to="/validate">Validate Idea</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>

      </div>

     
    </footer>
  );
};

export default Footer;