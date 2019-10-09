import React from 'react';
import Book from './Book';

const BooksList = () => {
  return(
    <table>
      <thead>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </thead>
      <tbody>
        {props.checkBooksList.map((book, idx) => {
          <Book key={idx} book={book}/>
        })}
      </tbody>
    </table>
  )
}