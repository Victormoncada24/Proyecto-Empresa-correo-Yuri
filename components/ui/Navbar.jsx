import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/dashboard">El correo de Yury</Link>
      </div>
      <div className="navbar-links">
        {role === 'hr' && (
          <>
            <Link to="/employees">Empleados</Link>
            <Link to="/reports">Reportes</Link>
          </>
        )}
        <Link to="/profile">Mi Perfil</Link>
        <button onClick={handleLogout} className="btn-logout">Cerrar Sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;