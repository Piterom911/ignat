import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    return (
        <nav className={s.nav}>
            <div className={s.iconWrapper}>
                <div className={s.menuIcon + ' menuIcon'}> </div>
            </div>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink activeClassName={s.active + ' navLinkActive'} className={s.link + ' navLink'} to='/pre-junior'>Pre Junior Level</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink activeClassName={s.active + ' navLinkActive'} className={s.link + ' navLink'} to='/junior'>Junior Level</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink activeClassName={s.active + ' navLinkActive'} className={s.link + ' navLink'} to='/junior-plus'>Junior Plus Level</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Header
