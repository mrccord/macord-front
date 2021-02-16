import React from 'react'
import './header.css'
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';

const Header = () => (
    <header className="header">
        <div className="icon-btn">
            <LanguageOutlinedIcon />
        </div>
        <div className="icon-btn">
            <Brightness2OutlinedIcon />
        </div>
        <div className="icon-btn">
            <MenuOutlinedIcon />
        </div>
    </header>
)

export default Header