import { Link } from "react-router-dom";
import { Arrow } from "../assets/Arrow";
import { IconGoogle } from "../assets/IconGoogle";
import { ProgressBar } from "../components/atoms/ProgressBar";
import { useState } from "react";
import { InputText } from "../components/atoms/form/InputText";

export function SignUp(){

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: ""
  });

  function submitForm(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }

  return (
    <div className="container grid grid-rows-[auto_auto_1fr] h-screen ">
        <div className="grid grid-cols-[15px_1fr_15px] gap-4 place-items-center">
          <Link to={"/home"}>
            <Arrow />
          </Link>
          <ProgressBar />
          <div></div>
        </div>

        <div className="grid grid-rows-2 place-items-center">
          <p className="text-h3">Créer un compte</p>
          <p className="text-subtitleSize text-center">Notez que vous ne recevrez jamais de message publicitaire de notre part, car nous aussi on en a marre! </p>
        </div>

        <div>
          <form onSubmit={submitForm} className="grid gap-2">

            <InputText type="text" labelValue="Nom" id="lastname" placeholder="Leitner"/>
            <InputText type="text" labelValue="Prenom" id="firstname" placeholder="Sebastian"/>
            <InputText type="text" labelValue="Email" id="email" placeholder="sebastian@leitner.com"/>
            <InputText type="password" labelValue="Mot de passe" id="password" placeholder="********"/>
            <InputText type="password" labelValue="Confirmation du mot de passe" id="check_password" placeholder="********"/>
            
            <div className="py-4">
              <a href="" className="bg-subtitle rounded-full grid grid-cols-[23px_1fr] gap-2 place-items-center p-2">
                <IconGoogle />
                <p>Se connecter avec google</p>
              </a>
              <button className="w-full grid bg-primary rounded-full p-2 mt-3">S'inscrire</button>
            </div>
          </form>
        </div>
    </div>
  )
}