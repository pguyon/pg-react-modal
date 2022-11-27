import React, { useState } from 'react'

export const Modal = () => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(!open)
    }
  return (
    <>
    <button onClick={toggle}>Modal</button>
    {open ? <div>Coucou</div> : null}
    </>
  )
}
