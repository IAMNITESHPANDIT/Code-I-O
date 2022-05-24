import React from 'react'
import Diamond from '../../Assest/CodeIo.png';
import {Link} from 'react-router-dom';
function HomePage() {
  return (
      <div className='container'>
          <div className="row">
              <div className='col-12 pt-2 text-center col-md-6 '>
                  <h2 className='h2 text-start'>Welcome to <strong>Code </strong><span className='text-success'>I/O</span></h2>
                    <p className='text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatum delectus quibusdam aut iusto. Iure ad commodi laboriosam eius fugiat quo nemo. Fugiat quaerat ipsam accusantium dolorem deleniti praesentium voluptas quae enim repudiandae, quam quidem tenetur maxime, eos sit! Enim.
                 sit optio harum quos, dignissimos perferendis vitae itaque obcaecati beatae fugiat, odit iste deserunt ducimus. Alias similique enim soluta explicabo! Corporis voluptates incidunt ad magnam, nam voluptas, neque asperiores accusamus numquam totam, maxime alias voluptatem ex optio provident error labore? Mollitia.
                    </p>
                    <Link to='/form' className='btn btn-outline-primary me-4'>Register Now!</Link>
                    <Link to='/form' className='btn btn-outline-success '>Login Now!</Link>
              </div>
              <div className='col-12 col-md-6 p-4 mb-5 d-none d-md-block mt-5'>
              <img className="img-fluid " alt="Coding logo" src={Diamond}/>
              </div>

          </div>

      </div>
  )
}

export default HomePage;