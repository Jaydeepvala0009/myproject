import React from 'react'
import styled from 'styled-components';
import Colors from '../Colors/Color';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";


const Footer = () => {

  return (
    <>
        <Footerstyle>
            <div className="container-fluid p-0">
                <div className="Footer">
                    <div className="row Footer-Main-Content m-0">
                        <div className="Sub-1">
                            <h6>About Us</h6>
                            <h6>FaQs</h6>
                            <h6>Privacy Policy</h6>
                            <h6>Terms & Conditions</h6>
                            <h6>Cancellation Policy</h6>
                        </div>
                        <div className="Sub-2">
                            <h6>Find Us</h6>
                            <h6>News & Updates</h6>
                            <h6>Careers</h6>
                        </div>
                        <div className="Sub-3">
                            <h6>1800 1800 1800</h6>
                            <h6 >contect@watani.com</h6>
                        </div>
                        <div className="Sub-4">
                            <h6>Follow Us</h6>
                            <div className="row Gap m-0 mt-4">
                                <FaFacebook className="icon"/>
                                <FaTwitter className="icon"/>
                                <FaInstagramSquare className="icon"/>
                                <FaLinkedin className="icon"/>
                                <FaSnapchatGhost className="icon"/>
                            </div>
                        </div>
                        <div className="Rectangle mt-3"></div>  
                    </div>
                    <div className="footer-bottem-content mt-3">
                        <h6>2022 watani All Right Reserved</h6>
                    </div>
                </div>
            </div>
        </Footerstyle>
    </>
  )
}

export default Footer;




export const Footerstyle = styled.section`
    .Footer{
        width:100%;
        height:350px;
        background-color: rgba(24, 27, 32, 1);
    }
    .Footer-Main-Content{
        color: white ;
        justify-content: space-between;
        justify-content: center;
        align-item: center;
        gap:30px;
    }
    .Sub-1, .Sub-2, .Sub-3, .Sub-4{
        width:20%;
        margin-top:5%;
    }
    .Sub-4, .Gap {
        gap:20px;
    }
    .icon{
        font-size:25px;
    }
    .Rectangle{
        width:90%;
        height:1px;
        background-color: white;
    }
    .footer-bottem-content{
        color:white;
        margin-left:5%;
    }

    @media only screen and (max-width:1025px) {
        .Footer h6 {
            font-size: 10px;
        }
        .icon{
            font-size:15px;
        }
    }
`;