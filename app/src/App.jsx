import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { ErrorProvider } from "./hooks/ErrorContext";
import { LoaderProvider } from "./hooks/LoaderContext";
import { useEffect, useState } from "react";
import { ScreenLoader } from "./components/ScreenLoader";
import { Connexion } from "./pages/Connexion";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { PasswordForgotten } from "./pages/passwordForgotten/PasswordForgotten";
import { PasswordForgottenCode } from "./pages/passwordForgotten/PasswordForgottenCode";
import { PasswordForgottenCreateNewPassword } from "./pages/passwordForgotten/PasswordForgottenCreateNewPassword";

let isConnected = false;

const routes = [
  { path: "/", component: <Home /> },
  { path: "/sign_in", component: isConnected ? <Home /> : <SignIn /> },
  { path: "/sign_up", component: isConnected ? <Home /> : <SignUp /> },
  { path: "/password_forgotten", component: isConnected ? <Home /> : <PasswordForgotten /> },
  { path: "/password_forgotten_code", component: isConnected ? <Home /> : <PasswordForgottenCode /> },
  { path: "/password_forgotten_create_new_password", component: isConnected ? <Home /> : <PasswordForgottenCreateNewPassword />},
  { path: "/home", component: isConnected ? <Home /> : <Connexion /> },
  { path: "/password_forgotten", component: isConnected ? <Home /> : <PasswordForgotten /> },
  
];

function App() {

  const [firstVisit, setFirstVisit] = useState(true);

  useEffect(() => {
    if(firstVisit){
      const timer = setTimeout(() => {
        setFirstVisit(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [firstVisit])

  return (
    <ErrorProvider>
      <LoaderProvider>
        {firstVisit ? <ScreenLoader /> : <></>}
        <Router>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        </Router>
      
      </LoaderProvider>
    </ErrorProvider>
  );
}

export default App;
