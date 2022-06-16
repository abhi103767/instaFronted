import React from 'react'
import Input from '../Global/Input'
import style from './register.module.css'
import InstaImage from '../../images/instWritten.png';

function Register() {

    const arr = new Array(5).fill(5);
    
  return (
    <div className={style.register}>
        <div className={style.topBlank}></div>
        <div className={style.contentBox}>
            <div>
                <img src= "https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" className={style.imageMargin} />
            </div>
           <div className={style.signupText}>
           Sign up to see photos and videos from your friends.
           </div>
            <div>
            
            {
                arr.map(() => <Input />)
            }
            </div>
            <div>
        <div>
            People who use our service may have uploaded your contact information to Instagram.
       <a className={style.link} href='https://www.facebook.com/help/instagram/261704639352628' target={"_blank"}> Learn More</a>
         </div>
         <div>
             By signing up, you agree to our 
             <a  className = {style.link}href='https://help.instagram.com/581066165581870'>Terms</a>
             <a className = {style.link}href='https://help.instagram.com/519522125107875/?maybe_redirect_pol=0'>Data Policy</a>
             and
             <a  className = {style.link}href='https://help.instagram.com/1896641480634370?ref=ig'>Cookies Policy</a>
             
         </div>

            <div>

            </div>

            </div>
       
       </div>
    </div>
  )
}

export default Register