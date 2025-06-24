import React from 'react';
import Navbar from '../components/ui/Navbar';
import Sidebar from '../components/ui/Sidebar';
import EmployeeList from '../components/employees/EmployeeList';
import { Link } from 'react-router-dom';

const Employees = () => {
  return (
    <div className="employees-container">
      <Navbar />
      <div className="employees-content">
        <Sidebar />
        <div className="main-content">
          <div className="page-header">
            <h1>Gestión de Empleados</h1>
            <Link to="/employees/new" className="btn-primary">
              + Nuevo Empleado
            </Link>
          </div>
          <EmployeeList />
        </div>
      </div>
    </div>
  );
};

export default Employees;