import { navLinks, socialLinks } from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = ()=>{
    return(
        <footer class="section footer">
      <ul class="footer-links">
        {navLinks.map((link)=>{
          const {id ,href, text} = link
          return (
            <li key={id} >
          <a href={href} class="footer-link">{text}</a>
            </li>
          )
        })}
       
      </ul>
      <ul class="footer-icons">
      {socialLinks.map((link)=>{
                   const {id, href, icon} = link
                    return(
                  <li key={id}>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="nav-icon"
                      ><FontAwesomeIcon icon={icon} style={{color:'white'}} /></a>
                  </li>
                )})}
      </ul>
      <div class='footer-end'>
        <p class="copyright">
          copyright &copy; Created by Hannanur Rahman
        </p>
        <img class="profile_pic" src='https://media.licdn.com/dms/image/D5603AQFao5448us8TA/profile-displayphoto-shrink_800_800/0/1711003422357?e=1723075200&v=beta&t=U6_YT4koaqe4ZVN5QEvTqXZm56R0PX4H4kJUGShHtOo'/>
      </div>

    </footer>
    )
};

export default Footer;