import React, { Component } from 'react';

class Pants extends Component {
    render(){
        let productJSX = this.props.products.map((product)=>{
            return
                <div className="product-wrapper">
                    <h5>{ product.name }</h5>
                    <img src={product.picture}/>
                    <p>{ product.price }</p>
                    <p>{ product.type }</p>
                    <button onClick={()=>this.props.addToCart(product)}>Add to Cart</button>
                </div>
        })
        return(
            <div className="product-container">
                { productJSX }
            </div>
        )
    }
}

export default Pants;