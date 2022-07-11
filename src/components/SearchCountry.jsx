import { useState } from "react";

import icon_search from '../assets/icons/icon_search.svg'

export const SearchCountry = ( { onNewSearch } ) => {
  
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) =>{
    setInputValue(target.value);
    onNewSearch( target.value )
  }

  const onSubmit = ( event ) => {
    event.preventDefault();

    if ( inputValue.trim().length <= 1 ) return;
     onNewSearch( inputValue.trim() )
     
  }


  
    return (
    <form className="inputContent" onSubmit={ onSubmit }>
      <span className="inputContent__icon"> 
        <img src={icon_search} className="icon-search" alt="icon-search" />
      </span>
      <input 
        type="text" 
        placeholder="Search for a country..." 
        value={ inputValue }
        className="inputContent__input"
        onChange={ onInputChange }/>
    </form>
  );
};
