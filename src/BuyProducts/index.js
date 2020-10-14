import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

import BuyProductItem from '../BuyProductItem'
import CleanCart from '../CleanCart'

function BuyProducts (props) {

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

    return(
        <>
        <section className='buy-products'>
            <h3>Your shopping bag <FontAwesomeIcon icon={faShoppingBasket}/></h3>
            <table className='products-to-buy'>
                <thead>
                    <tr className='table-head'>
                        <th>Product</th>
                        <th>Unit price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                    {productsList.length > 0 && 
                        productsList.map(product => (
                            <BuyProductItem 
                                product={product}
                                addUnit={props.addUnit}
                                removeUnit={props.removeUnit}
                                removeListItem={props.removeListItem}
                            />
                        ))
                    }
                </tbody>
            </table>
            <CleanCart 
                cleanShoppingList={props.cleanShoppingList}
            />
        </section>
        </>
    )
}

export default BuyProducts