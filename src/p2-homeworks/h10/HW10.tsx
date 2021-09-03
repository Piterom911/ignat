import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {loadingAC, loadingReducer} from "./bll/loadingReducer";
import {AppStateType} from "./bll/store";
import PreloaderStar from "./PreloaderStar";

function HW10() {
    const loading = useSelector<AppStateType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log('loading...')
    };

    return (
        <div className={'wrapper'}>
            <h2>homework 10</h2>
            <hr/>


            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><PreloaderStar /></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
