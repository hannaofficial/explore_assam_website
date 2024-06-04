
import bihu_logo from '../images/bihu_dance.png'

import { navLinks,socialLinks } from "../data"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';



const Nav = ()=>{
    return (
        <div>
          <nav className="navbar">
              <div className="nav-center">
                <div className="nav-header">
                 <a href='https://youtu.be/fjjSc9ODmuA?si=c53OftjZdixyGW0z' target='_blank'> <img src={bihu_logo} class="nav-logo" alt="assam_symbol"/></a>
                 <a href='https://assamtourism.gov.in/' target='_blank'> <h3 className='nav_title'>Explore <span className="nav_title2">Assam</span> </h3></a>
                  
                  <button type="button" className="nav-toggle" id="nav-toggle">
                    <i className="fas fa-bars"></i>
                  </button>
                </div>
                
                <ul className="nav-links" id="nav-links">

                  {navLinks.map((link)=>{
                   return (<li key={link.id}>
                    <a href={link.href} className="nav-link"> {link.text} </a>
                  </li>)
                  })}
                  
                </ul>

                <ul className="nav-icons">
                  {socialLinks.map((link)=>{
                   const {id, href, icon} = link
                    return(
                  <li key={id}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="nav-icon"
                      ><FontAwesomeIcon icon={icon} /></a>
                  </li>
                )})}
                <a href='https://www.linkedin.com/in/hannaofficial26/' target='_black'><img class="profile_pic" src='https://media.licdn.com/dms/image/D5603AQFao5448us8TA/profile-displayphoto-shrink_800_800/0/1711003422357?e=1723075200&v=beta&t=U6_YT4koaqe4ZVN5QEvTqXZm56R0PX4H4kJUGShHtOo' /></a>  
                </ul>
              </div>
          </nav>
        </div>
    )
}

export default Nav 