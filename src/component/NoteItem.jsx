import React from "react";
import { deleteNote } from "../services/LocalStorageService";

const NoteItem = ({ note, onSave }) => {
  const handleDelete = () => {
    deleteNote(note.id);
    onSave();
  };

  return (
    <div className="p-4 mb-4 bg-gray-100 rounded shadow">
      <h2 className="text-lg font-bold">{note.title}</h2>
      <p className="text-sm">{note.content}</p>
      <p className="text-xs text-gray-500">
        {new Date(note.timestamp).toLocaleString()}
      </p>
      <button
        onClick={handleDelete}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default NoteItem;
