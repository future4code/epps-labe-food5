import React, { useState, useEffect, useContext } from 'react'
import RestaurantCard from './RestaurantCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import GlobalStateContext from '../../contexts/GlobalStateContext'
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import {Button, StyledPaper} from './HomeStyled'



const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 300,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const FeedPage = () => {
    const { states, setters, requests } = useContext(GlobalStateContext)
    const classes = useStyles();

    const [search, setSearch] = useState('')
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    

    useProtectedPage()

    useEffect(() => {
        requests.listRestaurants()
    }, [])

    useEffect(() => {
        setters.setFilteredRestaurants(states.restaurants.filter((restaurants) => {
            return restaurants.name.toLowerCase().includes(search.toLowerCase())
        }))
    }, [search, states.restaurants])

    useEffect(() => {
       setters.setFilteredRestaurants(states.restaurants.filter((restaurants) => {
            return restaurants.category.toLowerCase().includes(states.search.toLowerCase())
        }))
    }, [search, states.restaurants])

    const handlebtns = (e) => {
        setters.setFilteredRestaurants(states.restaurants.filter((restaurant) => {
            return restaurant.category === e.target.value
        }))
    }
    return (
        <div>
            <StyledPaper component="form" className={classes.root}>
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <SearchIcon />
                </IconButton>

                <InputBase
                    className={classes.input}
                    placeholder="Restaurante ou Categoria "
                    name='name'
                    onChange={e => setSearch(e.target.value)}

                />


            </StyledPaper>
            <Button onClick={handlebtns} value={'Árabe'}>Árabe</Button>
            <Button onClick={handlebtns} value={'Asiática'}>Asiática</Button>
            <Button onClick={handlebtns} value={'Hamburguer'}>Hamburguer</Button>
            <Button onClick={handlebtns} value={'Italiana'}>Italiana</Button>
            <Button onClick={handlebtns} value={'Sorvetes'}> Sorvetes</Button>
            <Button onClick={handlebtns} value={'Carnes'}>Carnes</Button>
            <Button onClick={handlebtns} value={'Baiana'}>Baiana</Button>
            <Button onClick={handlebtns} value={'Petiscos'}>Petiscos</Button>
            <Button onClick={handlebtns} value={'Mexicana'}>Mexicana</Button>

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