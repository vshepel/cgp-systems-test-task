import type { ITool } from '@/type/Tool.ts'

import EditorItem from '@/components/EditorItem.tsx'
import Preview from '@/components/Preview.tsx'

const selected: ITool[] = [
  {
    id: 4,
    icon: 'image',
    title: 'Image',
    defaultValue: 'https://picsum.photos/600',
    type: 'image',
  },
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
    defaultValue: 'Register now',
    type: 'button',
  },
]

function Editor() {
  return (
    <>
      <section className="grid content-start gap-[15px] overflow-auto bg-gray-100 px-[30px] py-[25px]">
        {selected.map(tool => <EditorItem isSelected={tool.id === 3} key={tool.id} tool={tool} />)}
      </section>
      <Preview />
    </>
  )
}

export default Editor
