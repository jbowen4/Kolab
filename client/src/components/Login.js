import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        console.log('login');
    }

    return (
        <Fragment>
            <h1>Sign In</h1>
            <p>Sign Into Your Account</p>
            <form>
                <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    onChange={e => onChange(e)}
                    value={email}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    minLength="6"
                    onChange={e => onChange(e)}
                    value={password}
                />
                <input type="submit" value="Login" />
            </form>
            <p>
                Don't have an account? <button>Sign Up</button>
            </p>
        </Fragment>
    )
}

export default Login