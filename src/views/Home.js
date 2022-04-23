import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <>
            <h1 className='text-center my-5'>Hello World</h1>
            <div className="card mx-auto" style={{maxWidth: "700px"}}>
                <div className="row g-2">
                    <div className="col-md-6">
                        <img src="https://unsplash.it/600/400" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">THIS IS WHERE YOU WILL SIGN UP OR LOG IN</h5>
                            <p className="card-text">I think this is going to be more a slider</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            <div className='d-flex justify-content-around'>
                                <button className='btn btn-primary' > Sign up</button><button className='btn btn-primary'> Log In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            </>
        )
    }
}

