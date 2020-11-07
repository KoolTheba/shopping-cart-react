import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


function AddProducts (props) {

    return(
        <>
        <h3>Cool products to add to your shopping list</h3>
        <section className='products-list'>
        {Object.entries(props.products).map(([id, info]) => (
            <div
                className="product-card"
                id={id}
                key={id}
            >
                <div className="product-image">
                    <img src={info.image} alt={info.image}/>
                </div>
                <div className="product-info">
                    <p>{info.name}</p>
                    <p>€{info.price}</p>
                    <button
                        className='add-to-cart-button'
                        onClick={() => props.addProducts(id)}
                    >Add to Cart
                    <FontAwesomeIcon 
                        icon={faShoppingCart}
                        className='cart-icon'
                    />
                    </button>
                </div>
            </div>
        ))}
        </section>
        </>
    )
}

AddProducts.propTypes = {
    addProducts: PropTypes.func,
    products: PropTypes.object
}

export default AddProducts