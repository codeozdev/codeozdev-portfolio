import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs'

export default function HeroComponent() {
  const li = `hover:scale-110 duration-500 ease-in-out cursor-pointer border border-red-500 dark:border-[#8750F7] rounded-full fill-[#8750F7] p-2`
  const isDark = `dark:bg-[#140C1C] dark:border-[#8650F6] dark:border`

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
              className={`mb-5 max-h-40 w-full max-w-40 rounded-full object-cover object-top grayscale hover:grayscale-0 sm:mb-0 md:hidden ${isDark}`}
              sizes='60vw'
            />
            <h3>I{`'`}m Oğuzhan</h3>
            <h1 className='3xl:text-7xl 3xl:max-w-[800px] inline-block max-w-[300px] from-[#8B56F7] to-white bg-clip-text text-3xl font-bold leading-tight tracking-wider md:max-w-[600px] md:text-6xl dark:bg-gradient-to-r dark:text-transparent'>
              Web Developer + UX Designer
            </h1>
            <p className='font-sora 3xl:max-w-[800px] text-center text-sm tracking-wide md:max-w-[600px]  md:text-start md:text-base 3xl:text-lg'>
              I have been working in both frontend and backend development for 1.5 years, and I am
              passionate about keeping up with industry inn ovations and adapting to new
              technologies. I am confident in my ability to solve problems and produce efficient
              solutions.
            </p>
            <ul className='flex items-center justify-center gap-5 md:justify-start'>
              <li className={li}>
                <Link href='#'>
                  <BsTwitterX />
                </Link>
              </li>
              <li className={li}>
                <Link href='#'>
                  <BsLinkedin />
                </Link>
              </li>
              <li className={li}>
                <Link href='#'>
                  <BsGithub />
                </Link>
              </li>
            </ul>
          </div>
          <div className='hidden md:block'>
            <Image
              src='/photo.png'
              alt='img'
              width={500}
              height={500}
              className={`3xl:max-h-[440px] 3xl:max-w-[400px] rotate-6 rounded-3xl object-cover grayscale transition-all duration-300 ease-in-out hover:rotate-0 hover:grayscale-0 md:max-h-[360px] md:max-w-[300px] ${isDark}`}
              sizes='60vw'
            />
          </div>
        </div>
      </div>
      {/*overlay*/}
      <div className="absolute inset-0 h-full w-full md:bg-left dark:animate-pulse dark:bg-[url('/Untitled.jpg')]" />
      <div className='dark-gradient inset-0 h-full w-full dark:absolute' />
    </div>
  )
}

//dark:absolute  vermemizin sebebi dark-gradient custom css'e dark mod olarak atayamadigimizdan dolayi

/*
 * Textlerin secimini kapat
 *
 *  */
