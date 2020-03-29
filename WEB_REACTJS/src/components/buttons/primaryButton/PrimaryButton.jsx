import React from 'react'
import PropTypes from 'prop-types';

import { emptyString } from '../../../commons/utils/emptyLiterals';

import './PrimaryButton.scss';

const FilledButton = props => {

    const { className, label, onClick, disabled } = props;

    return (
        <button disabled={disabled} className={`filledButton ${className}`} onClick={onClick}>{label}</button>
    );
}

FilledButton.defaultProps = {
    disabled: false,
    className: emptyString
};

FilledButton.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
}


export default FilledButton;