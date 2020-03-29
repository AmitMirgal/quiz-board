import React from 'react';

import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import PrimaryButton from '../PrimaryButton';

export default {
    title: 'Commons|PrimaryButton',
    decorators: [withKnobs]
};

export const withPrimaryButton = () =>
    <PrimaryButton
        label={text('Label', 'Submit')}
        disabled={boolean('Disabled', false)}
        onClick={action('submit button is clicked')}
    />
