import { Link } from "react-router-dom";
import { Arrow } from "../assets/Arrow";
import { IconGoogle } from "../assets/IconGoogle";
import { ProgressBar } from "../components/atoms/ProgressBar";
import { useState } from "react";
import { InputText } from "../components/atoms/form/InputText";
import { useError } from "../hooks/ErrorContext";

export function SignUp(){
  const {error, setError} = useError();

  const [formError, setFormError] = useState({
    lastname: false,
    firstname: false,
    email: false, 
    password: false
  })

  function validateEmail(email){
    return email.includes("@")
  }

  function validateFirstName(firstname){
    return firstname.length > 3 && firstname.length < 15;
  }

  function validateLastName(lastname){
    return lastname.length > 3 && lastname.length < 15;
  }

  function createAccount(data){
    fetch("http://localhost:8080/user/create", {
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
      if(data.code > 399){
        setError(data.details)
      } 
      if(data.code === 201){
        
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
    
    if(data.password !== data.check_password){
      errors.password = "Les mots de passe doivent être identique";
    } else {
      errors.password = false;
    }
    if(!validateEmail(data.email)){
      errors.email = "Veuillez indiquer un email";
    }else {
      errors.email = false;
    }
    
    if(!validateFirstName(data.firstname)){
      errors.firstname = "Le prénom doit faire minimum 3 caracteres";
    }else {
      errors.firstname = false;
    }

    if(!validateLastName(data.lastname)){
      errors.lastname = "Le nom de famille doit faire minimum 3 caracteres";
    }else {
      errors.lastname = false;
    }

    setFormError((prevValues) => ({...prevValues, ...errors}));
    
    if(Object.values(errors).every((value) => value === false)){
      console.log('ca ssenvoie')
      createAccount({
        lastname:data.lastname,
        firstname:data.firstname,
        email:data.email,
        password: data.password
      });
      return;
    }
    console.log('ca ssenvoie pas')
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

            <InputText type="text" labelValue="Nom" id="lastname" placeholder="Leitner" error={formError.lastname}/>
            <InputText type="text" labelValue="Prenom" id="firstname" placeholder="Sebastian" error={formError.firstname}/>
            <InputText type="text" labelValue="Email" id="email" placeholder="sebastian@leitner.com" error={formError.email}/>
            <InputText type="password" labelValue="Mot de passe" id="password" placeholder="********" error={formError.password}/>
            <InputText type="password" labelValue="Confirmation du mot de passe" id="check_password" placeholder="********" error={formError.password}/>
            
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
            <div className="py-4" >
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