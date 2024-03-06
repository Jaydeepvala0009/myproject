import React from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuthenticated } from '../redux/Slice/AuthSlice';
import { Homestyle } from '../Style/Homecss';
import { SiHonda} from "react-icons/si";




const Home = () => {

    const isAuthenticated = useSelector(selectIsAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

 return (
   <>
        <Homestyle>
            <section className="container-fluid p-0">
                <div className="Main-home-page">
                    <div className="Home-Content">
                        <div className='Button_icon'>
                            <Link>                      
                                <SiHonda className='Car-icon'/>
                            </Link>
                            <div>
                                <p>HONDA&nbsp;</p>
                                <p>هوندا&nbsp;</p>
                            </div>
                            <div className="Border my-2"></div>
                        </div>
                        <p className='Code-tittle'>&nbsp;CS234</p>
                    </div>

                    <div className="Home-buttons">
                        <button className="view-button" type="submit">View Details</button>
                        <button className="Register-button" type="submit">Register Now</button>
                    </div>
                </div>
            </section>
        </Homestyle>
   </>
  )
}

export default Home
