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
    const {id, title, category} = this.props.book;
  return (
    <tr>
      <td>{ id }</td>
      <td>{ title }</td>
      <td>{ category }</td>
      <td>
        <button onClick={this.handleClick}>delete</button>
      </td>
    </tr>
  )
}
}

export default Book;