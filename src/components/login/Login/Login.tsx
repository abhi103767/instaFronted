import React from 'react'
// importing styles
import login from "./login.module.css"
// importing images
import instaMobile from '../../images/instaMobile.png'
import instalogo from "../../images/instWritten.png"
import FooterLogin from '../Footer/FooterLogin'
const Login = () => {
  return (
    <div className={login.loginPage}>
      <main>
        <div className={login.wrapper}>
          <div className={login.mobilewrapper}>
            <div className={login.instaMobile}>
              <img className={login.mobileImg} src={instaMobile} alt="sdf" />
            </div>
          </div>
          <div className={login.formDiv}>
            <div className={login.firstFormDiv}>
              <div>
                <img src={instalogo} alt="s" />
              </div>
              <div className={login.fromInput}>

              </div>
            </div>
          </div>
        </div>
        <FooterLogin/>
      </main>
    </div>
  );
}

export default Login
