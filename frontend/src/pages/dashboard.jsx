
import "../styles/dashboard.css";
import {
  FaLightbulb,
  FaChartLine,
  FaRocket,
  FaDownload,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const [ideas, setIdeas] = useState([]);
  const [stats, setStats] = useState({
    totalIdeas: 0,
    averageScore: 0,
    reports: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/dashboard", {
          withCredentials: true,
        });

        if (res.data.success) {
          setIdeas(res.data.ideas || []);

          setStats(
            res.data.stats || {
              totalIdeas: 0,
              averageScore: 0,
              reports: 0,
            }
          );
        }
      } catch (err) {
        console.log("Dashboard Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  return (
    <div className="dashboard">
      <div className="container">

        <div className="dashboard-header">
          <div>
            <div className="page-eyebrow">
              <span>01</span> PERSONAL WORKSPACE
            </div>

            <h1>Startup<br /><span>Dashboard.</span></h1>

            <p>
              Track your startup validations, reports and
              AI-generated insights in one place.
            </p>
          </div>

          <button
            className="new-btn"
            onClick={() => navigate("/validate")}
          >
            + Validate New Idea
          </button>
        </div>

        <div className="dashboard-stats">

          <div className="dashboard-stat-box">
            <div className="stat-icon"><FaRocket /></div>
            <span>Total Ideas</span>
            <strong>{loading ? "..." : stats.totalIdeas}</strong>
          </div>

          <div className="dashboard-stat-box">
            <div className="stat-icon"><FaChartLine /></div>
            <span>Average Score</span>
            <strong>
              {loading ? "..." : `${stats.averageScore}/10`}
            </strong>
          </div>

          <div className="dashboard-stat-box">
            <div className="stat-icon"><FaLightbulb /></div>
            <span>Reports</span>
            <strong>{loading ? "..." : stats.reports}</strong>
          </div>


        </div>

        <div className="dashboard-content">

          <div className="table-card">

            <div className="card-heading">
              <div>
                <span>RECENT ACTIVITY</span>
                <h2>Startup Reports</h2>
              </div>

              <span className="card-count">
                {ideas.length} reports
              </span>
            </div>

            {loading ? (
              <div className="empty-state">
                <p>Loading reports...</p>
              </div>
            ) : ideas.length === 0 ? (
              <div className="empty-state">
                <h3>No startup reports yet.</h3>
                <p>Validate your first idea to get started.</p>
              </div>
            ) : (
              <div className="dashboard-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Startup</th>
                      <th>Idea</th>
                      <th>Score</th>
                    </tr>
                  </thead>

                  <tbody>
                    {ideas.map((idea) => (
                      <tr
                        key={idea._id}
                        className="report-row"
                        onClick={() =>
                          navigate(`/result/${idea._id}`)
                        }
                      >
                        <td>
                          <strong>
                            {idea.startupTitle || "Untitled Startup"}
                          </strong>
                        </td>

                        <td>{idea.startupIdea}</td>

                        <td>
                          <span className="score-pill">
                            {idea.ideaRating ?? 0}/10
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="insight-card">
            <span className="insight-label">QUICK INSIGHTS</span>

            <h2>AI Suggestions</h2>

            <ul>
              <li>Improve revenue model.</li>
              <li>Market demand is high.</li>
              <li>Competition is moderate.</li>
              <li>Investor readiness: Good.</li>
            </ul>

            <div className="insight-footer">
              Based on your validation activity
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;