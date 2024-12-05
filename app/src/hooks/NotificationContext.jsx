import React, { createContext, useContext, useEffect, useState } from "react";
import { Cross } from "../assets/Cross";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {

  const [notification, setNotification] = useState({
    code: false,
    message: false
  });

  useEffect(() => {
    if(notification.code < 400){
      const timer = setTimeout(() => {
        setNotification({code: false,message: false })
      }, 3000);
      
      return () => clearTimeout(timer)
    }

  }, [notification])
  return (
    <NotificationContext.Provider value={{notification, setNotification}}>
      {children}
      {notification.code ? 
        notification.code > 399 ?
        <div className='fixed inset-0 bg-[#222427B3] backdrop-blur-[2.2px] grid place-items-center'>
          <div className="w-[80%] border border-red-400 rounded-lg bg-[#bd141325] p-4">
            <div className="grid grid-cols-[1fr_auto] place-items-center">
              <div></div>
              <div className="w-[16px]" onClick={() => {setNotification({
                code: null,
                message: null
              })}}>
                <Cross color={"white"}/>
              </div>
            </div>
            <div>
              <p className="underline">Message</p>
              <p>{notification.message}</p>
            </div>
          </div> 
        </div>
        :
        <div className="fixed top-3 right-3 bg-primary70 p-3 rounded-xl border border-primary">
          {notification.message}
        </div>
      :<></>
      }
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
