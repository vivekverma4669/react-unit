import React, { useState } from 'react'

const Toggle = () => {
    const [state,setState]= useState(false);

  return (
      
    <div>
      <button onClick={()=>{setState(!state)}}  style={{backgroundColor : state? "green" : "red"}}>{state?  <h1>on</h1>: <h1>Off</h1>}</button>
    </div>
  )
}

export default Toggle
