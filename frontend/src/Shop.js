import React, { Component } from 'react';



class Shop extends Component {
    constructor() {
        super();
        this.state = {
            userName:'',
            cart: [],
            shirts: [
                {
                    name: "Tommy Bahama",
                    picture: '/images/tommy_1.jpg',
                    price: '30',
                    type: 'shirt',
                    id: '1' 
                },

                {
                    name: "Purple and Gold",
                    picture: '/images/purpgold_1.jpg',
                    price: '45',
                    type: 'shirt',
                    id: '1'
                },

                {
                    name: "Leather with chains",
                    picture: '/images/leather_chains.jpg',
                    price: '150',
                    type: 'shirt',
                    id: '1'
                }
            ]
        }
    }
}