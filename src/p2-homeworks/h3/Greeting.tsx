import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onAddUserKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onAddUserKeyPressHandler} ) => {
    const inputClass = error ? s.error : null

    return (
        <div>
            <input value={name} onKeyPress={onAddUserKeyPressHandler} onChange={setNameCallback} className={`input ${s.input} ${inputClass}`}/>
            <button onClick={addUser}>add</button>
            <span className={s.greetingCount}>{totalUsers}</span>
            <p className={s.errorText}>{error}</p>
        </div>
    )
}

export default Greeting
