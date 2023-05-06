import React from "react";
import s from './MyInput.module.css'

const MyInput =React.forwardRef((props, ref)=>{
    return(
    <input ref={ref} className={s.myInput} type="text" {...props}/>
    )
})

export default MyInput