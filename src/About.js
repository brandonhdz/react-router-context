import React from 'react';
import { UserContext } from './UserContext';

export class About extends React.Component {
    /**
     * This Class does not utilize the state to render
     * the value from the global User Context. Nor 
     * does it initialize the context within the class (see end of file)
     * @param {*} props 
     * @param {*} context 
     */
    constructor(props, context) {
        super(props, context);
        this.state = {

        }
    }

    componentDidMount () {
        let user = this.context.user;
        this.setState({
            user: user,
        });
    }

    render () {
        let user = this.context.user;
        // reference to the set the state in App
        // which percolates to children through the Provider
        let setUser = this.context.setUser;
        return (
            <div>
                <h1>
                    About
                </h1>
                <p>
                    Welcome {user}
                </p>
                <button onClick={ () => {setUser('newuser456')}}>
                    Change User
                </button>
            </div>
        );
    }
}

// the context is initialized here
About.contextType = UserContext;
export default {About};