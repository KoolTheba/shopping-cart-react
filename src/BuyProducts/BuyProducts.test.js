import React from 'react'
import BuyProducts from './'
import { shallow, mount } from 'enzyme'

const props = {
    products: {
        "PLANT14TGG": {
            "name": "Zamioculcas",
            "price": 90.00,
            "stock": true,
            "stockQ": 15,
            "image": "https://image.shutterstock.com/image-photo/pot-zamioculcas-home-plant-on-600w-1399949501.jpg"
        },
    },
    cartList: {
        "PLANT14TGG": 2
    },
    removeListItem: jest.fn(),
    removeUnit: jest.fn(),
    addUnit: jest.fn(),
    cleanShoppingList: jest.fn()
}

describe('BuyProducts component', () => {
    it('renders BuyProducts component correctly', () => {
        const wrapper = shallow(<BuyProducts {...props}/>)
        expect(wrapper.find('#products-list-section')).toHaveLength(1)
        expect(wrapper).toMatchSnapshot()
    });

    it('renders no-products-info paragraph correctly when there are no products in the list', () => {
        const currentProps = {
            products: {},
            cartList: {}
        }
        const wrapper = shallow(<BuyProducts {...currentProps}/>)
        expect(wrapper.find('.no-products-info')).toHaveLength(1)
        expect(wrapper.find('.no-products-info').text()).toEqual('There are no products in your bag')
    });

    it('renders BuyProductsItem component correctly when there is at least 1 product and has props', () => {
        const productDetail = {
            id: 'PLANT14TGG',
            quantity: props.cartList['PLANT14TGG'],
            image: props.products['PLANT14TGG'].image,
            name: props.products['PLANT14TGG'].name,
            price: props.products['PLANT14TGG'].price
        }
        const wrapper = mount(<BuyProducts {...props}/>)
        expect(wrapper.find('BuyProductItem')).toHaveLength(1)
        expect(wrapper.find('BuyProductItem').props().product).toEqual(productDetail)
        expect(wrapper.find('BuyProductItem').props().addUnit).toEqual(props.addUnit)
        expect(wrapper.find('BuyProductItem').props().removeUnit).toEqual(props.removeUnit)
        expect(wrapper.find('BuyProductItem').props().removeListItem).toEqual(props.removeListItem)
    });

    it('renders CleanCart component correctly and has props...', () => {
        const wrapper = mount(<BuyProducts {...props}/>)
        expect(wrapper.find('CleanCart')).toHaveLength(1)
        expect(wrapper.find('CleanCart').props().cleanShoppingList).toEqual(props.cleanShoppingList)
    });
});

