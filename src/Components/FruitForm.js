import React, { useState } from 'react'

export default function FruitForm({handleAdd}) {

    const [nouveauFruit, setNouveauFruit] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newFruit = {
          id: Date.now(),
          name: nouveauFruit
        }
        setNouveauFruit("");
        handleAdd(newFruit);
      }
    
      const handleChange = (event) => {
        setNouveauFruit(event.target.value);
      }

  return (
    <form action='submit' onSubmit={handleSubmit}>
        <input value={nouveauFruit} onChange={handleChange} type="text" placeholder='Nouvel élément' />
        <button>Ajouter</button>
      </form>
  )
}
