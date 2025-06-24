import React, { useState, useEffect } from 'react';
import Navbar from '../components/ui/Navbar';
import Sidebar from '../components/ui/Sidebar';

const Profile = () => {
  const [employee, setEmployee] = useState({
    firstName: 'Juan',
    lastName: 'Pérez',
    rut: '12.345.678-9',
    email: 'juan@correodeyury.cl',
    phone: '+56 9 8765 4321',
    emergencyContact: {
      name: 'María Pérez',
      phone: '+56 9 1234 5678',
      relationship: 'Esposa'
    },
    familyMembers: [
      { name: 'Ana Pérez', relationship: 'Hija', birthDate: '2010-05-15' },
      { name: 'Carlos Pérez', relationship: 'Hijo', birthDate: '2012-08-20' }
    ]
  });

  const [newFamilyMember, setNewFamilyMember] = useState({
    name: '',
    relationship: '',
    birthDate: ''
  });

  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmergencyContactChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prev => ({
      ...prev,
      emergencyContact: {
        ...prev.emergencyContact,
        [name]: value
      }
    }));
  };

  const handleFamilyMemberChange = (e) => {
    const { name, value } = e.target;
    setNewFamilyMember(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addFamilyMember = () => {
    if (newFamilyMember.name && newFamilyMember.relationship) {
      setEmployee(prev => ({
        ...prev,
        familyMembers: [...prev.familyMembers, newFamilyMember]
      }));
      setNewFamilyMember({ name: '', relationship: '', birthDate: '' });
    }
  };

  const removeFamilyMember = (index) => {
    setEmployee(prev => ({
      ...prev,
      familyMembers: prev.familyMembers.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(false);
    // Aquí iría la lógica para guardar los cambios
    alert('Datos actualizados correctamente');
  };

  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-content">
        <Sidebar />
        <div className="main-content">
          <h1>Mi Perfil</h1>
          
          {!editMode ? (
            <div className="profile-view">
              <div className="profile-section">
                <h2>Datos Personales</h2>
                <div className="profile-row">
                  <span className="profile-label">Nombre:</span>
                  <span>{employee.firstName} {employee.lastName}</span>
                </div>
                <div className="profile-row">
                  <span className="profile-label">RUT:</span>
                  <span>{employee.rut}</span>
                </div>
                <div className="profile-row">
                  <span className="profile-label">Email:</span>
                  <span>{employee.email}</span>
                </div>
                <div className="profile-row">
                  <span className="profile-label">Teléfono:</span>
                  <span>{employee.phone}</span>
                </div>
              </div>
              
              <div className="profile-section">
                <h2>Contacto de Emergencia</h2>
                <div className="profile-row">
                  <span className="profile-label">Nombre:</span>
                  <span>{employee.emergencyContact.name}</span>
                </div>
                <div className="profile-row">
                  <span className="profile-label">Teléfono:</span>
                  <span>{employee.emergencyContact.phone}</span>
                </div>
                <div className="profile-row">
                  <span className="profile-label">Relación:</span>
                  <span>{employee.emergencyContact.relationship}</span>
                </div>
              </div>
              
              <div className="profile-section">
                <h2>Cargas Familiares</h2>
                {employee.familyMembers.map((member, index) => (
                  <div key={index} className="family-member">
                    <div className="member-info">
                      <span>{member.name} ({member.relationship})</span>
                      <span>Nacimiento: {member.birthDate}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => setEditMode(true)} 
                className="btn-primary"
              >
                Editar Perfil
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="profile-edit">
              <div className="form-section">
                <h3>Datos Personales</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Nombre:</label>
                    <input
                      type="text"
                      name="firstName"
                      value={employee.firstName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Apellido:</label>
                    <input
                      type="text"
                      name="lastName"
                      value={employee.lastName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>RUT:</label>
                    <input
                      type="text"
                      name="rut"
                      value={employee.rut}
                      readOnly
                      className="read-only"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={employee.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Teléfono:</label>
                  <input
                    type="tel"
                    name="phone"
                    value={employee.phone}
                    onChange={handleInputChange}
                  />
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
                      value={employee.emergencyContact.name}
                      onChange={handleEmergencyContactChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Teléfono:</label>
                    <input
                      type="tel"
                      name="phone"
                      value={employee.emergencyContact.phone}
                      onChange={handleEmergencyContactChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Relación:</label>
                  <input
                    type="text"
                    name="relationship"
                    value={employee.emergencyContact.relationship}
                    onChange={handleEmergencyContactChange}
                  />
                </div>
              </div>
              
              <div className="form-section">
                <h3>Cargas Familiares</h3>
                {employee.familyMembers.map((member, index) => (
                  <div key={index} className="family-member">
                    <div className="member-info">
                      <span>{member.name} ({member.relationship})</span>
                      <span>Nacimiento: {member.birthDate}</span>
                    </div>
                    <button 
                      type="button" 
                      onClick={() => removeFamilyMember(index)}
                      className="btn-danger"
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
                
                <div className="add-family-member">
                  <h4>Agregar Carga Familiar</h4>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Nombre:</label>
                      <input
                        type="text"
                        name="name"
                        value={newFamilyMember.name}
                        onChange={handleFamilyMemberChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Relación:</label>
                      <input
                        type="text"
                        name="relationship"
                        value={newFamilyMember.relationship}
                        onChange={handleFamilyMemberChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Fecha de Nacimiento:</label>
                    <input
                      type="date"
                      name="birthDate"
                      value={newFamilyMember.birthDate}
                      onChange={handleFamilyMemberChange}
                    />
                  </div>
                  <button 
                    type="button" 
                    onClick={addFamilyMember}
                    className="btn-secondary"
                  >
                    Agregar
                  </button>
                </div>
              </div>
              
              <div className="form-actions">
                <button type="submit" className="btn-primary">Guardar Cambios</button>
                <button 
                  type="button" 
                  onClick={() => setEditMode(false)}
                  className="btn-secondary"
                >
                  Cancelar
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;