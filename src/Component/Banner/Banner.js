import React from 'react';
import "./Banner.css";
import student1 from "../Asset/aigirl.png";
function Banner() {
  return (
    <div className='container-fluid bgpart p-0 m-0'>
        <div className='row p-5'>
            <div className='col-sm-12 col-md-6 p-4'>
                <p>WELCOME TO REVUTE</p>
                <h1 className='bannerheading py-2'>We build <span className='supertext'>Sales Superstars</span> to accelerate your Business</h1>
                <p className='py-1'>Master the Sales skills and drive the growth</p>
                <button className='py-3 px-5 m-2 startedbtn'>Get Started</button>
                <button className='py-3 px-5 m-2 startedbtn'>View Case Study</button>
            </div>


            <div className='col-sm-12 col-md-6'>
                <img src={student1} alt='WELCOME TO GAINUS' className='impart'/>
            </div>
        </div>
    </div>
  )
}

export default Banner