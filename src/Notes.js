import React from "react";

const Notes = props => {
    return(
        <div className="note-list">
            {props.notes.map(note =>(
                <div className="note" key={note.id}>
                    <h2>Name: {note.Name}</h2>
                    <h2>Occupation: {note.Occupation}</h2>
                    <h2>Email: {note.Email}</h2>
                </div>
            ))}
        </div>
    )
}
export default Notes;