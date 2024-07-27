import React, { useState } from "react";
import { addNote, updateNote } from "../services/LocalStorageService";

const NoteForm = ({ note, onSave }) => {
  const [title, setTitle] = useState(note ? note.title : "");
  const [content, setContent] = useState(note ? note.content : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: note ? note.id : Date.now(),
      title,
      content,
      timestamp: new Date().toISOString(),
    };

    if (note) {
      updateNote(newNote);
    } else {
      addNote(newNote);
    }

    onSave();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
        required
      ></textarea>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Save
      </button>
    </form>
  );
};

export default NoteForm;
