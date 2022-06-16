import React from 'react'
import style from './Styles/button.module.css'
type ButtonProps = {
    buttonInnerText : string
}
function Button(props:ButtonProps) {
  return (
    <>
        <button className={style.btn}>Sign up</button>
    </>
  )
}

export default Button