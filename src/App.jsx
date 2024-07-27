import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/Home";
import NotePage from "../src/pages/NotePage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-500 text-white p-4">
          <h1 className="text-2xl font-bold text-center">
            Simple Note Taking App
          </h1>
        </header>
        <main className="p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
