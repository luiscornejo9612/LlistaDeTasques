import React, { useState } from 'react';
import FormulariTasques from './FormulariTasques/FormulariTasques';
import { FaTrash } from 'react-icons/fa';

function LlistatTasques() {
  const [tasques, setTasques] = useState([]);

  const afegirTasca = (tascaNova) => {
    setTasques([...tasques, tascaNova]);
  };

  const eliminarTasca = (id) => {
    const tasquesRestants = tasques.filter(tasca => tasca.id !== id);
    setTasques(tasquesRestants);
  };

  const completarTasca = (id) => {
    const tasquesActuals = tasques.map(tasca =>
      tasca.id === id ? { ...tasca, completada: !tasca.completada } : tasca
    );
    setTasques(tasquesActuals);
  };

  return (
    <div>
      <h1>Llistat de Tasques</h1>
      <FormulariTasques funcAfegirTasca={afegirTasca} />
      <ul>
        {tasques.map(tasca => (
          <li key={tasca.id} className={tasca.completada ? 'tascaCompletada' : ''}>
            {tasca.text}
            <button onClick={() => eliminarTasca(tasca.id)}><FaTrash /></button>
            <button onClick={() => completarTasca(tasca.id)}>
              {tasca.completada ? 'Desmarcar' : 'Marcar como Completada'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LlistatTasques;
