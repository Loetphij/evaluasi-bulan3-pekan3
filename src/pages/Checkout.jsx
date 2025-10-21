// src/pages/Checkout.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/NavigationMenu";
import { useCart } from "../hooks/useCart";

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    alert("Checkout berhasil! Terima kasih sudah berbelanja 🙌");
    clearCart();
    navigate("/products");
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <h2>Tech Solutions</h2>
        </div>
        <Navigation />
      </header>

      <div style={{ padding: "30px" }}>
        <h1>Checkout</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty. Add some items first!</p>
        ) : (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.title} — ${item.price} × {item.qty}
                </li>
              ))}
            </ul>
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button onClick={handleCheckout} className="btn-primary">
              Confirm Checkout
            </button>
          </>
        )}
      </div>
    </>
  );
}
