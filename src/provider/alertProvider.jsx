import React, { useContext, useState } from 'react';
import { createContext } from 'react/cjs/react.development';
import { Children } from 'react/cjs/react.production.min';

const alertContext = createContext(undefined);

const AlertProvider = () => {
    const [isAlert, setIsAlert] = useState({
        showAlert: false,
        message: '',
        action: '',
      });

  return <alertContext.Provider value={{isAlert, setIsAlert}} >{Children}</alertContext.Provider>;
};

const useAlert = () => {
    const myContext = useContext(alertContext);
    if (myContext) return myContext;
    throw new Error('provider issue');
  };

  export default AlertProvider;
  export {useAlert};