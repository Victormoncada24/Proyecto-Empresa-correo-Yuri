import React, { useState, useEffect } from 'react';
import EmployeeFilter from './EmployeeFilter';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga de datos
    const mockEmployees = [
      {
        id: 1,
        firstName: 'Juan',
        lastName: 'Pérez',
        rut: '12.345.678-9',
        department: 'Administración',
        position: 'Gerente',
        gender: 'Masculino',
        email: 'juan@correodeyury.cl'
      },
      {
        id: 2,
        firstName: 'María',
        lastName: 'González',
        rut: '23.456.789-0',
        department: 'RRHH',
        position: 'Supervisor',
        gender: 'Femenino',
        email: 'maria@correodeyury.cl'
      },
      {
        id: 3,
        firstName: 'Carlos',
        lastName: 'Muñoz',
        rut: '34.567.890-1',
        department: 'Logística',
        position: 'Operario',
        gender: 'Masculino',
        email: 'carlos@correodeyury.cl'
      },
      {
        id: 4,
        firstName: 'Ana',
        lastName: 'Silva',
        rut: '45.678.901-2',
        department: 'Ventas',
        position: 'Asistente',
        gender: 'Femenino',
        email: 'ana@correodeyury.cl'
      }
    ];
    
    setEmployees(mockEmployees);
    setFilteredEmployees(mockEmployees);
    setLoading(false);
  }, []);

  const handleFilter = (filters) => {
    if (!filters.department && !filters.position && !filters.gender) {
      setFilteredEmployees(employees);
      return;
    }

    const filtered = employees.filter(emp => {
      return (
        (!filters.department || emp.department === filters.department) &&
        (!filters.position || emp.position === filters.position) &&
        (!filters.gender || emp.gender === filters.gender)
      );
    });

    setFilteredEmployees(filtered);
  };

  if (loading) return <div>Cargando empleados...</div>;

  return (
    <div className="employee-list-container">
      <div className="filter-section">
        <EmployeeFilter onFilter={handleFilter} />
      </div>
      
      <div className="list-section">
        <h2>Listado de Empleados</h2>
        <div className="employee-table">
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>RUT</th>
                <th>Departamento</th>
                <th>Cargo</th>
                <th>Email</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.map(emp => (
                <tr key={emp.id}>
                  <td>{emp.firstName} {emp.lastName}</td>
                  <td>{emp.rut}</td>
                  <td>{emp.department}</td>
                  <td>{emp.position}</td>
                  <td>{emp.email}</td>
                  <td>
                    <button className="btn-action">Ver</button>
                    <button className="btn-action">Editar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;