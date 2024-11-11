import React from 'react'
import { Card, Button } from 'react-bootstrap';
import "./Cardspart.css";
import cardim1 from "../Asset/card1.jpeg";
import cardim2 from "../Asset/card2.jpeg";
import cardim3 from "../Asset/card3.jpeg";
function Cardspart() {
  return (
    <div className='container-fluid ' id='services'>
        <div className='row cardsbg'>
        <h1 className='text-center serviceheading pt-4'>Service Offered</h1>
      <div className="col-sm-12 col-md-4 my-1">
      <Card  className="shadow-sm brd">
      <Card.Img variant="top" src={cardim1} alt="Card image" />
        <Card.Body>
          <Card.Title className='cardtitle'>AI Based Sales Roleplay Training</Card.Title>
          <Card.Text>
          Get real-time training on sales
          </Card.Text>
          <div className='d-flex justify-content-center'>
          <Button variant="primary">Learn More</Button>
          </div>
        </Card.Body>
      </Card>
    </div>

    <div className="col-sm-12 col-md-4 my-1">
      <Card  className="shadow-sm brd">
        <Card.Img variant="top" src={cardim2} alt="Card image" />
        <Card.Body>
          <Card.Title className='cardtitle'>Curated Curriculum on Sales</Card.Title>
          <Card.Text>
            Proven Industry demand Curriculum
          </Card.Text>
          <div className='d-flex justify-content-center'>
          <Button variant="primary">Learn More</Button>
          </div>
        </Card.Body>
      </Card>
    </div>

    <div className="col-sm-12 col-md-4 my-1">
      <Card  className="shadow-sm brd">
        <Card.Img variant="top" src={cardim3} alt="Card image" />
        <Card.Body>
          <Card.Title className='cardtitle'>Personlilized Assistance</Card.Title>
          <Card.Text>
            Get feedback at each level of learning
          </Card.Text>
          <div className='d-flex justify-content-center'>
          <Button variant="primary">Learn More</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
         </div>          
        </div>
  
  )
}

export default Cardspart