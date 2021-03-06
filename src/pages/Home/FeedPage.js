<<<<<<< HEAD

//import React, { useContext, useEffect } from 'react'

import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import {baseUrl, token} from './Consts/Consts'

=======
import React, { useEffect, useContext} from 'react'
>>>>>>> 4bb70e1d0f38c6c5e22e6ab5aa099caeec092c30
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

<<<<<<< HEAD
// import React, { useContext, useEffect } from 'react'
// import RestaurantCard from './RestaurantCard'
// import GlobalStateContext from '../../contexts/GlobalStateContext'

// const FeedPage = () => {
//     const { states, requests } = useContext(GlobalStateContext)

//     useEffect(() => {
//         requests.listRestaurants()
//     }, [])  
    

//     return (
//         <div>
//         {states.restaurants.map((restaurants) => {
//             return (
//                 <RestaurantCard
//                     key={restaurants.id}
//                     restaurantId={restaurants.id}
//                     restaurants={restaurants}
//                 />
//             )
//         })}
//         </div>
//     )
// }
=======
>>>>>>> 4bb70e1d0f38c6c5e22e6ab5aa099caeec092c30

