import React from 'react'
import Input from '../Global/Input'
import style from './register.module.css'
import InstaImage from '../../images/instWritten.png';
import Button from '../Global/Button';
import { Link } from 'react-router-dom';
import FooterLogin from '../Footer/FooterLogin';
import login from '../login/login.module.css';
import instaMobile from '../../images/instaMobile.png';


export type InputProps = {
  placeholderText : 'string'
}

function Register() {

    const inputText = ["Mobile Number", "Email", "Full Name" ,"Username", "Password"];
    const arr = new Array(5).fill(5);

const handleChange = (e:any) => {
    console.log(e.target.value);

}
    
  return (
    <>
      <div className={login.wrapper}>
        <div className={login.mobilewrapper}>
          <div className={login.instaMobile}>
            <img className={login.mobileImg} src={instaMobile} alt="sdf" />
          </div>
        </div>
        <div className={login.firstFormDiv}>
          <div className={login.fromInput}></div>
          <div className={style.register}>
            <div className={style.topBlank}></div>
            <div className={style.form}>
              <div>
                <img src={InstaImage} className={style.imageMargin} />
              </div>
              <div className={style.signupText}>
                Sign up to see photos and videos from your friends.
              </div>
              <div className={style.inputForm}>
                {arr.map((_, i) => (
                  <Input
                    key={i}
                    placeholderText={inputText[i]}
                    handleChange={handleChange}
                  />
                ))}
              </div>
              <div className={style.formFooter}>
              
                <div className={style.formPrivacy}>
                  By signing up, you agree to our
                  <br />
                  <a
                    className={style.link}
                    href="https://help.instagram.com/581066165581870"
                  >
                    Terms { }
                  </a>
                  <a
                    className={style.link}
                    href="https://help.instagram.com/519522125107875/?maybe_redirect_pol=0"
                  >
                    Data Policy
                  </a>
                  and
                  <a
                    className={style.link}
                    href="https://help.instagram.com/1896641480634370?ref=ig"
                  >
                    Cookies Policy
                  </a>
                </div>
              </div>
              <Button buttonInnerText="Sign Up" />
            </div>
            <div className={style.account}>
              Have a Account?
              <Link className={style.loginLink} to="/login">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>

      
      <FooterLogin />
    </>
  );
}

export default Register