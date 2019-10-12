import React from 'react';
import { connect } from 'react-redux';

import { removeBook } from '../actions/index';
import Book from '../components/Book';

class BooksList extends React.Component {
  render() {
    const Books = this.props.books.map((book, idx) => 
      <Book key={idx} id={book.id} 
            title={book.title} 
            category={book.category} 
            removeBook={this.props.removeBook}
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