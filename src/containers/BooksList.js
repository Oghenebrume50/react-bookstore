import React from 'react';
import { connect } from 'react-redux';

import { removeBook, changeFilter } from '../actions/index';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';

const filteredBooks = (books, filterVal) => {
  return filterVal === 'All' ? books : 
    books.filter(book => book.category === filterVal.toLowerCase());
}

class BooksList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: ''
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e) {
    this.props.changeFilter(e.target.value);
    this.setState({
      filter: e.target.value
    });
  }

  render() {
    const Books = filteredBooks(this.props.books, this.props.filter).map((book) => {
      return <Book key={book.id} book={book} remove={this.props.removeBook} />;
    });

    return(
      <div>
        <CategoryFilter changeFilter={this.handleFilterChange} />
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    filter: state.filter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBook: (book) => dispatch(removeBook(book)),
    changeFilter: (filter) => dispatch(changeFilter(filter))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);