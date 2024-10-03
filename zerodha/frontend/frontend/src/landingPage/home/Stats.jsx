import React from 'react';

function Stats() {
    return ( 
        
        <div className='container mt-5 mb-5 p-4'>
            <div className="row p-4">
                <div className="col-6 p-4">
                    <h1 className='mb-5'>Trust with confidence</h1>
                    <h3 className='mt-3'>Customer 1st</h3>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore laudantium exercitationem ab iusto culpa totam.</p>
                    <h3 className='mt-4'>No spam</h3>
                    <p className='text-muted'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique doloribus eligendi, impedit recusandae quae dolor!</p>
                    <h3 className='mt-4'>Zerodha Universe</h3>
                    <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iusto ipsum doloremque enim aliquid dolor?</p>
                    <h3 className='mt-4'>Do better with money</h3>
                    <p className='text-muted'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum enim expedita deleniti, rerum aperiam cupiditate.</p>
                </div>
                <div className="col-6 p-4">
                    <img src="media/images/ecosystem.png" alt="ecosystem Image" style={{width:"100%"}} />
                    <div className='mt-2 mx-4 p-2'>
                        <a href=""  className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href=""  className='mx-4' style={{textDecoration:"none"}}>Try kite demo</a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;