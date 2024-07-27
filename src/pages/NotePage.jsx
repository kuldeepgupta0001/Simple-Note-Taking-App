import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NoteForm from "../component/NoteForm";
import { getNotes } from "../services/LocalStorageService";

const NotePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const notes = getNotes();
  const note = notes.find((n) => n.id === parseInt(id));

  const handleSave = () => {
    navigate("/");
  };

  return (
    <div>
      <NoteForm note={note} onSave={handleSave} />
    </div>
  );
};

export default NotePage;
