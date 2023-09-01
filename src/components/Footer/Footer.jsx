import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer className="linksFooter">
        <div>            
            <Link to={ "https://www.facebook.com/" } target="_blank"><FontAwesomeIcon icon={faFacebookF}/></Link>
        </div>
         <div>  
            <Link to={ "https://www.instagram.com/" } target="_blank"><FontAwesomeIcon icon={faInstagram} /></Link>
        </div>
        <div>
            <Link to={ "https://web.whatsapp.com/" } target="_blank"><FontAwesomeIcon icon={faWhatsapp} /></Link>
        </div>
         <div>
            <Link to={ "https://www.google.com.ar/maps/preview" } target="_blank"><FontAwesomeIcon icon={faLocationDot} /></Link>
        </div>
    </footer>
  )
}

export default Footer