import React from 'react';

const EmployeeView = ({ employee }) => {
  if (!employee) return <div>No se encontró información del empleado</div>;

  return (
    <div className="employee-view">
      <h2>Detalle del Empleado</h2>
      
      <div className="employee-details">
        <div className="detail-section">
          <h3>Información Personal</h3>
          <div className="detail-row">
            <span className="detail-label">Nombre:</span>
            <span>{employee.firstName} {employee.lastName}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">RUT:</span>
            <span>{employee.rut}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Género:</span>
            <span>{employee.gender}</span>
          </div>
        </div>
        
        <div className="detail-section">
          <h3>Información Laboral</h3>
          <div className="detail-row">
            <span className="detail-label">Departamento:</span>
            <span>{employee.department}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Cargo:</span>
            <span>{employee.position}</span>
          </div>
        </div>
        
        <div className="detail-section">
          <h3>Contacto</h3>
          <div className="detail-row">
            <span className="detail-label">Email:</span>
            <span>{employee.email}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Teléfono:</span>
            <span>{employee.phone}</span>
          </div>
        </div>
        
        <div className="detail-section">
          <h3>Contacto de Emergencia</h3>
          <div className="detail-row">
            <span className="detail-label">Nombre:</span>
            <span>{employee.emergencyContact.name}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Teléfono:</span>
            <span>{employee.emergencyContact.phone}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Relación:</span>
            <span>{employee.emergencyContact.relationship}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeView;