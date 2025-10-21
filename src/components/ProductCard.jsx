import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAdd = useCallback(() => {
    addToCart(product);
    alert(`${product.title} added to cart!`);
  }, [addToCart, product]);

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img src={product.images[0]} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </Link>
      <button onClick={handleAdd} className="btn-primary">
        Add to Cart
      </button>
    </div>
  );
}
