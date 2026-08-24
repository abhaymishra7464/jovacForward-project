// import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";
// import "../styles/result.css";

// const Result = () => {
//   const { id } = useParams();

//   const [idea, setIdea] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchResult = async () => {
//       try {
//         const res = await axios.get(
//           `http://localhost:5000/api/dashboard/${id}`,
//           {
//             withCredentials: true,
//           }
//         );

//         setIdea(res.data.idea);
//       } catch (err) {
//         console.log("Error fetching result:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchResult();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="result-page">
//         <div className="result-container">
//           <h2>Loading analysis...</h2>
//         </div>
//       </div>
//     );
//   }

//   if (!idea) {
//     return (
//       <div className="result-page">
//         <div className="result-container">
//           <h2>Analysis not found.</h2>
//           <Link to="/dashboard">← Back to Dashboard</Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="result-page">
//       <div className="result-container">

//         {/* Header */}
//         <div className="result-header">
//           <h1>{idea.startupTitle}</h1>
//           <p>{idea.summary}</p>
//         </div>

//         {/* Rating */}
//         <div className="result-card rating-card">
//           <h2>⭐ Idea Rating</h2>
//           <h3>{idea.ideaRating}/10</h3>
//         </div>

//         {/* Problem */}
//         <div className="result-card">
//           <h2>Problem Statement</h2>
//           <p>{idea.problemStatement}</p>
//         </div>

//         {/* Solution */}
//         <div className="result-card">
//           <h2>Solution</h2>
//           <p>{idea.solution}</p>
//         </div>

//         {/* Target Audience */}
//         <div className="result-card">
//           <h2>Target Audience</h2>
//           <p>{idea.targetAudience}</p>
//         </div>

//         {/* Market Size */}
//         <div className="result-card">
//           <h2>Market Size</h2>

//           {idea.marketSize && typeof idea.marketSize === "object" ? (
//             <div className="market-grid">
//               <div>
//                 <h4>TAM</h4>
//                 <p>{idea.marketSize.tam}</p>
//               </div>

//               <div>
//                 <h4>SAM</h4>
//                 <p>{idea.marketSize.sam}</p>
//               </div>

//               <div>
//                 <h4>SOM</h4>
//                 <p>{idea.marketSize.som}</p>
//               </div>
//             </div>
//           ) : (
//             <p>{idea.marketSize}</p>
//           )}
//         </div>

//         {/* Business Model */}
//         {/* <div className="result-card">
//           <h2>Business Model</h2>

//           {typeof idea.businessModel === "object" ? (
//             <pre>{JSON.stringify(idea.businessModel, null, 2)}</pre>
//           ) : (
//             <p>{idea.businessModel}</p>
//           )}
//         </div> */}

//         <div className="result-card">
//           <h2>Business Model</h2>

//           {Array.isArray(idea.businessModel) ? (
//             <ul>
//               {idea.businessModel.map((model, index) => (
//                 <li key={index}>{model}</li>
//               ))}
//             </ul>
//           ) : (
//             <p>{idea.businessModel}</p>
//           )}
//         </div>

//         {/* SWOT */}
//         <div className="result-card">
//           <h2>SWOT Analysis</h2>

//           {idea.swot && typeof idea.swot === "object" ? (
//             <div className="swot-grid">
//               <div>
//                 <h4>Strengths</h4>
//                 <p>
//                   {Array.isArray(idea.swot.strengths)
//                     ? idea.swot.strengths.join(", ")
//                     : idea.swot.strengths}
//                 </p>
//               </div>

//               <div>
//                 <h4>Weaknesses</h4>
//                 <p>
//                   {Array.isArray(idea.swot.weaknesses)
//                     ? idea.swot.weaknesses.join(", ")
//                     : idea.swot.weaknesses}
//                 </p>
//               </div>

//               <div>
//                 <h4>Opportunities</h4>
//                 <p>
//                   {Array.isArray(idea.swot.opportunities)
//                     ? idea.swot.opportunities.join(", ")
//                     : idea.swot.opportunities}
//                 </p>
//               </div>

//               <div>
//                 <h4>Threats</h4>
//                 <p>
//                   {Array.isArray(idea.swot.threats)
//                     ? idea.swot.threats.join(", ")
//                     : idea.swot.threats}
//                 </p>
//               </div>
//             </div>
//           ) : (
//             <p>{idea.swot}</p>
//           )}
//         </div>

