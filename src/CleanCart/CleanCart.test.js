import React from 'react'
import CleanCart from './'
import { shallow } from 'enzyme'

const props = {
    cleanShoppingList: jest.fn()
}

describe('CleanCart component', () => {
    it('renders CleanCart component correctly', () => {
        const wrapper = shallow(<CleanCart {...props}/>)
        expect(wrapper.find('.clean-cart-button')).toHaveLength(1)
        expect(wrapper.find('.x-icon')).toHaveLength(1)
        expect(wrapper).toMatchSnapshot()
    });

    it('when clicking clean cart button, cleanShoppingList() is called', () => {
        const wrapper = shallow(<CleanCart {...props}/>)
        const cleanListButton = wrapper.find('.clean-cart-button')
        cleanListButton.simulate('click')
        expect(props.cleanShoppingList).toHaveBeenCalledTimes(1)
    });
})
