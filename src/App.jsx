
import './App.css';
// 1. استدعاء الصور بتاعتك من فولدر assets
import logo from './icons/logo.png'; 
import userIcon from './assets/user.png';
import eyeIcon from './assets/eye.png'; // أيقونة العين اللي في الصورة

function App() {
  return (
    <div className="main-wrapper">
      {/* header*/}
      <header className="header">
        <div className="logo-area">
          <img src={logo} alt="Minimal Shopping" className="main-logo" />
          <h1 className="brand-name">Minimal <span>Shop</span>ping</h1>
        </div>
        <img src={userIcon} alt="user" className="top-user-icon" />
      </header>

      {/* محتوى الصفحة */}
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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Products";
import ProductDetails from "./pages/ProductDetails";
import user from "./assets/user.svg";
import logo from "./assets/logo.png";
import "./App.css";

function Layout({ children }) {
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <div className="nav-left">
          <img src={logo} alt="logo" className="logo" />
          <span className="brand-orange">Minimal</span>
          <span className="brand-red">Shopping</span>
        </div>

        <img src={user} alt="user" className="user" />
      </div>

      {children}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Products />
            </Layout>
          }
        />

        <Route
          path="/details/:id"
          element={
            <Layout>
              <ProductDetails />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;