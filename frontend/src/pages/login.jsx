// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../styles/auth.css";

// const Login = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.email.trim() || !formData.password.trim()) {
//       alert("Please fill all fields.");
//       return;
//     }

//     try {
//       setLoading(true);

//       const res = await axios.post(
//         "http://localhost:5000/api/auth/login",
//         {
//           email: formData.email.trim(),
//           password: formData.password,
//         },
//         {
//           withCredentials: true,
//         },
//       );

//       console.log("Login successful:", res.data);

//       window.location.href = "/dashboard";
//     } catch (err) {
//       console.log("Login error:", err);

//       alert(
//         err.response?.data?.msg ||
//           "Unable to login. Please check your credentials.",
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="auth-page">
//       <div className="auth-card">
//         <h1>Welcome Back</h1>

//         <p>Login to continue validating your startup ideas.</p>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//           />

//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//           />

//           <button type="submit" disabled={loading}>
//             {loading ? "Logging In..." : "Login"}
//           </button>
//         </form>

//         <p className="auth-link">
//           Don't have an account? <Link to="/register">Register</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/auth.css";

const Login = () => {
  const [formData, setFormData] = useState({
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

    if (!formData.email.trim() || !formData.password.trim()) {
      alert("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email: formData.email.trim(),
          password: formData.password,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Login successful:", res.data);

      window.location.href = "/dashboard";
    } catch (err) {
      console.log("Login error:", err);

      alert(
        err.response?.data?.msg ||
          "Unable to login. Please check your credentials."
      );
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
            Welcome
            <br />
            <em>back.</em>
          </h1>

          <p>
            Continue validating ideas and making
            better startup decisions.
          </p>
        </div>

        <div className="auth-card">
          <div className="auth-card-top">
            <span>01 — LOGIN</span>
          </div>

          <h2>Sign in</h2>
          <p>Enter your account details below.</p>

          <form onSubmit={handleSubmit}>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />

            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
            />

            <button type="submit" disabled={loading}>
              {loading ? "Logging In..." : "Login ↗"}
            </button>
          </form>

          <p className="auth-link">
            Don't have an account?{" "}
            <Link to="/register">Create one</Link>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Login;