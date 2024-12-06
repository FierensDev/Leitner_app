export function validateEmail(email){
  return email.includes("@")
}

export function validateFirstName(firstname){
  return firstname.length > 3 && firstname.length < 15;
}

export function validateLastName(lastname){
  return lastname.length > 3 && lastname.length < 15;
}

export function validatePassword(password){
  return password.length >= 8 
}