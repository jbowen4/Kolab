import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const Alert = ({ alerts }) => {     // destructure alerts from props (props.alerts)
    return (
        <React.Fragment>
            {alerts !== null && alerts.length > 0 &&  // if these 2 expressions are true...
                alerts.map(alert => (
                    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
                        {alert.msg}
                    </div>
                ))}
        </React.Fragment>
    )
}

Alert.propTypes = {
    alerts: PropTypes.array.isRequired    //PropTyles.{dataType}.isRequired
}

const mapStateToProps = state => ({   // use mapStateToProps to get access to the Redux Store state in the component
    alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
