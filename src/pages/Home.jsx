import React, { useState, useEffect } from "react";
import NoteItem from "../component/NoteItem";
import NoteForm from "../component/NoteForm";
import Pagination from "../component/Pagination";
import SearchBar from "../component/SearchBar";
import { getNotes } from "../services/LocalStorageService";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setNotes(getNotes());
  }, []);

  const handleSave = () => {
    setNotes(getNotes());
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.includes(searchTerm) || note.content.includes(searchTerm)
  );
  const notesPerPage = 10;
  const paginatedNotes = filteredNotes.slice(
    (currentPage - 1) * notesPerPage,
    currentPage * notesPerPage
  );

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      {paginatedNotes.map((note) => (
        <NoteItem key={note.id} note={note} onSave={handleSave} />
      ))}
      <Pagination
        totalNotes={filteredNotes.length}
        notesPerPage={notesPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      <NoteForm onSave={handleSave} />
    </div>
  );
};

export default HomePage;
