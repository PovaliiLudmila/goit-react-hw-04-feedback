import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({message}) => {
    
    return <p className={css.notification_text}>
        {message}
    </p>
    };

Notification.propTypes = {
    message: PropTypes.string.isRequired
}