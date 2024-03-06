import React,{useEffect , useState, useContext} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Navlogo1} from '../Images/Img.js';
import { HiMenu,HiMenuAlt1} from "react-icons/hi";
import Sidebar from "../Pages/Sidebar.js"; 
import { Navbarstyle } from '../Style/Navbarcss.js';
import { SiHonda,SiToyota,SiSuzuki,SiTata,SiKia,SiVolkswagen,SiAudi,SiMazda } from "react-icons/si";
import { RiArrowLeftDoubleLine , RiArrowRightDoubleLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { handlepassClose, handlepassShow,isSate} from '../redux/Slice/SidebarSlice.js';
import { IoIosArrowDown } from 'react-icons/io';
  import { setLanguage, selectLanguage } from '../redux/Slice/LanguageSlice';
import i18 from '../React Localization/i18';



const Navbar = () => {
  
  const dispatch = useDispatch();
  const isSateValue = useSelector(isSate);

  const currentLanguage = useSelector(selectLanguage);

  const handleLanguageChange = (language) => {
    i18.changeLanguage(language);
    dispatch(setLanguage(language));
  };


  const handlepass = () => {
    if (isSateValue) {
      dispatch(handlepassClose());
    } else {
      dispatch(handlepassShow());
    }
  };

 
  return (
    <>
      <Navbarstyle>
      <section className='Main-Section'>
        <section className="container-fluid p-0">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <Link className="navbar-brand" to="#">
              <img src={Navlogo1} className="nav-logo" alt="" />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon text-light" style={{fontSize:"10px"}}></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent-1">  
              <ul className="navbar-nav ml-auto">
                <li className="nav-item mr-3">
                    <Link className="nav-link text-light" to="#">All</Link>
                </li>
                <div className="Border my-2 mr-3"></div>

                <li className="nav-item mr-3">
                    <Link className="nav-link text-light" to="#">Hatchback</Link>
                </li>
                <div className="Border my-2 mr-3"></div>

                <li className="nav-item mr-3">
                    <Link className="nav-link text-light" to="#">Seden</Link>
                </li>
                <div className="Border my-2 mr-3"></div>

                <li className="nav-item mr-3">
                    <Link className="nav-link text-light" to="#">SUV</Link>
                </li>
                <div className="Border my-2 mr-3"></div>

                <li className="nav-item mr-3">
                    <Link className="nav-link text-light" to="#">Pick Ups</Link>
                </li>

                <div className="Border my-2 mr-1"></div>

                <li className="nav-item nav-link ml-3">
                  <div className="select-language">
                    <div className="language-dropdown">
                      <span>
                        {currentLanguage}
                        &nbsp;&nbsp;&nbsp;<IoIosArrowDown />
                      </span>
                      <div className="dropdown-content">
                        <button onClick={() => handleLanguageChange('En')}>English</button>
                        <button onClick={() => handleLanguageChange('آر')}>عربي</button>
                      </div>
                    </div>
                  </div>
                </li>
              
                <div className="Border my-2 ml-3"></div>

                <li className="nav-item ml-4">
                  <Link className="nav-link text-light" to="#">
                    <HiMenu style={{fontSize:"25px"}} onClick={handlepass}/>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </section>
        {isSateValue ? <Sidebar/> : null}

        <section className="Second-Nav">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse Main_icon" id="navbarSupportedContent">
              <ul className="navbar-nav Nav-icon-Gap">
                <li className="nav-item">
                  <Link className="nav-link Nav-leftright-icon text-light" to="#">
                    <RiArrowLeftDoubleLine />
                  </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link Nav-icon text-light" to="#">
                        <SiHonda />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  Nav-icon text-light" to="#" >
                        <SiToyota />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  Nav-icon text-light" to="#" >
                        <SiSuzuki />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  Nav-icon text-light" to="#" >
                        <SiTata />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  Nav-icon text-light" to="#" >
                        <SiKia />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  Nav-icon text-light" to="#" >
                        <SiMazda />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  Nav-icon text-light" to="#" >
                        <SiAudi />
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link  Nav-icon text-light" to="#" >
                        <SiVolkswagen />
                    </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link Nav-leftright-icon text-light" to="#">
                    <RiArrowRightDoubleLine />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </section>
     </Navbarstyle>
    </>
  )
}

export default Navbar
