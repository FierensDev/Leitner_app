import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom";

export function BadUrl({message, redirectTo}){
  const [time, setTime] = useState(5); // Utilisation de useState pour gérer le temps
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          setRedirect(true); // Une fois le timer à 0, on redirige
          clearInterval(timer); // On arrête le timer
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000); // On met à jour le temps toutes les secondes

    // Nettoyage du timer quand le composant est démonté
    return () => clearInterval(timer);
  }, []);

  // Si le temps est écoulé, on redirige
  if (redirect) {
    return <Navigate to={redirectTo} />;
  }
  return (
    <div>
      Redirection dans {time} secondes...
      <br />
      {message}
    </div>
  )
}