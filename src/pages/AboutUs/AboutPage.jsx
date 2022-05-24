import React from 'react'
import About from '../../Assest/about.jpg';
import Mission from '../../Assest/Mission.jpg';
import News1 from '../../Assest/news1.jpg';
import News2 from '../../Assest/news2.jpg';
import team1 from '../../Assest/team1.jpg';
import team2 from '../../Assest/team2.jpg';
import team3 from '../../Assest/team3.jpg';
import team4 from '../../Assest/team4.jpg';
import team5 from '../../Assest/team5.jpg';
import team6 from '../../Assest/team6.jpg';


import './about.style.css';
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

            {/* Latest News About Company  */}

          
        <h2 className='h2 text-strong text-center m-5'>Latest News</h2>
          <div className="row mt-4">
              <div className="col-md-6 col-12">
                <img src={News1} className="img-thumbnail rounded" alt="Latest News"/>
                <img src={News2} className="img-thumbnail mt-3 rounded d-md-none" alt="Latest News"/>

              </div>
              <div className="col-md-6 col-12 text-start">
                <small className='text-warning'>VIEW ALL BLOG POST
                <hr className='devider'/>
                </small>
    
                <p className='lead mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, veritatis laboriosam beatae animi quidem impedit similique fuga eos commodi illum tempore molestiae voluptatem? Quis libero ipsam culpa facilis similique fugiat inventore. At velit quod esse voluptatem aliquid maiores modi molestias!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut temporibus, repudiandae facilis magni doloribus, dolor cumque nisi similique tempora pariatur doloremque quam porro nam alias quidem quo impedit ab id!
                </p>

              </div>
            </div> 


            {/* ------Our Team Section goes here----- */}

        <h2 className='h2 text-strong text-center m-5'>Our Team</h2>
        <p className='lead mb-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum animi eum quas quo, omnis minus.</p>
        <div className="row">

          <div className="col-12 col-md-3 text-center">
            <img src={Ceo} className="img-fluid img1" alt="Latest News" />
            
            <h4>Nitesh Pandey</h4>
            <p>FOUNDER & CEO</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id accusamus nesciunt, aliquam iste quod voluptas.</p>
          </div>

          <div className="col-12 col-md-3 text-center">
            <img src={Ceo} className="img-fluid img1" alt="Latest News" />
            
            <h4>Nitesh Pandey</h4>
            <p>FOUNDER & CEO</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id accusamus nesciunt, aliquam iste quod voluptas.</p>
          </div>

          <div className="col-12 col-md-3"></div>
          <div className="col-12 col-md-3"></div>
        </div>







      </div>
    </div>
  )
}

export default AboutPage