//         {/* Competitors */}
//         {/* <div className="result-card">
//           <h2>Competitors</h2>

//           {Array.isArray(idea.competitors) ? (
//             <ul>
//               {idea.competitors.map((competitor, index) => (
//                 <li key={index}>
//                   {typeof competitor === "object"
//                     ? JSON.stringify(competitor)
//                     : competitor}
//                 </li>
//               ))}
//             </ul>
//           ) : typeof idea.competitors === "object" ? (
//             <pre>{JSON.stringify(idea.competitors, null, 2)}</pre>
//           ) : (
//             <p>{idea.competitors}</p>
//           )}
//         </div> */}

//         <div className="result-card">
//           <h2>Competitors</h2>

//           {Array.isArray(idea.competitors) ? (
//             <div className="competitors-list">
//               {idea.competitors.map((competitor, index) => (
//                 <div className="competitor-card" key={index}>
//                   {typeof competitor === "object" ? (
//                     <>
//                       <h3>{competitor.name}</h3>
//                       <p>{competitor.strength}</p>
//                     </>
//                   ) : (
//                     <p>{competitor}</p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p>{idea.competitors}</p>
//           )}
//         </div>

//         {/* Risks */}
//         <div className="result-card">
//           <h2>Risks</h2>

//           {Array.isArray(idea.risks) ? (
//             <ul>
//               {idea.risks.map((risk, index) => (
//                 <li key={index}>
//                   {typeof risk === "object"
//                     ? JSON.stringify(risk)
//                     : risk}
//                 </li>
//               ))}
//             </ul>
//           ) : typeof idea.risks === "object" ? (
//             <pre>{JSON.stringify(idea.risks, null, 2)}</pre>
//           ) : (
//             <p>{idea.risks}</p>
//           )}
//         </div>

//         {/* Suggestions */}
//         <div className="result-card">
//           <h2>Suggestions</h2>

//           {Array.isArray(idea.suggestions) ? (
//             <ul>
//               {idea.suggestions.map((suggestion, index) => (
//                 <li key={index}>
//                   {typeof suggestion === "object"
//                     ? JSON.stringify(suggestion)
//                     : suggestion}
//                 </li>
//               ))}
//             </ul>
//           ) : typeof idea.suggestions === "object" ? (
//             <pre>{JSON.stringify(idea.suggestions, null, 2)}</pre>
//           ) : (
//             <p>{idea.suggestions}</p>
//           )}
//         </div>

//         {/* Final Verdict */}
//         <div className="result-card">
//           <h2>Final Verdict</h2>
//           <p>{idea.finalVerdict}</p>
//         </div>

//         <Link className="back-btn" to="/dashboard">
//           ← Back to Dashboard
//         </Link>

//       </div>
//     </div>
//   );
// };

// export default Result;









import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/result.css";

