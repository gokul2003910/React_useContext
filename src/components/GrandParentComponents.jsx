import React, { createContext } from 'react'
import ParentComponent from './ParentComponent'

const GrandContext = createContext();

const GrandParentComponents = () => {
  const data='Hello from grandparent'
  return (
    <div className='box'>
      <h3>grandparent component</h3>
      <GrandContext.Provider value={data}>
        <ParentComponent />
      </GrandContext.Provider>
    </div>
  )
}

export default GrandParentComponents


