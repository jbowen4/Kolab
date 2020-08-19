import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({ profile: {
    bio,
    skills,
    user: { name }
} }) => {
    return (
        <Fragment>
            <div>
                {bio && (
                    <Fragment>
                        <p>{bio}</p>
                    </Fragment>
                )}
            </div>
            <div>
                {skills.map(((skill, index) => (
                    <div key={index}>
                        <i className="fas- fa-check" />{skill}
                    </div>
                )))}
            </div>
        </Fragment>
    )
}

ProfileAbout.propTypes = {

}

export default ProfileAbout
