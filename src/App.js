import React from 'react';
import Router from './routes/Router'
import GlobalState from './global/GlobalState'

function App() {
  return (
    <div>
      <Router />
    </div>
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
