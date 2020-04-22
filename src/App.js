import React, {useState} from 'react';
import './App.css';
import Form from './Form';
import Notes from './Notes';

function App() {
  const [notes, setNotes] = useState([
    {
        id: 1,
        Name: 'Raymond',
        Occupation: 'Bussiness Man',
        Email: 'Raymond@gmail.com',
    },
  
  ]);
  
  const addNewNote = block =>{
  const newBlock ={
    id: Date.now(),
    Name: block.name,
    Occupation: block.Occupation,
    Email: block.Email
  };
  setNotes([...notes, newBlock])

}
  
  return (
    <div className="App">
      <h1>Coding Members</h1>
      <Form addNewNote={addNewNote}/>
      <Notes notes={notes} />
    </div>
  );
}
export default App;




