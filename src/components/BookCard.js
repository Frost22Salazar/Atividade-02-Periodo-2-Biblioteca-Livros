import React from 'react';
import '../styles/BookCard.css';
import { Button } from '@mui/material';

const BookCard = ({ book, onMoreInfo, onAddToFavorites }) => {
  return (
    <div className="book-card">
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <h3>{book.volumeInfo.title}</h3>
      <Button variant="contained" color="primary" onClick={() => onMoreInfo(book)}>
        Acessar Informações
      </Button>
      <Button variant="contained" color="secondary" onClick={() => onAddToFavorites(book)}>
        Guardar nos Favoritos
      </Button>
    </div>
  );
};

export default BookCard;
