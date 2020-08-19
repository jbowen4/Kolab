import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import Register from '../components/Register';
import Login from '../components/Login';
import Alert from '../components/Alert';

const SignForm = () => {

    const [rightActive, setRightActive] = useState(false);

    const onSwitch = b => {
        setRightActive(b);
    }

    return (
        <Fragment>
            <Link to="/">Back to Welcome</Link>
            <Alert />
            <div class={`container ${rightActive ? 'right-panel-active' : ''}`} id="container">
                <Register />
                <Login />
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Have an account?</h1>
                            <p>See what's going on in the community by logging in</p>
                            <button class="ghost" id="signIn" onClick={() => onSwitch(false)}>Sign In</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>New here?</h1>
                            <p>Join the community by creating an account</p>
                            <button class="ghost" id="signUp" onClick={() => onSwitch(true)}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SignForm;