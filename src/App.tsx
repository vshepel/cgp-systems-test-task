import type { ITool } from '@/type/Tool.ts'

import Editor from '@/components/Editor.tsx'
import Header from '@/components/Header.tsx'
import Tools from '@/components/Tools.tsx'

const tools: ITool[] = [
  {
    id: 1,
    icon: 'headline',
    title: 'Headline',
    defaultValue: 'Headline default value',
    type: 'headline',
  },
  {
    id: 2,
    icon: 'text-align-left',
    title: 'Paragraph',
    defaultValue: 'Prompt your customer to revisit your store by showing them the products they left behind.',
    type: 'paragraph',
  },
  {
    id: 3,
    icon: 'image',
    title: 'Button',
    defaultValue: 'Example button',
    type: 'button',
  },
  {
    id: 4,
    icon: 'image',
    title: 'Image',
    defaultValue: 'https://picsum.photos/600',
    type: 'image',
  },
]

function App() {
  return (
    <>
      <Header />
      <main className="grid grow grid-cols-[100px_1fr] overflow-hidden md:grid-cols-[100px_1fr_1fr] lg:grid-cols-[270px_538px_1fr]">
        <Tools tools={tools} />
        <Editor />
      </main>
    </>
  )
}

export default App
