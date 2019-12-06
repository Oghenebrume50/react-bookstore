import React from 'react';
import categories from '../utils/categories';

const CategoryFilter = (props) => {
  const FilterCategories = ['All', ...categories];
  return(
    <div className='header'>
      <div className='appTitle'>BookStore CMS</div>
      <div className='filterDiv'>
        <p className='hashText'>Categories</p>
        <select
        name='category'
        onChange={props.changeFilter}
        >
          {FilterCategories.map((category, idx) => 
            <option key={idx} value={category}>{category}</option>
          )}
        </select>
      </div>
    </div>
  );
}

export default CategoryFilter;