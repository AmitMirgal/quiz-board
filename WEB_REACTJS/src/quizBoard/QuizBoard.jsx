import React, { useState, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { translateKey } from '../commons/utils/translator';
import api from './server';

import TextField from '../components/inputFields/TextField';
import PrimaryButton from '../components/buttons/primaryButton/PrimaryButton';
import SecondaryButton from '../components/buttons/secondaryButton/SecondaryButton';
import CardPanel from './CardPanel';

import quizBoardHelper from './utils';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';
import { emptyArray } from '../commons/utils/emptyLiterals';
import { DEFAULT_VALUE, URL, PANEL_STATE } from './utils/constant';

import './QuizBoard.scss';

const QuizBoard = props => {

    const { setPanelState } = props;
    const [cards, setCards] = useState(DEFAULT_VALUE);
    const [newCards, setNewCards] = useState(emptyArray);
    const intl = useIntl();

    const parsedCardsData = useMemo(() => quizBoardHelper.parseInputValue(cards),
        [cards]
    );

    const updateCardsData = useCallback(inputValue => {
        setCards(quizBoardHelper.convertStringToObj(inputValue));
    }, [setCards]);

    const updateQuizFieldState = useCallback((index, inputValue) => {
        const parsedCardsData = quizBoardHelper.filterCards(cards, index, inputValue);
        setCards(parsedCardsData);
    }, [cards, setCards]);

    const resetToDefault = useCallback(() => {
        setCards(DEFAULT_VALUE);
        setNewCards(emptyArray);
    }, [setCards, setNewCards]);

    const isResetDisabled = useMemo(() => (isEqual(DEFAULT_VALUE, cards) && isEmpty(newCards)), [cards, newCards]);

    const isSubmitDisabled = useMemo(() => (isEmpty(cards) || isEmpty(parsedCardsData.trim())), [cards, parsedCardsData]);

    const submitStringToReverse = async () => {
        const options = {
            params: {
                name: parsedCardsData
            }
        }
        const res = await api.reverseStringAPI(URL, options);

        (res === 'error') ? setPanelState(PANEL_STATE.ERROR) : setNewCards(quizBoardHelper.convertStringToObj(res));
    };

    const updateNewCardsState = useCallback((index, inputValue) => {
        const parsedCardsData = quizBoardHelper.filterCards(newCards, index, inputValue);
        setNewCards(parsedCardsData);
    }, [newCards, setNewCards]);

    return (
        <>
            <h2>{translateKey(intl, 'quizPanel')}</h2>

            <div className={'quizBoardPanel'}>
                <TextField className={'quizTextField'} value={parsedCardsData} onChange={updateCardsData} />

                <div className={'quizBoardControls'}>
                    <PrimaryButton
                        className={'quizSubmitButton'}
                        disabled={isSubmitDisabled}
                        label={translateKey(intl, 'submit')}
                        onClick={submitStringToReverse}
                    />
                    <SecondaryButton
                        className={'quizResetButton'}
                        disabled={isResetDisabled}
                        label={translateKey(intl, 'resetToDefault')}
                        onClick={resetToDefault} />
                </div>
            </div>

            {!isEmpty(newCards) && <CardPanel className={'red-cards'} cards={newCards} removeEvent={updateNewCardsState} />}
            {!isEmpty(cards) && <CardPanel className={'green-cards'} cards={cards} removeEvent={updateQuizFieldState} />}
        </>
    )
}

QuizBoard.propTypes = {
    setPanelState: PropTypes.func.isRequired
}

export default QuizBoard;