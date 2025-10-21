// src/pages/Cart.jsx
import React from "react";
import Navigation from "../components/NavigationMenu";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, totalPrice, totalItems, clearCart } = useCart();

  return (
    <>
      <header className="header">
        <div className="logo">
          <h2>Tech Solutions</h2>
        </div>
        <Navigation />
      </header>

      <div className="cart-container" style={{ padding: "30px" }}>
        <h1>Your Shopping Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id} style={{ marginBottom: "15px" }}>
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    width="60"
                    height="60"
                    style={{ borderRadius: "6px", marginRight: "10px" }}
                  />
                  <strong>{item.title}</strong> - ${item.price} x {item.qty}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="btn-primary"
                    style={{
                      marginLeft: "10px",
                      backgroundColor: "#d9534f",
                      border: "none",
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <h3>Total Items: {totalItems}</h3>
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
            <div style={{ marginTop: "20px" }}>
              <button
                onClick={clearCart}
                className="btn-primary"
                style={{ backgroundColor: "#f39c12", marginRight: "10px" }}
              >
                Clear Cart
              </button>
              <Link to="/checkout" className="btn-primary">
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}
