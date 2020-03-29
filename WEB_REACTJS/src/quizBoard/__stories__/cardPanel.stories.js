import React from 'react';

import { withKnobs, radios, object } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import CardPanel from '../CardPanel';

const options = {
    Red: 'red-cards',
    Green: 'green-cards'
}

const cards = [
    { index: 0, value: 'K' },
    { index: 1, value: 'e' },
    { index: 2, value: 'n' },
    { index: 3, value: 'n' },
    { index: 4, value: 'a' }
];

export default {
    title: 'Quiz Board|card-panel',
    decorators: [withKnobs]
};

export const cardPanel = () =>
    <CardPanel
        className={radios('className', options, options.Red)}
        cards={object('cards', cards)}
        removeEvent={action('remove event is clicked')}
    />
