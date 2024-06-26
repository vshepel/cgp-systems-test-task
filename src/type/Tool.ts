import type { IIcon } from '@/type/Icon'

export interface ITool {
  id: number
  icon: IIcon
  title: string
  defaultValue?: string
  type: 'headline' | 'paragraph' | 'button' | 'image'
}
