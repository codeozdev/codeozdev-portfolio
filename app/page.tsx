import HeroComponent from '@/components/hero/hero'
import PaddinContainer from '@/components/layout/padding-container'
import { TabsDemo } from '@/components/project/project-list'
import SkillList from '@/components/skills/skill-list'

export default function Home() {
  return (
    <main>
      <HeroComponent />
      <PaddinContainer>
        <SkillList />
        <TabsDemo />
      </PaddinContainer>
    </main>
  )
}
