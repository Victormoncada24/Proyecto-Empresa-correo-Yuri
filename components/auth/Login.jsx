import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulación de autenticación
      if (credentials.email && credentials.password) {
        localStorage.setItem('token', 'simulated-token');
        localStorage.setItem('role', credentials.email.includes('hr') ? 'hr' : 'employee');
        navigate('/dashboard');
      } else {
        setError('Credenciales inválidas');
      }
    } catch (err) {
      setError('Error al iniciar sesión');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>El correo de Yury</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input 
              type="email" 
              value={credentials.email}
              onChange={(e) => setCredentials({...credentials, email: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Contraseña:</label>
            <input 
              type="password" 
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="btn-primary">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;