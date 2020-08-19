import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <ul>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><a class="nav-button" onClick={logout} href="#!">Logout</a></li>
        </ul>
    );

    const guestLinks = (
        <Link class="nav-button" to="/signin">Join</Link>
    );

    return (
        <nav class="navbar">
            <Link class="logo" to="/">
                <i class="fas fa-paper-plane"></i><h1>Kolab</h1>
            </Link>
            {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
        </nav>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
