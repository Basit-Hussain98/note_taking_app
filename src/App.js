import Header from "./components/Header";
import React, { useState } from "react";
import CreateArea from "./components/CreateArea";
import NoteList from "./components/NoteList";

function App() {
  const [noteList, setNoteList] = useState([]);

  return (
    <>
      <Header />
      <CreateArea onAdd={onAdd} />
      <NoteList notes={noteList} onDelete={deleteHandler} />
    </>
  );

  function onAdd(note) {
    if (note.title !== "" && note.content !== "")
      setNoteList((prevNote) => {
        return [...prevNote, note];
      });
  }
  function deleteHandler(index) {
    const newList = [...noteList];
    newList.splice(index, 1);
    setNoteList(newList);
  }
}

export default App;
