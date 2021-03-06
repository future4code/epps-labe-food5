<<<<<<< HEAD

<<<<<<< HEAD

// import { useHistory } from 'react-router-dom'
// import {goToRestaurant} from '../../routes/Coordinator'

=======
>>>>>>> e45fccdfbd661866f73636570f977d41aea3bd10
=======
>>>>>>> 4bb70e1d0f38c6c5e22e6ab5aa099caeec092c30
import React, {useContext} from 'react'
import {CardRestaurant, CardRestaurantImage, CardRestaurantData} from './HomeStyled'
import useProtectedPage from '../../hooks/useProtectedPage'
import GlobalStateContext from '../../contexts/GlobalStateContext'

const RestaurantCard = (props) => {
    useProtectedPage()

    const { requests } = useContext(GlobalStateContext)

<<<<<<< HEAD
//     return (
//         <CardRestaurant onClick={() => goToRestaurant(history, props.restaurantId)}>


=======
>>>>>>> e45fccdfbd661866f73636570f977d41aea3bd10
    return (
        <CardRestaurant onClick={() => requests.restaurantDetails(props.restaurants.id)}>
      
            <CardRestaurantImage
            src={props.restaurants.logoUrl}
            alt={props.restaurants.name}
            />

            <CardRestaurantData>
            {props.restaurants.name}
            50-{props.restaurants.deliveryTime} min
            Frete R${props.restaurants.shipping},00
            </CardRestaurantData>
        </CardRestaurant>
    )
}

export default RestaurantCard