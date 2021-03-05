import axios from "axios";
 import {Base_Url}  from '../constante/url';
 import {goToFeedPage, goToProfilePage} from '../routes/Coordinator';

export const login = (body, history) => {
    axios.post(`${Base_Url}/futureEatsA/login`, body)
      .then((response) => {
        console.log(response)

        goToFeedPage(history)

        })
      .catch((error) => {
        console.log(error)
    alert("Usuário não encontrado")
      })
  }

  export const signup = (body, history) => {
    axios.post(`${Base_Url}/futureEatsA/signup`, body)
      .then((response) => {
        console.log(response)
        goToProfilePage(history)
        })
      .catch((error) => {
        console.log(error)
    alert("Email ou CPF já cadastrado")
      })
  }