import React from "react";
import { mount } from 'enzyme';

import Card from './Card';
import { emptyString, emptyFunc } from "../../commons/utils/emptyLiterals";

describe("<Card/>", () => {
    let wrapper;
    const defaultProps = {
        className: emptyString,
        label: { index: 1, value: 'K' },
        removeEvent: emptyFunc
    };
    const prepare = props => {
        wrapper = mount(<Card {...defaultProps} {...props} />);
    };

    it("div with card class name exists", () => {
        // when
        prepare();

        //then
        expect(wrapper.find('.card').exists()).toBe(true);
    });


    it("removeEvent is triggered", () => {
        // given
        const props = {
            removeEvent: jest.fn()
        }

        // when
        prepare(props);

        wrapper.find('.card').simulate('click');

        //then
        expect(props.removeEvent).toHaveBeenCalled();
    });

});
