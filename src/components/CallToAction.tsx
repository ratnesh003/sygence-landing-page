import React from 'react'

import Border from './Border'
import { Button } from './ui/button'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <Border>
      <div className='w-full bg-primary-foreground flex flex-col items-center justify-center gap-2.5 h-full md:h-96 rounded-xl p-8'>
        <h1 className='text-primary text-4xl xl:text-5xl  xl:w-4xl text-center'>Enterprise intelligence for the connected age</h1>
        <p className='text-primary mt-6 mb-8 text-center'>Now is the time to transform your enterprise and your network into an unstoppable force.</p>
        <Link href={"/contact"}>
        <Button className='w-fit'>Request a demo</Button>
        </Link>
      </div>
    </Border>
  )
}

export default CallToAction