import React from "react";
import { withMountIntl } from '../../commons/utils/unitTestHelper';

import Warning from "./Warning";
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";
import { ReactComponent as WarningIcon } from '../../commons/media/warning.svg';
import { emptyString, emptyFunc } from "../../commons/utils/emptyLiterals";

describe("<Warning/>", () => {
    let wrapper;
    const defaultProps = {
        messageKey: 'quizBoardWarning',
        widthSize: '50px',
        heightSize: '50px',
        panelState: emptyString,
        setPanelState: emptyFunc
    };
    const prepare = props => {
        wrapper = withMountIntl(<Warning {...defaultProps} {...props} />);
    };

    it("Initial state of component", () => {
        // expected result
        const expectedMessage = 'Server is down. Please contact the System Administrator';

        // when
        prepare();

        //then
        expect(wrapper.find('span').text()).toBe(expectedMessage);
        expect(wrapper.find(PrimaryButton).exists()).toBe(true);
        expect(wrapper.find(WarningIcon).exists()).toBe(true);
    });

    it("default width and height of wraning icon", () => {
        // when
        prepare();

        //then
        expect(wrapper.find(Warning).props().widthSize).toBe('50px');
        expect(wrapper.find(Warning).props().heightSize).toBe('50px');
    });

    it("close button is enabled", () => {
        // when
        prepare();

        //then
        expect(wrapper.find(PrimaryButton).props().disabled).toBe(false);
    });

    it("setPanelState is triggered", () => {
        const props = {
            setPanelState: jest.fn()
        }
        // when
        prepare(props);

        wrapper.find(PrimaryButton).simulate('click');

        //then
        expect(props.setPanelState).toHaveBeenCalled();
    });

});
