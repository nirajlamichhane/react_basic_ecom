import React from 'react'
import './ServiceDescriptionOption.css'
function ServiceDescriptionOption({title,desc,Icon}) {
  return (
    <div className='servDesc'>
         {Icon &&<Icon className="service__icon"></Icon>}
         <h6 className='sercive_title'>{title}</h6>
         <p className='servide_desc'>{desc}</p>
    </div>
  )
}

export default ServiceDescriptionOption