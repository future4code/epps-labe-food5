import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';

export const CardRestaurant = styled.div`
    width: 20.5rem;
    height: 11.75rem;
    margin: 0 auto;
    border: 1px solid black;
    border-radius: 15px;
    margin-bottom: 10px;
`

export const CardRestaurantImage = styled.img`
    width: 20.5rem;
    height: 7.5rem;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px; 
`

export const CardRestaurantData = styled.div`

`

export const CardRestaurantDetail = styled.div`
    display: flex;
    position: relative;
    width: 20.5rem;
    height: 7rem;

    margin: 0 auto;
    border: 1px solid black;
    border-radius: 15px;
    
`

export const CardRestaurantDetailImage = styled.img`
    width: 6rem;
    height: 7rem;
`

export const CardRestaurantDetailData = styled.div`
    align-items: center;

`

export const ButtonAdd = styled.button`
    position: absolute;
    width: 5.625rem;
    height: 1.938rem;
    border-radius: 8px;
    margin-left: 142px;
    margin-bottom: 200px;  

   // margin-left: 238px;
    margin-top: 80px;
`

export const RestaurantDetailName = styled.p`

`

export const RestaurantDetailDescription = styled.p`
    max-height: 10%;
`

export const RestaurantDetailPrice = styled.p`

`
export const Button =styled.button`

border:none;
outline-style: none;
font-weight:bolder;
background-color:white;
margin: 6px;
text-align:center;


`
export const StyledPaper = styled(Paper)`
margin:20px;
`