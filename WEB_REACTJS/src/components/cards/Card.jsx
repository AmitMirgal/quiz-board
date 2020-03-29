import React from 'react';
import PropTypes from 'prop-types';

import { emptyString, emptyObject, emptyFunc } from '../../commons/utils/emptyLiterals';

import './Card.scss';

const Card = props => {

    const { className, label, removeEvent } = props;

    const _removeEvent = event => removeEvent(label.index, event.target.innerHTML)

    return (
        <div
            tabIndex={0}
            className={`card ${className}`}
            onClick={event => _removeEvent(event)}
            onKeyPress={event => _removeEvent(event)}
        >
            {label.value}
        </div>
    )
}

Card.defaultProps = {
    className: emptyString,
    label: emptyObject,
    removeEvent: emptyFunc
}

Card.propTypes = {
    className: PropTypes.string,
    label: PropTypes.shape({
        index: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
    }),
    removeEvent: PropTypes.func
}

export default Card;