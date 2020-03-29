import React from 'react';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import PrimaryButton from '../buttons/primaryButton/PrimaryButton';
import { translateKey } from '../../commons/utils/translator';
import { ReactComponent as WarningIcon } from '../../commons/media/warning.svg';
import { emptyString, emptyFunc } from '../../commons/utils/emptyLiterals';

import './Warning.scss';

const Warning = props => {

    const intl = useIntl();
    const { messageKey, setPanelState, panelState, widthSize, heightSize } = props;

    const closePanel = () => {
        setPanelState(panelState)
    }

    return (
        <>
            <h2>{translateKey(intl, 'quizPanel')}</h2>

            <div className={'warningPanel'}>
                <WarningIcon className={'icon'} width={widthSize} height={heightSize} />
                <span>
                    {translateKey(intl, messageKey)}
                </span>

                <div className={'warningController'}>
                    <PrimaryButton
                        className={'quizSubmitButton'}
                        label={translateKey(intl, 'close')}
                        onClick={closePanel}
                    />
                </div>
            </div>
        </>
    )
}

Warning.defaultProps = {
    widthSize: '50px',
    heightSize: '50px',
    panelState: emptyString,
    setPanelState: emptyFunc
}

Warning.propTypes = {
    widthSize: PropTypes.string,
    heightSize: PropTypes.string,
    panelState: PropTypes.string,
    setPanelState: PropTypes.func,
    messageKey: PropTypes.string.isRequired
}

export default Warning;