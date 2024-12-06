import { Link, useNavigate } from "react-router-dom";
import { Arrow } from "../assets/Arrow";
import { IconGoogle } from "../assets/IconGoogle";
import { ProgressBar } from "../components/atoms/ProgressBar";
import { InputText } from "../components/atoms/form/InputText";
import { useNotification } from "../hooks/NotificationContext";
import { useState } from "react";
import { validateEmail, validateFirstName, validateLastName, validatePassword } from "../utils/form";
import { getCookie, setCookie } from "../utils/cookies";

export function SignIn(){

  const {notification, setNotification} = useNotification();
  const navigate = useNavigate();

  const [formError, setFormError] = useState({
    email: false, 
    password: false
  })

  function signIn(data){
    fetch("http://localhost:8080/user/signin", {
      method: "POST",
      headers:{
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(data)
    })
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data);
      setNotification({
        code: data.code,
        message: data.message
      })
      if(data.code === 400){
        setFormError({
          email: "Vérifier votre email", 
          password: "Vérifier votre mot de passe"
        })
      }

      if(data.code === 200){
        setCookie("jwt", data.data.token, 1);
        setCookie("user", JSON.stringify(data.data.user), 1);

        setNotification({
          code: data.code,
          message: "Bienvenue " + data.data.user.firstname
        })

        
      }
    })
    .catch(err => {
      console.error("Error:", err);
    });
  }
 
  function submitForm(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    let errors = {};

    if(!validateEmail(data.email)){
      errors.email = "Veuillez indiquer une addresse mail";
    }else {
      errors.email = false;
    }

    if(!validatePassword(data.password)){
      errors.password = "Mot de passe incorrect";
    } else {
      errors.password = false;
    }
    
    setFormError((prevValues) => ({...prevValues, ...errors}));
    if(Object.values(errors).every((value) => value === false)){
      signIn({
        email:data.email,
        password: data.password
      });
      return;
    }
  }

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
        <form onSubmit={submitForm} className="grid gap-2">
        <InputText type="text" labelValue="Email" id="email" placeholder="sebastian@leitner.com" error={formError.email}/>
        <InputText type="password" labelValue="Mot de passe" id="password" placeholder="********" error={formError.password}/>
        
        {
          Object.entries(formError).map(([key, value]) => {
            if(value){
              return (
                <div key={key} className="border border-red-400 rounded-lg bg-[#bd141325] p-4">
                  <p  className="">- {value}</p>
                </div>
              )
            }
            return null;
          })
        }

        <div className="py-4 grid place-items-center">
          <a href="" className="w-full bg-subtitle rounded-full grid grid-cols-[23px_1fr] gap-2 place-items-center p-2">
            <IconGoogle />
            <p>Se connecter avec google</p>
          </a>
          <button className="w-full grid bg-primary rounded-full p-2 mt-3">Se connecter</button>
          <Link to={"/password_forgotten"} className="py-4">
            mot de passe oublié
          </Link>
        </div>
        </form>
      </div>
  </div>
  )
}