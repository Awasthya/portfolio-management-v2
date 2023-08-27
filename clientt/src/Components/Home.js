import React, { useContext } from 'react'
import './Home.css';
import Homeimage from './../images/HomeImage.jpg'
import { UserContext } from "../App";
import { NavLink } from 'react-router-dom';
const Home = () => {
  return (
    <div className='Home'>
      <div className='leftContaint'>
            <h3><span className='highlighted-text'>Hii Professionals ,</span><br/> <span className='additional-text'>Get Start Your Career By Building Your and showcase your skils and Experience to your recruiter and Get confirm placement</span></h3>
        <div className="profile-options">
        <NavLink extract="true" to="/signup">
                    <button className='button other primary-btn'>Register {" "}</button>
        </NavLink>
          
          <NavLink extract="true" to="/signin">
            
                  <button className="button other highlighted-btn">Login</button>
          </NavLink>
                </div>
      </div>
    </div>
  )
}

export default Home

//rafce()