import React from 'react'

const Section = ({children,title,isTrasparent=false}) => {
  return (
    <section id="features" className={`${!isTrasparent && 'bg-gray-900'} py-20 px-4`}>
    <div className="container mx-auto">
      <h4 className="text-3xl font-bold mb-12 text-center">{title}</h4>
        {children}
      </div>
      </section>
  )
}

export default Section