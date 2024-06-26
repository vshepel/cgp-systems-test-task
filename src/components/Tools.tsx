import type { ITool } from '@/type/Tool.ts'

import Tool from '@/components/Tool.tsx'

interface Props {
  tools: ITool[]
}

function Tools({ tools }: Props) {
  return (
    <aside className="row-span-2 grid content-start gap-2.5 overflow-auto border-r border-r-gray-300 p-2.5 md:row-auto lg:grid-cols-2 lg:p-[30px]">
      {tools.map(tool => <Tool key={tool.id} tool={tool} />)}
    </aside>
  )
}

export default Tools
