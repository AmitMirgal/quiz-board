import React from 'react';

import { withKnobs } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

import QuizBoard from '../QuizBoard';

export default {
    title: 'Quiz Board|quiz-panel',
    decorators: [withKnobs, withA11y]
};

export const quizBoard = () => <QuizBoard />
