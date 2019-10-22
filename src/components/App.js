import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

const App = () => {
  return (
    <div className='bookApp'>
      <BooksList/>
      <BooksForm />
    </div>
  )
}

export default App;