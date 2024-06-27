import { editorSliceReducer } from '@/store/editorSlice.ts'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    editor: editorSliceReducer,
  },
})
