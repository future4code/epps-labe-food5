import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseUrl, token } from './Consts/Consts'
import {CardRestaurantDetail,
   CardRestaurantDetailImage,
    CardRestaurantDetailData, 
    RestaurantDetailName,
    RestaurantDetailDescription, 
    RestaurantDetailPrice,
     ButtonAdd} from './HomeStyled'

const RestaurantPage = () => {

  const params = useParams()

  const [restaurantsDetail, setRestaurantsDetail] = useState([])

  useEffect(() => {
    restaurantDetails()
  }, [])

  const restaurantDetails = () => {
    console.log(params)

    axios.get(`${baseUrl}/restaurants/${params.restaurantId}`, {
      headers: {
        auth: token
      }
    })
      .then((response) => {
        setRestaurantsDetail(response.data.restaurant.products)
        console.log(response.data.restaurant.products)
      }).catch((err) => {
        console.log(err.data)
      })
  }

  return (
    <div>
      {restaurantsDetail.map(product => {
        return (
          <CardRestaurantDetail key={product.id}>
            <CardRestaurantDetailImage img src={product.photoUrl} />
            <CardRestaurantDetailData>
              <RestaurantDetailName>{product.name}</RestaurantDetailName>
              <RestaurantDetailDescription>{product.description}</RestaurantDetailDescription>
              <RestaurantDetailPrice>{product.price}</RestaurantDetailPrice>
              <ButtonAdd>adicionar</ButtonAdd>
            </CardRestaurantDetailData>
          </CardRestaurantDetail>
        )
      })}
    </div>
  )
}

export default RestaurantPage