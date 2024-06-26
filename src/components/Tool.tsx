import type { ITool } from '@/type/Tool.ts'

import Icon from '@/components/Icon.tsx'

interface Props {
  tool: ITool
}

function Tool({ tool }: Props) {
  return (
    <button className="flex flex-col items-center rounded-md bg-blue-100 px-2.5 py-3.5 text-center ring-blue-200 hover:ring-2">
      <Icon color="text-blue-200" icon={tool.icon} />
      <span className="mt-2.5 text-xs">{tool.title}</span>
    </button>
  )
}

export default Tool
