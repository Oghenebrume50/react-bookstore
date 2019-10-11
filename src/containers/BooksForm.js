import React from 'react';

class BooksForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      category: ''
    }
  }
  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return(
      <div>
        <form>
          <input type='text' placeholder='enter book title' />
          <select>
            {categories.map((category, idx) => 
              <option key={idx} value='category'>{category}</option>
            )}
          </select>
          <input type='submit' value='submit book'/>
        </form>
      </div>
    )
  }
}

export default BooksForm;