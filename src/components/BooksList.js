import React from 'react';
import Book from '../containers/Book';

const BooksList = () => {
  return(
    <table>
      <thead>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </thead>
      <tbody>
          <Book key={1} book={{id: 1, title: 'First book in series', category: 'sci-fi'}}/>
          <Book key={2} book={{id: 2, title: 'Second book in series', category: 'romance'}}/>
          <Book key={3} book={{id: 3, title: 'Third book in series', category: 'sci-fi'}}/>
      </tbody>
    </table>
  )
}

export default BooksList; 