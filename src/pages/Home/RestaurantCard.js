import React, {useContext} from 'react'
import {CardRestaurant, CardRestaurantImage, CardRestaurantData} from './HomeStyled'
import GlobalStateContext from '../../contexts/GlobalStateContext'

const RestaurantCard = (props) => {

    const { requests } = useContext(GlobalStateContext)

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