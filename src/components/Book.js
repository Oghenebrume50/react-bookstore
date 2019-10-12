import React from 'react';

class Book extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.remove(this.props.book)
  }

  render(){
  return (
    <tr>
      <td>{this.props.book.id}</td>
      <td>{this.props.book.title}</td>
      <td>{this.props.book.category}</td>
      <td>
        <button onClick={this.handleClick}>delete</button>
      </td>
    </tr>
  )
}
}

export default Book;