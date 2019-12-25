import React from 'react'
import { normal } from '../../theme'

interface Props {
  type: string
  mode?: 'line' | 'fill'
  className?: string
  style?: React.CSSProperties
}

// https://remixicon.com
export const Icon = (props: Props): React.ReactElement => {
  const {
    type = '',
    mode = 'line',
    className = '',
    style = {
      color: normal.icon.color
    }
  } = props

  return <i className={`ri-${type}-${mode} ${className}`} style={style} />
}
