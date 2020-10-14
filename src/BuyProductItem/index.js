import React from 'react'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'

function BuyProductItem (props) {
    return (
        <tr key={props.product.id}>
            <td>
            <button
                onClick={() => props.removeListItem(props.product.id)}
            ><FontAwesomeIcon icon={faTrashAlt}/></button></td>
            <td>
                <img
                    className='product-image-table'
                    src={props.product.image}
                    alt={props.product.name}
                />
            {props.product.name}
            </td>
            <td>{props.product.price}€</td>
            <button 
                onClick={() => props.removeUnit(props.product.id)}
                disabled={props.product.quantity > 1 ? false : true}
            >-</button>
            <td>{props.product.quantity}</td>
            <button 
                onClick={() => props.addUnit(props.product.id)}
            >+</button>
            <td>{props.product.price*props.product.quantity}€</td>
        </tr>
    )
}

export default BuyProductItem