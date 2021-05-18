import React from 'react'
import './nav-button.css'
import { Link } from 'react-router-dom'

const NavButton = ({ path, children }) => (
    <Link to={path} className="nav-button">
        {children}
    </Link>
)

export default NavButton