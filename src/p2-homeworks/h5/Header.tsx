import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.NavBar}>
            <NavLink activeClassName={s.active} to='/pre-junior'>PRE-JUNIOR</NavLink>
            <NavLink activeClassName={s.active} to='/junior'>JUNIOR</NavLink>
            <NavLink activeClassName={s.active} to='/junior-plus'>JUNIOR-PLUS</NavLink>
        </div>
    );
}

export default Header;
