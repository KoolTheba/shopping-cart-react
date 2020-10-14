import React from 'react'
import './style.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBroom } from '@fortawesome/free-solid-svg-icons'


function CleanCart (props) {
    return(
        <>
        <button
            onClick={props.cleanShoppingList}
        >Clean Cart <FontAwesomeIcon icon={faBroom}/></button>
        </>
    )
}

export default CleanCart