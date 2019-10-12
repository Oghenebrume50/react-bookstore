import React from 'react';
import { connect } from 'react-redux';

import { createBook } from '../actions';

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

    this.props.createBook({
      id: Math.floor((Math.random () * 50) + 1),
      title: this.state.title,
      category: this.state.category
    })

    this.setState({
      title: '',
      category: 'Action'
    });

    e.target.reset();
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' 
          placeholder='enter book title'
          name='title'
          onChange={this.handleChange}/>

          <select 
          name='category'
          value={this.state.category}
          onChange={this.handleChange}>
            {categories.map((category, idx) => 
              <option key={idx}>{category}</option>
            )}
          </select>
          <input type='submit' value='submit book'/>
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