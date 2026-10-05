import React, { useState, useEffect } from 'react'
import './Heros.css'
import img1 from '../assets/img1.png.jpg'
import img2 from '../assets/img2.png.jpg'
import img3 from '../assets/img3.png.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const slide = [img1, img2, img3]

const Heros = () => {
  const [index, setindex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setindex(index === slide.length - 1 ? 0 : index + 1)
    }, 4000)
    return () => clearTimeout(timer)
  }, [index])

  const goPrev = () => setindex(index === 0 ? slide.length - 1 : index - 1)
  const goNext = () => setindex(index === slide.length - 1 ? 0 : index + 1)

  return (
    <section className='content' style={{ backgroundImage: `url(${slide[index]})` }}>

      <div className='numbers'>
        {slide.map((_, i) => (
          <span
            key={i}
            className={index === i ? 'num active' : 'num'}
            onClick={() => setindex(i)}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
        ))}
      </div>

      <div className='slide-arrows'>
        <button type='button' className='arrow-btn' onClick={goPrev} aria-label='Previous slide'>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button type='button' className='arrow-btn' onClick={goNext} aria-label='Next slide'>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      <div className='ctn'>
        <p>Welcome to Risha's Aestheluxe</p>
        <h1 className='bold'>
          Achieve Your Aesthetic Goals <br /> with Risha's Clinic
        </h1>
        <button className='btn'>Book An Appointment</button>
      </div>

    </section>
  )
}

export default Heros