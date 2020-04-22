import React, {useState} from "react";
import Notes from "./Notes"

const Form = props => {
const [box, setBox] = useState({
    name: '',
    Occupation: '',
    Email: '',
});

const handleChanges = event =>{
    setBox({ ...box, [event.target.name]: event.target.value});
};
const submitForm = event => {
    event.preventDefault();
    props.addNewNote(box);
    setBox({ Name: '',Occupation: '',Email: ''});
}


    return(     
<form onSubmit={submitForm}>
    <label htmlFor="name">Name: </label>
        <input 
            id="name" 
            type="text" 
            name="name" 
            onChange={handleChanges}
            placeholder="Name"
            value={box.Name}
        />

    <label htmlFor="Occupation">Occupation: </label>
        <input id="Occupation" 
            type="text" 
            name="Occupation" 
            onChange={handleChanges}
            placeholder="Occupation"
            value={box.Occupation}
        />

    <label htmlFor="Email">Email: </label>
        <input id="Email" 
            type="text" 
            name="Email" 
            onChange={handleChanges}
            placeholder="Email"
            value={box.Email}
        />
        <button type="submit">Enter</button>
    </form>
    )
};

export default Form;