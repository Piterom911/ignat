import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import style from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())

        }, 1000)
        console.log(id)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
        !show && console.log('Watch hover')
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    const stringTime = (+date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ' : ' + (+date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) // fix with date
    const stringDate = (+date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ' + ((+date.getMonth() + 1) < 10 ? '0' + (+date.getMonth() + 1) : +date.getMonth()) + ' ' + date.getFullYear() // fix with date

    return (
        <div className={style.wrapper}>
            <div className={style.clock}
                 onMouseEnter={onMouseEnter}
                 onMouseLeave={onMouseLeave}
            >
                <span className={style.time}>
                    {stringTime}
                </span>
                <span className={style.seconds}>
                    {seconds}
                </span>
                <div className={style.date}>
                    {stringDate}
                </div>
            </div>

            <div className={style.buttons}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton red={true} onClick={stop}>stop</SuperButton>
            </div>

        </div>
    )
}

export default Clock
