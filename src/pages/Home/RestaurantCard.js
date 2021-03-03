import React from 'react'
import { useHistory } from 'react-router-dom'
import {goToRestaurant} from '../../routes/Coordinator'
import {CardRestaurant, CardRestaurantImage, CardRestaurantData} from './HomeStyled'

const RestaurantCard = (props) => {
    const history = useHistory()
    console.log(props.restaurantId)

    return (
        <CardRestaurant onClick={() => goToRestaurant(history, props.restaurantId)}>
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