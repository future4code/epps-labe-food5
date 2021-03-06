import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import SignUpPage from "../pages/SignUp/SignUpPage";
import FeedPage from "../pages/Home/FeedPage";
import RestaurantPage from "../pages/Home/RestaurantPage";
import ErrorPage from "../pages/Error/ErrorPage";

import ProfileAddress from "../pages/Profile/ProfileAddress";
import ProfileUser from "../pages/Profile/ProfileUser";
import ProfilePage from "../pages/Profile/ProfilePage";

import GlobalState from "../global/GlobalState";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <LoginPage />
        </Route>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact path={"/signUp"}>
          <SignUpPage />
        </Route>
        <Route exact path={"/perfil"}>
          <ProfilePage />
        </Route>
        <Route exact path={"/usuario"}>
          <ProfileUser />
        </Route>
        <Route exact path={"/endereco"}>
          <ProfileAddress />
        </Route>
        <Route exact path={"/"}>
          <FeedPage />
        </Route>
        <Route exact path={"/restaurant/:restaurantId"}>
          <RestaurantPage />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>

      <GlobalState>
        <Switch>
          <Route exact path={"/login"}>
            <LoginPage />
          </Route>
          <Route exact path={"/signUp"}>
            <SignUpPage />
          </Route>
          <Route exact path={"/"}>
            <FeedPage />
          </Route>
          <Route exact path={"/restaurant/:restaurantId"}>
            <RestaurantPage />
          </Route>
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
      </GlobalState>
    </BrowserRouter>
  );
};

export default Router;
