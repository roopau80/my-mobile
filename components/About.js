import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <h1 className='text-primary mb-4 fw-bold'>About us</h1>
            <p className='lead fs-6 mb-4'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Iusto non magni expedita rem nisi perspiciatis labore distinctio laboriosam maiores, numquamvoluptate optio magnam asperiores quisquam explicabo quidem quam necessitatibus animi, vitae doloribus quasi quia. Esse maiores at, mollitia quisquam quasi rem voluptates a! Sequi pariatur quam Lorem ipsum dolor sit amet, consectetur adipisicing elit.Iusto non magni expedita rem nisi perspiciatis labore distinctio laboriosam maiores, numquamvoluptate optio magnam asperiores quisquam explicabo quidem quam necessitatibus animi, vitae doloribus quasi quia. Esse maiores at, mollitia quisquam quasi rem voluptates a! Sequi pariatur quam Lorem ipsum dolor sit amet, consectetur adipisicing elit.Iusto non magni expedita rem nisi perspiciatis labore distinctio laboriosam maiores, numquamvoluptate optio magnam asperiores quisquam explicabo quidem quam necessitatibus animi, vitae doloribus quasi quia.

            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
            

          </div>
          <div className='col-md-6 d-flex justify-content-center'>
            <img src={process.env.PUBLIC_URL +'/assets/images/about.webp'} alt='about-us' height="500px" width="600px" ></img>

          </div>

        </div>
      </div>

      
    </div>
  )
}

export default About