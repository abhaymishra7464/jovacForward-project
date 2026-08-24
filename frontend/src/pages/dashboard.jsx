import "../styles/dashboard.css";
import { FaLightbulb, FaChartLine, FaRocket, FaDownload } from "react-icons/fa";
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
            },
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
      {/* ================= HEADER ================= */}

      <div className="dashboard-header">
        <div>
          <span className="dashboard-badge">👋 Welcome Back</span>

          <h1>Startup Dashboard</h1>

          <p>Track all your startup validations and AI reports in one place.</p>
        </div>

        <button className="new-btn" onClick={() => navigate("/validate")}>
          + Validate New Idea
        </button>
      </div>

      {/* ================= STATS ================= */}

      <div className="dashboard-stats">
        {/* Total Ideas */}
        <div className="dashboard-stat-box">
          <FaRocket />

          <h2>{loading ? "..." : stats.totalIdeas}</h2>

          <p>Total Ideas</p>
        </div>

        {/* Average Score */}
        <div className="dashboard-stat-box">
          <FaChartLine />

          <h2>{loading ? "..." : `${stats.averageScore}/10`}</h2>

          <p>Average Score</p>
        </div>

        {/* Reports */}
        <div className="dashboard-stat-box">
          <FaLightbulb />

          <h2>{loading ? "..." : stats.reports}</h2>

          <p>Reports</p>
        </div>

        {/* Downloads */}
        <div className="dashboard-stat-box">
          <FaDownload />

          <h2>0</h2>

          <p>Downloads</p>
        </div>
      </div>

      {/* ================= CONTENT ================= */}

      <div className="dashboard-content">
        {/* Recent Reports */}

        <div className="table-card">
          <h2>Recent Startup Reports</h2>

          {loading ? (
            <p>Loading reports...</p>
          ) : ideas.length === 0 ? (
            <p>No startup reports yet.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Startup</th>
                  <th>Startup Idea</th>
                  <th>Score</th>
                </tr>
              </thead>

              <tbody>
                {ideas.map((idea) => (
                  <tr
                    key={idea._id}
                    className="report-row"
                    onClick={() => navigate(`/result/${idea._id}`)}
                  >
                    <td>{idea.startupTitle || "Untitled Startup"}</td>

                    <td>{idea.startupIdea}</td>

                    <td>{idea.ideaRating ?? 0}/10</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* AI Suggestions */}

        <div className="insight-card">
          <h2>AI Suggestions</h2>

          <ul>
            <li>✔ Improve revenue model.</li>

            <li>✔ Market demand is high.</li>

            <li>✔ Competition is moderate.</li>

            <li>✔ Investor readiness: Good.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
