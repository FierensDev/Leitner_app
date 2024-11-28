import {Link} from "react-router-dom";
import {LinkTo} from "../components/atoms/LinkTo";

export function Connexion(){
  return(
    <div className="h-screen bg-blue-300 grid grid-rows-[1fr_auto] gap-4 p-4">
      <div className="bg-red-200">
        <div className="grid place-items-center">
          <div className="h-[160px] w-[160px] bg-primary rounded-xl"></div>
          <div className="h-[160px] w-[160px] bg-secondary rounded-xl"></div>
          <p className="text-h2">Créer vos cartes</p>
        </div>

        <div>
          <p className="text-h2 text-center">...</p>
        </div>
      </div>
      <div className="bg-red-600 grid grid-rows-2 gap-4">
        <LinkTo to="/sign_in" style="primary" content="Se connecter"/>
        <LinkTo to="/sign_up" style="" content="S'inscrire"/>
      </div>
    </div>
  )
}