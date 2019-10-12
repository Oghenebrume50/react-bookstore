import React from 'react';
import { connect } from 'react-redux';

import { removeBook } from '../actions/index';
import Book from '../components/Book';

class BooksList extends React.Component {
  constructor(props){
    super(props)
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(book) {
    this.props.removeBook(book)
  }

  render() {
    const Books = this.props.books.map((book, idx) => 
      <Book key={idx} book={book} remove={this.handleRemoveBook}
      />
    );

    return(
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Delete Book</th>
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
  return {
    books: state.books
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBook: book => dispatch(removeBook(book))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);