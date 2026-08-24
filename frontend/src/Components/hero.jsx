import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaRocket, FaChartLine, FaBrain } from "react-icons/fa";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="badge">🚀 AI Powered Startup Validation</span>

          <h1>
            Validate Your <span>Startup Idea</span> Before You Build It
          </h1>

          <p>
            Get AI-powered SWOT analysis, market insights, competitor research,
            investment readiness, and actionable suggestions—all in one place.
          </p>

          <div className="hero-buttons">
            <Link to="/validate" className="primary-btn">
              Validate Now
            </Link>

            <Link to="/about" className="secondary-btn">
              Learn More
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-card"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mini-card">
            <FaRocket />
            <div>
              <h3>Startup Score</h3>
              <p>91/100</p>
            </div>
          </div>

          <div className="mini-card">
            <FaChartLine />
            <div>
              <h3>Market Potential</h3>
              <p>High Growth</p>
            </div>
          </div>

          <div className="mini-card">
            <FaBrain />
            <div>
              <h3>AI Confidence</h3>
              <p>96%</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
