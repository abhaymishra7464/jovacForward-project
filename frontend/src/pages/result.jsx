
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import html2pdf from "html2pdf.js";
import "../styles/result.css";

const Result = () => {
  const { id } = useParams();

  const [idea, setIdea] = useState(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);

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

 

  const downloadPDF = async () => {
    const element = document.getElementById("result-pdf");

    if (!element) {
      console.log("PDF content not found");
      return;
    }

    try {
      setDownloading(true);

      const options = {
        margin: [10, 10, 10, 10],

        filename: `${idea.startupTitle || "startup-analysis"}-report.pdf`,

        image: {
          type: "jpeg",
          quality: 0.98,
        },

        html2canvas: {
          scale: 2,
          useCORS: true,
          logging: false,
          scrollX: 0,
          scrollY: 0,
        },

        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },

        pagebreak: {
          mode: ["css", "legacy"],
        },
      };

      await html2pdf()
        .set(options)
        .from(element)
        .save();
    } catch (err) {
      console.log("PDF Download Error:", err);
      alert("Unable to download PDF. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  // ================= LOADING =================

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


        <div id="result-pdf">

          {/* HEADER */}

          <div className="result-header">
            <div className="page-eyebrow">
              <span>REPORT</span> AI STARTUP VALIDATION
            </div>

            <h1>{idea.startupTitle}</h1>

            <p>{idea.summary}</p>
          </div>

          {/* RATING */}

          <div className="rating-card">
            <div>
              <span>STARTUP SCORE</span>

              <h2>
                {idea.ideaRating}
                <small>/10</small>
              </h2>
            </div>

            <div className="rating-description">
              Overall assessment based on market,
              business model and startup potential.
            </div>
          </div>

          {/* PROBLEM */}

          <div className="result-card">
            <div className="result-label">
              01 — PROBLEM
            </div>

            <h2>Problem Statement</h2>

            <p>{idea.problemStatement}</p>
          </div>

          {/* SOLUTION */}

          <div className="result-card">
            <div className="result-label">
              02 — SOLUTION
            </div>

            <h2>Solution</h2>

            <p>{idea.solution}</p>
          </div>

          {/* TARGET AUDIENCE */}

          <div className="result-card">
            <div className="result-label">
              03 — AUDIENCE
            </div>

            <h2>Target Audience</h2>

            {Array.isArray(idea.targetAudience) ? (
              <div className="tag-list">
                {idea.targetAudience.map((item, index) => (
                  <span key={index}>
                    {item}
                  </span>
                ))}
              </div>
            ) : (
              <p>{idea.targetAudience}</p>
            )}
          </div>

          {/* MARKET SIZE */}

          <div className="result-card">
            <div className="result-label">
              04 — MARKET
            </div>

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

          {/* BUSINESS MODEL */}

          <div className="result-card">
            <div className="result-label">
              05 — BUSINESS
            </div>

            <h2>Business Model</h2>

            {Array.isArray(idea.businessModel) ? (
              <div className="clean-list">

                {idea.businessModel.map((model, index) => (
                  <div key={index}>

                    <span>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p>{model}</p>

                  </div>
                ))}

              </div>
            ) : (
              <p>{idea.businessModel}</p>
            )}
          </div>

          {/* SWOT */}

          <div className="result-card">
            <div className="result-label">
              06 — SWOT
            </div>

            <h2>SWOT Analysis</h2>

            {idea.swot &&
            typeof idea.swot === "object" ? (
              <div className="swot-grid">

                <div className="swot-item">
                  <span>STRENGTHS</span>

                  <p>
                    {Array.isArray(
                      idea.swot.strengths
                    )
                      ? idea.swot.strengths.join(", ")
                      : idea.swot.strengths}
                  </p>
                </div>

                <div className="swot-item">
                  <span>WEAKNESSES</span>

                  <p>
                    {Array.isArray(
                      idea.swot.weaknesses
                    )
                      ? idea.swot.weaknesses.join(", ")
                      : idea.swot.weaknesses}
                  </p>
                </div>

                <div className="swot-item">
                  <span>OPPORTUNITIES</span>

                  <p>
                    {Array.isArray(
                      idea.swot.opportunities
                    )
                      ? idea.swot.opportunities.join(", ")
                      : idea.swot.opportunities}
                  </p>
                </div>

                <div className="swot-item">
                  <span>THREATS</span>

                  <p>
                    {Array.isArray(
                      idea.swot.threats
                    )
                      ? idea.swot.threats.join(", ")
                      : idea.swot.threats}
                  </p>
                </div>

              </div>
            ) : (
              <p>{idea.swot}</p>
            )}
          </div>

          {/* COMPETITORS */}

          <div className="result-card">
            <div className="result-label">
              07 — COMPETITION
            </div>

            <h2>Competitors</h2>

            {Array.isArray(idea.competitors) ? (
              <div className="competitors-list">

                {idea.competitors.map(
                  (competitor, index) => (
                    <div
                      className="competitor-card"
                      key={index}
                    >

                      {typeof competitor ===
                      "object" ? (
                        <>
                          <div className="competitor-number">
                            {String(
                              index + 1
                            ).padStart(2, "0")}
                          </div>

                          <div>
                            <h3>
                              {competitor.name}
                            </h3>

                            <p>
                              {competitor.strength}
                            </p>
                          </div>
                        </>
                      ) : (
                        <p>{competitor}</p>
                      )}

                    </div>
                  )
                )}

              </div>
            ) : (
              <p>{idea.competitors}</p>
            )}
          </div>

          {/* RISKS */}

          <div className="result-card">
            <div className="result-label">
              08 — RISKS
            </div>

            <h2>Risks</h2>

            {Array.isArray(idea.risks) ? (
              <div className="clean-list">

                {idea.risks.map((risk, index) => (
                  <div key={index}>

                    <span>
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </span>

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

          {/* SUGGESTIONS */}

          <div className="result-card">
            <div className="result-label">
              09 — NEXT STEPS
            </div>

            <h2>Suggestions</h2>

            {Array.isArray(idea.suggestions) ? (
              <div className="clean-list">

                {idea.suggestions.map(
                  (suggestion, index) => (
                    <div key={index}>

                      <span>
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </span>

                      <p>
                        {typeof suggestion ===
                        "object"
                          ? JSON.stringify(
                              suggestion
                            )
                          : suggestion}
                      </p>

                    </div>
                  )
                )}

              </div>
            ) : (
              <p>{idea.suggestions}</p>
            )}
          </div>

          {/* FINAL VERDICT */}

          <div className="verdict-card">
            <span>FINAL VERDICT</span>

            <h2>{idea.finalVerdict}</h2>
          </div>

        </div>

        

        <button
          className="download-btn"
          onClick={downloadPDF}
          disabled={downloading}
        >
          {downloading
            ? "Generating PDF..."
            : "↓ Download PDF"}
        </button>

        <Link
          className="back-btn"
          to="/dashboard"
        >
          ← Back to Dashboard
        </Link>

      </div>
    </div>
  );
};

export default Result;