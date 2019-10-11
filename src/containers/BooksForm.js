import React from 'react';

class BooksForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      category: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    const objName = e.target.name;
    this.setState({
      [objName]: e.target.value,
    });
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return(
      <div>
        <form>
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

export default BooksForm;