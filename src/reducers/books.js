const books = (state = [], action) => {
  switch(action.type) {
    case 'CREATE BOOK':
      return [...state, action.book];
    case 'REMOVE BOOK':
      const idx = state.indexOf(action.book);
      return [...state.slice(0,idx), ...state.slice(idx + 1)]
    default:
      return state;
  }
}

export default books;