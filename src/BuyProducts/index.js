import React from 'react'
import './style.css'

import BuyProductItem from '../BuyProductItem'
import CleanCart from '../CleanCart'

function BuyProducts () {
    return(
        <>
        <h3>Buy Products Section</h3>
        <BuyProductItem />
        <CleanCart />
        </>
    )
}

export default BuyProducts