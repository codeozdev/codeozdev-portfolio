import { EvervaultCard } from '@/components/ui/evervault-card'
import img from '@/public/photo.png'

export default function EvervaultImage() {
  return (
    <div className='border-primary mt-6 h-[27rem] w-[400px] cursor-crosshair border-b border-t'>
      <EvervaultCard img={img} />
    </div>
  )
}
