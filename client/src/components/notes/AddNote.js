import React, { useContext, useState } from "react";
import NoteContext from "../../context/notes/NoteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes, addNote } = context;
  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col max-w-md px-4 pt-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <div className="self-center text-xl font-normal text-gray-800 sm:text-2xl dark:text-white">
        Add a new note
      </div>
      <div className="p-6">
        <form action="#">
          <div className="flex flex-col mb-2">
            <div className="relative ">
              <input
                type="text"
                id="title"
                className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="title"
                placeholder="Title"
                onChange={onChange}
                required
                minLength={5}
                value={note.title}
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className="relative ">
              <input
                type="text"
                id="tag"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Tag"
                name="tag"
                onChange={onChange}
                required
                minLength={5}
                value={note.tag}
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className="relative ">
              <input
                type="text"
                id="description"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Description"
                name="description"
                onChange={onChange}
                required
                minLength={5}
                value={note.description}
              />
            </div>
          </div>
          <div className="flex w-full mt-4">
            <button
              type="submit"
              className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              onClick={handleClick}
              disabled={note.title.length < 5 || note.description.length < 5}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
