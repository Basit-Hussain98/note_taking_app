import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isVisible, setIsvisible] = useState(false);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          style={{ display: !isVisible && "none" }}
          name="title"
          type="text"
          placeholder=" Title"
          value={note.title}
          onChange={changeHandler}
        />
        <textarea
          onClick={visibilityHandler}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows={isVisible ? "3" : "1"}
          onChange={changeHandler}
        />
        <button style={{ display: isVisible ? "" : "none" }} type="submit">
          Add
        </button>
      </form>
    </div>
  );

  function changeHandler(e) {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(note);
    if (note.title !== "" && note.content !== "") setIsvisible(false);
    setNote({
      title: "",
      content: "",
    });
  }

  function visibilityHandler() {
    setIsvisible(true);
  }
}

export default CreateArea;
