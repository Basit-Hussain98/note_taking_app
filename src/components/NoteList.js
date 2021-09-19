import React from "react";
import Note from "./Note";

function NoteList(props) {
  return (
    <div>
      {props.notes.map((note, index) => {
        return (
          <Note
            title={note.title}
            content={note.content}
            id={index}
            key={index}
            onDelete={props.onDelete.bind(this, index)}
          />
        );
      })}
    </div>
  );
}

export default NoteList;
