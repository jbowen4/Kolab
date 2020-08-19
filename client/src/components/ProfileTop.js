import React from 'react'
import PropTypes from 'prop-types'

const ProfileTop = ({ profile: {
    location,
    social,
    user: { name }
} }) => {
    return (
        <div>
            <img src="" alt="" />
            <h1>{name}</h1>
            <p>{location}</p>
            {social && social.twitter && (
                <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
                    <i class='fab fa-twitter fa-2x'></i>
                </a>
            )}
            {social && social.instagram && (
                <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
                    <i class='fab fa-instagram fa-2x'></i>
                </a>
            )}
            {social && social.linkedin && (
                <a href={social.linkedin} target='_blank' rel='noopener noreferrer'>
                    <i class='fab fa-linkedin fa-2x'></i>
                </a>
            )}
        </div>
    )
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileTop
