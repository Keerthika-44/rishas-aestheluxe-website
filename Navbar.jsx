import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const close = () => setOpen(false)

  return (
    <header className='header'>

      <nav className='navbar'>
        <Link to='/' onClick={close}>
          <img className='logo' src='/logo.png' alt='Logo' />
        </Link>

        <ul className='nav-links'>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to='/' onClick={close}>Home</Link>
          </li>
          <li onClick={() => setOpen(true)}>Skin Care</li>
          <li onClick={() => setOpen(true)}>Hair Care</li>
          <li className={location.pathname === '/contact' ? 'active' : ''}>
            <Link to='/contact' onClick={close}>Contact Us</Link>
          </li>
        </ul>

        <div className='navbar-right'>
          <Link to='/book' className='book-btn' onClick={close}>
            Book Now
          </Link>
          <button
            className={open ? 'menu-btn is-open' : 'menu-btn'}
            onClick={() => setOpen(!open)}
            aria-label='Menu'
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={open ? 'mega-menu show' : 'mega-menu'}>
        <div className='mobile-links'>
          <Link to='/' onClick={close}>Home</Link>
          <Link to='/contact' onClick={close}>Contact Us</Link>
        </div>

        <div className='mega-box'>
          <h3>About US</h3>
          <ul>
            <li><Link to='/about/why-choose-us' onClick={close}>Why Choose US</Link></li>
            <li><Link to='/about/meet-our-doctors' onClick={close}>Meet Our Doctors</Link></li>
            <li><Link to='/about/our-vision' onClick={close}>Our Vision</Link></li>
            <li><Link to='/about/our-mission' onClick={close}>Our Mission</Link></li>
          </ul>
        </div>

        <div className='mega-box'>
          <h3>Skin Care</h3>
          <div className='skin-columns'>
            <ul>
              <li><Link to='/skin-care/laser-hair-removal-treatment' onClick={close}>Laser Hair Removal Treatment</Link></li>
              <li><Link to='/skin-care/lip-pigmentation-treatment' onClick={close}>Lip Pigmentation Treatment</Link></li>
              <li><Link to='/skin-care/mnrf-treatment' onClick={close}>MNRF Treatment</Link></li>
              <li><Link to='/skin-care/underarm-pigmentation-treatment' onClick={close}>Underarm Pigmentation Treatment</Link></li>
              <li><Link to='/skin-care/skin-brighten-pigmentation-treatment' onClick={close}>Skin Brighten Pigmentation Treatment</Link></li>
              <li><Link to='/skin-care/microblading-treatment' onClick={close}>Microblading Treatment</Link></li>
              <li><Link to='/skin-care/glass-glow-treatment' onClick={close}>Glass Glow Treatment</Link></li>
              <li><Link to='/skin-care/tattoo-scar-removal-treatment' onClick={close}>Tattoo Scar Removal Treatment</Link></li>
              <li><Link to='/skin-care/botox-and-fillers' onClick={close}>Botox & fillers</Link></li>
              <li><Link to='/skin-care/face-lifts' onClick={close}>Face lifts</Link></li>
              <li><Link to='/skin-care/face-body-contouring-procedures' onClick={close}>Face/Body Contouring Procedures</Link></li>
            </ul>
            <ul>
              <li><Link to='/skin-care/chemical-peels-treatment' onClick={close}>Chemical Peels Treatment</Link></li>
              <li><Link to='/skin-care/hydrafacial-treatment' onClick={close}>HydraFacial Treatment</Link></li>
              <li><Link to='/skin-care/microdermabrasion-treatment' onClick={close}>Microdermabrasion Treatment</Link></li>
              <li><Link to='/skin-care/micro-needling-treatment' onClick={close}>Micro Needling Treatment</Link></li>
            </ul>
          </div>
        </div>

        <div className='mega-box'>
          <h3>Hair Care</h3>
          <ul>
            <li><Link to='/hair-care/gfc-treatment' onClick={close}>GFC Treatment</Link></li>
            <li><Link to='/hair-care/hair-implant-treatment' onClick={close}>Hair Implant Treatment</Link></li>
            <li><Link to='/hair-care/oily-dandruff-treatment' onClick={close}>Oily Dandruff Treatment</Link></li>
            <li><Link to='/hair-care/hair-staining-treatment' onClick={close}>Hair Staining Treatment</Link></li>
            <li><Link to='/hair-care/lice-treatment' onClick={close}>Lice Treatment</Link></li>
          </ul>
        </div>

        <div className='mega-box'>
          <h3>Articles</h3>
          <ul>
            <li><Link to='/articles/new-articles' onClick={close}>New Articles</Link></li>
            <li><Link to='/articles/top-articles' onClick={close}>Top Articles</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar