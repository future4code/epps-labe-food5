import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { baseUrl, token } from '../pages/Home/Constants/url'
import GlobalStateContext from '../contexts/GlobalStateContext'

const GlobalState = (props) => {
    const history = useHistory()

    const [restaurants, setRestaurants] = useState([])
    const [restaurantsDetail, setRestaurantsDetail] = useState([])

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
                setRestaurantsDetail(response.data.restaurant)
                console.log(response.data.restaurant)
                history.push(`/restaurant/${restaurantId}`)
            }).catch((err) => {
                console.log(err.data)
            })
    }

    const states = { restaurants, restaurantsDetail }
    const setters = { setRestaurants, setRestaurantsDetail }
    const requests = { listRestaurants, restaurantDetails }

    const data = { states, setters, requests }

    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState;
