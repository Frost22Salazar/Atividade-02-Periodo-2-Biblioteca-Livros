import React from 'react';
import BookCard from '../components/BookCard';

const Favorites = ({ favorites }) => {
  return (
    <div>
      <h1>Meus Livros Favoritos</h1>
      <div className="book-list">
        {favorites.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
