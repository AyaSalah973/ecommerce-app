import './App.css';
// 1. import folders
import logo from './icons/logo.png'; 
import userIcon from './assets/user.png';
import eyeIcon from './assets/eye.png'; 
function App() {
  return (
    <div className="main-wrapper">
      {/* اheader*/}
      <header className="header">
        <div className="logo-area">
          <img src={logo} alt="Minimal Shopping" className="main-logo" />
          <h1 className="brand-name">Minimal <span>Shop</span>ping</h1>
        </div>
        <img src={userIcon} alt="user" className="top-user-icon" />
      </header>

      {/* page content*/}
      <div className="login-box">
        <h2 className="title">Hello Again!</h2>
        <p className="subtitle">Welcome Back You've Been Missed!</p>
        <p className="hint">To login enter Your email address and password</p>

        <form>
          <div className="input-container">
            <label>Email Address</label>
            <div className="input-with-icon">
              <input type="email" />
              <img src={eyeIcon} className="field-icon" alt="eye" />
            </div>
          </div>

          <div className="input-container">
            <label>Password</label>
            <div className="input-with-icon">
              <input type="password" />
              <img src={eyeIcon} className="field-icon" alt="eye" />
            </div>
          </div>

          <div className="checkbox-row">
            <input type="checkbox" id="rem" />
            <label htmlFor="rem">Remember me</label>
          </div>

          <button className="submit-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App;