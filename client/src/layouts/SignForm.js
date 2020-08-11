import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Register from '../components/Register';
import Login from '../components/Login';
import Alert from '../components/Alert';

const SignForm = () => {
    return (
        <Fragment>
            <Alert />
            <Link to="/">Back to Welcome</Link>
            <Register />
            <Login />
        </Fragment>
    )
}

export default SignForm;