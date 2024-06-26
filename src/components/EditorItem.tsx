import type { ITool } from '@/type/Tool.ts'

import Icon from '@/components/Icon.tsx'

interface Props {
  tool: ITool
  isSelected?: boolean
}

function EditorItem({ tool, isSelected }: Props) {
  return (
    <div className={`relative flex cursor-pointer flex-col items-center rounded-md px-2.5 py-[15px] text-center ring-blue-200 hover:ring-2 ${isSelected ? 'bg-blue-500 !ring-0' : 'bg-white'}`}>
      <Icon color="text-blue-200" icon={tool.icon} />
      <span className="mt-2.5 text-xs">{tool.title}</span>
      {isSelected && (
        <>
          <div className="absolute bottom-full right-2.5 flex gap-[5px]">
            <div className="flex gap-[5px] rounded-t-[3px] bg-blue p-[3px]">
              <button className="rounded-sm p-[3px] hover:bg-blue-300">
                <Icon color="text-white" icon="arrow-bottom" size={15} />
              </button>
              <button className="rounded-sm p-[3px] hover:bg-blue-300">
                <Icon color="text-white" icon="arrow-top" size={15} />
              </button>
            </div>
            <div className="flex gap-[5px] rounded-t-[3px] bg-cyan p-[3px]">
              <button className="rounded-sm p-[3px] hover:bg-cyan-100">
                <Icon color="text-white" icon="copy" size={15} />
              </button>
              <button className="rounded-sm p-[3px] hover:bg-cyan-100">
                <Icon color="text-white" icon="trash" size={15} />
              </button>
            </div>
          </div>
          <div className="mt-2.5 w-full rounded-sm bg-white p-[5px]">
            <input
              className="w-full rounded-sm border border-gray-300 p-1 text-[11px] leading-normal outline-0"
              defaultValue={tool.defaultValue}
              type="text"
            />
          </div>
        </>
      )}
    </div>
  )
}

export default EditorItem
