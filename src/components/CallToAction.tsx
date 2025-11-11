import React from 'react'

import Border from './Border'
import { Button } from './ui/button'

const CallToAction = () => {
  return (
    <Border>
      <div className='w-full bg-primary-foreground flex flex-col items-center justify-center gap-2.5 h-96 rounded-xl'>
        <h1 className='text-primary text-5xl w-4xl text-center'>Enterprise Intelligence for the Connected Age</h1>
        <p className='text-primary mt-6 mb-8'>Now is the time to transform your enterprise and your network into an unstoppable force.</p>
        <Button className='w-fit'>Request a Demo</Button>
      </div>
    </Border>
  )
}

export default CallToAction