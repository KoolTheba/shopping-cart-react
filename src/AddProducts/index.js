import React from 'react'
import './style.css'
import data from '../data/products.json'
console.log(data)

export default class AddProducts extends React.Component {

    state = {
        products: []
    }

    componentDidMount(){
        this.setState({ products: data })
    }

    handleAddProduct = (id) => {
        console.log('ID-----', id)
    }

    render(){
        const { products } = this.state

        return(
            <>
            <h3>Cool products to add to your shopping list</h3>
            <section className='products-list'>
            {Object.entries(products).map(([id, info]) => (
                <div 
                    className="product-card"
                    id={id}
                    key={id}
                >
                    <div className="product-image">
                        <img src={info.image} alt={info.image}/>
                    </div>
                    <div className="product-info">
                        <p>{info.name}</p>
                        <p>€{info.price}</p>
                        <button
                            onClick={() => this.handleAddProduct(id)}
                        >Add to Cart</button>
                    </div>
                </div>
            ))}
            </section>
            </>
        )
    }
}