import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleAddToFavorites = (book) => {
    setFavorites([...favorites, book]);
  };

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home onAddToFavorites={handleAddToFavorites} onSelectBook={handleSelectBook} />}
        />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/favorites" element={<Favorites favorites={favorites} />} />
      </Routes>
    </Router>
  );
};

export default App;
