import { Link } from "react-router-dom";
import "../styles/cta.css";

const Cta = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-box">
          <h2>Ready to Validate Your Startup Idea?</h2>

          <p>
            Turn your idea into a successful business with AI-powered market
            research, SWOT analysis, competitor insights, and investor readiness
            reports.
          </p>

          <Link to="/validate" className="cta-btn">
            Start Free Validation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
