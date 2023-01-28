
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer';
import Todos from './Components/Todos';
import { useState } from 'react';

function App() {

  const onDelete=(todo)=>{
   
    setTodos(todos.filter((e)=>{
        return e!==todo;
    }));
  }
  const [todos,setTodos] = useState([{
      sno:1,
      title: 'Go to the market',
      desc: 'U will need to go to the market to do  job1'

  },{
    sno:2,
    title: 'Go to the Ground',
    desc: 'U will need to go to the market to do  job2'

},{
  sno:3,
  title: 'Go to the Mall',
  desc: 'U will need to go to the market to do  job3'

}])
  return (
<>
<Header title="Todo" isSearch={false}/>
<Todos todos={todos} onDelete={onDelete}/>
<Footer/>
</>
  );
}

export default App;
