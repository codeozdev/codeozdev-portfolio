'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IoMoonOutline } from 'react-icons/io5'
import { MdOutlineWbSunny } from 'react-icons/md'

export default function ThemeButton() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className='*:size-4 sm:*:size-5'>
      {resolvedTheme === 'dark' ? <MdOutlineWbSunny /> : <IoMoonOutline />}
    </button>
  )
}
