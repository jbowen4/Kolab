import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProfileItem = ({
    profile: {
        user: { _id, name },
        location,
        skills
    }
}) => {
    return (
        <div>
            <Link to={`/profile/${_id}`}>
                <h2>{name}</h2>
                <p>{location && <span>{location}</span>}</p>
                <ul>
                    {skills.slice(0, 4).map((skill, index) => (
                        <li key={index}>
                            {skill}
                        </li>
                    ))}
                </ul>
            </Link>
        </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileItem;
