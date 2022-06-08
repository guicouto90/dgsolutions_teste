import React, {useState} from "react";
import Context from '.';

function Provider({children}) {
  const [id, setId] = useState('');

  const context = {
    id,
    setId
  };

  return(
    <Context.Provider  value={context}>
      { children }
    </Context.Provider >
  )
}

export default Provider;