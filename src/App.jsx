import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Products";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Pages/Login";
import user from "./assets/user.svg";
import logo from "./assets/logo.png";
import "./App.css";

function Layout({ children }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar">
        <div className="nav-left">
          <img src={logo} alt="logo" className="logo" />
          <span className="brand-orange">Minimal</span>
          <span className="brand-red">Shopping</span>
        </div>
        <img
          src={user}
          alt="user"
          className="user"
          onClick={() => navigate("/login")}
          style={{ cursor: "pointer" }}
        />
      </div>
      {children}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/products" element={<Layout><Products /></Layout>} />
        <Route path="/details/:id" element={<Layout><ProductDetails /></Layout>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;