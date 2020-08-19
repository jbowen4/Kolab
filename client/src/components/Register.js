import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';

import PropTypes from 'prop-types'

const Register = (props) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();

        props.register({ name, email, password });

    }

    if (props.isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div class="form-container sign-up-container">
            <form onSubmit={e => onSubmit(e)}>
                <h1>Create Account</h1>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={e => onChange(e)}
                    value={name}
                    required
                />
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
                <button type="submit" class="sign-button">Sign Up</button>
            </form>
        </div>
    )
}

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    { setAlert, register }
)(Register);
