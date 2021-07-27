import React from 'react';
import './CategorySelector.scss';

function CategorySelector(){
    return (
        <ul>
           <li>
               <input type="radio"/><label>Все модели</label>
           </li>
        </ul>
    )
}

export default CategorySelector;