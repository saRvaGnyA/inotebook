import React, { useContext } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import NoteContext from "../../context/notes/NoteContext";

const NoteItem = ({ note, updateNote }) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const handleClick = () => {
    deleteNote(note._id);
  };
  return (
    <div className="px-8 pt-8 pb-3 bg-white border rounded shadow-sm mt-4">
      <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
        <span className="transition-colors duration-200 text-purple-400 hover:text-purple-800">
          {note.tag}
        </span>
      </p>
      <span className="inline-block mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-orange-400">
        {note.title}
      </span>
      <p className="text-gray-700">{note.description}</p>
      <div className="mt-4 mb-2 text-xl flex justify-around">
        <button onClick={handleClick}>
          <MdDelete className="text-rose-700 pointer"></MdDelete>
        </button>
        <button>
          <MdEdit
            className="text-lime-600 pointer"
            onClick={() => {
              updateNote(note);
            }}
          ></MdEdit>
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
