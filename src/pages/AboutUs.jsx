import React from "react";
import "../index.css";
import { Link, NavLink } from "react-router-dom";
import Navigation from "../components/NavigationMenu";

export default function AboutUs() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <h2>Tech Solutions</h2>
        </div>
        <Navigation />
      </header>

      <main>
        <section className="section">
          <h1>Tentang Kami</h1>
          <p>
            Tech Solutions Co. adalah perusahaan teknologi inovatif yang berdedikasi
            untuk memberikan solusi berkualitas tinggi.
          </p>
        </section>

        <section className="section">
          <h2>Visi & Misi</h2>
          <div style={{display:"flex", gap:"2rem", justifyContent:"center"}}>
            <div className="card">
              <h3>Visi Kami</h3>
              <p>Pemimpin global solusi teknologi inovatif.</p>
            </div>
            <div className="card">
              <h3>Misi Kami</h3>
              <p>Memberikan solusi disesuaikan dengan kebutuhan klien.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        © 2025 Loetphij Co. All rights reserved.
      </footer>
    </div>
  );
}
