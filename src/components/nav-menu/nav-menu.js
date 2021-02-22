import React from 'react'
import './nav-menu.css'
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined'
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined'
import DeveloperBoardOutlinedIcon from '@material-ui/icons/DeveloperBoardOutlined';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined'
import NavButton from '../nav-button/nav-button';

const actionButtons = [
    {
        id: 1,
        path: "/about",
        icon: <PermIdentityOutlinedIcon />
    }, {
        id: 2,
        path: "/about",
        icon: <CodeOutlinedIcon />
    }, {
        id: 3,
        path: "/about",
        icon: <DeveloperBoardOutlinedIcon />
    }, {
        id: 4,
        path: "/about",
        icon: <AccountBoxOutlinedIcon />
    }
]

const NavMenu = () => (
    <nav className="nav-menu">
        {
            actionButtons.map(button => (
                <NavButton key={button.id}>
                    {button.icon}
                </NavButton>
            ))
        }
    </nav>
)

export default NavMenu