import React, { useEffect, useState } from 'react';
import BookApi from './api/Book';

const Sitemap = () => {
  const [bookIds, setBookIds] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await BookApi.getBooksWithoutPaginating();
        setBookIds(response.data.books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []); // Empty dependency array to run the effect only once on mount

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




