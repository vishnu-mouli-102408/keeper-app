import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    props.addNote(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          value={note.title}
          onChange={handleChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleChange}
        ></textarea>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;