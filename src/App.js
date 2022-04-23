import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import Nav from "./components/Nav";
import Home from "./views/Home";
import Signup from "./views/Signup";




class App extends Component{


    render(){

        return (
            <>
                <Nav />
                <div className="container"> 
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/signup' element={<Signup />} />
                    </Routes>

                </div>
            </>
                        
                        


)
}

}

export default App;

