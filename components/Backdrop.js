import React from 'react'

const Backdrop = ({sidebar, closeSidebar}) => {
  return (
    <div className={sidebar?"backdrop backdrop--open":"backdrop"} onClick={closeSidebar}>
        <h1></h1>
    </div>
  )
}

export default Backdrop