import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNotes(newNotes) {
    setNotes((prevValue) => {
      return [...prevValue, newNotes];
    });
  }
  function deleteItem(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
    console.log(id);
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNotes} />
      {notes.map((note, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={note.title}
            content={note.content}
            onDelete={deleteItem}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
