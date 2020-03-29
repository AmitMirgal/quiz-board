import React from 'react';

import Card from '../components/cards/Card';
import PropTypes from 'prop-types';

import { emptyString, emptyFunc, emptyArray } from '../commons/utils/emptyLiterals';

import './CardPanel.scss';

const CardPanel = props => {
    const { className, cards, removeEvent } = props;

    return (
        <div className={'card-panel'}>
            {
                cards.map(
                    (cards, index) =>
                        <Card
                            key={`card ${index}`}
                            className={className}
                            label={cards}
                            removeEvent={removeEvent}
                        />
                )
            }
        </div>
    );
}

CardPanel.defaultProps = {
    className: emptyString,
    cards: emptyArray,
    removeEvent: emptyFunc
}

CardPanel.propTypes = {
    className: PropTypes.string,
    cards: PropTypes.arrayOf(PropTypes.shape({
        index: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired
    })),
    removeEvent: PropTypes.func
}

export default CardPanel;