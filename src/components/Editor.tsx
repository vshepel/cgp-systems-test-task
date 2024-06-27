import EditorList from '@/components/EditorList.tsx'
import Preview from '@/components/Preview.tsx'
import { getTools } from '@/store/editorSlice.ts'
import { useSelector } from 'react-redux'

function Editor() {
  const tools = useSelector(getTools)

  return (
    <>
      <EditorList tools={tools} />
      <Preview tools={tools} />
    </>
  )
}

export default Editor
