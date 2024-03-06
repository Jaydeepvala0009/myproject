import styled from 'styled-components';
import Colors from '../Colors/Color';

export const Navbarstyle = styled.section`  

   
    .Main-Section{
        width:100%;
        height: 165px;
        z-index: 1;
        position: absolute;
        justify-content:center;
        background: linear-gradient(360deg, rgba(0, 0, 0, 0.6) 40%, rgba(0, 0, 0, 1) 100%);
        backdrop-filter: blur(10px);    
    }
    .navbar{
        width:85%;
        height:80px;
        margin: 0 auto;
    }
    .nav-logo{
        width:100%;
    }
    .Second-Nav{
        width:100%;
        height:70px;
        border-top: 2px solid;
        border-color: rgba(255, 255, 255, 0.2);
        margin-top: 10px;
    }
    .Nav-icon-Gap{
        gap:55px;    
        margin-right:25px;
    }
    .Nav-icon{
        font-size:30px;
        padding:0px;
    }
    .Main_icon{
        width:80%;
        justify-content:center;
        margin-bottom:15px;

    }
    .Border{
        height:24px;
        border-right: 2px solid white;
        opacity:0.05;

    }
    .Nav-leftright-icon{
        margin-left:80px;
    }
    .Nav-leftright-icon {
        margin-right:70px;
    }
    .select-language {
        width:50px;
        color:white;
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