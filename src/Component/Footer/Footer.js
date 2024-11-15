import React from 'react';
import "./Footer.css";
import { Link as Sclink } from "react-scroll"; // Only use this one or the other
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTelegram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className='container-fluid text-center textpart py-2' id='contact'>
            <div className='row'>
                <div className='col-sm-12 col-md-6'>
                    <h5 className='py-2'>Quick Links</h5>
                    <div className='d-flex justify-content-evenly'>
                    <Sclink to="banner" className="nav-link ">
                        <p>Home</p>
                    </Sclink>
                    <Sclink to="services" className="nav-link ">
                        <p>Services</p>
                    </Sclink>
                    <Sclink to="roles" className="nav-link">
                        <p>Roles</p>
                    </Sclink>
                    <Sclink to="banner" className="nav-link">
                        <p>Contact</p>
                    </Sclink>
                    </div>
                </div>

                <div className='col-sm-12 col-md-6'>
<h4>Subscribe</h4>
<div className='subscribebox p-4 rounded-4 d-flex'>
<input type="email" placeholder='Enter your Email ID' className='py-2'/>
{/* <input type='submit' className='submitbtn mx-1 p-2'/> */}
<button type="submit" className="submitbtn mx-1 p-2">
  Submit <FontAwesomeIcon icon={faTelegram} />
</button>
<div className='d-flex justify-content-center ms-auto'>
                <FontAwesomeIcon icon={faWhatsapp} className='m-3'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faFacebook} className='m-3'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faInstagram} className='m-3'></FontAwesomeIcon>
                <FontAwesomeIcon icon={faLinkedin} className='m-3'/>
                <FontAwesomeIcon icon={faTwitter} className='m-3'></FontAwesomeIcon>
                
                </div>
</div>

                </div>              
            </div>

           
<hr/>
            <p className='pt-2'>Copyright &copy; {year}</p>
        </div>
    );
}

export default Footer;
