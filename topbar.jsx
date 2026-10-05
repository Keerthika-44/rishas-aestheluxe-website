import React from 'react'
import './Topbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbar-inner'>

        <div className='topbar-left'>
          <FontAwesomeIcon icon={faClock} className='topbar-icon' />
          <p>
            Clinic Timings - Morning - <b>10 am to 1 pm | Evening - 2 pm to 8 pm</b>
          </p>
        </div>

        <div className='topbar-right'>
          <a href='tel:+914224928475'>
            <FontAwesomeIcon icon={faPhone} className='topbar-icon' />
            <span>0422 4928475 | +91 63859 40119</span>
          </a>

          <a href='mailto:info@rishasaestheluxe.com'>
            <FontAwesomeIcon icon={faEnvelope} className='topbar-icon' />
            <span>info@rishasaestheluxe.com</span>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Topbar