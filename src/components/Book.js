import React from 'react';

const Book = (book) => {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button>delete</button>
      </td>
    </tr>
  )
}

export default Book;