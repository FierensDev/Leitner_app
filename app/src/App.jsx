import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { LoaderProvider } from "./hooks/LoaderContext";
import { useEffect, useState } from "react";
import { ScreenLoader } from "./components/ScreenLoader";
import { Connexion } from "./pages/Connexion";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { PasswordForgotten } from "./pages/passwordForgotten/PasswordForgotten";
import { PasswordForgottenCode } from "./pages/passwordForgotten/PasswordForgottenCode";
import { PasswordForgottenCreateNewPassword } from "./pages/passwordForgotten/PasswordForgottenCreateNewPassword";
import { NotificationProvider } from "./hooks/NotificationContext";
import { getCookie } from "./utils/cookies";
import { BadUrl } from "./pages/BadUrl";

console.log('call app.jsx')
let cookieJwt = getCookie("jwt");
let user = getCookie("user");

console.log(`deunsLog : `, user, cookieJwt);
  let isConnected = false;

if(user && cookieJwt){
  console.log(`deunsLog : true` )
  isConnected = true;
} else {
  console.log(`deunsLog : false` )
  isConnected = false;
  //destroy cookie
}

const routes = [
  { path: "/", component: isConnected ? <Home /> : <Connexion />, exact: true},
  { path: "/sign_in", component: isConnected ? <BadUrl message={"Pour accéder a la page d'inscription vous devez être deconnecter, vous allez etre rediriger vers la page d'accueil"} redirectTo={"/"} /> : <SignIn /> },
  { path: "/sign_up", component: isConnected ? <BadUrl message={"Pour accéder a la page de connexion vous devez être deconnecter, vous allez etre rediriger vers la page d'accueil"} redirectTo={"/"} />: <SignUp /> },
  { path: "/password_forgotten", component: isConnected ? <BadUrl message={"Pour accéder a la page de modification de mot de passe vous devez être deconnecter, vous allez etre rediriger vers la page d'accueil"} redirectTo={"/"} />: <PasswordForgotten /> },
  { path: "/password_forgotten_code", component: isConnected ? <BadUrl message={"Pour accéder a la page de modification de mot de passe vous devez être deconnecter, vous allez etre rediriger vers la page d'accueil"} redirectTo={"/"} /> : <PasswordForgottenCode /> },
  { path: "/password_forgotten_create_new_password", component: isConnected ? <BadUrl message={"Pour accéder a la page de modification de mot de passe vous devez être deconnecter, vous allez etre rediriger vers la page d'accueil"} redirectTo={"/"} /> : <PasswordForgottenCreateNewPassword />},
];

function App() {
  const [firstVisit, setFirstVisit] = useState(true);

  useEffect(() => {
    if(firstVisit){
      const timer = setTimeout(() => {
        setFirstVisit(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [firstVisit])

  return (
    <NotificationProvider>
      <LoaderProvider>
        {firstVisit ? <ScreenLoader /> : <></>}
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
            <Route path="*" element={<BadUrl message={"Cette url n'existe pas, vous allez être rediriger vers la page d'accueil"} redirectTo={"/"} />} />
          </Routes>
        </Router>
      
      </LoaderProvider>
    </NotificationProvider>
  );
}

export default App;
