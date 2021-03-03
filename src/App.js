import React from 'react';

import Router from './routes/Router'

//import ProfileUser from './pages/Profile/ProfileUser'
//import ProfileAddress from './pages/Profile/ProfileAddress'
//import LoginPage from './pages/Login/LoginPage'
import SingUpPage from './pages/SignUp/SignUpPage'

function App() {
  return (
    <div>

      
     
      <SingUpPage/>

      <Router />
      <ProfileAddress />

    </div>
  );
}

export default App;
