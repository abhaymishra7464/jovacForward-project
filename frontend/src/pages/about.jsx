
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="container">

        <div className="about-hero">
          <div className="page-eyebrow">
            <span>ABOUT</span> AI STARTUP VALIDATOR
          </div>

          <h1>
            Better ideas
            <br />
            <span>start with better questions.</span>
          </h1>

          <p>
            AI Startup Validator helps founders evaluate startup
            ideas before investing significant time, money and resources.
          </p>
        </div>

        <div className="about-grid">

          <div className="about-black">
            <span>OUR PURPOSE</span>
            <h2>
              Think first.
              <br />
              Build second.
            </h2>
          </div>

          <div className="about-text">
            <span>WHAT WE DO</span>

            <p>
              The platform combines AI analysis with structured
              startup evaluation to help founders understand their
              market, customers, competitors, risks and opportunities.
            </p>

            <p>
              Instead of relying only on intuition, founders can
              use a clear validation report to make more informed
              decisions.
            </p>
          </div>

        </div>

        <div className="about-values">
          <div>
            <span>01</span>
            <h3>Clarity</h3>
            <p>Turn complex startup questions into understandable insights.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Speed</h3>
            <p>Get a structured first-pass analysis in minutes.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Action</h3>
            <p>Move from analysis to practical next steps.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;