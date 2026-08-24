

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/auth.css";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData
      );

      alert(res.data.msg);
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.msg || "Registration Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-layout">

        <div className="auth-intro">
          <span>AI VALIDATOR</span>
          <h1>
            Start
            <br />
            <em>building.</em>
          </h1>

          <p>
            Create your account and start
            validating your startup ideas.
          </p>
        </div>

        <div className="auth-card">
          <div className="auth-card-top">
            <span>01 — REGISTER</span>
          </div>

          <h2>Create account</h2>
          <p>Set up your founder workspace.</p>

          <form onSubmit={handleSubmit}>
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              onChange={handleChange}
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              onChange={handleChange}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              onChange={handleChange}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create Account ↗"}
            </button>
          </form>

          <p className="auth-link">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;