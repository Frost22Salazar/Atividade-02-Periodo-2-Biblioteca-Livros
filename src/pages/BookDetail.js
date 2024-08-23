import React from 'react';
import { useParams } from 'react-router-dom';
import books from '../data/books';

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return <div>Livro não encontrado</div>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Idioma:</strong> {book.language}</p>
      <p><strong>Páginas:</strong> {book.pages}</p>
      <p><strong>Ano:</strong> {book.year}</p>
      <img src={book.coverImage} alt={book.title} />
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetail;
