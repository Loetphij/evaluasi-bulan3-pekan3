import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "../components/NavigationMenu";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching product:", err);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found!</p>;

  return (
    <>
      <header className="header">
        <div className="logo">
            <h2>Tech Solutions</h2>
        </div>
        <Navigation />
      </header>
      <div className="product-detail">
        <h1>{product.title}</h1>
        <div className="product-detail-image-wrapper">
          <img src={product.image} alt={product.title} />
        </div>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <p>Rating: {product.rating?.rate} ({product.rating?.count} reviews)</p>
        <Link to="/products" className="back-button">
          ← Back to Products
        </Link>
      </div>
    </>
  );
}
