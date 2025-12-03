import React from 'react'

import Border from '@/components/Border'

import { advantages } from '../_constants'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const Advantages = () => {
  return (
    <Border className='bg-accent'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl md:text-5xl tracking-tight font-medium text-center'>{advantages.title}</h1>
        <p className='mt-[30px] mb-[80px] text-center'>{advantages.description}</p>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
          {advantages.cards.map((card, idx) => (
            <Card key={idx + 1} className='w-full hover:scale-105 hover:ring-1 hover:ring-[#60B4FA]/30'>
              <CardHeader>
                <Image
                  src={card.icon}
                  width={48}
                  height={48}
                  alt='icons images'
                  className='object-contain mb-4'
                />
                <CardTitle className='font-mono font-normal text-xl lg:text-3xl -mb-6'>{card.header}</CardTitle>
              </CardHeader>
              <CardContent>{card.content}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Border>
  )
}

export default Advantages