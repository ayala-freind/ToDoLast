import logo from './logo.svg';
import './App.css';
import Register from './components/register';
import Login from './components/login';
import store from './redux/store';
import { Provider } from 'react-redux';
import Tasks from './redux/reducers/tasks';
import Image from './components/image';
import TaskList from './components/taskList';
import AddTask from './components/addTask';
import Task from "./components/task"
import{
  BrowserRouter as Router,
Switch,
Routes,
Route,
Link
}from "react-router-dom"

function App() {
  return (
  <Provider store={store}>
    <div className="App">

<Routes>
<Route path="/" element={<Login /> }/>
<Route path="/register" element={<Register /> }/>
<Route path="/taskList" element={<TaskList /> }/>
<Route path="/task" element={<Task /> }/>
<Route path="/addTask" element={<AddTask /> }/>
<Route path="/image" element={<Image /> }/>
</Routes>
    </div>
    </Provider>
  );
}

export default App;
