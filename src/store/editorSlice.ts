import type { RootState } from '@/store/index.ts'
import type { ITool } from '@/type/Tool.ts'
import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

export interface EditorState {
  tools: ITool[]
  selectedId?: ITool['id']
}

const initialState: EditorState = {
  tools: [
    {
      id: crypto.randomUUID(),
      icon: 'image',
      title: 'Image',
      value: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      type: 'image',
    },
    {
      id: crypto.randomUUID(),
      icon: 'headline',
      title: 'Headline',
      value: 'A legendary cap set that feels like new',
      type: 'headline',
    },
    {
      id: crypto.randomUUID(),
      icon: 'text-align-left',
      title: 'Paragraph',
      value: 'Prompt your customer to revisit your store by showing them the products they left behind. Consider offering them a coupon code to close the deal. \nUsing the "Insert" panel on the right, drag and drop \nthe Abandoned Cart element onto the page below.',
      type: 'paragraph',
    },
    {
      id: crypto.randomUUID(),
      icon: 'image',
      title: 'Button',
      value: 'Register now',
      type: 'button',
    },
  ],
}

const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ITool>) => {
      state.tools.push({
        ...action.payload,
        id: crypto.randomUUID(),
      })
    },
    remove: (state, action: PayloadAction<ITool['id']>) => {
      state.tools = state.tools.filter(tool => tool.id !== action.payload)
    },
    clone: (state, action: PayloadAction<ITool['id']>) => {
      const tool = state.tools.find(tool => tool.id === action.payload)

      if (!tool)
        return

      const id = crypto.randomUUID()

      state.tools.push({
        ...tool,
        id,
      })

      state.selectedId = id
    },
    change: (state, action: PayloadAction<{ id: ITool['id'], value: string }>) => {
      const tool = state.tools.find(tool => tool.id === action.payload.id)

      if (!tool)
        return

      tool.value = action.payload.value
    },
    moveTo: (state, action: PayloadAction<{ id: ITool['id'], to: number }>) => {
      const fromIndex = state.tools.findIndex(tool => tool.id === action.payload.id)

      if (fromIndex < 0)
        return

      const toIndex = action.payload.to

      if (toIndex < 0 || toIndex > state.tools.length - 1)
        return

      const itemRemoved = state.tools.splice(fromIndex, 1)

      state.tools.splice(toIndex, 0, itemRemoved[0])
    },
    select: (state, action: PayloadAction<EditorState['selectedId']>) => {
      state.selectedId = action.payload
    },
  },
})

export const {
  add,
  remove,
  clone,
  change,
  moveTo,
  select,
} = editorSlice.actions

export const getTools = (state: RootState) => state.editor.tools
export const getSelectedId = (state: RootState) => state.editor.selectedId

export const editorSliceReducer = editorSlice.reducer
