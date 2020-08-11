import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../actions/profile';

const EditProfile = ({
    profile: { profile, loading },
    createProfile,
    getCurrentProfile,
    history
}) => {
    const [formData, setFormData] = useState({
        location: '',
        skills: '',
        bio: '',
        twitter: '',
        linkedin: '',
        instagram: ''
    });

    useEffect(() => {
        getCurrentProfile();

        setFormData({
            location: loading || !profile.location ? '' : profile.location,
            skills: loading || !profile.skills ? '' : profile.skills,
            bio: loading || !profile.bio ? '' : profile.bio,
            twitter: loading || !profile.social ? '' : profile.social.twitter,
            linkedin: loading || !profile.linkedin ? '' : profile.social.linkedin,
            instagram: loading || !profile.social ? '' : profile.social.instagram
        });
    }, [loading]);

    const {
        location,
        skills,
        bio,
        twitter,
        linkedin,
        instagram,
    } = formData;

    // Make sure name matches whatever it's called in the state
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history, true)
    }

    return (
        <React.Fragment>
            <form onSubmit={e => onSubmit(e)}>
                <input
                    type="text"
                    name='location'
                    value={location}
                    onChange={e => onChange(e)}
                />
                <input
                    type="text"
                    name='skills'
                    value={skills}
                    onChange={e => onChange(e)}
                />
                <input
                    type="text"
                    name='bio'
                    value={bio}
                    onChange={e => onChange(e)}
                />
                <input
                    type="text"
                    name='twitter'
                    value={twitter}
                    onChange={e => onChange(e)}
                />
                <input
                    type="text"
                    name='linkedin'
                    value={linkedin}
                    onChange={e => onChange(e)}
                />
                <input
                    type="text"
                    name='instagram'
                    value={instagram}
                    onChange={e => onChange(e)}
                />
                <input type="submit"></input>
                <Link to="/dashboard">Back Home</Link>
            </form>

        </React.Fragment>
    )
}

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(
    mapStateToProps,
    { createProfile, getCurrentProfile }
)(withRouter(EditProfile));
