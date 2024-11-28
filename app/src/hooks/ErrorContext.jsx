import React, { createContext, useContext, useState } from 'react';

const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(true);

  const clearError = () => setError(null);

  return (
    <ErrorContext.Provider value={{ error, setError, clearError }}>
      {children}
      {/* {error ? 
        <div className='absolute inset-0 bg-[#222427B3] backdrop-blur-[2.2px]'>
          <div className='w-[200px] bg-red-400'>
            <div>x</div>
            <p>Message d'erreur : </p>
          </div>
        </div>
        :
        <div></div>
      } */}
    </ErrorContext.Provider>
  );
};

export const useError = () => useContext(ErrorContext);
