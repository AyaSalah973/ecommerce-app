import Products from "./Products";
import user from "./assets/user.svg";
import logo from "./assets/logo.png";

import "./App.css";

function App() {
  return (
    <>
      <div className="navbar">
        <div className="nav-left">
          <img src={logo} alt="logo" className="logo" />
          <span className="brand-orange">Minimal</span>
          <span className="brand-red">Shopping</span>
        </div>

        <img src={user} alt="user" className="user" />
      </div>

      <Products />
    </>
  );
}

export default App;