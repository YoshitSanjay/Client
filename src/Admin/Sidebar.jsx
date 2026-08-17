import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminStyles from './AdminStyles.module.css';


const Sidebar = () => {
  return (
    <div className={AdminStyles.sidz}>
    <ul>
        <li>
            <NavLink to="addservices">ADD SERVICE</NavLink>
        </li>
        <li>
            <NavLink to="deservices">DELETE/EDIT SERVICES</NavLink>
        </li>
        <li>
            <NavLink to="addmechanic">ADD MECHANIC</NavLink>
        </li>
        <li>
            <NavLink to='demechanic'>DELETE/EDIT MECHANICS</NavLink>
        </li>
        <li>
            <NavLink to='addblog'>ADD BLOG</NavLink>
        </li>
        <li>
            <NavLink to='deblog'>DELETE/EDIT BLOG</NavLink>
        </li>
    </ul>
    </div>
  )
}

export default Sidebar