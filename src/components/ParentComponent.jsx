import React from 'react'
import Child from './Child'

const ParentComponent = () => {
  const handleClick = () => {
    console.log("Button Clicked!");
  };
  return (
    <div className='box'>
      <h3>ParentComponent</h3>
      <Child  handleClick={handleClick}/>
    </div>
  )
}

export default ParentComponent
