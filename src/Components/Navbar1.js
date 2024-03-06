import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors/Color';
import { Navlogo1 } from '../Images/Img';
import { IoIosArrowDown } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage, selectLanguage } from '../redux/Slice/LanguageSlice';
import i18 from '../React Localization/i18';



const Navbar1 = () => {

  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectLanguage);

  const handleLanguageChange = (language) => {
    i18.changeLanguage(language);
    dispatch(setLanguage(language));
  };

  return (
    <>
      <Navbar1Style>
        <section className="Main-Navbar-content">
          <div className="Wrapper">
            <div className="Nav">
              <div className="logo">
                <img src={Navlogo1} alt="" />
              </div>
              <div className="select-language">
                <div className="language-dropdown">
                  <span>
                    {currentLanguage}
                    <IoIosArrowDown />
                  </span>
                  <div className="dropdown-content">
                    <button onClick={() => handleLanguageChange('En')}>English</button>
                    <button onClick={() => handleLanguageChange('آر')}>عربي</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Navbar1Style>
    </>
  );
};

export default Navbar1;





export const Navbar1Style = styled.section`
    .Main-Navbar-content{
      width:100%;
      height: 80px;
      position:absolute;
      background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.00) 100%);
      box-shadow: 0px 12px 44px rgba(0, 10, 20, .3);
      backdrop-filter: blur(15);
      color:${Colors.WHITE};
    }
    .Wrapper{
      width: 90%;
      height: 80px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .Nav{
      width:100%;
      display:flex;
      justify-content: space-between;
    }
    .select-language {
      position: relative;
    }
    .language-dropdown {
      cursor: pointer;
    }
    .dropdown-content {
      width:85px;
      display: none;
      position: absolute;
      left: 0px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border: 1px solid #ccc;
      z-index: 1;
    }
    .language-dropdown:hover .dropdown-content {
        display: block;       
    }
    .dropdown-content button {
      width:100%;
      display: block;
      padding: 10px;
      text-decoration: none;
      color: #FFFFFF;
      background-color: transparent;
      border: 1px solid ;
      border-color: ${Colors.WHITE};
    }
`;

