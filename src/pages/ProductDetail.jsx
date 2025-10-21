import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "../components/NavigationMenu";
import { useCart } from "../hooks/useCart";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [productId]);

  const handleAddToCart = useCallback(() => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  }, [addToCart, product]);

  if (loading) return <p className="loading">Loading product...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <>
      <header className="header">
        <div className="logo">
          <h2>Tech Solutions</h2>
        </div>
        <Navigation />
      </header>

      <div className="product-detail">
        <div className="detail-card">
          <img
            src={product.image}
            alt={product.title}
            className="detail-image"
          />
          <div className="detail-info">
            <h1>{product.title}</h1>
            <p className="detail-description">{product.description}</p>
            <p style={{ color: '#333'}}>Rating: {product.rating.rate} ({product.rating.count} views)</p>
            <p className="detail-price">Price: ${product.price}</p>

            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={handleAddToCart} className="btn-primary">
                🛒 Add to Cart
              </button>
              <Link to="/products" className="back-button">
                ← Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        © 2025 Loetphij Co. All rights reserved.
      </footer>
    </>
  );
}
