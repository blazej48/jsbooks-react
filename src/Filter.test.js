import React from 'react';
import {shallow} from 'enzyme';
import {Filter} from "./Filter";

describe('Filter', () => {
    let component;
    let setPageLimitMock;
    let setSortKeyMock;

    beforeEach(() => {
        setPageLimitMock = jest.fn();
        setSortKeyMock = jest.fn();
        component = shallow(<Filter setPageLimit={setPageLimitMock} setSortKey={setSortKeyMock}/>);
    });

    it('should set page limit', () => {
        component.find('input[type="text"]').simulate('change', {target: {value: 333}});
        expect(setPageLimitMock).toHaveBeenCalledWith(333);
    });

    ['pages', 'sortReleaseDate', 'surname'].forEach(sortKey => {
        it(`should set sortkey: ${sortKey}`, () => {
            component.find(`input[value="${sortKey}"]`).simulate('change', {target: {value: sortKey}});
            expect(setSortKeyMock).toHaveBeenCalledWith(sortKey);
        });
    })

    it('should clear filter params', () => {
        component.find('button').simulate('click');
        expect(setPageLimitMock).toHaveBeenCalledWith(null);
        expect(setSortKeyMock).toHaveBeenCalledWith(null);
    })
});

