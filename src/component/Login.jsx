import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ username: '', password: '' });

    const handleLogin = (e) => {
        e.preventDefault();
        // Add validation logic here
        navigate('/home');
    };

    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
        }}>
            <form onSubmit={handleLogin} style={{
                padding: '2rem',
                background: 'white',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(0,0,0,0.1)'
            }}>
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                    style={{ display: 'block', margin: '1rem 0', padding: '0.5rem' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                    style={{ display: 'block', margin: '1rem 0', padding: '0.5rem' }}
                />
                <button type="submit" style={{
                    width: '100%',
                    padding: '0.5rem',
                    background: '#8B4513',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}>
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
