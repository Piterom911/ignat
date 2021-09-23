import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {requestsAPI} from "./requestsAPI";

function HW13() {
    const [check, setCheck] = useState<boolean>(false)
    const [postStatus, setPostStatus] = useState<string>('')
    const [errorRequest, setErrorRequest] = useState<boolean>(false)

    const submitPost = () => {
        requestsAPI.postData(check)
            .then(response => {
                console.log(response.data)
                setPostStatus(response.data.errorText)
                setErrorRequest(false)
            })
            .catch(rej => {
                console.log({...rej})
                setPostStatus({...rej}.response.data.errorText)
                setErrorRequest(true)
            })
    }

    return (

        <div className={'wrapper'}>
            <h2>homework 13</h2>
            <hr/>

            <SuperCheckbox onChange={e => setCheck(e.currentTarget.checked)}>Make a good request?</SuperCheckbox>
            <br/>
            <br/>
            <div>
                <SuperButton onClick={submitPost}>Post data</SuperButton>
            </div>
            {postStatus && <h4 style={{
                color: errorRequest ? 'darkred' : 'black',
                backgroundColor: 'white',
                display: 'inline-block',
                padding: '3px 10px',
                textTransform: 'uppercase',
                borderRadius: '4px',
                margin: '10px 0'
            }}>{postStatus}</h4>}
            <hr/>
            <hr/>
        </div>
    )
}

export default HW13
