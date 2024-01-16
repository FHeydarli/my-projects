import React, { useState } from "react";

function CreateArea(props) {
  const [inputTitles, setInputTitle] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setInputTitle((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitButton(event) {
    props.onAdd(inputTitles);
    setInputTitle({
      title: "",
      content: "",
    });

    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputTitles.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputTitles.content}
        />
        <button onClick={submitButton}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
