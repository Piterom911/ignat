import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Roman',
    message: 'npm start нажимал? npm start нажимал?npm start нажимал? npm start нажимал? ',
    time: '22:00',
}

function HW1() {
    return (
        <div className='wrapper'>
            <h2>homework 1</h2>
            <hr/>

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
