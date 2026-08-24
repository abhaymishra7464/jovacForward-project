import { useState } from "react";
import "../styles/validate.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Validate = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    startupName: "",
    industry: "",
    problem: "",
    solution: "",
    audience: "",
    revenue: "",
    budget: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.startupName.trim() ||
      !formData.problem.trim() ||
      !formData.solution.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      const startupIdea = `
Startup Name: ${formData.startupName}

Industry: ${formData.industry}

Problem:
${formData.problem}

Solution:
${formData.solution}

Target Audience:
${formData.audience}

Revenue Model:
${formData.revenue}

Estimated Budget:
${formData.budget}
`;

      const res = await axios.post(
        "http://localhost:5000/api/analyzer/analyzeIdea",
        {
          startupIdea: startupIdea,
        },
        {
          withCredentials: true,
        },
      );

      console.log("Analysis Response:", res.data);

      navigate(`/result/${res.data.data._id}`);
    } catch (err) {
      console.log("Validation Error:", err);
      alert(err.response?.data?.msg || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="validate-page">
      <div className="validate-container">
        <h1>Validate Your Startup Idea</h1>

        <p>Fill in the details below and let AI evaluate your startup idea.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="startupName"
            placeholder="Startup Name"
            value={formData.startupName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="industry"
            placeholder="Industry"
            value={formData.industry}
            onChange={handleChange}
          />

          <textarea
            name="problem"
            placeholder="Problem Statement"
            rows="4"
            value={formData.problem}
            onChange={handleChange}
          />

          <textarea
            name="solution"
            placeholder="Your Solution"
            rows="4"
            value={formData.solution}
            onChange={handleChange}
          />

          <input
            type="text"
            name="audience"
            placeholder="Target Audience"
            value={formData.audience}
            onChange={handleChange}
          />

          <input
            type="text"
            name="revenue"
            placeholder="Revenue Model"
            value={formData.revenue}
            onChange={handleChange}
          />

          <input
            type="number"
            name="budget"
            placeholder="Estimated Budget"
            value={formData.budget}
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Analyzing..." : "Validate Startup"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Validate;
