import { useState } from "react"
import { Eye } from "../../../assets/Eye";
import { EyeClose } from "../../../assets/EyeClose";

export function InputText({htmlFor, labelValue, id, placeholder, type, error}){
  
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  
  const changePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
    console.log('hey')
  };


  return(
    <label 
      htmlFor={htmlFor}
      className={`bg-background ${error ? "text-red-600" : ""} py-2 grid grid-cols-[auto_1fr_auto] gap-4 text-[16px] border-b ${error ? "border-b-red-400" : "border-b-subtitle"}  focus-within:border-primary`}
    >
      {labelValue}
      <input 
        className={`bg-background ${error ? "text-red-600" : "text-white"} placeholder-subtitle focus:outline-none`}
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
        <p onClick={changePasswordVisibility} className=" flex justify-center">
          {passwordVisibility ?
            <div className="w-5 ">
              <EyeClose />
            </div>
            :
            <div className="w-5">
              <Eye />
            </div>
          }
        </p>
        :
        <></>
      }
    </label>
  )
}