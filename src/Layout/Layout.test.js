import React from 'react'
import Layout from './'
import { shallow, mount } from 'enzyme'
import AddProducts from '../AddProducts'
import BuyProducts from '../BuyProducts'
import Totals from '../Totals'

describe('Layout component', () => {
    it('renders loading when state.loading is true', () => {
        const wrapper = mount(<Layout />)
        wrapper.setState({ loading: true })
        expect(wrapper.contains(<h1>loading...</h1>)).toBe(true)
        expect(wrapper.exists(AddProducts)).toBe(false)
    });

    it('does not render loading when state.loading is true', () => {
        const wrapper = mount(<Layout />)
        wrapper.setState({ loading: false });
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.exists(AddProducts)).toBe(true)
        expect(wrapper.exists(BuyProducts)).toBe(true)
        expect(wrapper.exists(Totals)).toBe(true)
    });

    it('all Layout methods should be typeof functions', () => {
        const wrapper = shallow(<Layout />)
        expect(typeof wrapper.instance().handleAddProduct).toBe('function')
        expect(typeof wrapper.instance().handleAddProduct).toBe('function')
        expect(typeof wrapper.instance().handleAddQuantity).toBe('function')
        expect(typeof wrapper.instance().handleRemoveQuantity).toBe('function')
        expect(typeof wrapper.instance().handleRemoveListItem).toBe('function')
        expect(typeof wrapper.instance().handleCleanShoppingList).toBe('function')
        expect(typeof wrapper.instance().handleInputChange).toBe('function')
        expect(typeof wrapper.instance().handleValidateCode).toBe('function')
    });
});
