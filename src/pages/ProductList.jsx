import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/NavigationMenu";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <>
      <header className="header">
        <div className="logo">
          <h2>Tech Solutions</h2>
        </div>
        <Navigation />
      </header>

      <h1>Product List</h1>

      <div className="product-list">
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="product-card"
          >
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.title} />
            </div>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p style={{ color: '#222'}}>Rating: {product.rating?.rate} ({product.rating?.count} reviews)</p>
          </Link>
        ))}
      </div>

      <footer className="footer">
        © 2025 Loetphij Co. All rights reserved.
      </footer>
    </>
  );
}
