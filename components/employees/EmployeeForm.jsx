import React, { useState } from 'react';

const EmployeeForm = ({ employee, onSubmit }) => {
  const [formData, setFormData] = useState(employee || {
    firstName: '',
    lastName: '',
    rut: '',
    email: '',
    phone: '',
    department: '',
    position: '',
    gender: '',
    address: '',
    emergencyContact: {
      name: '',
      phone: '',
      relationship: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEmergencyContactChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      emergencyContact: {
        ...prev.emergencyContact,
        [name]: value
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <h2>{employee ? 'Editar Empleado' : 'Registrar Nuevo Empleado'}</h2>
      
      <div className="form-section">
        <h3>Datos Personales</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Apellido:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label>RUT:</label>
            <input
              type="text"
              name="rut"
              value={formData.rut}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Género:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione...</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="form-section">
        <h3>Datos Laborales</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Departamento:</label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione...</option>
              <option value="Administración">Administración</option>
              <option value="RRHH">RRHH</option>
              <option value="Logística">Logística</option>
              <option value="Ventas">Ventas</option>
            </select>
          </div>
          <div className="form-group">
            <label>Cargo:</label>
            <select
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            >
              <option value="">Seleccione...</option>
              <option value="Gerente">Gerente</option>
              <option value="Supervisor">Supervisor</option>
              <option value="Asistente">Asistente</option>
              <option value="Operario">Operario</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="form-section">
        <h3>Contacto</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Teléfono:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      
      <div className="form-section">
        <h3>Contacto de Emergencia</h3>
        <div className="form-row">
          <div className="form-group">
            <label>Nombre:</label>
            <input
              type="text"
              name="name"
              value={formData.emergencyContact.name}
              onChange={handleEmergencyContactChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Teléfono:</label>
            <input
              type="tel"
              name="phone"
              value={formData.emergencyContact.phone}
              onChange={handleEmergencyContactChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Relación:</label>
          <input
            type="text"
            name="relationship"
            value={formData.emergencyContact.relationship}
            onChange={handleEmergencyContactChange}
            required
          />
        </div>
      </div>
      
      <button type="submit" className="btn-primary">
        {employee ? 'Actualizar Empleado' : 'Registrar Empleado'}
      </button>
    </form>
  );
};

export default EmployeeForm;