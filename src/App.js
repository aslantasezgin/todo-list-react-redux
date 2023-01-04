import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.component';
import Input from './components/Input/Input.component';
import ListContent from './components/ListContent/ListContent.component';

function App() {
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
