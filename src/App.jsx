import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/details/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;