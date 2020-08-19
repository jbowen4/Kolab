import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const Welcome = ({ isAuthenticated }) => {

    if (isAuthenticated) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <Fragment>
            <div className="home">
                <div className="hero">
                    <h1>Join a community of people like you!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi modi quaerat
                    dignissimos velit alias similique ipsum quam beatae itaque excepturi.</p>
                </div>
                <img className="hero-image" src="hero-image.svg" alt="Hero image" />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,250.7C384,256,480,288,576,266.7C672,245,768,171,864,160C960,149,1056,203,1152,218.7C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </Fragment>
    )
}

Welcome.propTypes = {
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Welcome);
