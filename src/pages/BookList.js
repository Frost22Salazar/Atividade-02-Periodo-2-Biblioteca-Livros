import React from 'react';
import { Link } from 'react-router-dom';
import books from '../data/books'; // Supondo que você tenha uma lista de livros.

const BookList = () => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <img src={book.coverImage} alt={book.title} />
          <h3>{book.title}</h3>
          <Link to={`/book/${book.id}`}>
            <button>Mais Informações</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;
