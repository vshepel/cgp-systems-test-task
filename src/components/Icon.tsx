import type { IIcon } from '@/type/Icon'

import sprite from '/sprite.svg'

interface Props {
  icon: IIcon
  size?: number
  color?: string
}

function Icon({ icon, size = 25, color = 'text-current' }: Props) {
  return (
    <svg aria-hidden="true" className={`${color} block`} height={size} width={size}>
      <use xlinkHref={`${sprite}#${icon}`}></use>
    </svg>
  )
}

export default Icon
