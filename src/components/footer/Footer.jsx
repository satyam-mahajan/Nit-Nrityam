import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <footer className="footer">
               <h2 className="first">
                  Nrityam : The Dance Club NITRR
               </h2>
               <div className="social item">
               <a href="#" target="_blank">
               <FontAwesomeIcon icon={faGithub} />
                </a>

                <a href="#" target="_blank" >
                    <FontAwesomeIcon icon={faFacebook}  />
                </a>

                <a href="#" target="_blank">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>

               </div> 
              
               <p className="copyright">
                 Nrityam NITRR @2022
               </p>
               <h6>(Mady By Harshdeep and Satyam)</h6>
        </footer>
    );
};

export default Footer;