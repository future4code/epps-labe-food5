import React, { useEffect, useContext } from 'react'
import RestaurantCard from './RestaurantCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import GlobalStateContext from '../../contexts/GlobalStateContext'

const FeedPage = () => {
    const { states, requests } = useContext(GlobalStateContext)

    useProtectedPage()

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