import React from 'react'
import classes from './MenuToggle.css'
import ActiveQuiz from "../../ActiveQuiz/ActiveQuiz";

const MenuToggle = props => {
    const cls = [
        classes.MenuToggle,
        'fa'
    ]

    if (props.isOpen) {
        cls.push('fa-times')
        cls.push(classes.Open)
    } else {
        cls.push('fa-bars')
    }

    return (
        <i
            className={cls.join(' ')}
            onClick={props.onToggle}
        />
    )
}

export default MenuToggle