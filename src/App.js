import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';
import AlertMessage from "./components/AlertMessage";
import Nav from "./components/Nav";
import About from "./views/About";
import Synth from "./views/Synth";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Footer from "./components/Footer";




class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: null,
            category: null,
            loggedIn: localStorage.getItem('token') ? true : false
        }
    }
    
    flashMessage = (message, category) => {
        this.setState({message, category})
    }

    
    login = () => {
        this.setState({loggedIn: true})
    }
    
    logout = () => {
        localStorage.removeItem('token');
        this.flashMessage('You have succesfully logged out','secondary')
        this.setState({
            loggedIn: false
        })
    }


    render(){

        return (
            
            <>
                <Nav loggedIn={this.state.loggedIn} logUserOut={this.logout}/>
                <div className="container">
                    {this.state.message ? <AlertMessage category={this.state.category} message={this.state.message} flashMessage={this.flashMessage} /> : null} 
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/synth' element={<Synth flashMessage={this.flashMessage} />} />
                        <Route path='/about' element={<About flashMessage={this.flashMessage} />} />
                        <Route path='/signup' element={<Signup flashMessage={this.flashMessage} />} />
                        <Route path='/login' element={<Login flashMessage={this.flashMessage} login={this.login} />} />
                    </Routes>

                </div>
                <Footer />
            </>
                        
                        


)
}

}

export default App;

