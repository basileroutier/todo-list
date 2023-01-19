import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import TodoList from './Components/TodoList';
import Count from './Components/Count';
import Todo from './Components/Todo';
import EventHandler from './Components/EventHandler';
import UserGreeting from './Components/UserGreeting';

function App() {
  return (
    <div className="App">
        {/* <Greet name="Ian">
            <p>This is a child paragraph</p>
        </Greet>
        <Welcome name="Jackie" heroName="Titouan"></Welcome> */}
        {/* <Greet name = "Titouan"></Greet>
        <Count></Count>
        <TodoList  /> */}
        {/* <EventHandler/> */}
        <UserGreeting></UserGreeting>
        <Todo></Todo>
        
    </div>    
  );
}

export default App;
