import React from 'react'
import './style.css'

function AddProducts (props) {

    return(
        <>
        <h3>Cool products to add to your shopping list</h3>
        <section className='products-list'>
        {Object.entries(props.products).map(([id, info]) => (
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
                        onClick={() => props.addProducts(id)}
                    >Add to Cart</button>
                </div>
            </div>
        ))}
        </section>
        </>
    )
}

export default AddProducts