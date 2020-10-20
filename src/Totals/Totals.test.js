import React from 'react'
import Totals from './'
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
    handleInputChange: jest.fn(),
    handleValidateCode: jest.fn(),
    isValidCode: false,
    showError: false,
}

const quantity = ((props.cartList["PLANT14TGG"])*(props.products["PLANT14TGG"].price))
const discountQ = (quantity*0.9)

describe('Totals component', () => {
    it('renders totals section correctly', () => {
        const wrapper = shallow(<Totals {...props}/>)
        expect(wrapper.find('.totals-section')).toHaveLength(1)
        expect(wrapper).toMatchSnapshot()
    });

    it('renders input and button within totals section correctly', () => {
        const wrapper = mount(<Totals {...props}/>)
        expect(wrapper.find('.code-input')).toHaveLength(1)
        expect(wrapper.find('.validation-button')).toHaveLength(1)
        expect(wrapper).toMatchSnapshot()
    });

    it('when showError is false, error message is not rendered', () => {
        const wrapper = mount(<Totals {...props}/>)
        expect(wrapper.exists('#non-valid-code-error')).toBe(false)
    });

    it('when showError prop is true, renders error message correctly', () => {
        const currentProps = {
            ...props,
            showError: true
        }
        const wrapper = mount(<Totals {...currentProps}/>)
        expect(wrapper.exists('#non-valid-code-error')).toBe(true)
    });

    it('when isValidCode is false, success message is not rendered', () => {
        const wrapper = mount(<Totals {...props}/>)
        expect(wrapper.exists('#success-valid-code-message')).toBe(false)
    });

    it('when isValidCode prop is true, renders success message correctly', () => {
        const currentProps = {
            ...props,
            isValidCode: true
        }
        const wrapper = mount(<Totals {...currentProps}/>)
        expect(wrapper.exists('#success-valid-code-message')).toBe(true)
    });

    it('when isValidCode prop is true, code input gets disabled', () => {
        const currentProps = {
            ...props,
            isValidCode: true
        }
        const wrapper = mount(<Totals {...currentProps}/>)
        const codeInput = wrapper.find('.code-input').prop('disabled')
        expect(codeInput).toBe(true)
    });

    it('when clicking validate code button, handleValidationCode gets called', () => {
        const wrapper = mount(<Totals {...props}/>)
        const validateButton = wrapper.find('.validation-button')
        validateButton.simulate('click')
        expect(props.handleValidateCode).toHaveBeenCalledTimes(1)
    });

    it('when isValidCode is false, the total appears without the discount', () => {
        const wrapper = mount(<Totals {...props}/>)
        const finalTotal = wrapper.find('.final-total').text()
        expect(finalTotal).toBe(`${quantity} €`)
    });

    it('when isValidCode is true, the total appears with the discount', () => {
        const currentProps = {
            ...props,
            isValidCode: true
        }
        const wrapper = mount(<Totals {...currentProps}/>)
        const finalTotal = wrapper.find('.final-total').text()
        expect(finalTotal).toBe(`${discountQ} €`)
    });
});
