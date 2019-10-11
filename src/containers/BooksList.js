import React from 'react';
import { connect } from 'react-redux';

import { createBook, removeBook } from '../actions/index';
import Book from '../components/Book';

class BooksList extends React.Component {
  render() {
    const Books = this.props.books.map((book, idx) => 
      <Book key={idx} id={book.id} title={book.title} category={book.category} />
    );
    return(
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {Books}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(',,,,,,,,,,,,,,,');
  console.log(state);
  return {
    books: state.books
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: book => dispatch(createBook(book)),
    removeBook: book => dispatch(removeBook(book))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);