import React, { useState } from 'react';
import MyContext from './myContext';

function Provider({ children }) {
  const [value, setValue] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = ({ target }) => {
    setValue(target.value)
    setIsClicked(!isClicked);
  };

  const context = {
    value,
    setValue,
    handleClick,
    isClicked,
    setIsClicked,
  }

  return (
    <MyContext.Provider value={ context }>
      {children}
    </MyContext.Provider>
  )
}

export default Provider;