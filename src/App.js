import React, { useState } from 'react';

import { UserProvider } from './UserContext';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Home } from './Home'
import { About } from './About'
import { NavBar } from './NavBar'

import './App.css';

/**
 * IMPORTANT: be sure to utilize the Link components
 * provided by react-router-dom for redirection.
 */
function App() {
  const [ user, setUser ] = useState('user123');

  return (
    <UserProvider value={ {user, setUser} }>
      <div className='App'>
        <Router>
          <NavBar />
          <Switch>
            <Route path='/about' component={About} />
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
