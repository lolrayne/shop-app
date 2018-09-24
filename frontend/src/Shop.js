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
                    id: '2'
                },

                {
                    name: "Leather with chains",
                    picture: '/images/leather_chains.jpg',
                    price: '150',
                    type: 'shirt',
                    id: '3'
                }
            ],

            pants: [
                {
                    name: "Dark Denim",
                    picture: '/images/darkdenim_1.jpg',
                    price: '95',
                    type: 'pants',
                    id: '4'
                },

                {
                    name: "Acid Wash Denim",
                    picture: '/images/aciddenim_1.jpg',
                    price: '60',
                    type: 'pants',
                    id: '5'
                },

                {
                    name: "Light Denim",
                    picture: '/images/lightdenim_1.jpg',
                    price: '125',
                    type: 'pants',
                    id: '6'
                },
            ],
        }
    }
    
}