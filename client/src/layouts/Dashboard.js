import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../components/Spinner';
import { getCurrentProfile, deleteAccount } from '../actions/profile';
import DashboardActions from '../components/DashboardActions';

const Dashboard = ({
    getCurrentProfile,
    deleteAccount,
    auth: { user },
    profile: { profile, loading }
}) => {

    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return (
        loading && profile === null ? <Spinner /> : <Fragment>
            <h1>Dashboard</h1>
            <p>Welcome, {user && user.name}</p>
            {profile !== null ? (
                <Fragment>
                    <DashboardActions />

                    <div>
                        <button onClick={() => deleteAccount()}>Delete my account</button>
                    </div>
                </Fragment>
            ) : (
                    <Fragment>
                        <p>You have not created a profile, please add some info</p>
                        <Link to='/create-profile'>Create Profile</Link>
                    </Fragment>
                )}
        </Fragment>
    )
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
