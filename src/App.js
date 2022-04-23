import React, { Component } from "react";
import Nav from "./components/Nav";
import Home from "./views/Home";




class App extends Component{
    render(){

        return (
            <>
                <Nav />
                <div className="container" />
                    <Home />
                    

                <h1>Hello World</h1>
            </>

)
}

}

export default App;

