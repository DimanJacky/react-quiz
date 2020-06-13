import React from 'react';
import classes from './input.css'

function isInvalid({vaid, touched, shouldValidate}) {
    return !vaid && shouldValidate && touched
}

const Input = props => {
    const inputType = props.type || 'text'
    const cls = [classes.Input]
    const htmlFor = `${inputType}-${Math.random()}`

    if (isInvalid(props)) {
        cls.push(classes.invaid)
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
               type={inputType}
               id={htmlFor}
               value={props.value}
               onChange={props.onChange}
            />

            {
                isInvalid(props)
                    ? <span>{props.errorMessage || 'Введите верное значение'}</span>
                    : null
            }


        </div>
    )
}

export default Input