import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/Login/LoginPage'
import SignUpPage from '../pages/SignUp/SignUpPage'
import FeedPage from '../pages/Home/FeedPage'
import RestaurantPage from '../pages/Home/RestaurantPage'
import ErrorPage from '../pages/Error/ErrorPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/login'}>
                    <LoginPage/>
                </Route>
                <Route exact path={'/signUp'}>
                    <SignUpPage />
                </Route>
                <Route exact path={'/'}>
                    <FeedPage />
                </Route>
                <Route exact path={'/restaurant/:restaurantId'}>
                    <RestaurantPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router