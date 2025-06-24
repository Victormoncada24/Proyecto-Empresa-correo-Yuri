import React, { useState } from 'react';

const EmployeeFilter = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    department: '',
    position: '',
    gender: ''
  });

  const departments = ['Administración', 'Logística', 'Ventas', 'RRHH'];
  const positions = ['Gerente', 'Supervisor', 'Asistente', 'Operario'];
  const genders = ['Masculino', 'Femenino', 'Otro'];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    onFilter(filters);
  };

  const resetFilters = () => {
    setFilters({
      department: '',
      position: '',
      gender: ''
    });
    onFilter({});
  };

  return (
    <div className="filter-container">
      <h3>Filtrar Empleados</h3>
      <div className="filter-group">
        <label>Departamento:</label>
        <select name="department" value={filters.department} onChange={handleFilterChange}>
          <option value="">Todos</option>
          {departments.map(dept => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <label>Cargo:</label>
        <select name="position" value={filters.position} onChange={handleFilterChange}>
          <option value="">Todos</option>
          {positions.map(pos => (
            <option key={pos} value={pos}>{pos}</option>
          ))}
        </select>
      </div>
      
      <div className="filter-group">
        <label>Género:</label>
        <select name="gender" value={filters.gender} onChange={handleFilterChange}>
          <option value="">Todos</option>
          {genders.map(gender => (
            <option key={gender} value={gender}>{gender}</option>
          ))}
        </select>
      </div>
      
      <div className="filter-actions">
        <button onClick={applyFilters} className="btn-primary">Aplicar Filtros</button>
        <button onClick={resetFilters} className="btn-secondary">Limpiar</button>
      </div>
    </div>
  );
};

export default EmployeeFilter;