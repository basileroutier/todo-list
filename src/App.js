import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
        {/* <Greet name="Ian">
            <p>This is a child paragraph</p>
        </Greet>
        <Welcome name="Jackie" heroName="Titouan"></Welcome> */}
        <TodoList  />
        
    </div>    
  );
}

export default App;
