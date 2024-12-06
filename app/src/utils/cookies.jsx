export function setCookie(name, value, days){
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)};${expires};path=/`
}

export function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie); // Décoder pour éviter les problèmes avec les caractères spéciaux
  const cookies = decodedCookie.split(";"); // Diviser tous les cookies
  for (let cookie of cookies) {
    cookie = cookie.trim(); // Enlever les espaces inutiles
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(name.length + 1); // Retourne la valeur du cookie
    }
  }
  return null; // Retourne null si le cookie n'existe pas
}