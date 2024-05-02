import { backend, extra, frontend, style } from '@/types/skilldb'
import SkillItem from './skill-item'

export default function SkillList() {
  return (
    <div className='w-full text-center xl:text-start' id='skill'>
      <div className='flex flex-col'>
        <h2>My Skills</h2>
        {/* FRONTEND */}
        <SkillItem name='FRONTEND' items={frontend} />

        {/* STYLE */}
        <SkillItem name='STYLING' items={style} />

        {/* BACKEND */}
        <SkillItem name='BACKEND' items={backend} />

        {/* EXTRA */}
        <SkillItem name='EXTRA' items={extra} />
      </div>
    </div>
  )
}
