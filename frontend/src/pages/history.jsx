


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/history.css";

const History = () => {
  const navigate = useNavigate();

  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/dashboard", {
          withCredentials: true,
        });

        setIdeas(res.data.ideas || []);
      } catch (err) {
        console.log("Error fetching history:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  return (
    <div className="history-page">
      <div className="container">

        <div className="history-header">
          <div>
            <div className="page-eyebrow">
              <span>02</span> YOUR ACTIVITY
            </div>

            <h1>
              Validation
              <br />
              <span>History.</span>
            </h1>

            <p>
              Every startup idea you've analyzed,
              kept in one place.
            </p>
          </div>

          <button
            className="history-new-btn"
            onClick={() => navigate("/validate")}
          >
            + New Validation
          </button>
        </div>

        <div className="history-card">

          {loading ? (
            <div className="history-empty">
              <h2>Loading history...</h2>
            </div>
          ) : ideas.length === 0 ? (
            <div className="history-empty">
              <span>NO REPORTS YET</span>
              <h2>Start with your first idea.</h2>
              <p>
                Validate a startup idea and your report
                will appear here.
              </p>

              <button
                className="history-new-btn"
                onClick={() => navigate("/validate")}
              >
                Validate First Idea ↗
              </button>
            </div>
          ) : (
            <div className="history-table-wrapper">
              <table className="history-table">
                <thead>
                  <tr>
                    <th>Startup</th>
                    <th>Idea</th>
                    <th>Score</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  {ideas.map((idea) => (
                    <tr
                      key={idea._id}
                      onClick={() => navigate(`/result/${idea._id}`)}
                    >
                      <td className="history-title">
                        {idea.startupTitle || "Untitled Startup"}
                      </td>

                      <td className="history-idea">
                        {idea.startupIdea || "No idea description"}
                      </td>

                      <td>
                        <span className="history-score">
                          {idea.ideaRating ?? 0}/10
                        </span>
                      </td>

                      <td>
                        {idea.createdAt
                          ? new Date(idea.createdAt).toLocaleDateString()
                          : "N/A"}
                      </td>

                      <td>
                        <button
                          className="view-report-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/result/${idea._id}`);
                          }}
                        >
                          View ↗
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default History;