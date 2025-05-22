import React, { useState } from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100" style={{ background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)' }}>
      <div className="card shadow" style={{ minWidth: 370, borderRadius: 16 }}>
        <div className="card-body">
          <h2
            className="card-title text-center mb-4"
            style={{
              fontWeight: 700,
              color: '#2c3e50',
              fontSize: '1.5rem',
              letterSpacing: '0.5px',
            }}
          >
            AA Residency Property Management System
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                className="form-control"
                value={username}
                onChange={e => setUsername(e.target.value)}
                placeholder="Enter username"
                autoFocus
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <button className="btn btn-primary w-100" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;