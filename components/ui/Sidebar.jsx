import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const role = localStorage.getItem('role');

  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        {role === 'hr' && (
          <>
            <Link to="/employees" className="menu-item">
              <span>📋</span> Gestionar Empleados
            </Link>
            <Link to="/reports" className="menu-item">
              <span>📊</span> Reportes
            </Link>
          </>
        )}
        <Link to="/profile" className="menu-item">
          <span>👤</span> Mi Perfil
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;