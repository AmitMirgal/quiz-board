import React from "react";
import { mount } from 'enzyme';

import PrimaryButton from './PrimaryButton';
import { emptyFunc, emptyString } from "../../../commons/utils/emptyLiterals";

describe("<PrimaryButton/>", () => {
    let wrapper;
    const defaultProps = {
        className: emptyString,
        label: 'Submit',
        onClick: emptyFunc,
        disabled: false
    };
    const prepare = props => {
        wrapper = mount(<PrimaryButton {...defaultProps} {...props} />);
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
        expect(wrapper.find(PrimaryButton).props().disabled).toBe(false);
    });

    it("button is triggered", () => {
        const props = {
            onClick: jest.fn()
        }
        // when
        prepare(props);

        wrapper.find(PrimaryButton).simulate('click');

        //then
        expect(props.onClick).toHaveBeenCalled();
    });

});
