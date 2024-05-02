'use client'

import { projects } from '@/types/projects'
import Image from 'next/image'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'
import { Tabs } from '../ui/tabs'

export function TabsDemo() {
  const tabs: any = projects.map((project) => {
    return {
      title: project.title,
      value: project.id,
      content: (
        <div
          key={project.id}
          className='relative h-full w-full overflow-hidden md:rounded-2xl bg-gradient-to-b from-[#E5E7EB] to-slate-200 dark:from-[#0D0D0F] dark:to-black p-10 flex flex-col gap-5 items-center main'>
          <div className='flex items-center justify-between w-full'>
            <div className='hidden md:block' />
            <h1 className='text-xl font-bold md:text-4xl'>{project.title} Tab</h1>
            <Link href={project.link} target='_blank' className=''>
              <MdArrowOutward
                size={30}
                className='rotate-element  fill-[#8F5DF7] dark:fill-white'
              />
            </Link>
          </div>
          <div className='md:flex gap-2 hidden'>
            {project.tools.map((tool) => (
              <div
                key={tool}
                className='cursor-default rounded-full border-2 border-black/40 px-4 py-2 text-xs transition hover:border-black hover:text-black dark:border-white/20 dark:hover:border-white dark:hover:text-white'>
                {tool}
              </div>
            ))}
          </div>
          <DummyContent image={project.image} />
        </div>
      ),
    }
  })

  return (
    <div
      className='b relative mx-auto flex h-[20rem] w-full max-w-5xl flex-col items-start justify-start [perspective:1000px] md:h-[40rem] md:mt-[3.5rem] mb-10 md:mb-20'
      id='projects'>
      <Tabs tabs={tabs} />
    </div>
  )
}

const DummyContent = ({ image }: any) => {
  return (
    <Image
      src={image}
      alt='dummy image'
      width='1000'
      height='1000'
      className='absolute inset-x-0 -bottom-10 w-full md:mx-auto h-[80%] md:w-[90%] md:rounded-xl object-cover object-left-top'
    />
  )
}
