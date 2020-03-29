import React from 'react';

import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import TextField from '../TextField';

export default {
    title: 'Commons|TextField',
    decorators: [withKnobs]
};

export const textField = () =>
    <TextField
        value={text('text-label', 'Kenna')}
        onChange={action('onChange is clicked')}
    />
