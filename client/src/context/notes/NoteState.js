import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://inotebook-server-api.herokuapp.com";

  const notesInitial = [
    {
      _id: "6203ec50f6757dcfa0cf00ed",
      user: "62038e59f49697e2288003dc",
      title: "My title",
      description: "Access the playlist on YT",
      tag: "youtube",
      timestamp: "2022-02-09T16:31:12.232Z",
      __v: 0,
    },
    {
      _id: "6203ec6af6757dcfa0cf00f0",
      user: "62038e59f49697e2288003dc",
      title: "Another one",
      description: "Test example",
      tag: "test",
      timestamp: "2022-02-09T16:31:38.481Z",
      __v: 0,
    },
    {
      _id: "6203ec81f6757dcfa0cf00f3",
      user: "62038e59f49697e2288003dc",
      title: "Next js",
      description: "Next js is SSR for react",
      tag: "tech",
      timestamp: "2022-02-09T16:32:01.569Z",
      __v: 0,
    },
  ];

  // Add a note
  const addNote = async (title, description, tag) => {
    // TODO: API Call

    const url = `${host}/api/notes/addnote`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwMzhlNTlmNDk2OTdlMjI4ODAwM2RjIn0sImlhdCI6MTY0NDQwMDkxM30.YR3OWKrZFJOhuACCTPJcmk4z9e6IrdBNkERGWRh8JeU",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    let note = {
      _id: "6203ec81f6723dcfa0cf00f3",
      user: "62038e59f49697e2288003dc",
      title,
      description,
      tag,
      timestamp: "2022-02-09T16:32:01.569Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a note
  const deleteNote = (id) => {
    // TODO: API Call
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // TODO: API Call
    const url = `${host}/api/notes/updatenote/${id}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIwMzhlNTlmNDk2OTdlMjI4ODAwM2RjIn0sImlhdCI6MTY0NDQwMDkxM30.YR3OWKrZFJOhuACCTPJcmk4z9e6IrdBNkERGWRh8JeU",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    for (let index = 0; index < notes.length; ++index) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
