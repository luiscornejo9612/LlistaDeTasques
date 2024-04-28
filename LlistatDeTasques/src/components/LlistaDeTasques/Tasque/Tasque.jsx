import React from 'react';
import { FaTrash } from 'react-icons/fa';


function Tasca({ id, text, completada, eliminarTasca, completarTasca }) {
  const handleClick = () => {
    completarTasca(id);
  };

  const handleDelete = () => {
    eliminarTasca(id);
  };

  return (
    <div className={completada ? 'tasca tascaCompletada' : 'tasca'} onClick={handleClick}>
      <span style={{ textDecoration: completada ? 'line-through' : 'none' }}>
        {text}
      </span>
      <button onClick={handleDelete}><FaTrash /></button>
    </div>
  );
}

export default Tasca;
