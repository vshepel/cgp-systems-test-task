import type { ITool } from '@/type/Tool.ts'
import type { ChangeEvent } from 'react'

import Icon from '@/components/Icon.tsx'

interface Props {
  tool: ITool
  isSelected?: boolean
  onSelect?: (id: ITool['id']) => void
  onChange?: (id: ITool['id'], value: string) => void
  onMoveUp?: (id: ITool['id']) => void
  onMoveDown?: (id: ITool['id']) => void
  onClone?: (id: ITool['id']) => void
  onRemove?: (id: ITool['id']) => void
}

function EditorItem({
  tool,
  isSelected,
  onSelect = () => {},
  onChange = () => {},
  onMoveUp = () => {},
  onMoveDown = () => {},
  onClone = () => {},
  onRemove = () => {},
}: Props) {
  const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value

    if (!url)
      return onChange(tool.id, '')

    const img = new Image()

    img.src = url
    img.onload = () => onChange(tool.id, url)
  }

  const renderInput = (type: ITool['type']) => {
    switch (type) {
      case 'paragraph':
        return (
          <textarea
            className="m-0 w-full rounded-sm border border-gray-300 p-1 text-[11px] leading-normal outline-0"
            defaultValue={tool.value}
            onChange={e => onChange(tool.id, e.target.value)}
            rows={4}
          />
        )
      case 'image':
        return (
          <input
            className="w-full rounded-sm border border-gray-300 p-1 text-[11px] leading-normal outline-0"
            defaultValue={tool.value}
            onChange={handleChangeImage}
            type="text"
          />
        )
      default:
        return (
          <input
            className="w-full rounded-sm border border-gray-300 p-1 text-[11px] leading-normal outline-0"
            defaultValue={tool.value}
            onChange={e => onChange(tool.id, e.target.value)}
            type="text"
          />
        )
    }
  }

  return (
    <div
      className={`relative rounded-md ring-blue-200 hover:ring-2 ${isSelected ? 'bg-blue-500 !ring-0' : 'bg-white'}`}
    >
      {isSelected && (
        <div className="absolute bottom-full right-2.5 flex gap-[5px]">
          <div className="flex gap-[5px] rounded-t-[3px] bg-blue p-[3px]">
            <button className="rounded-sm p-[3px] hover:bg-blue-300" onClick={() => onMoveDown(tool.id)}>
              <Icon color="text-white" icon="arrow-bottom" size={15} />
            </button>
            <button className="rounded-sm p-[3px] hover:bg-blue-300" onClick={() => onMoveUp(tool.id)}>
              <Icon color="text-white" icon="arrow-top" size={15} />
            </button>
          </div>
          <div className="flex gap-[5px] rounded-t-[3px] bg-cyan p-[3px]" onClick={() => onClone(tool.id)}>
            <button className="rounded-sm p-[3px] hover:bg-cyan-100">
              <Icon color="text-white" icon="copy" size={15} />
            </button>
            <button className="rounded-sm p-[3px] hover:bg-cyan-100" onClick={() => onRemove(tool.id)}>
              <Icon color="text-white" icon="trash" size={15} />
            </button>
          </div>
        </div>
      )}
      <div className="flex cursor-pointer flex-col items-center px-2.5 py-[15px] text-center" onClick={() => onSelect(tool.id)}>
        <Icon color="text-blue-200" icon={tool.icon} />
        <span className="mt-2.5 text-xs">{tool.title}</span>
        {isSelected && (
          <div className="mt-2.5 flex w-full rounded-sm bg-white p-[5px]">
            {renderInput(tool.type)}
          </div>
        )}
      </div>
    </div>
  )
}

export default EditorItem
