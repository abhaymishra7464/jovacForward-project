// import { motion } from "framer-motion";
// import { FaBrain, FaChartLine, FaLightbulb, FaUsers } from "react-icons/fa";
// import "../styles/features.css";

// const features = [
//   {
//     icon: <FaBrain />,
//     title: "AI Analysis",
//     desc: "Analyze your startup idea using advanced AI models.",
//   },
//   {
//     icon: <FaChartLine />,
//     title: "Market Research",
//     desc: "Understand market trends and growth opportunities.",
//   },
//   {
//     icon: <FaLightbulb />,
//     title: "SWOT Report",
//     desc: "Identify strengths, weaknesses, opportunities and threats.",
//   },
//   {
//     icon: <FaUsers />,
//     title: "Competitor Insights",
//     desc: "Compare your startup idea with existing competitors.",
//   },
// ];

// const Features = () => {
//   return (
//     <section className="features">
//       <div className="container">
//         <div className="section-title">
//           <h2>Everything You Need to Validate Your Startup</h2>
//           <p>
//             Powerful AI tools that help founders evaluate ideas before investing
//             time and money.
//           </p>
//         </div>

//         <div className="feature-grid">
//           {features.map((item, index) => (
//             <motion.div
//               className="feature-card"
//               key={index}
//               whileHover={{ y: -8 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="feature-icon">{item.icon}</div>

//               <h3>{item.title}</h3>

//               <p>{item.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;





import { motion } from "framer-motion";
import { FaBrain, FaChartLine, FaLightbulb, FaUsers } from "react-icons/fa";
import "../styles/features.css";

const features = [
  {
    icon: <FaBrain />,
    title: "AI Analysis",
    desc: "Analyze your startup idea using advanced AI models.",
  },
  {
    icon: <FaChartLine />,
    title: "Market Research",
    desc: "Understand market trends and growth opportunities.",
  },
  {
    icon: <FaLightbulb />,
    title: "SWOT Report",
    desc: "Identify strengths, weaknesses, opportunities and threats.",
  },
  {
    icon: <FaUsers />,
    title: "Competitor Insights",
    desc: "Compare your startup idea with existing competitors.",
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">

        <div className="section-heading">
          <span>03 — CAPABILITIES</span>
          <h2>
            Everything you need
            <br />
            <em>before you build.</em>
          </h2>
        </div>

        <div className="feature-grid">
          {features.map((item, index) => (
            <motion.div
              className="feature-card"
              key={index}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-number">
                0{index + 1}
              </div>

              <div className="feature-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <span className="feature-arrow">↗</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;