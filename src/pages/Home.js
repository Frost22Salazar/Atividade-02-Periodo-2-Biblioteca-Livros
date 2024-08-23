import React, { useState, useEffect } from 'react';
import { searchBooks } from '../services/bookService';
import BookCard from '../components/BookCard';

const Home = ({ onAddToFavorites }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await searchBooks('React programming');
      setBooks(data);
    };
    fetchBooks();
  }, []);

  const handleMoreInfo = (book) => {
    // Lógica para acessar detalhes do livro
  };

  return (
    <div>
      <h1>Biblioteca de Livros</h1>
      <div className="book-list">
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onMoreInfo={handleMoreInfo}
            onAddToFavorites={onAddToFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
