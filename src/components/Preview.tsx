import type { ITool } from '@/type/Tool.ts'

import Button from '@/components/Previews/Button.tsx'
import Headline from '@/components/Previews/Headline.tsx'
import Image from '@/components/Previews/Image.tsx'
import Paragraph from '@/components/Previews/Paragraph.tsx'

interface Props {
  tools: ITool[]
}

interface PreviewItemProps {
  type: ITool['type']
  value?: string
}

const PreviewItem = ({ type, value }: PreviewItemProps) => {
  switch (type) {
    case 'headline':
      return <Headline value={value} />
    case 'paragraph':
      return <Paragraph value={value} />
    case 'image':
      return <Image value={value} />
    case 'button':
      return <Button value={value} />
    default:
      return undefined
  }
}

function Preview({ tools }: Props) {
  return (
    <section className="overflow-auto p-[30px]">
      <div className="mx-auto grid max-w-[540px] gap-[30px] text-center">
        {tools.map(props => (
          <PreviewItem {...props} key={props.id} />
        ))}
      </div>
    </section>
  )
}

export default Preview
