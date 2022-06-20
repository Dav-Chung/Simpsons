// src/components/DisplayEmployee.jsx
import React from 'react';

function DisplayEmployee({ employee }) {
  return (
    employee && (
      <div className='DisplayEmployee'>
        <img src={employee.image} alt={employee.character} />
        <ul>
          <li>quote: {employee.quote}</li>
          <li>
            character: {employee.character}
          </li>
          <li>
            shoofdirection: {employee.characterDirection}
          </li>
        </ul>
      </div>
    )
  );
}

export default DisplayEmployee;
