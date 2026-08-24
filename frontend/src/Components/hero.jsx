// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaRocket, FaChartLine, FaBrain } from "react-icons/fa";
// import "../styles/hero.css";

// const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="container hero-container">
//         <motion.div
//           className="hero-content"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           <span className="badge">🚀 AI Powered Startup Validation</span>

//           <h1>
//             Validate Your <span>Startup Idea</span> Before You Build It
//           </h1>

//           <p>
//             Get AI-powered SWOT analysis, market insights, competitor research,
//             investment readiness, and actionable suggestions—all in one place.
//           </p>

//           <div className="hero-buttons">
//             <Link to="/validate" className="primary-btn">
//               Validate Now
//             </Link>

//             <Link to="/about" className="secondary-btn">
//               Learn More
//             </Link>
//           </div>
//         </motion.div>

//         <motion.div
//           className="hero-card"
//           initial={{ opacity: 0, x: 80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="mini-card">
//             <FaRocket />
//             <div>
//               <h3>Startup Score</h3>
//               <p>91/100</p>
//             </div>
//           </div>

//           <div className="mini-card">
//             <FaChartLine />
//             <div>
//               <h3>Market Potential</h3>
//               <p>High Growth</p>
//             </div>
//           </div>

//           <div className="mini-card">
//             <FaBrain />
//             <div>
//               <h3>AI Confidence</h3>
//               <p>96%</p>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;




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
          <div className="hero-topline">
            <span></span>
            AI STARTUP VALIDATION
          </div>

          <h1>
            Build less.
            <br />
            <span>Validate more.</span>
          </h1>

          <p>
            Turn your startup idea into a clear business report with
            AI-powered market research, SWOT analysis, competitor insights
            and actionable recommendations.
          </p>

          <div className="hero-buttons">
            <Link to="/validate" className="primary-btn">
              Validate your idea <span>↗</span>
            </Link>

            <Link to="/about" className="secondary-btn">
              Explore platform
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-black-card">

            <div className="hero-card-top">
              <span>AI VALIDATOR</span>
              <span>2026</span>
            </div>

            <div className="hero-card-title">
              <span>startup</span>
              <strong>analysis.</strong>
            </div>

            <div className="hero-card-grid">
              <div>
                <FaRocket />
                <span>Startup Score</span>
                <strong>91/100</strong>
              </div>

              <div>
                <FaChartLine />
                <span>Market Potential</span>
                <strong>High Growth</strong>
              </div>

              <div>
                <FaBrain />
                <span>AI Confidence</span>
                <strong>96%</strong>
              </div>
            </div>

            <div className="hero-card-footer">
              <span>Idea → Analysis → Decision</span>
              <span>↗</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;