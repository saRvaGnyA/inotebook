import React, { useContext } from "react";
import NoteContext from "../../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "../notes/AddNote";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  return (
    <>
      <div className="lg:ml-4">
        <AddNote></AddNote>
      </div>
      <div className="grid lg:gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {" "}
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note}></NoteItem>;
        })}
      </div>
    </>
  );
};

export default Notes;
