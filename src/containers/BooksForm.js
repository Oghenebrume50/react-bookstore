import React from 'react';
import shortid from 'shortid';

import { connect } from 'react-redux';

import { createBook } from '../actions';
import categories from '../utils/categories';

class BooksForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      category: ''
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const objName = e.target.name;
    this.setState({
      [objName]: e.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const {title, category} = this.state;
    this.props.createBook({
      id: shortid.generate(),
      title,
      category
    })

    this.setState({
      title: '',
      category: 'Action'
    });

    e.target.reset();
  }

  render() {
    return(
      <div>
        <div className='line'></div>
        <p className='hashText'>ADD NEW BOOK</p>
        <form onSubmit={this.handleSubmit} className='form'>
          <input type='text' 
          placeholder='enter book title'
          name='title'
          className='bookTitleField'
          onChange={this.handleChange}/>

          <select 
          name='category'
          value={this.state.category}
          className='bookCategoryField'
          onChange={this.handleChange}>
            {categories.map((category, idx) => 
              <option key={idx}>{category}</option>
            )}
          </select>
          <input type='submit' 
            value='Add book' 
            className='addBookBtn'/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: book => dispatch(createBook(book))
  }
}

export default connect(null, mapDispatchToProps)(BooksForm);
