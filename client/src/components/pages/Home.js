import React, { useContext } from "react";
import NoteContext from "../../context/notes/NoteContext";
import Notes from "../notes/Notes";

const Home = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center lg:w-screen lg:h-full lg:justify-evenly my-8">
        <Notes></Notes>
      </div>
    </>
  );
};

export default Home;
