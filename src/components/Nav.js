import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">HoneyBear's Synth</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/* THIS IS THE FIRST PAGE YOU SEE ON WEBSITE Either sign up or log in */}
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        {props.loggedIn ? (
                        <>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/synth">Synth</Link>
                            <Link className="nav-link" to="/" onClick={props.logUserOut}>Logout</Link>
                        </>
                        ) : (
                        <>
                            <Link className="nav-link" to="/signup">Sign up</Link>
                            <Link className="nav-link" to="/login">Login</Link>
                        </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}
