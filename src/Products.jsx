import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="container">
      <h1 className="title">All Products</h1>

      <div className="products-grid">
        {products.map((product) => (
          <div
            className="card"
            key={product.id}
            onClick={() => navigate(`/details/${product.id}`)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="product-img"
            />
            <h3 className="products-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;