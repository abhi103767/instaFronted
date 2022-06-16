import React from 'react'
import Input from '../Global/Input'
import style from './register.module.css'

function Register() {

    const arr = new Array(5).fill(5);
    
  return (
    <div className={style.register}>
        <div className={style.topBlank}></div>

        <div>
       {
           arr.map(() => <Input />)
       }
       </div>
    </div>
  )
}

export default Register