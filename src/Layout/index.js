import React from 'react';
import './style.css';

import AddProducts from '../AddProducts'
import BuyProducts from '../BuyProducts'
import Totals from '../Totals'

function Layout() {
  return (
    <div>
      <header className="App-header">
        <h2>I'm the Layout / Main Page</h2>
      </header>
      <AddProducts />
      <BuyProducts />
      <Totals />
    </div>
  );
}

export default Layout;
