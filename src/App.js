import { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import List from './Components/List';

function App() {

  const [addItem, setAddItem] = useState([]);

  const addList = (input) => {
    setAddItem([...addItem, input]);
  }

  const deleteItem = (e) =>
  {
    let newList = [...addItem];
    newList.splice(e,1);
    setAddItem(newList);
  }
  return (
    <>
      <div className='main'>
        <div className='inner_main'>
        <h1 className='heading'>To-Do Web App</h1>
        <hr/>
          <Input add={addList} />
          <ul>
            {addItem.map((litems, i) => {
              return (
                <List key={i} index={i} item={litems} deleteItem = {deleteItem} />
              )
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
