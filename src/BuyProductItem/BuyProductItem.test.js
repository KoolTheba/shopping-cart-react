import React from 'react'
import BuyProductItem from './'
import { shallow } from 'enzyme'

const props = {
    product: {
        id: "PLANT14TGG",
        quantity: 1,
        image: "https://image.shutterstock.com/image-photo/pot-zamioculcas-home-plant-on-600w-1399949501.jpg",
        name: "Zamioculcas",
        price: 90.00
    },
    removeListItem: jest.fn(),
    removeUnit: jest.fn(),
    addUnit: jest.fn()
}

describe('BuyProductItem component', () => {
    it('renders BuyProductItem component correctly', () => {
        const wrapper = shallow(<BuyProductItem {...props}/>)
        expect(wrapper.find('.products-table')).toHaveLength(1)
        expect(wrapper).toMatchSnapshot()
    });

    it('renders delete, remove and add button correctly', () => {
        const wrapper = shallow(<BuyProductItem {...props}/>)
        expect(wrapper.find('.delete-button')).toHaveLength(1)
        expect(wrapper.find('.remove-product-button')).toHaveLength(1)
        expect(wrapper.find('.add-product-button')).toHaveLength(1)
    });

    it('remove button is disable when product quantity is 1', () => {
        const wrapper = shallow(<BuyProductItem {...props}/>)
        const removeButton = wrapper.find('.remove-product-button').prop('disabled')
        expect(removeButton).toBe(true)
    });

    it('remove button is not disable when product quantity is more than 1', () => {
        props.product.quantity = 2
        const wrapper = shallow(<BuyProductItem {...props}/>)
        const removeButton = wrapper.find('.remove-product-button').prop('disabled')
        expect(removeButton).toBe(false)
    });

    it('when clicking delete button, removeListItem() is called', () => {
        const wrapper = shallow(<BuyProductItem {...props}/>)
        const deleteButton = wrapper.find('.delete-button')
        deleteButton.simulate('click')
        expect(props.removeListItem).toHaveBeenCalledTimes(1)
        expect(props.removeListItem).toHaveBeenCalledWith(props.product.id)
    });

    it('when clicking remove button, removeUnit() is called', () => {
        const wrapper = shallow(<BuyProductItem {...props}/>)
        const removeButton = wrapper.find('.remove-product-button')
        removeButton.simulate('click')
        expect(props.removeListItem).toHaveBeenCalledTimes(1)
        expect(props.removeUnit).toHaveBeenCalledWith(props.product.id)
    });

    it('when clicking add button, addUnit() is called', () => {
        const wrapper = shallow(<BuyProductItem {...props}/>)
        const addButton = wrapper.find('.add-product-button')
        addButton.simulate('click')
        expect(props.removeListItem).toHaveBeenCalledTimes(1)
        expect(props.addUnit).toHaveBeenCalledWith(props.product.id)
    });
});
