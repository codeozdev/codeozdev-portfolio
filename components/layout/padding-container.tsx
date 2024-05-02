import { ReactNode } from 'react'

export default function PaddinContainer({ children }: { children: ReactNode }) {
  return (
    <div className='container my-10 flex flex-col items-center justify-center gap-20 text-center md:my-28 md:text-start'>
      {children}
    </div>
  )
}
