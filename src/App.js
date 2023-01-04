import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.component';
import Input from './components/Input/Input.component';
import ListContent from './components/ListContent/ListContent.component';
import { useSelector } from 'react-redux';




function App() {

  const {todoList,todoFilter}=useSelector(state => state.todo)
  console.log(todoList,todoFilter)

  return (
    <div className="md:container md:mx-auto">
    <Header>
    <Input></Input>
    <ListContent></ListContent>

    </Header>
   
    </div>
  );
}

export default App;
