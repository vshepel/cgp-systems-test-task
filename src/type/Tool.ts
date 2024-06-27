import type { IIcon } from '@/type/Icon'

export interface ITool {
  id: string
  icon: IIcon
  title: string
  type: 'headline' | 'paragraph' | 'button' | 'image'
  value?: string
}
