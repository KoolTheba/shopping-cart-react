import React from 'react'
import './style.css'

function Totals (props){
    const productsList = Object.keys(props.cartList).map(id => {
        const {image, name, price} = props.products[id];
        return {
            id,
            quantity: props.cartList[id],
            image, 
            name, 
            price
        }
    })
    const total = productsList.reduce((t, {price, quantity}) => t + (price*quantity), 0)
    const discountTotal = total*0.9
    return(
        <>
        <section className='totals-section'>
            <h5>Total: <span>{total} €</span></h5>
            {props.showError &&
                <p style={{ 
                    color: 'red',
                    fontStyle: 'italic',
                    fontSize: '1rem'
                }}>NON VALID DISCOUNT CODE. TRY AGAIN!</p>
            }
            <h5>Discount Code: <input 
                    placeholder='enter discount code...'
                    onChange={props.handleInputChange}
                    value={props.value}
                    type='text'
                />
                <button
                    type='submit'
                    onClick={props.handleValidateCode}
                >Validate Code</button>
            </h5>
            <h5>Total Cart: <span>{props.isValidCode ? discountTotal : total} €</span></h5>
        </section>
        </>
    )
}

export default Totals