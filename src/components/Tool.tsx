import type { ITool } from '@/type/Tool.ts'
import type { DragEvent } from 'react'

import Icon from '@/components/Icon.tsx'
import { add } from '@/store/editorSlice.ts'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

interface Props {
  tool: ITool
}

function Tool({ tool }: Props) {
  const [isDragged, setIsDragged] = useState(false)
  const dispatch = useDispatch()

  const handleAddTool = () => {
    dispatch(add(tool))
  }

  const handleDragStart = (e: DragEvent<HTMLButtonElement>) => {
    setIsDragged(true)
    e.dataTransfer.setData('tool', JSON.stringify(tool))
  }

  const handleDragEnd = () => {
    setIsDragged(false)
  }

  return (
    <button
      className={`flex flex-col items-center rounded-md bg-blue-100 px-2.5 py-3.5 text-center ring-blue-200 hover:ring-2 ${isDragged && 'opacity-50 !ring-0'}`}
      onClick={() => handleAddTool()}
      onDragEnd={() => handleDragEnd()}
      onDragStart={handleDragStart}
      draggable
    >
      <Icon color="text-blue-200" icon={tool.icon} />
      <span className="mt-2.5 text-xs">{tool.title}</span>
    </button>
  )
}

export default Tool
