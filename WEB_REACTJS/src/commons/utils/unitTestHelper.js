import React from "react";
import { IntlProvider } from "react-intl";
import { mount } from "enzyme";

import en from "../translations/en";
import fr from "../translations/fr";

const LANGUAGES = {
  ENGLISH: "en",
  FRENCH: "fr"
};

const INTL_MESSAGES = {
  [LANGUAGES.ENGLISH]: en,
  [LANGUAGES.FRENCH]: fr
};

export const withMountIntl = (component, language = "en") =>
  mount(
    <IntlProvider locale={language} messages={INTL_MESSAGES[language]}>
      {component}
    </IntlProvider>
  );
