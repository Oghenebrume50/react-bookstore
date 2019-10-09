import React from 'react';
import BooksList from '../components/BooksList';
import BooksForm from '../components/BooksForm';

const App = () => {
  return (
    <div>
      <BooksList/>
      <BooksForm />
    </div>
  )
}

export default App;