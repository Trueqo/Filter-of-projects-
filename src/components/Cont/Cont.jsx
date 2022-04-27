import React from 'react'
import CardProjects from '../CardProjects/CardProjects'
import HeaderContProjects from '../HeaderContProjects/HeaderContProjects'

const Cont = () => {
  return (
    <div className='w-[20rem]   md:w-[70rem] h-[25rem]   border-black rounded-xl bg-red-300 flex flex-col'>
        <div className='overflow-y-scroll scro'>
        <CardProjects/>
        </div>
    </div>
  )
}

export default Cont