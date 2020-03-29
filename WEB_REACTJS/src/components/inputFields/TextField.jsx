import React, { useCallback } from 'react'
import PropTypes from 'prop-types';

import { emptyString, emptyFunc } from '../../commons/utils/emptyLiterals';

import './TextField.scss';

const TextField = props => {

    const { className, value, onChange, disabled } = props;

    const _onChange = useCallback(event => {
        const inputValue = event.target.value;
        onChange(inputValue);
    }, [onChange]);

    return (
        <div className={'input-container'}>
            <label>
                <input
                    disabled={disabled}
                    className={`textField ${className}`}
                    value={value}
                    onChange={event => _onChange(event)}
                    spellCheck={false}
                />
            </label>
        </div>
    )
}

TextField.defaultProps = {
    className: emptyString,
    value: emptyString,
    onChange: emptyFunc,
    disabled: false
}

TextField.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}

export default TextField;