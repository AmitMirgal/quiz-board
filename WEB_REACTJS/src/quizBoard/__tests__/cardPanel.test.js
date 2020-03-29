import React from "react";
import { mount } from "enzyme";
import CardPanel from "../CardPanel";
import {
  emptyString,
  emptyArray,
  emptyFunc
} from "../../commons/utils/emptyLiterals";
import Card from "../../components/cards/Card";

describe("<CardPanel/>", () => {
  let wrapper;
  const defaultProps = {
    className: emptyString,
    cards: emptyArray,
    removeEvent: emptyFunc
  };
  const prepare = props => {
    wrapper = mount(<CardPanel {...defaultProps} {...props} />);
  };

  it("card should not get displayed if no data is provided", () => {
    // when
    prepare();

    //then
    expect(wrapper.find(Card).exists()).toBe(false);
  });

  it("card should get displayed if data is provided", () => {
    // given
    const cards = [
      { index: 0, value: "K" },
      { index: 1, value: "e" },
      { index: 2, value: "n" },
      { index: 3, value: "n" },
      { index: 4, value: "a" }
    ];
    const props = {
      cards,
      removeEvent: jest.fn()
    };

    // when
    prepare(props);

    wrapper
      .find(Card)
      .at(0)
      .simulate("click");

    //then
    expect(wrapper.find(Card).exists()).toBe(true);
    expect(wrapper.find(Card).length).toBe(cards.length);
    expect(props.removeEvent).toHaveBeenCalled();
  });
});
