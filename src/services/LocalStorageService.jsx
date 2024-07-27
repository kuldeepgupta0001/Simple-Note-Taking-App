const getNotes = () => {
  return JSON.parse(localStorage.getItem("notes")) || [];
};

const addNote = (note) => {
  const notes = getNotes();
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
};

const updateNote = (updatedNote) => {
  const notes = getNotes();
  const index = notes.findIndex((note) => note.id === updatedNote.id);
  if (index !== -1) {
    notes[index] = updatedNote;
    localStorage.setItem("notes", JSON.stringify(notes));
  }
};

const deleteNote = (id) => {
  let notes = getNotes();
  notes = notes.filter((note) => note.id !== id);
  localStorage.setItem("notes", JSON.stringify(notes));
};

export { getNotes, addNote, updateNote, deleteNote };
