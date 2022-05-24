import React from 'react'
import About from '../../Assest/about.jpg';
import Mission from '../../Assest/Mission.jpg';

function AboutPage() {
  return (
    <div>
      <div className="container">
        <h2 className='h2 text-strong text-center'>About us</h2>
          <div className="row mt-4">
              <div className="col-md-6 col-12">
                <img src={About} className="img-fluid rounded" alt="About Image"/>
              </div>
              <div className="col-md-6 col-12 text-start">
                <small className='text-warning'>About us</small>
                <h2 className='h2 text-strong '>Company History</h2>
                <p className='lead mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis laboriosam beatae animi quidem impedit similique fuga eos commodi illum tempore molestiae voluptatem? Quis libero ipsam culpa facilis similique fugiat inventore. At velit quod esse voluptatem aliquid maiores modi molestias!</p>

              </div>
            </div> 

            {/* mission and vision of Company  */}


            <h2 className='h2 text-strong text-center m-5'>Mission & Vision</h2>
          <div className="row mt-4 ">
              <div className="col-md-6 col-12 order-md-2 order-1">
                <img src={Mission} className="img-fluid rounded" alt="About Image"/>
              </div>
              <div className="col-md-6 col-12 text-start order-md-1 order-2">
                <small className='text-warning'>MISSION & VISSION</small>
                
                <p className='lead mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis laboriosam beatae animi quidem impedit similique fuga eos commodi illum tempore molestiae voluptatem? Quis libero ipsam culpa facilis similique fugiat inventore. At velit quod esse voluptatem aliquid maiores modi molestias!</p>

              </div>
            </div> 

      </div>
    </div>
  )
}

export default AboutPage