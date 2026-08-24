// import { FaPen, FaRobot, FaChartBar, FaDownload } from "react-icons/fa";
// import "../styles/howitworks.css";

// const steps = [
//   {
//     icon: <FaPen />,
//     title: "Submit Idea",
//     desc: "Enter your startup idea with a brief description.",
//   },
//   {
//     icon: <FaRobot />,
//     title: "AI Analysis",
//     desc: "Our AI analyzes your idea using multiple business parameters.",
//   },
//   {
//     icon: <FaChartBar />,
//     title: "Detailed Report",
//     desc: "Get SWOT, competitors, market insights and startup score.",
//   },
//   {
//     icon: <FaDownload />,
//     title: "Save Report",
//     desc: "Download or save your startup validation report anytime.",
//   },
// ];

// const HowItWorks = () => {
//   return (
//     <section className="how-it-works">
//       <div className="container">
//         <div className="section-title">
//           <h2>How It Works</h2>
//           <p>Validate your startup in just four simple steps.</p>
//         </div>

//         <div className="steps">
//           {steps.map((step, index) => (
//             <div className="step-card" key={index}>
//               <div className="step-number">{index + 1}</div>

//               <div className="step-icon">{step.icon}</div>

//               <h3>{step.title}</h3>

//               <p>{step.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;






import { FaPen, FaRobot, FaChartBar, FaDownload } from "react-icons/fa";
import "../styles/howitworks.css";

const steps = [
  {
    icon: <FaPen />,
    title: "Submit Idea",
    desc: "Enter your startup idea with a brief description.",
  },
  {
    icon: <FaRobot />,
    title: "AI Analysis",
    desc: "Our AI analyzes your idea using multiple business parameters.",
  },
  {
    icon: <FaChartBar />,
    title: "Detailed Report",
    desc: "Get SWOT, competitors, market insights and startup score.",
  },
  {
    icon: <FaDownload />,
    title: "Save Report",
    desc: "Download or save your startup validation report anytime.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">

        <div className="how-heading">
          <span>04</span>
          <div>
            <p>PROCESS</p>
            <h2>How it works.</h2>
          </div>
        </div>

        <div className="steps">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>

              <div className="step-top">
                <span>0{index + 1}</span>
                {step.icon}
              </div>

              <h3>{step.title}</h3>
              <p>{step.desc}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;