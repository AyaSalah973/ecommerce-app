/* Reham Essam */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/F_Image.png";
import "./Home.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loved, setLoved] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=8")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []);

  const toggleLove = (e, id) => {
    e.stopPropagation();
    setLoved((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="page-content">

      

      {/* HERO */}
      <section className="hero">
        <div className="hero-shapes">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="hero-img">
          <img src={heroImg} alt="banner" />
        </div>

        <div className="hero-text">
          <h2>
            Get 50% Off on <br /> Selected Categories
          </h2>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section">
        <h2 className="section-title">Products</h2>

        <div className="products-grid">
          {products.map((product) => (
            <div
              className="card"
              key={product.id}
              onClick={() => navigate(`/details/${product.id}`)}
            >
              <div className="card-img">
                <img src={product.thumbnail} alt={product.title} />
                <button
                  className={`wish-btn ${loved[product.id] ? "loved" : ""}`}
                  onClick={(e) => toggleLove(e, product.id)}
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>

              <div className="card-info">
                <div className="card-row">
                  <p className="card-name">{product.title}</p>
                  <p className="card-price">${product.price}</p>
                </div>
                <p className="card-desc">{product.description.slice(0, 55)}...</p>
                <p className="card-sub">Organic Cotton, Fair Trade quality</p>
              </div>
            </div>
          ))}
        </div>

        <div className="see-more-wrap">
          <button className="see-more-btn" onClick={() => navigate("/products")}>
            See More
          </button>
        </div>
      </section>
    </div>
  );
}