import React from 'react'
import s from './Message.module.css'

type MessagePropsTypes = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsTypes) {
    return (
        <div className={s.Message}>
            <div className={s.avatar}>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div className={s.wrapper}>
                <h3 className={s.name}>{props.name}</h3>
                <div className={s.data}>
                    <p className={s.text}>{props.message} <span className={s.time}>{props.time}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Message
