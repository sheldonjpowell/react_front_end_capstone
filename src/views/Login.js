import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: null
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        
        let username = e.target.username.value;
        let password = e.target.password.value;

        let myHeaders = new Headers();
        myHeaders.append('Authorization', "basic " + btoa(`${username}:${password}`))

        let res = await fetch("http://127.0.0.1:5000/api/token", {
            headers: myHeaders
        })
        let data = await res.json();
        if (data.error){
            this.props.flashMessate('Your username/password is wrong, fix it!', 'danger')
        }else{
            let token = await data.token
            localStorage.setItem('token', token)
            this.props.flashMessage('You good nah', 'success')
            this.props.login(); 
            this.setState({redirect: '/'})

        }

    }
    
    render() {
        return (
            this.state.redirect ? <Navigate to={this.state.redirect} /> :
            <form onSubmit={this.handleSubmit}>
            <h3 className='text-center'>Login Here</h3>
            <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' className='form-control' placeholder='Username' />
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' className='form-control' placeholder='Password' />
                <input type='submit' className='btn btn-primary w-100' value='Login' />
            </div>
        </form>
        )
    }
}
