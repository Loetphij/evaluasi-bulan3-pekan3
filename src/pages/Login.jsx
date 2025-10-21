import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/NavigationMenu";

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        if (username && password) {
            localStorage.setItem('authToken', 'myToken')
            alert('Login berhasil!')
            navigate('/products', { state:{ fromLogin: true} })
        } else {
            alert('Username atau password salah!')
        }
    }

    return (
        <>
            <header className="header">
                <div className="logo">
                    <h2>Tech Solutions</h2>
                </div>
                <Navigation />
            </header>
            <form onSubmit={handleLogin} className="form-login">
                <h2>Login</h2>
                <input 
                    type="text" 
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="Submit">Masuk</button>
                <div style={{ marginTop: '4px', textAlign: 'center'}}>
                    <p>Masukan username dan password random</p>             
                </div>
            </form>
        </>
    )
}