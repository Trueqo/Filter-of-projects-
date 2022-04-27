import React, { useState } from 'react'
import technologies from '../../data/technologies'

const BtnProjects = () => {
  return (
    <div className='flex flex-wrap gap-2 hover:cursor-pointer' >
      {technologies.map((datos) => {
        return (
          <div className='rounded-xl h-[2rem] w-[6rem] bg-black hover:bg-slate-500 hover:text-black text-white border-white border-2'>
            <span>{datos.categori}</span>
          </div>
        )
      })}
    </div>
  )
}

export default BtnProjects