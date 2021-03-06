import React, { useContext, useEffect } from 'react'
import {
  CardRestaurantDetail,
  CardRestaurantImage,
  CardRestaurantDetailImage,
  CardRestaurantDetailData,
  RestaurantDetailName,
  RestaurantDetailDescription,
  RestaurantDetailPrice,
  ButtonAdd
} from './HomeStyled'
import useProtectedPage from '../../hooks/useProtectedPage'
import GlobalStateContext from '../../contexts/GlobalStateContext'

const RestaurantPage = () => {
  const { states, requests } = useContext(GlobalStateContext)

  useProtectedPage()

  useEffect(() => {
    requests.restaurantDetails()
  }, [requests])


  const listDetailsOfRestaurants =
    states.restaurantsDetail &&
    states.restaurantsDetail.products.map((product) => {
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
      <CardRestaurantImage src={states.restaurantsDetail.logoUrl} />
      <p>{states.restaurantsDetail.name}</p>
      <p>{states.restaurantsDetail.category}</p>
      <p>{states.restaurantsDetail.deliveryTime}
      Frete R${states.restaurantsDetail.shipping},00</p>
      <p>{states.restaurantsDetail.address}</p>

      {listDetailsOfRestaurants}
    </div>
  )
}

export default RestaurantPage