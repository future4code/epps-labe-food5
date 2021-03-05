import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import {baseUrl, token} from './Consts/Consts'
import RestaurantCard from './RestaurantCard'
import LinearProgress from '@material-ui/core/LinearProgress'
import axios from 'axios'

export default function FeedPage() {
    const history = useHistory()

    const [restaurants, setRestaurants] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        listRestaurants()
    }, [])

    const listRestaurants = () => {
        setLoading(true)

        axios.get(`${baseUrl}/restaurants`, {
            headers: {
                auth: token
            }
        })
            .then((response) => {
                setRestaurants(response.data.restaurants)
                setLoading(false)
            }).catch((err) => {
                console.log(err.response)
            })
    }

    return (
        <div>
            {loading && <LinearProgress />}
            {restaurants.map(restaurants => {
                return (
                    <RestaurantCard
                    key={restaurants.id}
                    restaurantId={restaurants.id}
                    restaurants={restaurants}
                    />
                )
            })}
        </div>
    );
}