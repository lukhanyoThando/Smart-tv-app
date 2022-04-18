import React from 'react'
import { FaBars } from 'react-icons/fa';


const Toolbar = ({openSidebar}) => {
  return (
   <div className="tool-bar">
       <div className="burger" onClick={openSidebar}>
       <FaBars size={40}/>
       </div>
       <div className="title">SMART TV APP</div>
   </div>
  )
}

export default Toolbar