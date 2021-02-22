import React from 'react'
import './nav-menu.css'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined'
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined'
import DeveloperBoardOutlinedIcon from '@material-ui/icons/DeveloperBoardOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined'

const NavMenu = () => (
    <nav className="nav-menu">
        <div className="icon-btn">
            <PermIdentityOutlinedIcon />
        </div>
        <div className="icon-btn">
            <CodeOutlinedIcon />
        </div>
        <div className="icon-btn">
            <DeveloperBoardOutlinedIcon />
        </div>
        <div className="icon-btn">
            <AccountBoxOutlinedIcon />
        </div>
    </nav>
)

export default NavMenu