import React, { Component } from 'react';

class Cart extends Component {
    render(){
        let cartJSX = this.props.cart.map((product)=>{
            return
                <h3>{ product.name }</h3>
        })
        return(
            <div>
                <h3>Your Shopping Cart</h3>
                { carrtJSX }
            </div>
        )
    }
}

export default Cart;