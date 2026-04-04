import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const productId = id || 1;
  const [added, setAdded] = useState(false);
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("XS");
  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [productId]);

  if (!product) return <p className="loading">Loading...</p>;

  return (
    <>
      <section className="details-page">
        <div className="details-card">
          <div className="details-top">
            <div className="brand-title"></div>
          </div>

          <div className="details-content">
            <div className="details-image">
              <img src={product.thumbnail} alt={product.title} />
            </div>

            <div className="details-info">
              <button className="badge">New!</button>
              <h2 className="product-title">{product.title}</h2>
              <p className="price">${product.price}</p>
              <p className="brand">
                Brand: <span>{product.brand}</span>
              </p>
              <p className="description">{product.description}</p>
             
              <div className="size-buttons">
                {["XS", "S", "M", "L"].map((size) => (
                  <button
                    key={size}
                    className={selectedSize === size ? "active" : ""}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
              <button className="cart-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
              {added && <p className="cart-text">Added to Cart</p>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
