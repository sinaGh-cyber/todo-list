import React, { useContext, useState } from 'react';
import { createContext } from 'react';
// import { Children } from 'react/cjs/react.production.min';

const alertContext = createContext(undefined);

const AlertProvider = ({ children }) => {
  const [isAlert, setIsAlert] = useState({
    showAlert: false,
    message: '',
    method: false,
    Id: false,
    action: '',
  });

  return (
    <alertContext.Provider value={{ isAlert, setIsAlert }}>
      {children}
    </alertContext.Provider>
  );
};

const useAlert = () => {
  const myContext = useContext(alertContext);
  if (myContext) return myContext;
  throw new Error('provider issue');
};

export default AlertProvider;
export { useAlert };
