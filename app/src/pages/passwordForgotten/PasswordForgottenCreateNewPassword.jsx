import { Link, useNavigate } from "react-router-dom";
import { ProgressBar } from "../../components/atoms/ProgressBar";
import { Arrow } from "../../assets/Arrow";
import { useState } from "react";

export function PasswordForgottenCreateNewPassword(){
  const navigate = useNavigate();

  return (
    <div className="container grid grid-rows-[auto_auto_1fr_auto] h-screen ">
    <div className="grid grid-cols-[15px_1fr_15px] gap-4 place-items-center">
      <Link to={"/home"}>
        <Arrow />
      </Link>
      <ProgressBar />
      <div></div>
    </div>

    <div className="grid grid-rows-2 place-items-center">
      <p className="text-h3 text-center">Créer un nouveau mot de passe</p>
      <p className="text-subtitleSize text-center">Créer un nouveau mot de passe et ne le partager avec personne ! </p>
    </div>

    <div>
      <p>form...</p>
    </div>

    <button onClick={() => {
      navigate("/password_forgotten_code");
    }} className="w-full grid bg-primary rounded-full p-2 mt-3">
     Confirmer
    </button>
</div>
  )
}