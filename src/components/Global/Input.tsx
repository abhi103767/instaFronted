import React from 'react'
import style from './Styles/input.module.css';
type InputProps = {
 placeholderText : string
  handleChange : (e:any) => void
}


function Input(props : InputProps) {
    const {placeholderText,handleChange} = props;

  return (
    <div>
        <div  className={style.border}>
        <input  className={style.input} type={'text'}
        onChange={handleChange} placeholder={placeholderText}/>
        </div>
    </div>
  )
}

export default Input