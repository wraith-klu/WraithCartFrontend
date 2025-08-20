import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'wraithklu') {
      window.open('/admin/dashboard', '_blank', 'noopener,noreferrer');
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="admin-login-container" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0071dc 0%, #1e88e5 100%)'
    }}>
      <div style={{
        background: '#fff',
        padding: '40px 32px',
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.14)',
        minWidth: '340px',
        textAlign: 'center'
      }}>
        <img
          src="/logo192.png"
          alt="Admin"
          style={{ width: 60, marginBottom: 18, borderRadius: '50%' }}
        />
        <h2 style={{ color: '#0071dc', marginBottom: 18, letterSpacing: 1 }}>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #cfd8dc',
              marginBottom: '18px',
              fontSize: '1rem'
            }}
          />
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              background: 'linear-gradient(90deg, #0071dc 60%, #1e88e5 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
          >
            Login
          </button>
          {error && <div className="error-msg" style={{
            color: '#ff4444',
            marginTop: '14px',
            fontWeight: 500
          }}>{error}</div>}
        </form>
        <div style={{ marginTop: 28, color: '#888', fontSize: '0.95rem' }}>
          <span>Only authorized personnel allowed.</span>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
