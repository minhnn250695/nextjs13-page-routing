"use client";
import { useState } from 'react';
import '../../css/login.css';

export default function Login() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const username = formData.get('username');
        const password = formData.get('password');

        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
        } else {
            setError('Invalid username or password');
        }
        setLoading(false);
    }

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            <form className="login-form" onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                {error && <div className="login-error">{error}</div>}
                <button type="submit" className="login-btn" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                <div className="login-links">
                    <a href="/register">Register</a> | <a href="#">Forgot Password?</a>
                </div>
            </form>
        </div>
    );
}