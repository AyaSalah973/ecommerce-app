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