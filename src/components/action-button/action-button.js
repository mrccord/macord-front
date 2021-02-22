import React from 'react'
import './action-button.css'

const ActionButton = ({children}) => {

    return (
        <div className="action-button">
            {children}
        </div>
    )
}

export default ActionButton