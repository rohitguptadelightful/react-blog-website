import React from 'react'
import './chip.css'

const Chip = ({label}) => {
  return (
    <p className='chip'>
        {label}
    </p>
  )
}

export default Chip