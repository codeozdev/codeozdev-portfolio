'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IoMoonOutline } from 'react-icons/io5'
import { MdOutlineWbSunny } from 'react-icons/md'

export default function ThemeButton() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button onClick={handleTheme} className='*:size-4 sm:*:size-5'>
      {theme === 'dark' ? <MdOutlineWbSunny /> : <IoMoonOutline />}
    </button>
  )
}

/* 

resolvedTheme kismi ikili durumlarda kullaniliyor yukarda kullandigimiz gibi

*/
