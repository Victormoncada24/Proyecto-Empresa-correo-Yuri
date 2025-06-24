import React from 'react';
import Navbar from '../components/ui/Navbar';
import Sidebar from '../components/ui/Sidebar';

const Dashboard = () => {
  const role = localStorage.getItem('role');
  const userName = role === 'hr' ? 'Jefe de RRHH' : 'Empleado';

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <div className="main-content">
          <h1>Bienvenido, {userName}</h1>
          <p>Este es el panel de control del sistema de gestión de empleados.</p>
          
          {role === 'hr' && (
            <div className="dashboard-cards">
              <div className="card">
                <h3>Total Empleados</h3>
                <p>24</p>
              </div>
              <div className="card">
                <h3>Nuevos este mes</h3>
                <p>3</p>
              </div>
              <div className="card">
                <h3>Actualizaciones pendientes</h3>
                <p>5</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;