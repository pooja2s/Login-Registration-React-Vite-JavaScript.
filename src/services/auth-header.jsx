import axios from "axios";

export  function authHeader() {
  const token = localStorage.getItem("token");
  let tokenStr = null;
  if (token)
  tokenStr = token;

  if (tokenStr) {
    return { 'auth-token':  tokenStr }; // for Spring Boot back-end
    // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
  } else {
    return { 'auth-token' : '' }; // for Spring Boot back-end
    // return { 'x-access-token': null }; // for Node Express back-end
  }
}