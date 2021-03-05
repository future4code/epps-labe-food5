import React from 'react';

import Router from './routes/Router'

//import ProfileUser from './pages/Profile/ProfileUser'
import ProfileAddress from './pages/Profile/ProfileAddress'

function App() {
  return (
    <div>

      <Router />
      <ProfileAddress />
    </div>
  );
}

export default App;
