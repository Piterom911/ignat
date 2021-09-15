import React from 'react'
import s from './App.module.css'
import HW5 from "../../../p2-homeworks/h5/HW5";
import {HashRouter} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../p2-homeworks/h10/bll/store";

function App() {
    const theme = useSelector( (state: AppStateType) => state.theme.themeName)
    return (
        <HashRouter>
            <div className={theme}>
                <div className={`${s.App}`}>
                    <h1 className={s.heading}>react homeworks:</h1>
                    <HW5/>
                </div>
            </div>
        </HashRouter>
    )
}

export default App
