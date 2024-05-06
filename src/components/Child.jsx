import React, { useContext } from 'react'
import {GrandContext} from './GrandParentComponents'

const Child = ({handleClick}) => {
  const value = useContext(GrandContext);

  return (
    <div className='box'>
      <h3>child</h3>
      <p>{value}</p>
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Child
