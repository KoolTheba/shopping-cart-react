import React from 'react'
import './style.css'

function Totals (){
    return(
        <>
        <h5>Total: <span>XXXX €</span></h5>
        <h5>Discount Code: 
            <input placeholder='enter discount code...'></input>
            <button>Validate Code</button>
        </h5>
        <h5>Total Cart: <span>XXXX €</span></h5>
        </>
    )
}

export default Totals