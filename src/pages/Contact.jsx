import React from "react";
import "../index.css";
import { Link, NavLink } from "react-router-dom";
import Navigation from "../components/NavigationMenu";

export default function Contact() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <h2>Tech Solutions</h2>
        </div>
        <Navigation />
      </header>

      <main className="section">
        <h1>Hubungi Kami</h1>
        <form style={{maxWidth:"600px", margin:"0 auto"}}>
          <input className="form-input" placeholder="Nama Lengkap" />
          <input className="form-input" placeholder="Email" type="email" />
          <input className="form-input" placeholder="Subjek" />
          <textarea className="form-textarea" placeholder="Pesan"></textarea>
          <button className="btn-primary" type="submit">Kirim Pesan</button>
        </form>

        <section style={{marginTop:"3rem"}}>
          <h2>Informasi Kontak</h2>
          <p>Alamat: Jalan Teknologi No. 123, Kota Inovasi</p>
          <p>Telepon: +62 812 3456 7890</p>
          <p>Email: info@techsolutions.com</p>
        </section>
      </main>

      <footer className="footer">
        © 2025 Loetphij Co. All rights reserved.
      </footer>
    </div>
  );
}
