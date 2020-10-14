import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

import AddProducts from '../AddProducts'
import BuyProducts from '../BuyProducts'
import Totals from '../Totals'

import data from '../data/products.json'
console.log(data)

export default class Layout extends React.Component {

  state = {
    loading: true,
    products: {},
    cartList: {
      'PLANT14TGG': 1,
      'PLANT23HJJ': 1
    }
  }

  componentDidMount(){
    this.setState({ products: data, loading: false })
  }

  handleAddProduct = (id) => {
      if(this.state.cartList.hasOwnProperty(id)){
        this.setState((state) => ({cartList: {
          ...state.cartList,
          [id]: state.cartList[id] + 1
          }
        }))
      } else {
        this.setState((state) => ({cartList: {
          ...state.cartList,
          [id]: 1
        }}))
      }
  }

  handleAddQuantity = (id) => {
    this.setState((state) => ({cartList: {
      ...state.cartList,
      [id]: state.cartList[id] + 1
      }
    }))
  }

  handleRemoveQuantity = (id) => {
    this.setState((state) => ({cartList: {
      ...state.cartList,
      [id]: state.cartList[id] - 1
      }
    }))
  }

  handleRemoveListItem = (id) => {
    const { cartList } = this.state;
    const { [id]: _, ...newCartList } = cartList;
    this.setState({
      cartList: newCartList
    });
  }

  handleCleanShoppingList = () => {
    this.setState({
      cartList: {}
    });
  }

  render(){
    const { products, cartList, loading } = this.state

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
          <Totals />
        </>
        }
      </div>
    );
  } 
}
