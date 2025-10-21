import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/NavigationMenu";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
            setLoading(false);
        })
        .catch((err) => {
            console.error(err);
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
                    <img src={product.images[0]} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                </Link>
            ))}
            </div>
            <footer className="footer">
                © 2025 Loetphij Co. All rights reserved.
            </footer>
        </>
    );
}
