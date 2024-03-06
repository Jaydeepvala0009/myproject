import { React , useState } from 'react';
import { useNavigate } from 'react-router-dom';
import usetranslation from '../React Localization/usetranslation';
import i18n from '../React Localization/i18';
import Navbar1 from '../Components/Navbar1';
import Loginfooter from '../Components/Loginfooter';
import { Registersubcomponent } from '../Style/Registercss';
import countryCode from '../JasonFile/CountryCode.json';
import { HiOutlineArrowNarrowRight , HiOutlineArrowNarrowLeft , HiCheck } from "react-icons/hi";
import { CgRadioCheck } from "react-icons/cg";
import { FaRegCheckCircle } from "react-icons/fa";
import {Emailcontentimg, Emailicon, Error1, Passcontent } from "../Images/Img";
import { toast } from 'react-toastify';


const Register = () => {

  const navigate = useNavigate();
  const t = usetranslation();
  const langDirection = i18n.language === "آر" ? "rtl" : "ltr";
  const lang = i18n.language === "آر";
   
  const [Fname, setFname] = useState("")
  const [Lname, setLname] = useState("")
  const [Email, setEmail] = useState("");
  const [Mnumber, setMnumber] = useState("");
  const [Password, setPassword] = useState("");
  const [Conpassword, setConpassword] = useState("");
  const [placeholder, setplaceholder] = useState('');
  const [check, setCheck] = useState(false);
  const [error, setError] = useState("");
  const [Passtoglle, setPasstoglle] = useState(false);
  const [Compasstoglle, setCompasstoglle] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countries, setCountries] = useState(countryCode.countries);
  const [isLengthValid, setLengthValid] = useState(false);
  const [isUppercaseValid, setUppercaseValid] = useState(false);
  const [isLowercaseValid, setLowercaseValid] = useState(false);
  const [isNumberValid, setNumberValid] = useState(false);
  const [isSpecialCharValid, setSpecialCharValid] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);

  const checkPasswordConditions = (password) => {
    setLengthValid(password.length >= 8 && password.length <= 15);
    setUppercaseValid(/[A-Z]/.test(password));
    setLowercaseValid(/[a-z]/.test(password));
    setNumberValid(/\d/.test(password));
    setSpecialCharValid(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password));
  };
  
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordConditions(newPassword);
  };
  
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);    
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };
  
  const handlePasswordBlur = () => {
    setPasswordFocused(false);
  };

  const checkhandle = () => {
    setCheck(!check);
  };

  const passtoglle = () => {
    setPasstoglle(!Passtoglle);
  }

  const compasstoglle = () => {
    setCompasstoglle(!Compasstoglle);
  }
  
  // const onSubmit = async (e) => {
  //   console.log('onSubmit: ', onSubmit);
  //   e.preventDefault();
  //     if (Password !== Conpassword) {
  //       setError('Password Doesn’t Match');
  //     } else { 
  //         const response = await fetch("https://reactwatani-default-rtdb.firebaseio.com/userData.json", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           Fname:Fname,
  //           Lname:Lname,
  //           Email: Email,
  //           Password: Password,
  //         }),
  //       });
  //       if (response) {
  //         console.log('Data posted successfully');
  //       } else {
  //         console.error('Error posting data to Firebase');
  //       }
  //     };
  //     dclear();
  //     navigate('/Login');
  // };


  const onSubmit = async (e) => {
    e.preventDefault();  
    if (Password !== Conpassword) {
      setError('Password Doesn’t Match');
      return;
    }
    try {
      const response = await fetch("https://reactwatani-default-rtdb.firebaseio.com/userData.json");
      const existingUserData = await response.json();  
      if (existingUserData) {
        const userExists = Object.values(existingUserData).some(user => user.Email === Email && user.Mnumber === Mnumber);
        if (userExists) {
          toast.error('User with the same data already registered');
        }
      }  
      const postResponse = await fetch("https://reactwatani-default-rtdb.firebaseio.com/userData.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Fname: Fname,
          Lname: Lname,
          Email: Email,
          Password: Password,
          Mnumber: Mnumber,
        }),
      });
  
      if (postResponse.ok) {
        toast.success('Data posted successfully');
        dclear();
        navigate('/Login');
      } else {
        toast.error('Error posting data to Firebase');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      toast.error('An error occurred. Please try again.');
    }
  };
  
  
  
      
  const dclear = () => { 
    setFname("");
    setLname("");
    setEmail("");
    setMnumber("");
    setPassword("");
    setConpassword("");
  }

  const isFormValid = (
    Fname !== '' &&
    Lname !== '' &&
    Email !== '' &&
    Mnumber !== '' &&
    Password !== '' &&
    Conpassword !== '' &&
    check
  )

  return (
    <>
      <Registersubcomponent>
        <section className="container-fluid p-0"  Dir ={langDirection}>
          <div className="Main-register-page">
            <Navbar1/>
              <section className="User-register">  
                <div className="Register-sub-Content">
                  <form className="Register-main-form" onSubmit={onSubmit} noValidate>
                    <div  className={lang ? "titlle-icon" : ""}>
                      {lang ? <HiOutlineArrowNarrowRight className="Fa-icoon"/> : <HiOutlineArrowNarrowLeft className="Fa-icoon"/>  }
                      <p className="lable-name">{t('title1')}</p>
                    </div>

                    <div className="Main-username">
                      <div className={`form-group mt-3 ${lang ? "langset" : ""}`}>
                        <input className="first-input" type="firstname" id="myInput" placeholder={placeholder} value={Fname} onChange={(e) => setFname(e.target.value)} />
                        <label htmlFor="myInput" className={lang ? "langset" : ""}>{t("Firstname")}</label>
                      </div>
                      <div className="form-group mt-3">
                        <input className="first-input" type="lastname" id="myInput" value={Lname} placeholder={placeholder} onChange={(e) => setLname(e.target.value)} />
                        <label htmlFor="myInput" className={lang ? "langset" : ""}>{t("Lastname")}</label>
                      </div>
                    </div>

                    <div className="form-group mt-2">
                      <input type="email" id="myInput" value={Email} placeholder={placeholder} onChange ={(e) => setEmail(e.target.value)}/>
                      <label htmlFor="myInput" className={lang ? "langset unique-label" : "unique-label"}>
                        {t('emailPlaceholder')}
                      </label>
                      <div className={`Email-icon ${lang ? "langset" : ""}`}>
                        <img src={Emailicon} alt="" className={lang ? "Email-Content-icon" : ""}/>
                        <div className="Tooltip-box">
                          <img src={Emailcontentimg} className="flipped-horizontal"  alt="" />
                          <p>{t("Emailcontent")}</p>
                        </div>
                      </div>
                    </div>

                    <div className="Main-username">
                      <div className="form-group">
                        <select className="Fnumber-input mt-2" onChange={handleCountryChange} value={''}>
                            <option>{`${selectedCountry ? selectedCountry : "+966"}`}</option>
                          {countries.map((country, index) => (
                            <option key={index} value={country.code} label={`${country.name} (${country.code})`} />
                          ))}
                        </select>
                      </div>
                      <div className="form-group Mnumber-start mt-2">
                        <input className="Snumber-input" type="text" id="myInput" placeholder={placeholder} value={Mnumber} onChange={(e) => setMnumber(e.target.value)}/>
                        <label htmlFor="myInput" className={`"Mnumber" ${lang ? "langset" : ""}`}>
                        {t("Mnumber")}
                        </label>
                      </div>
                    </div>

                    <div className="form-group mt-2">
                      <input type= {Passtoglle ? "text" : "Password"} id="myInput" value={Password} placeholder={placeholder} onChange={handlePasswordChange} onFocus={handlePasswordFocus} onBlur={handlePasswordBlur}/>
                      <label htmlFor="myInput" className={lang ? "langset" : ""} >{t('passwordPlaceholder')}</label>   
                      <div className={`Password-show-hide ${lang ? "langset" : ""}`}>
                        <div>
                          {!Passtoglle ? <p onClick={passtoglle}>{t('Show')}</p> : <p onClick={passtoglle}>{t('Hide')}</p>}
                        </div>
                      </div>
                      {isPasswordFocused && (
                        <div className="Password-conditon">
                          <img src={Passcontent} alt="icon-img" />
                          <div className={`Password-content ${lang ? "Password-conditon-langset" : ""}`}>
                            <h1>{t("PasswordTitlle")}</h1>
                            <div className="Border-1 mt-3"></div>
                            <div className={`Box-1 mt-3 ${isLengthValid ? "Password-box-color" : ""}`}>
                              {!isLengthValid ? <CgRadioCheck className="Icon-1"/> : <FaRegCheckCircle className="Icon-1" />}
                              <p>{t("LengthValid")}</p>
                            </div>
                            <div className={`Box-1 ${isUppercaseValid ? "Password-box-color" : ""}`}>
                              {!isUppercaseValid ? <CgRadioCheck className="Icon-1"/> : <FaRegCheckCircle className="Icon-1" />}
                              <p>{t("UppercaseValid")}</p>  
                            </div>
                            <div className={`Box-1 ${isLowercaseValid ? "Password-box-color" : ""}`}>
                              {!isLowercaseValid ? <CgRadioCheck className="Icon-1"/> : <FaRegCheckCircle className="Icon-1" />}
                              <p>{t("LowercaseValid")}</p>
                            </div>
                            <div className={`Box-1 ${isNumberValid ? "Password-box-color" : ""}`}>
                              {!isNumberValid ? <CgRadioCheck className="Icon-1"/> : <FaRegCheckCircle className="Icon-1" />}
                              <p>{t("NumberValid")}</p>
                            </div>
                            <div className={`Box-1 ${isSpecialCharValid ? "Password-box-color" : ""}`}>
                              {!isSpecialCharValid ? <CgRadioCheck className="Icon-1"/> : <FaRegCheckCircle className="Icon-1" />}
                              <p>{t("SpecialCharValid")}</p>
                            </div>
                          </div>
                        </div> 
                      )}
                    </div>

                    <div className="form-group mt-4">
                      <input className={error ? "Border" : ""} type={Compasstoglle ? "text" : "Password"} id="myInput" value={Conpassword} placeholder={placeholder} onChange={(e) => setConpassword(e.target.value)}/>
                      <label htmlFor="myInput" className={lang ? "langset unique-label" : "unique-label"}>
                        {t('CpasswordPlaceholder')}
                      </label>
                      <div className={`Password-show-hide ${lang ? "langset" : ""}`}>
                        <div>
                          {!Compasstoglle ? <p onClick={compasstoglle}>{t('Show')}</p> : <p onClick={compasstoglle}>{t('Hide')}</p>}
                        </div>
                      </div>

                      <div className="Password-error">
                        {error ? (
                          <div className="error-message">
                            <img src={Error1} className="error-img" alt="" />
                            <p>{error}</p>
                          </div>
                        ) : ("") }
                      </div>      
                    </div>

                    <div className="Main-check-Box">
                      <div className="Check-box" onClick={checkhandle}>
                        {check == true ? <HiCheck /> : ""}
                      </div>
                      <div className="check-box-text">
                          <p>{t('Discription')}</p>
                      </div>
                    </div>

                    <div className="register-btn">
                      <div className="register">
                        <button className={`register-Button ${isFormValid ? 'active' : ''}`} disabled={!isFormValid}>{t('CreateButtonText')}</button>
                      </div>
                    </div>
                  </form>        
                </div>  
              </section>
            <Loginfooter/>
          </div>
        </section>
      </Registersubcomponent>
    </>
  )
}
  export default Register;



  