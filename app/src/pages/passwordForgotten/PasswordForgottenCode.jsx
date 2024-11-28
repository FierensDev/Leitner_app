import { Link, useNavigate } from "react-router-dom";
import { ProgressBar } from "../../components/atoms/ProgressBar";
import { Arrow } from "../../assets/Arrow";
import { useState } from "react";

export function PasswordForgottenCode(){
  const navigate = useNavigate();
  const [code, setCode] = useState([]);

  function changeCode(v){
    console.log(code);
    if(v === -1){
      setCode(code.slice(0, -1));
    } else if(code.length < 4){
      setCode([...code, v]);
    }


  }

  return (
    <div className="container h-screen grid grid-rows-[auto_1fr_1fr_auto_1fr] gap-4">
        <div className="grid grid-cols-[15px_1fr_15px] gap-4 place-items-center">
          <Link to={"/home"}>
            <Arrow />
          </Link>
          <ProgressBar />
          <div></div>
        </div>

        <div className="grid grid-rows-2 place-items-center">
          <p className="text-h3 text-center">Vous avez recu un mail !</p>
          <p className="text-subtitleSize text-center">Consulter votre boite mail, nous vous avons envoyer un code que vous devez renseigner ici </p>
        </div>
      
        <div className="grid grid-cols-4 gap-4 place-items-center">
          <div className="w-[100%] aspect-square bg-subtitle rounded-xl flex justify-center items-center">{code[0] ? code[0] : ""}</div>
          <div className="w-[100%] aspect-square bg-subtitle rounded-xl flex justify-center items-center">{code[1] ? code[1] : ""}</div>
          <div className="w-[100%] aspect-square bg-subtitle rounded-xl flex justify-center items-center">{code[2] ? code[2] : ""}</div>
          <div className="w-[100%] aspect-square bg-subtitle rounded-xl flex justify-center items-center">{code[3] ? code[3] : ""}</div>
        </div>

        <button className="w-full grid bg-primary rounded-full p-2 mt-3" onClick={() => {
          navigate("/password_forgotten_create_new_password");
        }}>
          Confirmer
        </button>

        <div>
          <div className="grid grid-cols-3 gap-4">
            <button className="w-full aspect-[6/4] text-[28px]" onClick={()=>changeCode(1)}>1</button>
            <button className="w-full aspect-[6/4] text-[28px]" onClick={()=>changeCode(2)}>2</button>
            <button className="w-full aspect-[6/4] text-[28px]" onClick={()=>changeCode(3)}>3</button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <button className="w-full aspect-[6/4] text-[28px]" onClick={()=>changeCode(4)}>4</button>
            <button className="w-full aspect-[6/4] text-[28px]" onClick={()=>changeCode(5)}>5</button>
            <button className="w-full aspect-[6/4] text-[28px]" onClick={()=>changeCode(6)}>6</button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <button className="w-full aspect-[6/4] text-[28px]" onClick={()=>changeCode(7)}>7</button>
            <button className="w-full aspect-[6/4] text-[28px]" onClick={()=>changeCode(8)}>8</button>
            <button className="w-full aspect-[6/4] text-[28px]" onClick={()=>changeCode(9)}>9</button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div></div>
            <button className="w-full aspect-[6/4] text-[28px]" onClick={()=>changeCode(0)}>0</button>
            <button className="w-full aspect-[6/4] text-[28px]" onClick={()=>changeCode(-1)}>
              <div className="w-[24px] m-auto">
                <Arrow />
              </div>
            </button>
          </div>
        </div>
    </div>
  )
}