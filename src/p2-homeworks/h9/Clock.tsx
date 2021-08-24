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
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.getHours() + ' : ' + date.getMinutes() // fix with date
    const stringDate = date.getDate() + ' ' + (+date.getMonth() + 1) + ' ' + date.getFullYear() // fix with date

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
                    {date.getSeconds()}
                </span>
                {show && (
                    <div className={style.date}>
                        {stringDate}
                    </div>
                )}
            </div>

            <div className={style.buttons}>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton red={true} onClick={stop}>stop</SuperButton>
            </div>

        </div>
    )
}

export default Clock
