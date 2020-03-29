import React from "react";
import { mount } from 'enzyme';

import SecondaryButton from './SecondaryButton';
import { emptyFunc, emptyString } from "../../../commons/utils/emptyLiterals";

describe("<SecondaryButton/>", () => {
    let wrapper;
    const defaultProps = {
        className: emptyString,
        label: 'Submit',
        onClick: emptyFunc,
        disabled: false
    };
    const prepare = props => {
        wrapper = mount(<SecondaryButton {...defaultProps} {...props} />);
    };

    it("button element exists", () => {
        // when
        prepare();

        //then
        expect(wrapper.find('button').exists()).toBe(true);
    });

    it("button is enabled", () => {
        // when
        prepare();

        //then
        expect(wrapper.find(SecondaryButton).props().disabled).toBe(false);
    });

    it("button is triggered", () => {
        const props = {
            onClick: jest.fn()
        }
        // when
        prepare(props);

        wrapper.find(SecondaryButton).simulate('click');

        //then
        expect(props.onClick).toHaveBeenCalled();
    });

});
