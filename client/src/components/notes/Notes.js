import React, { useContext, useEffect, useRef, useState } from "react";
import NoteContext from "../../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import AddNote from "../notes/AddNote";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes, getNotes, editNote } = context;
  useEffect(() => {
    getNotes();
  }, []);
  const ref = useRef(null);
  const [toggle, setToggle] = useState(false);
  const updateNote = (currentNote) => {
    setToggle(true);
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });

  const handleClick = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="lg:ml-4">
        <AddNote></AddNote>
      </div>

      {toggle && (
        <div
          className="shadow-lg rounded-2xl p-4 bg-indigo-400 bg-opacity-70 w-64 m-auto fixed z-10"
          ref={ref}
        >
          <div className="w-full h-full text-center">
            <div className="flex h-full flex-col justify-between">
              <p className="text-gray-100 text-xl py-2 px-6">
                <span className="text-black font-bold">Edit Note</span>
              </p>
              <div className="p-6">
                <form action="#">
                  <div className="flex flex-col mb-2">
                    <div className="relative ">
                      <input
                        type="text"
                        id="etitle"
                        className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        name="etitle"
                        placeholder="Title"
                        value={note.etitle}
                        onChange={onChange}
                        required
                        minLength={5}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-2">
                    <div className="relative ">
                      <input
                        type="text"
                        id="etag"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Tag"
                        name="etag"
                        value={note.etag}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mb-2">
                    <div className="relative ">
                      <input
                        type="text"
                        id="edescription"
                        className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Description"
                        name="edescription"
                        value={note.edescription}
                        onChange={onChange}
                        required
                        minLength={5}
                      />
                    </div>
                    <div className="flex w-full mt-4">
                      <button
                        type="button"
                        className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                        onClick={handleClick}
                        disabled={
                          note.etitle.length < 5 || note.edescription.length < 5
                        }
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="flex items-center justify-between gap-4 w-full">
                <button
                  type="button"
                  className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  onClick={() => {
                    setToggle(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid lg:gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full lg:mx-4">
        {" "}
        {notes.length === 0 && "No notes to display"}
        {notes.map((note) => {
          return (
            <NoteItem
              key={note._id}
              updateNote={updateNote}
              note={note}
            ></NoteItem>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
