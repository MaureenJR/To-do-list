
import { useState } from 'react';
import './App.css';
import Form from './component/Form';
import List from './component/List';



const App = () => {
  const [list, setList] = useState([]);
  console.log(list);

  return (
    <div className="App">
      <Form list={list} setList={setList}/>
      <List list={list} setList={setList}/>
    </div>
  );
}

export default App;
