import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { baseUrl, token } from '../pages/Home/Constants/url'
import GlobalStateContext from '../contexts/GlobalStateContext'

const GlobalState = (props) => {
    const history = useHistory()

    const [form, setForm ] = useState({
        street: "", 
        number: "", 
        neighbourhood: "", 
        city: "", 
        state: "", 
        complement: ""
      })

    const [restaurants, setRestaurants] = useState([])
    const [restaurantsDetail, setRestaurantsDetail] = useState([])
                                        
    const newAddress = (event) =>{

        const { name, value } = event.target
        setForm({...form, [name]: value})
    }

    const CadAddress = () => {
        console.log(form);
        const elemento = document.getElementById("form-enderec")
        const valido = elemento.checkValidity()
        elemento.reportValidity()
        if(valido){
                axios.put(`https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/address`,form,{
                    headers:{
                               auth: localStorage.getItem('token')
                           }
               }).then((Response)=> {
                localStorage.setItem("token", Response.data.token)   
                alert("Enereço atualizado com exito")})
                .catch((error) => {
                    console.log(error)
                    alert("Erro na atualização! Favor tente novamente")
                })
                }
    }

    const listRestaurants = () => {

        axios.get(`${baseUrl}/restaurants`, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                setRestaurants(response.data.restaurants)
            }).catch((err) => {
                console.log(err.response)
            })
    }

    const restaurantDetails = (restaurantId) => {

        axios.get(`${baseUrl}/restaurants/${restaurantId}`, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                setRestaurantsDetail(response.data.restaurant.products)
                console.log(response.data.restaurant.products)
                history.push(`/restaurant/${restaurantId}`)
            }).catch((err) => {
                console.log(err.data)
            })
    }

    const states = { restaurants, restaurantsDetail, form } 
    const setters = { setRestaurants, setRestaurantsDetail, setForm }
    const requests = { listRestaurants, restaurantDetails, CadAddress, newAddress }

    const data = { states, setters, requests }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;
