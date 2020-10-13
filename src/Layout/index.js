import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'


import AddProducts from '../AddProducts'
import BuyProducts from '../BuyProducts'
import Totals from '../Totals'

function Layout() {
  return (
    <div>
      <header className="App-header">
        <h1>Cart <FontAwesomeIcon icon={faShoppingCart}/></h1>
      </header>
      <AddProducts />
      <BuyProducts />
      <Totals />
    </div>
  );
}

export default Layout;
