import { Link } from "react-router-dom";
import { Arrow } from "../assets/Arrow";
import { IconGoogle } from "../assets/IconGoogle";
import { LinkTo } from "../components/atoms/LinkTo";
import { ProgressBar } from "../components/atoms/ProgressBar";

export function SignIn(){
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
        <p className="text-h3">Se connecter</p>
        <p className="text-subtitleSize text-center">Comme on se retrouve !</p>
      </div>

      <div>
        <p>form...</p>
      </div>

      <a href="" className="bg-subtitle rounded-full grid grid-cols-[23px_1fr] gap-2 place-items-center p-2">
        <IconGoogle />
        <p>Se connecter avec google</p>
      </a>

      <button className="w-full grid bg-primary rounded-full p-2 mt-3">
        Valider
      </button>
      <Link to={"/password_forgotten"} className="text-center p-2">
        mot de passe oublié
      </Link>
  </div>
  )
}