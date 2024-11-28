import { useState } from "react"

export function InputText({htmlFor, labelValue, id, placeholder, type}){
  
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  
  const changePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
    console.log('hey')
  };


  return(
    <label 
      htmlFor={htmlFor}
      className="bg-background py-2 grid grid-cols-[auto_1fr_auto] gap-4 text-[16px] border-b border-b-subtitle focus-within:border-white"
    >
      {labelValue}
      <input 
        className="bg-background text-white placeholder-subtitle focus:outline-none"
        type={type === "password" ? 
                passwordVisibility ? 
                "password"
                :
                "text"
              :
              type
              }
        id={id}
        name={id}
        placeholder={placeholder}
      />
      
      { type === "password" ?
        <p onClick={changePasswordVisibility}>
          {passwordVisibility ?
            "true"
            :
            "false"
          }
        </p>
        :
        <></>
      }
    </label>
  )
}