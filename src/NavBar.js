import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

import { UserContext } from './UserContext';

/**
 * This example demonstrates the use of the Context hook
 */
export function NavBar () {
    const user = useContext(UserContext).user;

    return (
        <nav style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
            <Link to='/'><button>Home 🏠 </button></Link>
            <Link to='/about'><button>About ℹ </button></Link>
            <h1>Logged in as: {user}</h1>
        </nav>
    );
}