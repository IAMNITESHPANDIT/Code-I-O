import React from 'react'
import Diamond from '../../Assest/CodeIo.png';

function HomePage() {
  return (
      <div className='container'>
          <div className="row">
              <div className='col-12 pt-5 text-center col-md-6'>
                  <h2 className='h2'>Welcome to <strong>Code </strong><span className='text-success'>I/O</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatum delectus quibusdam aut iusto. Iure ad commodi laboriosam eius fugiat quo nemo. Fugiat quaerat ipsam accusantium dolorem deleniti praesentium voluptas quae enim repudiandae, quam quidem tenetur maxime, eos sit! Enim.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sit optio harum quos, dignissimos perferendis vitae itaque obcaecati beatae fugiat, odit iste deserunt ducimus. Alias similique enim soluta explicabo! Corporis voluptates incidunt ad magnam, nam voluptas, neque asperiores accusamus numquam totam, maxime alias voluptatem ex optio provident error labore? Mollitia.
                    </p>
                    <button className='btn btn-outline-primary me-4 p-3'>Register Now!</button>
                    <button className='btn btn-outline-success p-2'>Login Now!</button>
              </div>
              <div className='col-12 col-md-6 p-4 mb-5 d-none d-md-block'>
              <img className="img-fluid" alt="Coding logo" src={Diamond}/>
              </div>

          </div>

      </div>
  )
}

export default HomePage;