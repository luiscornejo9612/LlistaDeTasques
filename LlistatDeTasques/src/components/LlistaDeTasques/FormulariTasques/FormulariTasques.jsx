import React, { useState } from 'react';

function FormulariTasques({ funcAfegirTasca }) {
  const [textTasca, setTextTasca] = useState('');

  const handleChange = (e) => {
    setTextTasca(e.target.value);
    console.log('value is:', e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!textTasca.trim()) return;
    const tascaNova = {
      id: Date.now(),
      text: textTasca,
      completada: false
    };
    funcAfegirTasca(tascaNova);
    setTextTasca('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={textTasca}
        onChange={handleChange}
        placeholder="Escriu una nova tasca"
      />
      <button type="submit">Afegir Tasca</button>
    </form>
  );
}

export default FormulariTasques;
