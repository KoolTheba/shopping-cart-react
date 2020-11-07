import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

import { makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(() => ({
    infoMessages: {
      width: '45%',
      marginLeft: '52%',
      marginBottom: '10px',
      fontWeight: "bold",
      backgroundColor: 'white',
    },
}));

function Totals (props) {
    const classes = useStyles();

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
                <Alert 
                    variant="outlined" 
                    severity="error"
                    id='non-valid-code-error'
                    className={classes.infoMessages}
                >
                Non-valid code - try again!
                </Alert>
            }
            {props.isValidCode &&
                <Alert 
                    variant="outlined"
                    severity="success"
                    id='success-valid-code-message'
                    className={classes.infoMessages}
                >
                Valid code - Discount applied!
                </Alert>
            }
            <label className='code-label'>Discount code: </label>
            <input
                className='code-input'
                placeholder='enter discount code...'
                onChange={props.handleInputChange}
                value={props.value}
                type='text'
                disabled={props.isValidCode ? true : false}
            />
            <button
                className='validation-button'
                type='submit'
                onClick={props.handleValidateCode}
            >Validate Code <FontAwesomeIcon icon={faCheckSquare}/>
            </button>           
            <h5>Total Cart: <span className='final-total'>{props.isValidCode ? discountTotal : total} €</span></h5>
        </section>
        </>
    )
}

Totals.propTypes = {
    cartList: PropTypes.object,
    products: PropTypes.object,
    handleInputChange: PropTypes.func,
    handleValidateCode: PropTypes.func,
    value: PropTypes.string,
    isValidCode: PropTypes.bool,
    showError: PropTypes.bool
}

export default Totals