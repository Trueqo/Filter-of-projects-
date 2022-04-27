import React from 'react'
import BtnProjects from '../BtnProjects/BtnProjects'


const HeaderContProjects = ({seletcCategori}) => {
  return (
    <div className='w-full py-2 bg-red-500 rounded-t-xl flex flex-row justify-center'>
      <BtnProjects seletcCategori={seletcCategori} />
    </div>
  )
}

export default HeaderContProjects