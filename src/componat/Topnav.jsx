import React from 'react'
import './Topnav.css';
import Ajayss from './img/logol.png';
import {Link} from 'react-router-dom'


export const Topnav = () => {
  return (
    <>
    <div className='navbar'>
      
      <img src={Ajayss} alt="" className='pic' />

 
      <div className='rightbox'>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/project'>Project</Link>
        <Link to='/experience'>Experience</Link>
        <Link to='/Concat'>Contact</Link>
      </div>
    
    
      </div>
    </>
  

  );
}
export default Topnav 