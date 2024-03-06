import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Error1 } from "../Images/Img";
import { Loginsubcomponent } from "../Style/Logincss";
import Loginfooter from "../Components/Loginfooter";
import Navbar1 from "../Components/Navbar1";
import Loader from "../Components/Loader";
import Colors from "../Colors/Color";
import usetranslation from "../React Localization/usetranslation";
import { useDispatch } from "react-redux";
import { login } from "../redux/Slice/AuthSlice";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const t = usetranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [erroremail, seterroremail] = useState("");
  const [errorpassword, seterrorpassword] = useState("");
  const [placeholder, setplaceholder] = useState("");
  const [placeholderPassword, setplaceholderpassword] = useState("");
  const [passTogle, setPassTogle] = useState(false);
  const [Isoader, setIsloader] = useState(false);

  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const onFocus = (e) => {
    if (e.type === "focus") {
      setplaceholder("example@gmail.com");
    } else if (e.type === "blur") {
      setplaceholder("");
    }
  };

  const handleLogin = () => {
    dispatch(login());
  };

  const handleRegisterClick = () => {
    navigate("/Register");
  };

  const newUser = () => {
    navigate("/Register");
  };

  const onFocusPassword = () => {
    setplaceholderpassword("");
  };

  const onBlurPassword = () => {
    if (!Password) {
      setplaceholderpassword("");
    }
  };

  const hndlePassTogle = () => {
    setPassTogle(!passTogle);
  };

  const isFormValid = Email !== "" && Password !== "";

  useEffect(() => {
    if (erroremail.length > 1) {
      seterroremail("");
    } else if (errorpassword.length > 1) {
      seterrorpassword("");
    }
  }, [Email, Password]);

  const Login = async (e) => {
    e.preventDefault();
    if (!Email.match(emailRegex)) {
      seterroremail("Please enter the correct email id.");
      return;
    } else if (!Password.match(passwordRegex)) {
      seterrorpassword("Please enter the correct password.");
      return;
    }
    try {
      const response = await fetch(
        "https://reactwatani-default-rtdb.firebaseio.com/userData.json"
      );
      if (!response.ok) {
        toast.error("Error fetching user data");
        return;
      }
      const userData = await response.json();
      const user = Object.values(userData).find(
        (user) => user.Email === Email && user.Password === Password
      );
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        setIsloader(true);
        toast.success("Login Successfully");
        setTimeout(() => {
          setIsloader(false);
          navigate("/Home");
        }, 6000);
      } else {
        const userByEmail = Object.values(userData).find(
          (user) => user.Email === Email
        );
        const userByPassword = Object.values(userData).find(
          (user) => user.Password === Password
        );
        if (userByEmail) {
          seterrorpassword("Please enter the correct password.");
        } else if (userByPassword) {
          seterroremail("Please enter the correct email id.");
        } else {
          toast.error("User Data Is Note Found");
        }
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };


  

  return (
    <>
      <Loginsubcomponent>
        <ToastContainer />
        <section className="container-fluid p-0">
          {Isoader && <Loader />}
          <div className={`Main-login-page ${Isoader ? "Loader-base" : ""}`}>
            <Navbar1 />
            <section className="User-login">
              <div className="Login-sub-Content">
                <form className="login-main-form" onSubmit={Login} noValidate>
                  <p className="lable-name">{t("title")}</p>
                  <div className="form-group mt-5">
                    <input
                      type="email"
                      className={erroremail ? "Border" : ""}
                      id="emailInput"
                      name="Email"
                      value={Email}
                      placeholder={placeholder}
                      onFocus={onFocus}
                      onBlur={onFocus}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label
                      htmlFor="emailInput"
                      className={Email ? "active" : ""}
                    >
                      {t("emailPlaceholder")}
                    </label>
                    <div className="Email-error">
                      {erroremail.length > 0 ? (
                        <div className="Errors-box">
                          <img src={Error1} className="Error-img" alt="" />
                          <p>{erroremail}</p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="form-group mt-5">
                    <input
                      type={passTogle ? "text" : "password"}
                      className={errorpassword ? "Border" : ""}
                      id="passwordInput"
                      name="Password"
                      value={Password}
                      placeholder={placeholderPassword}
                      onFocus={onFocusPassword}
                      onBlur={onBlurPassword}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label
                      htmlFor="passwordInput"
                      className={Password ? "active" : ""}
                    >
                      {t("passwordPlaceholder")}
                    </label>
                    <div className="Password-show-hide">
                      <div>
                        {!passTogle ? (
                          <p onClick={hndlePassTogle}>{t("Show")}</p>
                        ) : (
                          <p onClick={hndlePassTogle}>{t("Hide")}</p>
                        )}
                      </div>
                    </div>
                    <div className="Password-error">
                      {errorpassword.length > 0 ? (
                        <div className="Errors-box">
                          <img src={Error1} className="Error-img" alt="" />
                          <p>{errorpassword}</p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div className="Forget-pass">
                    <Link to="#">
                      <p>{t("ForgetpasswordText")}</p>
                    </Link>
                  </div>
                  <div className="Login-btn">
                    <div className="login">
                      <button
                        className={`Login-Button ${
                          isFormValid ? "active" : ""
                        }`}
                        disabled={!isFormValid}
                        onClick={handleLogin}
                      >
                        {t("loginButtonText")}
                      </button>
                    </div>
                  </div>
                </form>
                <div className="register-btn">
                  <div className="new-user p-2">
                    <button className="Newuser-button" onClick={newUser}>
                      {t("Newuser")}
                    </button>
                  </div>
                  <div className="register">
                    <button
                      className="register-Button"
                      onClick={handleRegisterClick}
                    >
                      {t("Register")}
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <Loginfooter />
          </div>
        </section>
      </Loginsubcomponent>
    </>
  );
};

export default Login;
