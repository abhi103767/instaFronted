import React from 'react'
// importing styles
import login from "./login.module.css"
// importing images
import InstaImage from '../../images/instWritten.png';
import instaMobile from '../../images/instaMobile.png'
import FooterLogin from '../../components/Footer/FooterLogin'
import { Link } from 'react-router-dom'
import Button from '../Global/Button'
import Input from '../Global/Input'
import style from '../Register/register.module.css';

const Login = () => {
   const inputText = [
     'Email',
     'Password',
   ];
  const arr = new Array(2).fill(2);
  
const handleChange = (e: any) => {
  console.log(e.target.value);
  };
  
  return (
    <div className={login.loginPage}>
      <main>
        <div className={login.wrapper}>
          <div className={login.mobilewrapper}>
            <div className={login.instaMobile}>
              <img className={login.mobileImg} src={instaMobile} alt="sdf" />
            </div>
          </div>
          <div>
            <div className={login.firstFormDiv}>
              <div className={login.fromInput}>
                <div className={style.register}>
                  <div className={style.topBlank}></div>
                  <div className={style.form}>
                    <div>
                        <img src={InstaImage} className={style.imageMargin} />
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
                    
                    <Button buttonInnerText="LogIn" />
                  </div>
                  
                  <div className={style.account}>
                    Don't have have a account?
                    <Link className={style.loginLink} to="/register">
                      Sign up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterLogin />
      </main>
    </div>
  );
}

export default Login
