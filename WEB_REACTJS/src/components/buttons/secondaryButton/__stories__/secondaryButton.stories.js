import React from 'react';

import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import SecondaryButton from '../SecondaryButton';

export default {
    title: 'Commons|SecondaryButton',
    decorators: [withKnobs]
};

export const withSecondaryButton = () =>
    <SecondaryButton
        label={text('Label', 'Reset to Default')}
        disabled={boolean('Disabled', false)}
        onClick={action('Reset button is clicked')}
    />
