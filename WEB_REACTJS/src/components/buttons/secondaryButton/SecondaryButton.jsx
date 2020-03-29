import React from 'react'
import PropTypes from 'prop-types';

import useWhyDidYouUpdate from '../../../commons/hooks/useWhyDidYouUpdate';
import { emptyString } from '../../../commons/utils/emptyLiterals';

import './SecondaryButton.scss';

const BorderButton = props => {
    useWhyDidYouUpdate('SecondaryButton Component ', props);

    const { className, label, onClick, disabled } = props;

    return (
        <button
            disabled={disabled}
            className={`borderButton ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

BorderButton.defaultProps = {
    disabled: false,
    className: emptyString
};

BorderButton.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
}

export default BorderButton;