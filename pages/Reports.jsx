import React from 'react';
import Navbar from '../components/ui/Navbar';
import Sidebar from '../components/ui/Sidebar';

const Reports = () => {
  return (
    <div className="reports-container">
      <Navbar />
      <div className="reports-content">
        <Sidebar />
        <div className="main-content">
          <h1>Reportes</h1>
          <div className="reports-grid">
            <div className="report-card">
              <h3>Reporte Mensual de Empleados</h3>
              <p>Genera un reporte detallado de todos los empleados por departamento.</p>
              <button className="btn-primary">Generar Reporte</button>
            </div>
            
            <div className="report-card">
              <h3>Reporte de Actualizaciones Pendientes</h3>
              <p>Lista de empleados que no han actualizado sus datos en los últimos 6 meses.</p>
              <button className="btn-primary">Generar Reporte</button>
            </div>
            
            <div className="report-card">
              <h3>Reporte de Cargas Familiares</h3>
              <p>Resumen de todas las cargas familiares registradas en el sistema.</p>
              <button className="btn-primary">Generar Reporte</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;