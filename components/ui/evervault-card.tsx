'use client'
import { cn } from '@/utils/cn'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export const EvervaultCard = ({ className, img }: { className?: string; img?: any }) => {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  const [randomString, setRandomString] = useState('')

  useEffect(() => {
    let str = generateRandomString(1500)
    setRandomString(str)
  }, [])

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)

    const str = generateRandomString(1500)
    setRandomString(str)
  }

  return (
    <div
      className={cn(
        'relative  flex  h-full w-full items-center justify-center bg-transparent',
        className,
      )}>
      <div
        onMouseMove={onMouseMove}
        // resmi ortaliyor
        className='group/card relative flex h-full w-full items-center justify-center overflow-hidden bg-transparent'>
        <CardPattern mouseX={mouseX} mouseY={mouseY} randomString={randomString} />
        <div className='relative z-10'>
          <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
          <Image
            src={img}
            alt='img'
            width={500}
            height={500}
            className={`dark:border-primary rotate-6 cursor-none rounded-3xl object-cover grayscale transition-all duration-300 ease-in-out hover:rotate-0 hover:grayscale-0 dark:border dark:bg-[#140C1C] md:max-h-[360px] md:max-w-[300px]`}
            sizes='60vw'
          />
        </div>
      </div>
    </div>
  )
}

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className='pointer-events-none'>
      <div className='absolute inset-0 [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50'></div>
      <motion.div
        className='to-primary absolute inset-0 bg-gradient-to-r from-green-500 opacity-0 backdrop-blur-xl transition duration-500 group-hover/card:opacity-100'
        style={style}
      />
      <motion.div
        className='absolute inset-0 opacity-0 mix-blend-overlay group-hover/card:opacity-100'
        style={style}>
        <p className='absolute inset-x-0 h-full whitespace-pre-wrap break-words font-mono text-xs font-bold text-white transition duration-500'>
          {randomString}
        </p>
      </motion.div>
    </div>
  )
}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
export const generateRandomString = (length: number) => {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={className}
      {...rest}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
    </svg>
  )
}
