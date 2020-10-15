import React from 'react'
import './style.css'

import { makeStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'

const useStyles = makeStyles((theme) => ({
    tableBody: {
        color: '#292C34',
        fontSize: 20,
        fontFamily: 'sans-serif',
        margin: theme.spacing(1),
    }
}));

function BuyProductItem (props) {
    const classes = useStyles();

    return (
        <TableRow key={props.product.id}>
              <TableCell  align='center' component="th" scope="row">
                <img
                    className='product-image-table'
                    src={props.product.image}
                    alt={props.product.name}
                />
              </TableCell>
              <TableCell align='left' className={classes.tableBody}>{props.product.name}</TableCell>
              <TableCell align="center">
                <IconButton
                    className='delete-button'
                    aria-label="delete" 
                    onClick={() => props.removeListItem(props.product.id)}
                >
                    <DeleteIcon />
                </IconButton>
              </TableCell>
              <TableCell align="center" className={classes.tableBody}>{props.product.price}€</TableCell>
              <TableCell align="center" className={classes.tableBody}>
                <IconButton 
                    aria-label="add to shopping cart"
                    onClick={() => props.removeUnit(props.product.id)}
                    disabled={props.product.quantity > 1 ? false : true}    
                >
                        <RemoveShoppingCartIcon />
                    </IconButton>
                {props.product.quantity}
                <IconButton 
                    aria-label="add to shopping cart"
                    onClick={() => props.addUnit(props.product.id)}
                >
                    <AddShoppingCartIcon />
                </IconButton>
              </TableCell>
              <TableCell align="center" className={classes.tableBody}>{props.product.price*props.product.quantity}€</TableCell>
        </TableRow>
    )
}

export default BuyProductItem