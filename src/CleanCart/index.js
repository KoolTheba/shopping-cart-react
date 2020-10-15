import React from 'react'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'


function CleanCart (props) {
    return(
        <>
        <button
            className='clean-cart-button'
            onClick={props.cleanShoppingList}
        >Clean Cart 
            <FontAwesomeIcon 
                icon={faWindowClose}
                className='x-icon'
            />
        </button>
        </>
    )
}

export default CleanCart