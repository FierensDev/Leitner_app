import React, { createContext, useContext, useState } from "react";
import { Cross } from "../assets/Cross";

const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(true);

  return (
    <ErrorContext.Provider value={{error, setError}}>
      {children}
      {error ? 
        <div className='absolute inset-0 bg-[#222427B3] backdrop-blur-[2.2px] grid place-items-center'>
          <div className="w-[80%] border border-red-400 rounded-lg bg-[#bd141325] p-4">
            <div className="grid grid-cols-[1fr_auto] place-items-center">
              <div></div>
              <div className="w-[16px]" onClick={() => {setError(false)}}>
                <Cross color={"white"}/>
              </div>
            </div>
            <div>
              <p>{error}</p>
            </div>
          </div> 
        </div>
        :
        <div></div>
      }
    </ErrorContext.Provider>
  );
};

export const useError = () => useContext(ErrorContext);
