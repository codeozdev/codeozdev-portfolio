'use client'

import { TypeAnimation } from 'react-type-animation'

export default function AnimationTextComponent() {
  return (
    <div className='ml-2 inline-block'>
      <TypeAnimation
        sequence={['TypeScript', 2000, 'Nextjs', 2000, 'Nodejs', 2000]}
        wrapper='span'
        cursor={true}
        repeat={Infinity}
      />
    </div>
  )
}
