
import React from 'react';
import BookApi from './api/Book';


const Sitemap = () => {
  const fetchBooks = async () => {
    try {
      const response = await BookApi.getBooksWithoutPaginating(); 
      const books = response.books;
      const bookIds = books.map((book) => book.id);
      return bookIds;
    } catch (error) {
      console.error('Error fetching books:', error);
      return [];
    }
  };

  const bookIds = fetchBooks();

  return (
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      {bookIds.map((bookId) => (
        <url key={bookId}>
          <loc>{`https://riwaya-jo.site/books?book=${bookId}`}</loc>
        </url>
      ))}
    </urlset>
  );
};

export default Sitemap;
