import React from "react";
import "../index.css";
import { Link, NavLink } from "react-router-dom";
import Navigation from "../components/NavigationMenu";

export default function Home() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <h2>Tech Solutions</h2>
        </div>
        <Navigation />
      </header>

      <main>
        <section
          className="hero"
          style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlNsAz3Hv3gKZvREy4QxOa68rV6WMShlShkJ-9H8i2aVfKEqtfn2oHQrDARKhREc3MhDynhCnKVirhOpYvnTBs4Qy0Nr0S_YVhiyYcvKpeVcyJQ2wHLadeF16WMjvhQm_tEHdyEjye7UCsDErCmMnkbnvIWPMl6vzTx6x9wsHu4rqnpweYItxBxbwOtysNodDOOK98t_n5qnD-JwFpABsCNNBK3Kh_o0maK0eLTR107odAKOeFnirfAgLBNXno984e-PbHzenydRBC')"}}>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Solusi Teknologi Inovatif untuk Masa Depan</h1>
            <p>Kami menyediakan solusi teknologi canggih yang meningkatkan efisiensi bisnis Anda.</p>
            <button className="btn-primary">Pelajari Lebih Lanjut</button>
          </div>
        </section>

        <section className="section">
          <h2>Layanan Kami</h2>
          <div style={{display:"flex", gap:"2rem", justifyContent:"center"}}>
            <div className="card">
              <h3>Pengembangan Perangkat Lunak</h3>
              <p>Web & mobile apps custom.</p>
            </div>
            <div className="card">
              <h3>Manajemen Data</h3>
              <p>Analisis dan pengelolaan data.</p>
            </div>
            <div className="card">
              <h3>Solusi Cloud</h3>
              <p>Layanan cloud aman & skalabel.</p>
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
