import React from 'react';

import { withKnobs, object } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import Card from '../Card';

export default {
    title: 'Commons|Card',
    decorators: [withKnobs]
};

export const card = () =>
    <Card
        label={object('card-label', { index: 1, value: 'K' })}
        removeEvent={action('remove event listner is called')}
    />
