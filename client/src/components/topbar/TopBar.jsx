import React, { useContext } from 'react'
import "./topbar.css"
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';



export default function TopBar() {
  const { user,dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const handleLogout = () =>{
    dispatch({type:"LOGOUT"});
  }
  return (

    <div className="top">
        <div className="topLeft">
        <a href='https://www.linkedin.com/in/siddharth-kumar-20bb57261/'><i className="topIcon fa-brands fa-linkedin fa-2xl"></i></a>
        <i className="topIcon fa-solid fa-envelope fa-2xl"></i>
        <a href='https://github.com/siddofficial13'><i className="topIcon fa-brands fa-github fa-2xl"></i></a>
        <a href='https://www.instagram.com/siddharthkr13/'><i className="topIcon fa-brands fa-instagram fa-2xl"></i></a>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="TopListItem">
                  <Link to="/" className='link'>
                  HOME
                  </Link>
                </li>
                <li className="TopListItem">
                <Link to="/about" className='link'>
                ABOUT US
                </Link>
                </li>
                {/* <li className="TopListItem">
                <Link to="/" className='link'>
                CONTACT
                </Link>
                </li> */}
                <li className="TopListItem">
                <Link to="/write" className='link'>
                WRITE
                </Link>
                </li>
                <li className="TopListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
            </ul>
        </div>
        <div className="topRight">
            {
              user ? (
                <Link to="/settings">
                <img
                 className="topImg"
                 src={PF+user.profilePic}
                 alt=""
              />
              </Link>
              ) 
              : 
              ( 
                <ul className="topList">
                <li className="TopListItem">
                <Link to="/login" className='link btn btn-danger' role='button'style={{fontFamily:"'Varela', sans-serif"}}>
                  LOGIN
                  </Link>
                </li>
                <li className="TopListItem">
                <Link to="/register" className='link btn btn-dark' role='button'style={{fontFamily:"'Varela', sans-serif"}}>
                  REGISTER
                  </Link>
                </li>  
              </ul>
                )
            }
            <i className="topSearchIcon fa-solid fa-magnifying-glass fa-2xl"></i>
        </div>
    </div>
  )
}
