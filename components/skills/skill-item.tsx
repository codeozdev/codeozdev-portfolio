'use client'

import { SkillProps } from '@/types/skilldb'
import Image from 'next/image'

interface SkillsItemProps {
  name: string
  items: SkillProps[]
}

export default function SkillItem({ name, items }: SkillsItemProps) {
  return (
    <>
      <h3>{name}</h3>
      <div className='grid h-full w-full grid-cols-3 gap-1 lg:grid-cols-4 xl:grid-cols-6'>
        {items.map((item) => (
          <div className='group' key={item.id}>
            <div
              className={`flex aspect-square h-full w-full flex-col items-center justify-center gap-3 p-3 text-center shadow-lg dark:shadow-sky-950`}
              key={item.id}>
              <Image
                src={item.img}
                alt={item.title}
                width={200}
                height={200}
                quality={100}
                className='h-[50px] w-[50px] dark:group-hover:brightness-110 sm:h-[75px] sm:w-[75px] md:h-[100px] md:w-[100px]'
              />
              <p className='text-[10px] font-bold text-neutral-600 dark:group-hover:text-white sm:text-sm'>
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
