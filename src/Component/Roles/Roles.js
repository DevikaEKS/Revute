import React from 'react';
import './Roles.css';
import rolesimg from "../Asset/Group 80.png";
function Roles() {
  return (
    <div className="container-fluid bgclr" id='roles'>
      <h1 className='text-center text-light py-3'>Roles</h1>
      <img src={rolesimg} alt='Roles' className='img-fluid'/>
    </div>
  );
}

export default Roles;