const Result = () => {
  const { id } = useParams();

  const [idea, setIdea] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResult = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/dashboard/${id}`,
          {
            withCredentials: true,
          }
        );

        setIdea(res.data.idea);
      } catch (err) {
        console.log("Error fetching result:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [id]);

  if (loading) {
    return (
      <div className="result-page">
        <div className="container result-loading">
          <span>LOADING REPORT</span>
          <h2>Preparing your analysis...</h2>
        </div>
      </div>
    );
  }

  if (!idea) {
    return (
      <div className="result-page">
        <div className="container result-loading">
          <span>404</span>
          <h2>Analysis not found.</h2>
          <Link to="/dashboard">← Back to Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="result-page">
      <div className="container">

        <div className="result-header">
          <div className="page-eyebrow">
            <span>REPORT</span> AI STARTUP VALIDATION
          </div>

          <h1>{idea.startupTitle}</h1>

          <p>{idea.summary}</p>
        </div>

        <div className="rating-card">
          <div>
            <span>STARTUP SCORE</span>
            <h2>{idea.ideaRating}<small>/10</small></h2>
          </div>

          <div className="rating-description">
            Overall assessment based on market,
            business model and startup potential.
          </div>
        </div>

        <div className="result-card">
          <div className="result-label">01 — PROBLEM</div>
          <h2>Problem Statement</h2>
          <p>{idea.problemStatement}</p>
        </div>

        <div className="result-card">
          <div className="result-label">02 — SOLUTION</div>
          <h2>Solution</h2>
          <p>{idea.solution}</p>
        </div>

        <div className="result-card">
          <div className="result-label">03 — AUDIENCE</div>
          <h2>Target Audience</h2>

          {Array.isArray(idea.targetAudience) ? (
            <div className="tag-list">
              {idea.targetAudience.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          ) : (
            <p>{idea.targetAudience}</p>
          )}
        </div>

        <div className="result-card">
          <div className="result-label">04 — MARKET</div>
          <h2>Market Size</h2>

          {idea.marketSize &&
          typeof idea.marketSize === "object" ? (
            <div className="market-grid">

              <div>
                <span>TAM</span>
                <p>{idea.marketSize.tam}</p>
              </div>

              <div>
                <span>SAM</span>
                <p>{idea.marketSize.sam}</p>
              </div>

              <div>
                <span>SOM</span>
                <p>{idea.marketSize.som}</p>
              </div>

            </div>
          ) : (
            <p>{idea.marketSize}</p>
          )}
        </div>

        <div className="result-card">
          <div className="result-label">05 — BUSINESS</div>
          <h2>Business Model</h2>

          {Array.isArray(idea.businessModel) ? (
            <div className="clean-list">
              {idea.businessModel.map((model, index) => (
                <div key={index}>
                  <span>0{index + 1}</span>
                  <p>{model}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>{idea.businessModel}</p>
          )}
        </div>

        <div className="result-card">
          <div className="result-label">06 — SWOT</div>
          <h2>SWOT Analysis</h2>

          {idea.swot &&
          typeof idea.swot === "object" ? (
            <div className="swot-grid">

              <div className="swot-item">
                <span>STRENGTHS</span>
                <p>
                  {Array.isArray(idea.swot.strengths)
                    ? idea.swot.strengths.join(", ")
                    : idea.swot.strengths}
                </p>
              </div>

              <div className="swot-item">
                <span>WEAKNESSES</span>
                <p>
                  {Array.isArray(idea.swot.weaknesses)
                    ? idea.swot.weaknesses.join(", ")
                    : idea.swot.weaknesses}
                </p>
              </div>

              <div className="swot-item">
                <span>OPPORTUNITIES</span>
                <p>
                  {Array.isArray(idea.swot.opportunities)
                    ? idea.swot.opportunities.join(", ")
                    : idea.swot.opportunities}
                </p>
              </div>

              <div className="swot-item">
                <span>THREATS</span>
                <p>
                  {Array.isArray(idea.swot.threats)
                    ? idea.swot.threats.join(", ")
                    : idea.swot.threats}
                </p>
              </div>

            </div>
          ) : (
            <p>{idea.swot}</p>
          )}
        </div>

        <div className="result-card">
          <div className="result-label">07 — COMPETITION</div>
          <h2>Competitors</h2>

          {Array.isArray(idea.competitors) ? (
            <div className="competitors-list">
              {idea.competitors.map((competitor, index) => (
                <div className="competitor-card" key={index}>

                  {typeof competitor === "object" ? (
                    <>
                      <div className="competitor-number">
                        0{index + 1}
                      </div>

                      <div>
                        <h3>{competitor.name}</h3>
                        <p>{competitor.strength}</p>
                      </div>
                    </>
                  ) : (
                    <p>{competitor}</p>
                  )}

                </div>
              ))}
            </div>
          ) : (
            <p>{idea.competitors}</p>
          )}
        </div>

        <div className="result-card">
          <div className="result-label">08 — RISKS</div>
          <h2>Risks</h2>

          {Array.isArray(idea.risks) ? (
            <div className="clean-list">
              {idea.risks.map((risk, index) => (
                <div key={index}>
                  <span>0{index + 1}</span>
                  <p>
                    {typeof risk === "object"
                      ? JSON.stringify(risk)
                      : risk}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>{idea.risks}</p>
          )}
        </div>

        <div className="result-card">
          <div className="result-label">09 — NEXT STEPS</div>
          <h2>Suggestions</h2>

          {Array.isArray(idea.suggestions) ? (
            <div className="clean-list">
              {idea.suggestions.map((suggestion, index) => (
                <div key={index}>
                  <span>0{index + 1}</span>
                  <p>
                    {typeof suggestion === "object"
                      ? JSON.stringify(suggestion)
                      : suggestion}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>{idea.suggestions}</p>
          )}
        </div>

        <div className="verdict-card">
          <span>FINAL VERDICT</span>
          <h2>{idea.finalVerdict}</h2>
        </div>

        <Link className="back-btn" to="/dashboard">
          ← Back to Dashboard
        </Link>

      </div>
    </div>
  );
};

export default Result;