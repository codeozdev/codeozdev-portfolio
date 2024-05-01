import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs'
import AnimationTextComponent from './animate-text'
import EvervaultImage from './evervault-image'

export default function HeroComponent() {
  return (
    <div className='relative mt-5 h-full w-full md:mt-10'>
      <div className='relative z-20'>
        {/* GRID */}
        <div className='container grid grid-cols-1 place-items-center gap-10 p-8 md:grid-cols-2 md:gap-0 md:p-0'>
          <div className='flex h-fit w-full flex-col items-center justify-center space-y-3 text-center md:items-start md:justify-start md:space-y-5 md:text-start'>
            {/*MOBILE IMAGE*/}
            <Image
              src='/photo.png'
              alt='img'
              width={500}
              height={500}
              className={`dark:border-primary mb-5 max-h-40 w-full max-w-40 rounded-full object-cover object-top grayscale hover:grayscale-0 dark:border dark:bg-[#140C1C] sm:mb-0 md:hidden`}
              sizes='60vw'
            />
            <div className='font-sora text-xl md:text-2xl 3xl:text-3xl'>
              I{`'`}m Oğuzhan /
              <AnimationTextComponent />
            </div>
            <h1 className='from-primary inline-block max-w-[300px] bg-gradient-to-r to-white bg-clip-text text-3xl font-bold leading-tight tracking-wider text-transparent md:max-w-[600px] md:text-6xl 3xl:max-w-[800px] 3xl:text-7xl'>
              Web Developer + UX Designer
            </h1>
            <p className='text-center font-sora text-sm tracking-wide md:max-w-[600px] md:text-start  md:text-base 3xl:max-w-[800px] 3xl:text-lg'>
              I have been working in both frontend and backend development for 1.5 years, and I am
              passionate about keeping up with industry inn ovations and adapting to new
              technologies. I am confident in my ability to solve problems and produce efficient
              solutions.
            </p>
            <ul className='flex items-center justify-center gap-5 md:justify-start'>
              <li className='border-primary fill-primary cursor-pointer rounded-full border p-2 duration-500 ease-in-out hover:scale-110'>
                <Link href='#'>
                  <BsTwitterX />
                </Link>
              </li>
              <li className='border-primary fill-primary cursor-pointer  rounded-full border p-2 duration-500 ease-in-out hover:scale-110'>
                <Link href='#'>
                  <BsLinkedin />
                </Link>
              </li>
              <li className='border-primary fill-primary cursor-pointer  rounded-full border p-2 duration-500 ease-in-out hover:scale-110'>
                <Link href='#'>
                  <BsGithub />
                </Link>
              </li>
            </ul>
          </div>
          <div className='absolute hidden justify-self-end md:block'>
            <EvervaultImage />
          </div>
        </div>
      </div>
      {/*overlay*/}
      <div className="absolute inset-0 h-full w-full dark:animate-pulse dark:bg-[url('/Untitled.jpg')] md:bg-left" />
      <div className='dark-gradient inset-0 h-full w-full dark:absolute' />
    </div>
  )
}

//dark:absolute  vermemizin sebebi dark-gradient custom css'e dark mod olarak atayamadigimizdan dolayi

/*
 * Textlerin secimini kapat
 *
 *  */
