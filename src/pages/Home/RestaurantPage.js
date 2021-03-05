
import React, { useContext, useEffect, useState } from 'react'
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

import GlobalStateContext from '../../contexts/GlobalStateContext'

const RestaurantPage = () => {
  const { states, requests } = useContext(GlobalStateContext)
  const params = useParams()

  const [restaurantsDetail, setRestaurantsDetail] = useState([])


  useEffect(() => {
    requests.restaurantDetails()
  }, [requests])

  const listOfRestaurants = 
  states.restaurants &&
  states.restaurants.map((restaurant) => {
    return (
      <div key={restaurant.id}>
        <img src={restaurant.logoUrl} alt={restaurant.name} />
        {restaurant.name}
      </div>
    )
  })

  useEffect(() => {
    requests.listRestaurants()
  }, [requests])

  const listDetailsOfRestaurants = 
  states.restaurantsDetail &&
  states.restaurantsDetail.map((product) => {
    return (
      <CardRestaurantDetail key={product.id}>
        <CardRestaurantDetailImage img src={product.photoUrl} />
        <CardRestaurantDetailData>
          <RestaurantDetailName>{product.name}</RestaurantDetailName>
          <RestaurantDetailDescription>{product.description}</RestaurantDetailDescription>
          <RestaurantDetailPrice>{product.price}</RestaurantDetailPrice>
        </CardRestaurantDetailData>
        <ButtonAdd>adicionar</ButtonAdd>
      </CardRestaurantDetail>
    )
  })

//   return (
//     <div>
//       {restaurantsDetail.map(product => {
//         return (
//           <CardRestaurantDetail key={product.id}>
//             <CardRestaurantDetailImage img src={product.photoUrl} />
//             <CardRestaurantDetailData>
//               <RestaurantDetailName>{product.name}</RestaurantDetailName>
//               <RestaurantDetailDescription>{product.description}</RestaurantDetailDescription>
//               <RestaurantDetailPrice>{product.price}</RestaurantDetailPrice>
//               <ButtonAdd>adicionar</ButtonAdd>
//             </CardRestaurantDetailData>
//           </CardRestaurantDetail>
//         )
//       })}
// =======
  useEffect(() => {
    requests.restaurantDetails()
  }, [requests])

  const listOfRestaurants = 
  states.restaurants &&
  states.restaurants.map((restaurant) => {
    return (
      <div key={restaurant.id}>
        <img src={restaurant.logoUrl} alt={restaurant.name} />
        {restaurant.name}
      </div>
    )
  })

  useEffect(() => {
    requests.listRestaurants()
  }, [requests])

  const listDetailsOfRestaurants = 
  states.restaurantsDetail &&
  states.restaurantsDetail.map((product) => {
    return (
      <CardRestaurantDetail key={product.id}>
        <CardRestaurantDetailImage img src={product.photoUrl} />
        <CardRestaurantDetailData>
          <RestaurantDetailName>{product.name}</RestaurantDetailName>
          <RestaurantDetailDescription>{product.description}</RestaurantDetailDescription>
          <RestaurantDetailPrice>{product.price}</RestaurantDetailPrice>
        </CardRestaurantDetailData>
        <ButtonAdd>adicionar</ButtonAdd>
      </CardRestaurantDetail>
    )
  })

  return (
    <div>
      {listOfRestaurants}
      {listDetailsOfRestaurants}
    </div>
  )
}

export default RestaurantPage