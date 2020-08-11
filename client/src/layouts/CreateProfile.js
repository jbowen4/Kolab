import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createProfile } from '../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        location: '',
        skills: '',
        bio: '',
        twitter: '',
        linkedin: '',
        instagram: ''
    });

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
        createProfile(formData, history)
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

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
}

export default connect(null, { createProfile })(withRouter(CreateProfile));
