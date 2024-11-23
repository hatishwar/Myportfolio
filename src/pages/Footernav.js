import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { FaExclamationCircle } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { FaLink } from "react-icons/fa";


function Footernav(){
    return(
        <div className="conatiner-fluid" id="footnav">
            {/* <h1 className="my-5">Contact Us</h1> */}
            <div className="row">
                <div className="col-4">
                    <h3>Contact</h3>
                <FaLocationDot />&nbsp;Address: Jammu City, J&K<br></br>
                <MdAlternateEmail />&nbsp;hatishrandhwal0907[at]gmail[dot]com<br></br>
                <FaPhone />&nbsp; 96221 XXXXX
                </div>
                <div className="col-4">
                <h3>Connect</h3>

                <FaFacebook />&nbsp; Facebook<br></br>
                  <IoLogoTwitter />&nbsp; Twitter<br></br>
                  <FaSquareInstagram />&nbsp; Instagram<br></br>
                  <FaLinkedin />&nbsp; <a href="https://www.linkedin.com/in/hatishwar-singh/" target="_blank">Linkedin</a><br></br>
                  <FaWhatsappSquare />&nbsp; Whatsapp<br></br>
                </div>
                <div className="col-4">
                <h3>Important Links</h3>

                <FaLink />&nbsp;Important links<br></br>
                <MdOutlinePrivacyTip />&nbsp; Privacy Policy<br></br>
                <FaExclamationCircle />&nbsp; T&C<br></br>
                <FaHandsHelping />&nbsp; Hire Me
                </div>
            </div>
        </div>
    )
}

export default Footernav;