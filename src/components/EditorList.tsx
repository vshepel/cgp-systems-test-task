import type { ITool } from '@/type/Tool.ts'
import type { DragEvent } from 'react'

import EditorItem from '@/components/EditorItem.tsx'
import { add, change, clone, getSelectedId, moveTo, remove, select } from '@/store/editorSlice.ts'
import { useDispatch, useSelector } from 'react-redux'

interface Props {
  tools: ITool[]
}

function EditorList({ tools }: Props) {
  const selectedId = useSelector(getSelectedId)
  const dispatch = useDispatch()

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }
  const handleDrop = (e: DragEvent<HTMLElement>) => {
    e.preventDefault()

    const tool = JSON.parse(e.dataTransfer.getData('tool'))

    dispatch(add(tool))
  }

  const handleSelectTool = (id: ITool['id']) => {
    dispatch(select(id))
  }

  const handleChangeTool = (id: ITool['id'], value: string) => {
    dispatch(change({ id, value }))
  }

  const handleCloneTool = (id: ITool['id']) => {
    dispatch(clone(id))
  }

  const handleMoveToTool = (id: ITool['id'], to: number) => {
    dispatch(moveTo({ id, to }))
  }

  const handleRemoveTool = (id: ITool['id']) => {
    dispatch(remove(id))
  }

  return (
    <section
      className="grid content-start gap-[15px] overflow-auto bg-gray-100 px-[30px] py-[25px]"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {tools.map((tool, index) => (
        <EditorItem
          isSelected={tool.id === selectedId}
          key={tool.id}
          onChange={handleChangeTool}
          onClone={handleCloneTool}
          onMoveDown={id => handleMoveToTool(id, index + 1)}
          onMoveUp={id => handleMoveToTool(id, index - 1)}
          onRemove={handleRemoveTool}
          onSelect={handleSelectTool}
          tool={tool}
        />
      ))}
    </section>
  )
}

export default EditorList
