import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import LinearProgress from '@material-ui/core/LinearProgress'
import axios from 'axios'

export default function FeedPage() {

    const [restaurants, setRestaurants] = useState([])
    const [loading, setLoading] = useState(false)

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"


    useEffect(() => {
        listRestaurants()
    }, [])

    const listRestaurants = () => {
        setLoading(true)

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImliZHVaSW9Ta280U1pmaXRUTU5zIiwibmFtZSI6IkZyZWUgV2lsbGlhbSIsImVtYWlsIjoiZnJlZS53aWxsaWFtQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTIzLjQ1Ni43ODktMDAiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiQXYuIEhvcsOhY2lvIExhZmVyLCA1MDAsIFZpdHJhIFRvd2VyIC0gSXRhaW0gQmliaSIsImlhdCI6MTYxNDcwODE5Nn0.ymg1ECNZhbOm_nYCETO3jOOfbkJ_sWV4sJ3b0x9VRoU"

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
                    restaurants={restaurants}
                    />
                )
            })}
        </div>
    );
}