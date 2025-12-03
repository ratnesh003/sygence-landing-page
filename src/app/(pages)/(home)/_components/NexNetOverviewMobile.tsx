import React from 'react'
import { nexNetOverview } from '../_constants'

const NexNetOverviewMobile = () => {
  return (
    <div className='lg:hidden px-5 py-16 md:px-18 md:py-24 xl:px-20 xl:py-28 flex flex-col items-center justify-center'>
        <h1 className='text-4xl mb-5'>{nexNetOverview.title}</h1>
        <p className='text-center'>{nexNetOverview.description}</p>
    </div>
  )
}

export default NexNetOverviewMobile