import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { goToLogin, goToFeed } from '../../routes/Coordinator'
import axios from 'axios'

const RestaurantPage = () => {

    const [restaurantsDetail, setRestaurantsDetail] = useState([])

    const history = useHistory()
    const params = useParams()

    const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/fourFoodB"

    // useEffect(() => {

    //     const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImliZHVaSW9Ta280U1pmaXRUTU5zIiwibmFtZSI6IkZyZWUgV2lsbGlhbSIsImVtYWlsIjoiZnJlZS53aWxsaWFtQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTIzLjQ1Ni43ODktMDAiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiQXYuIEhvcsOhY2lvIExhZmVyLCA1MDAsIFZpdHJhIFRvd2VyIC0gSXRhaW0gQmliaSIsImlhdCI6MTYxNDcwODE5Nn0.ymg1ECNZhbOm_nYCETO3jOOfbkJ_sWV4sJ3b0x9VRoU"

    //     if ((token) === null) {
    //       goToLogin(history)
    //     } else if (!params.restaurantID) {
    //       goToFeed(history)
    //     }
    //   }, [])
    
      useEffect(() => {
        restaurantDetails()
      }, [])
    
      const restaurantDetails = () => {

        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImliZHVaSW9Ta280U1pmaXRUTU5zIiwibmFtZSI6IkZyZWUgV2lsbGlhbSIsImVtYWlsIjoiZnJlZS53aWxsaWFtQGZ1dHVyZTQuY29tIiwiY3BmIjoiMTIzLjQ1Ni43ODktMDAiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiQXYuIEhvcsOhY2lvIExhZmVyLCA1MDAsIFZpdHJhIFRvd2VyIC0gSXRhaW0gQmliaSIsImlhdCI6MTYxNDcwODE5Nn0.ymg1ECNZhbOm_nYCETO3jOOfbkJ_sWV4sJ3b0x9VRoU"

        axios.get(`${baseUrl}/restaurants/1`, {
          headers: {
            auth: token
          }
        })
          .then((response) => {
            setRestaurantsDetail(response.data.restaurant.products)
            console.log(response.data.restaurant.products)
          }).catch ((err) => {
              console.log(err.data)
          })
      }

    return (
        <div>
            {restaurantsDetail.map(product => {
          return(
            <div>
            <img src={product.photoUrl}/>
            <p>{product.name}</p>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            </div>
          )
        })} 
        </div>
    )
}

export default RestaurantPage