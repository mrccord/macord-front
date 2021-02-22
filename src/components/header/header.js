import React from 'react'
import './header.css'
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined'
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'
import Logo from './../../assets/images/logo.png'
import ActionButton from '../action-button/action-button'

const Header = () => (
    <header className="header">
        <div className="logo">
            <img src={Logo} alt="Macord developer"/>
        </div>
        <div className="actions">
            <ActionButton>
                <LanguageOutlinedIcon />
            </ActionButton>
            <ActionButton>
                <Brightness2OutlinedIcon />
            </ActionButton>
            <ActionButton>
                <MenuOutlinedIcon />
            </ActionButton>
        </div>
    </header>
)

export default Header