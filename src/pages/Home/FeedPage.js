import React, { useContext, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import GlobalStateContext from '../../contexts/GlobalStateContext'

const FeedPage = () => {
    const { states, requests } = useContext(GlobalStateContext)

    useEffect(() => {
        requests.listRestaurants()
    }, [])  
    

    return (
        <div>
        {states.restaurants.map((restaurants) => {
            return (
                <RestaurantCard
                    key={restaurants.id}
                    restaurants={restaurants}
                />
            )
        })}
        </div>
    )
}

export default FeedPage