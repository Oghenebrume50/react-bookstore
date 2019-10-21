const CREATE_BOOK = 'CREATE BOOK';
const REMOVE_BOOK = 'REMOVE BOOK';
const CHANGE_FILTER = 'CHANGE FILTER';

const createBook = (book) => {
  return {
    type: CREATE_BOOK,
    book
  }
}

const removeBook = (book) => {
  return {
    type: REMOVE_BOOK,
    book,
  }
}

const changeFilter = (filter) => {
  return {
    type: CHANGE_FILTER,
    filter,
  }
}

export {createBook, removeBook, changeFilter};