import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../h10/bll/store";
import {changeThemeAC} from "./bll/themeReducer";

const themes = ['Royal', 'PurpleBliss', 'Amin', 'Clouds'];

function HW12() {
    const theme = useSelector( (state: AppStateType) => state.theme.themeName)

    const dispatch = useDispatch();

    const changeTheme = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(changeThemeAC(event.currentTarget.value))
    }

    return (
        <div className={s[theme] + ' wrapper'}>
            <h2>homework 12</h2>
            <hr/>
            <span className={s[theme + '-text']}>
                <SuperSelect value={theme}
                             onChange={changeTheme}
                             options={themes} />
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
