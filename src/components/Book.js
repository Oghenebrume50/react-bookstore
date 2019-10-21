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
    <div className='bookHolder'>
      <div>{ id }</div>
      <div>{ title }</div>
      <div>{ category }</div>
      <div>
        <button onClick={this.handleClick}>delete</button>
      </div>
    </div>
  )
}
}

export default Book;