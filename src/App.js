import { useState } from 'react';
import './App.css';
import FruitForm from './Components/FruitForm';
import Fruits from './Components/Fruits';

function App() {

  const [fruits, setFruits] = useState([
    {id: '1', name: 'Apple'},
    {id: '2', name: 'Banana'},
    {id: '3', name: 'Orange'},
  ])


  const handleDelete = (id) => {
    const newFruits = fruits.filter(fruit => fruit.id !== id);
    setFruits(newFruits);
  }

  const handleAdd = (newFruit) => {
    setFruits([...fruits, newFruit]);
  }

  return (
    <div className="App">
      <h1>My Fruits</h1>

      <ul>
        {fruits.map(fruit => (
          <Fruits key={fruit.id} fruitInfo={fruit} onClick={() => handleDelete(fruit.id)} />
        ))}
      </ul>

      <FruitForm handleAdd={handleAdd}/>
        
    </div>    
  );
}

export default App;
