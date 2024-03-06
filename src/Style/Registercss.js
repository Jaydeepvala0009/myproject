import styled from 'styled-components';
import Colors from '../Colors/Color';
import { Bagroungimg1 } from '../Images/Img';

export const Registersubcomponent = styled.section`
    .Main-register-page{
        color: ${Colors.WHITE};
    }
    .Main-register-page{
        width: 100%;
        height: 910px;
        background:     
            linear-gradient(243deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 0.01%, rgba(0, 0, 0, 0.00) 100%),
            url(${Bagroungimg1});
        background-size: cover;
    }
    .Register-sub-Content {
        width: 450px;
        height: 720px;        
        position: absolute;
        top: 110px;
        left:59%;
        padding:50px;
        box-shadow: 0 0 10px ${Colors.LOGIN_BOXSHADOW};
        backdrop-filter: blur(20px);
    }
    .Fa-icoon{
        font-size:40px;
    }
    .lable-name{
        padding-top:20px;
        font-size: 32px;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0.59px;
    }
    .first-input{
        width:165px;
    }
    input{
        width:350px;
        height:50px;
        font-size: 16px;
        outline:none;
        background: ${Colors.INPUT_BACKGROUND};
        border: 1px solid ${Colors.WHITE};
        caret-color: ${Colors.WHITE};
        color:${Colors.WHITE};
    }
    .form-group{    
        position: relative;
    }
    .form-group input {
        font-size: 16px;
        position: relative;
        z-index: 1;
        background: ${Colors.INPUT_BACKGROUND};
    }
    .form-group label {
        position: absolute;
        top: 10px;
        left: 20px;
        pointer-events: none;
        transition: 0.3s ease-out;
        z-index: 0;
    }
    .form-group input:focus + label,
    .form-group input:not(:placeholder-shown) + label {
      top: -25px;
      left:0px;
      font-size:15px;
    }
    .Mnumber-start input:focus + label,
    .form-group .Mnumber:not(:placeholder-shown) + label {
      left:-120px;
    }
    .Mnumber-start input:focus + label,
    .Mnumber-start input:not(:focus):not(:placeholder-shown) + label,
    .Mnumber-start input:not(:placeholder-shown) + label {
        left: -120px;
    }
    input:focus {
        border: 3px solid ;
        border-color: ${Colors.WHITE};
    }
    input::placeholder {
        color: ${Colors.WHITE}
    }
    .form-group label.langset {
        right: 20px;
        left: auto;
    }
    .form-group input:focus + label.langset,
    .form-group input:not(:placeholder-shown) + label.langset {
        width: 140px;
        top: -25px;
        right: -65px;
        font-size: 15px;
    }
    .Mnumber-start input:focus + label.langset,
    .form-group .Mnumber:not(:placeholder-shown) + label.langset {
        width:150px;
        right: -140px;
    }
    .Mnumber-start input:focus + label.langset,
    .Mnumber-start input:not(:focus):not(:placeholder-shown) + label.langset {
        width: 150px;
        right: -140px;
    }
    .Password-show-hide.langset {
        margin: -32px 305px 0px 0px;/   
    }
    .form-group input:focus + label.langset.unique-label,
    .form-group input:not(:placeholder-shown) + label.langset.unique-label {
        right: -50px;
    }
    .Main-username{
        display:flex;
        gap:20px
    }
    .selectore-main{
        width: 70px;
        color: #FFFFFF;
        background: transparent;
        border: 0px;
    }
    .Fnumber-input{
        width: 100px;
        height: 49px;
        color: #FFFFFF;
        background: transparent;
        border: 1px solid ${Colors.BORDER};
        padding-left:15px;
    }
    .Fnumber-input option {
        background-color: transparent;
    }
    .Fnumber-input:focus {
        border: 3px solid ;
        border-color: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 100%);
    }
    .Snumber-input{
        width:230px;
    }
    input {
        padding: 10px;
    }
    .Main-check-Box{
        display:flex;
        gap:10px;
    }
    .Check-box{
        width:30px;
        height:20px;
        border: 2px solid ${Colors.BORDER};
        display:grid;
        place-items:center;
    }
    .check-box-text{
        font-size:13px;
        padding-left:10px;
    }
    .register-btn{
        width:100%;
        margin-top:30px;
        display:flex;
        justify-content: center;
        align-item: center;
        gap:25px;
    }
    .register-Button{
        width:350px;
        height: 64px;
        border:none;
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.04) 100%);
        color: ${Colors.WHITE};

    }
    .register-Button.active {
        background-color: blue;
        color: ${Colors.WHITE};
    }
    .error-message p{
        color:${Colors.WHITE};
        font-size: 16px;
        display: flex;
        padding: 15px;
        gap: 10px;
        letter-spacing: 0.60px;
        font-weight: 500;
    }
    .error-message{
        width:300px;
        height:56px;
        position:absolute;
        right:380px;
        top: 0px;
        background-color:${Colors.RED};
    }
    .error-img{
        width:30px;
        height:30px;
        position:absolute;
        left:97%;
        top:13px;
    }
    .Border {
        border: 2px solid red;
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
        margin: -32px 0px 0px 305px;
        z-index: 1;
    }
    .titlle-icon{
        margin-left: 180px;
    }
    .titlle-icon .Fa-icoon {
        margin-left: 130px;
    }
    .Email-Content-icon{
        position:absolute;
        top: 0px;
        right: 280px;
    }
    .Email-icon{
        position:absolute;
        display: inline-block;
        z-index:1;
        top: 10px;
        right: 20px;
    }
    .Tooltip-box {
        display: none;
        position: absolute;
        top: -70px;
        right: 0px;

    }
    .Tooltip-box img{
        width: 240px;
        height: 67px;
    }
    .Tooltip-box p{
        position: absolute;
        top: -10px;
        right: 0px;
        color: ${Colors.BLACK};
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0.59px;
        padding:20px;
    }
    .Email-icon:hover .Tooltip-box {
        display: block;
    }
    .Email-icon.langset .Tooltip-box {
        right:60px;
    }
    .Email-icon.langset .flipped-horizontal {
        transform: scaleX(-1);
    }
    .Fnumber-input option {
        color:${Colors.BLACK};
    }
    .Password-conditon{
        position:absolute;
        right: 62vh;
        bottom: 0vh;    
    }
    .Password-content{
        position:absolute;
        top:0;
        color:${Colors.BLACK};
        padding: 15px 0 0 20px;
    }
    .Password-conditon-langset{
        padding-right:20px;
    }
    .Border-1{
        width: 180px;
        height: 1px;
        background-color:${Colors.BLACK};
        opacity:0.3;
    }
    .Password-content h1{
        font-size: 16px;
    }
    .Password-content p{
        font-size: 11px;
        font-style: normal;
        color: ${Colors.BLACK};
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0.59px;
        margin: 3px;
    }
    .Box-1{
        color:${Colors.BLACK};
        display:flex;
        gap: 10px;
    }
    .Icon-1{
        font-size:20px;
    }
    .Password-box-color {
        color: green;
    }
    .Password-box-color p {
        color: inherit;
    }
   








    

`;
