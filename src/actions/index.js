const CREATE_BOOK = 'CREATE BOOK';
const REMOVE_BOOK = 'REMOVE BOOK';

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

export {createBook, removeBook};