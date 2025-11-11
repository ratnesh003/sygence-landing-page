import React from 'react'

import Border from '@/components/Border'

import { mission } from "../_constants"

const Mission = () => {
  return (
    <Border>
      <h1 className='text-5xl tracking-tight font-medium mb-6'>
        {mission.title}
      </h1>
      {mission.description.map((content, idx) => (
        <p key={idx + 1} className='tracking-tight mb-4'>
          {content}
        </p>
      ))}
    </Border>
  )
}

export default Mission