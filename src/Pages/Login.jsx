import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import userIcon from "../assets/user.svg";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="main-wrapper">
      <header className="header">
        <div className="logo-area">
          <img src={logo} alt="Minimal Shopping" className="main-logo" />
          <h1 className="brand-name">
            Minimal <span>Shop</span>ping
          </h1>
        </div>
        <img
          src={userIcon}
          alt="user"
          className="top-user-icon"
          onClick={() => navigate("/login")}
          style={{ cursor: "pointer" }}
        />
      </header>

      <div className="login-box">
        <h2 className="login-title">Hello Again!</h2>
        <p className="login-subtitle">Welcome Back You've Been Missed!</p>
        <p className="login-hint">To login enter Your email address and password</p>

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-container">
            <label>Email Address</label>
            <div className="input-with-icon">
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          <div className="input-container">
            <label>Password</label>
            <div className="input-with-icon">
              <input type="password" placeholder="Enter your password" />
            </div>
          </div>

          <div className="checkbox-row">
            <input type="checkbox" id="rem" />
            <label htmlFor="rem">Remember me</label>
          </div>

          <button type="submit" className="submit-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;