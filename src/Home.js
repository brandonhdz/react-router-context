import React from 'react';
import { UserContext } from './UserContext';

export class Home extends React.Component {
    /**
     * Unlike About, Home binds the UserContext within the class
     * Also note that this example shows the use of the class state
     * to update the component as opposed to directly passing it from the Context
     * This method proves usefull when needing to share the values amoung various
     * sub components as demonstrated below
     */
    static contextType = UserContext;
    constructor(props, context) {
        super(props, context);
        this.state = {
            user: context.user !== undefined ? context.user : '',
            setUser: context.setUser !== undefined ? context.setUser : () => null,
            newUser: 'admin123',
            handleClick: this.handleClick.bind(this),
        }
    }

    handleClick () {
        this.state.setUser(this.state.newUser);
        this.setState({user: this.state.newUser})
    }

    render () {
        return (
            <div>
                <h1>
                    Home
                </h1>
                <h2> User Feed For: {this.state.user}</h2>
                <p>
                    Welcome {this.state.user}
                </p>
                <button onClick={this.state.handleClick}>
                    Admin Login
                </button>
            </div>
        );
    }
}