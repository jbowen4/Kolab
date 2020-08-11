import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Welcome = () => {
    return (
        <Fragment>
            <h1>Welcome to the site</h1>
            <Link to="/signin">Sign In</Link>
        </Fragment>
    )
}

export default Welcome
