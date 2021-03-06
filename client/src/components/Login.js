import React, { useState, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

const Login = ({ login, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        console.log('here');
        login(email, password);
    }

    // Redirect if logged in
    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <div class="form-container sign-in-container">
            <form onSubmit={e => onSubmit(e)}>
                <h1>Sign In</h1>
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
                <button type="submit" class="sign-button">Sign In</button>
            </form>
        </div>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
