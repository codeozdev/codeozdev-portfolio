import Link from 'next/link'
import ThemeButton from './theme-controller'

export default function Header() {
  return (
    <nav className='container py-4 text-xs sm:text-lg'>
      <ul className='flex items-center justify-center gap-3 sm:gap-4'>
        <li className='flex-1'>
          <Link href='/' className='navbar_link relative'>
            Home
          </Link>
        </li>
        <li>
          <Link href='#skills' className='navbar_link relative'>
            Skills
          </Link>
        </li>

        <li>
          <Link href='#projects' className='navbar_link relative'>
            Projects
          </Link>
        </li>

        <ThemeButton />
      </ul>
    </nav>
  )
}
