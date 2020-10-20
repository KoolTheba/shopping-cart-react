import React from 'react'
import AddProducts from './'
import { shallow } from 'enzyme'

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
    addProducts: jest.fn()
}

describe('AddProducts component', () => {
    it('renders AddProducts component correctly', () => {
        const wrapper = shallow(<AddProducts {...props}/>)
        expect(wrapper.find('.products-list')).toHaveLength(1)
        expect(wrapper.find('.product-card')).toHaveLength(1)
        expect(wrapper).toMatchSnapshot()
    });

    it('when clicking add to cart button, addProducts() is called', () => {
        const wrapper = shallow(<AddProducts {...props}/>)
        const addToCartButton = wrapper.find('.add-to-cart-button')
        addToCartButton.simulate('click')
        expect(props.addProducts).toHaveBeenCalledTimes(1)
    });
});