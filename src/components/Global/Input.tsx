import React from 'react'
import style from './Styles/input.module.css';


function Input() {

  return (
    <div>
        <div  className={style.border}>
        <input  className={style.input} type={'text'} placeholder={"Placeholder"}/>
        </div>
    </div>
  )
}

export default Input