import React from 'react';

const BooksForm = () => {
  return(
    <div>
      <form>
        <input type='text' placeholder='enter book title' />
        <select>
          <option value='Action'>Action</option>
          <option value='History'>History</option>
          <option value='Biography'>Biography</option>
          <option value='Horror'>Horror</option>
          <option value='Sci-fi'>Sci-fi</option>
          <option value='Kids'>Kids</option>
          <option value='Learning'>Learning</option>
        </select>
        <input type='submit' value='submit book'/>
      </form>
    </div>
  )
}

export default BooksForm;