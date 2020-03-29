import React from "react";
import { withMountIntl } from "../../commons/utils/unitTestHelper";
import QuizBoard from "../QuizBoard";
import TextField from "../../components/inputFields/TextField";
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import SecondaryButton from "../../components/buttons/secondaryButton/SecondaryButton";
import CardPanel from "../CardPanel";

describe("<QuizBoard/>", () => {
  let wrapper;
  const defaultProps = {
    setPanelState: jest.fn()
  };
  const prepare = props => {
    wrapper = withMountIntl(<QuizBoard {...defaultProps} {...props} />);
  };

  it("set of components renders on intial page load", () => {
    // expected result
    const defaultNoOfCards = 5;

    // when
    prepare();

    //then
    expect(wrapper.find(TextField).exists()).toBe(true);
    expect(wrapper.find(PrimaryButton).exists()).toBe(true);
    expect(wrapper.find(SecondaryButton).exists()).toBe(true);
    expect(wrapper.find(CardPanel).exists()).toBe(true);
  });

  it("check initial value", () => {
    // expected result
    const EXPECTED_DEFAULT_VALUE = [
      { index: 0, value: 'K' },
      { index: 1, value: 'e' },
      { index: 2, value: 'n' },
      { index: 3, value: 'n' },
      { index: 4, value: 'a' }
    ];

    // when
    prepare();

    //then
    expect(wrapper.find(TextField).props().value).toBe('Kenna');
    expect(wrapper.find(PrimaryButton).props().label).toBe('Submit');
    expect(wrapper.find(SecondaryButton).props().label).toBe('Reset to Default');
    expect(wrapper.find(CardPanel).props().cards).toEqual(EXPECTED_DEFAULT_VALUE);
  });

  it("reset button is disabled and submit button is enabled", () => {
    // when
    prepare();

    //then
    expect(wrapper.find(PrimaryButton).props().disabled).toBe(false);
    expect(wrapper.find(SecondaryButton).props().disabled).toBe(true);
  });
});
