import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (  
        <div className='container p-4 text-center'>
            <div className='row'>
                <img src="media/images/homeHero.png" alt="Hero Image" className='mb-5'/>
                <h1 className='mt-5'>Invest Now</h1>
                <p>Open account for free</p>
                <button className='p-2 btn btn-primary mb-5' style={{width:"20%", margin:"auto"}}><Link className="nav-link active mx-2" aria-current="page" to="/signup">Sign up Now</Link></button>
            </div>
        </div>
    );
}

export default Hero;