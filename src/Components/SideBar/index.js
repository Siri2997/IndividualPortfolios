import { Link, NavLink } from "react-router-dom";
import "./index.scss"
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Sidebar = () =>(
    <>
    <div className="nav-bar">
           {/* Adding Logos to portfolio */}
        <Link className="logo" to = '/'>
            <img src={LogoS} alt="logo" />  
            {/*<img className="sublogo" src={LogoSubtitle} alt="slobodan" /> */}
            
        </Link>
        <h4 style={{color: "#ffd700"}}>Sireesha M</h4>

        {/* Adding Profile Icons to portfolio */}

        <nav>
            <NavLink exact = "true" activeclassname = "active" to ="/">
                <FontAwesomeIcon icon={faHome} color = "#4d4d4e" />
            </NavLink>

            <NavLink exact = "true" activeclassname = "active" className = "about-link" to ="/about">
                <FontAwesomeIcon icon={faUser} color = "#4d4d4e" />
            </NavLink>

            <NavLink exact = "true" activeclassname = "active" className= "contact-link" to ="/contact">
                <FontAwesomeIcon icon={faEnvelope} color = "#4d4d4e" />
            </NavLink>
        </nav>

        {/* Adding social links to portfolio */}

        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sireesha-maguluri-760b1b140/">
                    <FontAwesomeIcon icon = {faLinkedin} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/Siri2997">
                    <FontAwesomeIcon icon = {faGithub} color="#4d4d4e" />
                </a>
            </li>

            


        </ul>
    </div>
     </>
)

export default Sidebar;