import React from 'react'
import styled from 'styled-components';
import { SpinnerCircularFixed } from 'spinners-react';
import { BsCarFrontFill } from "react-icons/bs";
import Colors from '../Colors/Color';





const Loader = () => {
  return (
        <>
            <LoaderStyle>
                <div className="Loader">
                    <div>
                        <BsCarFrontFill className="icone" />
                        <SpinnerCircularFixed size={100} thickness={100} speed={150} color="blue" secondaryColor="rgba(0, 0, 0, 0)" className="spinner"/>
                    </div>
                </div>
            </LoaderStyle>
        </>
    )
}

export default Loader



export const LoaderStyle = styled.section`
    .Loader{
        position:absolute;
        top:50%;
        left:105vh;
        z-index:1;
    }
    .spinner{
        position:relative;
        right:75px;
        opacity:0.7;
    }
    .icone{
        font-size:50px;
        color: ${Colors.BLUE};
        opacity:0.8;
    }
`;