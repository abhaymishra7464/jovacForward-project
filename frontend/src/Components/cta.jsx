// import { Link } from "react-router-dom";
// import "../styles/cta.css";

// const Cta = () => {
//   return (
//     <section className="cta">
//       <div className="container">
//         <div className="cta-box">
//           <h2>Ready to Validate Your Startup Idea?</h2>

//           <p>
//             Turn your idea into a successful business with AI-powered market
//             research, SWOT analysis, competitor insights, and investor readiness
//             reports.
//           </p>

//           <Link to="/validate" className="cta-btn">
//             Start Free Validation
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Cta;





import { Link } from "react-router-dom";
import "../styles/cta.css";

const Cta = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-box">

          <div>
            <span className="cta-label">05 — START HERE</span>

            <h2>
              Have an idea?
              <br />
              <span>Let's validate it.</span>
            </h2>
          </div>

          <div className="cta-action">
            <p>
              Make your next business decision with data,
              analysis and AI — before spending time and money.
            </p>

            <Link to="/validate" className="cta-btn">
              Start validation ↗
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Cta;