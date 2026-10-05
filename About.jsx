import React from 'react'
import about from '../assets/about.png'
import './About.css'

const AboutUs = () => {
  return (
    <section className='about-section'>
      <div className='about-images'>
        <div className='about-img-wrap top'>
          <img src={about} alt='Skin care treatment at Risha Aestheluxe' />
        </div>
       
      </div>

      <div className='about-content'>
        <p className='about-label'>About Us</p>
        <h2 className='about-heading'>
          Your Trusted Partner in Advanced Skin, Hair, and Cosmetic Care
        </h2>

        <p className='about-text'>
          At Risha's Clinic, we are committed to enhancing your natural beauty with
          cutting-edge medical and cosmetic treatments. Located in the heart of
          Coimbatore, our clinic provides a serene environment where you can achieve
          your aesthetic goals with the help of our highly skilled doctors.
        </p>

        <p className='about-text'>
          Our expert team, led by Dr. Rani Kumaravel, Dr. G. Sudarmani, and Dr. Manju S,
          specializes in a wide range of services, including skin rejuvenation, hair
          restoration, and comprehensive cosmetic procedures.
        </p>

        <button className='know-more-btn'>Know More</button>
      </div>
    </section>
  )
}

export default AboutUs