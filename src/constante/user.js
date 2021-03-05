import axios from "axios"
import  { Base_Url } from "./url"
import { goToFeedPage, goToAdressPage, goToSignUpPage, goToProfilePage } from "../routes/Coordinator"


const axiosConfig = {
  headers: {
    auth: localStorage.getItem('token')
  }
}

export const login = (body, history) =>{
axios.post(`${Base_Url}/login`, body)
.then ((response)=>{
      localStorage.setItem('user', response.data.user)
      

      if(response.data.user.hasAddress){
        localStorage.setItem("token", response.data.token);
        goToFeedPage(history)

      }else{
         localStorage.setItem("token", response.data.token);
        goToAdressPage(history);
      }

      

    }).catch(error=>{
      alert ("Opa,algo deu errado!")
      console.log(error.message)
    })
  }

export const signUp = (body, history) => {
  axios
    .post(`${Base_Url}/signup`, body)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
      goToAdressPage(history);
    })
    .catch((error) => {
      alert("Opa,algo deu errado!");
      console.log(error.message);
    });
};

export const Address = (body, history) => {

  axios
  .put(`${Base_Url}/address`, body, axiosConfig)

  .then ((response)=>{
    localStorage.setItem('token', response.data.token)
    alert("Endereço cadastrado com sucesso!")
    goToFeedPage(history)

  })

  .catch((error)=>{
    alert("Opa,algo deu errado!")
    console.log(error)
  })


}

export const EditAddress = (body, history) => {

  axios
  .put(`${Base_Url}/address`, body, axiosConfig)

  .then ((response)=>{
    localStorage.setItem('token', response.data.token)
    alert("Endereço atualizado com sucesso!")
    goToProfilePage(history)

  })

  .catch((error)=>{
    alert("Opa,algo deu errado!")
    console.log(error)
  })


}


export const UpdateProfile = (body, history) => {

  axios
  .put(`${Base_Url}/profile`, body, axiosConfig)

  .then (()=>{
    alert('Perfil alterado com sucesso!')
    goToProfilePage(history)

  })
  .catch((error)=>{
    alert('Opa,algo deu errado!')
    console.log(error.message)
  })
}