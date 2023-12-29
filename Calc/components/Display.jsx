/* eslint-disable no-unused-vars */
import React from 'react'

const Display = (props) => {

    const {inputs , result} = props
  return (
    <div className='Value' style={{margin:"50px"}}>
      <h1>{result?result:inputs}</h1>
    </div>
  )
}

export default Display
