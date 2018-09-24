import React, { Component } from 'react';
import { Switch, Route, Link} from 'react-router-dom';
import Shirt from './Shirt'; 
import Pants from './Pants';
import Cart from './Cart';
import axios from 'axios';


class Shop extends Component {
    constructor() {
        super();
        this.state = {
            userName:'',
            cart: [],
            shirts: [
                {
                    name: "Tommy Bahama",
                    picture: '/images/dress_1.jpg',
                    price: '30',
                    type: 'shirt',
                    id: '1' 
                },

                {
                    name: "Purple and Gold",
                    picture: '/images/dress_2.jpg',
                    price: '45',
                    type: 'shirt',
                    id: '2'
                },

                {
                    name: "Leather with chains",
                    picture: '/images/dress_3.jpg',
                    price: '150',
                    type: 'shirt',
                    id: '3'
                }
            ],

            pants: [
                {
                    name: "Dark Denim",
                    picture: '/images/pant_1.jpg',
                    price: '95',
                    type: 'pants',
                    id: '4'
                },

                {
                    name: "Acid Wash Denim",
                    picture: '/images/pant_2.jpg',
                    price: '60',
                    type: 'pants',
                    id: '5'
                },

                {
                    name: "Light Denim",
                    picture: '/images/pant_3.jpg',
                    price: '125',
                    type: 'pants',
                    id: '6'
                },
            ],
        }
    }
    
    componentDidMount(){
        //makes an axios call for your get request
        let user = '';
        if(localStorage.getItem('userName')){
            user = localStorage.getItem('userName');
        }
            axios.get('http://localhost:8080/cart')
            .then((res)=>{
                this.setState({
                    cart:res.data.cart,
                    userName: user
                })
            })
    }
    addToCart = (product) => {
        axios.post('http://localhost:8080/cart', product)
        .then((res)=>{
            this.setState({
                cart: res.data.cart
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    
    render(){
        return(
            <div>
                <h1>Shop</h1>
                <h2>Welcome!</h2>
            <nav>
                <Link to="/shop/shirt">Shirts</Link>
                <Link to="/shop/pants">Pants</Link>
            </nav>
            <Cart cart={this.state.cart}/>
            <Switch>
                <Route path="/shop/shirts" render={()=><Shirt products={this.state.shirts} addToCart={this.addToCart}/>} /> 
                <Route path="/shop/pants" render={()=><Pants products={this.state.pants} addToCart={this.addToCart}/>} /> 
            </Switch>
            </div>
        )
    }
}

export default Shop;