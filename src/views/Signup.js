import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        // Confirm passwords
        let password = e.target.password.value;
        let confirmPass = e.target.confirmPass.value;
        if (password !== confirmPass){
            console.log("HB said, 'passwords don't match, no entry!'")
            // navigate("/Signup")
        } else{
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json")

            let data = JSON.stringify({
                username: e.target.username.value,
                email: e.target.email.value,
                password: password
            })

            fetch('http://127.0.0.1:5000/api/user/create', {
                method: 'POST',
                headers: myHeaders,
                body: data
            }).then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/')
            })
        }
    }


        // Getting data from form
    return (
        <form onSubmit = {handleSubmit}>
            <h3 className='text-center'>Sign up Here</h3>
            <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <input type='text' name='username' className='form-control' placeholder='Username' />
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' className='form-control' placeholder='Email' />
                <label htmlFor='password'>Password</label>
                <input type='password' name='password' className='form-control' placeholder='Password' />
                <label htmlFor='confirmPass'>Confirm Password</label>
                <input type='password' name='confirmPass' className='form-control' placeholder='Confirm Password' />
                <input type='submit' className='btn btn-primary w-100' value='Sign Up' />
            </div>
        </form>
    )
}
