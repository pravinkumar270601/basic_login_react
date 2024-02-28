import React, {useRef} from "react";
import "./LoginPage.css";
import bg_image from "../../Assets/Rectangle.png";
import eyeicon from "../../Assets/Iconeye.svg";
import group1 from "../../Assets/Group1.png";
import group2 from "../../Assets/Group2.png";

const LoginPage = () => {
  const passwordRef = useRef(null);

  const handlePwdIconClick = () => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };

  

  return (
    <div className="login-page">
      <div className="login-pg-body">
        <div className="login-pg-left">
          {/* form start */}
          <form>
            <h1>Welcome</h1>
            <p>Please enter your details</p>
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                className="input1"
                placeholder="Enter Your Email"
                id="email"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <br />
              <input
                type="password"
                className="input1"
                id="password"
                placeholder="Enter Your Password"
                ref={passwordRef}
                required
              />
              <img
                src={eyeicon}
                className="pass-icon"
                id="pwd-icon"
                onClick={handlePwdIconClick}
              />
            </div>
            <div className="forget-div">
              <div>
                <input type="checkbox" id="checkbox" required/>
                Remember Me
              </div>
              <div className="forget-pass">
                <a href="#Forget password">Forget password</a>
              </div>
            </div>
            <button>Sign In</button>
          </form>
        </div>
        <div className="login-pg-right">
          <div>
            <img src={bg_image} className="bg-left-image" alt="pg-image" />
          </div>
          <div className="group-icon-div">
            <div className="group-icon-img1-icon1">
              <img src={group1} className="group-icon-img1" />
            </div>
            <div className="group-icon-img1-icon2">
              <img src={group2} className="group-icon-img2 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
