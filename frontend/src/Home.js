import React, { Component } from 'react';

class Home extends Component {
    

render(){
    return(
        <div>
            <h1>Home</h1>
            <form>
                <input name="userName" type="text" placeholder="username"/>
                <input type="submit"/>
            </form>
        </div>
    );
}
}

export default Home;