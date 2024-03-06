import React, { useState } from 'react';
import styled from 'styled-components';
import Colors from '../Colors/Color';
import { Link, useNavigate } from 'react-router-dom';
import { FaCar, FaSadCry } from "react-icons/fa";
import { ImBlogger2 } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { PiShoppingBagFill } from "react-icons/pi";
import { MdFindInPage } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { handlepassClose} from '../redux/Slice/SidebarSlice';
import { logoutUser, selectUser} from '../redux/Slice/LogoutSlice';
import { useDispatch, useSelector } from 'react-redux';




const Sidebar = () => {


  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handlepass = () => {
    dispatch(handlepassClose());
  };

  const handleLogout = () => {
    dispatch(logoutUser());
      localStorage.removeItem('user')
      navigate("/Login");
  };




  return (
    <Sidebarstyle>
      <section className="container-fluid p-0">
        <div className="sidebar-main-section">
          <div className="Main-menu">
            <div className="sidebar-top-section">
              <h4>MENU</h4>
            </div>
            <div className="Cross-icon">
              <div className=''>
                <AiOutlineClose style={{fontSize:"30px"}} onClick={handlepass}/>
              </div>
            </div>
          </div>

          <div className="Sidebar-Border"></div>

          <div className="Sidebar-buttons">
            <button type="button" onClick={handleLogout}>Log Out</button>
            <button type="button">Delete Account</button>
          </div>

          <div className="Sidebar-Border mt-5"></div>

          <div className="Sidebar-pages ml-3 mt-3">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-light mt-2" to="">
                  <FaCar />  &nbsp;&nbsp;Compare
                </Link>
                <div className="Sidebar-Border-link mt-3"></div>

                <Link className="nav-link text-light mt-3" to="">
                  <MdFindInPage />  &nbsp;&nbsp;Find Us
                </Link>
                <Link className="nav-link text-light mt-3" to="">
                  <ImBlogger2 />&nbsp;&nbsp;Blog & Updates
                </Link>
                <Link className="nav-link text-light mt-3" to="">
                  <PiShoppingBagFill />  &nbsp;&nbsp;Careers
                </Link>
                <Link className="nav-link text-light mt-3" to="">
                  <IoCall />&nbsp;&nbsp;Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Sidebarstyle>
  );
}

export default Sidebar;





export const Sidebarstyle = styled.section`

  .sidebar-main-section{
    width:30%;
    height:810px;
    top:-67px;
    right:0px;
    margin-top:5.3%;
    position: fixed;
    color:white;
    background: linear-gradient(180deg, #000000 100%, rgba(0, 0, 0, 0.4) 100%);
    backdrop-filter: blur(10px);    
    z-index:1;
  }
  .sidebar-top-section{
    display:flex;
    justify-content:space-between;
    padding:20px;
  }
  .Sidebar-buttons{
    margin-top:40px;
    justify-content: center;
    align-item: center;
    display:flex;
    gap:10%;
  }
  button{
    width:35%;
    height:40px;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    opacity:0.9;   
    border: 1.5px solid;
  }
  .Sidebar-Border{
    width:90%;
    height:0.5px;
    margin: 0 auto;
    background-color:white;
    opacity:0.3;

  }
  .Main-menu{
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .Cross-icon{
    padding:20px;
  }
  .Sidebar-Border-link{
    width:95%;
    height:0.5px;
    margin-left:5px;
    background-color:white;
    opacity:0.3;
  }
`;


    