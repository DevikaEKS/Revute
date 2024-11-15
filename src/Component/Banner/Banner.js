import React from 'react';
import "./Banner.css";
import student1 from "../Asset/Mask group (34).png";
function Banner() {
  return (
    <div className='container-fluid bgpart p-0 m-0' id='banner'>
        <div className='row p-3 p-lg-5'>
            <div className='col-sm-12 col-md-8'>
             
                <p>WELCOME TO REVUTE</p>
                <h1 className='bannerheading py-2'>We build <span className='supertext'>Sales Superstars</span><br/>to accelerate your Business</h1>
                <p className='py-1'>Master the Sales skills and drive the growth</p>
                <button className='py-sm-1 py-md-3 px-2 px-md-5 m-2 startedbtn'>Get Started</button>
                <button className='py-sm-1 py-md-3 px-2 px-md-5 m-2 startedbtn'>View Case Study</button>
            </div>
           

            <div className='col-sm-12 col-md-4'>
                <img src={student1} alt='WELCOME TO GAINUS' className='img-fluid'/>
            </div>
        </div>
    </div>
  )
}

export default Banner