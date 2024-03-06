import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useSelector } from 'react-redux';




function App() {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);


  return (
    <>
      <BrowserRouter>
        {/* {isAuthenticated && <Navbar/>} */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="" />} />
            <Route path="Login" element={<Login />} />
            <Route path="Register" element={<Register />} />


            {isAuthenticated ? (
              <>               
                <Route path="/" element={<Navigate to="Home" />} />

              </>
            ) : (
              <>
              </>
            )}
          </Routes>
        {isAuthenticated && <Footer />}
      </BrowserRouter>
    </>
  );
}

export default App;
