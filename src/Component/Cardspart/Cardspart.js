import React from 'react'
import { Card, Button } from 'react-bootstrap';
import "./Cardspart.css";
import cardim1 from "../Asset/card1.jpeg";
import cardim2 from "../Asset/card2.jpeg";
import cardim3 from "../Asset/card3.jpeg";
function Cardspart() {
  return (
    <div className='container-fluid ' id='services'>
        <div className='row cardsbg py-4'>
        <h1 className='text-center serviceheading py-4'>Service Offered</h1>
      <div className="col-sm-12 col-md-4 my-1">
       
      <div className='card brd'>
  <img src={cardim1} alt="Card image" className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">AI Based Sales Roleplay Training</h5>
    <p className="card-text">Get real-time training on sales</p>
    <button className='learnbtn p-2'>Learn More</button>
  </div>
</div>
</div>

<div className="col-sm-12 col-md-4 my-1">
<div className='card brd'>
  <img src={cardim2} alt="Card image" className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">Curated Curriculum on Sales</h5>
    <p className="card-text">Proven Industry demand Curriculum</p>
    <button className='learnbtn p-2'>Learn More</button>
  </div>
</div>
</div>
<div className="col-sm-12 col-md-4 my-1">
<div className='card brd'>
  <img src={cardim3} alt="Card image" className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">Personlilized Assistance</h5>
    <p className="card-text"> Get feedback at each level of learning</p>
    <button className='learnbtn p-2'>Learn More</button>
  </div>
</div>
</div>

 

    

   
         </div>          
        </div>
  
  )
}

export default Cardspart