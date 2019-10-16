import React from 'react';
import { connect } from 'react-redux';

import { removeBook } from '../actions/index';
import Book from '../components/Book';

class BooksList extends React.Component {

  render() {
    const Books = this.props.books.map((book) => 
      <Book key={book.id} book={book} remove={this.props.removeBook}
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

export default connect(mapStateToProps, { removeBook } )(BooksList);