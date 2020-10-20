import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

import BuyProductItem from '../BuyProductItem'
import CleanCart from '../CleanCart'

const useStyles = makeStyles({
    buyProducts: {
      width: '100%',
      margin: '125px 0 50px',
    },
    table: {
      minWidth: 650,
      background: 'linear-gradient(45deg, #799F0C 30%, #799F0C 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    tableHead: {
        color: '#292C34',
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: 'sans-serif',
    }
});

function BuyProducts (props) {
    const classes = useStyles()

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
        <section className={classes.buyProducts} id='products-list-section'>
            <h3>Your shopping bag <FontAwesomeIcon icon={faShoppingBasket}/></h3>
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHead} align="center">Product</TableCell>
                            <TableCell className={classes.tableHead} align='left'></TableCell>
                            <TableCell className={classes.tableHead} align="center">Remove</TableCell>
                            <TableCell className={classes.tableHead} align="center">Unit price</TableCell>
                            <TableCell className={classes.tableHead} align="center">Quantity</TableCell>
                            <TableCell className={classes.tableHead} align="center">Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productsList.length > 0 &&
                            productsList.map(product => (
                                <BuyProductItem
                                    key={product.id}
                                    product={product}
                                    addUnit={props.addUnit}
                                    removeUnit={props.removeUnit}
                                    removeListItem={props.removeListItem}
                                />
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <CleanCart 
                cleanShoppingList={props.cleanShoppingList}
            />
        </section>
        </>
    )
}

BuyProducts.propTypes = {
    cartList: PropTypes.object,
    products: PropTypes.object,
    addUnit: PropTypes.func,
    removeUnit: PropTypes.func,
    removeListItem: PropTypes.func,
    cleanShoppingList: PropTypes.func,
}

export default BuyProducts