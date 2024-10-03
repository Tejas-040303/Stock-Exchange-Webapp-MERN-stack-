import React from 'react';
import { Link } from 'react-router-dom';

function OpenAccount() {
    return ( 
        <div className='container p-4 text-center mb-5'>
        <div className='row'>
            <h2 className='mt-5'>Open Zerodha Account</h2>
            <p className='text-muted'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed?</p>
            <button className='p-2 btn btn-primary mb-5' style={{width:"20%", margin:"auto"}}><Link className="nav-link active mx-2" aria-current="page" to="/signup">Sign up Now</Link></button>
        </div>
    </div>
     );
}

export default OpenAccount;