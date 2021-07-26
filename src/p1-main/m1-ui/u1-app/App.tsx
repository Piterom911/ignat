import React from 'react'
import s from './App.module.css'
import HW5 from "../../../p2-homeworks/h5/HW5";
import {HashRouter} from "react-router-dom";

function App() {
    return (
        <HashRouter>
            <div className={s.App}>
                <h1 className={s.heading}>react homeworks:</h1>
                <HW5/>
            </div>
        </HashRouter>
    )
}

export default App
