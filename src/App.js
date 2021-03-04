import React from 'react';

import Router from './routes/Router'

//import ProfileUser from './pages/Profile/ProfileUser'
//import ProfileAddress from './pages/Profile/ProfileAddress'
import LoginPage from './pages/Login/LoginPage'
import SingUpPage from './pages/SignUp/SignUpPage'
//import ProfileAddress from './pages/Profile/ProfileAddress';
import ProgressPage from './pages/Login/ProgressPage'
import AddressPage from './pages/SignUp/AddressPage'


function App() {
  return (
    <div>
      
      <ProgressPage/>
      <LoginPage/>
      <SingUpPage/>
      <AddressPage/>
      
      
      
      </div>
  );
}

export default App;
