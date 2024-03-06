import styled from 'styled-components';
import Colors from '../Colors/Color';
import { Home1 } from "../Images/Img";


export const Homestyle = styled.section`

    .Main-home-page {
        width:100%;
        height: 810px;
        position: relative;
        background: url(${Home1});
        background-size: cover;
    }
    .Home-Content{
        position:absolute;
        display:flex;
        z-index:1;
        top:27%;
        left:37%;
        color: ${Colors.WHITE};
    }  
    .Button_icon {
        font-size:50px;
        display:flex;
        gap:10px;
    }
    .Button_icon P {
        font-size:22px;
        margin: 0px;
    }
    .Code-tittle{
        font-size:40px;
    }
    .Car-icon{
        color:${Colors.WHITE};
        margin-bottom:20px;
    }
    .Border{
        height:50px;
        border-right: 2px solid white;
    }
    .Home-buttons{
        width:100%;
        height:40px;
        top:90%;
        position:absolute;
        display:flex;
        flex-direction:row;
        justify-content:center;
        gap:20px;
    }
    .view-button {
        width: 200px;
        height: 50px;
        color: white;
        border-radius: 2px;
        background: linear-gradient(rgba(210, 210, 210, 0.30) 100%, rgba(210, 210, 210, 0.30) 100%);
        backdrop-filter: blur(100px);
        border: 1px solid;
    }
    .Register-button{
        width: 200px;
        height: 50px;
        color: white;
        border: none;
        border-radius: 2px;
        background: linear-gradient(30.99deg, #2061A8 0%, #0078DC 100%);
        backdrop-filter: blur(100px);
    }

 

   
`;