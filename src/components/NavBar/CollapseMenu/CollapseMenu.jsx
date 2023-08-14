import React from 'react'
import { useState } from 'react'
import "./CollapseMenu.css"

const CollapseMenu = () => {

    const [menuClass, setMenuClass] = useState(false)
    
    const menuHandleClick = () => { 
        setMenuClass(!menuClass)
    }

    let toggleMenuClass1 = "line1__bars-menu"
    let toggleMenuClass2 = "line2__bars-menu"
    let toggleMenuClass3 = "line3__bars-menu"

    if (menuClass){
        toggleMenuClass1 = "activeline1__bars-menu"
        toggleMenuClass2 = "activeline2__bars-menu"
        toggleMenuClass3 = "activeline3__bars-menu"
    }

  return (
    <div className="bars__menu" onClick={menuHandleClick}>
        <span className={`${toggleMenuClass1}`}></span>
        <span className={`${toggleMenuClass2}`}></span>
        <span className={`${toggleMenuClass3}`}></span>
    </div>
  )
}

export default CollapseMenu