import React from 'react';
import { addDecorator } from '@storybook/react';

import { IntlProvider } from 'react-intl';

import en from '../src/commons/translations/en'
import fr from '../src/commons/translations/fr'

const LANGUAGES = {
    ENGLISH: 'en',
    FRENCH: 'fr'
}

const INTL_MESSAGES = {
    [LANGUAGES.ENGLISH]: en,
    [LANGUAGES.FRENCH]: fr
}

addDecorator(storyFn =>
    <IntlProvider locale={LANGUAGES.ENGLISH} messages={INTL_MESSAGES[LANGUAGES.ENGLISH]}>
        {storyFn()}
    </IntlProvider>
);
