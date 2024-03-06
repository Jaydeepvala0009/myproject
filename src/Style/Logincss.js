import styled from 'styled-components';
import Colors from '../Colors/Color';
import { Bagroungimg1 } from '../Images/Img';


export const Loginsubcomponent = styled.section`
   
    .Main-login-page {
        width: 100%;
        height: 910px;
        background: 
            linear-gradient(243deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 0.01%, rgba(0, 0, 0, 0.00) 100%),
            url(${Bagroungimg1});
        background-size: cover;
    }
    .Login-sub-Content {
        width: 470px;
        height: 600px;        
        position: absolute;
        top: 170px;
        left:59%;
        padding:50px;
        box-shadow: 0 0 10px ${Colors.LOGIN_BOXSHADOW};
        backdrop-filter: blur(20px);
    }
    .lable-name{
        font-size: 32px;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.59px;
        color:${Colors.WHITE};
    }
    .form-group, input{
        width: 370px;
        height:50px;
        font-size: 16px;
        outline:none;
        background: ${Colors.INPUT_BACKGROUND};
        border: 1px solid ${Colors.BORDER};
        caret-color: ${Colors.WHITE};
        color:${Colors.WHITE};
    } 
    .form-group {
        position: relative;
    }
   .form-group input {
        font-size: 16px;
        position: relative;
        z-index: 1;
        background: transparent;
        text-align:right:
    }
    .form-group label {
        position: absolute;
        top: 15px;
        left: 10px;
        pointer-events: none;
        transition: 0.3s ease-out;
        z-index: 0;
    }
    .form-group input:focus + label,
    .form-group input:not(:placeholder-shown) + label {
        top:-25px;
        left:0px;
        font-size:15px;
    }
    .form-group label.active {
        top: -20px;
        font-size: 12px;
    }
    input:focus {
        border: 2px solid ;
        border-color: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 100%);
    }
    input::placeholder {
        color: ${Colors.WHITE}
    }
    .Forget-pass{
        margin-left:240px;
    }
    input {
        padding: 10px;
    }
    .Forget-pass a{
        text-decoration: none;
        color:${Colors.WHITE};
    }
    .Login-btn{
        width:100%;
        margin-top:70px;
        display:flex;
        justify-content: center;
        align-item: center;
        gap:25px;
    }
    .Login-Button{
        width:350px;
        height: 64px;
        border:none;
        color:${Colors.WHITE};
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 100%);
    }
    .new-user a {
        text-decoration: none;
        color: ${Colors.WHITE};
    }
    .register-btn{
        margin-top:70px;
        display:flex;
        justify-content: center;
        align-item: center;
        gap:25px;
    }
    .register-Button{
        width:160px;
        height:44px;
        border:none;
        color:${Colors.WHITE};
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 100%);
    }
    .Password-show-hide{
        color: ${Colors.WHITE};
        text-align: right;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.59px;
        text-decoration-line: underline;
        position: absolute;
        margin: -32px 0px 0px 320px;
        z-index: 1;
    }
    .Errors-box p{
        color:${Colors.WHITE};
        font-size: 16px;
        display: flex;
        padding: 15px;
        gap: 10px;
        letter-spacing: 0.60px;
        font-weight: 500;
    }
    .Errors-box{
        width:300px;
        height:56px;
        position:absolute;
        right:405px;
        top:-5px;
        background-color:${Colors.RED};
    }
    .Error-img{
        width:30px;
        height:30px;
        position:absolute;
        left:97%;
        top:13px;
        
    }
    .Border {
        border: 2px solid;
        border-color: ${Colors.RED};
    }
    .Newuser-button{
        border:none;
        background: ${Colors.TRANSPARENT};
        color: ${Colors.WHITE};
    }
   .spinner-border{
        position:absolute;
        bottom:155px;
        right:220px;
    }
    .Toastify {
        z-index: 1000;
    }
    .Login-Button.active {
        background-color: blue;
        color: ${Colors.WHITE};
    }
    .Loader-base{
        filter: blur(2px);
        pointer-events: none;
    }
 

`;
