import React, { createContext, useContext, useState } from 'react';
import { Logo } from '../assets/Logo';

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);

  return (
    <LoaderContext.Provider value={{ loader, setLoader }}>
      {children}
      {loader ? 
        <div className='absolute inset-0 bg-[#222427B3] backdrop-blur-[2.2px]'>
          loader
          <div className='relative top-[calc(50%-100px)] left-[calc(50%-52px)] w-[100px]'>
            <Logo />
          </div>
        </div>
        :
        <div></div>
      }
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
