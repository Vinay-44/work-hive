import React from 'react'

const layout = ({children}) => {
  return (
    <div className='grid place-items-center min-h-screen'>
        {children}
    </div>
  )
}

export default layout