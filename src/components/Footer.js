import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer(props) {
    return ( 
        <>
            <div
                style={{
                position: "fixed",
                left: 0,
                bottom: 0,
                right: 0,
                backgroundColor: "blue"
            }}>
                <footer className="bg-dark text-center text-white">
                    <div className="container p-4 pb-0">

                        <section className="mb-4">
                            {/* <!-- Linkedin --> */}
                            <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/sheldonpowell/" role="button"><i className="fab fa-linkedin-in"></i></a>

                            {/* <!-- Github --> */}
                            <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/" role="button"><i className="fab fa-github"></i></a>
                        </section>
                    </div>

                    <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                        {/* © 2020 Copyright: */}
                        <a className="text-white" to="/">Honeybearsynth.com</a>
                    </div>

                </footer>
            
            </div>
        </>


      
        
        
    )
}










