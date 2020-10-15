import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import AddProducts from '../AddProducts'
import BuyProducts from '../BuyProducts'
import Totals from '../Totals'

import data from '../data/products.json'
import store from '../localstorage'

export default class Layout extends React.Component {

  state = {
    loading: true,
    products: {},
    cartList: {},
    discountCode: '10FORPLANTS',
    isValidCode: false,
    value: '',
    showError: false
  }

  componentDidMount(){
    this.setState({ 
      products: data,
      loading: false,
      cartList: store.getAllProducts()
    })
  }

  handleAddProduct = (id) => {
    const storedProductQuantity = parseInt(store.getProduct(id))
    if(storedProductQuantity) {
      store.updateProduct(id, storedProductQuantity+1)
    } else {
      store.saveProduct(id)
    }

    this.setState({
      cartList: store.getAllProducts()
    })
  }

  handleAddQuantity = (id) => {
    const storedProductQuantity = parseInt(store.getProduct(id))
    store.updateProduct(id, storedProductQuantity+1)

    this.setState({
      cartList: store.getAllProducts()
    })
  }

  handleRemoveQuantity = (id) => {
    const storedProductQuantity = parseInt(store.getProduct(id))
      store.updateProduct(id, storedProductQuantity-1)

    this.setState({
      cartList: store.getAllProducts()
    })
  }

  handleRemoveListItem = (id) => {
    store.removeProduct(id)
    this.setState({
      cartList: store.getAllProducts()
    })
  }

  handleCleanShoppingList = () => {
    store.removeAllProducts()
    this.setState({
      cartList: store.getAllProducts()
    })
  }

  handleInputChange = (e) => {
    this.setState({ 
      value: e.target.value,
      showError: false
    })
  }

  handleValidateCode = () => {
    const trimmedValue = this.state.value.trim().toUpperCase()
    if(trimmedValue === this.state.discountCode){
      this.setState({ 
        isValidCode: true,
        value: '',
        showError: false
      })
    } else {
      this.setState({ 
        value: '',
        showError: true
      })
    }
  }

  render(){
    const { 
      products, 
      cartList, 
      loading,
      value,
      isValidCode,
      showError
    } = this.state

    if(loading){
      return(
        <h1>loading...</h1>
      )
    }

    return (
      <div>
        <header className="App-header">
          <h1>Cart <FontAwesomeIcon icon={faShoppingCart}/></h1>
        </header>
        {!loading &&
        <>
          <AddProducts 
            addProducts={this.handleAddProduct}
            products={products}
          />
          <BuyProducts 
            cartList={cartList}
            products={products}
            addUnit={this.handleAddQuantity}
            removeUnit={this.handleRemoveQuantity}
            removeListItem={this.handleRemoveListItem}
            cleanShoppingList={this.handleCleanShoppingList}
          />
          <Totals 
            cartList={cartList}
            products={products}
            handleInputChange={this.handleInputChange}
            handleValidateCode={this.handleValidateCode}
            value={value}
            isValidCode={isValidCode}
            showError={showError}
          />
        </>
        }
      </div>
    );
  } 
}
