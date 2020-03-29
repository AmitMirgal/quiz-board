import React from 'react';

import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from '@storybook/addon-actions';

import Warning from '../Warning';

export default {
    title: 'Commons|Warning',
    decorators: [withKnobs]
};

export const warning = () => <Warning
    messageKey={'quizBoardWarning'}
    setPanelState={action('set panel state')}
    widthSize={text('width', '50px')}
    heightSize={text('height', '50px')}
/>
