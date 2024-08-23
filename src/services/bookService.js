import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

export const searchBooks = async (query) => {
  const response = await axios.get(`${API_URL}?q=${query}`);
  return response.data.items;
};
