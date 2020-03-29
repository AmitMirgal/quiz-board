import React from "react";
import { mount } from 'enzyme';

import TextField from './TextField';
import { emptyString, emptyFunc } from "../../commons/utils/emptyLiterals";

describe("<TextField/>", () => {
    let wrapper;
    const defaultProps = {
        className: emptyString,
        value: emptyString,
        onChange: emptyFunc
    };
    const prepare = props => {
        wrapper = mount(<TextField {...defaultProps} {...props} />);
    };

    it("input element exists", () => {
        // when
        prepare();

        //then
        expect(wrapper.find('input').exists()).toBe(true);
    });

    it("input is enabled", () => {
        // when
        prepare();

        //then
        expect(wrapper.find('input').props().disabled).toBe(false);
    });

    it("onChange is triggered", () => {
        // given
        const props = {
            onChange: jest.fn()
        }
        const event = { target: { value: 'Amit' } }

        // when
        prepare(props);

        wrapper.find('input').simulate('change', event);

        //then
        expect(props.onChange).toHaveBeenCalled();
    });

});
