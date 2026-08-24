import { Link } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <h2>AI Validator</h2>
          <p>
            AI-powered startup validation platform for entrepreneurs and
            innovators.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/history">History</Link>
          <Link to="/about">About</Link>
        </div>
      </div>

      <div className="copyright">
        © 2026 AI Startup Validator. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
