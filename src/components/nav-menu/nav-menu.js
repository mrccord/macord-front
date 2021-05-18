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
        path: "/profile",
        icon: <PermIdentityOutlinedIcon />
    }, {
        id: 2,
        path: "/skills",
        icon: <CodeOutlinedIcon />
    }, {
        id: 3,
        path: "/projects",
        icon: <DeveloperBoardOutlinedIcon />
    }, {
        id: 4,
        path: "/contact",
        icon: <AccountBoxOutlinedIcon />
    }
]

const NavMenu = () => (
    <nav className="nav-menu">
        {
            actionButtons.map(button => (
                <NavButton key={button.id} path={button.path}>
                    {button.icon}
                </NavButton>
            ))
        }
    </nav>
)

export default NavMenu