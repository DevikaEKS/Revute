import React from 'react'
import "./Footer.css";
function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className='container-fluid text-center textpart py-1' id='contact'>
        <p>Copyright @{year}</p>
    </div>
  )
}

export default Footer